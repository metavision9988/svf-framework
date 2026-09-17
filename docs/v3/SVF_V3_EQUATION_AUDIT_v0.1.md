# SVF v3.0 Equation Audit v0.1

**Stage:** 1 — mathematical consistency audit  
**Status:** Research draft  
**Date:** 2026-09-17

## 1. Audit principle

The purpose of this audit is not to make SVF less mathematical. It is to distinguish valid mathematics from physical metaphor, model assumption, heuristic, and retrospective numerical illustration.

Every v2 formula is evaluated by five questions:

1. What exactly are the variables?
2. Do the variables share compatible semantics and scales?
3. Is the relation true by definition, assumed, estimated, or empirically validated?
4. What claim is the formula allowed to support?
5. What should survive into the v3 universal core versus a Domain Pack?

## 2. Classification vocabulary

| Class | Meaning |
|---|---|
| **D — Definition/Identity** | mathematically true by declared definition |
| **M — Measurement Transform** | declared transformation; validity depends on measurement contract |
| **A — Model Assumption** | functional form chosen for a specific model |
| **E — Empirical Model** | relation/parameters estimated and externally testable |
| **H — Hypothesis** | candidate relation requiring testing |
| **R — Heuristic Rule** | decision aid, not theorem |
| **I — Illustration** | teaching/example numbers only |

A formula may move between classes as evidence improves.

---

## 3. Equation-by-equation audit

### E-01 — Original outcome equation

v2 / v1 formula:

```text
O = |V| * cos(theta) * F
```

**v2 intent:** effort magnitude adjusted for directional alignment and environmental condition determines outcome.

**Problems:**

- `V` is overloaded: observed change, effort, strategic direction, and intention.
- `theta` requires two vectors in a common metric space, but the target vector is not always operationally defined.
- `F` is alternately an environmental score, product of layers, or directional force.
- multiplying by `F` imposes a specific interaction form without universal evidence.

**v3 disposition:** **REMOVE as universal outcome equation.**

**Salvage:** the vector-projection identity may survive when a domain defines a proper vector space:

```text
projection = |v| * cos(theta)
```

This measures geometric projection only. It SHALL NOT automatically be called output efficiency, wasted energy, or outcome.

**Class:** projection = D; outcome relation = A/H unless empirically calibrated.

---

### E-02 — Min-max normalization

```text
x_tilde = (x_raw - x_min) / (x_max - x_min)
```

**Strength:** valid transform when bounds and direction are declared.

**Risk:** converting variables to `[0,1]` does not make them causally, psychometrically, or economically comparable.

**v3 disposition:** **KEEP as optional Measurement Transform.**

Required Measurement Contract fields:

- reason for normalization;
- source of min/max or reference distribution;
- treatment of out-of-range values;
- whether higher always means better;
- sensitivity to selected bounds;
- prohibition on cross-variable arithmetic unless separately justified.

**Class:** M.

---

### E-03 — Scalar hierarchy derivative ordering

```text
∂P/∂S_anchor > ∂P/∂S_leverage > ∂P/∂S_indicator > ∂P/∂S_noise
```

**v2 intent:** Anchor variables have higher outcome sensitivity than lower tiers.

**Problem:** tier membership is partly defined by importance, making the inequality partly circular; derivatives depend on location, time, interactions, and the definition of `P`.

A lagging indicator can also be causally active in another model, and a leverage variable can have negligible local marginal effect near saturation.

**v3 disposition:** **REMOVE as universal theorem; retain hierarchy roles as semantic classifications.**

Possible Domain Pack replacement:

```text
sensitivity_i(x) = ∂J/∂x_i
```

only for a defined model/objective and local state.

**Class:** v2 = H/R; domain derivative = A/E.

---

### E-04 — Stock-flow identity / `V = dS/dt`

v2 states that SVF Scalars are stocks and Vectors are flows:

```text
V = dS/dt
```

**Core finding:** this is valid only if `S` is a continuously defined state quantity and `V` is explicitly the derivative of that same quantity. It conflicts with sections where V means managerial effort or chosen strategy.

**v3 disposition:** **REVISE.**

Use:

```text
v_obs(t) = dx(t)/dt
```

or discrete:

```text
Δx_t = x_t - x_(t-1)
```

for observed trajectory. Action is separately `a_t`.

**Class:** D when defined this way.

---

### E-05 — Effective vector / alignment equation

```text
V_eff = |V| * cos(theta)
```

**Strength:** mathematically valid as a projection if `V` and the reference direction share a defined inner-product space.

**Problem:** v2 often interprets the complement as literal strategic energy waste. That interpretation does not follow from geometry alone.

**v3 disposition:** **KEEP CONDITIONALLY as an Alignment Measure.**

Candidate v3 form:

```text
alignment(v_obs, d_goal) = cos(v_obs, d_goal)
```

Permitted statement: observed movement is more/less aligned with the declared target direction.

Prohibited without domain evidence: `X% of R&D became entropy`, `Y% efficiency`, or causal output claims.

**Class:** D for cosine similarity; interpretation beyond geometry = A/H.

---

### E-06 — Gradient Navigation

```text
V_optimal = ∇S
```

**Problems:**

- a vector-valued State does not have one scalar gradient unless a scalar field/objective is defined;
- the lowest variable is not equivalent to the steepest gradient;
- steepest local ascent may not maximize long-term value;
- constraints, uncertainty, discrete actions, multiple objectives, reversibility, and path dependence are omitted.

**v3 disposition:** **REMOVE as universal theorem; DOWNGRADE the intuition into Intervention Search.**

A legitimate domain model may use:

```text
∇_a E[J | x,a,e,M]
```

where `J`, controllable `a`, state `x`, field `e`, and model `M` are explicit.

Even then the gradient is one decision input, not an automatic prescription.

**Class:** v2 = unsupported theorem / H; domain gradient = A/E.

---

### E-07 — Critical Velocity

Representative v2 form:

```text
V_critical = R_static * F_resistance / (S_base * Π alpha_m)
```

with a hard rule that below the threshold sustained effort produces zero outcome.

**Problems:**

- the formula's dimensions and semantics depend on normalized constructs rather than an empirically derived process;
- a hard zero-output threshold is not universal;
- real domains may be linear, sigmoid, piecewise, hysteretic, multi-threshold, or stochastic.

**v3 disposition:** **REMOVE from universal mathematics; retain Threshold / Regime-Change Hypothesis.**

Domain alternatives may include:

```text
y = f(a)
```

with estimated breakpoints, change points, sigmoid transitions, or regime models.

A threshold SHALL be labelled empirical, hypothesized, or policy-defined.

**Class:** v2 = H/R; calibrated threshold = E.

---

### E-08 — Slingshot coefficient eta

v2 materials contain non-equivalent formulations, including forms conceptually similar to:

```text
eta = |F| * cos(theta_VF)
```

and case calculations of the form:

```text
eta = 1 + (F_gravity * cos(theta_VF)) / |V|
```

while also requiring `eta > 1` for amplification.

**Problem:** these are different models and cannot share one coefficient definition.

**v3 disposition:** **SUSPEND eta as a canonical coefficient.**

Preserve the conceptual pattern as **Field Alignment / Field Interaction**.

Quantification options must be domain-specific:

- interaction term in a regression/causal model;
- scenario effect modifier;
- explicitly defined vector composition;
- qualitative alignment category when measurement is weak.

**Class:** current eta = inconsistent A/H; future domain coefficient = E if calibrated.

---

### E-09 — v2 master equation

```text
P(t) = [ (ws*S~ + wv*V~ + wf*F~ + Σalpha_f~)
         * Πα_m * cos(theta) ] / (1+R) * eta(theta_VF)
```

**Strength:** compactly expresses the intuition that state, movement, context, modifiers, alignment, resistance, and external leverage all matter.

**Problems:**

- heterogeneous constructs are added because they are normalized, not because additive measurement structure is established;
- multiplication creates strong interaction assumptions;
- `V`, `F`, `theta`, and `eta` carry conflicting semantics;
- correction factors can absorb model error;
- the compact score can conceal uncertainty and causal ambiguity;
- retrospective parameter selection can make the equation appear more predictive than it is.

**v3 disposition:** **REMOVE as universal centerpiece.**

Its conceptual decomposition is preserved in the v3 grammar. Domain Packs may define smaller transparent equations where measurement and validation support them.

**Class:** A/H, not universal D/E.

---

### E-10 — Generic state transition / Phase Dynamics

Representative v2 structure:

```text
S(t+1) = S(t) + kappa * P(t)
F(t+1) = f[S(t+1-tau), DeltaExternal]
V(t+1) = ∇S(t+1) * eta[F(t+1)]
R(t+1) = g[org_state(t), Delta t]
```

**Strength:** introduces feedback, delay, and co-evolution across time. This is one of v2's strongest directions.

**Problems:**

- the transition functions are not calibrated;
- `S(t+1) = S(t)+kappa P(t)` assumes outcome reinvests into the state with one coefficient;
- the V equation re-imports the gradient and eta problems;
- some relations are structural hypotheses presented next to identities.

**v3 disposition:** **KEEP the state-transition architecture; REPLACE the universal equations.**

Candidate generic model family:

```text
x_(t+1) = f_M(x_t, a_t, e_t, delayed(x), parameters) + ε_t
```

Specific feedback loops and delays belong to the declared model `M`.

**Class:** architecture = model grammar; any instantiated equation = A/E/H.

---

### E-11 — Field delay

```text
F(t+1) = f[S(t+1-tau), DeltaExternal]
```

**Strength:** explicit delays are essential in dynamic analysis.

**Problem:** a single generic `tau` or reference table cannot be assumed calibrated across domains.

**v3 disposition:** **KEEP as lagged causal/transition relation when justified.**

Candidate forms:

```text
y_t = f(x_(t-k), ...)
```

or distributed lag models where multiple past periods matter.

`tau` SHALL have a provenance: estimated, literature-derived, policy-defined, or illustrative.

**Class:** structure = A/H; calibrated lag = E.

---

### E-12 — False Safety Window duration

```text
False Safety Window duration ≈ tau * Delta t
```

**Strength:** useful teaching relation when the visible indicator responds with a discrete fixed delay.

**Problem:** real masking windows can depend on smoothing, multiple delays, reporting cadence, noise, and threshold rules.

**v3 disposition:** **KEEP as a special-case illustration, not a universal theorem.**

Canonical v3 visual should show the actual observation lag and uncertainty rather than automatically calculate one window from a reference `tau`.

**Class:** I / special-case D under explicitly fixed lag assumptions.

---

### E-13 — Loop transition thresholds

Examples:

```text
Virtuous -> Inertia: d2P/dt2 < 0 for 2+ cycles
Inertia -> Vicious: P(t) < P(t-1) for 3+ cycles
```

**Strength:** provides actionable regime vocabulary.

**Problem:** the cycle counts are not universal. Noise and domain cadence can make them arbitrary.

**v3 disposition:** **KEEP labels; MOVE transition rules to Domain Packs or calibrated change-detection models.**

**Class:** v2 thresholds = R/I; domain transitions = E/H.

---

### E-14 — Dynamic weights

```text
ws + wv + wf = 1
```

**Strength:** makes priorities explicit.

**Problem:** normalized weights do not become objective merely because they sum to one. Their source may be preference, model fit, elicitation, or convenience.

**v3 disposition:** **KEEP only with Weight Provenance.**

Every weight SHALL identify whether it is:

- normative preference;
- expert elicitation;
- empirical model parameter;
- sensitivity-analysis variable;
- scenario assumption.

Any conclusion dependent on weights should include sensitivity analysis where material.

**Class:** identity on chosen weights = D; weight values = normative/A/E depending source.

---

### E-15 — Alpha additive/multiplicative modifiers

```text
Σ alpha_f
Π alpha_m
```

**Risk:** generic modifiers become residual knobs that allow analysts to repair any inconvenient result after the fact.

**v3 disposition:** **REMOVE from universal core.**

Domain Packs may define named interaction/modifier variables with clear semantics, measurement rules, and validation.

**Class:** domain-specific A/E only.

---

## 4. Proposed v3 minimal quantitative backbone

SVF v3 should have a small set of mathematically honest primitives rather than one universal output formula.

### 4.1 Observation

```text
x_t = observed/estimated State
Δx_t = x_t - x_(t-1)
```

### 4.2 Action

```text
a_t = selected intervention
```

### 4.3 Context

```text
e_t = observed or scenario Field/context
```

### 4.4 Feasibility / constraints

```text
a_t ∈ A(x_t,e_t)
```

### 4.5 Transition model — optional and explicit

```text
x_(t+1) ~ p_M(x_(t+1) | x_t,a_t,e_t)
```

No quantitative transition is required when evidence does not justify one.

### 4.6 Causal intervention effect — only when identified

For an outcome `Y`, a causal model may estimate:

```text
Delta_i = E[Y | do(a_i)] - E[Y | do(a_0)]
```

If identification assumptions are not satisfied, SVF SHALL label this as a causal hypothesis rather than an estimated intervention effect.

### 4.7 Goal / objective — optional

```text
J(x,a,e)
```

A scalar objective is optional. Multi-objective decisions may retain separate criteria.

### 4.8 Adaptive policy

```text
a_t = pi(h_t)
```

where `h_t` is the information/history available at time `t`. A practical SVF policy is implemented through signposts and trigger rules, not necessarily through closed-form optimization.

---

## 5. Formula admission gate for v3

A formula may enter the **SVF universal core** only if all are true:

1. its variables have non-overlapping definitions;
2. units/scales and permitted operations are justified;
3. the claim class is declared;
4. uncertainty and missing data behavior are specified;
5. the formula does not claim causal meaning from association alone;
6. failure conditions are documented;
7. domain assumptions are either universal by definition or explicitly delegated to Domain Packs.

A formula may enter a **Domain Pack** when it additionally has domain-specific measurement and validation support.

## 6. Main Stage-1 finding

SVF v2 contains valuable dynamic intuitions, but mathematical notation sometimes gives hypotheses the appearance of laws. v3 should reverse the burden of proof:

> **A formula begins as an assumption or hypothesis unless it is an identity, a declared measurement transform, or an empirically validated model.**

This is not a retreat from rigor. It is the condition required for rigor.

## 7. Status of P0 contradictions after this audit

| P0 | Status after v0.1 |
|---|---|
| C-01 overloaded V | **RESOLVED IN PRINCIPLE** by State / Trajectory / Goal / Action split |
| C-02 gradient ambiguity | **RESOLVED IN PRINCIPLE** by removing universal theorem |
| C-03 eta inconsistency | **CONTAINED** — eta suspended pending Domain model |
| C-04 normalization/comparability | **RESOLVED IN PRINCIPLE** via Measurement Contract |
| C-05 retrospective validity | **OPEN** — requires prospective-case recovery and new evaluation design |
| C-06 universal thresholds | **RESOLVED IN PRINCIPLE** — thresholds delegated to hypotheses/Domain Packs |

Stage 1 SHALL NOT close until C-05 and the external theoretical comparison are addressed.
