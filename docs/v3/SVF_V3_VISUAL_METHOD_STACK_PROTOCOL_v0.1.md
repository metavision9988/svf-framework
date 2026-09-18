# SVF v3.0 Visual Method Stack Protocol v0.1

**Stage:** 2 — Visual Language / theoretical boundary  
**Status:** Candidate protocol, not canonical  
**Date:** 2026-09-18

## 1. Purpose

This artifact answers:

> **What does SVF do itself, when does it defer to a specialist method, and how do specialist results return to the navigation process?**

It is a boundary diagram, not a process-flow decoration.

## 2. Required layers

The visual SHALL show four layers in order:

### L1 — Evidence & Values
- observations / documents / data;
- goals / values / risk tolerance;
- unknowns.

### L2 — SVF Core Framing
- State;
- Trajectory;
- Field;
- Constraint;
- Goal;
- Action;
- Epistemic claim types.

### L3 — Specialist Method Layer
At least:
- System Dynamics;
- Causal Inference;
- Control / Optimization;
- Decision Analysis / MCDA;
- DMDU / RDM;
- DAPP;
- Measurement / uncertainty.

### L4 — Navigation Return
- competing hypotheses;
- candidate interventions;
- scenario/robustness results;
- signposts/triggers;
- evidence ledger;
- decision;
- observe / update / adapt.

## 3. Visual semantics

- The SVF Core SHALL be shown as an **orchestration layer**, not as a larger or “higher truth” box above specialist fields.
- Specialist methods SHALL appear as peers, each labelled by the question it is competent to answer.
- Measurement/uncertainty SHOULD visually cross-cut the stack because it affects every layer.
- Arrows from Core to specialist methods mean **route question/input**, not causal influence.
- Arrows returning to SVF mean **return typed result/assumptions/uncertainty**, not proof that SVF generated the result.
- No visual size or vertical position shall imply scientific superiority.

## 4. Candidate stack

```text
[ Evidence / Data / Goals / Unknowns ]
                 |
                 v
+--------------------------------------------+
| SVF CORE FRAMING                           |
| State | Trajectory | Field | Constraint   |
| Goal  | Action     | Claims | Uncertainty |
+--------------------------------------------+
                 |
            [METHOD ROUTER]
                 |
  +--------------+--------------+--------------+
  |              |              |              |
[System]      [Causal]      [Decision]      [DMDU]
[Dynamics]    [Inference]   [MCDA]          [RDM]
  |              |              |              |
  +--------+-----+------+-------+------+-------+
           |            |              |
       [Control]      [DAPP]      [Measurement]
           \            |              /
            +-----------+-------------+
                        |
                        v
+--------------------------------------------+
| SVF NAVIGATION RETURN                      |
| Hypotheses | Interventions | Scenarios     |
| Evidence   | Signposts     | Decision      |
| Observe -> Update -> Adapt                 |
+--------------------------------------------+
```

The final graphic may use a more readable composition; this structure defines semantics, not layout.

## 5. Router labels shown in the visual

Each specialist node SHOULD expose one short question:

- System Dynamics — **What feedback structure generates the behavior?**
- Causal Inference — **What changes if we intervene?**
- Control / Optimization — **What input steers a modelable system?**
- Decision Analysis / MCDA — **How do we trade off valued criteria?**
- DMDU / RDM — **What survives many plausible futures?**
- DAPP — **When should we switch pathways?**
- Measurement — **How well do we know the quantity?**

## 6. User-facing interaction candidate

In an interactive implementation:

1. selecting a problem/question highlights candidate routes;
2. selecting a specialist method shows:
   - what it can answer;
   - what inputs it needs;
   - what assumptions it requires;
   - what it cannot conclude;
3. returned results appear in Navigation Return with claim-type badges;
4. evidence/source links remain inspectable;
5. an `INSUFFICIENT_DATA` or `METHOD_NOT_IDENTIFIED` return is displayed as a valid state.

## 7. Failure modes

The artifact fails if users infer:

- SVF replaces the specialist methods;
- every case must use every method;
- routing means the specialist result is certain;
- a specialist method can answer a question outside its assumptions;
- the visual is a maturity ladder with SVF at the top.

## 8. Machine-readable implication

A future Method Route object may include:

```json
{
  "questionId": "Q-01",
  "questionType": "causal_intervention",
  "candidateMethods": ["causal_inference", "experiment"],
  "selectedMethod": "experiment",
  "selectionReason": "...",
  "requiredInputs": [],
  "assumptions": [],
  "status": "ROUTED",
  "resultRef": null
}
```

Schema is illustrative until Stage 3/8.

## 9. Acceptance tests

The visual passes a comprehension test when independent users can correctly answer:

1. What is SVF responsible for?
2. What is the specialist method responsible for?
3. Why was a method selected?
4. What uncertainty remains?
5. How does the result change the navigation map?
6. Does the picture imply SVF is scientifically superior to the specialist method?

Question 6 should be answered **No**.

## 10. Relationship to the canonical Navigation Map

The Method Stack is not the everyday user’s primary analysis canvas.

- **Navigation Map** = inspect one case.
- **Method Stack** = explain the analytical ecosystem and route complex cases.

This separation protects usability.
