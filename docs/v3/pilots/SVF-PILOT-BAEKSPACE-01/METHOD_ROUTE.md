# SVF-PILOT-BAEKSPACE-01 — METHOD_ROUTE

**Pilot ID:** SVF-PILOT-BAEKSPACE-01  
**As-of:** 2026-09-18  
**Round:** SVF Analysis Round 1

---

## 1. Routing question

> Which specialist method, if any, is needed to answer the current Decision Episode?

The Router must avoid adding methodology merely to make the analysis appear sophisticated.

---

## 2. Route classification

### Q0 — Descriptive state? **YES**

Need:

- current feature/capability inventory;
- actual operational status;
- baseline decision history.

Status:

> sufficiently supported for Round 1 by repository evidence.

No new specialist engine required.

---

### Q1 — Endogenous feedback/delay central? **NO / DEFER**

System Dynamics is not currently justified.

Reason:

The main uncertainty is not a modeled feedback loop.

It is whether users value the current Core job or the proposed Studio job.

A causal-loop model would add ceremony before evidence.

**Route:** none.

---

### Q2 — Causal/interventional question? **YES, but only at experiment-design level**

Relevant future questions:

- Does the Today workflow increase completion/return behavior?
- Does exposure to current Core change repeat use?
- Does a missing feature block a job?

Formal causal inference is premature because:

- sample/population are not defined;
- treatment/outcome definitions are not frozen;
- no observational dataset exists;
- randomization may not be necessary for the first discovery round.

**Route now:** bounded product experiment / behavioral observation.

**Route later:** formal experiment or causal analysis if sample, intervention, and outcome justify it.

---

### Q3 — Control/optimization? **NO**

The product strategy problem is not an engineering control problem.

No state-space/controller formalism is warranted.

**Route:** none.

---

### Q4 — Trade-off among alternatives/values? **PARTIAL / DEFER**

A/B/C/D involve:

- learning value;
- implementation effort;
- strategic focus;
- identity coherence;
- reversibility;
- time-to-evidence.

A decision matrix could be useful later.

However a formal weighted MCDA now would create false precision because:

- criteria are not fully validated;
- weights would be owner preferences;
- market evidence is missing.

**Route now:** keep criteria separate.

**Route later:** lightweight MCDA only if a real stakeholder decision requires explicit trade-offs.

---

### Q5 — Deep uncertainty / RDM? **NO for current scale**

The decision is uncertain but does not yet require large future ensembles or robust policy stress testing.

The main unknowns are learnable through direct product discovery.

**Route:** none.

---

### Q6 — Timing/switching central? **YES, lightweight**

The pilot needs:

- when to continue Core;
- when to authorize Studio build;
- when to stop/pivot;
- what evidence is sufficient.

DAPP-style full pathway planning would be excessive.

But the underlying adaptive principle is relevant.

**Route:** lightweight signpost / trigger plan after interventions are defined.

---

### Q7 — Measurement quality central? **YES**

Before deciding, the project must define:

- what counts as repeat use;
- what counts as successful Core use;
- what counts as Studio behavior change;
- what counts as external commitment;
- what observation window is meaningful.

**Route:** Measurement Contract / product analytics definition.

This is a primary route.

---

### Q8 — Missing information central? **YES — PRIMARY**

The dominant question is:

> **What is the smallest observation or experiment that most changes the A/B/C/D decision?**

Formal monetary Value of Information is not justified.

**Route:** qualitative Information Priority + experiment design.

This is the **primary Method Route** for the current episode.

---

## 3. Domain method route

The current canonical Method Router is not sufficient by itself.

This case requires a domain-specific method family:

> **Product Discovery / Lean Experimentation / Behavioral UX Research**

This is an important Stage 3 finding.

SVF SHOULD support a route type:

`DOMAIN_METHOD`

with fields:

- domain;
- question;
- candidate method;
- why selected;
- assumptions;
- required evidence;
- return contract.

SVF must not force Product Discovery into Causal Inference or MCDA merely because those are already named in the framework.

---

## 4. Selected route stack

### Route 1 — Measurement Contract

Define before external testing:

#### Core
- target user;
- target job;
- first-use task;
- repeat-use event;
- revisit window;
- successful completion;
- abandonment;
- blocker.

#### Studio
- target user;
- target project/job;
- project/topic setup burden;
- Today/Next-Action usage;
- action completion;
- return behavior;
- maintenance burden.

### Route 2 — Product Discovery

Conduct problem-first interviews / observation.

Important:

Do not lead with “Would you use BaekSpace Studio?”

Start with:

- show me your current workflow;
- where do AI outputs go?
- what gets lost?
- what unfinished work accumulates?
- what do you reopen?
- what do you abandon?
- how do you decide what to work on today?

### Route 3 — Bounded behavioral experiment

#### Experiment A — Current Core

Ask users to use current BaekSpace with their own real material.

Observe:

- import;
- reading;
- editing;
- saving;
- revisit;
- feature requests;
- workaround behavior.

#### Experiment D/B-proxy — Manual Studio workflow

Before S0–S2 software:

- provide a simple Projects / Topics / Today / Next Action structure;
- facilitator or disposable prototype may supply the flow;
- observe whether users voluntarily maintain/use it.

### Route 4 — Lightweight adaptive triggers

After metrics are defined, set conditions for:

- continue Core validation;
- implement missing Core blocker;
- authorize Studio S0–S2;
- narrow Studio;
- stop Studio;
- revisit single-product hypothesis.

---

## 5. Methods explicitly not selected

For Round 1:

- System Dynamics — **not needed**
- Control Theory — **not needed**
- formal MCDA — **premature**
- RDM — **too heavy**
- full DAPP — **too heavy**
- formal causal inference — **premature**
- universal SVF score — **prohibited**

This is a positive Router outcome.

Choosing **less methodology** is part of correct routing.

---

## 6. Return contract expected from the next experiment

Each external validation activity should return:

- `user_segment`
- `job_observed`
- `current_substitute`
- `behavior_observed`
- `repeat_signal`
- `blockers`
- `unknowns_resolved`
- `new_unknowns`
- `hypotheses_strengthened`
- `hypotheses_weakened`
- `decision_implication`
- `evidence_level`
- `source_ref`

No “user liked it” result is sufficient by itself.

---

## 7. Round-1 router finding

The central strategic problem is **not currently a forecasting problem** and not a need for a more sophisticated equation.

It is an **information-acquisition problem**.

Therefore the most appropriate next analytical move is:

> **Measurement + Product Discovery + bounded experiments + adaptation triggers.**

This is narrower than the full SVF stack.

That narrowing is itself evidence that the Method Router may be useful if it consistently prevents unnecessary analytical machinery.
