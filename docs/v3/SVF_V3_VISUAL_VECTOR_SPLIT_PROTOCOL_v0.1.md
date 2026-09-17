# SVF v3.0 Visual Protocol — State / Trajectory / Action / Field Split v0.1

**Stage:** 1 — Visual Language research  
**Status:** Candidate protocol, not canonical  
**Date:** 2026-09-17

## 1. Analytical purpose

This visual exists to prevent the v2 ambiguity in which one arrow `V` can mean observed movement, desired direction, intervention effort, or external force.

The artifact answers:

> **What is happening to the system, what are we trying to do, what are we actually doing, and what is the environment doing?**

It is a prerequisite visual grammar for the future Navigation Map and Field Alignment Map.

## 2. Required semantic objects

The visual SHALL distinguish these objects even if some are unknown:

1. **Current State** `x_t`
2. **Prior State** `x_(t-1)` when trajectory is claimed
3. **Observed Trajectory** `Δx_t`
4. **Target / Goal** `x*` or declared criteria
5. **Action / Intervention** `a_t`
6. **Field / Context** `e_t`
7. **Constraint** `C` / feasible action boundary
8. **Unknown / disputed relations**

## 3. Arrow grammar

No canonical SVF diagram may use an unlabeled arrow.

| Arrow / edge type | Meaning | Minimum evidence |
|---|---|---|
| **Observed trajectory arrow** | measured change from prior to current State | at least two time-indexed State observations |
| **Goal-direction arrow** | direction from current State toward a declared target | explicit target and compatible state space |
| **Action arrow** | actor-controlled intervention applied to the system | recorded or proposed decision |
| **Field arrow** | directional external force only when direction is operationally meaningful | declared field variable/model |
| **Causal edge** | claimed effect of one variable on another | claim type + evidence level |
| **Scenario arrow** | conditional future movement | explicit assumptions |

Arrow semantics SHALL be redundant through labels/patterns, not color alone.

## 4. Candidate visual skeleton

```mermaid
flowchart LR
    P[Prior State x(t-1)] -->|OBSERVED TRAJECTORY Δx| S[Current State x(t)]
    S -.->|GOAL DIRECTION if defined| G[Target / Goal x*]
    A[Action / Intervention a(t)] ==>|CONTROL INPUT| S
    F[Field / Context e(t)] -.->|EXTERNAL INFLUENCE / hypothesis| S
    C[Constraint / Feasible Boundary] --- A
    U[Unknowns / Rival Hypotheses] -.-> A
    U -.-> F
```

This is structural notation only. Spatial length and angle in this diagram SHALL NOT be interpreted quantitatively unless an artifact explicitly defines a metric space.

## 5. The four questions displayed beside the visual

A user-facing artifact should force four separate answers:

### Q1 — What actually moved?

Use time-indexed observations, not intention.

Output form:

```text
Observed: repeat-use rate changed 28% -> 21% over 8 weeks.
```

### Q2 — Where do we want to go?

Target/value statement. This may be contested and SHALL be attributed to the decision-maker.

```text
Goal: improve 8-week repeat use without increasing acquisition spend.
```

### Q3 — What are we doing about it?

Action/intervention statement.

```text
Action: simplify onboarding and test a shorter activation flow.
```

### Q4 — What is happening around us?

Field/context statement, separated from the actor's action.

```text
Field: a platform policy change reduced organic referral traffic.
```

The visual fails if these four answers are collapsed into a single 'direction score'.

## 6. Constraint representation

Constraints SHALL be visualized as boundaries, blockers, or feasibility annotations rather than merely low bars.

Permitted states:

- `BINDING`
- `LIKELY BINDING`
- `NON-BINDING`
- `UNKNOWN`

Example:

```text
Constraint: legal review requires 30 days before rollout — BINDING for the proposed 2-week test.
```

## 7. Alignment display

The artifact MAY display three distinct alignment concepts:

1. **Trajectory-to-Goal alignment** — Is observed movement approaching the target?
2. **Action-to-Hypothesized-Mechanism alignment** — Does the chosen action address the claimed causal mechanism?
3. **Action-to-Field compatibility** — Is the action robust/compatible under the external context?

These SHALL NOT be collapsed into one number by default.

If cosine similarity is used for Trajectory-to-Goal alignment, the artifact must declare the shared vector space and metric.

## 8. Unknown handling

Unknown is a first-class mark.

The visual SHALL display an explicit `?` / open node / missing-data marker when:

- prior State is unavailable;
- the target is not agreed;
- the action is vague;
- a Field relation is disputed;
- a causal edge is unsupported;
- the relevant time window is missing.

Unknown SHALL NOT be encoded as zero.

## 9. Claim-level styling contract

Provisional convention for research prototypes:

- **Observed / Derived**: solid mark/edge;
- **Inferred**: short-dashed edge with `INF` label;
- **Hypothesis**: dashed edge with `HYP` label;
- **Scenario**: dotted edge with `SCN` label;
- **Intervention**: thick or double-line arrow labelled `ACT`;
- **Unknown**: open boundary / `?` label.

The final design may change visual styling, but semantic classes must remain distinct and non-color-dependent.

## 10. Output contract

From this visual, an analyst MAY say:

- State changed in a measured direction over a stated interval;
- the observed trajectory is aligned/misaligned with a declared target if alignment is operationally defined;
- an intervention is being attempted or proposed;
- external factors are observed or hypothesized to affect the system;
- a specific constraint limits feasible action;
- uncertainty exists in named places.

The analyst SHALL NOT say solely from the diagram:

- X% of effort is wasted;
- the intervention caused the observed change;
- the Field amplifies output by N times;
- one action is mathematically optimal;
- an unknown relation is zero or irrelevant.

## 11. Relationship to future canonical SVF visuals

This protocol becomes a semantic substrate for:

- **V1 Navigation Map** — uses State / Trajectory / Action / Field / Constraint distinctions;
- **V3 Field Alignment Map** — uses Field direction only where operationally defensible;
- **V5 Causal Claim Graph** — expands hypothesis/evidence links;
- **V7 Intervention Matrix** — compares candidate actions without confusing them with observed trajectories;
- **V8 Adaptive Pathway Map** — shows future actions/branches as conditional decisions, not predicted movement.

## 12. Candidate machine-readable contract

A future implementation may use a structure conceptually similar to:

```json
{
  "asOf": "timestamp",
  "state": [],
  "trajectory": [],
  "goal": [],
  "actions": [],
  "field": [],
  "constraints": [],
  "causalClaims": [],
  "unknowns": [],
  "evidenceRefs": []
}
```

This JSON is illustrative only; schemas belong to Stage 3/8.

## 13. Acceptance tests for the visual

A candidate implementation passes only if two independent analysts can look at it and distinguish:

- what happened;
- what is desired;
- what is being done;
- what is external;
- what is constraining;
- what is merely hypothesized;
- what is unknown.

If an analyst mistakes an action arrow for an observed trajectory, the visual protocol has failed.

## 14. Current status

**RESEARCH CANDIDATE.**

This is the first v3 visual artifact whose purpose is not to display a score but to prevent semantic error. It should be tested on Personal, Project, Business, and Public Policy examples before becoming canonical.
