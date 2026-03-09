import { useState } from "react";

const sections = [
  { id: "gap", label: "Gap Analysis" },
  { id: "positioning", label: "Positioning Layer" },
  { id: "gradient", label: "Gradient Navigation" },
  { id: "feedback", label: "Feedback Loop" },
  { id: "critical", label: "Critical Velocity" },
  { id: "sdk", label: "Domain SDK" },
  { id: "simulation", label: "Simulation Protocol" },
  { id: "migration", label: "Migration Guides" },
  { id: "architecture", label: "v2.0 Architecture" },
];

const GapAnalysis = () => (
  <div>
    <h2 style={styles.sectionTitle}>
      <span style={styles.accent}>01</span> Gap Analysis
      <span style={styles.subtitle}> — 대화 vs SVF v1.1 교차 분석</span>
    </h2>
    <p style={styles.lead}>
      첨부 대화는 SVF v1.1을 독립적으로 재발견하거나, v1.1이 아직 포착하지 못한 개념을 제시한다.
      중복은 정리하고, 신규 개념만 v2.0에 편입한다.
    </p>

    <div style={styles.tableWrap}>
      <div style={styles.tableHeader}>
        <div style={{ flex: 3 }}>대화에서 제시된 개념</div>
        <div style={{ flex: 2 }}>v1.1 대응 항목</div>
        <div style={{ flex: 2 }}>상태</div>
        <div style={{ flex: 3 }}>v2.0 처리 방향</div>
      </div>

      {[
        {
          concept: "T (Tension/Time) as friction variable",
          v11: "R (Resistance) — 동일 개념",
          status: "DUPLICATE",
          action: "R로 통합 유지. T라는 명칭은 교육용 alias로만 사용",
        },
        {
          concept: "Weighting system (ω) for context sensitivity",
          v11: "v1.1 Dynamic Weighting (ω) — 이미 구현됨",
          status: "DUPLICATE",
          action: "v1.1 구현 강화. 대화가 독립 검증한 것으로 기록",
        },
        {
          concept: "Position (static) vs Positioning (dynamic) 구분",
          v11: "없음 — S와 V의 존재론적 구분 미정립",
          status: "NEW ★★★",
          action: "v2.0 핵심 철학 레이어로 채택. 전체 프레임워크 입문 개념으로",
        },
        {
          concept: "Gradient Navigation: V = ∇S",
          v11: "없음 — V 방향 설정 기준 미정의",
          status: "NEW ★★★",
          action: "Vector Optimization Theorem으로 형식화. 최적 벡터 방향 = 스칼라장 기울기",
        },
        {
          concept: "Recursive Feedback Loop: V→ΔS→ΔF→ΔV",
          v11: "없음 — 단방향 인과 구조",
          status: "NEW ★★★",
          action: "Phase Dynamics Engine으로 추가. SVF를 시뮬레이터로 진화시키는 핵심",
        },
        {
          concept: "Critical Velocity / Escape Velocity",
          v11: "없음 — 최소 임계값 개념 부재",
          status: "NEW ★★",
          action: "Critical Velocity Theorem으로 수식화. 정지 마찰 극복 조건 정의",
        },
        {
          concept: "Slingshot Effect: F를 역이용한 가속",
          v11: "없음 — F는 외부 저항으로만 취급",
          status: "NEW ★★",
          action: "Slingshot Coefficient (η)로 형식화. F가 인력(+)일 때 증폭 메커니즘",
        },
        {
          concept: "Dot Product Verification: team × market",
          v11: "θ (directional alignment) — 부분 존재",
          status: "PARTIAL",
          action: "θ 계산을 내적 검증으로 구체화. 다차원 정렬 측정 프로토콜 추가",
        },
        {
          concept: "Domain SDK (self / business / economy)",
          v11: "Alpha Catalog 언급 — 미완성",
          status: "PARTIAL",
          action: "4개 도메인 Alpha Catalog 완성. 각 도메인별 Anchor/Leverage 기준값 정의",
        },
        {
          concept: "Framework Migration (SWOT/OKR/GTD → SVF)",
          v11: "없음",
          status: "NEW ★★",
          action: "Migration Protocol로 추가. 기존 도구 사용자 진입점 확보",
        },
      ].map((row, i) => (
        <div key={i} style={{ ...styles.tableRow, background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
          <div style={{ flex: 3, fontFamily: "monospace", fontSize: "0.82rem", color: "#c8d6e5" }}>{row.concept}</div>
          <div style={{ flex: 2, fontSize: "0.78rem", color: "#7f8c8d" }}>{row.v11}</div>
          <div style={{ flex: 2 }}>
            <span style={{
              ...styles.badge,
              background: row.status.startsWith("NEW") ? "rgba(231,76,60,0.15)" : row.status === "DUPLICATE" ? "rgba(52,152,219,0.15)" : "rgba(241,196,15,0.15)",
              color: row.status.startsWith("NEW") ? "#e74c3c" : row.status === "DUPLICATE" ? "#3498db" : "#f1c40f",
            }}>{row.status}</span>
          </div>
          <div style={{ flex: 3, fontSize: "0.78rem", color: "#bdc3c7", lineHeight: 1.5 }}>{row.action}</div>
        </div>
      ))}
    </div>

    <div style={styles.callout}>
      <strong style={{ color: "#e74c3c" }}>메피스토펠레스 판정</strong><br />
      대화는 v1.1을 두 지점(ω, R)에서 독립 검증했다. 이는 개념의 내적 타당성을 지지한다.
      그러나 대화가 발견한 진짜 새것은 하나다:<br /><br />
      <em style={{ color: "#e8e8e8", fontSize: "1.05rem" }}>
        "S는 상태이고, V는 그 상태를 변화시키려는 의지의 방향이다 —
        그리고 가장 효율적인 V의 방향은 S의 기울기(∇S)다."
      </em><br /><br />
      이 하나의 통찰이 SVF를 진단 도구에서 항법 시스템으로 격상시킨다.
    </div>
  </div>
);

const PositioningLayer = () => (
  <div>
    <h2 style={styles.sectionTitle}>
      <span style={styles.accent}>02</span> The Positioning Layer
      <span style={styles.subtitle}> — Position vs Positioning의 존재론</span>
    </h2>
    <p style={styles.lead}>
      이것이 v2.0의 철학적 초석이다. 기존 경영 분석이 모두 Position(위치)을 관리하는 것에 집착하는 동안,
      SVF는 Positioning(이동)을 설계한다.
    </p>

    <div style={styles.twoCol}>
      <div style={{ ...styles.card, borderColor: "#3498db" }}>
        <div style={styles.cardLabel}>SCALAR / S</div>
        <div style={styles.cardTitle}>POSITION</div>
        <div style={styles.cardDesc}>
          크기만 존재하는 상태값<br />
          "우리는 시장점유율 1위다" → 방향 없음<br />
          "나는 자본이 5억이다" → 방향 없음<br /><br />
          <strong style={{ color: "#3498db" }}>특성:</strong> 정적, 결과론적, 측정 가능<br />
          <strong style={{ color: "#e74c3c" }}>한계:</strong> 속도·방향 정보 없음. 미래를 말하지 못함
        </div>
      </div>
      <div style={{ ...styles.card, borderColor: "#e74c3c" }}>
        <div style={styles.cardLabel}>VECTOR / V</div>
        <div style={styles.cardTitle}>POSITIONING</div>
        <div style={styles.cardDesc}>
          크기 + 방향을 가진 변화량<br />
          "우리는 모바일 퍼스트로 전환 중이다"<br />
          "매달 저축을 30% 늘리는 중이다"<br /><br />
          <strong style={{ color: "#e74c3c" }}>특성:</strong> 동적, 과정론적, 예측 가능<br />
          <strong style={{ color: "#3498db" }}>힘:</strong> 속도·방향 정보 포함. 궤적을 그린다
        </div>
      </div>
    </div>

    <div style={styles.formulaBlock}>
      <div style={styles.formulaTitle}>Positioning Layer Theorem (v2.0 New)</div>
      <div style={styles.formula}>
        V_effective = |V| × cos(θ)
      </div>
      <div style={styles.formulaNote}>
        아무리 강한 노력(|V|)이 있어도 방향(θ)이 90° 이상이면 전진은 0이다.
        반대로, 작은 노력이라도 완벽한 방향 정렬(θ→0°)이면 최대 효율을 낸다.
      </div>
      <div style={styles.formula}>
        Position Management: "현재 위치를 어떻게 지킬 것인가?"
        Positioning Design:  "다음 위치로 가는 최적 경로는 무엇인가?"
      </div>
    </div>

    <div style={styles.tableWrap}>
      <div style={styles.tableHeader}>
        <div style={{ flex: 2 }}>θ (방향 각도)</div>
        <div style={{ flex: 2 }}>cos(θ)</div>
        <div style={{ flex: 3 }}>실전 해석</div>
        <div style={{ flex: 3 }}>처방</div>
      </div>
      {[
        ["0° — 완전 정렬", "1.0", "모든 에너지가 목표로 향함", "속도(|V|)를 극대화할 타이밍"],
        ["30° — 미세 이탈", "0.87", "에너지의 13% 낭비", "방향 미세 조정 권고"],
        ["60° — 부분 이탈", "0.5", "에너지의 절반 낭비", "전략 재검토 필요"],
        ["90° — 직교", "0.0", "아무리 열심히 해도 진전 없음", "방향 전환 필수"],
        ["180° — 역방향", "-1.0", "열심히 할수록 목표에서 멀어짐", "즉시 중단, 재설계"],
      ].map(([a, b, c, d], i) => (
        <div key={i} style={{ ...styles.tableRow, background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
          <div style={{ flex: 2, fontFamily: "monospace", color: "#e8e8e8" }}>{a}</div>
          <div style={{ flex: 2, fontFamily: "monospace", color: i > 2 ? "#e74c3c" : "#2ecc71" }}>{b}</div>
          <div style={{ flex: 3, fontSize: "0.82rem", color: "#bdc3c7" }}>{c}</div>
          <div style={{ flex: 3, fontSize: "0.82rem", color: "#95a5a6" }}>{d}</div>
        </div>
      ))}
    </div>
  </div>
);

const GradientNavigation = () => (
  <div>
    <h2 style={styles.sectionTitle}>
      <span style={styles.accent}>03</span> Gradient Navigation
      <span style={styles.subtitle}> — V_optimal = ∇S</span>
    </h2>
    <p style={styles.lead}>
      v1.1은 V의 방향을 <em>선택</em>한다고 말했지만, v2.0은 V의 최적 방향이 수학적으로 <em>도출</em>됨을 보인다.
      스칼라장(S)의 기울기가 가장 가파른 방향이 최소 에너지로 최대 성과를 내는 방향이다.
    </p>

    <div style={styles.formulaBlock}>
      <div style={styles.formulaTitle}>Gradient Navigation Theorem (v2.0 New)</div>
      <div style={styles.formula}>
        V_optimal = ∇S = (∂S/∂x₁, ∂S/∂x₂, ..., ∂S/∂xₙ)
      </div>
      <div style={styles.formulaNote}>
        스칼라 S가 n개의 축(가격, 품질, 기술력, 네트워크...)으로 정의된 공간에 분포할 때,
        각 축에서 S의 변화율이 가장 큰 방향의 합벡터가 최적 V다.
      </div>
    </div>

    <div style={styles.callout}>
      <strong>실전 적용:</strong> "우리는 어느 방향으로 에너지를 써야 하는가?"를 묻지 말고,
      "현재 보유 자산(S)이 어느 축에서 가장 빠르게 성장하는가?"를 물어라.
      그 방향이 최적 V다.
    </div>

    <h3 style={styles.h3}>3가지 항법 실패 패턴 (Anti-Patterns)</h3>
    <div style={styles.threeCol}>
      {[
        {
          name: "Directional Blindness",
          desc: "강한 V가 있지만 ∇S를 무시하고 직관으로 방향 설정. 열심히 하지만 S가 가장 약한 축으로 에너지를 쏟는다.",
          color: "#e74c3c",
          example: "R&D에 모든 투자를 쏟지만 실제 S의 기울기는 유통 채널 개선에 있을 때",
        },
        {
          name: "Scalar Stagnation",
          desc: "S를 키우는 데만 집중하고 V를 설정하지 않는다. 자산은 쌓이지만 포지셔닝이 없다.",
          color: "#f39c12",
          example: "스펙을 쌓지만 취직 방향(V)을 정하지 않은 구직자",
        },
        {
          name: "Field Blindness",
          desc: "∇S는 맞는데 F(필드)를 무시하고 항법. 방향은 옳지만 시장 중력에 의해 궤적이 휜다.",
          color: "#9b59b6",
          example: "완벽한 제품이지만 규제 장벽(F)이 막고 있는 스타트업",
        },
      ].map((p, i) => (
        <div key={i} style={{ ...styles.card, borderColor: p.color }}>
          <div style={{ ...styles.cardLabel, color: p.color }}>ANTI-PATTERN {i + 1}</div>
          <div style={{ ...styles.cardTitle, fontSize: "1rem" }}>{p.name}</div>
          <div style={styles.cardDesc}>{p.desc}</div>
          <div style={{ fontSize: "0.75rem", color: "#7f8c8d", marginTop: "0.5rem", fontStyle: "italic" }}>{p.example}</div>
        </div>
      ))}
    </div>
  </div>
);

const FeedbackLoop = () => (
  <div>
    <h2 style={styles.sectionTitle}>
      <span style={styles.accent}>04</span> Phase Dynamics Engine
      <span style={styles.subtitle}> — Recursive Feedback Loop</span>
    </h2>
    <p style={styles.lead}>
      v1.1의 가장 큰 구조적 결함: 단방향 인과. V가 S를 변화시키고, S의 변화가 F를 바꾸고,
      F의 변화가 다시 V에 영향을 준다는 재귀적 현실을 포착하지 못했다.
      이것이 없으면 시뮬레이션이 불가능하다.
    </p>

    <div style={styles.formulaBlock}>
      <div style={styles.formulaTitle}>Phase Dynamics Equation (v2.0 New)</div>
      <div style={styles.formula}>
        Cycle t:   P(t) = [(ωs·S + ωv·V + ωf·F + Σαf) × Παm × cos(θ)] / (1+R)
        
        Cycle t+1: S(t+1) = S(t) + ΔS(V,t)
                   F(t+1) = f(S(t+1), external_events)
                   V(t+1) = ∇S(t+1) × η(F_alignment)
                   R(t+1) = g(org_state, tech_debt, elapsed_time)
      </div>
    </div>

    <h3 style={styles.h3}>루프 유형 분류 (4가지 피드백 패턴)</h3>
    <div style={styles.tableWrap}>
      <div style={styles.tableHeader}>
        <div style={{ flex: 2 }}>패턴</div>
        <div style={{ flex: 2 }}>루프 방향</div>
        <div style={{ flex: 3 }}>동작 원리</div>
        <div style={{ flex: 3 }}>실전 예시</div>
      </div>
      {[
        ["Virtuous Loop", "V↑→S↑→F↑→V↑", "성장이 더 많은 성장을 만드는 선순환", "넷플릭스: 구독자 증가→콘텐츠 예산 증가→구독자 증가"],
        ["Vicious Loop", "V↓→S↓→F↓→V↓", "쇠퇴가 더 빠른 쇠퇴를 만드는 악순환", "노키아: 시장점유율 하락→투자 축소→경쟁력 하락"],
        ["Inertia Loop", "V→S 변화 미미→F 변화 없음", "자원이 있지만 S 변화가 일어나지 않음. 대기업 병", "대형 언론사: 디지털 전환 예산 있지만 조직 관성으로 S 불변"],
        ["Escape Loop", "높은 R→V 감쇄→궤도 이탈", "마찰이 추진력을 모두 소비. 시스템 정지", "과부하된 팀: 기술부채(R)가 모든 V를 흡수"],
      ].map(([a, b, c, d], i) => (
        <div key={i} style={{ ...styles.tableRow, background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
          <div style={{ flex: 2, color: ["#2ecc71", "#e74c3c", "#f39c12", "#9b59b6"][i], fontWeight: 600, fontSize: "0.85rem" }}>{a}</div>
          <div style={{ flex: 2, fontFamily: "monospace", fontSize: "0.75rem", color: "#95a5a6" }}>{b}</div>
          <div style={{ flex: 3, fontSize: "0.8rem", color: "#bdc3c7" }}>{c}</div>
          <div style={{ flex: 3, fontSize: "0.78rem", color: "#7f8c8d", fontStyle: "italic" }}>{d}</div>
        </div>
      ))}
    </div>

    <div style={styles.callout}>
      <strong style={{ color: "#2ecc71" }}>시뮬레이션 실용 지침:</strong> 3사이클 이상의 재귀 계산을 돌렸을 때
      P(t)가 수렴(안정)하면 시스템은 건강하다. P(t)가 발산하면 Virtuous 또는 Vicious Loop 중 하나다.
      발산 속도와 방향을 보고 개입 타이밍을 결정한다.
    </div>
  </div>
);

const CriticalVelocity = () => (
  <div>
    <h2 style={styles.sectionTitle}>
      <span style={styles.accent}>05</span> Critical Velocity & Slingshot Effect
      <span style={styles.subtitle}> — 임계 속도와 필드 역이용</span>
    </h2>

    <div style={styles.twoCol}>
      <div>
        <h3 style={styles.h3}>Critical Velocity Theorem</h3>
        <p style={{ color: "#95a5a6", fontSize: "0.88rem", lineHeight: 1.7 }}>
          정지 마찰력 이하의 V는 S를 변화시키지 못한다.
          "조금씩 해보자"는 접근이 왜 실패하는지의 물리적 근거.
        </p>
        <div style={styles.formulaBlock}>
          <div style={styles.formula}>
            V_critical = R_static × F_resistance / (S_base × Παm)
            
            IF |V| < V_critical → ΔS = 0  (정체, 자원 낭비)
            IF |V| ≥ V_critical → ΔS > 0  (실질적 이동 시작)
          </div>
        </div>
        <p style={{ color: "#95a5a6", fontSize: "0.85rem", lineHeight: 1.7 }}>
          <strong style={{ color: "#e8e8e8" }}>실전 의미:</strong> R이 높고 F_resistance가 강한 환경에서는
          에너지를 분산하지 말고 한 점에 집중해야만 임계 속도를 돌파할 수 있다.
        </p>
      </div>

      <div>
        <h3 style={styles.h3}>Slingshot Coefficient (η)</h3>
        <p style={{ color: "#95a5a6", fontSize: "0.88rem", lineHeight: 1.7 }}>
          F(필드)를 장애물이 아닌 추진력으로 전환하는 순간,
          최소 V로 최대 P를 낼 수 있다. 새총 효과.
        </p>
        <div style={styles.formulaBlock}>
          <div style={styles.formula}>
            η = 1 + (F_gravity × cos(θ_VF)) / |V|
            
            θ_VF: V와 F 방향의 각도
            IF θ_VF < 30° → η > 1  (슬링샷 발동)
            IF θ_VF > 90° → η < 1  (필드가 저항으로 작용)
          </div>
        </div>
        <p style={{ color: "#95a5a6", fontSize: "0.85rem", lineHeight: 1.7 }}>
          <strong style={{ color: "#e8e8e8" }}>실전 의미:</strong> 시장 트렌드(F)와 같은 방향으로 V를 설정하면
          시장의 중력이 추진력으로 바뀐다. 넷플릭스가 인터넷 보급 트렌드를 타고 가속한 방식.
        </p>
      </div>
    </div>

    <h3 style={styles.h3}>4가지 에너지 상태 매트릭스</h3>
    <div style={styles.tableWrap}>
      <div style={styles.tableHeader}>
        <div style={{ flex: 2 }}>상태</div>
        <div style={{ flex: 2 }}>V vs V_critical</div>
        <div style={{ flex: 2 }}>η (Slingshot)</div>
        <div style={{ flex: 4 }}>처방</div>
      </div>
      {[
        ["LAUNCH", "|V| ≥ Vc", "η > 1.2", "#2ecc71", "최적 상태. 속도 유지하고 방향만 관리하라"],
        ["CRAWL", "|V| ≥ Vc", "η < 1.0", "#f39c12", "움직이고 있지만 필드가 저항. 방향 재조정 필요"],
        ["STALL", "|V| < Vc", "η > 1.0", "#3498db", "필드는 우호적이지만 V 부족. 에너지 집중 필요"],
        ["COLLAPSE", "|V| < Vc", "η < 0.8", "#e74c3c", "즉시 중단. V도 부족하고 필드도 역방향. 재설계"],
      ].map(([a, b, c, color, d], i) => (
        <div key={i} style={{ ...styles.tableRow, background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
          <div style={{ flex: 2, color, fontWeight: 700 }}>{a}</div>
          <div style={{ flex: 2, fontFamily: "monospace", fontSize: "0.8rem", color: "#95a5a6" }}>{b}</div>
          <div style={{ flex: 2, fontFamily: "monospace", fontSize: "0.8rem", color: "#95a5a6" }}>{c}</div>
          <div style={{ flex: 4, fontSize: "0.82rem", color: "#bdc3c7" }}>{d}</div>
        </div>
      ))}
    </div>
  </div>
);

const DomainSDK = () => {
  const [activeDomain, setActiveDomain] = useState("personal");
  const domains = {
    personal: {
      name: "Self & Personal Development",
      color: "#3498db",
      anchors: ["Physical health (energy capacity)", "Financial survival baseline", "Core identity / psychological stability"],
      leverages: ["Skill acquisition rate", "Habit automation level", "Environment design quality", "Keystone behavior density"],
      indicators: ["Productivity metrics", "Income level", "Social recognition"],
      noise: ["Social media metrics", "Awards without capability growth", "Busyness indicators"],
      alphaF: ["Accountability partner presence (+15)", "Immersive environment score (+20)", "Mentor access level (+25)"],
      alphaM: ["Temperament-Field Fit (0.6–1.4)", "Intrinsic motivation multiplier (0.5–1.5)"],
      resistance: ["Context-switching friction", "Competing commitments", "Emotional resistance to discomfort"],
      killerQ: "지금의 루틴이 당신을 의도한 방향으로 이동시키고 있는가, 아니면 현재 위치를 유지하는 데만 쓰이고 있는가?",
    },
    business: {
      name: "Business & Strategy",
      color: "#e74c3c",
      anchors: ["Cash flow positivity / runway", "Core value proposition defensibility", "Regulatory compliance status"],
      leverages: ["Distribution channel control", "Brand moat depth", "Technology differentiation", "Network effect density"],
      indicators: ["Revenue growth rate", "Market share", "Customer satisfaction scores"],
      noise: ["PR mentions", "Awards", "Vanity metrics (downloads without retention)"],
      alphaF: ["Timing advantage / first-mover (+30)", "Strategic partnership access (+20)", "Regulatory tailwind (+25)"],
      alphaM: ["Founder-Market Fit (0.5–1.5)", "Team execution multiplier (0.6–1.4)", "Capital efficiency (0.7–1.3)"],
      resistance: ["Organizational bureaucracy", "Technical debt load", "Internal political friction"],
      killerQ: "당신의 회사가 10배 빠르게 성장할 수 없다면, 그 이유는 자원 부족인가 아니면 방향 오정렬 또는 마찰 과부하인가?",
    },
    economy: {
      name: "Economics & Investment",
      color: "#f39c12",
      anchors: ["Liquidity reserve ratio", "Debt serviceability", "Currency/systemic risk exposure"],
      leverages: ["Asset allocation velocity", "Compounding rate (CAGR)", "Information asymmetry advantage"],
      indicators: ["Portfolio returns", "GDP growth", "Employment rate"],
      noise: ["Short-term price volatility", "Media sentiment", "Analyst consensus"],
      alphaF: ["Macro tailwind (rate cycle position +25)", "Regulatory arbitrage (+20)", "Information edge (+30)"],
      alphaM: ["Patience multiplier (0.5–2.0)", "Risk-calibration score (0.4–1.6)"],
      resistance: ["Transaction costs", "Tax friction", "Behavioral biases (loss aversion, FOMO)"],
      killerQ: "당신의 포트폴리오 V(투자 방향)는 시장 중력(F)을 거스르는가 아니면 타고 가는가? 그리고 그 선택은 데이터인가 두려움인가?",
    },
    creative: {
      name: "Creative & Artistic Work",
      color: "#9b59b6",
      anchors: ["Creative output consistency (minimum viable output)", "Financial survival floor", "Distinctive voice integrity"],
      leverages: ["Craft technical depth", "Audience resonance score", "Distribution reach", "Platform-medium fit"],
      indicators: ["Follower count", "Sales figures", "Critical reception"],
      noise: ["Viral moments without retention", "Platform algorithm favor", "Peer validation"],
      alphaF: ["Cultural moment timing (+25)", "Platform algorithmic alignment (+20)", "Genre momentum (+15)"],
      alphaM: ["Authenticity multiplier (0.3–1.8)", "Obsession coefficient (0.6–1.5)"],
      resistance: ["Perfectionism paralysis", "Market-taste misalignment friction", "Monetization pressure distortion"],
      killerQ: "당신의 작업이 '좋은 작품'과 '팔리는 작품' 사이에서 벡터를 어디로 정렬하고 있는가? 그리고 그 정렬이 의식적 선택인가 타협의 결과인가?",
    },
  };

  const d = domains[activeDomain];
  return (
    <div>
      <h2 style={styles.sectionTitle}>
        <span style={styles.accent}>06</span> Domain SDK
        <span style={styles.subtitle}> — 4개 도메인 Alpha Catalog</span>
      </h2>
      <p style={styles.lead}>
        v1.1이 Alpha Catalog를 "미래 연구 방향"으로만 언급했다면, v2.0은 4개 핵심 도메인의
        Anchor/Leverage/Indicator/Noise/Alpha 전체 카탈로그를 완성한다.
      </p>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        {Object.entries(domains).map(([key, val]) => (
          <button key={key} onClick={() => setActiveDomain(key)}
            style={{ ...styles.tab, borderColor: activeDomain === key ? val.color : "#2c3e50", color: activeDomain === key ? val.color : "#7f8c8d", background: activeDomain === key ? `${val.color}15` : "transparent" }}>
            {val.name}
          </button>
        ))}
      </div>

      <div style={{ ...styles.card, borderColor: d.color, padding: "1.5rem" }}>
        <div style={{ ...styles.cardLabel, color: d.color }}>DOMAIN MODULE</div>
        <div style={{ ...styles.cardTitle, color: d.color, marginBottom: "1.5rem" }}>{d.name}</div>

        {[
          { label: "Tier 1 — ANCHOR Scalars", items: d.anchors, color: "#e74c3c" },
          { label: "Tier 2 — LEVERAGE Scalars", items: d.leverages, color: "#f39c12" },
          { label: "Tier 3 — INDICATOR Scalars", items: d.indicators, color: "#3498db" },
          { label: "Tier 4 — NOISE (Exclude)", items: d.noise, color: "#7f8c8d" },
          { label: "Feature Alpha (αf additive)", items: d.alphaF, color: "#2ecc71" },
          { label: "Multiplier Alpha (αm ×)", items: d.alphaM, color: "#9b59b6" },
          { label: "Resistance Sources (R)", items: d.resistance, color: "#e67e22" },
        ].map(({ label, items, color }) => (
          <div key={label} style={{ marginBottom: "1rem" }}>
            <div style={{ fontSize: "0.7rem", color, fontWeight: 700, letterSpacing: "0.1em", marginBottom: "0.4rem" }}>{label}</div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {items.map((item, i) => (
                <span key={i} style={{ background: `${color}12`, border: `1px solid ${color}30`, color: "#c8d6e5", padding: "0.25rem 0.6rem", borderRadius: "3px", fontSize: "0.78rem" }}>{item}</span>
              ))}
            </div>
          </div>
        ))}

        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(255,255,255,0.04)", borderRadius: "6px", borderLeft: `3px solid ${d.color}` }}>
          <div style={{ fontSize: "0.7rem", color: d.color, fontWeight: 700, marginBottom: "0.5rem" }}>KILLER QUESTION</div>
          <div style={{ color: "#e8e8e8", fontSize: "0.9rem", fontStyle: "italic", lineHeight: 1.6 }}>{d.killerQ}</div>
        </div>
      </div>
    </div>
  );
};

const SimulationProtocol = () => (
  <div>
    <h2 style={styles.sectionTitle}>
      <span style={styles.accent}>07</span> Simulation Protocol
      <span style={styles.subtitle}> — 3-Cycle Trajectory Engine</span>
    </h2>
    <p style={styles.lead}>
      "분석이 아닌 예측"을 위한 표준 시뮬레이션 절차. 이것이 있어야 SVF가 도구가 된다.
    </p>

    {[
      {
        step: "STEP 1",
        title: "Parameter Specification",
        desc: "모든 변수를 0–100 표준화 점수로 수치화",
        items: [
          "각 도메인 SDK의 Anchor/Leverage Scalar에 현재값 입력",
          "ω (가중치): 도메인 유형과 현재 단계(도입/성장/성숙)에 따라 설정",
          "θ: 현재 진행 방향과 목표 방향 사이의 각도 측정",
          "R: 조직/시스템 내 마찰 소스별 점수화 후 합산",
          "αf, αm: 해당 도메인 SDK의 Alpha Catalog에서 활성화 항목 체크",
        ],
      },
      {
        step: "STEP 2",
        title: "Scenario Generation",
        desc: "3개 시나리오 병렬 실행 (Bear / Base / Bull)",
        items: [
          "Bear: R을 현재 대비 +30%, F를 -20% 조정한 시나리오",
          "Base: 현재 파라미터 유지",
          "Bull: R을 -20%, θ를 15° 개선, η > 1 가정",
          "각 시나리오에서 4 Phase Cycle 돌려 P(t+4) 계산",
          "세 시나리오의 분산(variance)이 클수록 전략적 불확실성 높음",
        ],
      },
      {
        step: "STEP 3",
        title: "Bottleneck Identification",
        desc: "어디를 손대야 가장 큰 P 변화가 생기는가",
        items: [
          "편미분 분석: ∂P/∂S, ∂P/∂V, ∂P/∂F, ∂P/∂R 각각 계산",
          "가장 큰 ∂P/∂x를 가진 변수가 1순위 개입 포인트",
          "단, Anchor Scalar(S₁)가 임계 이하면 다른 계산 전에 Anchor 복구 우선",
          "R이 0.5 초과면 V 증가보다 R 감소가 항상 더 효율적",
        ],
      },
      {
        step: "STEP 4",
        title: "Trajectory Decision",
        desc: "시뮬레이션 결과에 따른 3가지 판정",
        items: [
          "GO: P(t+4) > P(t) × 1.2 이고 Bear 시나리오도 P > 0 → 현재 방향 유지 가속",
          "PIVOT: Base는 성장하지만 방향 수정 시 Bull 시나리오 가능 → θ 재조정",
          "HALT: Bear 시나리오에서 P(t+4) < 0 → 즉시 중단 및 파라미터 재설계",
        ],
      },
    ].map((s, i) => (
      <div key={i} style={{ ...styles.card, borderColor: "#2c3e50", marginBottom: "1rem" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <div style={{ minWidth: "70px", fontFamily: "monospace", fontSize: "0.7rem", color: "#3498db", fontWeight: 700, paddingTop: "0.2rem" }}>{s.step}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, color: "#e8e8e8", marginBottom: "0.25rem" }}>{s.title}</div>
            <div style={{ fontSize: "0.8rem", color: "#7f8c8d", marginBottom: "0.75rem" }}>{s.desc}</div>
            <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
              {s.items.map((item, j) => (
                <li key={j} style={{ fontSize: "0.82rem", color: "#95a5a6", marginBottom: "0.3rem", lineHeight: 1.5 }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const MigrationGuides = () => (
  <div>
    <h2 style={styles.sectionTitle}>
      <span style={styles.accent}>08</span> Migration Guides
      <span style={styles.subtitle}> — 기존 프레임워크 → SVF 전환 프로토콜</span>
    </h2>
    <p style={styles.lead}>
      기존 도구 사용자가 SVF로 진입하는 경로. 동시에 SVF가 기존 도구를 대체가 아닌 심화·확장한다는 것을 보여준다.
    </p>

    {[
      {
        from: "SWOT Analysis",
        color: "#3498db",
        mapping: [
          { original: "Strengths (내부 강점)", svf: "Leverage Scalar (S₂) — 높은 ∂P/∂S를 가진 내부 변수" },
          { original: "Weaknesses (내부 약점)", svf: "Resistance (R) — 내부 마찰 소스" },
          { original: "Opportunities (외부 기회)", svf: "Field Gravity (+F) — 인력으로 작용하는 외부 벡터" },
          { original: "Threats (외부 위협)", svf: "Field Resistance (-F) — 척력으로 작용하는 외부 벡터" },
        ],
        upgrade: "SWOT는 2×2 매트릭스로 정적 상태를 찍는다. SVF는 각 요소의 크기와 시간변화율(dS/dt)을 추가해 궤적을 계산한다.",
      },
      {
        from: "OKR Framework",
        color: "#e74c3c",
        mapping: [
          { original: "Objective (목표)", svf: "Target Position — V 벡터의 종착 좌표" },
          { original: "Key Results (핵심 결과)", svf: "|V| Magnitude — 벡터 크기의 계기판 수치" },
          { original: "Initiatives (실행 계획)", svf: "R Reduction Actions — 마찰 제거 및 V 증폭 행동" },
          { original: "Confidence Score", svf: "Slingshot η + Field Alignment θ — 성공 확률 계산값" },
        ],
        upgrade: "OKR은 '무엇을 달성할지'를 명시하지만 '왜 안 달성되는지'를 설명하지 못한다. SVF는 R, θ, η로 미달성 원인을 수치로 진단한다.",
      },
      {
        from: "Porter's Five Forces",
        color: "#f39c12",
        mapping: [
          { original: "Competitive Rivalry", svf: "Field Resistance — 경쟁사들의 합성 척력 벡터" },
          { original: "Supplier Power", svf: "R Source — 공급망 마찰 계수" },
          { original: "Buyer Power", svf: "F Direction — 고객 수요 벡터의 방향과 강도" },
          { original: "Threat of Substitution", svf: "Field Disruption — 기존 F 구조를 변형시키는 외부 충격" },
          { original: "Threat of New Entry", svf: "Competitive Field Turbulence — F 예측 불가능성 증가" },
        ],
        upgrade: "Porter는 산업 구조의 정적 사진이다. SVF는 이 5가지 힘이 시간에 따라 어떻게 변하고 기업의 V에 어떤 각도로 충돌하는지 동적으로 계산한다.",
      },
      {
        from: "BCG Growth-Share Matrix",
        color: "#9b59b6",
        mapping: [
          { original: "Star (고성장, 고점유)", svf: "V > V_critical, η > 1.2 — 슬링샷 가동 상태" },
          { original: "Cash Cow (저성장, 고점유)", svf: "V ≈ 0, 높은 S — 스칼라 포식, 벡터 정체" },
          { original: "Question Mark (고성장, 저점유)", svf: "|V| < V_critical — 임계 속도 미달" },
          { original: "Dog (저성장, 저점유)", svf: "Collapse State — R > V, F < 0" },
        ],
        upgrade: "BCG는 현재 위치를 찍는다. SVF는 각 상태에서 필요한 정확한 개입(V를 높일지, R을 낮출지, θ를 바꿀지)을 처방한다.",
      },
    ].map((guide, i) => (
      <div key={i} style={{ ...styles.card, borderColor: guide.color, marginBottom: "1.5rem" }}>
        <div style={{ ...styles.cardLabel, color: guide.color }}>MIGRATION FROM</div>
        <div style={{ ...styles.cardTitle, color: guide.color, marginBottom: "1rem" }}>{guide.from}</div>
        <div style={{ display: "grid", gap: "0.4rem", marginBottom: "1rem" }}>
          {guide.mapping.map((m, j) => (
            <div key={j} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "0.5rem", background: "rgba(255,255,255,0.03)", borderRadius: "4px" }}>
              <div style={{ minWidth: "200px", fontSize: "0.78rem", color: "#7f8c8d" }}>{m.original}</div>
              <div style={{ fontSize: "0.12rem", color: "#2c3e50" }}>→</div>
              <div style={{ fontSize: "0.8rem", color: "#c8d6e5" }}>{m.svf}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: "0.82rem", color: "#7f8c8d", lineHeight: 1.6, padding: "0.75rem", background: "rgba(255,255,255,0.03)", borderRadius: "4px", borderLeft: `2px solid ${guide.color}50` }}>
          <strong style={{ color: guide.color }}>SVF 업그레이드:</strong> {guide.upgrade}
        </div>
      </div>
    ))}
  </div>
);

const FullArchitecture = () => (
  <div>
    <h2 style={styles.sectionTitle}>
      <span style={styles.accent}>09</span> SVF v2.0 Full Architecture
      <span style={styles.subtitle}> — 통합 설계도</span>
    </h2>

    <div style={styles.formulaBlock}>
      <div style={styles.formulaTitle}>SVF v2.0 Master Equation</div>
      <div style={styles.formula}>
               [(ωs·S + ωv·V + ωf·F + Σαf) × Παm × cos(θ)]
P(t) =  ─────────────────────────────────────────────────  × η(θ_VF)
                              1 + R

Where:
  V_optimal   = ∇S (gradient navigation — NEW)
  η(θ_VF)     = Slingshot coefficient (NEW)
  V_critical  = R_static × F_resistance / (S × Παm) (NEW)
  S(t+1)      = S(t) + ΔS(V,t) (recursive feedback — NEW)
  F(t+1)      = f(S(t+1), external_events) (recursive — NEW)
      </div>
    </div>

    <h3 style={styles.h3}>v1.0 → v1.1 → v2.0 진화 지도</h3>
    <div style={styles.tableWrap}>
      <div style={styles.tableHeader}>
        <div style={{ flex: 2 }}>구성 요소</div>
        <div style={{ flex: 3 }}>v1.0</div>
        <div style={{ flex: 3 }}>v1.1</div>
        <div style={{ flex: 3 }}>v2.0 (신규)</div>
      </div>
      {[
        ["Core Equation", "O = |V| × cos(θ) × F", "P = [(ωs·S + ωv·V + ωf·F + Σαf) × Παm × cos(θ)] / (1+R)", "v1.1 + Slingshot η × Recursive Feedback"],
        ["Vector Direction", "사용자 판단으로 설정", "θ 정렬도 측정 추가", "V_optimal = ∇S (수학적 도출)"],
        ["Feedback", "없음 (정적 모델)", "없음", "Phase Dynamics Engine (재귀 루프)"],
        ["Minimum Threshold", "없음", "없음", "Critical Velocity Theorem"],
        ["Field Usage", "저항으로만 취급", "저항으로만 취급", "Slingshot η: F를 추진력으로 전환"],
        ["Domain Modules", "없음", "미완성 언급", "4개 도메인 Alpha Catalog 완성"],
        ["Simulation", "사례 분석만 가능", "파라미터 정의 추가", "3-Cycle Trajectory Engine"],
        ["Migration Guides", "없음", "없음", "SWOT/OKR/Porter/BCG 전환 프로토콜"],
        ["Operation Mode", "진단 중심", "진단+예측+처방 (Tri-Modal)", "동일 + 재귀 예측 가능"],
        ["Philosophical Frame", "시스템 상태 분석", "미래 엔지니어링 도구", "Position vs Positioning 존재론"],
      ].map(([a, b, c, d], i) => (
        <div key={i} style={{ ...styles.tableRow, background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
          <div style={{ flex: 2, fontWeight: 600, color: "#c8d6e5", fontSize: "0.82rem" }}>{a}</div>
          <div style={{ flex: 3, fontSize: "0.75rem", color: "#5d6d7e" }}>{b}</div>
          <div style={{ flex: 3, fontSize: "0.75rem", color: "#7f8c8d" }}>{c}</div>
          <div style={{ flex: 3, fontSize: "0.78rem", color: "#2ecc71" }}>{d}</div>
        </div>
      ))}
    </div>

    <div style={{ ...styles.callout, borderColor: "#e74c3c", background: "rgba(231,76,60,0.06)" }}>
      <strong style={{ color: "#e74c3c" }}>메피스토펠레스의 최종 판정</strong><br /><br />
      SVF v2.0이 완성되면 이 프레임워크는 3개의 희귀한 동시 조건을 충족한다:<br /><br />
      <strong style={{ color: "#e8e8e8" }}>①</strong> 수학적으로 반증 가능 (falsifiable) — 비과학적 경영 도구와 구별됨<br />
      <strong style={{ color: "#e8e8e8" }}>②</strong> 도메인 독립적 (domain-agnostic) — 개인부터 국가 경제까지 동일 언어<br />
      <strong style={{ color: "#e8e8e8" }}>③</strong> 처방적 (prescriptive) — "무슨 일이 일어났나"가 아니라 "무엇을 해야 하나"를 출력<br /><br />
      단, 아직 해결되지 않은 약점이 하나 있다:<br />
      <em style={{ color: "#bdc3c7" }}>
        V_optimal = ∇S 가 수학적으로 우아하지만, 현실에서 S의 편미분을 어떻게 정확히 측정하는가?
        이 계측 문제가 해결되지 않으면 Gradient Navigation은 이론으로만 남는다.
        v2.0 이후의 연구 과제는 바로 이것이다.
      </em>
    </div>
  </div>
);

const CONTENT = { gap: GapAnalysis, positioning: PositioningLayer, gradient: GradientNavigation, feedback: FeedbackLoop, critical: CriticalVelocity, sdk: DomainSDK, simulation: SimulationProtocol, migration: MigrationGuides, architecture: FullArchitecture };

const styles = {
  root: { background: "#0d1117", minHeight: "100vh", color: "#c8d6e5", fontFamily: "'Georgia', 'Times New Roman', serif", display: "flex" },
  nav: { width: "220px", minWidth: "220px", background: "#080c10", borderRight: "1px solid #1a2332", padding: "2rem 0", position: "sticky", top: 0, height: "100vh", overflowY: "auto" },
  navTitle: { fontSize: "0.65rem", color: "#2c3e50", letterSpacing: "0.15em", fontWeight: 700, padding: "0 1.5rem", marginBottom: "1rem", fontFamily: "monospace" },
  navItem: (active) => ({ display: "block", padding: "0.6rem 1.5rem", fontSize: "0.78rem", color: active ? "#c8d6e5" : "#4a5568", background: active ? "rgba(255,255,255,0.04)" : "transparent", borderLeft: active ? "2px solid #e74c3c" : "2px solid transparent", cursor: "pointer", transition: "all 0.15s", textDecoration: "none", fontFamily: "monospace" }),
  main: { flex: 1, maxWidth: "900px", padding: "3rem", overflowY: "auto" },
  header: { marginBottom: "3rem", borderBottom: "1px solid #1a2332", paddingBottom: "2rem" },
  title: { fontSize: "1.5rem", fontWeight: 700, color: "#e8e8e8", marginBottom: "0.5rem", letterSpacing: "-0.02em" },
  titleSub: { fontSize: "0.82rem", color: "#3498db", fontFamily: "monospace", letterSpacing: "0.08em" },
  version: { display: "inline-block", background: "rgba(231,76,60,0.1)", border: "1px solid rgba(231,76,60,0.3)", color: "#e74c3c", padding: "0.2rem 0.6rem", borderRadius: "3px", fontSize: "0.7rem", fontFamily: "monospace", marginTop: "0.5rem" },
  sectionTitle: { fontSize: "1.3rem", fontWeight: 700, color: "#e8e8e8", marginBottom: "1rem", display: "flex", alignItems: "baseline", gap: "0.75rem" },
  accent: { color: "#e74c3c", fontFamily: "monospace", fontSize: "0.75rem" },
  subtitle: { fontSize: "0.8rem", color: "#5d6d7e", fontWeight: 400, fontFamily: "monospace" },
  lead: { color: "#95a5a6", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.9rem" },
  h3: { fontSize: "0.95rem", fontWeight: 700, color: "#c8d6e5", marginTop: "1.5rem", marginBottom: "0.75rem", letterSpacing: "0.02em" },
  tableWrap: { border: "1px solid #1a2332", borderRadius: "6px", overflow: "hidden", marginBottom: "2rem" },
  tableHeader: { display: "flex", gap: "1rem", padding: "0.7rem 1rem", background: "#0d1520", borderBottom: "1px solid #1a2332", fontSize: "0.68rem", color: "#4a5568", fontFamily: "monospace", letterSpacing: "0.08em", fontWeight: 700 },
  tableRow: { display: "flex", gap: "1rem", padding: "0.7rem 1rem", borderBottom: "1px solid #0d1520" },
  badge: { padding: "0.2rem 0.5rem", borderRadius: "3px", fontSize: "0.65rem", fontWeight: 700, fontFamily: "monospace" },
  callout: { background: "rgba(52,152,219,0.06)", border: "1px solid rgba(52,152,219,0.2)", borderRadius: "6px", padding: "1.25rem 1.5rem", marginBottom: "2rem", fontSize: "0.85rem", color: "#95a5a6", lineHeight: 1.8 },
  formulaBlock: { background: "#060a0f", border: "1px solid #1a2332", borderRadius: "6px", padding: "1.25rem 1.5rem", marginBottom: "1.5rem" },
  formulaTitle: { fontSize: "0.65rem", color: "#3498db", fontFamily: "monospace", letterSpacing: "0.1em", fontWeight: 700, marginBottom: "0.75rem" },
  formula: { fontFamily: "monospace", fontSize: "0.82rem", color: "#c8d6e5", lineHeight: 1.9, whiteSpace: "pre-wrap", wordBreak: "break-word" },
  formulaNote: { marginTop: "0.75rem", fontSize: "0.78rem", color: "#5d6d7e", lineHeight: 1.6, borderTop: "1px solid #1a2332", paddingTop: "0.75rem" },
  twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" },
  threeCol: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", marginBottom: "1.5rem" },
  card: { background: "rgba(255,255,255,0.02)", border: "1px solid #1a2332", borderRadius: "8px", padding: "1.25rem" },
  cardLabel: { fontSize: "0.62rem", fontFamily: "monospace", letterSpacing: "0.12em", fontWeight: 700, marginBottom: "0.4rem", color: "#7f8c8d" },
  cardTitle: { fontSize: "1.1rem", fontWeight: 700, color: "#e8e8e8", marginBottom: "0.75rem" },
  cardDesc: { fontSize: "0.82rem", color: "#7f8c8d", lineHeight: 1.7 },
  tab: { padding: "0.4rem 0.9rem", border: "1px solid", borderRadius: "4px", cursor: "pointer", fontSize: "0.75rem", fontFamily: "monospace", transition: "all 0.15s", background: "transparent" },
};

export default function SVFFramework() {
  const [active, setActive] = useState("gap");
  const ActiveSection = CONTENT[active];

  return (
    <div style={styles.root}>
      <nav style={styles.nav}>
        <div style={styles.navTitle}>SVF FRAMEWORK v2.0</div>
        {sections.map((s) => (
          <div key={s.id} onClick={() => setActive(s.id)} style={styles.navItem(active === s.id)}>
            {s.label}
          </div>
        ))}
        <div style={{ padding: "2rem 1.5rem 0", borderTop: "1px solid #1a2332", marginTop: "1rem" }}>
          <div style={{ fontSize: "0.62rem", color: "#2c3e50", lineHeight: 1.6, fontFamily: "monospace" }}>
            VOID PRESS<br />
            Research Division<br />
            Architecture Spec<br />
            2026.03
          </div>
        </div>
      </nav>

      <main style={styles.main}>
        <div style={styles.header}>
          <div style={styles.titleSub}>SCALAR-VECTOR-FIELD FRAMEWORK</div>
          <h1 style={styles.title}>Universal Analytical Engine — Architecture v2.0</h1>
          <div style={{ fontSize: "0.82rem", color: "#5d6d7e", lineHeight: 1.7, marginTop: "0.5rem" }}>
            대화 분석 기반 Gap Resolution + Phase Dynamics + Domain SDK 통합 설계도
          </div>
          <div style={styles.version}>UPGRADE SPECIFICATION — v1.1 → v2.0</div>
        </div>

        <ActiveSection />
      </main>
    </div>
  );
}
