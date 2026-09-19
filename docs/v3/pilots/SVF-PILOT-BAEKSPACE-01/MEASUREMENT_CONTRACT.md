# SVF-PILOT-BAEKSPACE-01 — MEASUREMENT_CONTRACT

**Pilot ID:** SVF-PILOT-BAEKSPACE-01  
**As-of:** 2026-09-19  
**Status:** FROZEN BEFORE EXTERNAL TESTING  
**Purpose:** define what counts as evidence before observing results.

---

## 1. Measurement principle

This pilot is exploratory product discovery, not a statistical market study.

Numbers below are **pilot decision thresholds**, not population estimates, benchmarks, or claims of significance.

The contract exists to prevent:

- “liked it” being counted as repeat value;
- compliments being counted as willingness to pay;
- feature requests being counted as product demand;
- one enthusiastic user dominating the conclusion;
- success criteria being rewritten after observation.

---

## 2. Shared evidence rules

### Count as stronger evidence

- participant uses their **own real material / real project**;
- participant performs a task without facilitator takeover;
- participant voluntarily returns on another day;
- participant changes a real workflow;
- participant gives time/data to continue the test;
- participant names a current substitute and concrete failure;
- observed behavior agrees with stated preference.

### Count as weaker evidence

- “looks useful”;
- “I would probably use it”;
- feature brainstorming;
- demo-only behavior;
- owner/friend encouragement;
- satisfaction without repeated use.

### Do not count as market evidence

- repository maturity;
- test count;
- visual polish;
- internal enthusiasm;
- technical uniqueness;
- owner reuse alone.

---

## 3. Discovery sample design

### Round size

Target **6–8 external participants total** for the first exploratory round.

This is deliberately small.

The goal is to reveal:

- repeated jobs;
- blockers;
- behavior patterns;
- whether the hypotheses deserve another round.

It is not to estimate a market percentage.

If the first 6–8 show materially different user types with no pattern, do not average them. **Segment or extend discovery.**

### Independence rule

Prefer participants who are not:

- project contributors;
- close collaborators already familiar with the concept;
- people recruited primarily to be supportive.

Known contacts may be included but must be labeled.

---

## 4. Pre-solution screening

Before showing BaekSpace or Studio, ask about current behavior.

### Core-fit signals

A participant is Core-fit when recent behavior shows at least one recurring job involving:

- saving AI/LLM output outside the chat;
- reopening long AI-generated text;
- reading/editing Markdown or text locally;
- moving AI outputs between tools;
- concern about uploading sensitive/private material elsewhere.

### Studio-fit signals

A participant is Studio-fit when recent behavior shows recurring friction around:

- multiple unfinished writing/research/product ideas;
- difficulty deciding what to work on next;
- projects/topics spread across notes, chats, tasks, files;
- repeated planning without completion;
- loss of context between idea and finished artifact.

A participant may fit both.

Do not force a non-fit participant into either experiment.

---

## 5. Core measurement contract

### Core job under test

> **“I have AI/Markdown material I want to keep, read again, edit, and retain under my control.”**

### Core activation

Activation occurs when a participant, using their own material:

1. imports/opens a real document;
2. completes at least one meaningful read/edit/save action;
3. can later locate the document again.

### Core meaningful-use event

At least one self-chosen task such as:

- reread a long AI output;
- edit/correct it;
- save it into the library;
- compare/render structured Markdown;
- move/backup/share it locally;
- return to a previously stored document.

### Core repeat signal

**Strongest early signal:** participant independently returns on another day within the observation window and performs the same or adjacent job.

Record:

- first session date;
- later session date;
- task;
- whether return was prompted;
- substitute that would otherwise have been used.

### Core blocker

A blocker is not “I would like feature X.”

It is:

> participant cannot complete the repeated target job without a missing capability or unacceptable workaround.

Repeated independent blockers may justify Option C.

---

## 6. Studio-proxy measurement contract

### Studio job under test

> **“I have too many active ideas/projects; I need a small surface that helps me decide the next meaningful action and return to unfinished work.”**

### Studio-proxy activation

Participant:

1. identifies at least one real active project/topic;
2. writes a concrete Next Action;
3. uses the Today surface to select what to act on.

### Behavioral-use event

Participant performs the selected real-world Next Action.

Examples:

- write 300 words;
- review a draft;
- run a test;
- send a request;
- decide an outline;
- close or defer an item.

The action need not happen inside software.

### Studio repeat signal

Participant returns later to:

- mark/update the action;
- choose another Next Action;
- reopen the same project with preserved context.

### Maintenance burden

Record actual friction:

- time to maintain structure;
- confusion over Project vs Topic;
- need for facilitator help;
- items left stale;
- urge to bypass the structure.

A workflow that is “useful when facilitated” but abandoned alone is not a strong Studio signal.

---

## 7. Observation window

Initial window:

> **7 days per participant after first meaningful use.**

Why:

- long enough to observe at least one natural return;
- short enough for an exploratory pilot;
- not presented as a retention benchmark.

If the job naturally occurs less frequently, extend the observation and record why rather than forcing a 7-day failure.

---

## 8. Pilot-level signal bands

These are precommitted **pilot rules**, not market truth.

### Core — promising signal

For at least **5 Core-fit participants**:

- at least **3** complete a real target job;
- at least **2** voluntarily return on another day;
- at least **2** can name a concrete current substitute/workaround that BaekSpace improved or replaced.

If fewer than 5 Core-fit people are recruited, do not convert fractions into a strong conclusion.

### Studio proxy — promising signal

For at least **5 Studio-fit participants**:

- at least **3** independently described the underlying overload/completion problem **before** seeing the solution;
- at least **3** perform a real Next Action through the proxy;
- at least **2** return later and update/use the structure without facilitator prompting.

### Expansion / Option C signal

A Core feature deserves implementation priority when:

- at least **2 independent Core-fit participants**
- hit the **same missing capability**
- and that capability blocks completion or repeat use of the target job.

Two requests for aesthetic preference do not qualify.

---

## 9. Commercial evidence mapping

### M0
Internal reasoning only.

### M1
Internal repeated use / maintained artifacts.

### M2 candidate
External participants independently confirm the same pain and current workaround.

### M3 candidate
External participants commit behavior:
- real data/material;
- repeated sessions;
- scheduled follow-up;
- invite teammate/colleague.

This pilot does not infer M4 from hypothetical price questions.

---

## 10. Failure / ambiguity rules

### Do not force a winner when:

- Core and Studio attract clearly different segments;
- observation windows are not comparable;
- participants need substantial facilitation;
- results depend on one outlier;
- sample is mostly friends/collaborators;
- users like the concept but do not return.

### Record as “AMBIGUOUS” when:

evidence changes the question but not the A/B/C/D decision.

---

## 11. Required return record per participant

```text
participant_id
relationship_to_owner
fit: core | studio | both | neither
problem_before_solution
current_substitute
real_material_or_project
first_use_behavior
facilitator_help
blockers
return_date
return_prompted: yes/no
repeat_behavior
next_action_completed
maintenance_burden
switching_signal
new_unknowns
evidence_notes
```

No names or unnecessary personal data are required in the SVF repository.

---

## 12. Freeze statement

This measurement contract is frozen **before external testing**.

Changes are allowed only as versioned amendments with:

- reason;
- date;
- impact on comparability.

Results must not be used to silently redefine success.
