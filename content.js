/* Auto-generated course content */
const COURSE_DATA = {
  "title": "Advanced Fluid Mechanics — Interactive Master-Level Course",
  "subtitle": "Walid HASSEN    REMENA Master program.",
  "sections": [
    {
      "id": "welcome",
      "chapter": "Introduction",
      "title": "Welcome, course map, and how to use this site",
      "content": "\n        <p class=\"lead\">\n          This course is a <strong>master-level</strong> refresher and deep dive into key topics in fluid mechanics,\n          pump installation & sizing, and introductory aerodynamics (drag and lift).\n        </p>\n\n        <figure>\n          <img src=\"images/cover_day01.png\" alt=\"Course cover slide: Advanced Fluid Mechanics\">\n          <figcaption>Course material overview.</figcaption>\n        </figure>\n\n        <h2>How navigation works</h2>\n        <ul>\n          <li>Use the <strong>Table of Contents</strong> on the left to jump to any lesson.</li>\n          <li>Use the <strong>Previous</strong> and <strong>Next</strong> buttons at the bottom to move sequentially.</li>\n          <li>Whenever you navigate (TOC, Previous, Next), the page automatically opens at the <strong>top</strong>.</li>\n        </ul>\n\n        <h2>Learning outcomes</h2>\n        <ul>\n          <li>Use conservation laws (mass and energy) to model internal flows.</li>\n          <li>Compute pressure fields in static fluids and analyze manometers.</li>\n          <li>Apply the generalized Bernoulli equation including pumps, turbines, and losses.</li>\n          <li>Estimate head losses in pipe networks (major and minor losses).</li>\n          <li>Understand pump installation constraints, cavitation, and NPSH.</li>\n          <li>Use pump curves and affinity laws for selection and scaling.</li>\n          <li>Explain drag vs lift mechanisms and apply aerodynamic coefficients.</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Note:</strong> Throughout the lessons, pay attention to <em>assumptions</em>\n          (steady vs unsteady, incompressible vs compressible, inviscid vs viscous). Most mistakes in engineering\n          calculations come from applying a correct equation outside its validity domain.\n        </div>\n        "
    },
    {
      "id": "ch1-fluids-vs-solids",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "1. Fluids vs solids: constitutive behavior and shear response",
      "content": "\n        <p>\n          The operational difference between a <strong>fluid</strong> and a <strong>solid</strong> is how each material responds\n          to a <strong>shear stress</strong> &tau;.\n        </p>\n\n        <figure>\n          <img src=\"images/ch1_fluids_vs_solids.png\" alt=\"Solid, liquid, gas schematic showing particle arrangement\">\n          <figcaption>Solids, liquids and gases differ in structure and deformation response.</figcaption>\n        </figure>\n\n        <h2>Key idea: sustained shear</h2>\n        <ul>\n          <li><strong>Solid:</strong> a constant shear stress leads to a <em>finite</em> deformation (shear strain &gamma;). In linear elasticity: &tau; = G &gamma;.</li>\n          <li><strong>Fluid:</strong> a constant shear stress leads to a <em>continuous</em> deformation rate (shear rate &dot;&gamma;). For a Newtonian fluid: &tau; = &mu; &dot;&gamma;.</li>\n        </ul>\n\n        <h2>Newtonian vs non-Newtonian (advanced context)</h2>\n        <p>\n          Many industrial fluids are non-Newtonian: the effective viscosity depends on shear rate\n          (shear-thinning paints, polymer melts) or exhibits a yield stress (Bingham plastics, toothpaste).\n          In this course, most formulas assume <strong>Newtonian behavior</strong>, unless stated otherwise.\n        </p>\n\n        <h2>Continuum hypothesis</h2>\n        <p>\n          Fluid mechanics is usually written in terms of fields (pressure p(x,t), velocity u(x,t), density &rho;(x,t)).\n          This requires a separation of scales: the representative volume must contain many molecules yet remain\n          small compared to the geometry. At extremely small scales (micro/nano), rarefaction effects may invalidate\n          continuum assumptions.\n        </p>\n\n        <div class=\"callout\">\n          <strong>Checkpoint:</strong> If a material flows only after a critical stress is exceeded, it is still\n          treated as a fluid in many engineering models (e.g., Bingham or Herschel–Bulkley models), but the\n          governing equations must include the yield criterion.\n        </div>\n        "
    },
    {
      "id": "ch1-flow-rate",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "2. Flow rate and the continuity equation",
      "content": "\n        <p>\n          Flow rate is a macroscopic measure of transport. Two forms are common:\n        </p>\n\n        <ul>\n          <li><strong>Volumetric flow rate</strong> Q<sub>v</sub> [m<sup>3</sup>/s]</li>\n          <li><strong>Mass flow rate</strong> Q<sub>m</sub> [kg/s]</li>\n        </ul>\n\n        <figure>\n          <img src=\"images/ch1_flow_rate.png\" alt=\"Flow rate definition using cross-section area and velocity\">\n          <figcaption>Volumetric flow rate relates velocity and cross-sectional area.</figcaption>\n        </figure>\n\n        <h2>Definitions</h2>\n        <p>\n          For a cross-section A with velocity field u, the exact definition is:\n        </p>\n        <pre class=\"equation\">Qv = ∬_A (u · n) dA</pre>\n        <p>\n          If the velocity profile is approximated by an average velocity U:\n        </p>\n        <pre class=\"equation\">Qv ≈ U A</pre>\n        <p>\n          Mass flow rate is:\n        </p>\n        <pre class=\"equation\">Qm = ρ Qv</pre>\n\n        <h2>Continuity (mass conservation)</h2>\n        <p>\n          In steady one-dimensional flow through two sections (1) and (2):\n        </p>\n        <pre class=\"equation\">ρ₁ U₁ A₁ = ρ₂ U₂ A₂</pre>\n\n        <figure>\n          <img src=\"images/ch1_flow_conservation.png\" alt=\"Continuity in a pipe with changing cross-section\">\n          <figcaption>Continuity across a changing area: velocity increases when area decreases.</figcaption>\n        </figure>\n\n        <h2>Practical notes (master-level)</h2>\n        <ul>\n          <li><strong>Incompressible assumption:</strong> for liquids, density variations are often negligible, so ρ is treated as constant.</li>\n          <li><strong>Compressible flows:</strong> for gases, ρ may vary strongly with pressure and temperature; then the full compressible form is required.</li>\n          <li><strong>Control-volume thinking:</strong> continuity is easiest when written over a control volume with well-defined inlets/outlets.</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Common pitfall:</strong> Using Qv = U A with U taken at the pipe centerline (maximum) rather than the cross-sectional average. For laminar pipe flow, U<sub>max</sub> = 2U<sub>avg</sub>.\n        </div>\n        "
    },
    {
      "id": "ch1-vapor-pressure",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "3. Vapor pressure and why it matters",
      "content": "\n        <p>\n          The <strong>vapor pressure</strong> p<sub>vap</sub>(T) is the saturation pressure of a liquid at temperature T.\n          If the local static pressure drops below p<sub>vap</sub>, the liquid can partially vaporize, generating bubbles.\n        </p>\n\n        <figure>\n          <img src=\"images/ch1_vapor_pressure.png\" alt=\"Vapor pressure definition with liquid-vapor equilibrium diagram\">\n          <figcaption>Vapor pressure increases strongly with temperature.</figcaption>\n        </figure>\n\n        <h2>Cavitation link</h2>\n        <p>\n          In pumps and fast flows, pressure can drop in regions of high velocity or at the impeller eye.\n          If p &lt; p<sub>vap</sub>, vapor bubbles form and then collapse when pressure recovers.\n          Bubble collapse creates shock waves and can lead to:\n        </p>\n        <ul>\n          <li>noise and vibration</li>\n          <li>pitting/erosion of metal surfaces</li>\n          <li>loss of head and severe performance degradation</li>\n        </ul>\n\n        <h2>Engineering implications</h2>\n        <ul>\n          <li>Higher temperature → higher p<sub>vap</sub> → cavitation becomes more likely.</li>\n          <li>Reducing suction losses (shorter/wider suction pipe, fewer fittings) increases pressure at the pump inlet.</li>\n          <li>Pressurizing the suction tank or lowering pump elevation can improve cavitation margin.</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Checkpoint:</strong> Vapor pressure is a <em>property of the fluid</em> at a given temperature, not a property of the pump.\n        </div>\n        "
    },
    {
      "id": "ch1-hydrostatics",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "4. Fluid statics: the hydrostatic equation",
      "content": "\n        <p>\n          For a fluid at rest (u = 0), there are no shear stresses due to motion. Pressure varies primarily due to gravity.\n        </p>\n\n        <figure>\n          <img src=\"images/ch1_hydrostatic_equation.png\" alt=\"Hydrostatic equation with tank and elevation points\">\n          <figcaption>Hydrostatic balance in a stationary liquid.</figcaption>\n        </figure>\n\n        <h2>Derivation (compact)</h2>\n        <p>\n          Consider a small fluid element of height dz. Force balance in the vertical direction gives:\n        </p>\n        <pre class=\"equation\">dp/dz = − ρ g</pre>\n\n        <p>\n          If density is constant (typical for liquids), integrating between elevations z₁ and z₂:\n        </p>\n        <pre class=\"equation\">p₂ − p₁ = −ρ g (z₂ − z₁)</pre>\n\n        <h2>What does it mean?</h2>\n        <ul>\n          <li>Pressure <strong>increases</strong> when moving downward (decreasing z).</li>\n          <li>At the same elevation within the same continuous fluid, pressure is the same (in static conditions).</li>\n          <li>Only pressure differences matter: absolute pressure depends on the reference (often atmospheric pressure).</li>\n        </ul>\n\n        <h2>Advanced note: gases</h2>\n        <p>\n          For gases, density is not constant. For an isothermal ideal gas atmosphere, integration yields a\n          barometric law p(z) = p₀ exp(−z/H) where H is the scale height. In many process tanks, gas pressure\n          variations over small heights are negligible compared to liquids.\n        </p>\n        "
    },
    {
      "id": "ch1-interfaces-manometers",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "5. Interfaces and manometry",
      "content": "\n        <h2>Interface between two immiscible fluids</h2>\n        <p>\n          A frequent configuration is two immiscible fluids in contact (e.g., oil and water). In static equilibrium,\n          the pressure is continuous across the interface at the same elevation:\n        </p>\n        <pre class=\"equation\">p₁(z_interface) = p₂(z_interface)</pre>\n\n        <figure>\n          <img src=\"images/ch1_interfaces.png\" alt=\"Two-fluid hydrostatics and interface pressure continuity\">\n          <figcaption>Pressure continuity across a static interface.</figcaption>\n        </figure>\n\n        <h2>Manometers</h2>\n        <p>\n          Manometers measure pressure differences by balancing columns of fluids with known densities.\n          The calculation method is systematic:\n        </p>\n        <ol>\n          <li>Pick a reference point and write p + ρgz along a path.</li>\n          <li>When you go <em>down</em> in a fluid of density ρ: pressure increases by ρgΔz.</li>\n          <li>When you go <em>up</em>: pressure decreases by ρgΔz.</li>\n          <li>Apply continuity of pressure at interfaces and solve for the unknown.</li>\n        </ol>\n\n        <figure>\n          <img src=\"images/ch1_manometer.png\" alt=\"Double-fluid manometer example\">\n          <figcaption>Example of a manometry problem with two fluids.</figcaption>\n        </figure>\n\n        <div class=\"callout\">\n          <strong>Note:</strong> When capillarity matters (small tubes), the meniscus curvature creates an additional pressure jump (Laplace pressure). Industrial manometers are typically sized to reduce this effect.\n        </div>\n\n\n        <h2>Exercise: manometer pressure difference</h2>\n        <p>\n          Using the manometer shown above, compute the pressure difference <strong>P<sub>B</sub> − P<sub>A</sub></strong>.\n          Enter your answer in <strong>Pa</strong>.\n        </p>\n\n        <div class=\"questionCard manometer-exercise unanswered\" data-expected=\"28088\">\n          <div style=\"display:flex; gap:10px; flex-wrap:wrap; align-items:center;\">\n            <label style=\"font-weight:800;\" for=\"manometerAnswer\">Answer (Pa)</label>\n            <input\n              id=\"manometerAnswer\"\n              type=\"text\"\n              inputmode=\"decimal\"\n              placeholder=\"e.g., 00000\"\n              style=\"flex: 1 1 220px; max-width: 320px; padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(27,31,36,0.18); background: rgba(255,255,255,0.9);\"\n              aria-label=\"Answer in pascals\"\n            >\n            <button class=\"btn primary\" type=\"button\"\n              onclick=\"(function(btn){\n                const box = btn.closest('.manometer-exercise');\n                const input = box.querySelector('input');\n                const feedback = box.querySelector('.manometer-feedback');\n                const expected = Number(box.dataset.expected || 28088);\n                const raw = (input.value || '').trim();\n                const cleaned = raw.replace(/[^0-9.+-]/g, '');\n                const value = Number(cleaned);\n                if (!Number.isFinite(value)) {\n                  feedback.textContent = 'Please enter a numeric value in Pa (example: 28088).';\n                  box.classList.remove('correct','incorrect');\n                  box.classList.add('unanswered');\n                  return;\n                }\n                const tol = 1;\n                if (Math.abs(value - expected) <= tol) {\n                  feedback.textContent = 'Correct ✅ (28,088 Pa).';\n                  box.classList.remove('incorrect','unanswered');\n                  box.classList.add('correct');\n                } else {\n                  feedback.textContent = 'Not quite. Try again (answer must be in Pa).';\n                  box.classList.remove('correct','unanswered');\n                  box.classList.add('incorrect');\n                }\n              })(this)\"\n            >Check</button>\n            <button class=\"btn\" type=\"button\"\n              onclick=\"(function(btn){\n                const box = btn.closest('.manometer-exercise');\n                const sol = box.querySelector('.manometer-solution');\n                const isHidden = (sol.style.display === '' || sol.style.display === 'none');\n                sol.style.display = isHidden ? 'block' : 'none';\n                btn.textContent = isHidden ? 'Hide solution' : 'Show solution';\n                if (isHidden) sol.scrollIntoView({behavior:'smooth', block:'start'});\n              })(this)\"\n            >Show solution</button>\n          </div>\n\n          <div class=\"score manometer-feedback\" style=\"margin-top: 10px;\" aria-live=\"polite\">\n            Enter your answer above, then click <strong>Check</strong>.\n          </div>\n\n          <div class=\"manometer-solution\" style=\"display:none; margin-top: 12px;\">\n            <figure>\n              <img src=\"images/ch1_manometer_solution.png\" alt=\"Worked solution for the manometer exercise\">\n              <figcaption>Worked solution (target: 28,088 Pa).</figcaption>\n            </figure>\n          </div>\n        </div>\n        "
    },
    {
    // Added: end-of-section interactive exercise (Bern_excices) + collapsible solution (Bern_excices_corr).
      "id": "ch1-bernoulli-ideal",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "6. Bernoulli equation for an ideal fluid",
      "content": "\n        <p>\n          Bernoulli's equation is an energy statement along a streamline for steady, inviscid, incompressible flow.\n        </p>\n\n        <figure>\n          <img src=\"images/ch1_bernoulli_ideal.png\" alt=\"Bernoulli equation ideal fluid with points along streamline\">\n          <figcaption>Ideal Bernoulli equation along a streamline.</figcaption>\n        </figure>\n\n        <h2>Ideal Bernoulli (head form)</h2>\n        <pre class=\"equation\">p/(ρg) + U²/(2g) + z = constant</pre>\n\n        <h2>Interpretation</h2>\n        <ul>\n          <li><strong>p/(ρg)</strong> is pressure head (static energy)</li>\n          <li><strong>U²/(2g)</strong> is velocity head (kinetic energy)</li>\n          <li><strong>z</strong> is elevation head (potential energy)</li>\n        </ul>\n\n        <h2>Stagnation pressure</h2>\n        <p>\n          If a flow is brought to rest isentropically at a stagnation point (U → 0), the pressure increases to a\n          <strong>stagnation pressure</strong> p₀. For incompressible flow:\n        </p>\n        <pre class=\"equation\">p₀ = p + ½ ρ U²</pre>\n\n        <div class=\"callout\">\n          <strong>Validity domain:</strong> Bernoulli is not a “universal” equation. When viscosity is important, you must include head losses; when the flow is strongly unsteady, you may need an unsteady term; and for compressible flows, density variation and thermodynamics enter the energy equation.\n        </div>\n        \n        <hr>\n\n        <h2>Exercise — Bernoulli (tank orifice)</h2>\n        <p>\n          Apply the <strong>ideal Bernoulli equation</strong> between the <strong>free surface</strong> (A) and the <strong>orifice</strong> (B).\n          Because the tank is large, the surface velocity is typically negligible (U<sub>A</sub> \u2248 0).\n          This leads to the classic <strong>Torricelli result</strong> for the jet speed.\n        </p>\n\n        <figure>\n          <img src=\"images/Bern_excices.png\" alt=\"Exercise: tank draining through a small orifice (Bernoulli)\">\n          <figcaption>Compute the exit velocity and the volumetric flow rate (ideal fluid).</figcaption>\n        </figure>\n\n        <details class=\"solution\">\n          <summary class=\"btn\">Show solution</summary>\n          <div class=\"callout\">\n            <strong>Hint:</strong> Once you obtain <em>V</em><sub>2</sub>, use continuity: Q<sub>v</sub> = V<sub>2</sub> \u00d7 S with S = \u03c0 d\u00b2/4.\n          </div>\n          <figure>\n            <img src=\"images/Bern_excices_corr.png\" alt=\"Solution: Bernoulli applied between the free surface and the orifice\">\n            <figcaption>Worked solution (ideal Bernoulli + continuity).</figcaption>\n          </figure>\n        </details>\n"
    },
    {
      "id": "ch1-bernoulli-generalized",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "7. Real fluids: generalized Bernoulli with pumps, turbines, and losses",
      "content": "\n        <p>\n          In real internal flows, viscosity and fittings dissipate mechanical energy into heat. Pumps add energy,\n          and turbines extract energy. The generalized (engineering) Bernoulli equation between points (1) and (2) is:\n        </p>\n\n        <figure>\n          <img src=\"images/ch1_bernoulli_generalized.png\" alt=\"Generalized Bernoulli equation with losses and machine head\">\n          <figcaption>Generalized Bernoulli equation for real fluids.</figcaption>\n        </figure>\n\n        <pre class=\"equation\">\np₁/(ρg) + U₁²/(2g) + z₁  + H_p − H_t\n= p₂/(ρg) + U₂²/(2g) + z₂ + h_L\n        </pre>\n\n        <h2>Terms you must be able to identify</h2>\n        <ul>\n          <li><strong>H<sub>p</sub></strong>: pump head added to the fluid</li>\n          <li><strong>H<sub>t</sub></strong>: turbine head extracted from the fluid</li>\n          <li><strong>h<sub>L</sub></strong>: total head loss (major + minor)</li>\n        </ul>\n\n        <h2>Energy grade line (EGL) and hydraulic grade line (HGL)</h2>\n        <p>\n          In piping design, it is useful to plot:\n        </p>\n        <ul>\n          <li><strong>EGL:</strong> p/(ρg) + U²/(2g) + z</li>\n          <li><strong>HGL:</strong> p/(ρg) + z</li>\n        </ul>\n        <p>\n          Head losses appear as a downward slope of the EGL; pumps create an upward jump.\n        </p>\n\n        <div class=\"callout\">\n          <strong>Note:</strong> In nonuniform velocity profiles, the kinetic energy term should include an energy correction factor α (typically close to 1 in turbulent pipe flow, but α = 2 for fully developed laminar pipe flow).\n        </div>\n        "
    },
    {
      // Added: end-of-section exercise (ex1) + collapsible solution (answer_1 + answer_2).
      "id": "ch1-bernoulli-applications",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "8. Bernoulli applications: turbines and pumps",
      "content": "\n        <p>\n          The generalized Bernoulli equation becomes especially powerful when modeling machines and networks.\n          Two common cases are shown below.\n        </p>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/ch1_bernoulli_application_turbine.png\" alt=\"Bernoulli application with turbine extracting head\">\n            <figcaption>Application with a turbine extracting mechanical energy.</figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/ch1_bernoulli_application_pump.png\" alt=\"Bernoulli application with pump adding head\">\n            <figcaption>Application with a pump providing head to overcome losses and elevation.</figcaption>\n          </figure>\n        </div>\n\n        <h2>Procedure for solving a Bernoulli problem</h2>\n        <ol>\n          <li>Define points (1) and (2) and draw a control sketch (include elevations).</li>\n          <li>Write the generalized Bernoulli equation.</li>\n          <li>Decide which terms are negligible (e.g., large reservoirs imply U≈0).</li>\n          <li>Model head losses: major (pipe friction) + minor (fittings, valves).</li>\n          <li>Solve for the unknown (pump head, discharge, pressure, etc.).</li>\n        </ol>\n\n        <h2>Worked mini-example (concept)</h2>\n        <p>\n          A pump is used to raise water from a lower tank to an upper tank. Both tanks are open to atmosphere and have\n          negligible surface velocity. Then:\n        </p>\n        <pre class=\"equation\">H_p ≈ (z₂ − z₁) + h_L</pre>\n        <p>\n          i.e., the pump must provide the static lift plus the total losses.\n        </p>\n\n\n        <hr>\n\n        <h2>Exercise — Pumping system with major/minor losses</h2>\n        <p>\n          Solve the following application using the <strong>generalized Bernoulli equation</strong>.\n          Pay attention to which velocities can be neglected (large tanks/reservoirs) and how losses are modeled.\n        </p>\n\n        <figure>\n          <img src=\"images/ex1.png\" alt=\"Exercise ex1: Bernoulli application with a pump (turbines and pumps)\">\n          <figcaption>Exercise (ex1): calculate flow rate, pump head and pressures.</figcaption>\n        </figure>\n\n        <details class=\"solution\">\n          <summary class=\"btn\">Show solution</summary>\n\n          <div class=\"callout\">\n            <strong>Note:</strong> The worked solution is split into two pages.\n          </div>\n\n          <figure>\n            <img src=\"images/answer_1.png\" alt=\"Answer 1/2 for exercise ex1\">\n            <figcaption>Answer 1/2.</figcaption>\n          </figure>\n\n          <figure>\n            <img src=\"images/answer_2.png\" alt=\"Answer 2/2 for exercise ex1\">\n            <figcaption>Answer 2/2.</figcaption>\n          </figure>\n        </details>\n"
    },
    {
      "id": "ch1-flow-regime",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "9. Flow regime: Reynolds number and hydraulic diameter",
      "content": "\n        <p>\n          The <strong>Reynolds number</strong> compares inertial to viscous effects. For internal flows:\n        </p>\n        <pre class=\"equation\">Re = ρ U D / μ = U D / ν</pre>\n\n        <figure>\n          <img src=\"images/ch1_flow_regime.png\" alt=\"Flow regimes: laminar, transitional, turbulent and roughness effects\">\n          <figcaption>Reynolds number and regimes; roughness matters in turbulent flow.</figcaption>\n        </figure>\n\n        <h2>Regimes in circular pipes (typical thresholds)</h2>\n        <ul>\n          <li><strong>Laminar:</strong> Re &lt; ~2300</li>\n          <li><strong>Transitional:</strong> ~2300 to ~4000 (sensitive to disturbances)</li>\n          <li><strong>Turbulent:</strong> Re &gt; ~4000</li>\n        </ul>\n\n        <h2>Non-circular ducts: hydraulic diameter</h2>\n        <p>\n          For non-circular cross-sections, use:\n        </p>\n        <pre class=\"equation\">D_h = 4A/P_w</pre>\n        <p>\n          where A is the cross-sectional area and P<sub>w</sub> is the wetted perimeter.\n        </p>\n\n        <div class=\"callout\">\n          <strong>Note:</strong> Reynolds number alone does not guarantee turbulence; inlet conditions, disturbances, and surface roughness can trigger earlier transition.\n        </div>\n        "
    },
	    // Split for clarity: overview, then separate sub-lessons for major vs minor losses.
	    {
	      "id": "ch1-head-losses",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "10. Head loss in piping",
      "content": "\n        <p>\n          In pipe systems, mechanical energy is dissipated by viscous effects (wall shear) and by localized\n          disturbances (bends, valves, expansions, contractions). In practice, we group losses into:\n        </p>\n        <ul>\n          <li><strong>Major (distributed) losses</strong> along straight pipe lengths</li>\n          <li><strong>Minor (local) losses</strong> caused by fittings and geometry changes</li>\n        </ul>\n\n        <figure>\n          <img src=\"images/ch1_head_loss_network.png\" alt=\"Pipe network with head loss concept\">\n          <figcaption>Head loss accumulates along a flow path and across components.</figcaption>\n        </figure>\n\n        <h2>Why the split matters</h2>\n        <p>\n          Engineers separate major and minor losses because they are modeled differently (friction factor vs. loss\n          coefficients), yet both often scale with velocity head <strong>U²/(2g)</strong>. In long, straight pipelines,\n          major losses dominate. In short systems with many valves and bends, minor losses can be the main driver.\n        </p>\n\n        <div class=\"callout\">\n          <strong>Design tip:</strong> Always compute losses at the <em>design flow</em>, then check sensitivity at minimum and\n          maximum expected flows. Because many losses scale as U², a modest flow increase can cause a large head\n          requirement increase.\n        </div>\n        "
    },
    {
      "id": "ch1-major-losses",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "--- 10.A. Major losses",
      "content": "\n        <p>\n          <strong>Major losses</strong> (also called <em>distributed losses</em>) come from <strong>wall friction</strong> along a straight pipe.\n          They grow with pipe length and with the square of the mean velocity.\n        </p>\n\n        <figure>\n          <img src='images/major1.png' alt='Darcy–Weisbach head loss and pressure drop for major (distributed) losses'>\n          <figcaption>Darcy–Weisbach model: head loss <em>h<sub>f</sub></em> (m) and pressure drop Δp (Pa) for a pipe of length L and diameter D.</figcaption>\n        </figure>\n\n        <div class='callout'>\n          <strong>Key idea:</strong> For a given pipe, <em>h<sub>f</sub></em> scales like <strong>U²</strong>. Doubling the flow velocity multiplies the major loss by roughly <strong>4</strong>.\n        </div>\n\n        <h2>Darcy–Weisbach (head form)</h2>\n        <pre class='equation'>h_f = f (L/D) (U²/(2g))</pre>\n\n        <h2>Darcy–Weisbach (pressure form)</h2>\n        <pre class='equation'>Δp = ρ f (L/D) (U²/2)</pre>\n\n        <div class='callout'>\n          <strong>Units checkpoint:</strong> <em>h<sub>f</sub></em> is a <strong>head</strong> in meters of fluid, while Δp is in pascals. They are linked by Δp = ρ g h<sub>f</sub>.\n        </div>\n\n        <h2>How to compute major losses (practical workflow)</h2>\n        <ol>\n          <li>Compute the mean velocity <strong>U</strong> from the flow rate: U = Q/A.</li>\n          <li>Compute the Reynolds number: <strong>Re = ρ U D / μ</strong>.</li>\n          <li>Estimate the relative roughness: <strong>ε/D</strong> (ε = absolute roughness).</li>\n          <li>Find the Darcy friction factor <strong>f</strong> from a correlation or the Moody chart.</li>\n          <li>Apply Darcy–Weisbach to get <em>h<sub>f</sub></em> and/or Δp.</li>\n        </ol>\n\n        <hr>\n\n        <h2>Friction factor <em>f</em>: what it depends on</h2>\n        <ul>\n          <li><strong>Flow regime</strong>: laminar vs turbulent (set by Re).</li>\n          <li><strong>Pipe roughness</strong>: enters via ε/D in turbulent flow.</li>\n        </ul>\n\n        <figure>\n          <img src='images/major2.png' alt='Friction factor correlations for laminar and turbulent smooth regimes'>\n          <figcaption>Typical correlations for the Darcy friction factor: laminar (Poiseuille) and smooth turbulent regime (implicit/explicit relations).</figcaption>\n        </figure>\n\n        <h3>Laminar flow (Re ≤ 2000)</h3>\n        <p>\n          In laminar pipe flow, roughness has essentially <strong>no effect</strong> on the friction factor.\n        </p>\n        <pre class='equation'>f = 64/Re</pre>\n\n        <h3>Turbulent flow (Re ≥ 4000)</h3>\n        <p>\n          In turbulent flow, <em>f</em> depends on both <strong>Re</strong> and <strong>ε/D</strong>. Many correlations exist; the most widely used reference relation is the (implicit) <strong>Colebrook equation</strong>.\n        </p>\n        <pre class='equation'>1/√f = −2 log10( (ε/(3.7D)) + (2.51/(Re √f)) )</pre>\n\n        <div class='callout'>\n          <strong>Remark:</strong> The transition zone (roughly 2000 &lt; Re &lt; 4000) is unstable and depends on disturbances. In design work, avoid operating right inside the transition region when possible.\n        </div>\n\n        <figure>\n          <img src='images/major3.png' alt='Turbulent rough regime correlations (Colebrook, Churchill, Nikuradze, Lebeau)'>\n          <figcaption>Rough turbulent regime: several correlations can be used. Colebrook is commonly treated as the reference because it matches the Moody chart well.</figcaption>\n        </figure>\n\n        <h2>Moody chart: the big picture</h2>\n        <p>\n          The <strong>Moody chart</strong> summarizes how the Darcy friction factor varies with Reynolds number and relative roughness.\n          It is extremely useful to quickly identify the flow regime and estimate <em>f</em>.\n        </p>\n\n        <div class='grid2'>\n          <figure>\n            <img src='images/major4.png' alt='Moody chart (friction factor vs Reynolds number with roughness families)'>\n            <figcaption>Moody chart: friction factor <em>f</em> vs Reynolds number, with families of curves for ε/D.</figcaption>\n          </figure>\n          <figure>\n            <img src='images/major5.png' alt='Annotated Moody chart highlighting laminar, transitional, smooth turbulent and rough turbulent regimes'>\n            <figcaption>Annotated regimes: laminar, transitional, smooth turbulent, and fully rough turbulent.</figcaption>\n          </figure>\n        </div>\n\n        <figure>\n          <img src='images/major6.png' alt='Moody chart with key formulas placed in the corresponding regions'>\n          <figcaption>Rule of thumb: use Poiseuille in laminar flow; use Colebrook (or a good explicit approximation) in turbulent flow.</figcaption>\n        </figure>\n\n        <div class='callout'>\n          <strong>Key idea:</strong> In the <strong>fully rough</strong> turbulent regime, <em>f</em> becomes almost independent of Re and depends mainly on ε/D. In the <strong>smooth</strong> turbulent regime, <em>f</em> still decreases slowly as Re increases.\n        </div>\n\n        <h2>Common pitfalls (quick reminders)</h2>\n        <ul>\n          <li><strong>Darcy vs Fanning:</strong> this course uses the <strong>Darcy</strong> friction factor. Fanning is smaller by a factor of 4.</li>\n          <li><strong>Mean velocity:</strong> always use the cross‑section average velocity in U²/(2g).</li>\n          <li><strong>Roughness data:</strong> ε depends on material, aging, and deposits—use conservative values for old pipes.</li>\n        </ul>\n\n        <div class='callout'>\n          <strong>Checkpoint:</strong> For a fixed pipe (L, D, ε), what happens to Δp if (i) Q doubles, (ii) D doubles, (iii) the fluid viscosity increases while Q stays the same?\n        </div>\n        "
    },
    {
      "id": "ch1-minor-losses",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "--- 10.B. Minor losses",
      "content": "\n        <p>\n          <strong>Minor losses</strong> (also called <em>local losses</em>) are caused by fittings and geometry changes that create\n          extra turbulence, separation, and mixing. They are typically modeled with a dimensionless loss coefficient <strong>K</strong>.\n        </p>\n\n        <figure>\n          <img src='images/minor1.png' alt='Minor losses: head loss and pressure loss formulas'>\n          <figcaption>Minor losses: head form <em>h<sub>m</sub> = K U²/(2g)</em> and pressure form <em>Δp = ρ K U²/2</em>. The coefficient K depends mainly on geometry.</figcaption>\n        </figure>\n\n        <div class='callout'>\n          <strong>Key idea:</strong> Minor losses scale with the same <strong>velocity head</strong> U²/(2g) as major losses. If flow rate increases, both major and minor losses rise roughly with <strong>U²</strong>.\n        </div>\n\n        <h2>How to use K in calculations (workflow)</h2>\n        <ol>\n          <li>List every fitting/valve/geometry change on the flow path and get its K value from a table, handbook, or datasheet.</li>\n          <li>Decide the <strong>reference velocity</strong> U used for each K (see the note on expansions/contractions below).</li>\n          <li>Sum all coefficients: <strong>ΣK</strong>.</li>\n          <li>Compute head loss: <strong>h<sub>m</sub> = (ΣK) U²/(2g)</strong>, then add it to the major loss in Bernoulli.</li>\n        </ol>\n\n        <div class='callout'>\n          <strong>Units checkpoint:</strong> K is <strong>dimensionless</strong>. The only units come from U²/(2g) (meters of fluid) or ρU²/2 (pascals).\n        </div>\n\n        <h2>Expansions and contractions</h2>\n        <p>\n          Area changes can produce separation and mixing. For many tables, the definition of K depends on whether the fitting is an expansion or a contraction.\n          Always verify which velocity the table uses (V<sub>1</sub> or V<sub>2</sub>).\n        </p>\n\n        <figure>\n          <img src='images/minor2.png' alt='K tables for expansions and contractions; note which velocity is used'>\n          <figcaption>Convention reminder: for expansions, K is often referenced to the <strong>upstream</strong> (smaller-area, higher-velocity) section. For contractions, many tables reference K to the <strong>downstream</strong> velocity (after the contraction). Always confirm the convention used by your source.</figcaption>\n        </figure>\n\n        <div class='callout'>\n          <strong>Remark:</strong> A &ldquo;sudden&rdquo; expansion is usually much more dissipative than a gradual diffuser. If you have space, a well-designed diffuser can reduce K dramatically.\n        </div>\n\n        <h2>Elbows and bends</h2>\n        <div class='grid2'>\n          <figure>\n            <img src='images/minor3.png' alt='Elbow loss coefficients: effect of angle and radius'>\n            <figcaption>K increases with bend angle and decreases with larger bend radius (long-radius elbows are gentler on the flow).</figcaption>\n          </figure>\n          <!-- Figure removed (image omitted) -->\n<div class='callout'>\n  <strong>Text note </strong>\n  <ul>\n    <li>Minor-loss coefficients <strong>K</strong> for elbows depend on geometry (e.g., radius ratio <em>R/D</em>), fitting type, and flow regime.</li>\n    <li>If a chart is not provided, use vendor/handbook values or the <em>equivalent-length</em> method and keep assumptions explicit.</li>\n    <li>For preliminary sizing, document uncertainty and consider a small sensitivity check (e.g., ±25%) on ΣK.</li>\n  </ul>\n</div>\n        </div>\n\n        <div class='callout'>\n          <strong>Design tip:</strong> If vibration, noise, or cavitation margin is an issue, reduce local turbulence first: avoid sharp elbows near pumps, use long-radius bends, and keep suction-side fittings to a minimum.\n        </div>\n\n        <h2>Valves: K can explode when partially closed</h2>\n        <p>\n          Valves are both <em>functional</em> elements (isolation/control) and major sources of minor losses. For many valve types,\n          K is small when fully open, but it increases rapidly as the opening decreases. In control applications, use the manufacturer curve whenever possible.\n        </p>\n\n        <div class='grid2'>\n          <figure>\n            <img src='images/minor4.png' alt='Butterfly valve K versus opening angle'>\n            <figcaption>Butterfly valve: K grows dramatically at small openings.</figcaption>\n          </figure>\n          <figure>\n            <img src='images/minor5.png' alt='Ball valve K versus opening angle'>\n            <figcaption>Ball valve: very low loss when fully open, but very high losses when throttled.</figcaption>\n          </figure>\n        </div>\n\n        <div class='grid2'>\n          <figure>\n            <img src='images/minor6.png' alt='Gate valve K versus opening percentage'>\n            <figcaption>Gate valve: intended for on/off service; throttling creates large losses and can cause erosion.</figcaption>\n          </figure>\n          <figure>\n            <img src='images/minor7.png' alt='Swing check valve K versus opening angle'>\n            <figcaption>Check valves: add permanent loss and can contribute to transients (water hammer) during closure.</figcaption>\n          </figure>\n        </div>\n\n        <div class='callout'>\n          <strong>Checkpoint:</strong>\n          <ul>\n            <li>When you sum K values, are all of them referenced to the <strong>same velocity</strong>?</li>\n            <li>Is any valve used for <strong>throttling</strong> (partially closed) at the operating point?</li>\n            <li>On the pump suction line, did you minimize ΣK to protect NPSH?</li>\n          </ul>\n        </div>\n\n        <h2>Equivalent length method (optional)</h2>\n        <p>\n          A local loss can be expressed as an equivalent straight-pipe length L<sub>eq</sub> such that:\n        </p>\n        <pre class='equation'>K = f (L<sub>eq</sub>/D)  &nbsp; ⇒ &nbsp;  L<sub>eq</sub> = (K/f) D</pre>\n        <p>\n          This is convenient for hand calculations, but it hides the fact that f depends on Reynolds number and roughness.\n          In spreadsheets or software, it is usually cleaner to keep <strong>ΣK</strong> explicitly.\n        </p>"
    },
    {
      "id": "ch1-pid",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "11. P&ID diagrams: reading symbols and basic control intent",
      "content": "\n        <p class=\"lead\">\n          A <strong>Piping and Instrumentation Diagram (P&amp;ID)</strong> is the \u201chow it works\u201d drawing of a process. It shows\n          <strong>equipment</strong>, <strong>piping</strong>, <strong>valves</strong>, and\u2014most importantly\u2014<strong>instrumentation and control intent</strong>.\n        </p>\n\n        <figure>\n          <img src=\"images/P1.png\" alt=\"P&amp;ID overview: piping, instruments, and example diagrams\">\n          <figcaption>P&amp;ID overview: the same process can look simple or very detailed depending on the engineering phase.</figcaption>\n        </figure>\n\n        <div class=\"callout\">\n          <strong>Key idea:</strong> A P&amp;ID answers three questions: <em>(1) what flows where</em>, <em>(2) what is measured</em>, and\n          <em>(3) what is manipulated</em> to keep the process safe and on\u2011spec.\n        </div>\n\n        <h2>P&amp;ID vs PFD (quick distinction)</h2>\n        <ul>\n          <li><strong>PFD (Process Flow Diagram):</strong> high-level flows and major equipment (good for mass/energy balances).</li>\n          <li><strong>P&amp;ID:</strong> detailed piping + valves + instruments + control loops (good for design, commissioning, and troubleshooting).</li>\n        </ul>\n\n        <hr>\n\n        <h2>Symbols at a glance (equipment + valves)</h2>\n        <p>\n          P&amp;IDs use standardized symbols. In practice, your project\u2019s <strong>legend</strong> is the source of truth, but the patterns below are common.\n        </p>\n\n        <figure>\n          <img src=\"images/P2.png\" alt=\"Common P&amp;ID symbols: valves and process equipment\">\n          <figcaption>Common symbols: valve types (manual/control/gate/ball/check\u2026) and equipment (pump, heat exchanger, tank, compressor, turbine\u2026).</figcaption>\n        </figure>\n\n        <div class=\"callout\">\n          <strong>Remark:</strong> Always locate the <strong>final control elements</strong> (usually control valves) first.\n          They tell you what the control system can actually change.\n        </div>\n\n        <h2>Line types and signal types</h2>\n        <p>\n          P&amp;IDs distinguish between <strong>process lines</strong> (actual fluid flow) and <strong>signal lines</strong> (how instruments communicate).\n          The exact conventions vary, but the idea is always: <em>different line styles = different \u201cphysical meaning.\u201d</em>\n        </p>\n\n        <figure>\n          <img src=\"images/P3.png\" alt=\"Typical P&amp;ID line types: process, pneumatic, electric, hydraulic, and combinations\">\n          <figcaption>Typical line legend: process vs pneumatic/electric/hydraulic (and mixed electro\u2011pneumatic or pneumo\u2011hydraulic signals).</figcaption>\n        </figure>\n\n        <div class=\"callout\">\n          <strong>Checkpoint:</strong> On any given drawing, can you immediately tell which lines carry <em>process fluid</em>\n          and which lines carry <em>signals</em>?\n        </div>\n\n        <hr>\n\n        <h2>Instrument bubbles and tag logic</h2>\n        <p>\n          Instruments are often shown as <strong>circles (bubbles)</strong> with letter codes. The <strong>first letter</strong> indicates the measured variable;\n          subsequent letters describe the function.\n        </p>\n\n        <div class=\"grid2\">\n          <!-- Figure removed (image omitted) -->\n<div class=\"callout\">\n  <strong>Quick reference (text-only)</strong>\n  <p>\n    Instead of a symbol chart image, here are common P&amp;ID tag conventions you will encounter:\n  </p>\n  <ul>\n    <li><strong>P</strong> = pressure, <strong>T</strong> = temperature, <strong>F</strong> = flow, <strong>L</strong> = level.</li>\n    <li>Common functions: <strong>T</strong> = transmitter (PT, TT), <strong>I</strong> = indicator (PI, TI), <strong>C</strong> = controller (PIC, TIC).</li>\n    <li>Control valves are often tagged with <strong>V</strong> (e.g., FV-101) and are typically driven by a controller (e.g., FIC-101).</li>\n  </ul>\n  <p class=\"small\">Conventions vary by company and project—always consult the legend for the specific drawing set.</p>\n</div>\n          <figure>\n            <img src=\"images/P4.png\" alt=\"Instrument tag table and examples of PT and FIC bubbles\">\n            <figcaption>Quick reference: typical tag letters and how a bubble label looks (e.g., PT, FIC).</figcaption>\n          </figure>\n        </div>\n\n        <h3>Common tag patterns</h3>\n        <ul>\n          <li><strong>Measured variable:</strong> F (flow), P (pressure), T (temperature), L (level), A (analysis)\u2026</li>\n          <li><strong>Function letters:</strong> T (transmitter), I (indicator), C (controller), V (valve), A (alarm)\u2026</li>\n          <li><strong>Loop number:</strong> instruments that share a number usually belong to the same loop (e.g., FT\u2011101 \u2192 FIC\u2011101 \u2192 FV\u2011101).</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Key idea:</strong> When you see a controller (\u2026C\u2026), immediately ask: <em>what is its PV</em> (measured signal)\n          and <em>what is its MV</em> (manipulated element)?\n        </div>\n\n        <h2>Reading control loops (control intent)</h2>\n        <p>\n          A very common loop structure is:\n          <strong>sensor/transmitter</strong> \u2192 <strong>controller</strong> \u2192 <strong>final element</strong>.\n          For example: <strong>FT</strong> measures flow, <strong>FIC</strong> compares it to a setpoint, and <strong>FV</strong> adjusts a valve opening.\n        </p>\n\n        <!-- Figure removed (image omitted) -->\n<div class=\"callout\">\n  <strong>Typical heat-exchanger control intent (text-only)</strong>\n  <ul>\n    <li><strong>Objective:</strong> maintain outlet temperature at setpoint despite inlet flow/temperature disturbances.</li>\n    <li><strong>Manipulated variable:</strong> utility-side valve (steam/hot oil) is common; in some cases the process-side flow is manipulated instead.</li>\n    <li><strong>Common structure:</strong> a temperature controller (TIC) trims the setpoint of a faster utility flow controller (FIC) for improved disturbance rejection.</li>\n    <li><strong>Practical notes:</strong> include minimum-flow and high-temperature safeguards to reduce fouling/overheating risk.</li>\n  </ul>\n</div>\n\n        <div class=\"callout\">\n          <strong>Common mistake:</strong> Confusing \u201cmeasured\u201d with \u201ccontrolled.\u201d A P&amp;ID may show many measurements, but only a few are actively controlled via a final element.\n        </div>\n\n        <hr>\n\n        <h2>Mini design exercises (from requirement \u2192 P&amp;ID)</h2>\n        <p>\n          Practice reading the <strong>control objective</strong> first, then identifying the required instruments and valves.\n          The next figure gives two short statements (a tank level problem and a heat exchanger flow/temperature target).\n        </p>\n\n        <figure>\n          <img src=\"images/P5.png\" alt=\"Two short P&amp;ID design prompts: tank level control and heat exchanger flow/temperature control\">\n          <figcaption>Two prompts: (1) equip a tank with safety + level control; (2) control cold-water flow rate and outlet temperature using hot steam.</figcaption>\n        </figure>\n\n        <details class=\"solution\">\n          <summary class=\"btn\">Show one possible P&amp;ID solution</summary>\n\n          <figure>\n            <img src=\"images/P6.png\" alt=\"One possible solution P&amp;ID for the tank and heat exchanger control problems\">\n            <figcaption>One possible solution. Focus on the logic: what is measured (LT/TT/FT), what is controlled (LIC/TIC/FIC), and what is manipulated (valves).</figcaption>\n          </figure>\n\n          <div class=\"callout\">\n            <strong>Checkpoint:</strong>\n            <ul>\n              <li>For the tank: what protects against <em>high level</em> and <em>low level</em>?</li>\n              <li>For the heat exchanger: which loop controls <em>flow</em> and which loop controls <em>temperature</em>?</li>\n              <li>If a valve fails, which failure position is safer (fail\u2011open vs fail\u2011closed) for each service?</li>\n            </ul>\n          </div>\n        </details>\n\n        <h2>Fast reading checklist (use this every time)</h2>\n        <ol>\n          <li>Follow the <strong>process flow path</strong> (where does the fluid go?).</li>\n          <li>Locate <strong>control valves</strong> and their actuators (what can be manipulated?).</li>\n          <li>Trace each loop: <strong>transmitter \u2192 controller \u2192 valve</strong>.</li>\n          <li>Identify <strong>safety layers</strong>: alarms, interlocks, relief devices, trips.</li>\n          <li>Check <strong>units and setpoints</strong> (flow, temperature, pressure, level targets).</li>\n        </ol>\n\n        <div class=\"callout\">\n          <strong>Final checkpoint:</strong> A P&amp;ID is not just a drawing\u2014it is a compact specification of how the plant is intended to operate (normal + abnormal situations).\n        </div>\n        "
    },
    {
      "id": "quiz-1",
      "chapter": "Chapter 1 — Refresher: Fluid Mechanics Basics",
      "title": "Quiz 1 — Fluid basics, hydrostatics, Bernoulli, and head losses",
      "type": "quiz",
      "quizKey": "quiz1",
      "content": "\n        <p class=\"lead\">\n          This quiz checks your understanding of Chapter 1. Minimum target: <strong>70%</strong>.\n          After you submit, review the explanations for any mistakes.\n        </p>\n        <div id=\"quiz-container\"></div>\n        "
    },
    {
      "id": "ch2-overview",
      "chapter": "Chapter 2 — Pump Installation",
      "title": "1. Pump installation: why piping layout matters",
      "content": "\n        <p>\n          In practice, pump failures often originate from poor installation: air pockets, excessive suction losses,\n          misalignment, vibration, or inadequate NPSH margin.\n        </p>\n\n        <figure>\n          <img src=\"images/INSTAL.png\" alt=\"Pump installation configurations: flooded suction, suction lift, and submersible\">\n          <figcaption>Three common pump installation configurations. The liquid level relative to the pump strongly affects priming, NPSH margin, and reliability.</figcaption>\n        </figure>\n\n        <div class=\"callout\">\n          <strong>Engineering takeaway:</strong> When you have the choice, <em>flooded suction</em> is usually the most forgiving configuration. Suction lift installations demand careful air management, and submersible pumps trade easy priming for accessibility and sealing requirements.\n        </div>\n\n        <!-- Figure removed: ch2_flooded_suction_foundation.png (image omitted) -->\n        <div class=\"callout\">\n          <strong>Installation reminder:</strong> A pump should sit on a rigid, level base and the piping must be independently supported.\n          Excess pipe load on the casing/nozzles can cause misalignment, vibration, and premature seal or bearing wear.\n        </div>\n\n        <h2>Mechanical installation quick checklist</h2>\n        <ul>\n          <li><strong>Foundation / baseplate:</strong> rigid, flat, properly anchored (grout if required).</li>\n          <li><strong>Alignment:</strong> re-check motor–pump alignment after piping is connected and supports are set.</li>\n          <li><strong>Pipe supports:</strong> no pipe weight on pump flanges; use guides/anchors where needed.</li>\n          <li><strong>Access:</strong> leave enough clearance for strainer cleaning, coupling guard removal, and seal inspection.</li>\n        </ul>\n\n        <h2>Design priorities</h2>\n        <ul>\n          <li><strong>Hydraulic performance:</strong> reduce suction losses, avoid abrupt geometry changes.</li>\n          <li><strong>Mechanical reliability:</strong> avoid vibration and pipe loads on the pump casing.</li>\n          <li><strong>Operability:</strong> allow safe isolation, venting, draining, and maintenance.</li>\n          <li><strong>Cavitation avoidance:</strong> keep suction pressure above vapor pressure.</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Note:</strong> Installation rules are engineering controls for hidden failure modes.\n          For example, an eccentric reducer is not aesthetic; it prevents air accumulation that can destroy NPSH margin.\n        </div>\n        "
    },
    {
      "id": "ch2-flooded-suction",
      "chapter": "Chapter 2 — Pump Installation",
      "title": "2. Flooded suction pump: best practices on the suction line",
      "content": "\n        <p class=\"lead\">\n          A <strong>flooded suction</strong> installation means the pump suction is <em>below</em> the liquid level of the source tank,\n          so the suction line stays full of liquid. This is generally the most reliable layout because it minimizes priming issues\n          and provides a better margin against cavitation.\n        </p>\n        \n        <!-- Section rebuilt: Flooded suction pump best practices (floo1–floo10) -->\n        \n        <h2>Why flooded suction is preferred</h2>\n        <ul>\n          <li><strong>Easier start-up:</strong> the pump casing and suction line are already filled (no priming procedure).</li>\n          <li><strong>Higher NPSH available:</strong> positive static head helps keep suction pressure above vapor pressure.</li>\n          <li><strong>More stable operation:</strong> less risk of air ingestion and “loss of prime” events.</li>\n        </ul>\n        \n        <div class=\"callout\">\n          <strong>NPSH reminder:</strong> suction losses reduce the margin to cavitation.\n          Keep the suction line short, straight, and oversized whenever possible.\n        </div>\n        \n        <pre class=\"equation\">NPSH_A = (p_surface − p_vap)/(ρ g) + (z_surface − z_pump) − h_L,suction</pre>\n        \n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/floo1.png\" alt=\"Flooded suction pump schematic (P&amp;ID) showing isolation valves, pressure indicators, check valve, and drain\">\n            <figcaption>\n              <strong>Typical P&amp;ID.</strong> Include suction/discharge isolation valves, pressure indicators, a discharge check valve, and a drain/vent for safe maintenance.\n            </figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/floo2.png\" alt=\"Flooded suction pump example with the tank above the pump\">\n            <figcaption>\n              <strong>Physical layout.</strong> The pump is installed below the tank outlet so the suction line stays flooded and start-up is straightforward.\n            </figcaption>\n          </figure>\n        </div>\n        \n        <h2>Mechanical basics: foundation, access, and alignment</h2>\n        <p>\n          Hydraulic performance is only half the story—many “hydraulic” problems are actually mechanical.\n          Poor foundations and pipe strain can create vibration, seal failures, and repeated coupling misalignment.\n        </p>\n        \n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/floo3.png\" alt=\"Solid foundation for pump baseplate to limit vibration\">\n            <figcaption>\n              <strong>Foundation.</strong> Use a rigid, flat base (and grout if required). A stiff foundation reduces vibration and preserves alignment.\n            </figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/floo4.png\" alt=\"Clearance around foundation for inspection and maintenance\">\n            <figcaption>\n              <strong>Maintenance access.</strong> Leave clearance for coupling guard removal, strainer cleaning, and seal/bearing work (example guideline: ~70&nbsp;cm each side when space allows).\n            </figcaption>\n          </figure>\n        </div>\n        \n        <div class=\"callout\">\n          <strong>Commissioning checkpoint:</strong> Do a final alignment check <em>after</em> piping is connected and supports are tightened.\n          Pipe strain can pull the pump and motor out of alignment.\n        </div>\n        \n        <h2>Suction line best practices (the “do not break these rules” list)</h2>\n        <ul>\n          <li><strong>Avoid high points:</strong> no local peaks where air can collect (air pockets destroy NPSH margin).</li>\n          <li><strong>Minimize fittings:</strong> fewer elbows/valves = lower suction losses (h<sub>L</sub>).</li>\n          <li><strong>Keep velocity low:</strong> suction line is often one size larger than the pump nozzle.</li>\n          <li><strong>Provide a vent/drain:</strong> for safe maintenance and reliable start-up after interventions.</li>\n        </ul>\n        \n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/floo5.png\" alt=\"Independent pipe supports for suction and discharge lines near the pump\">\n            <figcaption>\n              <strong>Pipe supports.</strong> Support suction/discharge piping independently. Pump nozzles should not carry pipe weight or thermal loads.\n            </figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/floo6.png\" alt=\"Y-strainer on suction line upstream of the pump\">\n            <figcaption>\n              <strong>Y-strainer.</strong> Protects the impeller and mechanical seal from solids. Plan access for cleaning and consider a differential pressure check if clogging is possible.\n            </figcaption>\n          </figure>\n        </div>\n        \n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/floo7.png\" alt=\"Eccentric reducer on suction line; oversized suction pipe to reduce friction losses\">\n            <figcaption>\n              <strong>Eccentric reducer on suction.</strong> Use an eccentric reducer (typically <em>flat-on-top</em>) to avoid air pockets and reduce turbulence at the pump inlet.\n            </figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/floo8.png\" alt=\"Pressure measurements at suction and discharge for performance control\">\n            <figcaption>\n              <strong>Instrumentation.</strong> Suction and discharge pressure readings help track differential head, diagnose plugged strainers, and detect cavitation early.\n            </figcaption>\n          </figure>\n        </div>\n        \n        <h2>Discharge-side protection (still matters for reliability)</h2>\n        <p>\n          Even with excellent suction conditions, the discharge line must protect the pump during transients\n          (shutdown, power loss, valve closure) and avoid reverse flow.\n        </p>\n        \n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/floo9.png\" alt=\"Discharge check valve to prevent reverse flow\">\n            <figcaption>\n              <strong>Check valve.</strong> Install a check valve on the discharge line to prevent reverse flow and potential pump/motor damage.\n            </figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/floo10.png\" alt=\"Expansion joint to accommodate thermal expansion and reduce pipe loads transmitted to pump\">\n            <figcaption>\n              <strong>Flexibility / expansion joint.</strong> Use flexible connectors when thermal expansion or vibration could transmit pipe loads to the pump flanges.\n              (Do not use expansion joints as a substitute for proper alignment and pipe support.)\n            </figcaption>\n          </figure>\n        </div>\n        \n        <h2>Quick field checklist (before first start)</h2>\n        <ol>\n          <li>Suction line full of liquid; vented where needed; no air traps.</li>\n          <li>Suction isolation valve open; strainer clean and installed correctly.</li>\n          <li>Discharge valve cracked open for controlled start (procedure depends on pump/process).</li>\n          <li>Coupling guard installed; alignment checked; base bolts tight.</li>\n          <li>Record suction and discharge pressures at design flow for a baseline “health snapshot.”</li>\n        </ol>\n        \n        <div class=\"callout\">\n          <strong>Troubleshooting hint:</strong> If flow drops and suction pressure becomes more negative, suspect suction restriction (plugged strainer, valve not fully open, unexpected fittings).\n          If discharge pressure drops while suction is stable, suspect impeller wear, rotation error, or internal recirculation.\n        </div>\n        "
    },
    {
      "id": "ch2-suction-lift",
      "chapter": "Chapter 2 — Pump Installation",
      "title": "3. Suction lift pump: priming, foot valves, and air management",
      "content": "\n\n<p class=\"lead\">\n  A <strong>suction lift</strong> installation places the pump <em>above</em> the liquid level in the source tank.\n  Because the suction line is under vacuum during operation, even a tiny leak can ingest air and the line may drain when the pump stops.\n  The practical risks are <strong>loss of prime</strong>, <strong>unstable flow</strong>, and a <strong>reduced NPSH margin</strong>.\n</p>\n\n<div class=\"callout\">\n  <strong>Engineering rule:</strong> If you can avoid suction lift, do it. Moving the pump below the liquid level (flooded suction),\n  pressurizing the tank, or using a submersible/vertical turbine pump usually improves reliability dramatically.\n</div>\n\n<!-- Lift1: schematic view + hardware intent -->\n<div class=\"grid2\">\n  <figure>\n    <img src=\"images/Lift1.png\" alt=\"Suction lift pump schematic with recommended valves, priming line, drain, and pressure indicators\">\n    <figcaption><strong>Lift1.</strong> Typical suction-lift arrangement: the pump must pull liquid up to its suction nozzle, so air leaks and air pockets are critical.</figcaption>\n  </figure>\n\n  <div class=\"callout\">\n    <strong>What the schematic is telling you (numbers in Lift1)</strong>\n    <ul>\n      <li><strong>(1) Discharge isolation valve:</strong> keep isolation on the discharge side for safe maintenance (avoid “vacuum-side” isolation when possible).</li>\n      <li><strong>(2) Suction check valve / foot valve:</strong> prevents the suction line from draining back into the tank and helps keep the system primed.</li>\n      <li><strong>(3) Discharge check valve:</strong> prevents reverse flow and protects the pump during shutdown.</li>\n      <li><strong>(4) Priming / vent connection:</strong> a dedicated point to fill the suction line and expel air before startup.</li>\n      <li><strong>(5) Drain valve:</strong> allows controlled draining for maintenance and winterization.</li>\n      <li><strong>(6–7) Pressure indicators (PI):</strong> suction and discharge readings help confirm prime and diagnose restrictions/cavitation.</li>\n    </ul>\n    <!-- Instructor comment: The most common “mystery” failures on suction lift are actually instrumentation and air-leak problems, not pump curve problems. -->\n  </div>\n</div>\n\n<h2>Physical limit: how high can a pump “suck”?</h2>\n<p>\n  A centrifugal pump does not “pull” liquid upward by force; it reduces pressure at the impeller eye, and the <em>atmosphere</em> pushes the liquid up the suction line.\n  The theoretical limit for water is about <strong>10 m</strong> at sea level, but real installations are typically lower (often <strong>6–8 m</strong>) because of suction losses and vapor pressure effects.\n</p>\n<pre class=\"equation\">h_lift,usable ≈ (p_atm − p_vap)/(ρ g) − h_L,suction − NPSH_R</pre>\n\n<div class=\"callout\">\n  <strong>Interpretation:</strong> Every elbow, strainer, or undersized suction pipe increases <em>h<sub>L,suction</sub></em> and steals your lifting capability.\n  In suction lift, protecting NPSH is mainly about <strong>minimizing suction-side losses</strong> and <strong>eliminating air ingestion</strong>.\n</div>\n\n<h2>Priming: remove air before start</h2>\n<p>\n  Priming means filling the pump casing and suction line with liquid and venting all trapped air.\n  If the casing contains mostly air, the impeller will churn gas: head collapses, flow drops to near zero, and the pump can overheat quickly.\n</p>\n\n<figure>\n  <img src=\"images/Lift2.png\" alt=\"Priming concept showing vent/priming port used to fill the suction line and remove air from the casing\">\n  <figcaption><strong>Lift2.</strong> Priming concept: always provide a high-point vent/priming point (manual or automatic) so air can escape.</figcaption>\n</figure>\n\n<h3>Practical priming options</h3>\n<ul>\n  <li><strong>Manual priming:</strong> fill via a priming port while venting air until a steady, air-free liquid stream appears.</li>\n  <li><strong>Self-priming centrifugal pumps:</strong> retain liquid in the casing and separate air during startup (good for intermittent duty).</li>\n  <li><strong>Vacuum priming systems:</strong> evacuate air automatically from the suction line (common in dewatering and utility services).</li>\n  <li><strong>Ejector/eductor priming:</strong> uses a motive fluid to create a vacuum (simple, but typically less efficient).</li>\n</ul>\n\n<!-- Instructor comment: For “intermittent” services (start/stop cycles), choose priming strategy first, then choose pump model. -->\n\n<h3>Startup checklist (manual priming example)</h3>\n<ol>\n  <li>Verify the <strong>foot valve</strong> and <strong>strainer</strong> are submerged, clean, and unobstructed.</li>\n  <li>Fill the casing and suction line through the <strong>priming connection</strong>; keep the <strong>vent open</strong> until air is fully expelled.</li>\n  <li>Crack open the discharge valve (procedure depends on system) and start the pump.</li>\n  <li>Confirm stable suction/discharge pressures and steady flow (no surging, no “air chatter”).</li>\n  <li>After stabilization, adjust the discharge valve to the target operating point.</li>\n</ol>\n\n<div class=\"callout\">\n  <strong>Safety note:</strong> Venting can release trapped pressure or hot fluid depending on the system.\n  Follow site procedures (lockout/tagout, PPE, and controlled venting) during commissioning and maintenance.\n</div>\n\n<h2>Foot valves: keep the suction line full</h2>\n<p>\n  A <strong>foot valve</strong> is a check valve installed at the end of the suction pipe inside the tank (usually combined with an inlet strainer).\n  Its main role is to prevent backflow that would drain the suction line after shutdown—making the next start far easier.\n</p>\n<ul>\n  <li><strong>Benefit:</strong> reduces loss-of-prime events and shortens startup time.</li>\n  <li><strong>Cost:</strong> adds suction loss (reduces NPSH<sub>A</sub>) and can clog or stick in dirty service.</li>\n  <li><strong>Best practice:</strong> make it <em>accessible</em> for inspection and cleaning; size it to keep inlet velocity low.</li>\n</ul>\n\n<div class=\"callout\">\n  <strong>Common symptom:</strong> If the pump primes successfully after manual filling but loses prime after a stop,\n  suspect a leaking foot valve or a suction-side air leak (vacuum leaks may not show any liquid leakage outward).\n</div>\n\n<h2>Air management: design so air has nowhere to hide</h2>\n<p>\n  Suction lift systems fail more often from <strong>air handling</strong> than from hydraulic sizing.\n  Good layouts prevent air pockets and provide a reliable venting strategy during commissioning and after maintenance.\n</p>\n\n<figure>\n  <img src=\"images/Lift3.png\" alt=\"Air management diagram showing trapped air pocket at a high point and a vent/air release valve\">\n  <figcaption><strong>Lift3.</strong> Air management: avoid high points on the suction line; if unavoidable, install a vent/air release at the highest point.</figcaption>\n</figure>\n\n<h3>Design checklist for suction lift lines</h3>\n<ol>\n  <li><strong>No “humps”:</strong> slope the suction line continuously upward toward the pump so air migrates to the pump/vent.</li>\n  <li><strong>Oversize the suction pipe:</strong> lower velocity reduces friction loss and makes priming easier.</li>\n  <li><strong>Minimize fittings:</strong> every elbow/valve consumes NPSH margin and increases priming difficulty.</li>\n  <li><strong>Air-tight construction:</strong> treat the suction line like a vacuum line—use proper gaskets, sealants, and torque practices.</li>\n  <li><strong>Tank intake:</strong> keep the inlet submerged and avoid vortexing; use anti-vortex devices if needed.</li>\n</ol>\n\n<div class=\"callout\">\n  <strong>Why air causes instability:</strong> Entrained air reduces effective density and disrupts impeller loading.\n  The result can be surging, noise, vibration, loss of head, and “cavitation-like” damage—even when the pump is correctly sized.\n</div>\n\n<h3>Troubleshooting (fast diagnosis)</h3>\n<ul>\n  <li><strong>No prime / no suction:</strong> air leak, blocked strainer, stuck foot valve, or high-point air pocket.</li>\n  <li><strong>Primes then quickly loses flow:</strong> suction line drains back (foot valve leak) or intermittent air ingestion (vortexing, loose joint).</li>\n  <li><strong>Noise/vibration with fluctuating discharge pressure:</strong> two-phase flow (air + liquid) and/or cavitation due to low NPSH.</li>\n</ul>\n        "
    },
    {
      "id": "ch2-technologies",
      "chapter": "Chapter 2 — Pump Installation",
      "title": "4. Hydraulic pump technologies: centrifugal vs positive displacement",
      "content": "\n        <p class=\"lead\">\n          In industry, choosing a pump is primarily choosing a <strong>mechanism for adding energy</strong> to the fluid.\n          Two big families dominate:\n          <strong>centrifugal (dynamic)</strong> pumps and <strong>positive displacement</strong> pumps.\n          They behave very differently when the discharge pressure changes, so the “best” choice depends on your\n          fluid (viscosity, solids, gas), your control strategy, and your required operating range.\n        </p>\n\n        <figure>\n          <img src=\"images/pump1.png\" alt=\"Overview of hydraulic pump technologies (centrifugal and positive displacement examples)\">\n          <figcaption>\n            Pump technologies span dynamic machines (centrifugal) and volumetric machines (gear/screw/piston/diaphragm…).\n            In this section we focus on the engineering decision: <em>centrifugal vs positive displacement</em>.\n          </figcaption>\n        </figure>\n\n        <div class=\"callout\">\n          <strong>Rule of thumb:</strong>\n          If you need <strong>high flow</strong> at <strong>moderate head</strong> with a simple, robust machine, start with a centrifugal pump.\n          If you need <strong>nearly constant flow</strong>, <strong>very high pressure</strong>, or <strong>high-viscosity handling</strong>, start with positive displacement.\n        </div>\n\n        <h2>1) Centrifugal pumps (dynamic pumps)</h2>\n        <p>\n          A centrifugal pump uses a rotating <strong>impeller</strong> to increase the fluid’s angular momentum.\n          The volute/diffuser then converts part of that kinetic energy into pressure (head).\n          The result is a characteristic behavior: <strong>head generally decreases as flow increases</strong>.\n        </p>\n\n        <figure>\n          <img src=\"images/pump2.png\" alt=\"Centrifugal pump principle: impeller, volute, suction, discharge\">\n          <figcaption>\n            Principle of a centrifugal pump: liquid enters at the <strong>impeller eye</strong>, gains energy in the rotating passages,\n            and exits to the volute/diffuser toward the discharge.\n          </figcaption>\n        </figure>\n\n        <!-- Instructor note: At master level, link the qualitative picture to Euler’s turbomachinery equation. -->\n        <h3>Energy transfer (Euler pump equation – conceptual)</h3>\n        <p>\n          In turbomachinery, the ideal (theoretical) head is linked to the change in angular momentum:\n        </p>\n        <pre class=\"equation\">H_th = (U₂ V_θ2 − U₁ V_θ1) / g</pre>\n        <p class=\"muted\">\n          where U is the blade speed and V<sub>θ</sub> is the tangential component of the absolute velocity.\n          Real pumps deliver a lower head due to losses (slip, friction, leakage, recirculation).\n        </p>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/pump3.png\" alt=\"Impeller anatomy: vanes, eye, and flow path in a centrifugal pump\">\n            <figcaption>\n              The <strong>impeller</strong> is the rotating component.\n              The open inlet at the center is the <strong>eye</strong>, a critical region for cavitation risk.\n            </figcaption>\n          </figure>\n\n          <figure>\n            <img src=\"images/pump4.png\" alt=\"Centrifugal pump flow pattern highlighting impeller and volute\">\n            <figcaption>\n              Flow enters axially and exits radially. The increasing passage area helps manage velocity and losses,\n              while the volute collects the flow and raises static pressure.\n            </figcaption>\n          </figure>\n        </div>\n\n        <div class=\"callout\">\n          <strong>Cavitation reminder:</strong>\n          The lowest pressure is often near the <strong>impeller eye</strong>. If local pressure drops below the vapor pressure,\n          bubbles form and collapse downstream. This is why <strong>NPSH</strong> constraints are central in centrifugal pump design and installation.\n        </div>\n\n        <h3>Impeller type matters (enclosed vs semi-open vs open)</h3>\n        <p>\n          The impeller geometry is a trade-off between <strong>efficiency</strong>, <strong>solids handling</strong>, and <strong>robustness</strong>.\n          As you move toward more open designs, clearance control becomes more sensitive and efficiency usually drops,\n          but clogging resistance improves.\n        </p>\n\n        <figure>\n          <img src=\"images/pump5.png\" alt=\"Enclosed, semi-open and open impeller types with viscosity and efficiency trends\">\n          <figcaption>\n            Typical trade-off: enclosed impellers are efficient for clean liquids; semi-open/open designs tolerate more viscous fluids or solids,\n            at the cost of efficiency and tighter wear-clearance management.\n          </figcaption>\n        </figure>\n\n        <!-- Optional enrichment: this comment can be removed if you want a shorter lesson. -->\n        <!-- Practical tip: if your pump handles slurry or wastewater, always discuss solids size, concentration, and abrasion with the vendor. -->\n\n        <h2>2) Positive displacement pumps (volumetric pumps)</h2>\n        <p>\n          A positive displacement (PD) pump traps a fixed volume and forces it from suction to discharge.\n          For a given speed, the flow rate is almost constant (until slip/leakage becomes significant).\n          This makes PD pumps excellent for <strong>metering</strong>, <strong>high pressure</strong>, and <strong>high viscosity</strong>.\n        </p>\n\n        <figure>\n          <img src=\"images/pump6.png\" alt=\"Piston pump (reciprocating positive displacement pump) and pulsating flow\">\n          <figcaption>\n            Example of a <strong>reciprocating (piston)</strong> pump: the delivered flow is inherently <strong>pulsating</strong>.\n            Pulsation dampeners are often used when the downstream process requires a smoother flow.\n          </figcaption>\n        </figure>\n\n        <h3>Flow scaling (why PD pumps are “constant-flow” machines)</h3>\n        <p>\n          A simple way to see the difference with centrifugal pumps is to write the ideal displacement relation:\n        </p>\n        <pre class=\"equation\">Q_th = V_d · n</pre>\n        <p class=\"muted\">\n          where V<sub>d</sub> is the displaced volume per revolution (or per stroke) and n is rotational speed (or stroke frequency).\n          Real PD pumps have <em>slip</em> (internal leakage), so Q decreases slightly as discharge pressure increases.\n        </p>\n\n        <div class=\"callout\">\n          <strong>Safety-critical point (do not ignore):</strong>\n          PD pumps must have a <strong>relief valve</strong> or bypass protection.\n          If the discharge is blocked (“dead-headed”), pressure rises rapidly and can rupture piping or damage the pump.\n        </div>\n\n        <h3>Common positive displacement (PD) pump architectures</h3>\n        <p>\n          Positive displacement pumps exist in many mechanical designs. Below are a few common <em>volumetric</em>\n          technologies you will encounter in practice. Notice how the <strong>number of pumping elements</strong>\n          affects the <strong>flow ripple</strong> (pulsation).\n        </p>\n\n        <figure>\n          <img src=\"images/pump7.png\" alt=\"Double-acting piston pump schematic and flow ripple\">\n          <figcaption>\n            <strong>Double-acting piston pump:</strong> discharge occurs on both strokes, increasing average flow\n            and reducing pulsation compared with a single-acting piston.\n          </figcaption>\n        </figure>\n\n        <figure>\n          <img src=\"images/pump8.png\" alt=\"Multi-piston pump concept and smoother flow ripple\">\n          <figcaption>\n            <strong>Multi‑piston pump:</strong> several pistons are phase-shifted, so individual pulsations overlap and the\n            delivered flow is much smoother. This is one reason multi-piston units are popular in high-pressure hydraulics.\n          </figcaption>\n        </figure>\n\n        <figure>\n          <img src=\"images/pump9.png\" alt=\"Summary table for piston pump: advantages, disadvantages and uses\">\n          <figcaption>\n            Quick summary of <strong>piston pump</strong> characteristics (advantages, limitations, and typical uses).\n          </figcaption>\n        </figure>\n\n        <figure>\n          <img src=\"images/pump10.png\" alt=\"Diaphragm piston pump summary: chemical isolation and uses\">\n          <figcaption>\n            <strong>Piston pump with diaphragm:</strong> the diaphragm isolates the pumped fluid from moving parts.\n            This improves chemical compatibility and leakage safety (common for corrosive or hazardous liquids).\n          </figcaption>\n        </figure>\n\n        <figure>\n          <img src=\"images/pump11.png\" alt=\"Rotary positive displacement pumps: lobe pump and gear pump\">\n          <figcaption>\n            <strong>Rotary PD pumps</strong> such as <strong>gear</strong> and <strong>lobe</strong> pumps deliver flow by\n            trapping and transporting pockets of fluid. They typically provide a steadier flow than single-piston pumps.\n          </figcaption>\n        </figure>\n\n        <figure>\n          <img src=\"images/pump12.png\" alt=\"Summary table for lobe and gear pumps: advantages, disadvantages and uses\">\n          <figcaption>\n            Practical comparison of <strong>lobe</strong> and <strong>gear</strong> pumps (performance and typical applications).\n          </figcaption>\n        </figure>\n\n        <div class=\"callout\">\n          <strong>Design note:</strong>\n          When your process is sensitive to flow pulsation (pressure ripple, vibration, or dosing accuracy), prefer\n          <strong>multi-element PD pumps</strong> (multi-piston, multi-screw, etc.) or add a <strong>pulsation dampener</strong>.\n          When handling viscous but clean liquids at moderate pressures, <strong>gear/lobe</strong> pumps are often compact and efficient.\n        </div>\n\n        \n\n        <h2>3) Reading manufacturer technology maps (head vs flow)</h2>\n        <p>\n          In real projects, pump selection rarely starts from equations alone. Manufacturers often publish\n          <strong>technology maps</strong> (or selection charts) plotted as <strong>head</strong> H versus <strong>flow rate</strong> Q.\n          Your duty point must lie inside a feasible region for the chosen technology.\n        </p>\n\n        <figure>\n          <img src=\"images/pump13.png\" alt=\"Pump technology map: head H (m) versus flow rate Q (L/s)\">\n          <figcaption>\n            Example of a manufacturer-style selection map: ranges are organized by <strong>head</strong> (vertical axis)\n            and <strong>flow rate</strong> (horizontal axis). Use it as a <em>first screening tool</em>, then confirm with\n            the full pump curve (H–Q, efficiency, power, NPSH<sub>R</sub>).\n          </figcaption>\n        </figure>\n\n        <div class=\"callout\">\n          <strong>Units checkpoint:</strong> you will see Q in m<sup>3</sup>/h, L/s, or gpm depending on the catalog.\n          Always convert before comparing technologies. Head H (m) is related to pressure rise by\n          <span class=\"muted\">Δp ≈ ρ g H</span> (for a given fluid density).\n        </div>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/pump14.png\" alt=\"Technology map highlighting the centrifugal pump zone (high flow, limited head)\">\n            <figcaption>\n              <strong>Centrifugal zone:</strong> typically <strong>high flow</strong> capability, but head (pressure rise) is\n              limited compared with positive displacement machines.\n            </figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/pump15.png\" alt=\"Technology map highlighting the volumetric (positive displacement) pump zone (high head, limited flow)\">\n            <figcaption>\n              <strong>Positive displacement (volumetric) zone:</strong> typically <strong>high head / high pressure</strong>\n              capability, but flow is more limited.\n            </figcaption>\n          </figure>\n        </div>\n\n        <!-- Instructor note: This diagram is a good bridge to the next lesson on series/parallel operation. -->\n        <figure>\n          <img src=\"images/pump16.png\" alt=\"Technology map showing how series and parallel pump associations shift the operating region\">\n          <figcaption>\n            <strong>How to move your operating point:</strong> pumps in <strong>series</strong> increase available head (move “up”),\n            while pumps in <strong>parallel</strong> increase flow capacity (move “right”).\n            This is exactly the idea developed later in <em>Section 7: Pump associations</em>.\n          </figcaption>\n        </figure>\n\n        <h2>4) Quick selection guide (centrifugal vs PD)</h2>\n        <div class=\"grid2\">\n          <div class=\"callout\">\n            <strong>Choose centrifugal when…</strong>\n            <ul>\n              <li>You need <strong>medium to very high flow</strong> with <strong>moderate head</strong>.</li>\n              <li>The fluid is <strong>clean</strong> and <strong>low-to-moderate viscosity</strong>.</li>\n              <li>You can accept that <strong>flow changes with system resistance</strong>.</li>\n              <li>You plan to operate near the <strong>best efficiency point (BEP)</strong>.</li>\n            </ul>\n          </div>\n\n          <div class=\"callout\">\n            <strong>Choose positive displacement when…</strong>\n            <ul>\n              <li>You need <strong>accurate dosing</strong> (metering) or <strong>nearly constant flow</strong>.</li>\n              <li>You need <strong>very high pressure</strong> at modest flow rates.</li>\n              <li>The fluid is <strong>highly viscous</strong> or shear-sensitive (depending on PD type).</li>\n              <li>You must maintain flow despite large downstream pressure fluctuations.</li>\n            </ul>\n          </div>\n        </div>\n\n        <h3>Common practical questions (use these in projects)</h3>\n        <ol>\n          <li><strong>How variable is the operating point?</strong> (wide flow range → centrifugal with VFD may be best)</li>\n          <li><strong>What is the viscosity at operating temperature?</strong> (high μ → consider PD or a special centrifugal design)</li>\n          <li><strong>Is the fluid clean?</strong> (solids/abrasion → impeller choice, clearances, materials)</li>\n          <li><strong>Can you throttle safely?</strong> (PD requires relief; centrifugal can be throttled within limits)</li>\n          <li><strong>What is the cavitation margin?</strong> (NPSH is often the real limiter in practice)</li>\n        </ol>\n\n        <details class=\"solution\">\n          <summary class=\"btn\">Mini-exercise: pick a technology</summary>\n          <p>\n            Decide whether you would start from a centrifugal pump or a positive displacement pump for each service:\n          </p>\n          <ul>\n            <li><strong>A)</strong> Large cooling-water circulation loop (very high flow, low viscosity).</li>\n            <li><strong>B)</strong> Polymer melt transfer line (very high viscosity, moderate flow).</li>\n            <li><strong>C)</strong> Chemical dosing skid (small flow, tight accuracy requirement).</li>\n            <li><strong>D)</strong> High-pressure hydraulic test bench (very high pressure).</li>\n          </ul>\n\n          <div class=\"callout\">\n            <strong>One reasonable answer:</strong>\n            A → centrifugal; B → PD (screw/gear); C → PD (metering diaphragm); D → PD (piston/plunger).\n            <span class=\"muted\">Always validate with the full system curve, NPSH, and vendor data.</span>\n          </div>\n        </details>\n"
    },
    {
      "id": "ch2-sizing",
      "chapter": "Chapter 2 — Pump Installation",
      "title": "5. Sizing a pump: from system data to operating point",
      "content": "\n        <p class=\"lead\">\n          Pump sizing is not just picking a catalog number. It is a structured workflow that links the <strong>system</strong>\n          (piping + equipment) to a pump\u2019s <strong>characteristic curves</strong> and yields a defensible <strong>operating point</strong>.\n        </p>\n\n        <div class=\"callout\">\n          <strong>Goal of this section:</strong> determine a duty point <strong>(Q<sub>v</sub>, H<sub>p</sub>)</strong>, then select a pump that operates\n          <strong>reliably</strong> and <strong>efficiently</strong> at that point (with adequate NPSH margin and motor power).\n        </div>\n\n        <h2>Step 1 \u2014 Data collection</h2>\n        <!-- S1: course slide (data collection inputs) -->\n        <figure>\n          <img src=\"images/S1.png\" alt=\"Step 1: data collection for pump sizing (flow rate Qv, pressures P, velocities U, elevations Z, and network data)\">\n          <figcaption><strong>S1.</strong> Start by collecting the flow requirement, boundary conditions (P, U, Z), and the hydraulic network data.</figcaption>\n        </figure>\n\n        <h3>1A) Required flow rate Q<sub>v</sub></h3>\n        <ul>\n          <li><strong>Design flow</strong> (normal duty point) and, if relevant, <strong>minimum</strong> and <strong>maximum</strong> flow.</li>\n          <li>Required <strong>availability</strong> (continuous, intermittent) and the expected operating profile (hours/year).</li>\n          <li>Specify the unit clearly: m\u00b3/s, m\u00b3/h, L/s\u2026 and keep it consistent in calculations.</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Unit conversion checkpoint:</strong> 1 m\u00b3/h = 2.777\u00d710<sup>\u22124</sup> m\u00b3/s.\n          Many pump charts use m\u00b3/h (or gpm), while Bernoulli calculations are often done in SI (m\u00b3/s).\n        </div>\n\n        <h3>1B) Boundary conditions (departure and arrival points)</h3>\n        <p>\n          Define two reference points: the <strong>starting point A</strong> (often a tank free surface or the pump suction gauge tap)\n          and the <strong>arrival point B</strong> (often a discharge tank, a consumer inlet, or the pump discharge gauge tap).\n          At each point, specify:\n        </p>\n        <ul>\n          <li>Pressure <strong>P</strong> (absolute or gauge \u2014 be consistent)</li>\n          <li>Velocity <strong>U</strong> (often negligible at large tank free surfaces)</li>\n          <li>Elevation <strong>Z</strong> (relative to a chosen datum)</li>\n        </ul>\n\n        <h3>1C) Hydraulic network description</h3>\n        <ul>\n          <li>Straight pipes: <strong>length</strong>, <strong>diameter</strong>, material/roughness (for friction factor).</li>\n          <li>Fittings and valves: list <strong>minor-loss coefficients</strong> (\u03a3K) or equivalent lengths.</li>\n          <li>Operating conditions: expected valve openings, filters/strainers cleanliness, and any elevation changes.</li>\n        </ul>\n\n        <hr>\n\n        <h2>Step 2 \u2014 Find the worst circuit (highest pressure drop)</h2>\n        <p>\n          In a branched network, the pump must satisfy the most demanding path (also called the <strong>critical path</strong>):\n          the circuit that requires the <strong>highest total head</strong> at the design flow.\n        </p>\n\n        <div class=\"grid2\">\n          <!-- S2: course slide (network and \u201cworst circuit\u201d idea) -->\n          <figure>\n            <img src=\"images/S2.png\" alt=\"Step 2: identify the worst circuit with the highest pressure drop in a branched network\">\n            <figcaption><strong>S2.</strong> In networks, you must identify the branch (or outlet) associated with the largest head requirement.</figcaption>\n          </figure>\n\n          <!-- S3: course slide (example of candidate circuits) -->\n          <figure>\n            <img src=\"images/S3.png\" alt=\"Example: comparing multiple candidate circuits in a branched network to identify the worst one\">\n            <figcaption><strong>S3.</strong> Compare candidate circuits; the one with the largest total losses + static head sets the pump head.</figcaption>\n          </figure>\n        </div>\n\n        <h3>How to do it in practice</h3>\n        <ol>\n          <li><strong>Enumerate</strong> all relevant flow paths from the supply to each consumer/outlet.</li>\n          <li><strong>Compute</strong> head losses for each path (major + minor losses) at the design flow.</li>\n          <li><strong>Select</strong> the path with the largest required head \u2014 that is the worst (critical) circuit.</li>\n        </ol>\n\n        <div class=\"callout\">\n          <strong>Master-level remark:</strong> If flows split between branches, the \u201cworst circuit\u201d may depend on the flow distribution,\n          which can require an iterative network solution (Hardy\u2013Cross, EPANET, or a spreadsheet solver). For preliminary sizing,\n          use a conservative distribution and document assumptions.\n        </div>\n\n        <hr>\n\n        <h2>Step 3 \u2014 Calculation of total dynamic head H<sub>p</sub></h2>\n        <!-- S4: course slide (Bernoulli-based head equation) -->\n        <figure>\n          <img src=\"images/S4.png\" alt=\"Step 3: total dynamic head calculation using Bernoulli equation (pressure, velocity, elevation, and losses)\">\n          <figcaption><strong>S4.</strong> Use the generalized Bernoulli equation to compute the head the pump must add.</figcaption>\n        </figure>\n\n        <p>\n          Between points A and B, the pump head required is (general form):\n        </p>\n        <pre class=\"equation\">H_p = (P_B \u2212 P_A)/(\u03c1 g) + (U_B\u00b2 \u2212 U_A\u00b2)/(2 g) + (Z_B \u2212 Z_A) + h_L</pre>\n\n        <ul>\n          <li><strong>Static head</strong>: (Z<sub>B</sub> \u2212 Z<sub>A</sub>) + (P<sub>B</sub> \u2212 P<sub>A</sub>)/(\u03c1g)</li>\n          <li><strong>Dynamic term</strong>: (U<sub>B</sub>\u00b2 \u2212 U<sub>A</sub>\u00b2)/(2g) (often small if A and B are large reservoirs)</li>\n          <li><strong>Losses</strong> h<sub>L</sub>: major (Darcy\u2013Weisbach) + minor (\u03a3K U\u00b2/2g)</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Shortcut in field testing:</strong> If you have reliable pressure gauges at the pump suction and discharge,\n          you can estimate <em>pump differential head</em> as\n          <strong>H_p \u2248 (P_discharge \u2212 P_suction)/(\u03c1 g)</strong>,\n          then add small corrections if gauge elevations and pipe velocities differ significantly.\n        </div>\n\n        <hr>\n\n        <h2>Step 4 \u2014 Choose the pump model using manufacturer diagrams</h2>\n        <p>\n          Once the duty point <strong>(Q<sub>v</sub>, H<sub>p</sub>)</strong> is known, select a pump whose <strong>H\u2013Q</strong> curve passes through it,\n          ideally <strong>close to the Best Efficiency Point (BEP)</strong>.\n        </p>\n\n        <div class=\"grid2\">\n          <!-- S5: pump selection map (families of pumps on the same chart) -->\n          <figure>\n            <img src=\"images/S5.png\" alt=\"Step 4: choose a pump model using manufacturer performance maps (Hp vs Qv)\">\n            <figcaption><strong>S5.</strong> Manufacturer selection map: locate the duty point (Q<sub>v</sub>, H<sub>p</sub>) and identify candidate pump families.</figcaption>\n          </figure>\n\n          <!-- S6: zoom + naming convention (xxx-yyy) -->\n          <figure>\n            <img src=\"images/S6.png\" alt=\"Pump designation and impeller diameter concept (xxx-yyy) on the manufacturer map\">\n            <figcaption><strong>S6.</strong> Typical designation: <em>xxx\u2011yyy</em> where <em>xxx</em> relates to nozzle size and <em>yyy</em> to impeller diameter (verify the catalog\u2019s convention).</figcaption>\n          </figure>\n        </div>\n\n        <h3>What to check on the curves (selection rules)</h3>\n        <ul>\n          <li><strong>Operating region:</strong> duty point should be within the recommended operating range (not too close to shutoff or runout).</li>\n          <li><strong>Efficiency:</strong> prefer operation near BEP to limit vibration, radial thrust, and wear.</li>\n          <li><strong>Impeller diameter / trim:</strong> ensure the required impeller is realistic and leaves adjustment margin.</li>\n          <li><strong>NPSH<sub>R</sub>:</strong> read NPSH required at the duty point and compare with NPSH available (include a margin).</li>\n          <li><strong>Absorbed power:</strong> read the power curve at the duty point (or compute it using \u03b7).</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Engineering habit:</strong> keep a one-page \u201cselection sheet\u201d with Q<sub>v</sub>, H<sub>p</sub>, NPSH<sub>A</sub>,\n          selected pump, impeller diameter, efficiency, absorbed power, and the assumed piping losses.\n          It makes design reviews and troubleshooting much faster.\n        </div>\n\n        <hr>\n\n        <h2>Step 5 \u2014 Power calculation (hydraulic \u2192 shaft \u2192 electric)</h2>\n        <!-- S7: course slide (power formula and impeller diameter impact) -->\n        <figure>\n          <img src=\"images/S7.png\" alt=\"Step 5: power calculation (hydraulic power and absorbed power curves vs flow and impeller diameter)\">\n          <figcaption><strong>S7.</strong> Power increases with flow and with impeller diameter; always check absorbed power at the expected operating point.</figcaption>\n        </figure>\n\n        <p>\n          The hydraulic power delivered to the fluid is:\n        </p>\n        <pre class=\"equation\">P_h = \u03c1 g Q_v H_p</pre>\n\n        <p>\n          The electrical power demand is higher because of pump and motor inefficiencies:\n        </p>\n        <pre class=\"equation\">P_el = \u03c1 g Q_v H_p / (\u03b7_pump \u00b7 \u03b7_motor)</pre>\n\n        <ul>\n          <li>Size the motor using a <strong>margin</strong> (service factor) and consider worst-case fluid density/viscosity.</li>\n          <li>Check that the pump does not overload the motor at off-design conditions (runout can increase power).</li>\n        </ul>\n\n        <hr>\n\n        <h2>Step 6 \u2014 Identify the pump characteristics (\u03b7, impeller, operating window)</h2>\n        <!-- S8: course slide (efficiency curves + impeller diameter) -->\n        <figure>\n          <img src=\"images/S8.png\" alt=\"Step 6: identify pump characteristics (efficiency, impeller diameter, and operating point on the curves)\">\n          <figcaption><strong>S8.</strong> Read efficiency and impeller diameter at the operating point; document the expected performance window.</figcaption>\n        </figure>\n\n        <p>\n          After selection, document the pump \u201cbehavior\u201d around the duty point:\n        </p>\n        <ul>\n          <li><strong>Efficiency \u03b7</strong> at the duty point and expected variation with flow (energy cost driver).</li>\n          <li><strong>Impeller diameter</strong> used (or trim range) and whether a VFD is planned for control.</li>\n          <li><strong>Operating limits:</strong> minimum continuous stable flow, shutoff head, and any manufacturer warnings.</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Final checkpoint:</strong> The operating point is the intersection of the <strong>pump curve</strong> and the <strong>system curve</strong>.\n          Any change in valves, pipe roughness, fluid properties, or speed shifts the operating point\u2014so re-check H, P, and NPSH.\n        </div>\n"
    },
    {
      "id": "ch2-cavitation",
      "chapter": "Chapter 2 — Pump Installation",
      "title": "6. Cavitation and NPSH: a quantitative safety margin",
      "content": "\n        <p class=\"lead\">\n          Cavitation is a <strong>phase-change</strong> phenomenon: vapor bubbles form when the local pressure drops\n          below the liquid <strong>vapor pressure</strong>, then collapse violently when pressure recovers.\n          In pumps, the lowest pressure typically occurs near the <strong>impeller eye</strong> (suction side).\n        </p>\n\n        <div class=\"callout\">\n          <strong>Why you should care:</strong> cavitation causes <strong>noise</strong>, <strong>vibration</strong>, a <strong>loss of head</strong>,\n          and can rapidly <strong>pit and erode</strong> impeller/casing surfaces.\n        </div>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/cav1.png\" alt=\"Cavitation mechanism: pressure drop at the impeller eye compared to vapor pressure\">\n            <figcaption>\n              <strong>Mechanism.</strong> If the minimum pressure along the suction path (often near the <em>impeller eye</em>)\n              falls below the <strong>vapor pressure</strong> at the operating temperature, bubbles form. They collapse downstream\n              as pressure rises again.\n            </figcaption>\n          </figure>\n\n          <figure>\n            <img src=\"images/cav2.png\" alt=\"Examples of cavitation damage on pump components (pitting and erosion)\">\n            <figcaption>\n              <strong>Damage.</strong> Repeated bubble collapse creates micro-jets and shock waves, producing a characteristic\n              <strong>pitting/erosion</strong> pattern. The hydraulic performance degrades and parts can fail.\n            </figcaption>\n          </figure>\n        </div>\n\n        <h2>NPSH: a quantitative safety margin</h2>\n        <p>\n          The engineering control variable for cavitation is the <strong>Net Positive Suction Head</strong> (NPSH), expressed as a head\n          (meters of pumped liquid). Conceptually, it is the <strong>pressure head above vapor pressure</strong> at the pump suction.\n        </p>\n\n        <h3>Definitions</h3>\n        <ul>\n          <li><strong>NPSH<sub>A</sub></strong> (available): provided by the <em>system</em> (tank pressure, elevation, suction losses, vapor pressure).</li>\n          <li><strong>NPSH<sub>R</sub></strong> (required): demanded by the <em>pump</em> at a given flow rate; provided by the manufacturer.</li>\n        </ul>\n\n        <h3>Cavitation avoidance criterion</h3>\n        <pre class=\"equation\">NPSH_A &gt; NPSH_R</pre>\n\n        <!-- Instructor note: Encourage students to treat NPSH as a safety margin problem, not as an \"afterthought\". -->\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/cav3.png\" alt=\"NPSH available definition with suction layout and vapor pressure table versus temperature\">\n            <figcaption>\n              <strong>NPSH<sub>A</sub> calculation.</strong> Use <strong>absolute</strong> pressures (not gauge), subtract the\n              <strong>vapor pressure head</strong> at the operating temperature, and include suction-line losses.\n              The vapor pressure increases quickly with temperature.\n            </figcaption>\n          </figure>\n\n          <figure>\n            <img src=\"images/cav4.png\" alt=\"Manufacturer NPSH required curve versus flow rate showing increase of NPSHR with Q\">\n            <figcaption>\n              <strong>NPSH<sub>R</sub> from the manufacturer.</strong> NPSH<sub>R</sub> generally increases with flow rate.\n              Always check your <em>actual</em> operating flow (including possible transients) and keep a margin.\n            </figcaption>\n          </figure>\n        </div>\n\n        <h2>Practical calculation checklist (NPSH<sub>A</sub>)</h2>\n        <ol>\n          <li>Write the energy balance from the suction free surface (or upstream node) to the <strong>pump suction flange</strong>.</li>\n          <li>Convert pressures to <strong>absolute head</strong>: p/(&rho;g).</li>\n          <li>Subtract <strong>vapor pressure head</strong>: p<sub>vap</sub>(T)/(&rho;g).</li>\n          <li>Subtract suction losses (major + minor): h<sub>f,suction</sub>.</li>\n          <li>The remainder is NPSH<sub>A</sub>. Compare to the manufacturer NPSH<sub>R</sub> at your flow.</li>\n        </ol>\n\n        <h2>How to increase NPSH<sub>A</sub> (practical levers)</h2>\n        <ul>\n          <li>Reduce suction line losses: larger diameter, fewer fittings, cleaner strainers.</li>\n          <li>Lower the pump relative to the liquid level (more static suction head).</li>\n          <li>Increase suction tank pressure (pressurized vessel).</li>\n          <li>Lower the liquid temperature (reduces vapor pressure).</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Engineering margin (recommended):</strong> In real installations, apply a margin because losses, roughness, and operating points change with time.\n          A common practice is <strong>NPSH<sub>A</sub> &ge; 1.1–1.3 × NPSH<sub>R</sub></strong> (or an equivalent head margin),\n          but the right value depends on uncertainty, service severity, and the consequences of cavitation.\n          <br><br>\n          <strong>Reminder:</strong> NPSH<sub>R</sub> is a <em>test-based</em> number (often linked to a small head drop criterion such as 3%),\n          so “no cavitation at NPSH<sub>R</sub>” is not guaranteed—treat it as a minimum threshold.\n        </div>\n        "
    },
    {
      "id": "ch2-associations",
      "chapter": "Chapter 2 — Pump Installation",
      "title": "7. Pump associations: series and parallel operation",
      "content": "\n        <p>\n          When a single pump cannot meet a required duty point, engineers often combine pumps to:\n          <strong>increase head</strong> (series operation) or <strong>increase flow capacity</strong> (parallel operation).\n          The resulting operating point is always found by intersecting the <em>combined pump curve</em> with the\n          <em>system curve</em>.\n        </p>\n\n        <div class=\"grid2\">\n          <div class=\"callout\">\n            <strong>Series (boosting head):</strong><br>\n            Same flow passes through each pump, so heads add at the same <em>Q</em>.<br>\n            <code>H<sub>total</sub>(Q) = H<sub>1</sub>(Q) + H<sub>2</sub>(Q) + &hellip;</code>\n          </div>\n          <div class=\"callout\">\n            <strong>Parallel (boosting capacity):</strong><br>\n            Same head across each branch, so flows add at the same <em>H</em>.<br>\n            <code>Q<sub>total</sub>(H) = Q<sub>1</sub>(H) + Q<sub>2</sub>(H) + &hellip;</code>\n          </div>\n        </div>\n\n        <h2>Series operation</h2>\n        <ul>\n          <li><strong>Use when:</strong> the system requires more head (high-rise, long pipelines, high-pressure processes).</li>\n          <li><strong>Key rule:</strong> the flow rate is common to all pumps; the heads add.</li>\n          <li><strong>Practical note:</strong> because the discharge pressure rises, verify casing pressure limits and\n              motor power (especially at higher flow).</li>\n        </ul>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/ASS1.png\" alt=\"Pump associations: pumps in series (identical pumps) and combined head curve\">\n            <figcaption>Identical pumps in series: the combined curve shows a higher head at the same flow rate.</figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/ASS2.png\" alt=\"Pumps in series with non-identical pumps and combined head curve\">\n            <figcaption>Non-identical pumps in series: the combined curve is obtained by adding heads at the same flow.</figcaption>\n          </figure>\n        </div>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/ASS3.png\" alt=\"Series operation at low flow: total head equals the sum of individual heads\">\n            <figcaption>At low flow rates, the total head is approximately the sum of the individual pump heads.</figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/ASS4.png\" alt=\"Series operation safety: bypass/shutoff zones to avoid pump damage\">\n            <figcaption>\n              Safety for non-identical pumps in series: if one pump is forced beyond its allowable range, it should be\n              shut off and bypassed to avoid damage.\n            </figcaption>\n          </figure>\n        </div>\n\n        <div class=\"callout\">\n          <strong>Engineering checkpoint (series):</strong>\n          With non-identical pumps, the system curve can push one unit near shutoff or into an unsafe operating region.\n          Always check each pump's operating point (flow, head, power, and NPSH margin) at the final duty point.\n        </div>\n\n        <h2>Parallel operation</h2>\n        <ul>\n          <li><strong>Use when:</strong> the system requires more flow (variable demand networks, redundancy/standby capacity).</li>\n          <li><strong>Key rule:</strong> the head is common to all branches; the flows add.</li>\n          <li><strong>Practical note:</strong> install check valves (or non-return valves) on each discharge branch to prevent backflow\n              through a stopped pump.</li>\n        </ul>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/ASS5.png\" alt=\"Pump associations: pumps in parallel (identical pumps) and combined flow curve\">\n            <figcaption>Identical pumps in parallel: the combined curve delivers higher flow at the same head.</figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/ASS6.png\" alt=\"Pumps in parallel with non-identical pumps and combined flow curve\">\n            <figcaption>Non-identical pumps in parallel: sum the branch flow rates at the same head to build the combined curve.</figcaption>\n          </figure>\n        </div>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/ASS7.png\" alt=\"Parallel operation at low head: total flow equals the sum of individual flows\">\n            <figcaption>At low total dynamic head, the combined flow rate approaches the sum of the individual flows.</figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/ASS8.png\" alt=\"Parallel operation safety: shutoff/bypass zones to avoid pump damage\">\n            <figcaption>\n              Safety for non-identical pumps in parallel: if the common head exceeds a pump's allowable operating head,\n              that pump should be shut off (and isolated) to avoid overload or overheating.\n            </figcaption>\n          </figure>\n        </div>\n\n        <div class=\"callout\">\n          <strong>Engineering checkpoint (parallel):</strong>\n          A parallel arrangement does <em>not</em> guarantee equal flow sharing. Small differences in curves or\n          discharge losses can cause one pump to carry most of the load. Use balancing valves (if needed) and confirm\n          stable operation over the expected demand range.\n        </div>\n        \n        "
    },
    // Updated: replaced "ch2_affinity_laws" with AFF1/AFF2/AFF3 and expanded the section (English).
    {
      "id": "ch2-affinity",
      "chapter": "Chapter 2 — Pump Installation",
      "title": "8. Affinity laws: scaling flow, head, and power",
      "content": "\n        <p>\n          The affinity laws provide first-order scaling relations for <strong>geometrically similar</strong> centrifugal pumps.\n          They are widely used to estimate the effect of <strong>variable speed</strong> (VFD control) and <strong>impeller trimming</strong>\n          on flow rate, head, and power.\n        </p>\n\n        <p>\n          These relations come from dimensional analysis (Buckingham &pi;) using the main performance variables:\n          volumetric flow rate <em>Q</em>, total head <em>H</em>, hydraulic power <em>P<sub>h</sub></em>, impeller diameter <em>D</em>,\n          and rotational speed <em>n</em>.\n          Subscripts 1 and 2 denote the values <strong>before</strong> and <strong>after</strong> the change.\n        </p>\n\n        <figure>\n          <img src=\"images/AFF1.png\" alt=\"Affinity laws derived from dimensional analysis: Q/(nD^3), H/(n^2D^2), and Ph/(n^3D^5) are constant\">\n          <figcaption>\n            Dimensional analysis form: Q/(nD\u00b3), H/(n\u00b2D\u00b2), and P<sub>h</sub>/(n\u00b3D\u2075) are (approximately) constant for similar pumps.\n          </figcaption>\n        </figure>\n\n        <h2>General scaling between two operating points</h2>\n        <p class=\"muted\">\n          For the same pump family (similar geometry) operating with the same fluid, the following ratios are commonly used:\n        </p>\n        <pre class=\"equation\">\nQ\u2082 / Q\u2081 = (n\u2082 / n\u2081) (D\u2082 / D\u2081)\u00b3\nH\u2082 / H\u2081 = (n\u2082 / n\u2081)\u00b2 (D\u2082 / D\u2081)\u00b2\nP\u2082 / P\u2081 = (n\u2082 / n\u2081)\u00b3 (D\u2082 / D\u2081)\u2075\n        </pre>\n\n        <figure>\n          <img src=\"images/AFF2.png\" alt=\"Affinity laws simplified cases: fixed diameter or fixed speed\">\n          <figcaption>Useful special cases: fixed diameter (speed change) and fixed speed (impeller trimming).</figcaption>\n        </figure>\n\n        <h2>Quick-use special cases</h2>\n        <div class=\"grid2\">\n          <div>\n            <h3>1) Fixed impeller diameter (D constant)</h3>\n            <pre class=\"equation\">\nQ\u2082 = Q\u2081 (n\u2082/n\u2081)\nH\u2082 = H\u2081 (n\u2082/n\u2081)\u00b2\nP\u2082 = P\u2081 (n\u2082/n\u2081)\u00b3\n            </pre>\n          </div>\n          <div>\n            <h3>2) Fixed speed (n constant)</h3>\n            <pre class=\"equation\">\nQ\u2082 = Q\u2081 (D\u2082/D\u2081)\u00b3\nH\u2082 = H\u2081 (D\u2082/D\u2081)\u00b2\nP\u2082 = P\u2081 (D\u2082/D\u2081)\u2075\n            </pre>\n          </div>\n        </div>\n\n        <h2>Practice problems</h2>\n        <figure>\n          <img src=\"images/AFF3.png\" alt=\"Affinity laws practice exercises: speed increase, impeller diameter reduction, combined changes\">\n          <figcaption>\n            Practice: speed increase, impeller trim, and combined changes (compute Q, H, and P).\n          </figcaption>\n        </figure>\n\n        <!-- Instructor note: The affinity laws assume similar flow patterns and roughly constant efficiency. -->\n        <h2>When do they work (and when not)?</h2>\n        <ul>\n          <li>Best near the <strong>Best Efficiency Point (BEP)</strong> and for moderate changes (rule-of-thumb: \u00b120%).</li>\n          <li>Less accurate for <strong>high-viscosity</strong> liquids, <strong>cavitation</strong>, strong recirculation, or very large speed/diameter changes.</li>\n          <li>Power scaling is for <strong>hydraulic power</strong>. For shaft power, use P<sub>shaft</sub> = P<sub>h</sub>/\u03b7 and remember that \u03b7 can change with operating point.</li>\n          <li>NPSH required generally increases with speed; as a rough check, NPSH<sub>r</sub> often scales close to n\u00b2 (for a fixed diameter).</li>\n          <li>Do not replace a full manufacturer curve when precision is required.</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Engineering workflow:</strong> (1) scale the pump curve using the affinity laws, (2) intersect with the <em>system curve</em> to find the new operating point,\n          (3) check <strong>motor power</strong> and <strong>NPSH margin</strong>, and (4) validate with manufacturer data when the decision is critical.\n        </div>\n        "
    },
    {
      "id": "quiz-2",
      "chapter": "Chapter 2 — Pump Installation",
      "title": "Quiz 2 — Pumps: installation, sizing, NPSH, series/parallel, affinity laws",
      "type": "quiz",
      "quizKey": "quiz2",
      "content": "\n        <p class=\"lead\">\n          This quiz targets the main engineering judgments required for pump selection and safe operation.\n        </p>\n        <div id=\"quiz-container\"></div>\n        "
    },
    {
      "id": "ch3-intro",
      "chapter": "Chapter 3 — Aerodynamics: Drag and Lift Forces",
      "title": "1. What are drag and lift?",
      "content": "\n        <p class=\"lead\">\n          In this chapter we leave <strong>internal flows</strong> (pipes) and move to <strong>external flows</strong>:\n          a moving fluid interacting with a solid body (airfoils, vehicles, buildings, sports balls).\n        </p>\n\n        <p>\n          The flow exerts a distributed load on the body surface. In practice, we are rarely interested in the\n          detailed stress map everywhere on the surface; instead we focus on the <strong>resultant forces</strong> and\n          how they scale with speed, size, and fluid properties.\n        </p>\n\n        <figure>\n          <img src=\"images/1wdl1.png\" alt=\"Introduction to aerodynamics: moving from internal pipe flows to external flows around bodies (drag and lift).\">\n          <figcaption>\n            From internal flows (pipes) to external flows (bodies in a stream): the focus shifts to <strong>drag</strong> and <strong>lift</strong>.\n          </figcaption>\n        </figure>\n\n        <h2>Surface forces: pressure and shear</h2>\n        <p>\n          When a fluid moves over a solid body, it exerts:\n          <strong>pressure forces</strong> (normal to the surface) and <strong>shear forces</strong> (tangential to the surface).\n          The sum of these surface forces can be decomposed into two orthogonal components:\n        </p>\n        <ul>\n          <li><strong>Drag</strong>: the component <em>aligned</em> with the free-stream direction</li>\n          <li><strong>Lift</strong>: the component <em>perpendicular</em> to the free-stream direction</li>\n        </ul>\n\n        <figure>\n          <img src=\"images/1wdl2.png\" alt=\"Definition of drag and lift as components of the resultant pressure and shear forces on a body.\">\n          <figcaption>\n            Drag and lift are the flow-aligned and flow-normal components of the <em>resultant</em> surface forces\n            (pressure + shear).\n          </figcaption>\n        </figure>\n\n        <h2>Why drag matters (and when it helps)</h2>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/1wdl3.png\" alt=\"Drag is often undesirable: wind loads, fuel consumption, vibration, and noise.\">\n            <figcaption>\n              Drag is often an <strong>undesirable</strong> effect: it increases fuel/energy consumption and creates loads on structures.\n            </figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/1wdl5.png\" alt=\"Drag can be beneficial: parachutes, aerodynamic brakes, and deceleration devices.\">\n            <figcaption>\n              In some systems we <strong>want</strong> drag (parachutes, air brakes, decelerators) to dissipate kinetic energy safely.\n            </figcaption>\n          </figure>\n        </div>\n\n        <h2>Streamlined vs blunt bodies</h2>\n        <p>\n          Bodies subject to external flow are commonly classified as <strong>streamlined</strong> or <strong>blunt</strong>.\n          Streamlined shapes guide the flow smoothly, reducing separation and usually lowering pressure (form) drag.\n          Blunt shapes promote separation and large wakes, which often leads to large pressure drag.\n        </p>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/1wdl6.png\" alt=\"Definition of streamlined versus blunt bodies with wind tunnel visualizations and power comparison.\">\n            <figcaption>\n              Streamlined vs blunt: geometry strongly influences separation and wake size (and therefore pressure drag).\n            </figcaption>\n          </figure>\n          <figure>\n            <img src=\"images/1wdl4.png\" alt=\"Illustration comparing a boxy car to a streamlined car and the wake behind each.\">\n            <figcaption>\n              A streamlined rear shape reduces the wake: less momentum loss in the flow usually means less drag.\n            </figcaption>\n          </figure>\n        </div>\n\n        <h2>Force scaling and aerodynamic coefficients</h2>\n        <p>\n          In many engineering regimes, aerodynamic forces scale with the <strong>dynamic pressure</strong>:\n        </p>\n        <pre class=\"equation\">q = &frac12; &rho; V<sup>2</sup></pre>\n\n        <p>\n          To compare different sizes and speeds, drag and lift are nondimensionalized using coefficients:\n        </p>\n        <pre class=\"equation\">\nF_D = &frac12; &rho; V<sup>2</sup> A C_D\nF_L = &frac12; &rho; V<sup>2</sup> A C_L\n        </pre>\n\n        <figure>\n          <img src=\"images/1wdl7.png\" alt=\"Drag and lift coefficient definitions using dynamic pressure and reference area A.\">\n          <figcaption>\n            Dimensionless coefficients C<sub>D</sub> and C<sub>L</sub> collapse force data across scales when the flow is dynamically similar.\n          </figcaption>\n        </figure>\n\n        <h3>Choosing the reference area <em>A</em></h3>\n        <ul>\n          <li><strong>Vehicles:</strong> frontal area is common for drag.</li>\n          <li><strong>Wings/airfoils:</strong> planform area (span × chord) is standard for lift.</li>\n          <li><strong>Cylinders:</strong> projected area D × L is typical.</li>\n        </ul>\n\n        <h3>Similarity parameters (what controls C<sub>D</sub> and C<sub>L</sub>?)</h3>\n        <ul>\n          <li><strong>Reynolds number:</strong> Re = &rho; V L / &mu; (viscous similarity)</li>\n          <li><strong>Mach number</strong> (advanced): M = V / a (compressibility similarity)</li>\n          <li><strong>Angle of attack:</strong> orientation can drastically change lift and drag on an airfoil.</li>\n          <li><strong>Surface roughness:</strong> can trigger earlier transition and shift separation behavior.</li>\n        </ul>\n\n        <!-- Instructor note: A single “constant” C_D value is rarely universal; always state the geometry and the Re (and M, if relevant). -->\n        <div class=\"callout\">\n          <strong>Checkpoint:</strong> Drag and lift are <em>resultant</em> forces from pressure and wall shear stresses.\n          The coefficients C<sub>D</sub> and C<sub>L</sub> depend on geometry, roughness, orientation, and similarity parameters (Re, M).\n        </div>\n        "
    },
    {
      "id": "ch3-friction-vs-pressure",
      "chapter": "Chapter 3 — Aerodynamics: Drag and Lift Forces",
      "title": "2. Friction drag vs pressure drag",
      "content": "        <p class=\"lead\">\n          Drag is the resultant force exerted by a fluid on a body in the <strong>flow direction</strong>.\n          It comes from the combined action of <strong>wall shear</strong> (viscous friction) and <strong>pressure forces</strong>.\n        </p>\n\n        <p>\n          In practice, it is often useful to split drag into two contributions:\n        </p>\n        <ul>\n          <li><strong>Skin-friction drag</strong> (also called <em>friction drag</em>): created by viscous shear stresses along the surface.</li>\n          <li><strong>Pressure drag</strong> (also called <em>form drag</em>): created by a pressure imbalance, usually because the flow separates and forms a wake.</li>\n        </ul>\n\n        <!-- Instructor note: Total drag is the surface integral of (pressure normal) + (shear tangential). This “split” is a bookkeeping tool that matches physical intuition. -->\n        <figure>\n          <img src=\"images/2FRICT1.png\" alt=\"Drag decomposition into friction and pressure contributions, with the standard drag formula and coefficient additivity.\">\n          <figcaption>\n            Total drag can be written with a coefficient: <em>F</em><sub>D</sub> = &frac12; &rho; <em>V</em><sup>2</sup> <em>A</em> <em>C</em><sub>D</sub>.\n            When you can estimate each contribution, you can use <em>C</em><sub>D</sub> = <em>C</em><sub>D,friction</sub> + <em>C</em><sub>D,pressure</sub>.\n          </figcaption>\n        </figure>\n\n        <h2>How to recognize which term dominates</h2>\n        <ul>\n          <li><strong>Streamlined bodies</strong> (airfoils at small angle, well-shaped vehicles): separation is limited → pressure drag is reduced, and <strong>friction drag can dominate</strong>.</li>\n          <li><strong>Blunt bodies</strong> (cylinders normal to flow, sharp-edged shapes): large separation and wake → <strong>pressure drag dominates</strong>.</li>\n        </ul>\n\n        <h2>Examples (flow visualization intuition)</h2>\n        <figure>\n          <img src=\"images/2FRICT2.png\" alt=\"Flow visualizations showing friction-drag-dominated case (flat plate parallel), pressure-drag-dominated case (flat plate normal), and mixed case (cylinder).\">\n          <figcaption>\n            A flat plate <strong>parallel</strong> to the flow experiences mainly friction drag; a flat plate <strong>normal</strong> to the flow experiences mainly pressure drag.\n            A cylinder normal to the flow typically has both, but pressure drag is often the largest term due to the wake.\n          </figcaption>\n        </figure>\n\n        <h2>Design levers (what engineers actually change)</h2>\n        <ul>\n          <li><strong>To reduce friction drag:</strong> smoother surfaces, smaller wetted area, favorable pressure gradients, and (when possible) maintaining laminar flow.</li>\n          <li><strong>To reduce pressure drag:</strong> streamline the shape, avoid sharp adverse pressure gradients, and <strong>delay separation</strong> (geometry, boundary-layer control, fairings).</li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Checkpoint:</strong> If you see a large separated wake, you are paying a pressure-drag penalty.\n          If the flow stays attached and the body has a large wetted area, friction drag becomes the main cost.\n        </div>"
    },
    {
      "id": "ch3-separation",
      "chapter": "Chapter 3 — Aerodynamics: Drag and Lift Forces",
      "title": "3. Flow separation: why boundary layers detach",
      "content": "        <p class=\"lead\">\n          Flow separation occurs when the boundary layer near the surface loses enough momentum that it can no longer\n          follow the surface under an adverse pressure gradient (dp/dx &gt; 0).\n        </p>\n\n        <p>\n          In boundary-layer terms, separation starts when the <strong>wall shear stress</strong> drops to zero and then becomes\n          negative (near-wall <em>reverse flow</em>):\n        </p>\n        <pre class=\"equation\">&tau;<sub>w</sub> = 0  &nbsp;&rarr;&nbsp;  separation point</pre>\n\n        <div class=\"grid2\">\n          <figure>\n            <img src=\"images/3SEP1.png\" alt=\"Flow separation on a body: separation point, separated region, and wake formation\">\n            <figcaption>\n              <strong>Separated wake.</strong> After the separation point, the flow peels away and a recirculating region\n              forms. The low-pressure wake behind the body is the main driver of <strong>pressure (form) drag</strong>.\n              In some geometries a <em>reattachment</em> point exists downstream, creating a separation bubble.\n            </figcaption>\n          </figure>\n\n          <figure>\n            <img src=\"images/3SEP2.png\" alt=\"Airfoil separation at increasing angle of attack illustrating lift loss and stall\">\n            <figcaption>\n              <strong>Airfoil stall.</strong> As the angle of attack increases, separation on the upper surface grows.\n              Beyond a critical angle, the separated region expands dramatically: lift drops and drag increases sharply\n              (stall).\n            </figcaption>\n          </figure>\n        </div>\n\n        <h2>Consequences</h2>\n        <ul>\n          <li>Large wake formation &rarr; pressure drag increases dramatically.</li>\n          <li>For airfoils: separation at high angle of attack leads to <strong>stall</strong> and a sharp drop in lift.</li>\n          <li>Unsteady separation can shed vortices &rarr; fluctuating forces, vibration, and noise.</li>\n          <li>In turbomachinery: separation in blades/diffusers reduces efficiency and can trigger rotating stall (advanced).</li>\n        </ul>\n\n        <h2>What controls where separation happens?</h2>\n        <ul>\n          <li><strong>Pressure gradient:</strong> stronger adverse pressure gradients promote earlier separation.</li>\n          <li><strong>Reynolds number (Re):</strong> changes boundary-layer thickness and the likelihood of transition.</li>\n          <li><strong>Transition / turbulence level:</strong> turbulent boundary layers carry more near-wall momentum.</li>\n          <li><strong>Surface roughness:</strong> can trigger earlier transition (sometimes delaying separation, sometimes increasing drag).</li>\n          <li><strong>Geometry:</strong> sharp corners and sudden expansions create strong deceleration and separation.</li>\n        </ul>\n\n        <h2>Boundary-layer intuition (advanced)</h2>\n        <p>\n          Inside the boundary layer, viscous shear transfers momentum from the core flow to the wall.\n          If the outer-flow pressure rises in the direction of motion, the near-wall fluid may be unable to overcome it,\n          leading to reversed flow and separation.\n        </p>\n\n        <!-- Instructor note: Separation is fundamentally a momentum problem in the near-wall region. Any technique that adds momentum to the boundary layer (or reduces adverse gradients) can delay separation. -->\n        <div class=\"callout\">\n          <strong>Note:</strong> Turbulent boundary layers have more near-wall momentum than laminar ones, so they can resist\n          adverse pressure gradients better—this can <em>delay</em> separation, at the cost of higher skin-friction drag.\n          A classic example is a <em>golf ball</em>: dimples force early transition, shrink the wake, and reduce total drag.\n        </div>\n\n        <h2>How engineers delay separation (design levers)</h2>\n        <ul>\n          <li><strong>Streamline the shape:</strong> avoid sudden expansions and sharp adverse pressure gradients.</li>\n          <li><strong>Boundary-layer trips / roughness (controlled):</strong> trigger transition when it reduces wake size (Re-dependent).</li>\n          <li><strong>Vortex generators:</strong> mix high-momentum outer flow into the boundary layer.</li>\n          <li><strong>Suction / blowing (advanced):</strong> actively add/remove momentum near the wall.</li>\n          <li><strong>High-lift devices:</strong> slats/flaps re-shape the pressure distribution and help keep flow attached longer.</li>\n        </ul>\n        "
    },
    {
      "id": "ch3-drag-coeffs",
      "chapter": "Chapter 3 — Aerodynamics: Drag and Lift Forces",
      "title": "4. Drag coefficients of common geometries",
      "content": "\n        <p class=\"lead\">\n          Drag coefficients <strong>C<sub>D</sub></strong> are not universal constants: they depend on\n          <strong>geometry</strong>, <strong>orientation</strong>, <strong>surface condition</strong>, and especially on the\n          <strong>Reynolds number</strong> (and, at high speeds, on Mach number).\n        </p>\n\n        <figure>\n          <img src=\"images/5DRAG1.png\" alt=\"Drag coefficients of common geometries: Reynolds-number dependence and an example curve for a disk.\">\n          <figcaption>\n            Drag coefficients vary strongly with Reynolds number at low Re; many shapes approach a nearly constant\n            value at higher Re (until special transitions such as the <em>drag crisis</em> occur).\n          </figcaption>\n        </figure>\n\n        <h2>1) Reynolds-number dependence (why C<sub>D</sub> changes)</h2>\n        <p>\n          The Reynolds number compares inertial to viscous effects:\n        </p>\n        <pre class=\"equation\">Re = ρ V L / μ</pre>\n        <p>\n          At very low Reynolds numbers (creeping flow), viscous stresses dominate and the drag force scales\n          approximately with <strong>V</strong>. At higher Reynolds numbers, separation and wake formation become important,\n          and the drag force often scales with <strong>V<sup>2</sup></strong> through the dynamic-pressure model:\n        </p>\n        <pre class=\"equation\">F_D = &frac12; ρ V<sup>2</sup> A C_D</pre>\n\n        <!-- Instructor note: Remind learners that the same body can have different C_D if the flow regime changes (transition, separation point, roughness). -->\n\n        <h2>2) Low-Re (creeping) flow: simple correlations</h2>\n        <p>\n          For <strong>Re &le; 1</strong>, the body shape has a <em>smaller</em> influence than at high Re.\n          Many objects have drag coefficients that scale like <strong>1/Re</strong>.\n          The figure below summarizes common low-Re expressions.\n        </p>\n\n        <figure>\n          <img src=\"images/5DRAG2.png\" alt=\"Low-Re drag coefficients for a sphere, hemisphere, and circular disk with Re definition.\">\n          <figcaption>\n            Low-Re regime (creeping flow): for many shapes, C<sub>D</sub> &propto; 1/Re. Example: sphere\n            C<sub>D</sub> = 24/Re (Stokes flow).\n          </figcaption>\n        </figure>\n\n        <p>\n          A classic result is <strong>Stokes drag</strong> for a sphere (valid for Re &ll; 1):\n        </p>\n        <pre class=\"equation\">F_D = 3 π μ V D</pre>\n        <p>\n          If the reference area is the projected area A = πD<sup>2</sup>/4, this corresponds to:\n        </p>\n        <pre class=\"equation\">C_D = 24/Re</pre>\n\n        <div class=\"callout\">\n          <strong>Checkpoint:</strong> In creeping flow, drag is mainly viscous and can scale with <em>V</em> (not V<sup>2</sup>).\n          Always check the Reynolds-number range before applying the “dynamic pressure” drag formula with a constant C<sub>D</sub>.\n        </div>\n\n        <h2>3) High-Re reference values (tables for design estimates)</h2>\n        <p>\n          For many bluff bodies with <strong>Re &gtrsim; 10<sup>4</sup></strong>, C<sub>D</sub> becomes approximately constant\n          over a wide range of Reynolds numbers. In this regime, engineers often use tables of representative values\n          (with careful attention to reference area and aspect ratio).\n        </p>\n\n        <figure>\n          <img src=\"images/5DRAG3.png\" alt=\"Tables of representative drag coefficients for various 3D and 2D bodies at Re greater than about 10^4.\">\n          <figcaption>\n            Representative drag coefficients for common <strong>3D bodies</strong> (left) and <strong>2D bodies</strong> (right) at Re &gt; 10<sup>4</sup>\n            based on frontal/projected area. Use these as <em>first-pass</em> estimates and refine when needed.\n          </figcaption>\n        </figure>\n\n        <ul>\n          <li><strong>Reference area matters:</strong> for vehicles, use frontal area; for cylinders, projected area D×L is common.</li>\n          <li><strong>Aspect ratio effects:</strong> slenderness (L/D) can change separation and therefore C<sub>D</sub>.</li>\n          <li><strong>Orientation is critical:</strong> rotating a body can dramatically change the projected area and the wake.</li>\n          <li><strong>Surface condition:</strong> roughness and turbulence level can shift transition and separation.</li>\n        </ul>\n\n        <h2>4) Everyday objects and the “drag area” (C<sub>D</sub>A)</h2>\n        <p>\n          In many applications, it is useful to group coefficient and area into a single parameter:\n          the <strong>drag area</strong> (also called “equivalent flat-plate area”):\n        </p>\n        <pre class=\"equation\">F_D = &frac12; ρ V<sup>2</sup> (C_D A)</pre>\n\n        <figure>\n          <img src=\"images/5DRAG4.png\" alt=\"Representative drag coefficients for everyday objects such as a person, bicycles, vehicles, buildings, and a parachute.\">\n          <figcaption>\n            Typical C<sub>D</sub> values for everyday objects. In practice, comparing <strong>C<sub>D</sub>A</strong> is often more meaningful than C<sub>D</sub> alone.\n          </figcaption>\n        </figure>\n\n        <!-- Instructor note: For vehicles and cyclists, published C_D values can differ because A (frontal area) and posture/equipment change. Using C_D*A helps comparisons. -->\n\n        <div class=\"callout\">\n          <strong>Practical tip:</strong> If you only have rough geometry data, estimate C<sub>D</sub> from a table and compute the drag force.\n          If performance/energy matters, measure or validate with experiments (wind tunnel, coast-down tests) or CFD in the correct Reynolds-number regime.\n        </div>\n        \n        "
    },
    {
      // Updated: Expanded skin-friction correlations and added figures 6PAR1 & 6PAR2 (flat-plate analog of Moody chart).
      "id": "ch3-flat-plates",
      "chapter": "Chapter 3 — Aerodynamics: Drag and Lift Forces",
      "title": "5. Parallel flow over flat plates",
      "content": "\n        <p>\n          For <strong>parallel flow over a flat plate</strong> (zero incidence, negligible pressure gradient),\n          the <strong>pressure drag is essentially zero</strong>. The drag is dominated by <strong>skin friction</strong>\n          (shear stress in the boundary layer), so the overall drag coefficient is the skin-friction coefficient.\n        </p>\n\n        <!-- Instructor note: A figure is helpful but not essential; emphasize the coordinate definition and what is being integrated. -->\n\n        <p>\n          <strong>Geometry and notation:</strong> Let <em>x</em> be the distance from the leading edge along the plate, with plate length <em>L</em> and width <em>b</em>.\n          The boundary layer starts at <em>x = 0</em> and thickens downstream; the wall shear (and thus <code>C<sub>f,x</sub></code>) is typically largest near the leading edge and decreases with <em>x</em>.\n        </p>\n\n        <pre class=\"equation\">Re_x = (&rho; V x) / &mu;</pre>\n\n        <div class=\"callout\">\n          <strong>Local vs average:</strong> Correlations may report a <em>local</em> coefficient <code>C<sub>f,x</sub></code> (at a given <em>x</em>) or an <em>average</em> coefficient <code>C<sub>f,avg</sub></code> (integrated from 0 to <em>L</em>).\n          Always confirm the definition before computing drag.\n        </div>\n\n        <h2>Key relations (drag coefficient and drag force)</h2>\n\n        <figure>\n          <img src=\"images/6PAR1.png\" alt=\"Skin-friction correlations and drag relations for parallel flow over a flat plate\">\n          <figcaption>\n            <strong>Parallel-flow flat plate.</strong> Because the plate is aligned with the free stream, <em>form/pressure drag</em> is negligible.\n            The total drag coefficient reduces to the <strong>skin-friction coefficient</strong> C<sub>f</sub>, and the drag force scales with dynamic pressure.\n          </figcaption>\n        </figure>\n\n        <ul>\n          <li><strong>Local</strong> skin-friction coefficient: <code>C<sub>f,x</sub> = &tau;<sub>w</sub>(x) / (½ &rho; V²)</code></li>\n          <li><strong>Average</strong> skin-friction coefficient over 0→L: <code>C<sub>f,avg</sub> = (1/L) &int;<sub>0</sub><sup>L</sup> C<sub>f,x</sub> dx</code></li>\n          <li>Drag force on the wetted surface: <code>F<sub>D</sub> = ½ &rho; V² A<sub>wet</sub> C<sub>f,avg</sub></code></li>\n        </ul>\n\n        <div class=\"callout\">\n          <strong>Reference area reminder:</strong> For a rectangular plate of width <em>b</em> and length <em>L</em>,\n          <code>A<sub>wet</sub> = bL</code> for one side, and <code>A<sub>wet</sub> = 2bL</code> if both sides are exposed to the flow.\n        </div>\n\n        <h2>Reynolds number and transition</h2>\n        <p>\n          The key parameter is the Reynolds number based on plate length:\n        </p>\n        <pre class=\"equation\">Re_L = (&rho; V L) / &mu;</pre>\n\n        <p>\n          For a smooth plate in a low-turbulence free stream, transition often begins around\n          <code>Re<sub>x</sub> &asymp; 5×10<sup>5</sup></code>, but it can shift significantly with\n          roughness, turbulence intensity, and pressure gradients.\n        </p>\n\n        <!-- Instructor note: Ask students what in the environment (wind tunnel vs outdoor flow) can move Re_x,crit. -->\n\n        <h2>Laminar boundary layer (Blasius)</h2>\n        <p>\n          If the boundary layer is laminar over the full length (smooth plate, weak disturbances), a classic result is:\n        </p>\n        <pre class=\"equation\">C_f,avg = 1.328 / √Re_L</pre>\n        <p>\n          (Often used for <code>Re_L &lt; 5×10<sup>5</sup></code> as a first estimate.)\n        </p>\n\n        <h2>Turbulent boundary layer (smooth plate correlations)</h2>\n        <p>\n          For a fully turbulent boundary layer on a smooth plate, several empirically fitted correlations exist.\n          A common textbook form is:\n        </p>\n        <pre class=\"equation\">C_f,avg ≈ 0.074 / Re_L^(1/5)</pre>\n        <p>\n          The course summary figure also shows an alternative fit that is sometimes used over a limited range:\n        </p>\n        <pre class=\"equation\">C_f ≈ 0.029 / Re_L^0.138  &nbsp;&nbsp; (5×10<sup>5</sup> ≤ Re_L ≤ 10<sup>7</sup>)</pre>\n\n        <div class=\"callout\">\n          <strong>Why do correlations differ?</strong>\n          Different formulas may correspond to <em>local</em> vs <em>average</em> coefficients, include or exclude a laminar leading-edge region,\n          or be curve-fits over different Reynolds-number ranges. Always verify the definition used in your reference.\n        </div>\n\n        <h2>Rough turbulent regime (fully rough behavior)</h2>\n        <p>\n          If the surface roughness is large enough, the boundary layer can become <strong>fully rough</strong>.\n          In that regime, C<sub>f</sub> becomes weakly dependent (or nearly independent) of Reynolds number and depends mainly on the relative roughness.\n          A commonly used form (as in the figure) is:\n        </p>\n        <pre class=\"equation\">C_f = (1.89 − 1.62 log<sub>10</sub>(ε/L))^(−2.5)</pre>\n        <p>\n          with typical applicability <code>Re_L &gt; 10<sup>6</sup></code> and <code>ε/L &gt; 10<sup>−4</sup></code>.\n        </p>\n\n        <figure>\n          <img src=\"images/6PAR2.png\" alt=\"Flat-plate skin-friction chart for smooth and rough turbulent flow (analog of Moody chart)\">\n          <figcaption>\n            Skin-friction coefficient C<sub>f</sub> versus Reynolds number for smooth and rough flat plates.\n            In the <strong>fully rough</strong> region, C<sub>f</sub> becomes almost independent of Re,\n            making this plot the flat-plate analog of the <strong>Moody chart</strong> for pipe flows.\n          </figcaption>\n        </figure>\n\n        <div class=\"callout\">\n          <strong>Design checklist:</strong> (1) Decide whether you need <em>local</em> or <em>average</em> C<sub>f</sub>,\n          (2) pick the correct wetted area, (3) check the likely laminar/turbulent state and roughness,\n          and (4) keep track of which “L” defines Re (plate length, not hydraulic diameter).\n        </div>\n        "
    },
    {
      "id": "ch3-cylinders-spheres",
      "chapter": "Chapter 3 — Aerodynamics: Drag and Lift Forces",
      "title": "6. Flow over cylinders and spheres",
      "content": "\n        <p>\n          Cross-flow past a circular <strong>cylinder</strong> or a <strong>sphere</strong> is common in practice\n          (heat-exchanger tube banks, masts/cables, instrument probes, and sports balls). These are <em>bluff bodies</em>:\n          once the boundary layer separates, the wake largely controls the pressure (form) drag.\n        </p>\n\n        <figure>\n          <img src=\"images/7CYL1.png\" alt=\"Average drag coefficient versus Reynolds number for a smooth cylinder and a sphere.\" />\n          <figcaption>\n            Average drag coefficient C<sub>D</sub> versus Reynolds number for a smooth circular cylinder and a sphere.\n            The sharp drop is the <strong>drag crisis</strong>, typically around Re &asymp; 2&times;10<sup>5</sup> for smooth bodies.\n          </figcaption>\n        </figure>\n\n        <h2>Wake physics in one page</h2>\n        <ul>\n          <li><strong>Low to moderate Re:</strong> the boundary layer stays mostly laminar and separates early\n              &rarr; wide wake &rarr; large pressure drag (high C<sub>D</sub>).</li>\n          <li><strong>After transition:</strong> a turbulent boundary layer resists an adverse pressure gradient longer\n              &rarr; separation moves downstream &rarr; narrower wake &rarr; lower pressure drag (the “drag crisis”).</li>\n          <li><strong>Unsteadiness:</strong> for cylinders, vortex shedding appears over a broad range of Re, producing\n              fluctuating lift and drag (important for vibration and noise).</li>\n        </ul>\n\n        <h2>Critical Reynolds number and what shifts it</h2>\n        <ul>\n          <li>The critical Re is <em>not</em> universal: it depends on free-stream turbulence, surface condition, and any tripping devices.</li>\n          <li>Surface roughness can <em>trigger</em> earlier transition, shifting the drag-crisis dip to lower Re\n              (sometimes desirable if your operating Re is below the smooth-body critical value).</li>\n        </ul>\n\n        <figure>\n          <img src=\"images/7CYL2.png\" alt=\"Effect of surface roughness on the drag crisis for a sphere; golf ball example.\" />\n          <figcaption>\n            Effect of surface roughness (relative roughness &epsilon;/D) on the drag crisis. A golf ball’s dimples act\n            as a controlled roughness/trip: they promote earlier transition, delay separation, and reduce pressure drag\n            over its operating Reynolds numbers.\n          </figcaption>\n        </figure>\n\n        <pre class=\"equation\">Re = (&rho; U D) / &mu;</pre>\n\n        <div class=\"callout\">\n          <strong>Design note:</strong> When you quote C<sub>D</sub> for a cylinder/sphere, always report the Reynolds\n          number range and the surface condition (smooth, rough, dimpled). A single “one-size-fits-all” value is rarely defensible.\n        </div>\n\n        <div class=\"callout\">\n          <strong>Checkpoint:</strong> Many “drag reduction” ideas for bluff bodies work by controlling separation and wake size\n          (pressure drag), not by reducing skin-friction drag.\n        </div>\n        \n        "
    },
    {
      "id": "ch3-lift",
      "chapter": "Chapter 3 — Aerodynamics: Drag and Lift Forces",
      "title": "7. Lift: airfoils, NACA codes, and lift curves",
      "content": "\n        <p class=\"lead\">\n          Lift is the component of the aerodynamic force that acts <strong>perpendicular</strong> to the free-stream direction.\n          For wings, lift comes mainly from an <strong>asymmetric pressure distribution</strong>, created by airfoil camber and/or angle of attack.\n        </p>\n\n        <h2>Lift coefficient and reference area</h2>\n        <p>\n          We nondimensionalize lift using the lift coefficient <strong>C<sub>L</sub></strong>. For a finite wing, the reference area is usually the\n          <strong>planform area</strong> A = b&nbsp;c (span \u00d7 chord).\n        </p>\n\n        <pre class=\"equation\">C_L = F_L / (&frac12; &rho; V<sup>2</sup> A)</pre>\n\n        <figure>\n          <img src=\"images/8LIFT1.png\" alt=\"Lift coefficient definition and wing planform reference area (span b, chord c).\">\n          <figcaption>\n            Lift coefficient definition. For wings, the standard reference area A is the planform area (span \u00d7 chord).\n          </figcaption>\n        </figure>\n\n        <h2>Airfoil naming: the NACA 4-digit series</h2>\n        <p>\n          Many classical airfoils are described by a <strong>NACA 4-digit code</strong> (e.g., NACA 2415).\n          The digits encode the camber and thickness distribution as percentages of chord.\n        </p>\n\n        <ul>\n          <li><strong>1st digit</strong>: maximum camber (% of chord)</li>\n          <li><strong>2nd digit</strong>: position of maximum camber (in tenths of chord from the leading edge)</li>\n          <li><strong>Last two digits</strong>: maximum thickness (% of chord)</li>\n        </ul>\n\n        <!-- Instructor note: NACA codes describe geometry only; they do not directly provide performance. C_L and C_D still depend on Reynolds number, Mach number, and surface condition. -->\n\n        <figure>\n          <img src=\"images/8LIFT2.png\" alt=\"NACA 2415 interpretation and airfoil geometry labels.\">\n          <figcaption>\n            Example NACA 2415: 2% camber, camber peak at 0.4c, and 15% maximum thickness. (NACA = National Advisory Committee for Aeronautics.)\n          </figcaption>\n        </figure>\n\n        <h2>Lift curve, stall, and C<sub>L,max</sub></h2>\n        <p>\n          For small angles of attack &alpha;, many airfoils exhibit an approximately linear relationship\n          <em>C<sub>L</sub> &asymp; C<sub>L0</sub> + a&alpha;</em>.\n          As &alpha; increases, adverse pressure gradients strengthen; beyond a critical angle, separation grows rapidly and the airfoil <strong>stalls</strong>:\n          lift drops and drag rises sharply.\n        </p>\n\n        <figure>\n          <img src=\"images/8LIFT4.png\" alt=\"Lift curves for NACA 2412 and NACA 0012 and minimum flight speed equation based on C_L,max.\">\n          <figcaption>\n            Lift curves (C<sub>L</sub> vs &alpha;) for a cambered airfoil (NACA 2412) and a symmetric airfoil (NACA 0012), and the link between C<sub>L,max</sub> and minimum speed.\n          </figcaption>\n        </figure>\n\n        <p>\n          A key operational consequence is the <strong>minimum speed</strong> (stall speed), obtained when lift equals weight and the wing operates at C<sub>L,max</sub>:\n        </p>\n\n        <pre class=\"equation\">V_min = &radic;( 2W / (&rho; C_L,max A) )</pre>\n\n        <div class=\"callout\">\n          <strong>Quick scaling:</strong> at fixed weight W and wing area A, <strong>V<sub>min</sub> &propto; 1/&radic;&rho;</strong> and <strong>V<sub>min</sub> &propto; 1/&radic;C<sub>L,max</sub></strong>.\n          Hot (low-density) air increases the required take-off and landing speeds.\n        </div>\n\n        <h2>High-lift devices: flaps (and why drag rises)</h2>\n        <p>\n          Flaps increase the effective camber (and often the effective wing area), which raises C<sub>L</sub> and especially C<sub>L,max</sub>.\n          The trade-off is a significant increase in drag coefficient C<sub>D</sub>\u2014acceptable during take-off/landing, but not for cruise.\n        </p>\n\n        <figure>\n          <img src=\"images/8LIFT3.png\" alt=\"Effect of flaps on lift curve and drag polar (NACA 23012): clean, slotted, and double-slotted flap.\">\n          <figcaption>\n            Flaps shift the lift curve upward and increase C<sub>L,max</sub>, but they also move the drag polar to higher C<sub>D</sub>.\n          </figcaption>\n        </figure>\n\n        <h2>Worked example idea: take-off speed in hot vs cold air</h2>\n        <p>\n          The density &rho; decreases with temperature (and altitude). For the same aircraft weight and wing configuration,\n          a lower density requires a higher V<sub>min</sub>. This is one reason why take-off distances increase on hot days.\n        </p>\n\n        <figure>\n          <img src=\"images/8LIFT5.png\" alt=\"Example problem: A380 take-off, density vs temperature table, and C_L,max vs angle of attack for flap settings.\">\n          <figcaption>\n            Example prompt: combine C<sub>L,max</sub> (from the flap setting) with air density (from temperature) to compare minimum take-off speed in different conditions.\n          </figcaption>\n        </figure>\n\n        <!-- Instructor hint: When comparing two locations, you can often avoid repeated calculations by using the ratio\n             V_min,2 / V_min,1 = sqrt( \u03c11 / \u03c12 ) if W, A, and C_L,max are unchanged. -->\n\n        <div class=\"callout\">\n          <strong>Checkpoint:</strong> Lift is not \u201cmysterious suction\u201d\u2014it is the integrated result of pressure and shear.\n          In practice, engineers use C<sub>L</sub> curves and C<sub>L,max</sub> to size wings, set take-off/landing constraints, and evaluate high-lift devices.\n        </div>\n        \n"
    },
    {
      "id": "quiz-3",
      "chapter": "Chapter 3 — Aerodynamics: Drag and Lift Forces",
      "title": "Quiz 3 — Drag, lift, boundary layers, and aerodynamic coefficients",
      "type": "quiz",
      "quizKey": "quiz3",
      "content": "\n        <p class=\"lead\">\n          Focus: external flows, nondimensional coefficients, separation, and basic lift/drag calculations.\n        </p>\n        <div id=\"quiz-container\"></div>\n        "
    },
    {
      "id": "final-quiz",
      "chapter": "Chapter 4 — Final Quiz",
      "title": "Final Quiz — Comprehensive assessment",
      "type": "quiz",
      "quizKey": "finalQuiz",
      "content": "\n        <p class=\"lead\">\n          This final quiz combines the whole course: internal flows, losses, pumps, and aerodynamics.\n          Target: <strong>75%</strong>+.\n        </p>\n        <div id=\"quiz-container\"></div>\n        "
    }
  ],
  "quizzes": {
    "quiz1": {
      "title": "Quiz 1 — Fluid basics, hydrostatics, Bernoulli, and head losses",
      "questions": [
        {
          "q": "Under a constant applied shear stress, which behavior best characterizes a fluid (as opposed to an elastic solid)?",
          "options": [
            "It reaches a finite shear strain and then stops deforming.",
            "It continues to deform, exhibiting a sustained shear rate.",
            "It immediately fractures once shear stress is applied.",
            "Its pressure increases but shear deformation is zero."
          ],
          "answer": 1,
          "explanation": "A defining feature of a fluid is that any nonzero shear stress (above yield for yield-stress fluids) produces continuous deformation over time; solids reach a finite strain for a constant stress."
        },
        {
          "q": "For a Newtonian fluid, the constitutive relation between shear stress τ and shear rate γ̇ is:",
          "options": [
            "τ = G γ",
            "τ = μ γ̇",
            "τ = ρ g z",
            "τ = pA"
          ],
          "answer": 1,
          "explanation": "Newtonian fluids satisfy τ = μ γ̇, where μ is the dynamic viscosity. τ = Gγ corresponds to linear elasticity."
        },
        {
          "q": "A pipe has diameter D = 0.10 m and average velocity U = 2.0 m/s. What is the volumetric flow rate Qv (approximately)?",
          "options": [
            "0.00157 m³/s",
            "0.0157 m³/s",
            "0.157 m³/s",
            "1.57 m³/s"
          ],
          "answer": 1,
          "explanation": "Qv = U A = 2 × (π D²/4) = 2 × (π×0.01/4) ≈ 0.0157 m³/s."
        },
        {
          "q": "In steady incompressible flow, a pipe diameter reduces from 0.10 m to 0.05 m. If U1 = 2 m/s upstream, what is U2 downstream?",
          "options": [
            "1 m/s",
            "4 m/s",
            "8 m/s",
            "16 m/s"
          ],
          "answer": 2,
          "explanation": "Area scales with D². Halving D reduces area by 4, so velocity increases by 4: U2 = 4×2 = 8 m/s."
        },
        {
          "q": "For water (ρ ≈ 1000 kg/m³), what is the pressure increase between two points 5 m apart vertically (deeper point is 5 m below), neglecting gas effects?",
          "options": [
            "≈ 4.9 kPa",
            "≈ 49 kPa",
            "≈ 490 kPa",
            "≈ 4.9 MPa"
          ],
          "answer": 1,
          "explanation": "Δp = ρ g Δz = 1000×9.81×5 ≈ 49,050 Pa ≈ 49 kPa."
        },
        {
          "q": "At a static interface between two immiscible fluids, the correct condition is:",
          "options": [
            "Pressure is discontinuous; it jumps by ρgΔz across the interface even at the same elevation.",
            "Pressure is continuous at the same elevation on both sides of the interface.",
            "Velocity is continuous because both fluids are at rest.",
            "Density is continuous across the interface."
          ],
          "answer": 1,
          "explanation": "In static equilibrium (no surface tension effects considered), pressure at the interface is equal on both sides at the same elevation."
        },
        {
          "q": "In a horizontal, inviscid flow (same elevation), if velocity increases along the streamline, the static pressure:",
          "options": [
            "must increase",
            "must decrease",
            "must remain constant",
            "can only decrease if the flow is compressible"
          ],
          "answer": 1,
          "explanation": "From Bernoulli in horizontal flow: p + ½ρU² = constant. If U increases, p decreases."
        },
        {
          "q": "The generalized Bernoulli equation differs from the ideal Bernoulli equation mainly by including:",
          "options": [
            "only surface tension terms",
            "pump/turbine head terms and head losses",
            "only compressibility effects",
            "only an added temperature term"
          ],
          "answer": 1,
          "explanation": "Engineering Bernoulli includes machine heads (Hp, Ht) and total head loss hL to account for real-fluid dissipation and energy exchange with machines."
        },
        {
          "q": "Which dimensionless number primarily classifies laminar vs turbulent regimes in internal flows?",
          "options": [
            "Mach number",
            "Weber number",
            "Reynolds number",
            "Froude number"
          ],
          "answer": 2,
          "explanation": "Reynolds number Re compares inertial to viscous forces and is the primary regime classifier for internal flows."
        },
        {
          "q": "For pipe flow, Re = 1500 is most commonly classified as:",
          "options": [
            "laminar",
            "transitional",
            "fully turbulent",
            "supersonic"
          ],
          "answer": 0,
          "explanation": "Typical thresholds: laminar Re < ~2300; transitional ~2300–4000; turbulent > ~4000."
        },
        {
          "q": "The hydraulic diameter Dh used for non-circular ducts is defined as:",
          "options": [
            "Dh = A/Pw",
            "Dh = 2A/Pw",
            "Dh = 4A/Pw",
            "Dh = πA/Pw"
          ],
          "answer": 2,
          "explanation": "Hydraulic diameter Dh = 4A/Pw, where A is area and Pw is wetted perimeter."
        },
        {
          "q": "The Darcy–Weisbach equation for major head loss in a straight pipe is:",
          "options": [
            "hf = K(U²/2g)",
            "hf = f (L/D) (U²/2g)",
            "hf = (ρg) (L/D)",
            "hf = μ (U/D)"
          ],
          "answer": 1,
          "explanation": "Major losses: hf = f(L/D)(U²/2g). K(U²/2g) is a minor-loss model."
        },
        {
          "q": "For fully developed laminar flow in a circular pipe, the friction factor f is:",
          "options": [
            "f = 64/Re",
            "f = 0.316/Re^0.25",
            "f = 1/Re",
            "f = 4/Re"
          ],
          "answer": 0,
          "explanation": "Laminar pipe flow gives the exact result f = 64/Re."
        },
        {
          "q": "A minor loss with coefficient K is usually modeled as:",
          "options": [
            "hm = K(U²/2g)",
            "hm = K(L/D)(U²/2g)",
            "hm = K ρg",
            "hm = K/μ"
          ],
          "answer": 0,
          "explanation": "Minor losses are hm = K(U²/2g)."
        },
        {
          "q": "In common P&ID tagging, the instrument tag “FIC” most typically means:",
          "options": [
            "Flow Indicator Controller",
            "Force Internal Coupler",
            "Fluid Interface Calculator",
            "Frequency Induced Compressor"
          ],
          "answer": 0,
          "explanation": "F = flow (measured variable), I = indicator, C = controller → Flow Indicating Controller."
        }
      ,
        {
          "q": "An open tank contains water. What is the gauge pressure at a depth of 3.0 m below the free surface (ρ=1000 kg/m³, g=9.81 m/s²)?",
          "options": [
            "≈ 2.94 kPa",
            "≈ 29.4 kPa",
            "≈ 294 kPa",
            "≈ 0 kPa (always)"
          ],
          "answer": 1,
          "explanation": "Gauge pressure in a static liquid is p_g = ρ g h = 1000×9.81×3 ≈ 29,430 Pa ≈ 29.4 kPa."
        },
        {
          "q": "A mercury differential manometer shows a level difference of 0.20 m. Neglecting density of the gas above the mercury, the pressure difference is closest to:",
          "options": [
            "≈ 2.0 kPa",
            "≈ 9.8 kPa",
            "≈ 26.7 kPa",
            "≈ 98 kPa"
          ],
          "answer": 2,
          "explanation": "Δp = ρ_Hg g h = 13,600×9.81×0.20 ≈ 26,700 Pa ≈ 26.7 kPa."
        },
        {
          "q": "In a horizontal pipeline, a pump adds 10 m of head and total head losses are 3 m. If velocities are the same at inlet and outlet, the pressure rise is:",
          "options": [
            "≈ 29 kPa",
            "≈ 49 kPa",
            "≈ 69 kPa",
            "≈ 98 kPa"
          ],
          "answer": 2,
          "explanation": "Net head added to the fluid is 10−3 = 7 m. Δp = ρ g (7) ≈ 1000×9.81×7 ≈ 68.7 kPa."
        },
        {
          "q": "Two 90° elbows are installed in a line, each with K = 0.9. If the mean velocity is 3.0 m/s, the total minor head loss is closest to:",
          "options": [
            "≈ 0.23 m",
            "≈ 0.83 m",
            "≈ 1.8 m",
            "≈ 8.3 m"
          ],
          "answer": 1,
          "explanation": "ΣK = 1.8. h_m = ΣK (U²/2g) = 1.8×(9/19.62) ≈ 0.83 m."
        },
        {
          "q": "In the fully rough turbulent regime for pipe flow, the Darcy friction factor f depends most strongly on:",
          "options": [
            "only Reynolds number Re",
            "only Mach number Ma",
            "relative roughness ε/D (weak dependence on Re)",
            "fluid density ρ only"
          ],
          "answer": 2,
          "explanation": "When the flow is fully rough, f becomes nearly independent of Re and is set mainly by ε/D."
        }
]
    },
    "quiz2": {
      "title": "Quiz 2 — Pumps: installation, sizing, NPSH, series/parallel, affinity laws",
      "questions": [
        {
          "q": "A “flooded suction” installation means that the pump suction is:",
          "options": [
            "above the liquid level, requiring priming",
            "below the liquid level, so the suction line stays filled",
            "connected directly to atmosphere",
            "always operating under vacuum"
          ],
          "answer": 1,
          "explanation": "Flooded suction: the pump inlet is below the source free surface, providing positive static suction head and easier priming."
        },
        {
          "q": "Why is a Y-filter (strainer) commonly installed on a pump suction line?",
          "options": [
            "To increase discharge pressure",
            "To prevent solid/abrasive particles from entering the pump",
            "To increase NPSH required",
            "To intentionally create turbulence for mixing"
          ],
          "answer": 1,
          "explanation": "A suction strainer protects the impeller, seals, and wear rings from debris and abrasive particles."
        },
        {
          "q": "An eccentric reducer on the suction line is primarily used to:",
          "options": [
            "reduce noise by absorbing vibrations",
            "avoid air/gas pockets and reduce turbulence at the pump inlet",
            "increase velocity to improve priming",
            "replace the need for a check valve"
          ],
          "answer": 1,
          "explanation": "Eccentric reducers are chosen on suction to prevent air accumulation and flow disturbances that reduce NPSH margin."
        },
        {
          "q": "In suction lift installations, a foot valve is mainly used to:",
          "options": [
            "protect the motor from overheating",
            "maintain prime by preventing the suction line from draining",
            "increase pump head at shutoff",
            "measure suction pressure"
          ],
          "answer": 1,
          "explanation": "A foot valve is a check valve at the suction inlet that keeps the suction line filled after shutdown."
        },
        {
          "q": "Compared with a centrifugal pump, a positive displacement pump typically:",
          "options": [
            "delivers nearly constant flow for a given speed (within limits)",
            "has head that drops rapidly with flow",
            "cannot pump viscous fluids",
            "is unaffected by dead-heading (closed discharge valve)"
          ],
          "answer": 0,
          "explanation": "Positive displacement pumps move a fixed volume per cycle; flow is approximately proportional to speed and less sensitive to pressure (but requires relief protection)."
        },
        {
          "q": "As fluid viscosity, which impeller type is often preferred (accepting lower efficiency)?",
          "options": [
            "Enclosed impeller",
            "Semi-open impeller",
            "Open impeller",
            "No impeller is used in centrifugal pumps"
          ],
          "answer": 2,
          "explanation": "Open (and semi-open) impellers can handle more viscous or solids-laden fluids, but are generally less efficient and mechanically less protected than enclosed designs."
        },
        {
          "q": "The operating point of a pumping system is determined by:",
          "options": [
            "the maximum efficiency point of the motor",
            "the intersection of the pump curve and the system curve",
            "the highest possible NPSH required",
            "the static lift only"
          ],
          "answer": 1,
          "explanation": "The operating point satisfies H_pump(Q) = H_system(Q)."
        },
        {
          "q": "The hydraulic power delivered to the fluid is:",
          "options": [
            "Ph = ρ g Qv Hp",
            "Ph = μ Qv / Hp",
            "Ph = Hp / (ρ g Qv)",
            "Ph = ½ ρ Qv²"
          ],
          "answer": 0,
          "explanation": "Hydraulic power is weight flow rate (ρgQv) times head Hp."
        },
        {
          "q": "Water (ρ=1000 kg/m³) is pumped at Qv=0.05 m³/s with Hp=30 m. What is Ph approximately?",
          "options": [
            "1.47 kW",
            "14.7 kW",
            "147 kW",
            "0.147 kW"
          ],
          "answer": 1,
          "explanation": "Ph = ρ g Qv Hp = 1000×9.81×0.05×30 ≈ 14,715 W ≈ 14.7 kW."
        },
        {
          "q": "To avoid cavitation, which inequality must be satisfied?",
          "options": [
            "NPSHR > NPSHA",
            "NPSHA > NPSHR",
            "NPSHA = 0",
            "NPSHR is independent of flow"
          ],
          "answer": 1,
          "explanation": "Cavitation avoidance requires the available NPSH from the system to exceed the pump’s required NPSH."
        },
        {
          "q": "Which change most directly increases NPSHA (available) in a typical suction system?",
          "options": [
            "Adding elbows on the suction line",
            "Increasing liquid temperature",
            "Increasing suction pipe diameter (reducing suction losses)",
            "Raising the pump above the tank"
          ],
          "answer": 2,
          "explanation": "Reducing suction losses (e.g., via a larger suction diameter) increases the pressure at the pump inlet, increasing NPSHA."
        },
        {
          "q": "For pumps in series, the combined characteristic at a given flow rate is obtained by:",
          "options": [
            "adding the heads of each pump",
            "adding the flow rates of each pump",
            "averaging the efficiencies only",
            "adding the NPSH required of each pump"
          ],
          "answer": 0,
          "explanation": "Series connection: same flow passes through each pump; heads add: H_total(Q)=ΣH_i(Q)."
        },
        {
          "q": "For pumps in parallel, the combined characteristic at a given head is obtained by:",
          "options": [
            "adding the heads of each pump",
            "adding the flow rates of each pump",
            "multiplying head by number of pumps",
            "keeping the smallest flow rate only"
          ],
          "answer": 1,
          "explanation": "Parallel connection: same head across branches; flow rates add: Q_total(H)=ΣQ_i(H)."
        },
        {
          "q": "For a centrifugal pump with constant impeller diameter, if rotational speed increases by 20% (n2 = 1.2 n1), the head scales approximately as:",
          "options": [
            "H2 = 1.2 H1",
            "H2 = 1.44 H1",
            "H2 = 0.83 H1",
            "H2 = 2.2 H1"
          ],
          "answer": 1,
          "explanation": "Affinity laws (D constant): H ∝ n², so H2/H1 = (1.2)² = 1.44."
        },
        {
          "q": "In a multi-branch network, the “worst circuit” for pump sizing is the path that has:",
          "options": [
            "the smallest diameter",
            "the highest total pressure drop at the design flow",
            "the lowest elevation",
            "the fewest valves"
          ],
          "answer": 1,
          "explanation": "Pump sizing is typically based on the maximum required head among all relevant circuits (including static lift + losses)."
        }
      ,
        {
          "q": "Which statement best describes NPSH available (NPSHₐ) at the pump suction?",
          "options": [
            "It is the head the pump can generate at zero flow.",
            "It is the difference between the suction total head and the vapor pressure head of the liquid.",
            "It is the head loss in the discharge pipe.",
            "It is the same as pump efficiency."
          ],
          "answer": 1,
          "explanation": "NPSHₐ measures how far the suction conditions are above vapor pressure: NPSHₐ = (H_total,suction − H_vapor)."
        },
        {
          "q": "If NPSHₐ is less than the pump’s NPSH required (NPSHᵣ), the most likely consequence is:",
          "options": [
            "higher efficiency",
            "cavitation and performance/erosion issues",
            "lower fluid temperature",
            "automatic increase in flow rate"
          ],
          "answer": 1,
          "explanation": "Insufficient NPSH margin allows local pressure to drop below vapor pressure, causing cavitation."
        },
        {
          "q": "For identical centrifugal pumps, operating two pumps in series primarily increases:",
          "options": [
            "flow rate at the same head",
            "head at (approximately) the same flow",
            "efficiency at all conditions",
            "NPSH required is reduced by half"
          ],
          "answer": 1,
          "explanation": "In series, heads add at a given flow (approximately), shifting the composite curve upward."
        },
        {
          "q": "For pump affinity laws at constant impeller diameter, if speed increases by 10% (N₂ = 1.10 N₁), the new head H₂ is approximately:",
          "options": [
            "H₂ ≈ 1.10 H₁",
            "H₂ ≈ 1.21 H₁",
            "H₂ ≈ 1.33 H₁",
            "H₂ ≈ 0.91 H₁"
          ],
          "answer": 1,
          "explanation": "Affinity laws: Q ∝ N, H ∝ N², P ∝ N³. So H₂/H₁ = (1.10)² ≈ 1.21."
        },
        {
          "q": "A centrifugal pump is operated with the discharge valve fully closed (dead-headed). The main risk is:",
          "options": [
            "instant overpressure like a positive-displacement pump",
            "overheating and possible damage due to recirculation",
            "loss of prime due to high inlet pressure",
            "pump head becomes exactly zero"
          ],
          "answer": 1,
          "explanation": "At shutoff, flow is near zero but power can still be dissipated as heat inside the pump, raising temperature and risking damage."
        }
]
    },
    "quiz3": {
      "title": "Quiz 3 — Drag, lift, boundary layers, and aerodynamic coefficients",
      "questions": [
        {
          "q": "The drag coefficient is defined by:",
          "options": [
            "CD = FD / (ρ V A)",
            "CD = FD / (½ ρ V² A)",
            "CD = (½ ρ V² A) / FD",
            "CD = FD / (μ V)"
          ],
          "answer": 1,
          "explanation": "By definition, FD = ½ ρ V² A CD, so CD = FD / (½ ρ V² A)."
        },
        {
          "q": "Pressure (form) drag is primarily associated with:",
          "options": [
            "wall shear stress acting tangentially to the surface",
            "pressure imbalance due to separation and wake formation",
            "buoyancy forces only",
            "compressibility effects only"
          ],
          "answer": 1,
          "explanation": "Pressure drag comes from the net pressure force due to separated flow and a low-pressure wake behind the body."
        },
        {
          "q": "For a streamlined body aligned with the flow at small angle of attack, the dominant drag component is often:",
          "options": [
            "skin-friction drag",
            "pressure drag",
            "induced drag is always dominant",
            "drag is zero by symmetry"
          ],
          "answer": 0,
          "explanation": "Streamlined shapes are designed to minimize separation; remaining drag is largely due to viscous shear (skin friction)."
        },
        {
          "q": "Flow separation is commonly triggered by:",
          "options": [
            "a favorable pressure gradient (dp/dx < 0)",
            "an adverse pressure gradient (dp/dx > 0) that causes near-wall flow reversal",
            "increasing density with height",
            "purely inviscid effects"
          ],
          "answer": 1,
          "explanation": "An adverse pressure gradient reduces boundary-layer momentum and can cause reverse flow and separation."
        },
        {
          "q": "At low Reynolds numbers (below ~10⁴), drag coefficients for many shapes:",
          "options": [
            "are essentially constant",
            "depend strongly on Reynolds number",
            "are independent of viscosity",
            "become negative"
          ],
          "answer": 1,
          "explanation": "In low-Re regimes, viscous effects dominate and CD varies strongly with Re."
        },
        {
          "q": "Compute drag force: ρ=1.2 kg/m³, V=30 m/s, CD=1.2, A=0.10 m². What is FD?",
          "options": [
            "6.48 N",
            "64.8 N",
            "648 N",
            "0.648 N"
          ],
          "answer": 1,
          "explanation": "FD = ½ρV²ACD = 0.5×1.2×900×0.1×1.2 = 64.8 N."
        },
        {
          "q": "For external flow, the Reynolds number is typically defined as Re = ρ V L / μ where L is:",
          "options": [
            "the wetted perimeter",
            "a characteristic length scale of the body (e.g., chord, diameter)",
            "always the fluid depth",
            "the reference area"
          ],
          "answer": 1,
          "explanation": "L is a representative length of the geometry controlling boundary-layer development."
        },
        {
          "q": "For laminar flow over a smooth flat plate of length L, the average skin-friction coefficient correlation is:",
          "options": [
            "Cf,avg = 1.328 / √ReL",
            "Cf,avg = 0.074 / ReL^(1/5)",
            "Cf,avg = 64/ReL",
            "Cf,avg = 2 ReL"
          ],
          "answer": 0,
          "explanation": "The Blasius laminar result gives Cf,avg = 1.328/√ReL."
        },
        {
          "q": "If ReL = 1×10⁶ for a laminar plate correlation, Cf,avg is approximately:",
          "options": [
            "0.0133",
            "0.00133",
            "0.133",
            "1.33"
          ],
          "answer": 1,
          "explanation": "Cf,avg = 1.328/√(10⁶) = 1.328/1000 ≈ 0.00133."
        },
        {
          "q": "Compared with a laminar boundary layer, a turbulent boundary layer typically has:",
          "options": [
            "lower skin-friction drag and earlier separation",
            "higher skin-friction drag but can resist adverse pressure gradients better",
            "zero shear at the wall",
            "no dependence on Reynolds number"
          ],
          "answer": 1,
          "explanation": "Turbulence increases mixing and wall shear (higher friction) but adds near-wall momentum that can delay separation."
        },
        {
          "q": "The drag crisis for a smooth circular cylinder occurs roughly around Reynolds number:",
          "options": [
            "Re ~ 10²",
            "Re ~ 10³",
            "Re ~ 2×10⁵",
            "Re ~ 10⁹"
          ],
          "answer": 2,
          "explanation": "A classic cylinder drag crisis occurs on the order of Re ≈ 2×10⁵ (varies with roughness)."
        },
        {
          "q": "The lift coefficient is defined by:",
          "options": [
            "CL = FL / (½ ρ V² A)",
            "CL = FL / (ρ g A)",
            "CL = (½ ρ V² A) / FL",
            "CL = FL / (μ V A)"
          ],
          "answer": 0,
          "explanation": "By definition, FL = ½ ρ V² A CL."
        },
        {
          "q": "For a wing with span b and chord c, the planform area is:",
          "options": [
            "A = b + c",
            "A = b c",
            "A = b²/c",
            "A = π b c"
          ],
          "answer": 1,
          "explanation": "Planform area is approximately A = span × chord = b c."
        },
        {
          "q": "In the NACA 4-digit airfoil code “2415”, the digits mean:",
          "options": [
            "24% thickness, 15% camber at 2% chord",
            "2% camber at 40% chord; 15% maximum thickness",
            "camber is 24% at 15% chord location",
            "2% thickness at 40% chord; 15% camber"
          ],
          "answer": 1,
          "explanation": "First digit: max camber (2%); second digit: location (4 → 40% chord); last two digits: thickness (15%)."
        },
        {
          "q": "Stall of an airfoil is best described as:",
          "options": [
            "a regime where lift increases indefinitely with angle of attack",
            "a sharp lift reduction caused by massive flow separation at high angle of attack",
            "a condition where drag becomes zero",
            "a purely compressibility-driven shock phenomenon at low speed"
          ],
          "answer": 1,
          "explanation": "Stall occurs when separation expands and lift collapses while drag rises sharply."
        }
      ,
        {
          "q": "The drag coefficient C_D is defined as:",
          "options": [
            "C_D = F_D / (ρ U A)",
            "C_D = F_D / (½ ρ U² A_ref)",
            "C_D = (½ ρ U² A_ref) / F_D",
            "C_D = F_D / (μ U)"
          ],
          "answer": 1,
          "explanation": "By definition, C_D nondimensionalizes drag using dynamic pressure: C_D = F_D / (½ ρ U² A_ref)."
        },
        {
          "q": "Air flows past a cylinder of diameter D = 0.10 m at U = 20 m/s. If ρ = 1.2 kg/m³ and μ = 1.8×10⁻⁵ Pa·s, the Reynolds number is closest to:",
          "options": [
            "1.3×10⁴",
            "1.3×10⁵",
            "1.3×10⁶",
            "1.3×10⁷"
          ],
          "answer": 1,
          "explanation": "Re = ρ U D / μ = (1.2×20×0.10)/(1.8e−5) ≈ 2.4/1.8e−5 ≈ 1.33×10⁵."
        },
        {
          "q": "For a streamlined body (small separation), the dominant drag component is often:",
          "options": [
            "pressure (form) drag",
            "skin-friction (viscous) drag",
            "induced drag only",
            "buoyancy drag"
          ],
          "answer": 1,
          "explanation": "Streamlined shapes minimize separation, so pressure drag is reduced and skin-friction drag becomes a larger fraction of total drag."
        },
        {
          "q": "The “drag crisis” for a smooth cylinder or sphere is mainly caused by:",
          "options": [
            "a sudden drop in fluid density",
            "transition to a turbulent boundary layer that delays separation",
            "the object becoming supersonic",
            "a change in gravity"
          ],
          "answer": 1,
          "explanation": "When the boundary layer transitions to turbulent, separation moves downstream, the wake narrows, and pressure drag drops sharply."
        },
        {
          "q": "When an airfoil stalls (beyond the critical angle of attack), typically:",
          "options": [
            "C_L keeps increasing linearly",
            "C_L drops and C_D rises sharply",
            "C_D becomes zero",
            "lift becomes independent of velocity"
          ],
          "answer": 1,
          "explanation": "Stall is associated with large-scale separation: lift decreases while drag increases dramatically."
        }
]
    },
    "finalQuiz": {
      "title": "Final Quiz — Comprehensive assessment",
      "questions": [
        {
          "q": "The continuum hypothesis in fluid mechanics assumes that:",
          "options": [
            "molecules are tracked individually in simulations",
            "fluid properties are well-defined as continuous fields at the scale of interest",
            "fluids have zero viscosity",
            "all flows are compressible"
          ],
          "answer": 1,
          "explanation": "Continuum mechanics treats p, ρ, u as continuous fields, valid when the representative volume contains many molecules but is small compared to geometry."
        },
        {
          "q": "For steady incompressible flow in a single pipe, which quantity remains constant along the pipe?",
          "options": [
            "ρU",
            "Qv = U A",
            "pressure p",
            "friction factor f"
          ],
          "answer": 1,
          "explanation": "Incompressible steady flow implies constant volumetric flow rate Qv through any cross-section."
        },
        {
          "q": "In a static liquid of constant density, the hydrostatic equation is:",
          "options": [
            "dp/dz = ρg",
            "dp/dz = −ρg",
            "dp/dz = 0",
            "dp/dz = −μg"
          ],
          "answer": 1,
          "explanation": "With z upward, pressure decreases with height: dp/dz = −ρg."
        },
        {
          "q": "A reliable method for manometer calculations is to:",
          "options": [
            "assume the pressure is the same everywhere",
            "track pressure changes using +ρgΔz down and −ρgΔz up through each fluid",
            "ignore density differences because they cancel",
            "only use Bernoulli because manometers involve flow"
          ],
          "answer": 1,
          "explanation": "Manometry is a hydrostatics problem: step through each column with the appropriate density."
        },
        {
          "q": "Ideal Bernoulli along a streamline (head form) is:",
          "options": [
            "p/(ρg) − U²/(2g) + z = const",
            "p/(ρg) + U²/(2g) + z = const",
            "p + ρgz = const",
            "U + p = const"
          ],
          "answer": 1,
          "explanation": "Ideal Bernoulli is p/(ρg) + U²/(2g) + z = constant (steady, inviscid, incompressible)."
        },
        {
          "q": "In fully developed laminar pipe flow, the kinetic-energy correction factor α is approximately:",
          "options": [
            "α ≈ 0",
            "α ≈ 1",
            "α ≈ 2",
            "α ≈ 10"
          ],
          "answer": 2,
          "explanation": "For a parabolic laminar profile in a circular pipe, α = 2. For turbulent flow, α is close to 1."
        },
        {
          "q": "Water is pumped from a lower reservoir to an upper reservoir with elevation difference 20 m. Total head losses are 10 m. Reservoir surface velocities are negligible. Required pump head is approximately:",
          "options": [
            "10 m",
            "20 m",
            "30 m",
            "200 m"
          ],
          "answer": 2,
          "explanation": "Hp ≈ static lift + losses = 20 + 10 = 30 m (neglecting kinetic terms at reservoirs)."
        },
        {
          "q": "Compute major head loss: f=0.02, L=100 m, D=0.10 m, U=2 m/s. What is hf?",
          "options": [
            "≈ 0.41 m",
            "≈ 4.08 m",
            "≈ 40.8 m",
            "≈ 408 m"
          ],
          "answer": 1,
          "explanation": "hf = f(L/D)(U²/2g) = 0.02×1000×(4/19.62) ≈ 4.08 m."
        },
        {
          "q": "For laminar flow at Re = 1000 in a circular pipe, the Darcy friction factor is:",
          "options": [
            "0.064",
            "0.0064",
            "64",
            "0.316"
          ],
          "answer": 0,
          "explanation": "Laminar: f = 64/Re = 64/1000 = 0.064."
        },
        {
          "q": "Two identical elbows each have K = 0.9. If U = 3 m/s, what is the total minor head loss hm (approximately)?",
          "options": [
            "≈ 0.083 m",
            "≈ 0.83 m",
            "≈ 8.3 m",
            "≈ 83 m"
          ],
          "answer": 1,
          "explanation": "K_total = 1.8. hm = K(U²/2g) = 1.8×(9/19.62) ≈ 0.83 m."
        },
        {
          "q": "In typical P&ID notation, “LT” most commonly refers to:",
          "options": [
            "Level Transmitter",
            "Lift Turbine",
            "Liquid Temperature",
            "Line Thickness"
          ],
          "answer": 0,
          "explanation": "L = level; T = transmitter → Level Transmitter."
        },
        {
          "q": "Which installation generally provides better cavitation margin?",
          "options": [
            "Suction lift pump",
            "Flooded suction pump",
            "Any installation; NPSH is pump-only",
            "Submersible pump always cavitates"
          ],
          "answer": 1,
          "explanation": "Flooded suction provides positive static head at the inlet and avoids priming issues, improving NPSHA."
        },
        {
          "q": "All else equal, NPSHA increases if you:",
          "options": [
            "raise the pump above the tank",
            "add more suction fittings",
            "lower the pump relative to the liquid level",
            "increase liquid temperature"
          ],
          "answer": 2,
          "explanation": "Lowering the pump increases static suction head; adding fittings increases losses; higher temperature increases vapor pressure and reduces NPSHA."
        },
        {
          "q": "For water, Qv=0.05 m³/s and Hp=30 m. Hydraulic power is:",
          "options": [
            "≈ 1.47 kW",
            "≈ 14.7 kW",
            "≈ 147 kW",
            "≈ 1470 kW"
          ],
          "answer": 1,
          "explanation": "Ph = ρgQvHp ≈ 1000×9.81×0.05×30 ≈ 14.7 kW."
        },
        {
          "q": "If the motor draws 20 kW and hydraulic power is 14.7 kW, the overall efficiency is approximately:",
          "options": [
            "0.74",
            "1.36",
            "0.27",
            "0.95"
          ],
          "answer": 0,
          "explanation": "η = Ph/P_in = 14.7/20 ≈ 0.735 ≈ 0.74."
        },
        {
          "q": "For a centrifugal pump with constant diameter, power scales with speed approximately as:",
          "options": [
            "P ∝ n",
            "P ∝ n²",
            "P ∝ n³",
            "P ∝ 1/n"
          ],
          "answer": 2,
          "explanation": "Affinity laws (D constant): Q ∝ n, H ∝ n², P ∝ n³."
        },
        {
          "q": "Two identical pumps in series will primarily increase:",
          "options": [
            "the achievable head at a given flow",
            "the achievable flow at a given head",
            "NPSHA",
            "fluid density"
          ],
          "answer": 0,
          "explanation": "Series adds head (pressure capability). Parallel increases flow capacity."
        },
        {
          "q": "The aerodynamic force model FD = ½ρV²ACD implies that drag force scales with speed as:",
          "options": [
            "FD ∝ V",
            "FD ∝ V²",
            "FD ∝ 1/V",
            "FD is independent of V"
          ],
          "answer": 1,
          "explanation": "Dynamic pressure scales as V², so FD scales as V² if CD is constant."
        },
        {
          "q": "Compute lift: ρ=1.2 kg/m³, V=50 m/s, A=10 m², CL=0.8. What is FL?",
          "options": [
            "1,200 N",
            "12,000 N",
            "120,000 N",
            "12 N"
          ],
          "answer": 1,
          "explanation": "FL = ½ρV²ACL = 0.5×1.2×2500×10×0.8 = 12,000 N."
        },
        {
          "q": "The NACA airfoil code “0012” indicates:",
          "options": [
            "0% camber; 12% thickness (symmetric airfoil)",
            "12% camber; 0% thickness",
            "maximum camber at 12% chord",
            "a wing span of 12 m"
          ],
          "answer": 0,
          "explanation": "NACA 0012 has zero camber (first two digits 00) and 12% thickness (last two digits 12)."
        }
      ,
        {
          "q": "For steady incompressible flow, if the pipe area decreases by a factor of 3 (A₂ = A₁/3), the average velocity changes as:",
          "options": [
            "U₂ = U₁/3",
            "U₂ = U₁",
            "U₂ = 3U₁",
            "U₂ = 9U₁"
          ],
          "answer": 2,
          "explanation": "Continuity: Q = U A constant ⇒ U₂ = Q/A₂ = Q/(A₁/3) = 3U₁."
        },
        {
          "q": "Which term represents energy loss due to friction and fittings in the engineering (generalized) Bernoulli equation?",
          "options": [
            "pump head H_p",
            "turbine head H_t",
            "head loss h_L",
            "elevation head z"
          ],
          "answer": 2,
          "explanation": "All dissipative effects are grouped into the head loss term h_L."
        },
        {
          "q": "A local pressure dropping below vapor pressure in a liquid flow can produce:",
          "options": [
            "laminarization",
            "cavitation",
            "higher density",
            "negative viscosity"
          ],
          "answer": 1,
          "explanation": "If p < p_vap(T), vapor bubbles can form (cavitation) and later collapse when pressure recovers."
        },
        {
          "q": "In a static fluid, pressure at the same elevation in a connected region is:",
          "options": [
            "always different",
            "always equal (neglecting surface tension)",
            "zero by definition",
            "equal only if density is zero"
          ],
          "answer": 1,
          "explanation": "Hydrostatic equilibrium implies pressure is constant along a horizontal plane in the same connected fluid."
        },
        {
          "q": "For a non-circular duct, the Reynolds number is commonly computed using:",
          "options": [
            "the hydraulic diameter D_h = 4A/P_w",
            "the perimeter P_w only",
            "the radius of a circle with the same area only",
            "the wall roughness ε only"
          ],
          "answer": 0,
          "explanation": "A standard approach is to use D_h = 4A/P_w so internal-flow correlations can be reused."
        },
        {
          "q": "For fully developed laminar flow in a circular pipe, the velocity profile is:",
          "options": [
            "uniform (plug flow)",
            "parabolic with maximum at centerline",
            "linear with radius",
            "independent of viscosity"
          ],
          "answer": 1,
          "explanation": "Poiseuille flow gives a parabolic profile, with U_max = 2 U_avg."
        },
        {
          "q": "If a major head loss is h_f = f (L/D) (U²/2g), doubling the mean velocity U (all else constant) makes h_f:",
          "options": [
            "2× larger",
            "4× larger",
            "8× larger",
            "unchanged"
          ],
          "answer": 1,
          "explanation": "Head loss scales with U², so doubling U multiplies h_f by 4."
        },
        {
          "q": "A pump curve is intersected with the system curve to determine the:",
          "options": [
            "vapor pressure",
            "operating point (Q, H)",
            "pipe roughness",
            "Mach number"
          ],
          "answer": 1,
          "explanation": "The operating point is where pump head available equals system head required."
        },
        {
          "q": "For identical centrifugal pumps, operating two pumps in parallel primarily increases:",
          "options": [
            "head at the same flow",
            "flow rate at (approximately) the same head",
            "NPSH required doubles",
            "shutoff head doubles"
          ],
          "answer": 1,
          "explanation": "In parallel, flows add at a given head, shifting the composite curve to the right."
        },
        {
          "q": "Which installation change most directly increases NPSH available (NPSHₐ) for a given system?",
          "options": [
            "Adding more elbows on suction",
            "Increasing suction line losses",
            "Lowering the pump relative to the suction free surface",
            "Reducing discharge pipe diameter"
          ],
          "answer": 2,
          "explanation": "Lowering the pump increases static suction head and reduces the risk of p dropping below vapor pressure."
        },
        {
          "q": "For affinity laws at constant diameter, if speed is reduced to 80% (N₂ = 0.8 N₁), the flow rate scales approximately as:",
          "options": [
            "Q₂ ≈ 0.8 Q₁",
            "Q₂ ≈ 0.64 Q₁",
            "Q₂ ≈ 0.512 Q₁",
            "Q₂ ≈ 1.25 Q₁"
          ],
          "answer": 0,
          "explanation": "Affinity laws: Q ∝ N, so Q₂/Q₁ = 0.8."
        },
        {
          "q": "In external aerodynamics, the dynamic pressure is:",
          "options": [
            "q = ½ ρ U²",
            "q = ρ g z",
            "q = p/ρ",
            "q = μ U/L"
          ],
          "answer": 0,
          "explanation": "Dynamic pressure is defined as q = ½ ρ U²."
        },
        {
          "q": "A bluff body typically has high drag because:",
          "options": [
            "skin friction is always zero",
            "early separation creates a large wake and strong pressure drag",
            "lift is always negative",
            "its Reynolds number is always less than 1"
          ],
          "answer": 1,
          "explanation": "For bluff bodies, pressure (form) drag from the separated wake dominates."
        },
        {
          "q": "For a wing, lift is commonly computed using:",
          "options": [
            "L = ½ ρ U² A C_L",
            "L = ρ g V",
            "L = μ U A",
            "L = p_vap A"
          ],
          "answer": 0,
          "explanation": "Lift coefficient definition: L = ½ ρ U² A C_L."
        },
        {
          "q": "If air density decreases (hotter air) while W, A, and C_L,max are unchanged, stall speed V_min:",
          "options": [
            "decreases",
            "increases",
            "stays constant",
            "becomes zero"
          ],
          "answer": 1,
          "explanation": "V_min = sqrt(2W/(ρ C_L,max A)); decreasing ρ increases V_min."
        },
        {
          "q": "For a flat plate, the boundary layer thickness generally increases with distance x from the leading edge because:",
          "options": [
            "viscous effects accumulate downstream",
            "pressure becomes zero downstream",
            "gravity thickens the layer",
            "Reynolds number always decreases with x"
          ],
          "answer": 0,
          "explanation": "The boundary layer starts at zero thickness and grows as viscous diffusion and entrainment act downstream."
        },
        {
          "q": "The Reynolds number in external flow over a body is most directly increased by:",
          "options": [
            "increasing viscosity μ",
            "decreasing velocity U",
            "increasing characteristic length L",
            "decreasing density ρ"
          ],
          "answer": 2,
          "explanation": "Re = ρ U L / μ increases with L (and with ρ and U) and decreases with μ."
        },
        {
          "q": "In a pipeline, minor losses are often grouped using ΣK. The corresponding head loss is:",
          "options": [
            "h_m = ΣK (U²/2g)",
            "h_m = ΣK (L/D) (U²/2g)",
            "h_m = ΣK ρ g",
            "h_m = ΣK / Re"
          ],
          "answer": 0,
          "explanation": "Minor losses: h_m = ΣK (U²/2g)."
        },
        {
          "q": "A check valve in a pump discharge line is primarily intended to:",
          "options": [
            "increase pump efficiency",
            "prevent reverse flow when the pump stops",
            "reduce vapor pressure",
            "increase suction head losses"
          ],
          "answer": 1,
          "explanation": "A check valve prevents backflow and reverse rotation/water hammer after shutdown."
        },
        {
          "q": "If a manometer uses a heavier fluid (higher density) for the same pressure difference, the required height difference h becomes:",
          "options": [
            "larger",
            "smaller",
            "unchanged",
            "negative"
          ],
          "answer": 1,
          "explanation": "Δp = ρ g h ⇒ for fixed Δp, higher ρ means smaller h."
        }
]
    }
  }
};
window.COURSE_DATA = COURSE_DATA;
