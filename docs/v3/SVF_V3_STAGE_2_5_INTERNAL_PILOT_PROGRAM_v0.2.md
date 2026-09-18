# SVF v3.0 Stage 2.5 — Internal Pilot Program Design v0.2

**Stage:** 2.5 — Internal Pilot Program  
**Status:** Research / Validation + Market Signal Design Draft  
**Date:** 2026-09-18  
**Branch:** `v3-research`

---

## 1. Why Stage 2.5 exists

Stage 0 re-founded SVF v3.0 as an evidence-grounded adaptive navigation framework.

Stage 1 audited v2.0 concepts, equations, visual artifacts, and validation debt.

Stage 2 established the theoretical boundary between SVF and specialist methods such as System Dynamics, Causal Inference, Control / Optimization, Decision Analysis / MCDA, DMDU / RDM, DAPP, and Measurement Science.

Before freezing the Stage 3 Core Specification, SVF now needs to answer a practical question:

> **Does using SVF materially improve real decision work, or does it merely produce a more elaborate description of problems we already understand?**

Stage 2.5 exists to test this question on live internal projects before the framework is formalized further.

The goal is not to prove SVF correct.

The goal is to expose where SVF helps, where it adds friction, where it misleads, and which parts deserve to survive into the v3 Core.

---

## 2. Stage 2.5 mission

Stage 2.5 SHALL:

1. apply SVF to real, ongoing projects with actual decisions at stake;
2. reject projects where SVF does not fit;
3. preserve a baseline of how the decision would likely have been handled without SVF;
4. record what SVF changes in framing, evidence, hypotheses, actions, and monitoring;
5. observe whether those differences remain useful after new evidence arrives;
6. test the emerging visual protocol with real users/decision-makers;
7. generate reusable case material for guides, essays, professional case notes, and future consulting practice;
8. produce concrete revision requests for Stage 3 rather than expanding theory abstractly;
9. test whether the observed methodological benefit is commercially meaningful;
10. distinguish internal enthusiasm from external willingness-to-pay evidence;
11. identify the most plausible initial buyer, use case, and delivery format.

Stage 2.5 SHALL NOT:

- force every internal project into SVF;
- claim causal benefit from a single successful project;
- use retrospective storytelling to make SVF appear correct;
- convert project outcomes into proof of universal validity;
- optimize for promotional attractiveness at the expense of honest evidence;
- allow publication needs to modify the frozen baseline record.

---

## 3. Core principle — Fit before Application

No project enters the pilot merely because it is available.

Every candidate must pass the **SVF Fit Gate**.

### 3.1 Fit Gate questions

A project is a strong candidate when most of the following are true:

| Gate | Question | Why it matters |
|---|---|---|
| F1 | Is there a real decision, intervention, or strategic choice still open? | SVF is a navigation method, not merely a retrospective explainer |
| F2 | Can current State be distinguished from observed Trajectory? | Core semantic requirement |
| F3 | Are material external Field conditions present? | Tests context sensitivity |
| F4 | Are there meaningful Constraints or feasibility boundaries? | Tests bottleneck reasoning |
| F5 | Are two or more plausible explanations or actions available? | Avoids trivial one-answer cases |
| F6 | Is important information uncertain, disputed, stale, or missing? | Tests epistemic discipline |
| F7 | Can a next action, experiment, observation, or decision be recorded? | Required for intervention traceability |
| F8 | Can at least one later observation be collected? | Required for update/adaptation test |
| F9 | Can the case be documented without unacceptable privacy/security risk? | Required for ethical use |
| F10 | Would a simpler method obviously be sufficient? | Prevents unnecessary SVF complexity |

### 3.2 Fit dispositions

- **STRONG FIT** — use full pilot protocol.
- **LIGHT FIT** — use Quick Lens only; do not force deep analysis.
- **NO FIT** — do not use SVF; record why.
- **DEFER** — potentially useful later, but no live decision or follow-up currently available.

A **NO FIT** decision is evidence that the framework has learned its own boundary.

---

## 4. Initial pilot portfolio

The first portfolio is deliberately heterogeneous. SVF should not be validated only on cases that resemble its original business-strategy examples.

### P1 — BaekSpace / Product Navigation Pilot

**Status:** Primary pilot candidate  
**Expected fit:** STRONG

Core question:

> **From a markdown viewer/editor foundation, what product direction is worth testing next, and what evidence should determine whether that direction is continued or changed?**

Why this is a good first case:

- the product has a real current State;
- several future identities are plausible;
- feature expansion can easily be mistaken for product progress;
- user value, workflow, market Field, technical architecture, and resource Constraints interact;
- decisions can be translated into small product tests;
- product behavior can later be observed.

Primary v3 concepts tested:

- State vs Trajectory;
- Goal vs Action;
- Field vs Constraint;
- competing product hypotheses;
- Method Router;
- Intervention Search;
- signpost / pivot condition;
- Navigation Map usability.

### P2 — ThePick + SKEC / Architecture Navigation Pilot

**Status:** Secondary pilot  
**Expected fit:** STRONG, but gated by current SKEC development state

Core question:

> **What belongs in the SKEC Core, what belongs in a Domain Pack, and what evidence should justify promoting a domain need into a reusable core capability?**

Why it matters:

- tests SVF on architecture rather than business strategy;
- exposes internal-vs-external constraint distinctions;
- naturally generates competing hypotheses;
- has real consequences for platform coupling and reuse;
- future implementation outcomes can be observed.

Special restriction:

Stage 2.5 SHALL NOT override existing SKEC development gates or introduce implementation changes merely for SVF validation.

The pilot may be observational/planning-first until SKEC's active gate permits integration work.

### P3 — HOKSINA / Experience & Trust Navigation Pilot

**Status:** Secondary pilot  
**Expected fit:** STRONG / LIGHT depending current execution stage

Core question:

> **Which part of the HOKSINA experience actually creates user value without drifting toward gambling escalation or false promises of better odds?**

Why it matters:

- tests a product where “experience” is central;
- forces separation of probability from personalization;
- allows Trust UX and ethical constraints to become first-class Constraints;
- can test whether SVF handles qualitative value without fake scoring.

Primary concepts tested:

- Experience as a State/Outcome family rather than one score;
- normative/ethical constraints;
- competing value hypotheses;
- Unknown handling;
- small reversible experiments;
- adaptation triggers.

### P4 — MIRROWEL / Anti-Oracle Special Case

**Status:** Reserve / special case  
**Expected fit:** STRONG for epistemic protocol, not necessarily for full navigation stack

Core question:

> **Can the Epistemic Contract visibly separate calculation, interpretation, hypothesis, and unknowns so that generated output does not become fortune-teller rhetoric?**

Why it matters:

- directly stress-tests the Anti-Oracle Protocol;
- tests claim typing and evidence traceability;
- useful future demonstration case;
- should not be used to claim predictive validation.

Primary concepts tested:

- Observed / Derived / Inferred / Hypothesis / Unknown;
- confidence language;
- evidence ledger;
- human-readable visual disclosure.

---

## 5. Pilot unit of analysis

Each pilot SHALL define one **Decision Episode**.

A Decision Episode is not the whole project.

It is:

> a bounded period in which a decision-maker faces a specific question, holds a known set of evidence and assumptions, chooses or rejects an action, and can later observe at least part of the consequence.

Each episode requires:

- `episode_id`
- project
- decision question
- start timestamp
- decision horizon
- decision owner
- baseline evidence snapshot
- baseline reasoning
- SVF analysis
- chosen action / no-action
- signposts
- follow-up timestamp(s)
- observed result
- update record

This keeps the pilot auditable and prevents vague claims such as “SVF helped the project.”

---

## 6. Two-track evaluation design

Every pilot uses two analytical records.

### Track A — Baseline / Pre-SVF reasoning

Capture, as honestly as practical:

- how the problem was originally described;
- what decision seemed likely;
- which variables were considered important;
- what assumptions were implicit;
- what information was missing;
- what action would probably have been taken;
- what success/failure criteria existed before SVF.

This does not need to pretend that the analyst has never seen SVF.

It is a **frozen pre-application decision record**, not a randomized control.

### Track B — SVF-supported reasoning

Run the same Decision Episode through:

1. Fit Gate;
2. system boundary;
3. Evidence intake;
4. State;
5. Trajectory;
6. Goal;
7. Action candidates;
8. Field;
9. Constraint;
10. Unknowns;
11. competing hypotheses;
12. Method Router;
13. specialist analysis only where justified;
14. Intervention Search;
15. signposts / triggers;
16. decision record.

### Track comparison

The analysis SHALL explicitly record:

- What did SVF add?
- What did SVF remove?
- What did SVF reclassify?
- Did the proposed action change?
- Did the confidence level change?
- Did the monitoring plan change?
- Did SVF uncover an unknown that mattered?
- Did SVF add unnecessary work?
- Would a simpler checklist have achieved the same result?

---

## 7. Pilot workflow

### Step 0 — Candidate selection

Run Fit Gate.

Output:

`STRONG FIT / LIGHT FIT / NO FIT / DEFER`

### Step 1 — Freeze Baseline Packet

Before deep SVF analysis, capture:

- project State as currently understood;
- current decision question;
- current preferred option;
- current assumptions;
- known evidence;
- expected next action;
- success criterion if one exists.

This packet is immutable except for annotations.

### Step 2 — Build Navigation Map

Minimum map:

- State
- Trajectory
- Goal
- Action
- Field
- Constraint
- Unknowns

The map SHALL visually distinguish Observed / Inferred / Hypothesis / Scenario.

### Step 3 — Generate Competing Hypotheses

For material causal or strategic claims, list at least:

- primary hypothesis;
- plausible alternative;
- null / “nothing special” explanation when relevant.

Do not manufacture alternatives when none are credible.

### Step 4 — Route Methods

Use Method Router.

Possible outcome:

- SVF Core only;
- descriptive analysis;
- measurement check;
- causal/experimental design;
- MCDA;
- DMDU/RDM;
- DAPP;
- system dynamics;
- other specialist method;
- insufficient data.

### Step 5 — Intervention Search

For each viable action:

- mechanism hypothesis;
- evidence;
- required resources;
- constraints;
- reversibility;
- downside;
- time-to-learn;
- robustness;
- measurement plan;
- stop / continue / pivot condition.

Do not collapse these into a universal score by default.

### Step 6 — Decision

Record:

- chosen action;
- rejected alternatives;
- why;
- uncertainty;
- dissent if present;
- expected signposts;
- next review time/event.

### Step 7 — Observe

Collect only information that would reasonably exist.

Do not edit the earlier decision packet to fit the result.

### Step 8 — Adaptation Review

Ask:

- Which State estimates changed?
- Which hypothesis strengthened or weakened?
- Did the action mechanism behave as expected?
- Which Unknowns remain?
- Was a trigger reached?
- Continue / modify / pause / stop / branch?
- What did SVF miss?

### Step 9 — Methodology Review

Separate project review from SVF review.

Project question:

> Did the project decision work?

Methodology question:

> Did SVF improve the quality of reasoning enough to justify its cost?

### Step 10 — Commercial Signal Review

Commercial review is mandatory for any pilot that may later support consulting or product claims.

Ask:

- Who experiences the decision pain?
- Who owns the decision?
- Who would control budget for solving it?
- How often does this type of decision occur?
- What is the cost of a poor decision or delayed decision?
- What is used today: spreadsheet, workshop, consultant, framework, generic LLM, domain tool, or no formal method?
- What part of the current alternative is insufficient?
- Did SVF create a material difference or merely a cleaner document?
- What additional time/cognitive cost did SVF impose?
- Would the internal user voluntarily reuse it?
- Would an external target user plausibly pay for a service?
- Would software be necessary, or would a facilitated service be sufficient?
- What security, integration, procurement, governance, or training barriers would appear?

Commercial Signal Review SHALL NOT turn an internal pilot into false customer validation.

A project owner's willingness to reuse SVF is **internal utility evidence**.

It is not evidence of external willingness to pay.

---

## 8. Evaluation metrics

Stage 2.5 is exploratory. Metrics are descriptive, not claims of statistical significance.

### 8.1 Core utility metrics

For each episode, reviewers may rate or count:

- **Material-variable omissions**
- **Unsupported claim count**
- **Fact / inference conflation**
- **Explicit Unknown count**
- **Decision-relevant Unknown count**
- **Competing-hypothesis quality**
- **Intervention mechanism explicitness**
- **Testability of intervention**
- **Presence/quality of stop-pivot triggers**
- **Evidence traceability**
- **Decision reconstruction ability**
- **Adaptation clarity after new evidence**

### 8.2 Cost metrics

SVF can fail by being too expensive.

Track:

- analysis time;
- number of required artifacts;
- duplicated information;
- user cognitive load;
- unnecessary specialist routing;
- delay imposed on decision;
- difficulty maintaining the record.

### 8.3 Net-value question

At each pilot close:

> **Would we voluntarily use SVF again for a similar decision?**

Answer:

- YES — Full
- YES — Quick Lens only
- MAYBE — needs simplification
- NO — simpler method sufficient
- NO — method distorted the problem

This simple answer is a required Stage 2.5 metric.

### 8.4 Commercial signal metrics

Commercial signals are tracked separately from methodology metrics.

Record:

- **Pain owner** — who materially suffers from the problem;
- **Decision owner** — who must decide;
- **Budget owner** — who could approve spending;
- **Decision frequency** — rare / periodic / frequent;
- **Decision consequence** — qualitative description of downside or opportunity cost;
- **Current substitute** — what is used today;
- **Substitute satisfaction** — sufficient / partially sufficient / poor / unknown;
- **SVF incremental value** — what changed beyond better formatting;
- **Time-to-value** — how quickly a useful output appeared;
- **Facilitation dependence** — can users apply it without expert help?;
- **Reuse intent** — would the same user use it again?;
- **Referral intent** — would they suggest it to another team?;
- **Service interest** — would they accept a facilitated workshop?;
- **Software necessity** — is recurring software actually needed?;
- **Adoption friction** — training, integration, security, procurement, governance.

### 8.5 Evidence ladder for market claims

Market evidence SHALL be labeled by strength.

**M0 — Internal intuition**
- owner's belief;
- analyst impression;
- hypothetical willingness to pay.

**M1 — Internal behavioral signal**
- repeated voluntary reuse;
- users request the method again;
- artifacts are maintained after the facilitated session.

**M2 — External problem confirmation**
- target users independently report the same pain;
- current substitutes and buying process are understood.

**M3 — External behavioral commitment**
- target user agrees to a pilot;
- shares real data/time;
- invites colleagues;
- schedules follow-up.

**M4 — Commercial commitment**
- paid workshop;
- paid advisory engagement;
- paid pilot / letter of intent with meaningful commitment.

**M5 — Repeatable commercial evidence**
- repeat purchase;
- expansion;
- referrals;
- multiple independent customers.

Stage 2.5 internal pilots can normally produce **M0–M1 only**.

SVF SHALL NOT claim validated willingness to pay from M0–M1 evidence.

---

## 9. Visual protocol research inside the pilots

Every pilot is also a visual-language test.

The following artifacts are candidates:

### Required

1. **SVF Navigation Map**
2. **Evidence / Claim Ledger**
3. **Decision & Adaptation Log**

### Conditional

4. Trajectory Strip
5. Field Alignment Map
6. Constraint Stack
7. Causal Claim Graph
8. Intervention Matrix
9. Adaptive Pathway Map
10. Uncertainty Fog Map
11. Method Stack / Route trace

For each artifact collect:

- comprehension issues;
- semantic confusion;
- fields never used;
- missing information;
- marks interpreted incorrectly;
- whether color/shape/line conventions work;
- whether the same artifact is useful across domains.

A visual that looks attractive but causes semantic mistakes SHALL be revised or removed.

---

## 10. Case publication pipeline

A pilot case can create multiple public/private outputs without rewriting the underlying evidence.

### Level 0 — Frozen Internal Record

Purpose:
- validation;
- audit;
- future comparison.

Contains:
- full evidence;
- internal reasoning;
- sensitive details;
- timestamps;
- rejected options.

Not public by default.

### Level 1 — SVF Case Note

Audience:
- practitioners;
- builders;
- prospective users.

Format:
- 4–8 pages or equivalent web article;
- situation;
- Navigation Map;
- key Unknowns;
- Method Route;
- intervention;
- signposts;
- follow-up.

### Level 2 — Illustrated Guide

Audience:
- general users.

Format:
- one concept per page/section;
- minimal jargon;
- canonical visuals;
- “before vs after SVF” comparison.

### Level 3 — Essay / Narrative Case

Audience:
- broad public.

The essay SHALL begin from a recognizable human/product dilemma, not from framework terminology.

Example candidate from BaekSpace:

> **기능을 더 만들면 서비스가 좋아질까**

SVF appears as a way of seeing the dilemma rather than the hero of the story.

### Level 4 — Professional Consulting Case

Audience:
- organizations / consulting buyers / analysts.

Contains:
- decision context;
- evidence basis;
- method route;
- assumptions;
- intervention design;
- monitoring;
- adaptation;
- measurable impact where legitimately available.

### Level 5 — Methodology Evidence

Audience:
- paper / research / validation.

Uses multiple cases together.

No single case can establish universal validity.

---

## 11. Anti-marketing rules

Public case material SHALL NOT:

- imply a predicted outcome when the analysis only generated a scenario;
- hide failed interventions;
- rewrite earlier uncertainty after the result is known;
- present illustrative scores as measured facts;
- claim causality from sequence alone;
- omit cases where SVF added no value;
- state that specialist-method results were produced by SVF when they came from another method;
- convert private project details into public evidence without explicit approval.

A failed SVF application may be more scientifically valuable than a polished success story.

---

## 12. Consulting evolution track

Stage 2.5 also tests whether SVF can become a professional consulting tool.

### C0 — Internal use

Use on the owner's projects.

Goal:
- prove workflow usability;
- remove unnecessary complexity.

### C1 — Guided SVF Lens

Potential future service:

- 60–90 minute structured interview;
- one Navigation Map;
- key Unknowns;
- 1–3 competing hypotheses;
- next test;
- one pivot condition.

Suitable for:
- individuals;
- creators;
- founders;
- small projects.

### C2 — SVF Navigation Workshop

Potential future service:

- half-day / full-day;
- team evidence intake;
- Navigation Map;
- Method Router;
- intervention portfolio;
- signposts;
- decision record.

Suitable for:
- product teams;
- SMEs;
- project teams.

### C3 — Continuous Navigation

Potential future service:

- recurring evidence updates;
- decision history;
- trigger monitoring;
- adaptation review;
- specialist-method integration.

Suitable for:
- organizations;
- transformation programs;
- long-horizon projects.

### C4 — SVF Workbench

Potential software product:

- collaborative case workspace;
- evidence ingestion;
- typed claims;
- canonical visuals;
- Method Router;
- decision/adaptation ledger;
- Domain Packs;
- specialist adapters.

### C5 — SVF + SKEC

Potential advanced architecture:

```text
SKEC
Evidence / Relation / Change / Provenance
              ↓
SVF
Framing / Method Routing / Intervention / Adaptation
              ↓
Human / Team Decision
```

This remains a later integration target and must not create a hard dependency in SVF Core.

---

## 13. Pilot artifact set

Each full pilot SHALL produce:

1. `PILOT_CHARTER.md`
2. `FIT_GATE.md`
3. `BASELINE_PACKET.md`
4. `NAVIGATION_MAP.md` or machine-equivalent
5. `EVIDENCE_LEDGER.md`
6. `HYPOTHESIS_REGISTER.md`
7. `METHOD_ROUTE.md`
8. `INTERVENTION_RECORD.md`
9. `SIGNPOST_TRIGGER_PLAN.md`
10. `FOLLOWUP_OBSERVATIONS.md`
11. `ADAPTATION_REVIEW.md`
12. `SVF_METHOD_REVIEW.md`
13. `COMMERCIAL_SIGNAL_REVIEW.md`
14. optional `PUBLIC_CASE_NOTE.md`

For LIGHT FIT pilots, artifacts may be collapsed into one compact file.

---

## 14. Pilot Case ID convention

Suggested convention:

```text
SVF-PILOT-<PROJECT>-<NN>
```

Examples:

- `SVF-PILOT-BAEKSPACE-01`
- `SVF-PILOT-THEPICK-01`
- `SVF-PILOT-HOKSINA-01`
- `SVF-PILOT-MIRROWEL-01`

A new episode increments the sequence.

This permits multiple decisions inside the same project without treating the project as one monolithic case.

---

## 15. Stage 2.5 research questions

Stage 2.5 SHALL answer at least:

### RQ1
Can independent users distinguish State, Trajectory, Goal, Action, Field, and Constraint in a real case?

### RQ2
Does the Epistemic Contract reduce unsupported or ambiguous claims?

### RQ3
Does Method Router improve method selection, or merely add ceremony?

### RQ4
Does Intervention Search produce more testable actions than the v2 weakest-anchor logic?

### RQ5
Are signposts / pivot conditions useful enough to maintain after the initial analysis?

### RQ6
Which canonical visuals survive contact with real work?

### RQ7
What is the minimum useful SVF workflow?

### RQ8
Where does SVF clearly lose to a simpler method?

### RQ9
Can one semantic protocol serve Product, Architecture, Experience, and Epistemic cases without semantic distortion?

### RQ10
Which elements are strong enough to freeze into Stage 3 Core Spec?

### RQ11
For which decision types does SVF create an incremental benefit large enough to matter commercially?

### RQ12
Who is the most plausible first buyer: founder, product team, internal strategy team, boutique consultant, or another segment?

### RQ13
Is the value primarily in the methodology, facilitated consulting, recurring decision review, or software?

### RQ14
Does the Quick Lens deliver enough value that a user would voluntarily repeat it without the full Workbench?

### RQ15
What evidence would be required before SVF can make any external willingness-to-pay claim?

---

## 16. Stage 2.5 gates

### Gate 2.5-A — Pilot Readiness

PASS when:

- Fit Gate exists and is applied;
- first pilot question is bounded;
- baseline can be frozen;
- follow-up observation is feasible;
- privacy/security conditions are acceptable.

### Gate 2.5-B — First Pilot Complete

PASS when one Decision Episode has:

- baseline;
- SVF analysis;
- decision/action;
- signpost/trigger;
- at least one follow-up observation;
- adaptation review;
- methodology review.

### Gate 2.5-C — Cross-domain Evidence

PASS when at least three meaningfully different pilot episodes have been completed or deliberately rejected by Fit Gate.

At least one SHOULD be a case where SVF is judged unnecessary or only LIGHT FIT.

### Gate 2.5-D — Visual Protocol Evidence

PASS when:

- Navigation Map has been tested in multiple cases;
- common semantic confusions are documented;
- at least one visual candidate has been revised or removed based on use.

### Gate 2.5-E — Market Signal Readiness

PASS for moving from internal validation to external market discovery when:

- at least two internal pilots show voluntary reuse or clear repeat-use intent;
- a concrete target decision type is identifiable;
- the incremental value over a simple checklist/generic LLM can be stated;
- delivery time/cognitive cost is acceptable;
- the likely first buyer and budget owner are hypothesized;
- no willingness-to-pay claim is presented as validated.

This gate does **not** authorize a software build.

### Gate 2.5-F — Stage 3 Entry

Stage 3 Core Spec may begin freezing only when:

1. core semantic distinctions survive pilots;
2. the minimum useful workflow is identifiable;
3. Method Router shows practical value or is reduced accordingly;
4. visual protocol has usable conventions;
5. at least one case demonstrates adaptation after new evidence;
6. no unresolved P0 contradiction is hidden by the pilot format;
7. consulting/product artifacts are treated as derivatives of evidence, not substitutes for validation;
8. the minimum market-relevant use case is identifiable;
9. internal utility evidence and external commercial evidence remain explicitly separated.

---

## 17. Recommended execution order

### Pilot 1 — BaekSpace

Purpose:
- easiest full end-to-end product Decision Episode;
- strongest candidate for first Navigation Map;
- likely best public-friendly narrative case.

### Pilot 2 — HOKSINA

Purpose:
- test qualitative experience, trust, ethics, and non-probabilistic value;
- test whether SVF can avoid fake scoring.

### Pilot 3 — ThePick + SKEC

Purpose:
- test architecture/platform reasoning;
- test Core vs Domain Pack boundaries;
- execute only within existing development gates.

### Special Case — MIRROWEL

Purpose:
- stress-test Epistemic Contract / Anti-Oracle;
- may remain a narrow epistemic pilot instead of a full navigation episode.

---

## 18. Immediate next action

Create:

`docs/v3/pilots/SVF-PILOT-BAEKSPACE-01/`

and begin with two artifacts only:

1. `FIT_GATE.md`
2. `BASELINE_PACKET.md`

The first pilot SHALL also prepare an empty `COMMERCIAL_SIGNAL_REVIEW.md` template at baseline time, but it SHALL NOT be completed as if customer evidence already exists.

Do **not** build the full SVF analysis before the Baseline Packet is frozen.

This is essential to prevent hindsight bias and to make the pilot scientifically useful.

---

## 19. Stage 2.5 working principle

> **The pilot is not a demonstration that SVF works.  
> The pilot is an opportunity for reality to tell us which parts of SVF deserve to survive.**

That principle governs Stage 2.5.

A second principle now governs commercialization:

> **A method can be useful without being a business.  
> A business can exist only when someone outside the method's creator experiences enough value to commit time, data, reputation, or money.**

Stage 2.5 therefore validates methodology first and market signal second, without confusing the two.
