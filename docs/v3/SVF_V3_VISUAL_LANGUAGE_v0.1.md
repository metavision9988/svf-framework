# SVF v3.0 Visual Language v0.1

**Status:** Stage 0 research specification  
**Date:** 2026-09-17  
**Purpose:** Define visualization as part of the analytical protocol rather than presentation decoration.

## 1. Why SVF needs a canonical visual language

Frameworks become usable when different people can encode the same situation in sufficiently similar forms. SWOT has a shared 2×2 grammar; causal diagrams have node/edge semantics; system dynamics uses stock-flow conventions. SVF v3.0 requires equivalent protocol-level artifacts.

The goal is not a single logo-like diagram. The goal is a **small interoperable visual grammar** in which each artifact answers a distinct analytical question.

## 2. Visual protocol rule

Every canonical SVF artifact SHALL specify:

1. **Question** — what analytical question the artifact answers;
2. **Input contract** — required and optional data fields;
3. **Encoding** — what position, direction, size, line, shape, opacity, interval, or annotation means;
4. **Unknown handling** — how missing/contested/stale information appears;
5. **Uncertainty handling** — interval, confidence band, range, or explicit unknown marker;
6. **Interaction contract** — if interactive, what selection/filter/compare actions mean;
7. **Output contract** — what statements are permitted from the visual;
8. **Failure modes** — how the chart may mislead;
9. **Domain invariants** — semantics that cannot change between Personal, Project, Business, Policy, etc.;
10. **Traceability** — how a mark links back to evidence/claim IDs.

A visualization without these ten items is an illustration, not an SVF protocol artifact.

## 3. Shared semantic primitives

The v3 visual system uses the following primitives across all artifacts:

- **Node** = defined system variable, actor, state, or decision object.
- **Directed edge** = claimed directional relationship; edge type MUST identify Observed/Derived/Inferred/Hypothesis where relevant.
- **Arrow** = direction of trajectory, force, intervention, or pathway; arrow meaning MUST be declared in the artifact.
- **Band / interval** = uncertainty or plausible range, never decorative emphasis.
- **Dashed line** = provisional, inferred, scenario, or not-yet-observed relation; exact use must be declared.
- **Solid line** = established observation/measurement or selected path, depending on artifact.
- **Gap / open cell** = unknown or not assessed; SHALL NOT silently default to zero.
- **Timestamp** = every dynamic artifact must expose observation/as-of time.
- **Source marker** = evidence-backed marks should be traceable to source IDs.

Visual semantics must not depend on color alone. Shape, line pattern, label, iconography, or position must provide redundant cues.

## 4. Canonical artifact candidates

### V1. SVF Navigation Map

**Question:** What is the current system configuration and where is it moving?

**Core regions:**

- State
- Trajectory
- Field
- Constraint
- Unknown / uncertainty overlay

**Minimum inputs:** system boundary, analysis time, State variables, observed Trajectory, major Field forces, binding Constraints.

**Output:** a shared one-page system map. This is the closest v3 equivalent to SWOT's instantly recognizable summary view.

**Research issue:** avoid the false impression that all components share one numeric scale.

### V2. Trajectory Strip

**Question:** Is a variable improving, deteriorating, accelerating, decelerating, or merely fluctuating?

**Encoding:** ordered time series with current level, first difference/rate, second difference where justified, uncertainty band, regime/threshold annotations only when empirically supported.

**Output:** trajectory classification with data window and confidence.

**Failure mode:** short-window noise misread as structural acceleration.

### V3. Field Alignment Map

**Question:** How do important external forces relate to the intended system direction?

**Encoding:** intended trajectory vector plus external force vectors or directional sectors; confidence and source attached to each force.

**Output:** aligned, orthogonal, opposing, or ambiguous field relationships.

**Important:** v3 SHALL NOT infer a quantitative multiplier from angle alone unless a domain model validates that conversion.

### V4. Constraint Stack

**Question:** What currently binds the system, and what is merely weak?

**Encoding:** candidate constraints ordered by evidence strength and estimated binding severity. Constraint status may be `binding / likely binding / non-binding / unknown`.

**Output:** distinguishes bottleneck from low score.

**Failure mode:** rank ordering weak evidence as if precise.

### V5. Causal Claim Graph

**Question:** What mechanism is believed to connect variables and outcomes?

**Encoding:** nodes + directed links; every link has claim type and evidence level. Feedback loops and delays may be shown explicitly.

**Output:** inspectable causal hypothesis map, not automatic causal truth.

**Failure mode:** visually dense graphs creating false authority.

### V6. Uncertainty Fog Map

**Question:** Where are we ignorant, uncertain, stale, or disputed—and which unknowns matter most?

**Encoding:** variables/links classified by evidence quality, uncertainty magnitude, freshness, and decision relevance.

**Output:** high-value information targets.

**Potential extension:** Value-of-Information ranking after methodology is defined.

### V7. Intervention Matrix

**Question:** Which candidate actions deserve testing first?

**Initial axes/dimensions:** expected impact hypothesis, evidence strength, cost, reversibility, time-to-learn, downside, robustness across scenarios.

**Output:** intervention portfolio; NOT a universal weighted score unless weights are explicit and justified.

### V8. Adaptive Pathway Map

**Question:** What can we do now, what can we defer, and what signals cause a branch or pivot?

**Encoding:** pathway branches, decision points, signposts, trigger thresholds/rules, lock-in points, reversible vs irreversible actions.

**Output:** adaptive plan rather than single forecast.

### V9. Evidence Ledger

**Question:** Why do we believe each important statement?

**Encoding:** claim → evidence → source → freshness → confidence → contradictions.

**Output:** compact audit trail usable by humans and software.

### V10. Decision / Adaptation Timeline

**Question:** How did our beliefs and decisions change as new evidence arrived?

**Encoding:** chronological decisions, assumptions, observed outcomes, invalidated hypotheses, pivots.

**Output:** learning history and anti-hindsight-bias record.

## 5. The one-page summary problem

SVF should ultimately have one recognizable summary artifact analogous to SWOT's 2×2, but it must not become an information-dumping dashboard.

**Working candidate: SVF Navigation Map**

Suggested arrangement for research:

```text
┌───────────────────────────────────────────────────────────┐
│ SYSTEM / GOAL / AS-OF / EVIDENCE COVERAGE                 │
├──────────────────────────────┬────────────────────────────┤
│ STATE                        │ FIELD                      │
│ What exists now?             │ What pushes from outside? │
│ levels + evidence            │ forces + direction        │
├──────────────────────────────┼────────────────────────────┤
│ TRAJECTORY                   │ CONSTRAINT                 │
│ What is changing?            │ What binds movement?      │
│ direction + rate + range     │ mechanism + evidence      │
├───────────────────────────────────────────────────────────┤
│ UNKNOWN / COMPETING HYPOTHESES / WATCH SIGNALS            │
├───────────────────────────────────────────────────────────┤
│ NEXT TEST / INTERVENTION / PIVOT CONDITION                 │
└───────────────────────────────────────────────────────────┘
```

This is only a research skeleton. Stage 3 shall test whether the four-panel arrangement creates the wrong impression of independence between components. Alternatives may use a connected spatial map.

## 6. Visuals inherited from v2: provisional disposition

The current repository contains at least these v2 visual artifacts:

- False Safety Window
- Slingshot Reversal
- Gradient Navigation
- Navigation Canvas

Stage 1 SHALL audit them using the following questions:

1. Does the visual encode a concept that survives v3?
2. Are the displayed numbers observed, illustrative, fitted, or hypothetical?
3. Does the visual imply more mathematical certainty than warranted?
4. Can uncertainty be displayed?
5. Can every mark be traced to source data?
6. Does the diagram generalize across domains?
7. Does interaction change analysis or merely animate presentation?

No v2 visual is automatically canonical in v3.

## 7. Visual development stages

### Stage 0 — Requirements
- define visual language principles;
- list candidate canonical artifacts;
- establish visual protocol contract.

### Stage 1 — Audit
- inventory every v2 chart/diagram/tool;
- KEEP/REVISE/DOWNGRADE/REMOVE each artifact;
- identify semantic conflicts and missing views.

### Stage 3 — Canonical grammar prototypes
- prototype Navigation Map, Trajectory Strip, Field Alignment, Constraint Stack;
- test with the same case across multiple domains.

### Stage 4 — Epistemic visualization
- Evidence Ledger;
- uncertainty/confidence encoding;
- unknown and stale-data representation.

### Stage 5 — Decision visualization
- Intervention Matrix;
- Scenario Fan;
- Adaptive Pathway Map;
- signpost and pivot protocol.

### Stage 6 — Validation
- test whether users interpret diagrams consistently;
- measure inter-rater agreement and decision comprehension;
- compare text-only vs canonical visual outputs.

### Stage 8 — Systemization
- interactive visual components;
- reusable data schema;
- exportable snapshots;
- API/SDK rendering contracts.

## 8. Canonical visual acceptance gate

A visual becomes **SVF Canonical** only if:

- semantic definitions are stable;
- at least two independent analysts can encode the same case with materially compatible results;
- users can correctly explain what the visual does and does not claim;
- unknown/uncertain data remain visible;
- the artifact works in at least three materially different domains or is explicitly declared domain-specific;
- the underlying representation can be serialized as structured data;
- misleading interpretations and failure modes are documented.

## 9. Near-term Stage 1 tasks

1. Audit `tools/SVF_Visual_Artifacts.jsx` component by component.
2. Audit `tools/SVF_DualTrack_Tool.jsx` for visual/diagnostic coupling.
3. Audit `tools/SVF_Universal_Framework_v2_Architecture.jsx` for surviving visual grammar.
4. Extract all implicit visual semantics from the paper figures.
5. Build `SVF_V2_CONCEPT_ARTIFACT_AUDIT_v0.1.md`.
6. Produce a first v3 Navigation Map prototype only after the conceptual audit, so the visual does not prematurely freeze the theory.
