# SVF v2 → v3 Concept & Artifact Audit v0.1

**Stage:** 1 — v2 Audit  
**Status:** Initial pass; not a final disposition  
**Date:** 2026-09-17

## 1. Audit rule

Each v2 element is classified as:

- **KEEP** — survives substantially unchanged;
- **REVISE** — core insight survives, formal definition changes;
- **DOWNGRADE** — theorem/law becomes heuristic, pattern, or testable hypothesis;
- **REMOVE** — removed from the universal core; may survive in a validated Domain Pack;
- **ADD** — missing v3 concept.

A second tag marks urgency:

- **P0** — structural contradiction or overclaim; resolve before Core Spec;
- **P1** — important conceptual/measurement redesign;
- **P2** — useful but can follow core stabilization.

## 2. Concept audit — initial disposition

| v2 element | Initial disposition | Priority | v3 direction | Main reason |
|---|---|---:|---|---|
| Scalar S | KEEP + REVISE | P0 | **State** | Current condition remains fundamental; avoid assuming all states are meaningfully aggregatable scalars |
| Vector V | REVISE | P0 | **Trajectory** plus explicit **Action/Intervention** | v2 mixes observed rate-of-change, effort magnitude, intention, and strategic direction |
| Field F | KEEP + REVISE | P0 | **Field / Context Forces** | Strong concept; external trends must be represented without pretending all have one common numeric scale |
| Resistance R | KEEP + REVISE | P0 | **Constraint / Friction** | Distinguish binding constraints, friction, capacity limits, rules, and merely weak variables |
| Position vs Positioning | KEEP + REVISE | P1 | **State vs Trajectory** | One of v2's strongest distinctions; remove overclaim that trajectory always dominates position over fixed horizons |
| Dynamic weights ω | REVISE | P1 | Explicit goal/model-dependent weights | Weighting is useful only when goal, elicitation method, sensitivity, and uncertainty are exposed |
| Alpha extensions αf / αm | REMOVE from universal core | P2 | Domain Pack features/modifiers | Too easy to become arbitrary correction factors; retain only when operationally defined |
| Scalar hierarchy Anchor / Leverage / Indicator / Noise | REVISE | P0 | **Survival prerequisite / Binding constraint / Leverage / Outcome indicator / Noise** | A low Anchor is not automatically the highest-return intervention; causal and constraint roles must be separated |
| Product-style field bottleneck logic | DOWNGRADE / REMOVE from core | P0 | Domain-specific interaction model | Multiplication forces weakest-layer dominance whether or not the domain supports that mechanism |
| `V_effective = |V| cos(theta)` | REVISE | P0 | Alignment measure only when vectors share a defensible space | Geometric metaphor is useful; quantitative energy-loss claims require an operational vector space |
| Gradient Navigation `V_optimal = ∇S` | DOWNGRADE + REVISE | **P0** | **Intervention Search** / optimization hypothesis | Gradient requires a defined objective function; weakest value is not necessarily steepest/highest-value direction |
| “weakest Anchor first” | DOWNGRADE | P0 | Constraint test + opportunity test | Weakness correction and leverage exploitation are different strategies |
| Critical Velocity theorem | DOWNGRADE | P0 | **Threshold / regime-change hypothesis** | Some domains have thresholds; not all systems have a hard zero-output boundary |
| Slingshot coefficient η | REVISE | **P0** | **Field Alignment / force-composition model** | v2 contains incompatible formulations and amplification semantics; concept survives better than current coefficient |
| Slingshot Reversal | KEEP + REVISE | P1 | Field-regime reversal pattern | Valuable scenario pattern; timing and magnitude must remain empirical/conditional |
| Phase Dynamics Engine | KEEP + REVISE | P1 | State-transition / feedback model | Strong direction; functions and parameters must be estimated or explicitly illustrative |
| Field delay τ | KEEP + REVISE | P1 | Explicit delay links | Delays are important; generic reference values should not be treated as calibrated constants |
| False Safety Window | KEEP + DOWNGRADE | P1 | Delay-induced masking pattern / hypothesis | Excellent diagnostic pattern; duration must be measured rather than assumed |
| Loop taxonomy Virtuous/Vicious/Inertia/Escape | KEEP + REVISE | P1 | Dynamic regime labels | Useful shared vocabulary; transition criteria need domain-calibrated rules |
| ASDP Anchor Scalar Defense Protocol | DOWNGRADE / Domain Pack | P1 | Survival protocol where validated | “halt all non-Anchor investment” is too universal for complex portfolios/options |
| Anti-Vanity Protocol | **KEEP + EXPAND** | P0 | **Epistemic Contract / Measurement Contract** | One of v2's strongest methodological instincts; becomes central v3 layer |
| Hard-data-only rule | REVISE | P1 | Evidence hierarchy, not hard-data absolutism | Important qualitative evidence can be valid; provenance and claim strength matter more |
| Rate-of-change priority | REVISE | P1 | State + rate + acceleration + window + noise | Acceleration is not automatically first priority; depends on signal reliability and decision horizon |
| Business S1 rubric | REVISE → Domain Pack | P1 | Business Pack measurement templates | Useful operationalization; current thresholds/tags require evidence and localization |
| v2 diagnostic decision tree | REVISE | P1 | Evidence-aware decision workflow | Binary cutoffs currently imply unjustified precision |
| Falsification FC1–FC7 | REVISE | **P0** | Comparative evaluation protocol | Arbitrary percentage cutoffs and weak random baselines should be replaced by preregistered metrics/baselines |
| Historical Nokia/Korea cases | KEEP as retrospective cases | P1 | Reconstruction dataset | Useful for explanation, insufficient for predictive validation |
| Prospective learning case | **KEEP / RECOVER RESULT** | **P0** | Prospective validation record | Verification date has passed; outcome must be recovered even if prediction failed |
| Fractal L1/L2/L3 application boundary | KEEP + REVISE | P2 | Scope/value heuristic | Insightful boundary: framework value rises with judgment need; not a theorem |
| Stochastic approximation declaration | KEEP + EXPAND | P0 | Explicit uncertainty model | v3 should represent ranges, confidence, model risk, and unknowns directly |
| Dual-track G-Layer / P-Layer | KEEP + REVISE | P2 | Guided interview + analytical workbench | Strong product architecture if simplified layer never pretends to have precision it lacks |
| Framework migration SWOT/OKR/etc. | KEEP as adoption layer | P2 | Translation/migration guides | Useful entry point, not theoretical validation |
| Universal master equation | **REMOVE as universal centerpiece** | **P0** | Multiple transparent models under one grammar | Equation combines heterogeneous constructs and encourages false precision; domain equations may survive when validated |

## 3. Missing v3 concepts — ADD list

| New element | Priority | Purpose |
|---|---:|---|
| Claim-type system | P0 | Observed / Derived / Inferred / Hypothesis / Scenario / Intervention / Unknown |
| Measurement Contract | P0 | Definition, unit, provenance, time window, normalization, uncertainty, freshness |
| Causal Claim Graph | P0 | Separate association, mechanism hypothesis, intervention evidence |
| Competing hypotheses | P0 | Prevent single-story overfitting |
| Explicit unknowns | P0 | Preserve ignorance rather than impute silently |
| Confidence / uncertainty representation | P0 | Replace single-point false precision |
| Scenario ensemble | P1 | Multiple plausible futures instead of a single forecast |
| Robustness / regret / reversibility | P1 | Compare strategies under uncertainty |
| Signpost / trigger / pivot | P1 | Make adaptation operational |
| Value-of-information candidate layer | P2 | Ask what should be learned before acting |
| Decision provenance | P1 | Record why a decision was made at that time |
| Core + Domain Pack contract | P0 | Preserve universal grammar while allowing domain-specific measurement |
| Visual Protocol | P0 | Make analysis interoperable between people and software |

## 4. Visual artifact audit — initial disposition

### 4.1 False Safety Window

**Disposition:** KEEP + REVISE  
**Future artifact:** `Trajectory Strip` + optional delay overlay.

Strengths:
- makes delayed feedback intuitively visible;
- expresses why level-only monitoring can be misleading;
- temporal form is reusable across domains.

Required changes:
- distinguish measured data from illustrative curves;
- display uncertainty around delay τ;
- prohibit generic τ values from appearing calibrated;
- link each plotted series to source/Measurement Contract;
- avoid calling a threshold “L1 survival limit” unless domain validated.

### 4.2 Slingshot Reversal

**Disposition:** REVISE  
**Future artifact:** `Field Alignment Map`.

Strengths:
- visually communicates that the same actor trajectory can interact differently with a changing environment;
- directional-force metaphor is memorable.

Required changes:
- remove unvalidated η multipliers from canonical form;
- separate observed external change from inferred direction;
- show confidence in Field direction;
- distinguish field reversal from actor-trajectory reversal;
- make vector-space assumptions explicit.

### 4.3 Gradient Navigation

**Disposition:** REMOVE in current canonical form / REPURPOSE  
**Future artifact:** `Intervention Landscape` or `Intervention Matrix`.

Reason:
- current visual freezes the disputed premise `V_optimal = ∇S`;
- a low variable is visually likely to be interpreted as the correct intervention target.

Replacement should compare candidate interventions using mechanism evidence, expected effect, cost, reversibility, downside, time-to-learn, and robustness without collapsing them into an unjustified universal score.

### 4.4 Navigation Canvas

**Disposition:** REVISE substantially  
**Future artifact:** `SVF Navigation Map`.

Goal:
- become the recognizable one-page SVF protocol analogous to SWOT's shared canvas;
- combine State / Trajectory / Field / Constraint with Unknowns, Competing Hypotheses, Next Test, and Pivot Condition;
- remain a map, not a scorecard.

### 4.5 Gauges / L1–L5 rubric UI

**Disposition:** DOWNGRADE / Domain-specific use only.

Risk:
- gauges create stronger precision perception than ordinal evidence supports;
- labels such as `MONOPOLY`, `TOXIC`, `ESCAPE` can convert heuristics into authoritative diagnoses.

Future use:
- permitted only when score calibration is documented;
- otherwise prefer categorical evidence states, ranges, or distributions.

## 5. Key contradiction register — P0

### C-01 — What exactly is V?

Across v2 materials V functions as rate-of-change, strategic effort, direction, intention, and vector magnitude. These are not interchangeable.

**v3 resolution target:**
- `Trajectory` = observed/estimated system change;
- `Intervention/Action` = actor-controlled input;
- alignment is a relationship between declared objects, not an implicit reuse of V.

### C-02 — Gradient target ambiguity

`∇S` is undefined unless the scalar/objective field is defined. “Most depleted Anchor” is not mathematically equivalent to the gradient of an outcome/value function.

**v3 resolution target:** remove theorem status and define Intervention Search.

### C-03 — Slingshot η inconsistency

v2 materials use more than one η formulation while also requiring η > 1 for amplification.

**v3 resolution target:** suspend η as canonical quantitative coefficient until a coherent model and empirical calibration exist.

### C-04 — Normalization ≠ comparability

Putting heterogeneous variables in `[0,1]` resolves units syntactically but does not establish measurement equivalence, valid aggregation, or causal meaning.

**v3 resolution target:** Measurement Contract + explicit aggregation justification.

### C-05 — Retrospective fit vs prospective validity

High-salience historical cases can support explanatory plausibility but not strong prospective claims.

**v3 resolution target:** recover the expired prospective case, then design preregistered comparative tests.

### C-06 — Universal threshold claims

The current framework elevates several domain-contingent nonlinear patterns into universal theorems.

**v3 resolution target:** separate universal grammar from Domain Pack models and empirically testable hypotheses.

## 6. Stage 1 next research tasks

1. Recover the July 2026 prospective learning-case outcome or document it as unavailable.
2. Complete equation-by-equation consistency audit.
3. Extract every variable definition and identify overloaded symbols/semantics.
4. Audit all three JSX tools and four paper figures against the Visual Protocol contract.
5. Compare v2 concepts against systems dynamics, causal inference, robust decision making, adaptive pathways, measurement theory, and decision analysis.
6. Produce v0.2 with citations, contradiction resolution options, and final Stage-1 recommendations.

## 7. Current Stage 1 status

**OPEN.** This v0.1 is an initial architectural audit, not a close decision.

The first major finding is already clear: **v3 should preserve SVF's decomposition and navigation intuition while splitting observation, trajectory, intervention, causality, uncertainty, and adaptation into distinct contracts.**
