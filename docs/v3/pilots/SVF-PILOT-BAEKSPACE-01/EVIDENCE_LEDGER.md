# SVF-PILOT-BAEKSPACE-01 — EVIDENCE_LEDGER

**Pilot ID:** SVF-PILOT-BAEKSPACE-01  
**As-of:** 2026-09-18  
**Round:** SVF Analysis Round 1

---

## 1. Evidence-source registry

| Ref | Source | Freshness / status | Use |
|---|---|---|---|
| R1 | BaekSpace `CLAUDE.md` | current operational contract, updated through v0.44.6 context | current state, hard limits, G7, stack |
| R2 | BaekSpace `docs/HANDOFF.md` | current resume point through 2026-09-15 | current deployment/test state, unresolved human checks |
| R3 | BaekSpace `PROJECT_BRIEF.md` | foundational strategy / North Star | product identity, IN/OUT, historical success criteria |
| R4 | BaekSpace `docs/feasibility/markdown-product.feasibility.md` | active feasibility doctrine with historical extensions | market ceiling assumptions, measurement gates, scope |
| R5 | BaekSpace `package.json` | v0.44.6 | implementation/version fact |
| R6 | BaekSpace latest observed commit history | latest observed commit `13a23f43...` | deployment/fix trajectory |
| R7 | Pilot `BASELINE_PACKET.md` | frozen 2026-09-18 | pre-SVF preference and alternatives |
| R8 | Pilot `COMMERCIAL_SIGNAL_REVIEW.md` | baseline shell | market evidence level M0 |
| R9 | Stage 2.4 Market Reality Gate | current SVF market research | SVF commercialization discipline, not BaekSpace demand proof |

### Source caution

The BaekSpace `README.md` and portions of `docs/STATUS.md` contain older version text. For current operational facts, R1/R2/R5/R6 take precedence.

---

## 2. Claim ledger

| ID | Claim | Type | Evidence | Confidence | Decision relevance |
|---|---|---|---|---|---|
| E01 | BaekSpace is currently v0.44.6. | OBS | R1, R5, R6 | High | establishes mature current State |
| E02 | Production deployment is live at the cited snapshot. | OBS | R1, R2, R6 | High | not a concept-only product |
| E03 | Core capabilities extend beyond viewing into library/edit/transfer/media. | OBS | R1, R3, R5 | High | invalidates “simple viewer” framing |
| E04 | Zero Upload is a binding product/architecture rule by default. | OBS | R1, R3 | High | constrains future architecture |
| E05 | Non-destructive behavior is a binding product rule. | OBS | R1, R3 | High | constrains organize/AI behavior |
| E06 | Some expansion is already gated on measurement/feasibility. | OBS | R1, R4 | High | supports learning-before-building discipline |
| E07 | Some completion criteria still require human/device G7 checks. | OBS | R1, R2 | High | product closure is incomplete |
| E08 | The implementation trajectory has broadened Viewer→Reader→Library→Editor→Transfer→Media. | DER | R1, R2, R6 | High | shows direction of historical investment |
| E09 | The product's market evidence for the next strategic direction remains M0 inside this pilot. | OBS | R8 | High | major decision gap |
| E10 | Technical maturity currently exceeds external commercial evidence maturity. | DER | E01–E09 | High | central navigation tension |
| E11 | More feature work would resolve market-demand uncertainty. | HYP | none sufficient | Low | should not be assumed |
| E12 | Current BaekSpace already creates repeat external user value. | HYP | no external evidence in pilot | Low | must be tested |
| E13 | Studio workflow solves a repeated external user pain. | HYP | R7 only records internal concept preference | Low | B depends on this |
| E14 | Separate Studio is architecturally cleaner than injecting server/workflow concerns into the core. | INF | R1, R3, R7 | Medium | supports B structure, not B market need |
| E15 | Building Studio S0–S2 now is the best next use of effort. | HYP | R7 baseline preference only | Low | decision under test |
| E16 | External validation of current core has high information value. | INF | E09, E10, R4 | Medium-High | strengthens A |
| E17 | Continuing core expansion is strategically weaker than learning about demand. | INF | E06, E09, E10 | Medium | weakens C, but depends on owner's goal |
| E18 | A manual/low-cost Studio workflow can test the job before software is built. | HYP / ACT premise | generic product-experiment logic, not yet executed | Medium | supports D candidate |
| E19 | The owner's personal workflow may not generalize to a market segment. | HYP | no external sample | Medium | major Studio risk |
| E20 | Zero Upload is a strong acquisition/buying trigger. | HYP | no pilot evidence | Low | do not market as proven |
| E21 | ASCII→structured rendering is valued enough to drive adoption. | HYP | R3/R4 state internal differentiation, but no external behavior in pilot | Low-Medium | historical asset ≠ market proof |
| E22 | The current core is sufficiently mature to expose to external users without strategic feature expansion. | INF | R1, R2, E01–E07 | Medium-High | supports A feasibility |
| E23 | A/B/C is an exhaustive action set. | HYP, falsified structurally | Round-1 analysis introduces D | Low | shows baseline framing omission |
| E24 | D can produce more decision information per unit effort than full B. | HYP | not yet tested | Medium | next experiment candidate |
| E25 | A simple checklist might produce the same useful decision as full SVF. | HYP | Fit Gate falsification rule | Unknown | tests SVF itself |

---

## 3. Evidence gaps

### G1 — External user behavior
Missing:

- first-use success;
- repeat use;
- revisit frequency;
- actual jobs performed;
- abandonment points.

### G2 — Segment definition
Missing:

- creator vs developer vs researcher vs knowledge worker;
- local/privacy-sensitive segment size;
- who experiences the pain intensely enough to switch.

### G3 — Studio workflow evidence
Missing:

- whether users maintain project/topic structures;
- whether “Today” reduces overload;
- whether Next Action causes completion behavior;
- whether users return without prompting.

### G4 — Substitute evidence
Missing:

- what real users use today;
- what they dislike;
- which shortcomings are severe enough to switch.

### G5 — Commercial behavior
Missing:

- external time/data commitment;
- referral;
- paid service;
- paid software;
- repeat purchase.

---

## 4. Contradictions / tensions

### X1 — “Mature enough to expand” vs “not validated enough to expand”

Both can be true.

Technical maturity supports feasibility; lack of external evidence weakens strategic entitlement to more build.

### X2 — “Keep BaekSpace focused” vs “BaekSpace already broadened substantially”

The North Star remains narrow in philosophy, while implementation has accumulated a broad local workspace surface.

This tension should be tested with users rather than resolved by naming alone.

### X3 — “Studio should be separate” vs “another product increases fragmentation”

Architectural separation reduces product coupling but increases operating attention/cognitive load.

Both effects matter.

---

## 5. Decision-critical evidence priority

Round 1 proposes the following **information priority**, not a universal score.

### Priority A
Evidence that distinguishes:

> “users return for the current Core job”  
> vs  
> “users want the Studio workflow job.”

### Priority B
Evidence that distinguishes:

> “Studio structure helps”  
> vs  
> “Studio structure becomes another maintenance burden.”

### Priority C
Evidence that shows whether:

> Zero Upload / non-destructive behavior changes adoption behavior.

### Priority D
Evidence about the real current substitute and switching cost.

---

## 6. Ledger implication

The current evidence is strong enough to describe the **product State** and **constraints**.

It is not strong enough to justify a market-facing claim that either:

- current Core demand is proven; or
- Studio demand is proven.

Therefore the next useful work should primarily generate evidence rather than expand explanatory theory.
