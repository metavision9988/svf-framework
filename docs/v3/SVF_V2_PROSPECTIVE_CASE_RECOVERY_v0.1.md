# SVF v2 Prospective Case Recovery v0.1

**Stage:** 1 — validation audit  
**Status:** Recovered claim record; outcome unavailable in repository  
**Date:** 2026-09-17

## 1. Purpose

SVF v2 states that an Individual Learning Trajectory case was prospectively registered with a verification date of July 2026. Because that date has passed, v3 must not leave the case in a perpetual 'future validation' state.

This document records what can and cannot currently be verified from the repository.

## 2. Recovered prospective claims

The v2 paper describes a 30-year-old marketing professional approximately six months into a Python/data-analytics transition.

The paper records two scenario projections:

### Scenario A — no intervention

- Motivation declines toward the L1 threshold.
- A vicious loop follows through reduced practice and lower scores.
- Claimed projection: **70% abandonment probability within 3 months**.

### Scenario B — F2 intervention

- Intervention: coding community + mentor.
- Claimed mechanism: relational Field improvement increases the Field product, lowers `V_critical`, and initiates an Escape loop.
- Claimed projection: **60% transition success probability**.

The paper also recommends realignment toward SQL/business analytics based on the stated 2026 hiring Field.

## 3. Repository evidence found

As of 2026-09-17, the `svf-framework` repository contains:

- the v2 academic paper containing the prospective claims;
- README and changelog;
- visualization/tool source files.

No repository artifact currently records:

- the subject's July 2026 observed outcome;
- whether Scenario A or B was actually followed;
- intervention start/end dates;
- operational definition of 'transition success';
- operational definition of 'abandonment';
- follow-up measurements of Motivation, F2, practice, or scores;
- a frozen January baseline file distinct from the later paper text;
- probability-estimation method supporting 70% or 60%;
- independent adjudication of outcome.

The repository's latest `main` commit predates the July 2026 verification date, so no post-verification result is available there.

## 4. Validation disposition

**Result: UNVERIFIED / OUTCOME DATA UNAVAILABLE IN REPOSITORY.**

The case SHALL NOT be counted as successful prospective validation of SVF v2.

It also SHALL NOT be counted as a failed prediction, because the observed outcome and actual intervention exposure are unavailable.

The correct scientific status is **missing follow-up**.

## 5. Why the original probability claims cannot be validated cleanly

Even if the final personal outcome is later recovered, the probability claims `70%` and `60%` have additional problems:

1. no calibration population is documented;
2. no statistical or Bayesian derivation is documented;
3. the scenarios may not be mutually exclusive or randomly assigned;
4. intervention adherence is unknown;
5. success/abandonment outcome definitions are not frozen in the repository;
6. the model parameters are not independently estimated.

Therefore the strongest recoverable test may be directional/structural rather than probabilistic unless original contemporaneous records establish more detail.

## 6. Anti-hindsight rule

If follow-up information is later found, v3 SHALL preserve the original March-2026 text unchanged as the frozen prediction record.

No post-hoc revision of:

- thresholds;
- scenario definitions;
- success criteria;
- causal mechanism;
- predicted probability;
- time horizon

may be used to make the prediction fit the observed outcome.

Any reinterpretation must be stored separately as a post-hoc analysis.

## 7. Candidate recovery path

If original records exist outside this repository, a valid recovery packet should include:

- timestamped baseline record created before the outcome window;
- subject consent/privacy-safe identifier if a real person is involved;
- actual intervention exposure;
- timestamped follow-up observations;
- predefined or reconstructible outcome rule;
- deviations from the planned scenario;
- missing-data declaration.

Until then, the case remains unavailable for validation scoring.

## 8. v3 replacement prospective protocol

Future SVF prospective cases SHALL preregister at minimum:

1. analysis timestamp;
2. system boundary and decision-maker;
3. observed State variables with provenance;
4. declared hypotheses;
5. explicit candidate interventions;
6. scenario assumptions;
7. primary outcome(s) and measurement rules;
8. time horizon;
9. signposts/triggers;
10. confidence statements or probability derivation method;
11. comparison baseline;
12. immutable/frozen prediction artifact;
13. follow-up protocol;
14. failure and missing-data rules.

## 9. Effect on P0 C-05

C-05 — retrospective fit vs prospective validity — is **PARTIALLY RESOLVED**:

- the expired v2 case has been dispositioned honestly as `UNVERIFIED / MISSING FOLLOW-UP`;
- it no longer counts as pending evidence for v2;
- v3 still requires new prospective comparative validation.

Therefore C-05 remains OPEN at the v3 program level, but the v2 legacy case no longer creates an unresolved bookkeeping ambiguity.
