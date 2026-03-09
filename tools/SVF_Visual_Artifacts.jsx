import { useState, useEffect, useRef } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, ReferenceArea, Legend
} from "recharts";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const C = {
  bg:      "#0a0a0f",
  surface: "#10101a",
  border:  "#1e1e2e",
  text:    "#e2e0f0",
  muted:   "#6b6880",
  accent:  "#7c6af7",
  gold:    "#e8c96a",
  red:     "#f05c5c",
  green:   "#5cf0a0",
  cyan:    "#5ce8f0",
};

const font = "'IBM Plex Mono', 'Courier New', monospace";

// ─── TAB CONFIG ──────────────────────────────────────────────────────────────
const TABS = [
  { id: "fsw",  label: "01 — False Safety Window",      short: "FSW"  },
  { id: "slr",  label: "02 — Slingshot Reversal",        short: "SLR"  },
  { id: "gnm",  label: "03 — Gradient Navigation",       short: "∇S"   },
  { id: "nav",  label: "04 — Navigation Canvas",         short: "G-L"  },
];

// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────
const SectionLabel = ({ children, color = C.accent }) => (
  <div style={{ fontFamily: font, fontSize: 10, letterSpacing: "0.2em",
    color, textTransform: "uppercase", marginBottom: 8 }}>
    {children}
  </div>
);

const Caption = ({ children }) => (
  <div style={{ fontFamily: font, fontSize: 11, color: C.muted,
    lineHeight: 1.7, marginTop: 16, padding: "12px 16px",
    borderLeft: `2px solid ${C.border}`, maxWidth: 700 }}>
    {children}
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════════
// ARTIFACT 1 — FALSE SAFETY WINDOW
// ═══════════════════════════════════════════════════════════════════════════════
const generateFSWData = () => {
  return [
    { t: 0,  S: 0.95, F: 0.90, P: 0.86 },
    { t: 1,  S: 0.55, F: 0.88, P: 0.82 }, // S 붕괴 시작 (L1 크로스)
    { t: 2,  S: 0.28, F: 0.85, P: 0.76 }, // FALSE SAFETY WINDOW 시작
    { t: 3,  S: 0.12, F: 0.80, P: 0.64 },
    { t: 4,  S: 0.05, F: 0.48, P: 0.32 }, // F가 S 붕괴를 반영 (τ 종료)
    { t: 5,  S: 0.02, F: 0.18, P: 0.08 },
    { t: 6,  S: 0.00, F: 0.04, P: 0.00 }, // COLLAPSE
  ];
};

const FalseSafetyWindow = () => {
  const [animated, setAnimated] = useState(false);
  const [showData, setShowData] = useState([]);
  const data = generateFSWData();

  useEffect(() => {
    if (animated) {
      setShowData([]);
      let i = 0;
      const id = setInterval(() => {
        i++;
        setShowData(data.slice(0, i));
        if (i >= data.length) clearInterval(id);
      }, 350);
      return () => clearInterval(id);
    } else {
      setShowData(data);
    }
  }, [animated]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null;
    return (
      <div style={{ background: C.surface, border: `1px solid ${C.border}`,
        padding: "10px 14px", fontFamily: font, fontSize: 11 }}>
        <div style={{ color: C.muted, marginBottom: 6 }}>t = {label}</div>
        {payload.map(p => (
          <div key={p.key} style={{ color: p.color, marginBottom: 2 }}>
            {p.name}: {(p.value * 100).toFixed(0)}%
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <SectionLabel>Figure 1 — Phase Dynamics & The False Safety Window</SectionLabel>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <button onClick={() => setAnimated(a => !a)} style={{
          fontFamily: font, fontSize: 11, padding: "6px 16px",
          background: "transparent", border: `1px solid ${C.accent}`,
          color: C.accent, cursor: "pointer", letterSpacing: "0.1em"
        }}>
          {animated ? "▶  REPLAY" : "▶  ANIMATE"}
        </button>
        <span style={{ fontFamily: font, fontSize: 10, color: C.muted }}>
          τ ≈ 3 cycles (F₃ Organizational Layer)
        </span>
      </div>

      {/* Legend manual */}
      <div style={{ display: "flex", gap: 24, marginBottom: 12, fontFamily: font, fontSize: 11 }}>
        <span style={{ color: C.gold }}>━ S(t)  Anchor Scalar</span>
        <span style={{ color: C.cyan }}>━ F(t)  Field (delayed)</span>
        <span style={{ color: C.green }}>━ P(t)  Outcome</span>
        <span style={{ color: C.red,  borderBottom: `1px dashed ${C.red}` }}>
          - - L1 Survival Limit (0.20)
        </span>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={showData} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="2 4" stroke={C.border} />
          <XAxis dataKey="t" stroke={C.muted} fontFamily={font} fontSize={11}
            label={{ value: "Time Cycles", position: "insideBottomRight",
              offset: -10, fill: C.muted, fontFamily: font, fontSize: 10 }} />
          <YAxis stroke={C.muted} fontFamily={font} fontSize={11}
            tickFormatter={v => `${(v*100).toFixed(0)}%`} domain={[0, 1]} />
          <Tooltip content={<CustomTooltip />} />

          {/* FALSE SAFETY WINDOW highlight */}
          <ReferenceArea x1={1} x2={4} fill={C.red} fillOpacity={0.06}
            label={{ value: "FALSE SAFETY WINDOW (τ)", position: "insideTop",
              fill: C.red, fontFamily: font, fontSize: 9, opacity: 0.7 }} />

          {/* L1 survival limit */}
          <ReferenceLine y={0.20} stroke={C.red} strokeDasharray="4 3"
            strokeOpacity={0.6}
            label={{ value: "L1 Limit", position: "insideTopRight",
              fill: C.red, fontFamily: font, fontSize: 9 }} />

          <Line type="monotone" dataKey="S" name="S(t) Anchor"
            stroke={C.gold} strokeWidth={2.5} dot={{ fill: C.gold, r: 4 }}
            isAnimationActive={false} />
          <Line type="monotone" dataKey="F" name="F(t) Field"
            stroke={C.cyan} strokeWidth={2} dot={{ fill: C.cyan, r: 3 }}
            strokeDasharray="6 3" isAnimationActive={false} />
          <Line type="monotone" dataKey="P" name="P(t) Outcome"
            stroke={C.green} strokeWidth={2} dot={{ fill: C.green, r: 3 }}
            isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>

      {/* τ bracket annotation */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center",
        gap: 8, marginTop: 8, fontFamily: font, fontSize: 10, color: C.muted }}>
        <span>t=1 (S collapses)</span>
        <span style={{ color: C.red }}>
          ←─────── Delay Constant τ ≈ 3 cycles ───────→
        </span>
        <span>t=4 (F responds)</span>
      </div>

      <Caption>
        At t=1, Anchor Scalar S(t) crosses the L1 survival limit. Due to the field
        response delay constant τ (≈3 cycles for F₃ Organizational Layer),
        the external Field F(t) remains elevated until t=4. During this window,
        Outcome P(t) appears stable — management continues allocating V in the
        wrong direction. Nokia's False Safety Window: Q4 2007 → Q4 2009 (τ ≈ 8 quarters).
      </Caption>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// ARTIFACT 2 — SLINGSHOT REVERSAL
// ═══════════════════════════════════════════════════════════════════════════════
const SlingshotReversal = () => {
  const [phase, setPhase] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  const triggerTransition = () => {
    setTransitioning(true);
    setTimeout(() => {
      setPhase(p => p === 1 ? 2 : 1);
      setTransitioning(false);
    }, 500);
  };

  const VectorDiagram = ({ phaseNum }) => {
    const isP1 = phaseNum === 1;
    const config = isP1
      ? {
          label:     "PHASE 1: Slingshot Active (1990–1996)",
          fLabel:    "F_gravity (Global Capital Flow)",
          fColor:    C.green,
          fDir:      1,   // right
          vLabel:    "V_eff (Export-led Growth)",
          vColor:    C.gold,
          theta:     15,
          eta:       1.6,
          etaColor:  C.green,
          result:    "Field AMPLIFIES effort",
          pColor:    C.green,
          pLen:      0.85,
        }
      : {
          label:     "PHASE 2: Slingshot Reversal (1997)",
          fLabel:    "F_gravity (Capital Outflow — REVERSED)",
          fColor:    C.red,
          fDir:      -1,  // left
          vLabel:    "V_eff (Export Growth — UNCHANGED)",
          vColor:    C.gold,
          theta:     165,
          eta:       0.15,
          etaColor:  C.red,
          result:    "Field DESTROYS effort",
          pColor:    C.red,
          pLen:      0.12,
        };

    const cx = 300, cy = 130, scale = 180;
    const fAngle = isP1 ? 0 : 180; // degrees
    const vAngle = isP1 ? 15 : 15; // V stays the same direction

    const toRad = d => (d * Math.PI) / 180;
    const fEnd = {
      x: cx + Math.cos(toRad(fAngle)) * scale,
      y: cy - Math.sin(toRad(fAngle)) * scale * 0.5,
    };
    const vEnd = {
      x: cx + Math.cos(toRad(vAngle)) * scale * 0.65,
      y: cy - Math.sin(toRad(vAngle)) * scale * 0.65,
    };
    const pEnd = {
      x: cx + Math.cos(toRad(vAngle)) * scale * config.pLen,
      y: cy - Math.sin(toRad(vAngle)) * scale * config.pLen,
    };

    const Arrow = ({ x1, y1, x2, y2, color, dashed, id }) => {
      const len = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
      const ux = (x2-x1)/len, uy = (y2-y1)/len;
      const hx = x2 - ux*12, hy = y2 - uy*12;
      return (
        <g>
          <line x1={x1} y1={y1} x2={hx} y2={hy}
            stroke={color} strokeWidth={dashed ? 1.5 : 2.5}
            strokeDasharray={dashed ? "5,3" : "none"} opacity={0.9} />
          <polygon points={`${x2},${y2} ${hx-uy*6},${hy+ux*6} ${hx+uy*6},${hy-ux*6}`}
            fill={color} opacity={0.9} />
        </g>
      );
    };

    return (
      <div style={{ background: C.surface, border: `1px solid ${C.border}`,
        borderRadius: 4, padding: "16px 20px", flex: 1 }}>
        <div style={{ fontFamily: font, fontSize: 10, color: isP1 ? C.green : C.red,
          letterSpacing: "0.1em", marginBottom: 12 }}>
          {config.label}
        </div>

        <svg width="100%" viewBox="0 0 600 200" style={{ display: "block" }}>
          {/* Grid lines */}
          <line x1={cx} y1={20} x2={cx} y2={180} stroke={C.border} strokeWidth={1} />
          <line x1={60} y1={cy} x2={540} y2={cy} stroke={C.border} strokeWidth={1} />

          {/* Origin dot */}
          <circle cx={cx} cy={cy} r={5} fill={C.accent} />

          {/* F vector */}
          <Arrow x1={cx} y1={cy} x2={fEnd.x} y2={fEnd.y} color={config.fColor} />
          <text x={fEnd.x + (isP1 ? 8 : -8)} y={fEnd.y - 6}
            fill={config.fColor} fontFamily={font} fontSize={9}
            textAnchor={isP1 ? "start" : "end"}>
            F_gravity
          </text>

          {/* V vector */}
          <Arrow x1={cx} y1={cy} x2={vEnd.x} y2={vEnd.y} color={config.vColor} />
          <text x={vEnd.x + 8} y={vEnd.y - 4}
            fill={config.vColor} fontFamily={font} fontSize={9}>
            V_eff
          </text>

          {/* θ_VF arc */}
          <path d={`M ${cx + 45} ${cy} A 45 45 0 0 1 
            ${cx + 45*Math.cos(toRad(vAngle))} 
            ${cy - 45*Math.sin(toRad(vAngle))}`}
            fill="none" stroke={C.muted} strokeWidth={1} opacity={0.5} />
          <text x={cx + 52} y={cy - 14}
            fill={C.muted} fontFamily={font} fontSize={9}>
            θ={config.theta}°
          </text>

          {/* Resultant P */}
          <Arrow x1={cx} y1={cy} x2={pEnd.x} y2={pEnd.y}
            color={config.pColor} dashed />
          <text x={pEnd.x + 8} y={pEnd.y + 4}
            fill={config.pColor} fontFamily={font} fontSize={9} opacity={0.7}>
            P(t)
          </text>

          {/* Phase 2: reversal X marker on F */}
          {!isP1 && (
            <text x={fEnd.x - 100} y={cy - 24}
              fill={C.red} fontFamily={font} fontSize={20} opacity={0.3}>✕</text>
          )}
        </svg>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 24, fontFamily: font, fontSize: 11,
          marginTop: 8, paddingTop: 12, borderTop: `1px solid ${C.border}` }}>
          <span style={{ color: C.muted }}>
            θ_VF = <span style={{ color: config.fColor }}>{config.theta}°</span>
          </span>
          <span style={{ color: C.muted }}>
            η = <span style={{ color: config.etaColor, fontWeight: "bold" }}>{config.eta}</span>
          </span>
          <span style={{ color: config.pColor, flex: 1 }}>→ {config.result}</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <SectionLabel color={C.cyan}>Figure 2 — Vector Alignment and Slingshot Reversal</SectionLabel>

      <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
        <VectorDiagram phaseNum={1} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: 8, minWidth: 80 }}>
          <div style={{ fontFamily: font, fontSize: 9, color: C.muted,
            textAlign: "center", lineHeight: 1.5 }}>
            TRIGGER<br/>EVENT
          </div>
          <div style={{ color: C.red, fontSize: 20 }}>⚡</div>
          <div style={{ fontFamily: font, fontSize: 9, color: C.red,
            textAlign: "center", lineHeight: 1.5 }}>
            Field<br/>Reversal
          </div>
          <div style={{ width: 1, height: 30, background: C.border }} />
          <div style={{ fontFamily: font, fontSize: 9, color: C.muted,
            textAlign: "center", lineHeight: 1.5 }}>
            V direction<br/>unchanged
          </div>
        </div>
        <VectorDiagram phaseNum={2} />
      </div>

      {/* η comparison bar */}
      <div style={{ background: C.surface, border: `1px solid ${C.border}`,
        borderRadius: 4, padding: "16px 20px", marginBottom: 4 }}>
        <div style={{ fontFamily: font, fontSize: 10, color: C.muted,
          marginBottom: 12, letterSpacing: "0.1em" }}>
          SLINGSHOT COEFFICIENT η  —  Korea 1997 Case
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: font, fontSize: 11, color: C.muted, minWidth: 90 }}>
            Phase 1 (η=1.6)
          </span>
          <div style={{ flex: 1, height: 18, background: C.border, borderRadius: 2, overflow: "hidden" }}>
            <div style={{ width: "100%", height: "100%", background: C.green, opacity: 0.7 }} />
          </div>
          <span style={{ fontFamily: font, fontSize: 11, color: C.green }}>×1.6</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
          <span style={{ fontFamily: font, fontSize: 11, color: C.muted, minWidth: 90 }}>
            Phase 2 (η=0.15)
          </span>
          <div style={{ flex: 1, height: 18, background: C.border, borderRadius: 2, overflow: "hidden" }}>
            <div style={{ width: "9.375%", height: "100%", background: C.red, opacity: 0.8 }} />
          </div>
          <span style={{ fontFamily: font, fontSize: 11, color: C.red }}>×0.15</span>
        </div>
      </div>

      <Caption>
        V direction and magnitude remain unchanged. Field direction reverses 180°.
        θ_VF shifts from 15° → 165°. The Slingshot Coefficient η collapses from 1.6 to 0.15.
        The forces that accelerated Korea's economy for six years became the mechanism
        of its destruction within 90 days. Same equation. Same V. Opposite outcome.
      </Caption>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// ARTIFACT 3 — GRADIENT NAVIGATION MATRIX
// ═══════════════════════════════════════════════════════════════════════════════
const GradientNavigation = () => {
  const [selected, setSelected] = useState(null);

  const scalars = [
    { id: "s1a", label: "S₁a", name: "Cash / Runway", score: 30, tier: "ANCHOR",
      color: C.red, asdp: true,
      note: "3 months runway → L1 critical. ASDP triggered." },
    { id: "s1c", label: "S₁c", name: "Regulatory Health", score: 50, tier: "ANCHOR",
      color: C.gold, asdp: false,
      note: "L2–L3 zone. Manageable but watch closely." },
    { id: "s1b", label: "S₁b", name: "Competitive Moat", score: 65, tier: "LEVERAGE",
      color: C.green, asdp: false,
      note: "L3 solid. Strong but NOT the bottleneck." },
  ];

  const optimal = scalars.find(s => s.id === "s1a");

  return (
    <div>
      <SectionLabel color={C.gold}>Figure 3 — Gradient Navigation: V_optimal = ∇S</SectionLabel>

      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        {/* Scalar bars */}
        <div style={{ flex: 1, background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: 4, padding: "16px 20px" }}>
          <div style={{ fontFamily: font, fontSize: 10, color: C.muted,
            letterSpacing: "0.1em", marginBottom: 16 }}>
            SCALAR STATE — Click to inspect
          </div>

          {/* ASDP limit line annotation */}
          <div style={{ display: "flex", alignItems: "center", gap: 8,
            marginBottom: 16, paddingBottom: 12, borderBottom: `1px solid ${C.border}` }}>
            <div style={{ width: 40, height: 2, background: C.red, opacity: 0.5,
              borderTop: "2px dashed " + C.red }} />
            <span style={{ fontFamily: font, fontSize: 9, color: C.red, opacity: 0.7 }}>
              ASDP LIMIT = 20
            </span>
          </div>

          {scalars.map(s => (
            <div key={s.id} onClick={() => setSelected(s.id === selected ? null : s.id)}
              style={{ marginBottom: 16, cursor: "pointer",
                opacity: selected && selected !== s.id ? 0.4 : 1,
                transition: "opacity 0.2s" }}>
              <div style={{ display: "flex", justifyContent: "space-between",
                marginBottom: 6, fontFamily: font, fontSize: 11 }}>
                <span style={{ color: s.color }}>
                  {s.label} — {s.name}
                </span>
                <span style={{ color: C.muted }}>
                  <span style={{ color: s.tier === "ANCHOR" ? C.red : C.cyan,
                    fontSize: 9, marginRight: 8 }}>
                    [{s.tier}]
                  </span>
                  {s.score}/100
                </span>
              </div>
              <div style={{ position: "relative", height: 20,
                background: C.border, borderRadius: 2, overflow: "hidden" }}>
                <div style={{
                  width: `${s.score}%`, height: "100%",
                  background: s.color, opacity: 0.7,
                  transition: "width 0.6s ease"
                }} />
                {s.asdp && (
                  <div style={{
                    position: "absolute", left: "20%", top: 0, bottom: 0,
                    width: 2, background: C.red, opacity: 0.8
                  }} />
                )}
              </div>
              {selected === s.id && (
                <div style={{ fontFamily: font, fontSize: 10, color: C.muted,
                  marginTop: 6, paddingLeft: 4 }}>
                  → {s.note}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Gradient arrow diagram */}
        <div style={{ width: 260, background: C.surface, border: `1px solid ${C.border}`,
          borderRadius: 4, padding: "16px 20px" }}>
          <div style={{ fontFamily: font, fontSize: 10, color: C.muted,
            letterSpacing: "0.1em", marginBottom: 16 }}>
            V DIRECTION COMPARISON
          </div>

          <svg width="100%" viewBox="0 0 220 200">
            {/* Axes */}
            <line x1={30} y1={170} x2={200} y2={170} stroke={C.border} strokeWidth={1} />
            <line x1={30} y1={20}  x2={30}  y2={170} stroke={C.border} strokeWidth={1} />

            {/* Score axis labels */}
            <text x={110} y={188} fill={C.muted} fontFamily={font} fontSize={8} textAnchor="middle">
              Score →
            </text>

            {/* ASDP marker on x axis */}
            <line x1={62} y1={165} x2={62} y2={175} stroke={C.red} strokeWidth={1} opacity={0.7}/>
            <text x={62} y={183} fill={C.red} fontFamily={font} fontSize={7} textAnchor="middle">
              20
            </text>

            {/* Plot scalars */}
            {scalars.map((s, i) => {
              const x = 30 + (s.score / 100) * 160;
              const y = 40 + i * 42;
              return (
                <g key={s.id}>
                  <circle cx={x} cy={y} r={7} fill={s.color} opacity={0.8} />
                  <text x={x} y={y + 4} fill={C.bg} fontFamily={font}
                    fontSize={7} textAnchor="middle">{s.label}</text>
                  <line x1={30} y1={y} x2={x-8} y2={y}
                    stroke={s.color} strokeWidth={1} strokeDasharray="3,2" opacity={0.4} />
                </g>
              );
            })}

            {/* ANTI-PATTERN arrow → S1b */}
            <line x1={30} y1={124} x2={116} y2={82}
              stroke={C.muted} strokeWidth={1.5} strokeDasharray="4,3" opacity={0.4} />
            <polygon points="116,82 108,86 112,76" fill={C.muted} opacity={0.4} />
            <text x={80} y={68} fill={C.muted} fontFamily={font} fontSize={8} opacity={0.6}>
              ❌ Intuitive V
            </text>

            {/* OPTIMAL arrow → S1a */}
            <line x1={30} y1={124} x2={60} y2={46}
              stroke={C.gold} strokeWidth={2.5} />
            <polygon points="60,46 53,56 67,54" fill={C.gold} />
            <text x={38} y={42} fill={C.gold} fontFamily={font} fontSize={8}>
              ✓ V_optimal
            </text>
            <text x={38} y={52} fill={C.gold} fontFamily={font} fontSize={7} opacity={0.7}>
              = ∇S
            </text>
          </svg>
        </div>
      </div>

      {/* Theorem callout */}
      <div style={{ background: C.surface, border: `1px solid ${C.accent}`,
        borderRadius: 4, padding: "14px 20px",
        borderLeft: `3px solid ${C.accent}` }}>
        <div style={{ fontFamily: font, fontSize: 10, color: C.accent,
          letterSpacing: "0.1em", marginBottom: 8 }}>
          WEAK LINK PRIORITY THEOREM
        </div>
        <div style={{ fontFamily: font, fontSize: 12, color: C.text, lineHeight: 1.8 }}>
          Among all scalar axes, <span style={{ color: C.gold }}>∂P/∂Sₐ</span> is highest
          for the most depleted Anchor scalar.
          <br/>
          As Sₐ → 0, system collapse probability → 1,
          therefore <span style={{ color: C.gold }}>∂P/∂Sₐ → ∞</span>.
          <br/>
          <span style={{ color: C.muted }}>
            ∴ V_optimal = ∇S points at the most depleted Anchor, not the strongest Leverage.
          </span>
        </div>
      </div>

      <Caption>
        Intuitive strategy directs V toward the highest-scoring scalar (S₁b: Moat = 65).
        SVF prescribes V toward the most depleted Anchor (S₁a: Cash = 30, near ASDP limit).
        Marginal return ∂P/∂S diverges to infinity as any Anchor approaches zero.
        Optimizing your moat while your runway is at L1 produces a competitively
        excellent company that runs out of money.
      </Caption>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// ARTIFACT 4 — NAVIGATION CANVAS (G-Layer)
// ═══════════════════════════════════════════════════════════════════════════════
const NavigationCanvas = () => {
  const [form, setForm] = useState({
    project: "", goal: "", date: "", author: "",
    s1a: "", s1b: "", s1c: "",
    asdp: null,
    trend: "", fsw: null,
    r: "",
    theta: null,
    nabla: null,
    phase: null,
  });
  const [diagnosed, setDiagnosed] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const getPhase = () => {
    const asdp = form.asdp === "yes";
    const theta = form.theta;
    const nabla = form.nabla === "yes";
    const fsw   = form.fsw === "yes";
    if (asdp)                             return "COLLAPSE";
    if (theta === "reverse")              return "VICIOUS";
    if (theta === "partial" && !nabla)    return "CRAWL";
    if (theta === "aligned" && nabla)     return "LAUNCH";
    return "CRAWL";
  };

  const PHASES = {
    LAUNCH:   { label: "🚀 LAUNCH",   color: C.green, action: "속도 유지 — 자원 투입 극대화. Scalar Stagnation 경계." },
    CRAWL:    { label: "🐢 CRAWL",    color: C.gold,  action: "임계 속도 미달. R부터 제거하라. V 증가는 그 다음이다." },
    VICIOUS:  { label: "🌀 VICIOUS LOOP", color: C.accent, action: "방향 재검토. 지금 하는 것을 더 열심히 하지 말 것." },
    COLLAPSE: { label: "💀 COLLAPSE", color: C.red,   action: "ASDP 발동. 모든 신규 V 중단. Anchor 복구 최우선." },
  };

  const phase = diagnosed ? PHASES[getPhase()] : null;

  const Radio = ({ name, value, label, field }) => (
    <label style={{ display: "flex", alignItems: "center", gap: 8,
      fontFamily: font, fontSize: 11, color: form[field] === value ? C.text : C.muted,
      cursor: "pointer", marginBottom: 4 }}>
      <input type="radio" name={name} value={value}
        checked={form[field] === value}
        onChange={() => set(field, value)}
        style={{ accentColor: C.accent }} />
      {label}
    </label>
  );

  const Field = ({ label, field, placeholder }) => (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontFamily: font, fontSize: 10, color: C.muted,
        marginBottom: 4, letterSpacing: "0.08em" }}>{label}</div>
      <input value={form[field]} onChange={e => set(field, e.target.value)}
        placeholder={placeholder}
        style={{ width: "100%", background: "transparent",
          border: `1px solid ${C.border}`, borderRadius: 2,
          padding: "6px 10px", fontFamily: font, fontSize: 11,
          color: C.text, outline: "none", boxSizing: "border-box" }} />
    </div>
  );

  const Block = ({ title, color = C.accent, children }) => (
    <div style={{ background: C.surface, border: `1px solid ${C.border}`,
      borderRadius: 4, padding: "16px 20px", marginBottom: 12,
      borderLeft: `3px solid ${color}` }}>
      <div style={{ fontFamily: font, fontSize: 10, color,
        letterSpacing: "0.15em", marginBottom: 14 }}>{title}</div>
      {children}
    </div>
  );

  return (
    <div>
      <SectionLabel color={C.green}>Artifact 4 — 1-Page SVF Navigation Canvas (G-Layer)</SectionLabel>
      <div style={{ fontFamily: font, fontSize: 10, color: C.muted, marginBottom: 20 }}>
        "우리는 지금 어디로 가고 있으며, 왜 속도가 나지 않는가?" — 15분 진단 프로토콜
      </div>

      {/* Header */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 12, marginBottom: 12 }}>
        <Field label="PROJECT" field="project" placeholder="프로젝트명" />
        <Field label="TARGET OUTCOME" field="goal" placeholder="핵심 목표" />
        <Field label="DATE" field="date" placeholder="작성일" />
        <Field label="AUTHOR" field="author" placeholder="작성자" />
      </div>

      {/* S — Anchor */}
      <Block title="[S] ANCHOR SCALAR — 엔진이 꺼지기 직전인가?" color={C.red}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <Field label="S₁a — Cash/Runway" field="s1a" placeholder="( )개월 버틸 수 있다" />
          <Field label="S₁b — Competitive Moat" field="s1b" placeholder="( )주면 카피 가능" />
          <Field label="S₁c — Regulatory Risk" field="s1c" placeholder="치명적 리스크 ( )개" />
        </div>
        <div style={{ fontFamily: font, fontSize: 10, color: C.muted, marginBottom: 8 }}>
          ASDP 판정 — 위 항목 중 L1 위험 수준이 하나라도 존재하는가?
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <Radio name="asdp" value="yes" label="🚨 YES — 전부 멈추고 이 구멍부터 메운다" field="asdp" />
          <Radio name="asdp" value="no"  label="✅ NO — 기초 체력 확인됨" field="asdp" />
        </div>
      </Block>

      {/* F — Field */}
      <Block title="[F] FIELD GRAVITY — 바람은 밀어주는가, 막아서는가?" color={C.cyan}>
        <Field label="시장의 지배적 트렌드 (풍향)" field="trend"
          placeholder="고객/시장이 가장 원하는 것 1가지" />
        <div style={{ fontFamily: font, fontSize: 10, color: C.muted, marginBottom: 8 }}>
          False Safety Window — 과거 지표에 취해 있는가? (실제 체력↓, 평판·점유율은 아직 높음)
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <Radio name="fsw" value="yes" label="⚠️ YES — τ 지연 구간일 수 있다" field="fsw" />
          <Radio name="fsw" value="no"  label="✅ NO — 지표와 실체가 일치한다" field="fsw" />
        </div>
      </Block>

      {/* R — Resistance */}
      <Block title="[R] RESISTANCE — 사이드브레이크가 걸려 있는가?" color={C.gold}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
          {["기술 부채 (R_d)", "관료주의 (R_b)", "인지 과부하 (R_c)", "외부 저항 (R_o)"].map(r => (
            <label key={r} style={{ display: "flex", alignItems: "center", gap: 8,
              fontFamily: font, fontSize: 11, color: C.muted, cursor: "pointer" }}>
              <input type="checkbox" style={{ accentColor: C.gold }} />
              {r}
            </label>
          ))}
        </div>
        <Field label="가장 심각한 저항 1가지" field="r"
          placeholder="구체적으로 작성하라" />
      </Block>

      {/* V — Vector */}
      <Block title="[V] GRADIENT VECTOR — 정확한 곳에 에너지를 쏟고 있는가?" color={C.accent}>
        <div style={{ fontFamily: font, fontSize: 10, color: C.muted, marginBottom: 8 }}>
          방향 정렬 (θ_VF) — 현재 주력 업무는 시장 트렌드와 어떻게 정렬되어 있는가?
        </div>
        <div style={{ marginBottom: 14 }}>
          <Radio name="theta" value="aligned"  label={`슬링샷 (η > 1) — 시장이 강하게 밀어준다`} field="theta" />
          <Radio name="theta" value="partial"  label="절반 일치 — 약간 엇나갔지만 수정 가능" field="theta" />
          <Radio name="theta" value="reverse"  label={`역풍 (η < 1) — 시장을 거스르고 있다`} field="theta" />
        </div>
        <div style={{ fontFamily: font, fontSize: 10, color: C.muted, marginBottom: 8 }}>
          최적 타격점 (∇S) — 가장 잘하는 것이 아닌 가장 취약한 구멍에 에너지를 쏟고 있는가?
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          <Radio name="nabla" value="yes" label="✅ YES — ∇S 방향으로 V 정렬됨" field="nabla" />
          <Radio name="nabla" value="no"  label="❌ NO — 강점 극대화에 집중 중" field="nabla" />
        </div>
      </Block>

      {/* Diagnose button */}
      <button onClick={() => setDiagnosed(true)}
        style={{ width: "100%", padding: "14px", fontFamily: font, fontSize: 12,
          letterSpacing: "0.15em", background: "transparent",
          border: `1px solid ${C.accent}`, color: C.accent, cursor: "pointer",
          marginBottom: 16, transition: "all 0.2s" }}
        onMouseEnter={e => { e.target.style.background = C.accent; e.target.style.color = C.bg; }}
        onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = C.accent; }}>
        ▶  DIAGNOSE — PHASE STATE 판정
      </button>

      {/* Diagnosis result */}
      {diagnosed && phase && (
        <div style={{ background: C.surface,
          border: `2px solid ${phase.color}`,
          borderRadius: 4, padding: "20px 24px",
          animation: "fadeIn 0.4s ease" }}>
          <div style={{ fontFamily: font, fontSize: 18, color: phase.color,
            marginBottom: 12 }}>
            {phase.label}
          </div>
          <div style={{ fontFamily: font, fontSize: 12, color: C.text,
            lineHeight: 1.8 }}>
            {phase.action}
          </div>
          {form.fsw === "yes" && (
            <div style={{ fontFamily: font, fontSize: 10, color: C.muted,
              marginTop: 12, paddingTop: 10, borderTop: `1px solid ${C.border}` }}>
              ⚠️  False Safety Window 가능성 감지 —
              현재 P(t)가 실제 S 상태보다 과대평가되고 있을 수 있습니다 (τ 지연).
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
export default function SVFVisualArtifacts() {
  const [active, setActive] = useState("fsw");

  const content = { fsw: <FalseSafetyWindow />, slr: <SlingshotReversal />,
    gnm: <GradientNavigation />, nav: <NavigationCanvas /> };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text,
      fontFamily: font, padding: "0 0 60px 0" }}>

      {/* Header */}
      <div style={{ padding: "28px 32px 0", borderBottom: `1px solid ${C.border}`,
        marginBottom: 0 }}>
        <div style={{ fontSize: 9, color: C.muted, letterSpacing: "0.25em",
          textTransform: "uppercase", marginBottom: 6 }}>
          VOID PRESS  ·  SVF FRAMEWORK v2.0  ·  Visual Artifacts
        </div>
        <div style={{ fontSize: 16, color: C.accent, letterSpacing: "0.05em",
          marginBottom: 20 }}>
          Equation as Diagram — Four Core Visual Proofs
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${C.border}` }}>
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActive(tab.id)}
              style={{ fontFamily: font, fontSize: 10, letterSpacing: "0.1em",
                padding: "10px 20px", background: "transparent", border: "none",
                borderBottom: active === tab.id
                  ? `2px solid ${C.accent}` : "2px solid transparent",
                color: active === tab.id ? C.accent : C.muted,
                cursor: "pointer", transition: "all 0.15s",
                whiteSpace: "nowrap" }}>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "28px 32px" }}>
        {content[active]}
      </div>

      {/* Footer */}
      <div style={{ padding: "0 32px", fontFamily: font, fontSize: 9,
        color: C.muted, letterSpacing: "0.1em" }}>
        © 2026 TaekSoo Shin (Mephisto Void) · VOID PRESS · metavision9988@gmail.com
      </div>
    </div>
  );
}
