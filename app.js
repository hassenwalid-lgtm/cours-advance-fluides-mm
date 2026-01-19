
/* Core application logic for the interactive course (no external dependencies). */

(function () {
  "use strict";

  const data = window.COURSE_DATA;
  if (!data) {
    console.error("COURSE_DATA not found.");
    return;
  }

  const state = {
    sections: data.sections || [],
    currentIndex: 0,
  };

  const els = {
    toc: document.getElementById("toc"),
    tocToggle: document.getElementById("tocToggle"),
    tocOverlay: document.getElementById("tocOverlay"),
    // Main scroll container (we keep body non-scrollable to have 2 independent scrollbars).
    main: document.querySelector("main.main"),
    content: document.getElementById("content"),
    pageTitle: document.getElementById("pageTitle"),
    pageMeta: document.getElementById("pageMeta"),
    prevBtn: document.getElementById("prevBtn"),
    nextBtn: document.getElementById("nextBtn"),
    progress: document.getElementById("progress"),
  };

  // ---------- Utilities ----------
  function byId(id) {
    return document.getElementById(id);
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function scrollToTop() {
    // Requirement: whenever we navigate, open the page at the very top.
    const scroller = els.main || document.scrollingElement;
    if (scroller && typeof scroller.scrollTo === "function") {
      scroller.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }

  function setHash(sectionId) {
    // Keep navigation shareable/bookmarkable.
    if (location.hash !== "#" + sectionId) {
      history.replaceState(null, "", "#" + sectionId);
    }
  }

  function saveProgress(sectionId) {
    try {
      localStorage.setItem("afm_course_last_section", sectionId);
    } catch (_) {}
  }

  function loadProgress() {
    try {
      return localStorage.getItem("afm_course_last_section");
    } catch (_) {
      return null;
    }
  }

  function findIndexById(sectionId) {
    return state.sections.findIndex((s) => s.id === sectionId);
  }

  // ---------- TOC ----------
  function buildTOC() {
    // Group sections by chapter label.
    const chapters = [];
    const map = new Map();

    for (const s of state.sections) {
      const ch = s.chapter || "Course";
      if (!map.has(ch)) {
        map.set(ch, { chapter: ch, items: [] });
        chapters.push(map.get(ch));
      }
      map.get(ch).items.push(s);
    }

    const tocHtml = [];
    tocHtml.push(`<div class="tocHeader">
      <div class="tocTitle">${escapeHtml(data.title)}</div>
      <div class="tocSubtitle">${escapeHtml(data.subtitle || "")}</div>
    </div>`);

    tocHtml.push(`<nav class="tocNav" aria-label="Table of contents">`);

    chapters.forEach((chObj, chIdx) => {
      const chId = "toc-ch-" + chIdx;
      tocHtml.push(`
        <details class="tocChapter" open>
          <summary id="${chId}">${escapeHtml(chObj.chapter)}</summary>
          <ul>
            ${chObj.items
              .map((s) => {
                const isQuiz = s.type === "quiz";
                return `
                  <li>
                    <a href="#${encodeURIComponent(s.id)}" data-section="${escapeHtml(s.id)}" class="tocLink">
                      <span class="tocLinkTitle">${escapeHtml(s.title)}</span>
                      ${isQuiz ? `<span class="badge">Quiz</span>` : ``}
                    </a>
                  </li>`;
              })
              .join("")}
          </ul>
        </details>
      `);
    });

    tocHtml.push(`</nav>`);

    els.toc.innerHTML = tocHtml.join("");

    // Intercept clicks to render without full page reload.
    els.toc.querySelectorAll("a[data-section]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = a.getAttribute("data-section");
        const idx = findIndexById(sectionId);
        if (idx >= 0) {
          renderSection(idx);
          closeTOC();
        }
      });
    });
  }

  function highlightTOC(sectionId) {
    els.toc.querySelectorAll(".tocLink").forEach((a) => {
      const id = a.getAttribute("data-section");
      a.classList.toggle("active", id === sectionId);
    });
  }

  // ---------- Responsive TOC ----------
  function openTOC() {
    document.body.classList.add("tocOpen");
  }

  function closeTOC() {
    document.body.classList.remove("tocOpen");
  }

  if (els.tocToggle && els.tocOverlay) {
    els.tocToggle.addEventListener("click", () => {
      if (document.body.classList.contains("tocOpen")) closeTOC();
      else openTOC();
    });
    els.tocOverlay.addEventListener("click", closeTOC);
  }

  // ---------- Navigation ----------
  function updateNavButtons() {
    const atStart = state.currentIndex <= 0;
    const atEnd = state.currentIndex >= state.sections.length - 1;

    els.prevBtn.disabled = atStart;
    els.nextBtn.disabled = atEnd;

    els.prevBtn.setAttribute("aria-disabled", String(atStart));
    els.nextBtn.setAttribute("aria-disabled", String(atEnd));

    const progressPct =
      state.sections.length > 1
        ? Math.round((state.currentIndex / (state.sections.length - 1)) * 100)
        : 0;

    if (els.progress) {
      els.progress.style.width = progressPct + "%";
      els.progress.setAttribute("aria-valuenow", String(progressPct));
    }
  }

  function renderSection(index) {
    const s = state.sections[index];
    if (!s) return;

    state.currentIndex = index;

    // Meta header
    els.pageTitle.textContent = s.title;
    els.pageMeta.textContent = s.chapter || "";

    // Content
    els.content.innerHTML = `
      <article class="lesson">
        <header class="lessonHeader">
          <div class="kicker">${escapeHtml(s.chapter || "")}</div>
          <h1>${escapeHtml(s.title)}</h1>
        </header>
        <div class="lessonBody">
          ${s.content || ""}
        </div>
      </article>
    `;

    // Quizzes
    if (s.type === "quiz" && s.quizKey) {
      const container = els.content.querySelector("#quiz-container");
      if (container) {
        renderQuiz(container, s.quizKey);
      }
    }

    updateNavButtons();
    highlightTOC(s.id);
    setHash(s.id);
    saveProgress(s.id);
    scrollToTop();
  }

  els.prevBtn.addEventListener("click", () => {
    if (state.currentIndex > 0) renderSection(state.currentIndex - 1);
  });

  els.nextBtn.addEventListener("click", () => {
    if (state.currentIndex < state.sections.length - 1) renderSection(state.currentIndex + 1);
  });

  // ---------- Quiz rendering ----------
  function quizStorageKey(quizKey) {
    return "afm_quiz_result_" + quizKey;
  }

  function loadQuizResult(quizKey) {
    try {
      const raw = localStorage.getItem(quizStorageKey(quizKey));
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function saveQuizResult(quizKey, result) {
    try {
      localStorage.setItem(quizStorageKey(quizKey), JSON.stringify(result));
    } catch (_) {}
  }

  function clearQuizResult(quizKey) {
    try {
      localStorage.removeItem(quizStorageKey(quizKey));
    } catch (_) {}
  }

  function renderQuiz(container, quizKey) {
    const quiz = (data.quizzes || {})[quizKey];
    if (!quiz) {
      container.innerHTML = `<p class="error">Quiz data not found: ${escapeHtml(quizKey)}</p>`;
      return;
    }

    const previous = loadQuizResult(quizKey);

    const questions = quiz.questions || [];
    const quizId = "quiz-" + quizKey;

    const html = [];
    html.push(`<section class="quiz" id="${quizId}">
      <div class="quizHeader">
        <h2>${escapeHtml(quiz.title || "Quiz")}</h2>
        <p class="muted">Questions: ${questions.length}. Your latest attempt is saved locally in your browser.</p>
      </div>
    `);

    if (previous && typeof previous.scorePct === "number") {
      html.push(`
        <div class="callout">
          <strong>Saved attempt:</strong> ${previous.correct}/${previous.total} correct (${previous.scorePct}%).
          <span class="muted">You can reattempt to improve your score.</span>
        </div>
      `);
    }

    html.push(`<form class="quizForm" data-quiz="${escapeHtml(quizKey)}">`);

    questions.forEach((qq, idx) => {
      const qId = `${quizId}-q${idx}`;
      html.push(`<fieldset class="questionCard" id="${qId}">
        <legend><span class="qNum">Q${idx + 1}</span> ${escapeHtml(qq.q)}</legend>
        <div class="options">`);

      (qq.options || []).forEach((opt, optIdx) => {
        const inputId = `${qId}-opt${optIdx}`;
        html.push(`
          <label class="option">
            <input type="radio" name="q${idx}" id="${inputId}" value="${optIdx}">
            <span>${escapeHtml(opt)}</span>
          </label>
        `);
      });

      html.push(`</div>
        <div class="explanation" aria-live="polite"></div>
      </fieldset>`);
    });

    html.push(`
      <div class="quizActions">
        <button type="button" class="btn primary" data-action="check">Check answers</button>
        <button type="button" class="btn" data-action="reset">Reset quiz</button>
        <div class="scoreBox" aria-live="polite"></div>
      </div>
    `);

    html.push(`</form></section>`);

    container.innerHTML = html.join("");

    const form = container.querySelector("form.quizForm");
    const scoreBox = container.querySelector(".scoreBox");
    const checkBtn = container.querySelector('button[data-action="check"]');
    const resetBtn = container.querySelector('button[data-action="reset"]');

    function getSelected() {
      const answers = [];
      questions.forEach((_, idx) => {
        const chosen = form.querySelector(`input[name="q${idx}"]:checked`);
        answers.push(chosen ? Number(chosen.value) : null);
      });
      return answers;
    }

    function disableInputs(disabled) {
      form.querySelectorAll("input[type=radio]").forEach((inp) => {
        inp.disabled = disabled;
      });
    }

    function showResult(result) {
      // Apply UI markers per question
      questions.forEach((qq, idx) => {
        const card = form.querySelector(`#${quizId}-q${idx}`);
        const explanationEl = card.querySelector(".explanation");
        const selected = result.selected[idx];
        const correct = qq.answer;

        card.classList.remove("correct", "incorrect", "unanswered");

        if (selected === null) {
          card.classList.add("unanswered");
          explanationEl.innerHTML = `<div class="explainLine"><strong>Not answered.</strong> Correct answer: <span class="answer">${escapeHtml(qq.options[correct])}</span></div>
          <div class="explainLine muted">${escapeHtml(qq.explanation || "")}</div>`;
          return;
        }

        const isCorrect = selected === correct;
        card.classList.add(isCorrect ? "correct" : "incorrect");

        explanationEl.innerHTML = `
          <div class="explainLine">
            ${isCorrect ? `<strong>Correct.</strong>` : `<strong>Incorrect.</strong>`}
            Correct answer: <span class="answer">${escapeHtml(qq.options[correct])}</span>
          </div>
          <div class="explainLine muted">${escapeHtml(qq.explanation || "")}</div>
        `;
      });

      scoreBox.innerHTML = `
        <div class="score">
          <strong>Score:</strong> ${result.correct}/${result.total} (${result.scorePct}%)
        </div>
      `;
    }

    checkBtn.addEventListener("click", () => {
      const selected = getSelected();
      let correct = 0;
      for (let i = 0; i < questions.length; i++) {
        if (selected[i] !== null && selected[i] === questions[i].answer) correct++;
      }
      const total = questions.length;
      const scorePct = Math.round((correct / total) * 100);

      const result = {
        selected,
        correct,
        total,
        scorePct,
        timestamp: new Date().toISOString(),
      };

      saveQuizResult(quizKey, result);
      disableInputs(true);
      showResult(result);
      scrollToTop(); // also jump to top after grading to match “open at top” behavior
    });

    resetBtn.addEventListener("click", () => {
      // Clear selections & saved result.
      form.querySelectorAll("input[type=radio]").forEach((inp) => {
        inp.checked = false;
        inp.disabled = false;
      });
      form.querySelectorAll(".questionCard").forEach((card) => {
        card.classList.remove("correct", "incorrect", "unanswered");
        const exp = card.querySelector(".explanation");
        if (exp) exp.innerHTML = "";
      });
      if (scoreBox) scoreBox.innerHTML = "";
      clearQuizResult(quizKey);
      scrollToTop();
    });

    // If we have a saved result, render it but keep quiz reattempt-friendly (do not lock inputs).
    if (previous && previous.selected && Array.isArray(previous.selected)) {
      // Restore selections
      questions.forEach((_, idx) => {
        const v = previous.selected[idx];
        if (v === null || typeof v !== "number") return;
        const inp = form.querySelector(`input[name="q${idx}"][value="${v}"]`);
        if (inp) inp.checked = true;
      });
    }
  }

  // ---------- Startup ----------
  function initialSectionId() {
    const hash = decodeURIComponent(location.hash || "").replace(/^#/, "");
    if (hash) return hash;
    // Always start at the Welcome section when opening index.html directly.
    // Deep links (index.html#some-section) are still respected via the hash check above.
    const welcome = findIndexById("welcome") >= 0 ? "welcome" : (state.sections[0] ? state.sections[0].id : "");
    return welcome;
  }

  function start() {
    buildTOC();

    const startId = initialSectionId();
    const idx = findIndexById(startId);
    renderSection(idx >= 0 ? idx : 0);

    // Allow direct hash navigation
    window.addEventListener("hashchange", () => {
      const id = decodeURIComponent(location.hash || "").replace(/^#/, "");
      if (!id) return;
      const i = findIndexById(id);
      if (i >= 0 && i !== state.currentIndex) renderSection(i);
    });
  }

  start();
})();
