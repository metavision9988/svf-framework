# SVF-PILOT-BAEKSPACE-01 — HYPOTHESIS_REGISTER

**Pilot ID:** SVF-PILOT-BAEKSPACE-01  
**As-of:** 2026-09-18  
**Round:** SVF Analysis Round 1

---

## 1. Purpose

This register prevents one attractive narrative from becoming the product strategy by default.

A hypothesis is not a prediction and not a claim of causality.

---

## 2. Competing hypotheses

### H1 — Core-first value hypothesis

> **The existing BaekSpace Core already solves a sufficiently important repeated job; the highest-value next step is external validation rather than another product build.**

Supporting evidence:

- mature current capability;
- product already live;
- explicit measurement gates;
- market evidence remains M0.

Against:

- current core may be technically impressive but not behaviorally compelling;
- its strongest user job is not yet clear;
- external validation may reveal fragmented value rather than a coherent product.

Test:

- small external beta;
- observe import → read/edit/store → revisit;
- ask users to bring real material, not demo content;
- record whether they return without feature prompting.

Invalidating signal:

- users admire the tool but do not return or replace/complement a real workflow.

---

### H2 — Studio-job hypothesis

> **The stronger repeated problem is not reading/storing AI documents but moving many ideas/projects toward finished work; BaekSpace Studio is therefore the more valuable product direction.**

Supporting evidence:

- owner's repeated pain around too many projects/ideas;
- existing concept architecture is coherent;
- current core provides reusable engine/editor/reader assets.

Against:

- demand is currently owner-derived;
- project-management/writing workflow is a crowded substitute space;
- structured Projects/Topics/Today may become maintenance overhead.

Test:

- use the Studio workflow without building the full product;
- manually maintain Projects/Topics/Today for real work;
- recruit external users matching the intended segment;
- observe repeated use and whether “Today” changes actual completion behavior.

Invalidating signal:

- users stop maintaining structure;
- Today suggestions do not change action;
- existing tools are “good enough.”

---

### H3 — Expansion-inertia hypothesis

> **Option C is attractive mainly because the existing codebase makes new features easy to imagine and implement, not because those features resolve the highest-value customer problem.**

Supporting evidence:

- long history of capability expansion;
- explicit repository warnings against expansion without measurement;
- large set of deferred/conditional ideas.

Against:

- some deferred capabilities could materially unlock the current product;
- implementation may be required before users can perceive the intended core job.

Test:

For each proposed core feature, require:

1. named user problem;
2. evidence that it blocks current use;
3. expected observable behavior change;
4. cheaper non-code alternative.

Invalidating signal:

- external users repeatedly hit the same missing feature and cannot complete the core job without it.

---

### H4 — Product-split hypothesis

> **Core and Studio are genuinely different products with different jobs, and separation protects both.**

Supporting evidence:

- Core North Star emphasizes local/non-destructive document home;
- Studio concept emphasizes project progression/writing/publishing;
- server/workflow concerns may conflict with current hard limits.

Against:

- two products can confuse users;
- shared concepts may duplicate UX/data;
- a single “workspace” might be easier to understand.

Test:

- show users both product promises without implementation details;
- ask which job they understand, which they would use, and whether the relationship is clear;
- test whether users expect seamless movement between them.

Invalidating signal:

- users cannot explain why two products exist;
- the same users expect the same surface for both jobs.

---

### H5 — Owner-bias hypothesis

> **Studio appears unusually compelling because it matches the owner's personal multi-project/writing overload; the market may not share the same intensity or structure.**

Supporting evidence:

- the concept emerged directly from a rich personal workflow;
- no external sample exists.

Against:

- founder/owner pain can be a valid wedge if a broader segment shares it;
- creator/knowledge-worker overload is plausible.

Test:

- external problem interviews before solution demo;
- ask users to describe how they currently manage unfinished ideas/projects;
- only later expose the Studio concept.

Invalidating signal:

- multiple target users independently describe the same problem and already spend substantial effort solving it.

---

### H6 — Dual-validation / Option-D hypothesis

> **The best next move may be to validate the existing Core externally while testing the Studio job through a manual or disposable prototype, postponing major Studio software investment until one job shows stronger behavioral evidence.**

Supporting logic:

- current Core exists and can be tested now;
- Studio job can be tested without full software;
- the dominant uncertainty is behavioral/market, not basic technical feasibility.

Risks:

- running two validation threads may dilute attention;
- small samples may create ambiguous results;
- manual prototype may underrepresent Studio's eventual UX value.

Test:

- one bounded Core beta cohort;
- one bounded Studio concierge/prototype cohort;
- same observation window;
- compare repeat behavior, voluntary return, task completion, and qualitative switching signal.

Invalidating signal:

- the dual track costs more attention than it saves;
- results are too incomparable;
- Studio cannot be meaningfully tested without software.

---

### H7 — One-product / IA hypothesis

> **The real problem may be information architecture rather than product separation; a focused workflow layer inside BaekSpace could deliver Studio value without a second product.**

Supporting logic:

- existing core already has editor/library/category/series primitives;
- another repo creates operational overhead.

Against:

- current North Star and Zero-Upload constraints could become diluted;
- Studio may require a fundamentally different interaction model and later server capabilities.

Test:

- paper/interactive mock of a workflow layer inside current BaekSpace;
- compare comprehension against separate-product mock.

Invalidating signal:

- combined IA becomes visibly overloaded;
- users cannot identify the primary job;
- required architecture conflicts with core invariants.

---

## 3. Hypothesis status matrix

| Hypothesis | Current support | Main missing evidence | Strategic implication |
|---|---|---|---|
| H1 Core-first | Medium | external repeat use | strengthens A |
| H2 Studio-job | Low–Medium | external problem + behavioral use | supports B if validated |
| H3 Expansion inertia | Medium | whether missing features block users | weakens C |
| H4 Product split | Medium conceptually | user mental-model test | affects B architecture |
| H5 Owner bias | Plausible | external problem interviews | warns against B overcommit |
| H6 Dual validation | Medium as learning strategy | execution cost/result clarity | introduces D |
| H7 One-product IA | Low–Medium | comparative comprehension/prototype | alternative to B split |

“Support” here is a qualitative research status, not a probability.

---

## 4. Most decision-relevant discriminators

The next evidence should not try to “prove BaekSpace good.”

It should discriminate between hypotheses.

### D1
Do external users return to the current Core with their own real documents?

- yes → H1 strengthens;
- no → H1 weakens.

### D2
Do target users independently report idea/project completion overload before seeing Studio?

- yes → H2 strengthens, H5 weakens;
- no → H5 strengthens.

### D3
Does a manual Today/Next-Action flow change actual work behavior?

- yes → H2/H6 strengthen;
- no → H2 weakens.

### D4
Do users need an unbuilt core feature to complete a repeated job?

- yes → H3 weakens for that feature;
- no → H3 strengthens.

### D5
Can users clearly explain Core vs Studio?

- yes → H4 strengthens;
- no → H7 or narrower positioning becomes more plausible.

---

## 5. Round-1 implication

The strongest challenge to the baseline B preference is **not** “Studio is a bad idea.”

It is:

> **Studio is currently a product hypothesis being treated too close to an implementation plan.**

Round 1 converts it back into a hypothesis that can earn implementation investment through evidence.
