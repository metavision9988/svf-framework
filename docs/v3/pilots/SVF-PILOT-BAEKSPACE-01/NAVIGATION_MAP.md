# SVF-PILOT-BAEKSPACE-01 — NAVIGATION_MAP

**Pilot ID:** SVF-PILOT-BAEKSPACE-01  
**As-of:** 2026-09-18  
**Round:** SVF Analysis Round 1  
**Decision Episode:** next strategic investment — current-core validation vs Studio S0–S2 vs further core expansion  
**Baseline reference:** `BASELINE_PACKET.md`

---

## 1. Reading rule

This map separates:

- **OBS** — observed / repository-grounded
- **DER** — derived directly from observations
- **INF** — interpretation
- **HYP** — hypothesis requiring test
- **UNK** — unknown
- **ACT** — candidate action
- **GOAL** — normative/decision goal

No arrow in this document proves causality.

---

## 2. Decision question

> **What is the smallest next strategic investment that produces useful evidence about BaekSpace's real product value without unnecessarily expanding the product surface?**

This is a reframing of the frozen A/B/C episode, not a replacement of its history.

The baseline remains:

- **A** validate current BaekSpace core externally;
- **B** begin separate BaekSpace Studio S0–S2;
- **C** continue expanding existing BaekSpace core.

Round 1 introduces a fourth **candidate action**, not a conclusion:

- **D** validate the current core externally **and** test the Studio job manually/with a low-cost prototype before software implementation.

---

## 3. Current State

### S1 — Product implementation state — **OBS**

BaekSpace is already a mature browser-local Markdown/AI-document workspace, not merely a viewer.

Repository-grounded capabilities include:

- rendering/reading;
- local durable library;
- source editing;
- search/categories;
- backup/restore;
- transfer/P2P;
- reading modes;
- images/media;
- strong non-destructive and Zero-Upload rules.

Current operational version observed in the repository:

- `v0.44.6`;
- production live at the cited repository snapshot;
- 1112 tests / 67 files reported in the current operational documents.

### S2 — Product-definition state — **DER**

The implementation boundary has expanded faster than the original “viewer” label.

A more accurate current product family is:

> private, non-destructive local workspace for AI/Markdown documents.

This is derived from implemented capability, not an externally validated positioning claim.

### S3 — Market evidence state — **OBS**

For this Decision Episode, commercial evidence remains:

> **M0 — internal reasoning only.**

No external user commitment, paid signal, repeated external use, or validated willingness to pay has been established by the pilot.

### S4 — Completion state — **OBS**

Some implementation validation still requires human/device G7 checks.

Therefore:

> technically deployed ≠ fully closed as a product validation episode.

---

## 4. Observed Trajectory

### T1 — Capability trajectory — **OBS / DER**

Observed development sequence:

`Viewer → Reader → Library → Editor → Transfer → Media-capable local workspace`

The trajectory is toward a broader local content workspace.

### T2 — Quality/governance trajectory — **OBS**

The repository has accumulated increasingly strict:

- feasibility gates;
- hard limits;
- non-destructive guarantees;
- adversarial review;
- human dogfooding requirements;
- performance and accessibility constraints.

### T3 — Market-evidence trajectory — **DER**

The product's implementation maturity has increased materially, while market evidence for the next strategic direction remains at M0.

This creates the central divergence:

```text
Technical / product capability  ───────────────► high and growing
External demand evidence        ───────────────► still weak / M0
```

This divergence is not proof that the product lacks demand.

It means the next marginal unit of coding may produce less decision information than the next marginal unit of external validation.

That last sentence is **INF**, not OBS.

---

## 5. Goal

### G1 — Decision goal — **GOAL**

Choose the next action that:

1. preserves the proven architectural/product invariants;
2. reduces the most decision-relevant uncertainty;
3. does not create a second large build before its job-to-be-done is tested;
4. produces evidence that can justify continue / stop / pivot;
5. avoids feature accumulation as a substitute for product validation.

This goal is inferred from the owner's recent market-value question and the repository's existing measurement discipline.

It should be explicitly revalidated if the owner wants a different objective, such as maximizing creative experimentation regardless of market evidence.

---

## 6. Candidate Actions

### A — External validation of current core — **ACT**

Possible bounded form:

- recruit a small number of target users;
- observe real import/read/store/edit/revisit behavior;
- identify the feature/job that creates repeat use;
- collect friction/switching evidence;
- do not expand major product surface during the observation window.

### B — Begin Studio S0–S2 — **ACT**

Existing baseline form:

- separate `baekspace-studio`;
- S0 skeleton;
- S1 Projects/Topics import;
- S2 deterministic Today selector.

Main promise:

> test a different repeated workflow: idea/project overload → next action → writing progress.

Main risk:

> implementation may convert an unvalidated workflow hypothesis into another codebase.

### C — Continue current core expansion — **ACT**

Examples already present in backlog/deferred space:

- Organize / Publish;
- graph/navigation;
- other conditional features.

Main risk:

> technical opportunity may remain easier to observe than customer value.

### D — Dual validation without a second full build — **ACT / HYP**

Candidate introduced by SVF Round 1:

1. expose current BaekSpace core to external users;
2. prototype the Studio workflow manually or with minimal disposable UI;
3. compare which job produces stronger repeated behavior / commitment;
4. only then authorize Studio S0–S2 software investment.

This is not “do A and B fully in parallel.”

It is:

> **build less, learn about both.**

Whether this produces better evidence per unit effort is a hypothesis to test.

---

## 7. Field

### F1 — AI-document accumulation — **HYP / external evidence pending**

The project assumes users increasingly accumulate AI-generated Markdown/text outputs.

This is plausible and central to the original North Star, but pilot-level external user evidence is not yet attached.

### F2 — Mature note/editor substitutes — **OBS at category level / details not audited here**

Users already have established editors/note tools and generic AI interfaces.

Implication:

> BaekSpace cannot rely on “it edits Markdown” as sufficient differentiation.

### F3 — Local/privacy value — **HYP**

Zero-Upload may be important to some users.

Unknown:

> Is it a primary adoption trigger, a trust enhancer after adoption, or mostly irrelevant to the majority?

### F4 — AI generation gets easier — **INF**

As generation becomes cheaper/easier, the bottleneck may shift toward selection, rereading, organization, completion, and provenance.

This is a strategic hypothesis and should be tested with users rather than treated as a market law.

---

## 8. Constraints

### C1 — Zero Upload — **OBS / binding by policy**

Server upload is prohibited by default.

### C2 — Non-destructive behavior — **OBS / binding by policy**

Original content cannot be silently rewritten/deleted.

### C3 — Existing measurement gates — **OBS / binding for some expansion**

Several future features are explicitly gated on measurement/feasibility.

### C4 — Human validation — **OBS**

Some G7 product checks cannot be delegated to AI.

### C5 — Owner attention / project fragmentation — **INF / likely material**

A second repo/product consumes attention.

This matters because the owner is managing multiple active projects.

Its true binding strength should not be assumed without observing actual operating capacity.

### C6 — Product identity clarity — **INF**

Adding Studio workflow directly to the current core may violate the existing North Star and blur the product promise.

This is one reason the separate-repo path was previously preferred.

---

## 9. Unknowns

### U1 — First external user — **UNK**
Who is the clearest first user?

### U2 — Repeat-use job — **UNK**
Which current job produces return behavior?

### U3 — Core vs Studio job strength — **UNK**
Is the stronger repeated need:
- “store/read/revisit AI documents safely,” or
- “move ideas/projects toward finished output”?

### U4 — Zero-Upload salience — **UNK**
Does privacy/locality change adoption behavior?

### U5 — Switching cost — **UNK**
What existing workflow must the user abandon or complement?

### U6 — Studio generalizability — **UNK**
Is Studio mainly valuable because it mirrors the owner's unusually rich project/writing workflow?

### U7 — Product split comprehension — **UNK**
Will users understand Core vs Studio as two products?

### U8 — Minimum viable evidence — **UNK**
What external behavior is enough to authorize additional build?

### U9 — Willingness to maintain structure — **UNK**
Will users maintain Projects/Topics/Next Actions, or does that structure itself become work?

### U10 — Commercial buyer — **UNK**
Who would pay, if anyone?

---

## 10. Candidate relationships

These are hypotheses, not causal facts.

```text
Mature core + weak external evidence
            |
            | HYP: next unit of learning may be more valuable than next unit of feature build
            v
      External validation (A)
            |
            +-----------------------------+
            |                             |
            v                             v
Core repeat-use evidence            Core weak signal
            |                             |
            |                             |
   continue/refine core          test Studio job more strongly
                                          |
                                          v
                                 Studio software decision
```

Alternative:

```text
Owner's workflow pain
      |
      | HYP: generalizable to creators/builders
      v
Manual Studio prototype
      |
      +--> repeated use / commitment? --yes--> authorize S0–S2
      |
      +--> weak / burdensome? --------no-----> narrow/stop Studio
```

---

## 11. Round-1 navigation reading

### What moved relative to baseline?

The baseline's **B preference remains historically intact**, but Round 1 exposes that B depends on several untested assumptions.

The strongest new structural observation is:

> The next decision may be less about choosing the “right product” and more about choosing the **highest-information next action**.

### Current provisional implication

- **C weakens** because it produces more implementation without directly resolving the largest Unknowns.
- **B remains plausible** but should not yet inherit a software-build entitlement from conceptual attractiveness.
- **A strengthens** because current-core external evidence is a major missing variable.
- **D emerges** as a candidate sequence that tests both core value and Studio job value without paying the full cost of two builds.

No final action is selected in this document.

---

## 12. What this map may not claim

This Navigation Map does **not** establish that:

- external validation will succeed;
- Studio is unnecessary;
- core demand exists;
- D is optimal;
- Zero-Upload is a market differentiator;
- one product split is superior;
- market size is sufficient.

Those require evidence outside this map.
