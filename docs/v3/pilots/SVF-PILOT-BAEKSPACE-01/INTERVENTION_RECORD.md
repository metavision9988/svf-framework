# SVF-PILOT-BAEKSPACE-01 — INTERVENTION_RECORD

**Pilot ID:** SVF-PILOT-BAEKSPACE-01  
**Decision date:** 2026-09-19  
**Status:** SELECTED EXPERIMENTAL NEXT ACTION  
**Selected:** **D — Dual validation without a second full build**

---

## 1. Decision

The next action is:

> **Expose the existing BaekSpace Core to a small external discovery cohort while testing the BaekSpace Studio job through a manual/disposable proxy.**

This is an **experiment strategy**, not a product-direction verdict.

It does not decide that:

- Core is the winner;
- Studio should be built;
- two products are required;
- one product is required.

It selects the next information-producing action.

---

## 2. Why D was selected

### D reduces two major uncertainties at once

It can produce evidence about:

1. whether the current Core creates repeated real-world use;
2. whether the Studio job exists outside the owner's workflow.

### D avoids premature implementation

Current Studio evidence is conceptual/internal.

A manual proxy can test the job before creating another production codebase.

### D preserves reversibility

If either path is weak, stopping is cheap.

### D is consistent with existing BaekSpace governance

The repository already favors:

- measurement before conditional expansion;
- bounded feasibility gates;
- human dogfooding;
- non-destructive/reversible decisions.

---

## 3. Why A alone was not selected

A is strong and may still become the strategic result.

But A alone does not test whether the Studio job is independently stronger.

Since the Studio job can be tested without a full build, excluding it would leave a major hypothesis unresolved at low avoidable cost.

---

## 4. Why B was not selected yet

B remains plausible but lacks enough external behavioral evidence.

The pilot specifically rejects:

> conceptual attractiveness → automatic implementation entitlement.

Studio S0–S2 may be authorized later under the precommitted trigger rules.

---

## 5. Why C was not selected

No repeated external blocker has yet justified further Core expansion.

Option C becomes legitimate only when external use exposes a specific missing capability that blocks the repeated job.

---

## 6. Intervention components

### D1 — Core external experiment

Reference:

`EXPERIMENT_CORE_EXTERNAL.md`

### D2 — Studio manual/disposable proxy

Reference:

`EXPERIMENT_STUDIO_PROXY.md`

### D3 — Shared measurement

Reference:

`MEASUREMENT_CONTRACT.md`

### D4 — Adaptive response

Reference:

`SIGNPOST_TRIGGER_PLAN.md`

### D5 — SVF self-test

Reference:

`SVF_VS_SIMPLE_CHECKLIST_PROTOCOL.md`

---

## 7. Intervention assumptions

### IA1
External users can meaningfully try the current Core without strategic feature work.

### IA2
The Studio job can be represented sufficiently well by a manual/disposable proxy.

### IA3
A small exploratory cohort can surface directional behavioral patterns even though it cannot estimate market size.

### IA4
Running the two discovery tracks will not create more operating burden than the information is worth.

### IA5
Participants' own real material/projects will produce more useful evidence than demo tasks.

These assumptions must be reviewed after execution.

---

## 8. Reversibility

D is highly reversible.

No new production product is required.

Maximum sunk cost should be:

- recruiting/interview time;
- lightweight proxy setup;
- observation/follow-up;
- analysis.

If the experiment begins requiring substantial product development, D has drifted and must be stopped/reapproved.

---

## 9. Kill conditions

Stop or redesign D if:

- suitable external participants cannot be recruited;
- proxy setup becomes software development;
- participant fit is too heterogeneous to compare;
- the owner/facilitator is doing the work for participants;
- users are prompted so heavily that return behavior becomes artificial;
- Core and Studio windows become operationally unmanageable.

---

## 10. Expected information gain

D should answer or materially narrow:

- H1 Core-first;
- H2 Studio-job;
- H3 expansion-inertia;
- H4 product split;
- H5 owner bias;
- H6 dual-validation;
- H7 one-product IA.

No other candidate action currently addresses as many decision-critical hypotheses without a major build.

This is the main reason D is selected.

---

## 11. Commercial constraint

D cannot produce validated willingness to pay by itself unless external participants independently create commercial commitment.

Default expected evidence movement is:

`M0 → M2/M3 candidate`

not M4.

---

## 12. Decision record

### Selected
**D**

### Deferred
**A** as sole path  
**B** production Studio build  
**C** broad Core expansion

### Re-open condition
After the precommitted external observation/follow-up window.

No product build decision should be made before reviewing the triggers unless a safety/critical blocker requires immediate action.
