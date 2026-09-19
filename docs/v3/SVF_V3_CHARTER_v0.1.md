# SVF v3.0 Charter v0.1

**Status:** Stage 0 / Re-foundation draft  
**Date:** 2026-09-17  
**Branch:** `v3-research`  

## 1. Working definition

**SVF v3.0 is an evidence-grounded adaptive navigation framework for structuring complex situations, distinguishing what is known from what is inferred, identifying trajectories and constraints, exploring plausible interventions, and defining when a course should be revised.**

SVF v3.0 is not a universal prediction equation. It is a structured method for making reasoning visible, inspectable, comparable, revisable, and testable.

## 2. Purpose

SVF v3.0 SHALL help a user:

1. distinguish current state from current trajectory;
2. separate external field forces from internal constraints;
3. distinguish evidence, derivation, inference, hypothesis, scenario, intervention, and unknowns;
4. reveal important missing variables and uncertainty;
5. generate competing explanations rather than a single authoritative story;
6. identify candidate interventions and the assumptions each depends on;
7. compare strategies across multiple plausible futures;
8. define observable signposts and pivot conditions;
9. preserve a traceable chain from source evidence to interpretation and recommendation;
10. support repeated reassessment as the system changes.

## 3. Non-purpose

SVF v3.0 SHALL NOT claim to:

- predict a complex future with deterministic certainty;
- convert subjective scores into objective truth merely through normalization;
- treat correlation as intervention evidence;
- infer causal effects without an explicit causal claim and evidence level;
- produce precise numerical outputs when input uncertainty does not support precision;
- force Personal, Project, Business, Public Policy, Research, or Creative domains into one identical rubric;
- replace domain experts, audited data, scientific models, or legal/policy analysis where those are required.

## 4. Core analytical primitives

The v3 core is intentionally smaller than the v2 master equation.

| Primitive | Core question | v2 ancestry |
|---|---|---|
| **State (S)** | What is true or available now? | Scalar |
| **Trajectory (T)** | What is changing, in which direction, and at what rate? | Vector |
| **Field (F)** | What external forces are changing the feasible landscape? | Field |
| **Constraint (C)** | What limits conversion of effort into change? | Resistance |
| **Causal Map (K)** | What is believed to affect what, and at what evidence level? | New formal layer |
| **Uncertainty (U)** | What is unknown, weakly measured, disputed, or unstable? | Expanded stochastic framing |
| **Intervention (I)** | What can be changed, tested, or stopped? | Gradient/navigation redesign |
| **Adaptation (A)** | What signals require continuation, escalation, pause, or pivot? | Phase dynamics extension |

These primitives are domain-independent. Domain Packs define what variables instantiate them.

## 5. Epistemic Contract / Anti-Oracle Protocol

Every material SVF statement SHALL be tagged as one of the following claim types:

| Claim type | Meaning |
|---|---|
| **Observed** | Directly supported by a cited or recorded source |
| **Derived** | Computed from stated inputs using a reproducible transformation |
| **Inferred** | Interpretation supported by evidence but not directly observed |
| **Hypothesis** | Proposed explanatory or causal claim requiring testing |
| **Scenario** | Conditional future under explicit assumptions |
| **Intervention** | Candidate action intended to change system behavior |
| **Unknown** | Material fact not currently established |

Rules:

- Confidence SHALL NOT be expressed as false precision.
- Unknowns SHALL remain visible rather than being silently imputed.
- A recommendation SHALL expose its dependent assumptions.
- An intervention SHALL distinguish expected mechanism from observed outcome.
- Stronger claim language SHALL require stronger evidence.

## 6. Measurement Contract

Every measured or scored variable SHOULD carry:

- semantic definition;
- unit or scale;
- source and provenance;
- observation window;
- normalization rule, if any;
- directionality;
- uncertainty or confidence;
- update cadence;
- domain ownership;
- known limitations.

A dimensionless score is not automatically comparable to another dimensionless score. Cross-variable aggregation requires an explicit justification.

## 7. Navigation principle

SVF v3.0 SHALL replace the universal claim `V_optimal = ∇S` with a broader **Intervention Search** process.

Intervention Search asks:

1. What variable appears limiting?
2. Is it a true constraint, an opportunity, or merely a low score?
3. What mechanism links it to the desired outcome?
4. What competing hypotheses exist?
5. What is the smallest informative intervention or observation?
6. What adverse effects or trade-offs may occur?
7. Under which plausible futures does the intervention remain viable?
8. What signpost would invalidate the current course?

The objective is not necessarily the single optimum. The objective may be robust, adaptive, reversible, or option-preserving action under uncertainty.

## 8. Human–AI boundary

AI MAY:

- extract candidate variables and evidence;
- classify claim types;
- identify missing information;
- generate competing hypotheses;
- construct scenarios;
- check internal consistency;
- calculate declared formulas;
- maintain provenance and change history;
- propose tests and signposts.

AI SHALL NOT silently convert uncertain interpretation into fact.

Human decision-makers remain responsible for:

- goals and values;
- acceptable risk;
- ethical constraints;
- final domain interpretation where evidence is ambiguous;
- intervention authorization;
- political, legal, medical, financial, or other high-stakes decisions requiring accountable expertise.

## 9. Domain architecture

SVF v3.0 SHALL use **Core + Domain Pack** architecture.

The Core defines analytical grammar and contracts. A Domain Pack defines:

- variable ontology;
- candidate State variables;
- Field taxonomy;
- Constraint taxonomy;
- measurement rules;
- domain-specific thresholds only where empirically justified;
- default scenarios;
- evidence hierarchy;
- visual templates.

Initial candidate packs:

1. Personal Navigation
2. Project / Product
3. Business / Organization
4. Public Policy
5. Research
6. Creative Work

## 10. Visual Language is part of the method

SVF v3.0 SHALL treat visual artifacts as protocol, not decoration.

A canonical visual MUST:

- have a defined analytical purpose;
- encode only declared variables;
- preserve uncertainty where material;
- be reproducible from the underlying data model;
- use the same semantic meaning across domains;
- expose missing or unknown values rather than hide them;
- connect to a corresponding verbal/question protocol.

Stage 0 creates the visual-language requirements. Stage 1 audits all v2 visuals. Stage 3–5 define canonical v3 artifacts. Stage 8 implements interactive toolsets.

## 11. Initial canonical visual families

The following are research targets, not yet frozen designs:

1. **SVF Navigation Map** — State, Trajectory, Field, Constraint in one system view.
2. **Trajectory Strip** — position, velocity/rate, acceleration, and confidence over time.
3. **Field Alignment Map** — external force directions relative to intended trajectory.
4. **Constraint Stack** — binding vs non-binding constraints and evidence strength.
5. **Causal Claim Graph** — variables and links labeled by evidence/claim level.
6. **Uncertainty Fog Map** — known, contested, unknown, stale, and high-value-to-learn zones.
7. **Intervention Matrix** — impact hypothesis × evidence × reversibility × cost × robustness.
8. **Scenario Fan / Pathway Map** — multiple plausible futures, signposts, branches, and pivots.
9. **Evidence Ledger** — source-to-claim traceability.
10. **Decision Log / Adaptation Timeline** — what was believed, decided, observed, and changed.

No visual is canonical until its semantics and failure modes are documented.

## 12. Validation principle

SVF v3.0 SHALL be evaluated against baselines rather than only against itself.

Validation classes:

- retrospective reconstruction;
- time-sliced / blind historical analysis;
- timestamped prospective analysis;
- controlled or quasi-controlled intervention where feasible;
- analyst inter-rater reliability;
- comparison with simpler baselines such as unaided expert judgment, SWOT, weakest-link heuristics, generic LLM analysis, and domain-standard methods.

Candidate outcome measures include:

- omission of material variables;
- unsupported claim rate;
- uncertainty identification rate;
- number and quality of competing hypotheses;
- intervention testability;
- calibration of confidence;
- robustness across scenarios;
- decision traceability;
- usefulness to decision-makers.

## 13. Compatibility with v2

v2 elements are not automatically retained or rejected.

Stage 1 SHALL classify each v2 concept as:

- **KEEP** — concept survives substantially unchanged;
- **REVISE** — useful but definition/formalization changes;
- **DOWNGRADE** — theorem/law becomes heuristic or testable hypothesis;
- **REMOVE** — misleading, redundant, or unsupported;
- **ADD** — missing concept required by v3.

Likely early candidates, pending formal audit:

- Position vs Positioning → KEEP/REVISE;
- Scalar hierarchy → REVISE;
- Gradient Navigation Theorem → DOWNGRADE/REVISE;
- Critical Velocity Theorem → DOWNGRADE into threshold/regime hypothesis;
- Slingshot → REVISE as Field Alignment / force-composition concept;
- Phase Dynamics → KEEP/REVISE;
- Anti-Vanity Protocol → KEEP and expand into Epistemic Contract;
- Master Equation → REMOVE as universal centerpiece; retain domain-specific equations where validated.

## 14. Systemization boundary

SVF v3.0 SHALL remain usable without SKEC.

Target architecture:

`manual / CSV / JSON / API / SKEC adapters → SVF Core → Domain Pack → Analysis → Scenario / Intervention → Visual Protocol → Human Decision`

SKEC is a high-value evidence/provenance/change-tracking adapter, not a mandatory dependency.

## 15. Stage 0 exit gate

Stage 0 is CLOSED only when:

- purpose and non-purpose are unambiguous;
- core primitives have non-overlapping working definitions;
- claim-type rules are explicit;
- human/AI boundaries are explicit;
- Core + Domain Pack architecture is accepted;
- visual language is explicitly part of the method;
- validation is comparative and prospective, not only retrospective;
- v2 is declared an audit target rather than an authority.

## 16. Next stage

**Stage 1 — v2 Concept & Artifact Audit**

Deliverables:

1. complete v2 concept inventory;
2. KEEP / REVISE / DOWNGRADE / REMOVE / ADD matrix;
3. mathematical consistency audit;
4. measurement and causality audit;
5. v2 tool/UI/visual artifact audit;
6. missing visual-protocol inventory;
7. prioritized v3 research backlog.
