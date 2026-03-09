
import { useState, useEffect } from "react";

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
`;

// ── G-Layer: 5 Killer Questions ──────────────────────────────
const G_QUESTIONS = [
  {
    id: "S",
    label: "S — 연료",
    eng: "FUEL",
    q: "지금 이 일을 3개월 더 지속할 자원(돈 / 체력 / 시간)이 있는가?",
    sub: "Do you have enough fuel to keep going?",
    yes: "자원 확보. 다음 단계로.",
    no: "⚠ 먼저 자원을 채워라. 전략보다 생존이 우선.",
    color: "#f59e0b",
  },
  {
    id: "V",
    label: "V — 방향",
    eng: "DIRECTION",
    q: "지금 가장 열심히 하는 일이 1년 후 목표와 직접 연결되는가?",
    sub: "Is your effort pointing at the actual target?",
    yes: "방향 정렬. 유효 에너지 손실 없음.",
    no: "⚠ 핸들이 잘못 꺾여 있다. 할 일 목록 80% 교체 검토.",
    color: "#3b82f6",
  },
  {
    id: "F",
    label: "F — 바람",
    eng: "FIELD",
    q: "지금 세상의 흐름(트렌드 / 시장 / 기술)이 내 방향과 같은가?",
    sub: "Is the wind at your back or in your face?",
    yes: "순풍. 슬링샷 가속 기회 있음.",
    no: "⚠ 역풍. 에너지 소모 2배. 우회로 또는 방향 전환 검토.",
    color: "#10b981",
  },
  {
    id: "R",
    label: "R — 브레이크",
    eng: "RESISTANCE",
    q: "지금 사라지면 내일 당장 속도가 2배 빨라질 것이 있는가?",
    sub: "Is the handbrake on while you're flooring it?",
    yes: "⚠ 즉시 제거하라. 노력 증가보다 마찰 제거가 항상 효율적.",
    no: "마찰 없음. 투입 에너지가 출력으로 전환 중.",
    color: "#ef4444",
    invertLogic: true,
  },
  {
    id: "∇S",
    label: "∇S — 약한 고리",
    eng: "WEAK LINK",
    q: "지금 이 시스템에서 가장 취약한 단 하나를 꼽는다면?",
    sub: "What single thing, if broken, collapses everything?",
    yes: "식별됨. 그것을 먼저 강화하라. 강점을 키우기 전에.",
    no: "식별 불가. 더 깊은 진단이 필요함 → P-Layer 권장.",
    color: "#a855f7",
  },
];

// ── P-Layer: Rubric Axes ─────────────────────────────────────
const P_AXES = [
  {
    id: "S1a",
    label: "현금 / 런웨이",
    desc: "Cash Flow & Runway",
    levels: [
      { score: 10, label: "L1", text: "런웨이 3개월 미만. 단위경제 마이너스", tag: "CRITICAL" },
      { score: 30, label: "L2", text: "런웨이 6-9개월. 외부투자 없이 자생 불가", tag: "SURVIVAL" },
      { score: 50, label: "L3", text: "런웨이 12개월+. BEP 도달 가능성 명확", tag: "STABLE" },
      { score: 70, label: "L4", text: "구조적 흑자. 잉여현금흐름(FCF) 발생", tag: "LAUNCH" },
      { score: 90, label: "L5", text: "현금 창출력 압도적. WACC 통제 가능", tag: "MONOPOLY" },
    ],
    color: "#f59e0b",
  },
  {
    id: "S1b",
    label: "해자 방어력",
    desc: "Moat Defensibility",
    levels: [
      { score: 10, label: "L1", text: "차별점 없음. 1개월 내 카피 가능", tag: "NAKED" },
      { score: 30, label: "L2", text: "기능적 우위. 자본 투입 시 카피 가능", tag: "TEMP" },
      { score: 50, label: "L3", text: "Lock-in 시작. 전환 비용 발생", tag: "DEFEND" },
      { score: 70, label: "L4", text: "독자 데이터/IP. 네트워크 효과 발동", tag: "MOAT" },
      { score: 90, label: "L5", text: "생태계 장악. 경쟁사 진입이 오히려 이득", tag: "SYSTEMIC" },
    ],
    color: "#3b82f6",
  },
  {
    id: "S1c",
    label: "규제 건전성",
    desc: "Regulatory Status",
    levels: [
      { score: 10, label: "L1", text: "그레이존 영업. 규제 철퇴 시 즉각 폐업", tag: "TOXIC" },
      { score: 30, label: "L2", text: "최소 요건만 충족. 규제 변화에 취약", tag: "PASSIVE" },
      { score: 50, label: "L3", text: "완벽 준수. 리스크 모니터링 가동", tag: "STANDARD" },
      { score: 70, label: "L4", text: "선제적 대응 모델 구축", tag: "STRATEGIC" },
      { score: 90, label: "L5", text: "우리가 규제의 표준을 만든다", tag: "FIELD CTRL" },
    ],
    color: "#10b981",
  },
  {
    id: "V",
    label: "투입 벡터",
    desc: "Vector Magnitude & Direction",
    levels: [
      { score: 10, label: "L1", text: "에너지 거의 투입 안 됨. 사실상 정지", tag: "STALL" },
      { score: 30, label: "L2", text: "일부 투입. 방향 불명확", tag: "DRIFT" },
      { score: 50, label: "L3", text: "일관된 투입. 방향 대략 정렬", tag: "CRAWL" },
      { score: 70, label: "L4", text: "강한 투입. 방향 정렬 양호(θ < 30°)", tag: "LAUNCH" },
      { score: 90, label: "L5", text: "최대 투입. 완벽한 방향 정렬(θ ≈ 0°)", tag: "ESCAPE" },
    ],
    color: "#a855f7",
  },
  {
    id: "R",
    label: "내부 마찰",
    desc: "Resistance Level",
    levels: [
      { score: 90, label: "L1", text: "마찰 거의 없음. 에너지가 출력으로 직결", tag: "FLOW" },
      { score: 70, label: "L2", text: "경미한 마찰. 관리 가능 수준", tag: "LOW" },
      { score: 50, label: "L3", text: "중간 마찰. 점진적 해소 필요", tag: "MED" },
      { score: 30, label: "L4", text: "심각한 마찰. V 효과 50% 이상 잠식", tag: "HIGH" },
      { score: 10, label: "L5", text: "극단적 마찰. 사실상 사이드브레이크 풀 작동", tag: "BLOCK" },
    ],
    color: "#ef4444",
    inverted: true,
  },
];

const tagColors = {
  CRITICAL: "#ef4444", TOXIC: "#ef4444", BLOCK: "#ef4444",
  SURVIVAL: "#f97316", HIGH: "#f97316", NAKED: "#f97316", TEMP: "#f97316",
  STABLE: "#eab308", MED: "#eab308", PASSIVE: "#eab308", DRIFT: "#eab308",
  LAUNCH: "#22c55e", DEFEND: "#22c55e", LOW: "#22c55e", CRAWL: "#22c55e",
  MONOPOLY: "#3b82f6", SYSTEMIC: "#3b82f6", MOAT: "#3b82f6", ESCAPE: "#3b82f6",
  "FIELD CTRL": "#3b82f6", FLOW: "#3b82f6", STRATEGIC: "#22c55e",
  STANDARD: "#eab308",
};

// ── Gauge Component ──────────────────────────────────────────
function Gauge({ score, color, size = 80 }) {
  const r = size * 0.38;
  const cx = size / 2, cy = size / 2;
  const startAngle = -210, sweepAngle = 240;
  const angle = startAngle + (score / 100) * sweepAngle;
  const toRad = (d) => (d * Math.PI) / 180;
  const arcX = (a) => cx + r * Math.cos(toRad(a));
  const arcY = (a) => cy + r * Math.sin(toRad(a));
  const describeArc = (start, end) => {
    const large = end - start > 180 ? 1 : 0;
    return `M ${arcX(start)} ${arcY(start)} A ${r} ${r} 0 ${large} 1 ${arcX(end)} ${arcY(end)}`;
  };
  const needleX = cx + (r * 0.75) * Math.cos(toRad(angle));
  const needleY = cy + (r * 0.75) * Math.sin(toRad(angle));

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path d={describeArc(-210, 30)} fill="none" stroke="#1e2435" strokeWidth={size * 0.07} strokeLinecap="round" />
      <path d={describeArc(-210, startAngle + (score / 100) * sweepAngle)} fill="none" stroke={color} strokeWidth={size * 0.07} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 4px ${color})` }} />
      <line x1={cx} y1={cy} x2={needleX} y2={needleY} stroke="#fff" strokeWidth={size * 0.025} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={size * 0.06} fill="#0f1520" stroke="#fff" strokeWidth={1.5} />
      <text x={cx} y={cy + size * 0.28} textAnchor="middle" fill={color} fontSize={size * 0.18} fontFamily="DM Mono" fontWeight="500">{score}</text>
    </svg>
  );
}

// ── Main App ─────────────────────────────────────────────────
export default function SVFDualTrack() {
  const [layer, setLayer] = useState("G");
  const [gAnswers, setGAnswers] = useState({});
  const [pScores, setPScores] = useState({});
  const [revealed, setRevealed] = useState(false);
  const [pRevealed, setPRevealed] = useState(false);

  const allGAnswered = G_QUESTIONS.every((q) => gAnswers[q.id] !== undefined);
  const allPScored = P_AXES.every((a) => pScores[a.id] !== undefined);

  // G-Layer result
  const gResult = () => {
    let issues = [];
    G_QUESTIONS.forEach((q) => {
      const ans = gAnswers[q.id];
      if (ans === undefined) return;
      const bad = q.invertLogic ? ans === "yes" : ans === "no";
      if (bad) issues.push(q.id);
    });
    if (issues.length === 0) return { status: "LAUNCH", msg: "선순환 조건 확인됨. 지금이 가속의 순간.", color: "#22c55e" };
    if (issues.includes("S")) return { status: "HALT", msg: "자원 고갈 위험. 모든 것을 멈추고 S를 먼저 채워라.", color: "#ef4444" };
    if (issues.includes("V")) return { status: "PIVOT", msg: "방향이 잘못되었다. 더 빠르게 달리는 것은 해답이 아니다.", color: "#f97316" };
    return { status: "REVIEW", msg: "일부 조건 불충분. P-Layer 심층 진단 권장.", color: "#eab308" };
  };

  // P-Layer result
  const pResult = () => {
    if (!allPScored) return null;
    const avg = Object.values(pScores).reduce((a, b) => a + b, 0) / P_AXES.length;
    const rScore = pScores["R"] || 50;
    const s1a = pScores["S1a"] || 50;
    const bottleneck = P_AXES.reduce((min, a) => {
      const s = pScores[a.id] || 0;
      const eff = a.inverted ? 100 - s : s;
      return eff < (pScores[min.id] !== undefined ? (min.inverted ? 100 - pScores[min.id] : pScores[min.id]) : 999) ? a : min;
    }, P_AXES[0]);

    let prescription = "";
    if (s1a <= 30) prescription = "S1a(현금)이 임계 이하 — 모든 성장 투자 중단. 런웨이 확보가 최우선.";
    else if (rScore <= 30) prescription = "R(마찰)이 극심 — V를 늘리는 것은 무의미. 마찰 제거가 먼저.";
    else if ((pScores["V"] || 0) <= 30) prescription = "V(방향·속도) 미약 — 임계 속도 미달 위험. 방향 정렬 후 에너지 집중.";
    else prescription = `∇S 방향: ${bottleneck.label}(${bottleneck.desc})이 현재 병목. 여기에 자원을 집중.`;

    return { avg: Math.round(avg), prescription, bottleneck };
  };

  const res = gResult();
  const pRes = pResult();

  return (
    <>
      <style>{FONTS}</style>
      <div style={{
        minHeight: "100vh", background: "#080d16",
        color: "#e2e8f0", fontFamily: "'DM Sans', sans-serif",
        padding: "0", margin: "0",
      }}>
        {/* Header */}
        <div style={{
          borderBottom: "1px solid #1e2a3a",
          padding: "20px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "linear-gradient(180deg, #0d1624 0%, #080d16 100%)",
        }}>
          <div>
            <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 22, letterSpacing: "0.05em", color: "#fff" }}>
              SVF <span style={{ color: "#3b82f6" }}>FRAMEWORK</span>
            </div>
            <div style={{ fontFamily: "DM Mono", fontSize: 11, color: "#4a5568", letterSpacing: "0.15em", marginTop: 3 }}>
              SCALAR · VECTOR · FIELD — v2.0
            </div>
          </div>
          {/* Layer Toggle */}
          <div style={{ display: "flex", background: "#0d1624", border: "1px solid #1e2a3a", borderRadius: 8, overflow: "hidden" }}>
            {[
              { id: "G", label: "일반", sub: "GENERAL", color: "#f59e0b" },
              { id: "P", label: "전문가", sub: "PROFESSIONAL", color: "#3b82f6" },
            ].map((t) => (
              <button key={t.id} onClick={() => { setLayer(t.id); setRevealed(false); setPRevealed(false); }}
                style={{
                  padding: "10px 24px", border: "none", cursor: "pointer",
                  background: layer === t.id ? (t.id === "G" ? "rgba(245,158,11,0.12)" : "rgba(59,130,246,0.12)") : "transparent",
                  borderRight: t.id === "G" ? "1px solid #1e2a3a" : "none",
                  transition: "all 0.2s",
                }}>
                <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 13, color: layer === t.id ? t.color : "#4a5568" }}>{t.label}</div>
                <div style={{ fontFamily: "DM Mono", fontSize: 9, color: layer === t.id ? t.color : "#2d3748", letterSpacing: "0.1em" }}>{t.sub}</div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ padding: "28px 32px", maxWidth: 900, margin: "0 auto" }}>

          {/* ── G-LAYER ── */}
          {layer === "G" && (
            <div>
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontFamily: "Syne", fontSize: 28, fontWeight: 800, color: "#f59e0b", lineHeight: 1.1 }}>
                  지금 당신은<br />어디에 있는가?
                </div>
                <div style={{ fontFamily: "DM Sans", fontSize: 14, color: "#64748b", marginTop: 8 }}>
                  수식 없이 — 5개의 질문으로 현재 상태를 진단합니다
                </div>
              </div>

              {G_QUESTIONS.map((q, i) => {
                const ans = gAnswers[q.id];
                const bad = q.invertLogic ? ans === "yes" : ans === "no";
                const good = q.invertLogic ? ans === "no" : ans === "yes";
                return (
                  <div key={q.id} style={{
                    background: ans ? (bad ? "rgba(239,68,68,0.05)" : "rgba(34,197,94,0.05)") : "#0d1624",
                    border: `1px solid ${ans ? (bad ? "rgba(239,68,68,0.25)" : "rgba(34,197,94,0.2)") : "#1e2a3a"}`,
                    borderRadius: 10, padding: "18px 22px", marginBottom: 12,
                    transition: "all 0.25s",
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                      <div style={{ minWidth: 48 }}>
                        <div style={{
                          background: `rgba(${q.color.includes("f59") ? "245,158,11" : q.color.includes("3b8") ? "59,130,246" : q.color.includes("10b") ? "16,185,129" : q.color.includes("ef4") ? "239,68,68" : "168,85,247"},0.15)`,
                          border: `1px solid ${q.color}40`,
                          borderRadius: 6, padding: "4px 8px", textAlign: "center",
                        }}>
                          <div style={{ fontFamily: "DM Mono", fontSize: 13, color: q.color, fontWeight: 500 }}>{q.id}</div>
                          <div style={{ fontFamily: "DM Mono", fontSize: 8, color: q.color + "99", letterSpacing: "0.1em" }}>{q.eng}</div>
                        </div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "Syne", fontSize: 15, fontWeight: 600, color: "#e2e8f0", lineHeight: 1.4, marginBottom: 4 }}>
                          {q.q}
                        </div>
                        <div style={{ fontFamily: "DM Mono", fontSize: 11, color: "#4a5568", marginBottom: 14 }}>{q.sub}</div>
                        <div style={{ display: "flex", gap: 8 }}>
                          {["yes", "no"].map((v) => (
                            <button key={v} onClick={() => setGAnswers((prev) => ({ ...prev, [q.id]: v }))}
                              style={{
                                padding: "7px 20px",
                                background: ans === v ? (v === "yes" ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)") : "#131b2a",
                                border: `1px solid ${ans === v ? (v === "yes" ? "#22c55e" : "#ef4444") : "#1e2a3a"}`,
                                borderRadius: 6, color: ans === v ? (v === "yes" ? "#22c55e" : "#ef4444") : "#64748b",
                                fontFamily: "Syne", fontWeight: 700, fontSize: 13,
                                cursor: "pointer", transition: "all 0.15s",
                              }}>
                              {v === "yes" ? "YES" : "NO"}
                            </button>
                          ))}
                        </div>
                        {ans && (
                          <div style={{
                            marginTop: 10, padding: "8px 12px",
                            background: bad ? "rgba(239,68,68,0.08)" : "rgba(34,197,94,0.08)",
                            borderLeft: `3px solid ${bad ? "#ef4444" : "#22c55e"}`,
                            borderRadius: "0 6px 6px 0",
                            fontFamily: "DM Mono", fontSize: 12,
                            color: bad ? "#fca5a5" : "#86efac",
                          }}>
                            {bad ? q.no : q.yes}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* G Result */}
              {allGAnswered && (
                <div style={{
                  marginTop: 24,
                  background: `rgba(${res.color === "#22c55e" ? "34,197,94" : res.color === "#ef4444" ? "239,68,68" : res.color === "#f97316" ? "249,115,22" : "234,179,8"},0.08)`,
                  border: `1px solid ${res.color}40`,
                  borderRadius: 12, padding: "24px 28px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                    <div style={{
                      fontFamily: "DM Mono", fontSize: 11, letterSpacing: "0.15em",
                      background: `${res.color}20`, color: res.color,
                      border: `1px solid ${res.color}40`, borderRadius: 4,
                      padding: "3px 10px",
                    }}>DIAGNOSIS</div>
                    <div style={{ fontFamily: "Syne", fontWeight: 800, fontSize: 22, color: res.color }}>
                      {res.status}
                    </div>
                  </div>
                  <div style={{ fontFamily: "DM Sans", fontSize: 15, color: "#cbd5e1", lineHeight: 1.6 }}>
                    {res.msg}
                  </div>
                  {res.status !== "LAUNCH" && (
                    <div style={{ marginTop: 16, padding: "12px 16px", background: "#0d1624", borderRadius: 8, border: "1px solid #1e2a3a" }}>
                      <div style={{ fontFamily: "DM Mono", fontSize: 11, color: "#3b82f6", letterSpacing: "0.1em", marginBottom: 6 }}>→ DEEPER DIAGNOSIS</div>
                      <div style={{ fontFamily: "DM Sans", fontSize: 13, color: "#64748b" }}>
                        이 진단은 빠른 스크리닝입니다. 정확한 병목과 처방을 위해
                        <span style={{ color: "#3b82f6", cursor: "pointer", fontWeight: 500 }} onClick={() => setLayer("P")}> 전문가 레이어(P-Layer)</span>로 이동하세요.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ── P-LAYER ── */}
          {layer === "P" && (
            <div>
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontFamily: "Syne", fontSize: 28, fontWeight: 800, color: "#3b82f6", lineHeight: 1.1 }}>
                  Rubric Diagnostic<br /><span style={{ color: "#60a5fa", fontSize: 20 }}>Professional Mode</span>
                </div>
                <div style={{ fontFamily: "DM Mono", fontSize: 11, color: "#4a5568", marginTop: 8, letterSpacing: "0.1em" }}>
                  5개 축 정량 계측 → 병목 식별 → 처방 도출
                </div>
              </div>

              {P_AXES.map((axis) => {
                const selected = pScores[axis.id];
                return (
                  <div key={axis.id} style={{
                    background: "#0d1624", border: "1px solid #1e2a3a",
                    borderRadius: 10, padding: "18px 22px", marginBottom: 14,
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                      {selected !== undefined && <Gauge score={selected} color={axis.color} size={52} />}
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ fontFamily: "Syne", fontWeight: 700, fontSize: 15, color: "#e2e8f0" }}>{axis.label}</div>
                          <div style={{ fontFamily: "DM Mono", fontSize: 10, color: axis.color, letterSpacing: "0.1em" }}>{axis.desc}</div>
                        </div>
                        {axis.inverted && (
                          <div style={{ fontFamily: "DM Mono", fontSize: 10, color: "#ef444480", marginTop: 2 }}>
                            ※ 점수 높을수록 마찰 낮음 (역방향 계측)
                          </div>
                        )}
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6 }}>
                      {axis.levels.map((lv) => (
                        <button key={lv.score} onClick={() => setPScores((prev) => ({ ...prev, [axis.id]: lv.score }))}
                          style={{
                            padding: "10px 8px",
                            background: selected === lv.score ? `${axis.color}18` : "#131b2a",
                            border: `1px solid ${selected === lv.score ? axis.color : "#1e2a3a"}`,
                            borderRadius: 8, cursor: "pointer", textAlign: "center",
                            transition: "all 0.15s",
                          }}>
                          <div style={{ fontFamily: "DM Mono", fontSize: 10, color: selected === lv.score ? axis.color : "#4a5568", marginBottom: 3 }}>{lv.label}</div>
                          <div style={{
                            display: "inline-block", fontFamily: "DM Mono", fontSize: 8, letterSpacing: "0.05em",
                            padding: "1px 5px", borderRadius: 3,
                            background: `${tagColors[lv.tag] || "#64748b"}20`,
                            color: tagColors[lv.tag] || "#64748b",
                            marginBottom: 5,
                          }}>{lv.tag}</div>
                          <div style={{ fontFamily: "DM Sans", fontSize: 9, color: selected === lv.score ? "#94a3b8" : "#2d3748", lineHeight: 1.4 }}>{lv.text}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* P Result */}
              {allPScored && (
                <div style={{
                  marginTop: 24, background: "#0d1624",
                  border: "1px solid #1e2a3a", borderRadius: 12, padding: "28px",
                }}>
                  <div style={{ fontFamily: "DM Mono", fontSize: 11, letterSpacing: "0.15em", color: "#3b82f6", marginBottom: 16 }}>
                    ── DIAGNOSTIC OUTPUT ──────────────────────────────
                  </div>
                  {/* Score Bars */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 24 }}>
                    {P_AXES.map((axis) => {
                      const s = pScores[axis.id] || 0;
                      return (
                        <div key={axis.id} style={{ textAlign: "center" }}>
                          <Gauge score={s} color={axis.color} size={70} />
                          <div style={{ fontFamily: "Syne", fontWeight: 600, fontSize: 11, color: axis.color, marginTop: 4 }}>{axis.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {pRes && (
                    <>
                      <div style={{
                        padding: "16px 20px",
                        background: "rgba(239,68,68,0.05)",
                        border: "1px solid rgba(239,68,68,0.2)",
                        borderRadius: 8, marginBottom: 14,
                      }}>
                        <div style={{ fontFamily: "DM Mono", fontSize: 10, color: "#ef4444", letterSpacing: "0.1em", marginBottom: 8 }}>
                          BOTTLENECK — {pRes.bottleneck.label}
                        </div>
                        <div style={{ fontFamily: "DM Sans", fontSize: 14, color: "#fca5a5", lineHeight: 1.6 }}>
                          {pRes.prescription}
                        </div>
                      </div>
                      <div style={{
                        padding: "16px 20px",
                        background: "rgba(59,130,246,0.05)",
                        border: "1px solid rgba(59,130,246,0.2)",
                        borderRadius: 8,
                      }}>
                        <div style={{ fontFamily: "DM Mono", fontSize: 10, color: "#3b82f6", letterSpacing: "0.1em", marginBottom: 8 }}>
                          PRESCRIPTIVE ACTION
                        </div>
                        <div style={{ fontFamily: "DM Sans", fontSize: 13, color: "#93c5fd", lineHeight: 1.7 }}>
                          {pScores["S1a"] <= 30
                            ? "① S1a 복구 우선 — B2B 연간 계약 / 투자 유치 즉시 착수\n② 신규 기능 개발 및 채용 전면 중단\n③ 런웨이 12개월 확보 후 V 투자 재개"
                            : pScores["R"] <= 30
                            ? "① 가장 큰 마찰 소스 1개 식별 및 즉각 제거\n② V를 늘리기 전에 R을 0.5 이하로 낮추는 것이 우선\n③ R 감소 효과 측정 후 V 재투입"
                            : "① 병목 축에 에너지 집중 재배분\n② 다른 축의 현상 유지 (과잉 투자 금지)\n③ 4주 후 재측정 — Phase Dynamics 추적"}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "1px solid #0d1624", padding: "14px 32px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div style={{ fontFamily: "DM Mono", fontSize: 9, color: "#1e2a3a", letterSpacing: "0.15em" }}>
            VOID PRESS RESEARCH DIVISION · SVF v2.0
          </div>
          <div style={{ fontFamily: "DM Mono", fontSize: 9, color: "#1e2a3a" }}>
            {layer === "G" ? "G-LAYER: GENERAL" : "P-LAYER: PROFESSIONAL"}
          </div>
        </div>
      </div>
    </>
  );
}
