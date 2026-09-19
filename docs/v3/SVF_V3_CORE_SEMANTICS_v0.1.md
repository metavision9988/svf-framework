# SVF v3.0 Core Semantics v0.1

**Stage:** 1 — semantic contradiction resolution  
**Status:** Research draft; candidate resolution for P0 C-01  
**Date:** 2026-09-17

## 1. Why this document exists

SVF v2 uses `V` in several different senses: observed rate of change, effort magnitude, strategic direction, actor intention, and sometimes the path from the current state toward a desired state. Those meanings are related but not identical. A framework cannot safely calculate with one symbol if the symbol changes meaning between sections.

This document separates the meanings before v3 introduces any new master mathematics.

## 2. Candidate semantic rule

SVF v3 SHALL distinguish at least five objects:

| Object | Working symbol | Meaning | Evidence status |
|---|---|---|---|
| **State** | `x_t` | Measured or estimated condition of the system at time `t` | observed / estimated |
| **Observed Trajectory** | `Δx_t`, `ẋ_t` | How the State actually changed over an observation interval | derived from State observations |
| **Target / Goal** | `g`, `x*` | A desired condition or decision criterion | normative / chosen |
| **Action / Intervention** | `a_t` | An actor-controlled action intended to change the system | decision / intervention |
| **Field / Context** | `e_t` or `F_t` | External conditions not directly controlled by the focal actor | observed / scenario / inferred |

A sixth object constrains action:

| Object | Working symbol | Meaning |
|---|---|---|
| **Feasible action set / Constraint** | `A(x_t,e_t)` or `C` | Actions that are possible, permitted, affordable, safe, or implementable in the current context |

The crucial separation is:

> **Observed motion is not the same thing as intended action.**

An organization can invest heavily in an action and still exhibit little or negative observed State movement. Conversely, State can improve because of Field changes even when the actor did little.

## 3. What happens to the v2 Vector concept

The conceptual insight behind `Vector` survives, but the universal quantitative variable `V` does not survive unchanged.

### 3.1 V-observed

If State is represented by a defensible state vector `x`, observed movement may be calculated as:

```text
Δx_t = x_t - x_(t-1)

and, when the time interval is meaningful,

v_obs(t) = Δx_t / Δt
```

This is a **trajectory measurement**. It says what changed; it does not say why.

### 3.2 V-goal

When a target State `x*` is defined in the same state space, a desired direction may be represented as:

```text
d_goal(t) = x* - x_t
```

This is a **target direction**, not an observed trajectory and not an intervention.

### 3.3 Alignment

Only if `v_obs` and `d_goal` live in a justified common vector space with a defensible metric may directional alignment be computed, for example:

```text
alignment = cos(v_obs, d_goal)
```

This calculation is a geometric relationship. It does **not** by itself prove causal efficiency, energy loss, business value, or outcome magnitude.

### 3.4 Action is not V

The action used to influence State is represented separately:

```text
a_t = selected intervention at time t
```

Examples:

- increase marketing spend;
- remove an approval layer;
- change a policy rule;
- study SQL for five hours per week;
- launch a new onboarding flow.

The effect of `a_t` on `x_(t+1)` must come from an explicit causal model, empirical estimate, experiment, or declared hypothesis. It SHALL NOT be inferred merely because the action 'points' in a visually appealing direction.

## 4. Minimal v3 dynamic grammar

SVF v3 does not require every analysis to have an equation. When a quantitative dynamic model is justified, the minimal generic form is:

```text
x_(t+1) = f_M(x_t, a_t, e_t) + ε_t
```

or probabilistically:

```text
x_(t+1) ~ p_M(x_(t+1) | x_t, a_t, e_t)
```

where:

- `x_t` = current State;
- `a_t` = intervention/action;
- `e_t` = external Field/context;
- `M` = explicitly declared model;
- `ε_t` = unmodeled variation / noise.

This is a **model family**, not a universal SVF equation. Each Domain Pack may instantiate `f_M` differently or may remain qualitative where evidence is insufficient.

## 5. Constraints are not merely low scores

A v3 Constraint is defined by what it does to feasible action or system transition, not by being numerically weak.

A useful generic representation is:

```text
a_t ∈ A(x_t, e_t)
```

A candidate factor is a **binding constraint** only if changing or violating it materially changes the feasible action set or attainable transition.

Therefore:

- a weak capability may be non-binding;
- a strong-looking legal requirement may be binding;
- a low score is not automatically a bottleneck;
- a bottleneck is not automatically the best investment target.

This resolves a major problem in the v2 'weakest Anchor first' rule.

## 6. Goals are not facts

The framework SHALL distinguish descriptive and normative layers.

`x_t` describes the current State. `x*`, priorities, risk tolerance, and preferred outcomes express human values or organizational goals. They cannot be derived from data alone.

If a scalar objective is appropriate, a model MAY define:

```text
J(x, a, e)
```

But `J` is always goal/model dependent. SVF v3 SHALL NOT assume one universal outcome function.

Multiple objectives may remain separate rather than being forced into one weighted score.

## 7. Replacement for Gradient Navigation

The v2 statement:

```text
V_optimal = ∇S
```

is not retained as a universal theorem.

A legitimate gradient statement requires a defined differentiable objective and decision variable, for example:

```text
∇_a E[J | x, a, e, M]
```

which asks how expected objective value locally changes with an intervention. Even then, local gradient ascent may be inappropriate under discontinuities, thresholds, multiple objectives, uncertainty, irreversibility, or path dependence.

Therefore v3 uses **Intervention Search**, which can employ gradients when mathematically justified but can also use experiments, causal contrasts, scenario comparison, robust decision criteria, reversible probes, or domain heuristics.

## 8. Replacement for universal Positioning score

The v2 insight `Position != Positioning` is retained, but v3 interprets it as:

- **State**: where the system is now;
- **Trajectory**: how the State has actually been changing;
- **Intent**: where the actor says it wants to go;
- **Action**: what the actor is doing;
- **Alignment**: a declared relation among these objects when measurable.

This avoids statements such as 'R&D effort = 90 units and theta = 75 degrees therefore 77% becomes entropy' unless the domain model genuinely supports those units and transformation.

## 9. Field semantics

`Field` remains a core SVF idea but SHALL NOT automatically be treated as a literal physical vector.

A Field element may be:

- a measured external variable;
- a structural rule or institution;
- a market trend;
- a technology trajectory;
- a demographic change;
- a social or cultural condition;
- a scenario assumption.

A Field element may be represented as a vector only if its dimensions and direction are operationally defined in the same relevant space as the object with which alignment is calculated.

Otherwise its relationship to State and Action should be encoded through a causal link, interaction term, scenario condition, or qualitative directional assessment.

## 10. v3 mathematical honesty rule

Every equation SHALL be classified as one of:

1. **Identity / definition** — true by definition, e.g. `Δx_t = x_t - x_(t-1)`;
2. **Measurement transform** — a declared transformation, e.g. min-max normalization;
3. **Model assumption** — a chosen functional relation requiring justification;
4. **Empirical estimate** — parameters estimated from data;
5. **Hypothesis** — relation proposed for testing;
6. **Heuristic** — useful decision rule without theorem status;
7. **Illustrative example** — numbers used only to teach a concept.

No formula may be presented as a theorem merely because it uses mathematical notation.

## 11. Compatibility with the SVF name

The historical name **Scalar-Vector-Field** remains valuable and is retained as the framework identity.

However, v3 treats the original terms as the intellectual ancestry of the method rather than requiring every real-world domain to be reduced to one literal scalar, one literal vector, and one literal field quantity.

Working interpretation:

- **S / Scalar ancestry -> State**: what exists now;
- **V / Vector ancestry -> Trajectory and Direction**: how the state is moving and toward what;
- **F / Field ancestry -> Context Forces**: the environment in which movement occurs.

This preserves the recognizable SVF grammar while preventing notation from outrunning evidence.

## 12. P0 C-01 candidate resolution

**Candidate status: RESOLVED IN PRINCIPLE, NOT YET CANONICAL.**

The v2 overloaded Vector SHALL be decomposed into:

```text
State x_t
Observed Trajectory Δx_t / ẋ_t
Goal x* / g
Action a_t
Field e_t
Constraints A(x_t,e_t)
```

Stage 2 theoretical comparison and Stage 3 Core Spec must test this decomposition before final adoption.

## 13. Visual implication

The visual language must never use one arrow shape to ambiguously mean all of:

- observed movement;
- desired direction;
- chosen intervention;
- external Field force;
- causal influence.

The next visual protocol document defines distinct arrow semantics for these objects.
