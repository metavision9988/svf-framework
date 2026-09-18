# SVF-PILOT-BAEKSPACE-01 — BASELINE_PACKET

**Pilot ID:** SVF-PILOT-BAEKSPACE-01  
**Project:** BaekSpace  
**As-of:** 2026-09-18  
**Status:** **FROZEN PRE-SVF BASELINE v1**  
**SVF analysis:** NOT STARTED  
**Purpose:** Preserve what was known, believed, preferred, and planned before applying the SVF v3 protocol.

---

## 1. Baseline integrity rule

This document is a **pre-application record**.

After it is frozen:

- factual corrections may be appended as annotations;
- later evidence may be linked;
- original preference, uncertainty, and reasoning SHALL NOT be rewritten to make later decisions appear inevitable.

This is not a randomized control. It is a contemporaneous baseline for comparison.

---

## 2. Current product State — pre-SVF

BaekSpace began as a Markdown viewer but has already expanded substantially.

At the repository snapshot used for this pilot:

- current operational version is **v0.44.6**;
- production is live;
- the system includes mature Render / Reader / Library capabilities;
- source editing exists through CodeMirror;
- durable browser-local storage and backup/restore exist;
- categories/search and reading modes exist;
- local/P2P transfer paths exist;
- image/media capabilities exist;
- the product has extensive quality gates and non-destructive safeguards.

The product therefore cannot honestly be described as “just a Markdown viewer.”

A more accurate pre-SVF description from recent strategic work is:

> **a private, non-destructive context/document workspace whose strongest implemented core is reading, editing, storing, and moving Markdown/AI-generated documents without surrendering control of the originals.**

This wording is a strategic interpretation, not a repository theorem.

---

## 3. Current Trajectory — pre-SVF

Observed development trajectory:

`Viewer → Reader → Library → Editor → Transfer → Media-capable local workspace`

The trajectory has been capability-rich and quality-intensive.

A recurring risk already recognized before SVF is that implementation depth may outrun product validation.

Evidence of this tension:

- many sophisticated capabilities exist;
- repo governance explicitly requires measurement before some future expansion;
- prior strategy discussions have alternated between “external beta first” and “build the next Studio layer.”

This is a real strategic tension, not a contradiction to hide.

---

## 4. Existing product identity — pre-SVF

Repository North Star:

> **LLM이 쏟아내는 마크다운의, Zero-Upload·비파괴 “집”.**

Recent strategic reframing also described the product as:

> **a private, non-destructive context workspace**

and as a place that reduces the gap between:

> AI가 답을 만드는 속도와 사람이 다시 읽고 자기 것으로 만드는 속도.

These descriptions existed before the pilot.

They are not yet externally validated positioning claims.

---

## 5. Existing hard constraints — pre-SVF

The following were already decided before SVF:

### Architectural/product invariants
- Zero Upload by default;
- browser-local processing/storage;
- non-destructive behavior;
- user-controlled rewrite/organization;
- no silent AI overwrite;
- explicit publish action;
- Markdown/exportability should remain durable;
- avoid direct generic-editor competition where possible.

### Governance constraints
- new expansion must satisfy existing feasibility/measurement rules;
- human G7 validation remains a real completion gate;
- green automated tests do not equal product completion;
- server-backed capabilities require a separately justified architecture decision.

### Strategic constraint
The owner does not want feature accumulation to continue merely because the codebase can support it.

---

## 6. Known strengths — pre-SVF

The following strengths were already believed to be meaningful:

- local-first / Zero-Upload trust;
- original-preserving, non-destructive philosophy;
- strong Markdown rendering/reading;
- Korean typography/reading experience;
- durable local document library;
- mature implementation discipline;
- reusable `@void/md-engine`;
- source editing and preview;
- transfer/backup capabilities;
- ability to become infrastructure for related products.

Earlier feasibility work also treated ASCII/box-drawing → structured rendering + original toggle as a distinctive asset.

Whether external users care enough about each strength remains uncertain.

---

## 7. Known weaknesses / gaps — pre-SVF

Already identified before the pilot:

- product identity has broadened as features accumulated;
- current UI/IA was originally viewer/reader-centric;
- Organize / Publish are less mature than Render / Reader / Library;
- user demand is not yet proven at the same level as technical implementation;
- strong incumbent tools exist in notes/editing/content management;
- copying an Obsidian feature checklist would weaken differentiation;
- “more capability” is not equivalent to “more product value”;
- some important completion checks still require hands-on device use.

---

## 8. Pre-SVF strategic options

### Option A — Validate current BaekSpace first

Meaning:

- stop major strategic expansion temporarily;
- expose current product to external users;
- learn which existing capability creates repeat behavior;
- use evidence to decide what deserves expansion.

Pre-SVF rationale:

- current core is already deep enough to test;
- further building without user evidence risks compounding the wrong product;
- repo's own measurement philosophy supports this route.

### Option B — Begin separate BaekSpace Studio S0–S2

Meaning:

- keep current BaekSpace core intact;
- create a separate `baekspace-studio` product/repo;
- target the workflow:
  `생각 → 주제 → 기획 → 초고 → 퇴고 → 발행`;
- first build only the initial skeleton/import/Today-selection path.

Pre-SVF preferred design principles:

- do not inject server-backed Studio concerns into the current BaekSpace repo;
- reuse renderer/editor/preview/reading assets;
- preserve Markdown/JSON/CSV exportability;
- no silent AI overwrite;
- new idea capture should be fast;
- every Topic should surface a Next Action;
- avoid showing the entire backlog at once.

### Option C — Continue expanding current core

Meaning:

- implement more of Organize / Publish / graph/navigation or other deferred capabilities before external validation or Studio split.

Pre-SVF concern:

- this is the easiest route technically because the repo is active and capable;
- it may be the weakest route strategically if it increases product breadth without proving the job-to-be-done.

---

## 9. Pre-SVF preferred option

### **Current preferred direction: Option B, with a strong unresolved challenge from Option A.**

Most recent concept work favored:

> **Preserve BaekSpace core + create a separate BaekSpace Studio.**

The proposed first Studio sequence was:

1. S0 skeleton;
2. S1 import existing Projects/Topics;
3. S2 deterministic Today selector;
4. then Editor;
5. GitHub checkpoint;
6. Publish;
7. ChatGPT handoff.

However, prior product analysis had also recommended:

> **hold new feature expansion and externally beta-test the current BaekSpace core.**

Therefore the real pre-SVF state is **not certainty**.

It is:

> “Studio separation appears directionally attractive, but it has not yet displaced the argument that current BaekSpace should be externally validated before another product is built.”

That tension is deliberately frozen here.

---

## 10. Pre-SVF assumptions

The following assumptions existed before SVF and are not yet all validated:

### A1
Users have a real problem with accumulating AI/LLM-generated Markdown outputs.

### A2
A subset of users values local-only / Zero-Upload handling enough to change tools.

### A3
Reading/re-reading and preserving context are under-served compared with generation.

### A4
BaekSpace's current technical depth can translate into repeat user value.

### A5
A writing/project workflow product such as BaekSpace Studio addresses a more valuable repeated job than adding more reader/library features.

### A6
Separating Studio from the core reduces architectural and product-identity confusion.

### A7
The existing engine/editor/reader assets provide enough leverage that Studio does not become a from-scratch build.

### A8
A deterministic Today/Next-Action workflow can reduce the user's overload from too many ideas/projects.

### A9
Users will accept a split product architecture if the mental model is clear.

### A10
The owner can maintain attention across another product/repo without worsening project fragmentation.

Assumptions A4–A10 are especially important because they concern product strategy, not merely technical feasibility.

---

## 11. Known Unknowns — pre-SVF

These were not resolved before SVF:

- Who is the clearest first external BaekSpace user?
- Which existing feature creates repeat use rather than admiration?
- Is Zero-Upload a buying/use trigger or merely a nice property?
- Does the current product solve a frequent enough job?
- Do users want a “home for AI documents” or a “workflow for turning ideas into finished work”?
- Should those be one product or two?
- Is Studio's Today/Next-Action loop strong enough to create habitual use?
- Does external beta need to happen before Studio S0–S2?
- What evidence would justify abandoning Studio?
- What evidence would justify stopping core expansion?
- What is the minimum external signal that should precede software investment beyond the current core?
- Would an ordinary note app + ChatGPT already be “good enough” for most potential users?

---

## 12. Baseline next action before SVF

If no SVF pilot existed, the most likely next move based on the latest strategic discussion would be:

> **start the separate BaekSpace Studio path at S0–S2, while preserving the current BaekSpace core.**

But this action was **not backed by external demand evidence**.

The strongest alternative action was:

> **run external beta/usage validation of current BaekSpace before investing further.**

No final evidence-based resolution between those two had been recorded.

---

## 13. Baseline success/failure criteria

Before SVF, there was no single frozen commercial success criterion for this Decision Episode.

Existing project-level success ideas included:

- loyal-user oriented, non-VC-scale ambition;
- prior historical target around ~1,000 loyal users / ~₩100M annual scale in the longer term;
- measurement before conditional feature expansion;
- hands-on G7 completion for implementation quality.

For this pilot, these SHALL NOT be retroactively treated as the decision criterion for A/B/C.

The absence of a clear decision criterion is itself part of the baseline.

---

## 14. Baseline evidence sources

Repository:

- `metavision9988/baekspace-void-md-`
- latest observed commit: `13a23f43ddd5925e11d252174dee3299c34c01e7`
- `CLAUDE.md`
- `docs/HANDOFF.md`
- `docs/STATUS.md`
- `PROJECT_BRIEF.md`
- `docs/feasibility/markdown-product.feasibility.md`
- `package.json`

Prior strategic work, pre-SVF:

- BaekSpace future-direction analysis;
- BaekSpace Studio Concept Architecture v0.1;
- prior recommendation to validate the current flagship/core before uncontrolled expansion.

---

## 15. Freeze statement

# **FROZEN**

As of 2026-09-18, before applying full SVF v3 analysis:

- **preferred option:** B — separate BaekSpace Studio S0–S2;
- **strong alternative:** A — external validation of current BaekSpace first;
- **least strategically preferred but technically available:** C — continue core expansion;
- **major unresolved issue:** insufficient external demand/behavior evidence;
- **commercial evidence level:** M0 internal intuition / internal project reasoning only.

Any later change to these conclusions must be recorded as a post-baseline update, not rewritten into this packet.
