# The SVF Framework

[![Status](https://img.shields.io/badge/Status-v2.0_RC_Final-gold)]()
[![License](https://img.shields.io/badge/License-CC_BY_4.0-blue)](LICENSE)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.18919204.svg)](https://doi.org/10.5281/zenodo.18919204)

**A Navigation System for Diagnosing, Predicting, and Engineering System Trajectories**

*by Mephisto Void (TaekSoo Shin) | VOID PRESS Research Division*

---

> "Most analytical frameworks tell you where you are.  
> SVF tells you where you're going — and calculates what to change  
> to go somewhere different."

---

## What is SVF?

The Scalar-Vector-Field (SVF) Framework models strategic progress as a physics problem.

Every system — organization, career, nation — exists in a **goal space** defined by three interacting forces:

| Component | Symbol | What it measures |
|:--|:--:|:--|
| **Scalar** | S | Accumulated potential — what you *have* |
| **Vector** | V | Directional change — how you're *moving* |
| **Field** | F | Environmental forces — what surrounds you |
| **Resistance** | R | Structural friction — what degrades effort |
| **Slingshot** | η | Field leverage — is the environment helping or destroying? |

**The master equation (v2.0):**

```
P(t) = [(ωs·S̃ + ωv·Ṽ + ωf·F̃ + Σα̃f) × Παm × cos(θ)] / (1+R) × η(θ_VF)

where S̃, Ṽ, F̃, α̃f ∈ [0, 1]
```

---

## Five Core Theorems (v2.0)

| Theorem | Statement |
|:--|:--|
| **Positioning Layer** | Position (S) and Positioning (V) are orthogonal. High S with low V_eff = terminal. |
| **Gradient Navigation** | V_optimal = ∇S. Point toward the most depleted Anchor scalar, not the strongest. |
| **Critical Velocity** | Below V_critical, sustained effort produces zero outcome. Threshold, not gradient. |
| **Slingshot Coefficient** | η > 1 when θ_VF < 90°. Same field force, opposite effect depending on alignment. |
| **False Safety Window** | Field delay τ creates a diagnostic blindspot. Crisis precedes its visible signal by τ×Δt. |

---

## Case Studies

**Nokia 2007–2013** — Direction failure
- Position (S̃): 95/100 in 2007. Dominant. Irrelevant.
- V_eff = 90 × cos(75°) = **23.3%** — 77 cents of every R&D dollar converted to entropy
- $3B R&D budget stayed **below V_critical** for 3 consecutive years
- Collapse was mechanistically determined by 2009. The 2012 crisis was Cycle 6 of a 7-cycle vicious loop.

**South Korea 1997** — Slingshot Reversal
- Pre-crisis: η = 1.6, θ_VF = 15° — field amplified every unit of effort ×1.6
- Trigger: capital account liberalization reversal
- Post-trigger: η = 0.15, θ_VF = 165° — **same field, opposite direction**
- GDP: +8.2% average (1990–1996) → **−5.5% (1998)**
- False Safety Window: 18 months of masked deterioration before collapse

---

## Repository Structure

```
svf-framework/
├── paper/
│   ├── SVF_Academic_Paper_v2.0.md     ← Full paper with embedded figures
│   ├── SVF_Academic_Paper_v2.0.pdf    ← PDF version
│   └── figures/
│       ├── svf_fig1_position_vs_positioning.svg
│       ├── svf_fig2_gradient_navigation.svg
│       ├── svf_fig3_slingshot_reversal.svg
│       └── svf_fig4_false_safety_window.svg
│
├── planning/                           ← Book series planning documents
│   ├── SVF_01_Books_Series_Overview.md
│   ├── SVF_02_Book1_Golden_Thread.md  ← Dead Reckoning
│   ├── SVF_03_Book1_TOC_Treatment.md
│   ├── SVF_04_Book2_Golden_Thread.md  ← The SVF Framework
│   ├── SVF_05_Book2_TOC_Treatment.md
│   ├── SVF_06_Tone_Style_Guide.md
│   ├── SVF_07_COS.md
│   └── SVF_08_Reference_Sources.md
│
├── tools/                              ← Interactive React components
│   ├── SVF_Visual_Artifacts.jsx        ← 4 diagnostic visualizations
│   ├── SVF_DualTrack_Tool.jsx          ← Dual-track diagnostic tool
│   └── SVF_Universal_Framework_v2.jsx ← Framework architecture viewer
│
└── README.md
```

---

## Book Series (in progress)

| Title | Format | Status |
|:--|:--|:--|
| **Dead Reckoning** | Trade book ~50,000 words | Planning complete |
| **The SVF Framework** | Professional book ~92,000 words | Planning complete |

---

## Academic Paper

- **Title:** The SVF Framework: A Navigation System for Diagnosing, Predicting, and Engineering System Trajectories
- **Version:** v2.0 Release Candidate Final
- **Date:** March 2026
- **DOI:** *(pending Zenodo registration)*
- **Keywords:** system dynamics, field theory, gradient navigation, critical velocity, slingshot effect, phase dynamics, organizational failure

Version history: v1.0 (Jan 2026) → v1.1 (Feb 2026) → v2.0 (Mar 2026)

---

## Author

**TaekSoo Shin** (pen name: Mephisto Void)  
VOID PRESS Research Division  
metavision9988@gmail.com

---

## License

[Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE)

You are free to share and adapt this work for any purpose, provided appropriate credit is given.
