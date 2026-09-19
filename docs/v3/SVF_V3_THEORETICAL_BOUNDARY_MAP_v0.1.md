# SVF v3.0 Theoretical Boundary Map v0.1

**Stage:** 2 — theoretical boundary and positioning  
**Status:** Research draft  
**Date:** 2026-09-18  
**Branch:** `v3-research`

## 1. Purpose

SVF v3.0 SHALL NOT present itself as a replacement for system dynamics, causal inference, control theory, decision analysis, robust decision making, adaptive pathways, or measurement science.

These fields contain specialist theories, identification conditions, mathematical machinery, and empirical practices that SVF should reuse or defer to when the problem requires them.

The Stage-2 question is therefore:

> **What analytical work should SVF do itself, what work should it route to specialist methods, and what value remains uniquely attributable to the SVF protocol?**

## 2. Working positioning

**Candidate position:** SVF v3.0 is a **Navigation Protocol Layer** for evidence-grounded analysis and adaptive decision work.

It provides:

1. a common decomposition of complex situations;
2. explicit separation of observation, trajectory, goal, action, field, constraint, causality, and uncertainty;
3. a claim/evidence contract;
4. a method-routing rule for specialist analyses;
5. a common visual and machine-readable protocol;
6. a return path from specialist results to human decision, monitoring, and adaptation.

SVF is therefore not a “super-theory” above other disciplines. It is an orchestration and navigation grammar across them.

## 3. Division of labor by neighboring method

### 3.1 System Dynamics

**Specialist strength**
- stocks, flows, feedback loops, delays, endogenous dynamics;
- dynamic simulation and behavior-over-time reasoning;
- policy testing when a model structure can be made explicit.

**SVF should reuse**
- state/change separation;
- feedback and delay awareness;
- dynamic model invocation when feedback structure materially determines behavior.

**SVF must not claim**
- that all SVF state variables are system-dynamics stocks;
- that a causal-loop sketch is already a validated simulation model;
- that SVF’s generic state-transition grammar replaces stock-flow modeling.

**Boundary rule**
When the main question is “how does feedback structure generate behavior over time?”, route to System Dynamics.

### 3.2 Causal Inference

**Specialist strength**
- distinguishing association from intervention;
- identification assumptions;
- DAGs / structural causal models;
- counterfactual reasoning and causal-effect estimation.

**SVF should reuse**
- explicit causal claim graph;
- intervention vs observation distinction;
- confounding and alternative-cause checks.

**SVF must not claim**
- that temporal order proves causality;
- that an aligned action caused an observed trajectory;
- that a causal effect is identified without assumptions/data supporting identification.

**Boundary rule**
When the main question is “what would happen if we intervene on X?”, route to causal inference, experiment, quasi-experiment, or a declared causal model.

### 3.3 Control Theory

**Specialist strength**
- state-space models;
- controllability/observability;
- feedback controllers;
- stability, robustness, delays, estimation, and performance limits.

**SVF should reuse**
- state/action/feedback separation;
- explicit control inputs and observed outputs;
- closed-loop adaptation logic where the system is sufficiently modelable.

**SVF must not claim**
- that social, organizational, or policy systems are controllable in the engineering sense merely because they are drawn with arrows;
- that human goals are fixed reference signals;
- that a qualitative Field map is a state-space model.

**Boundary rule**
When the system has explicit dynamics, measurable state, controllable inputs, and performance criteria suitable for engineering control, route to control theory/optimization.

### 3.4 Decision Analysis / MCDA

**Specialist strength**
- explicit objectives, preferences, criteria, alternatives, probabilities, utilities, trade-offs;
- structured comparison of options;
- stakeholder-weight elicitation methods.

**SVF should reuse**
- explicit goal/value layer;
- multi-objective trade-offs;
- sensitivity to weights and criteria.

**SVF must not claim**
- that normalized scores are automatically comparable;
- that simple importance weights create a valid utility function;
- that one universal SVF score can collapse all value conflicts.

**Boundary rule**
When the main problem is choosing among alternatives under explicit criteria/preferences, route to decision analysis or MCDA.

### 3.5 DMDU / Robust Decision Making

**Specialist strength**
- decisions when probabilities, models, outcomes, or preferences are deeply uncertain;
- stress-testing candidate strategies over many futures;
- robustness rather than single-forecast optimization;
- scenario discovery and vulnerability analysis.

**SVF should reuse**
- scenario ensembles;
- robustness/regret concepts;
- stress testing;
- explicit deep-uncertainty declaration.

**SVF must not claim**
- to attach precise probabilities where parties do not know or agree on them;
- that one forecast is a sufficient basis for robust strategy.

**Boundary rule**
When plausible futures are numerous and probability/model agreement is weak, route to DMDU/RDM-style stress testing.

### 3.6 Dynamic Adaptive Policy Pathways (DAPP)

**Specialist strength**
- adaptive sequences of actions;
- signposts, triggers, adaptation tipping points;
- pathways that change as conditions unfold.

**SVF should reuse**
- signpost / trigger / pivot contracts;
- adaptive pathway visual grammar;
- explicit “act now / prepare / defer / switch” structure.

**SVF must not claim**
- originality for adaptive pathways as a generic concept;
- that a pathway map is validated without trigger rules and monitoring.

**Boundary rule**
When timing and switching among actions under changing conditions is central, route to DAPP-style adaptive planning.

### 3.7 Measurement Science

**Specialist strength**
- measurand definition;
- calibration;
- validity, uncertainty, error, coverage intervals;
- propagation of uncertainty through measurement models.

**SVF should reuse**
- Measurement Contract;
- uncertainty ranges/distributions;
- explicit data quality and freshness.

**SVF must not claim**
- that a score becomes objective because it is numeric;
- that min-max normalization establishes comparability;
- that confidence labels substitute for measurement models.

**Boundary rule**
When the credibility of an analysis depends on how a quantity is defined/measured, defer to domain measurement standards and uncertainty methods.

### 3.8 SWOT and simple strategic canvases

**Specialist strength**
- low learning cost;
- rapid elicitation;
- shared visual language.

**SVF should reuse**
- accessibility;
- a canonical one-page summary artifact;
- conversational entry point.

**SVF should improve on**
- static lists;
- lack of evidence status;
- weak temporal representation;
- lack of explicit causality/uncertainty/adaptation.

SVF should be compared empirically with SWOT rather than simply asserting superiority.

## 4. Candidate distinctive contribution of SVF

None of the following primitives is wholly new by itself. The candidate originality is the **protocolized combination**.

### C1 — Navigation decomposition

A domain-independent distinction among:

`State → Trajectory → Field → Constraint`

with Goal and Action explicitly separated from observed movement.

### C2 — Epistemic Contract

Every material statement has a claim type:

`Observed / Derived / Inferred / Hypothesis / Scenario / Intervention / Unknown`

with evidence and uncertainty attached.

### C3 — Method Router

SVF does not force every problem into one formula. It detects the analytical need and invokes or recommends a specialist method.

### C4 — Return-to-navigation contract

Specialist outputs must return as inspectable SVF objects:

- what changed in our State estimate;
- what causal claim strengthened/weakened;
- what intervention remains viable;
- what uncertainty was reduced;
- what signpost/trigger changed.

### C5 — Visual Protocol + Machine Contract

The same analysis SHALL have compatible:

- human questions;
- canonical visual marks;
- machine-readable objects;
- source/evidence links.

### C6 — Core + Domain Pack

The common grammar remains stable while measurement, models, thresholds, variables, and domain evidence rules vary by domain.

### C7 — Adaptive provenance

SVF preserves not only the current answer but:

- what was believed at time t;
- on what evidence;
- which action was chosen;
- what occurred;
- why the model/decision changed.

## 5. The “no duplication” rule

SVF SHALL NOT reimplement specialist mathematics merely to appear self-contained.

If a problem is better solved by an established specialist method:

1. frame the question in SVF;
2. route the relevant data/assumptions;
3. perform or import the specialist analysis;
4. convert the result back into SVF claims/evidence;
5. update the navigation state and adaptation plan.

## 6. Strong candidate architecture

```text
Evidence / observations / goals
             |
             v
       SVF Framing Layer
State / Trajectory / Field / Constraint / Unknowns
             |
             v
        Method Router
   +---------+---------+---------+---------+
   |         |         |         |         |
System   Causal    Control   MCDA /    DMDU /
Dynamics Inference  / Opt    Decision    DAPP
   |         |         |         |         |
   +---------+---------+---------+---------+
             |
             v
      SVF Synthesis Layer
Claims / Scenarios / Interventions / Uncertainty
             |
             v
 Navigation Map / Pathways / Evidence Ledger
             |
             v
         Human Decision
             |
             v
      Observe → Update → Adapt
```

Measurement/uncertainty methods operate across every layer rather than as a single branch.

## 7. Claims SVF v3 may reasonably make if validated

SVF may seek evidence for claims such as:

- users omit fewer material categories;
- unsupported claims become easier to detect;
- observed facts and hypotheses are less often conflated;
- competing hypotheses are generated more consistently;
- intervention assumptions become more testable;
- uncertainty becomes more visible;
- method selection becomes more appropriate;
- decisions are more traceable and revisable;
- adaptive triggers are specified more often.

These are **method-utility claims**, not claims that SVF discovers one objectively correct future.

## 8. Claims that require specialist validation

SVF cannot establish by framework design alone:

- causal effect sizes;
- forecast accuracy;
- calibrated event probabilities;
- stability/controllability;
- optimal interventions;
- valid utility trade-offs;
- measurement validity;
- universal thresholds.

## 9. Novelty standard

A future paper SHALL distinguish:

1. **Inherited concepts** — ideas already established elsewhere;
2. **Adapted concepts** — established ideas given SVF-compatible contracts;
3. **Integrative contribution** — the cross-method navigation protocol;
4. **Original artifacts** — any visual/data protocol that is demonstrably new;
5. **Empirically supported contribution** — benefits shown through comparative tests.

“Novel” SHALL NOT be used merely because existing concepts receive new SVF names.

## 10. Stage-2 exit implications

Stage 2 can close only when:

- each neighboring method has a clear defer-to boundary;
- SVF's candidate contribution is stated without claiming inherited concepts as original;
- the Method Router has a first decision protocol;
- the distinctive contribution is falsifiable through comparative evaluation;
- product architecture can reuse specialist engines rather than duplicate them.

## 11. Research references

- MIT OpenCourseWare, *Introduction to System Dynamics* — problem definition, causal-loop diagrams, stocks/flows, robust policy analysis.
- Pearl, J., *Causality* (2nd ed.) and UCLA causal-inference materials — intervention and counterfactual formalism.
- MIT OpenCourseWare, *Feedback Control Systems* — state-space, feedback, robustness, delay and performance limitations.
- Lempert et al. / RAND, Decision Making under Deep Uncertainty and Robust Decision Making.
- Haasnoot et al. (2013), *Dynamic Adaptive Policy Pathways*.
- DAPP-MD (2026), extension to multidimensional uncertainty and interacting risks.
- NIST measurement uncertainty / GUM guidance.
- UK Government Green Book supplementary guidance on MCDA.
