# SVF v3.0 Method Router v0.1

**Stage:** 2 — specialist-method routing protocol  
**Status:** Research draft  
**Date:** 2026-09-18

## 1. Purpose

The Method Router prevents SVF from forcing every analytical problem into one score, formula, or diagram.

Its role is to answer:

> **What kind of question are we actually asking, and what method is competent to answer it?**

The Router is part of the SVF protocol even when the specialist analysis is performed by another human, software package, model, or service.

## 2. Router inputs

Before routing, SVF should establish:

- focal system and boundary;
- as-of timestamp;
- decision-maker / accountable actor;
- current State evidence;
- observed Trajectory if available;
- declared Goal(s);
- candidate Action(s);
- material Field conditions;
- known Constraints;
- Unknowns / disputes;
- requested decision or question;
- acceptable decision horizon and risk.

## 3. Primary question classifier

### Q0 — Is the question descriptive?

Examples:
- What is happening?
- What changed?
- What do we know and not know?

**Route:** SVF Core / measurement / descriptive statistics.

### Q1 — Is endogenous feedback/delay central?

Examples:
- Why does the system oscillate?
- Why did a policy create a delayed reversal?
- Which feedback loop dominates?

**Route:** System Dynamics.

### Q2 — Is the question causal/interventional?

Examples:
- Will action X change outcome Y?
- Did intervention A cause the observed improvement?
- What would have happened without X?

**Route:** experiment / causal inference / structural causal model.

### Q3 — Is the system sufficiently modelable for control/optimization?

Examples:
- What input keeps a measurable state near a target?
- Is the system stable?
- What control law minimizes a declared cost?

**Route:** control theory / optimization / operations research.

### Q4 — Is the central issue trade-off among alternatives and values?

Examples:
- Which option best balances cost, safety, speed, equity?
- How should stakeholder preferences change the choice?

**Route:** decision analysis / MCDA.

### Q5 — Is uncertainty deep rather than probabilistically well characterized?

Indicators:
- parties disagree on models;
- probabilities are unknown or disputed;
- future conditions are numerous and structurally different;
- one forecast is fragile.

**Route:** DMDU / Robust Decision Making / scenario discovery.

### Q6 — Is timing and switching between strategies central?

Examples:
- What should we do now and prepare for later?
- Under what condition should we pivot?
- When does the current action stop being adequate?

**Route:** DAPP / adaptive pathway planning.

### Q7 — Is the main uncertainty about the quality of measurement?

Examples:
- Does this score measure what we claim?
- How uncertain is the reported value?
- Are two measures comparable?

**Route:** domain measurement science / statistics / uncertainty analysis.

### Q8 — Is the primary problem missing information?

Examples:
- Should we act or learn first?
- Which unknown is decision-critical?
- What experiment or measurement is most informative?

**Route:** value-of-information or learning-design analysis; if formal VOI is not justified, use a qualitative Information Priority protocol.

## 4. Multi-route rule

Real problems may trigger more than one specialist path.

Example:

A government adaptation problem may require:

1. Measurement — establish observations and uncertainty;
2. Causal inference — assess intervention mechanisms;
3. DMDU — stress-test strategies across futures;
4. DAPP — define switching pathways;
5. MCDA — expose value/trade-off choices.

The Router SHALL permit a pipeline or parallel analyses rather than choose one mandatory winner.

## 5. Return contract

Every specialist method returns at least:

- **method_used**
- **question_answered**
- **inputs**
- **assumptions**
- **result**
- **uncertainty**
- **failure_conditions**
- **evidence_refs**
- **claim_type**
- **implications_for_state**
- **implications_for_actions**
- **new_unknowns**
- **recommended_signposts**

The specialist output does not bypass the Epistemic Contract.

## 6. Router refusal / insufficiency states

A route may return:

- `INSUFFICIENT_DATA`
- `MODEL_NOT_IDENTIFIED`
- `GOAL_NOT_DEFINED`
- `VALUES_CONTESTED`
- `MEASUREMENT_INVALID`
- `DEEP_UNCERTAINTY`
- `ACTION_NOT_CONTROLLABLE`
- `DOMAIN_EXPERT_REQUIRED`

These are legitimate analytical outputs, not system failures.

## 7. Example — project with weak user retention

### Initial SVF framing

- State: 1,400 registered users.
- Trajectory: 8-week repeat-use falls from 28% to 21%.
- Goal: increase repeat-use without increasing acquisition spend.
- Action candidate: redesign onboarding.
- Field: platform referral policy changed.
- Constraint: two engineers / six-week window.
- Unknown: whether retention decline is onboarding-driven or acquisition-mix-driven.

### Router

1. **Descriptive:** cohort decomposition.
2. **Causal:** test onboarding mechanism rather than infer from correlation.
3. **Measurement:** confirm repeat-use definition/cohort comparability.
4. **DMDU:** probably unnecessary at this scale unless major platform uncertainty dominates.
5. **Adaptive:** define stop/continue criterion for the onboarding experiment.

SVF value here is not to calculate one “health score.” It is to prevent category errors and coordinate the right analysis sequence.

## 8. Example — national long-horizon policy

- multiple possible futures;
- contested probabilities;
- irreversible infrastructure;
- interacting risks;
- multiple stakeholder values.

Expected route:

`Measurement → causal/mechanism review → MCDA/value clarification → RDM stress test → DAPP pathway design → SVF adaptation ledger`

## 9. System architecture implication

The Router can later become a software interface:

```text
svf-core
  |
  +-- framing
  +-- epistemic-contract
  +-- method-router
       |
       +-- adapter-system-dynamics
       +-- adapter-causal
       +-- adapter-control
       +-- adapter-mcda
       +-- adapter-rdm
       +-- adapter-dapp
       +-- adapter-measurement
       +-- adapter-information-value
```

No adapter is required for the SVF Core to function.

## 10. Human-AI rule

AI may propose a route and explain why.

AI must not conceal route uncertainty. Where multiple methods are defensible, it should expose the alternatives and what each can/cannot answer.

High-stakes decisions retain human/domain accountability.

## 11. Future validation

Router quality can be evaluated through blinded cases.

Candidate metrics:

- correct recognition of causal questions;
- inappropriate quantification rate;
- failure to flag invalid measurement;
- specialist-method agreement with experts;
- unnecessary complexity / over-routing;
- missed deep-uncertainty cases;
- analyst inter-rater agreement.

The Method Router itself is therefore testable rather than merely descriptive.
