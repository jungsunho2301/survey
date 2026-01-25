/* =========================
   1. 상세 입력창 토글 함수
========================= */
function toggleQ5(show) {
  const detailBox = document.getElementById("q5Detail");
  if (detailBox) detailBox.style.display = show ? "block" : "none";
}

function toggleQ6(show) {
  const detailBox = document.getElementById("q6Detail");
  if (detailBox) detailBox.style.display = show ? "block" : "none";
}

/* =========================
   2. 데이터 정의 (Q5 중점검역지역용)
========================= */
function regionLabel(value) {
  const labels = {
    lebanon: "레바논", mada: "마다가스카르", mexico: "멕시코", mongolia: "몽골",
    nm_usa: "미국(뉴멕시코주)", wa_usa: "미국(워싱턴주)", ca_usa: "미국(캘리포니아주)",
    bahrain: "바레인", bangladesh: "방글라데시", vietnam_dn: "베트남(동나이)",
    vietnam_dninh: "베트남(따이닌)", vietnam_hcm: "베트남(호찌민)", saudi: "사우디아라비아",
    syria: "시리아", uae: "아랍에미리트", ethiopia: "에티오피아", yemen: "예멘",
    oman: "오만", jordan: "요르단", iraq: "이라크", iran: "이란", israel: "이스라엘",
    india: "인도", china_gd: "중국(광둥성)", china_gx: "중국(광시좡족자치구)",
    china_gz: "중국(구이저우성)", china_sx: "중국(산시성·Shaanxi)", china_sc: "중국(쓰촨성)",
    china_tj: "중국(텐진시)", china_cq: "중국(충칭시)", china_hn: "중국(허난성)",
    china_hn2: "중국(후난성)", china_hb: "중국(후베이성)", qatar: "카타르",
    cambodia: "캄보디아", congo: "콩고민주공화국", kuwait: "쿠웨이트"
  };
  return labels[value] || "미선택";
}

const countryDays = {
  mada: 6, mongolia: 6, nm_usa: 6, congo: 6,
  mexico: 10, wa_usa: 10, ca_usa: 10, bangladesh: 10, 
  vietnam_hcm: 10, vietnam_dn: 10, vietnam_dninh: 10, india: 10, 
  china_gd: 10, china_gx: 10, china_gz: 10, china_sx: 10, china_sc: 10, 
  china_cq: 10, china_tj: 10, china_hn: 10, china_hn2: 10, china_hb: 10, 
  cambodia: 10, lebanon: 14, bahrain: 14, saudi: 14, syria: 14, uae: 14, 
  yemen: 14, oman: 14, jordan: 14, iraq: 14, iran: 14, israel: 14, qatar: 14, 
  kuwait: 14, ethiopia: 21
};

const countryDisease = {
  mada: "페스트", mongolia: "페스트", nm_usa: "페스트", congo: "페스트",
  mexico: "동물인플루엔자 인체감염증", wa_usa: "동물인플루엔자 인체감염증", ca_usa: "동물인플루엔자 인체감염증",
  bangladesh: "동물인플루엔자 인체감염증", vietnam_hcm: "동물인플루엔자 인체감염증", vietnam_dn: "동물인플루엔자 인체감염증",
  vietnam_dninh: "동물인플루엔자 인체감염증", india: "동물인플루엔자 인체감염증", 
  china_gd: "동물인플루엔자 인체감염증", china_gx: "동물인플루엔자 인체감염증", china_gz: "동물인플루엔자 인체감염증",
  china_sx: "동물인플루엔자 인체감염증", china_sc: "동물인플루엔자 인체감염증", china_cq: "동물인플루엔자 인체감염증",
  china_tj: "동물인플루엔자 인체감염증", china_hn: "동물인플루엔자 인체감염증", china_hn2: "동물인플루엔자 인체감염증",
  china_hb: "동물인플루엔자 인체감염증", cambodia: "동물인플루엔자 인체감염증",
  lebanon: "MERS", bahrain: "MERS", saudi: "MERS", syria: "MERS", uae: "MERS", 
  yemen: "MERS", oman: "MERS", jordan: "MERS", iraq: "MERS", iran: "MERS", 
  israel: "MERS", qatar: "MERS", kuwait: "MERS", ethiopia: "마버그열"
};

/* =========================
   3. 데이터 정의 (Q6 선원교대용)
========================= */
function regionLabelQ6(value) {
    const labels = {
        // 동물인플루엔자 (10일)
        mexico: "멕시코", iowa_usa: "미국(아이오와주)", wa_usa_q6: "미국(워싱턴주)", ca_usa_q6: "미국(캘리포니아주)",
        bangladesh_ai: "방글라데시", vietnam_se: "베트남(남동부)", india_ai: "인도",
        china_gd_q6: "중국(광둥성)", china_gx_q6: "중국(광시좡족자치구)", china_gz_q6: "중국(구이저우성)",
        china_sx_q6: "중국(산시성)", china_sc_q6: "중국(쓰촨성)", china_yn_q6: "중국(운남성)",
        china_cq_q6: "중국(충칭시)", china_tj_q6: "중국(텐진시)", china_hn_q6: "중국(허난성)",
        china_hn2_q6: "중국(후난성)", china_hb_q6: "중국(후베이성)", cambodia_ai: "캄보디아",

        // MERS (14일)
        lebanon_m: "레바논", bahrain_m: "바레인", saudi_m: "사우디아라비아", syria_m: "시리아",
        uae_m: "아랍에미리트", yemen_m: "예멘", oman_m: "오만", jordan_m: "요르단",
        iraq_m: "이라크", iran_m: "이란", israel_m: "이스라엘", qatar_m: "카타르", kuwait_m: "쿠웨이트",

        // 콜레라 (5일)
        ghana_c: "가나", nigeria_c: "나이지리아", south_sudan_c: "남수단", nepal_c: "네팔",
        niger_c: "니제르", rwanda_c: "르완다", malawi_c: "말라위", mozambique_c: "모잠비크",
        myanmar_c: "미얀마", bangladesh_c: "방글라데시", burundi_c: "부룬디", somalia_c: "소말리아",
        sudan_c: "수단", syria_c: "시리아", afghanistan_c: "아프가니스탄", angola_c: "앙골라",
        haiti_c: "아이티", ethiopia_c: "에티오피아", yemen_c: "예멘", uganda_c: "우간다",
        iraq_c: "이라크", india_c: "인도", zambia_c: "잠비아", zimbabwe_c: "짐바브웨",
        chad_c: "차드", kenya_c: "케냐", comoros_c: "코모로", ivory_coast_c: "코트디부아르",
        congo_c: "콩고", congo_dr_c: "콩고민주공화국", tanzania_c: "탄자니아", togo_c: "토고",
        pakistan_c: "파키스탄", philippines_c: "필리핀",

        // 황열 (6일)
        ghana_y: "가나", gabon_y: "가봉", guyana_y: "가이아나", gambia_y: "감비아",
        guinea_y: "기니", guinea_bissau_y: "기니비사우", nigeria_y: "나이지리아", south_sudan_y: "남수단",
        niger_y: "니제르", liberia_y: "라이베리아", mali_y: "말리", mauritania_y: "모리타니",
        benin_y: "베냉", venezuela_y: "베네수엘라", bolivia_y: "볼리비아", burundi_y: "부룬디",
        burkina_faso_y: "부르키나파소", brazil_y: "브라질", senegal_y: "세네갈", sudan_y: "수단",
        suriname_y: "수리남", sierra_leone_y: "시에라리온", argentina_y: "아르헨티나", angola_y: "앙골라",
        ecuador_y: "에콰도르", ethiopia_y: "에티오피아", uganda_y: "우간다", equatorial_guinea_y: "적도기니",
        car_y: "중앙아프리카공화국", chad_y: "차드", cameroon_y: "카메룬", kenya_y: "케냐",
        ivory_coast_y: "코트디부아르", colombia_y: "콜롬비아", congo_y: "콩고", congo_dr_y: "콩고민주공화국",
        togo_y: "토고", trinidad_y: "트리니다드토바고", panama_y: "파나마", paraguay_y: "파라과이",
        peru_y: "페루", french_guiana_y: "프랑스령 기아나"
    };
    return labels[value] || "미선택";
}

const countryDaysQ6 = {
    // 5일 (콜레라)
    ghana_c: 5, nigeria_c: 5, south_sudan_c: 5, nepal_c: 5, niger_c: 5, rwanda_c: 5, malawi_c: 5, 
    mozambique_c: 5, myanmar_c: 5, bangladesh_c: 5, burundi_c: 5, somalia_c: 5, sudan_c: 5, 
    syria_c: 5, afghanistan_c: 5, angola_c: 5, haiti_c: 5, ethiopia_c: 5, yemen_c: 5, uganda_c: 5, 
    iraq_c: 5, india_c: 5, zambia_c: 5, zimbabwe_c: 5, chad_c: 5, kenya_c: 5, comoros_c: 5, 
    ivory_coast_c: 5, congo_c: 5, congo_dr_c: 5, tanzania_c: 5, togo_c: 5, pakistan_c: 5, philippines_c: 5,
    
    // 6일 (황열)
    ghana_y: 6, gabon_y: 6, guyana_y: 6, gambia_y: 6, guinea_y: 6, guinea_bissau_y: 6, nigeria_y: 6, 
    south_sudan_y: 6, niger_y: 6, liberia_y: 6, mali_y: 6, mauritania_y: 6, benin_y: 6, venezuela_y: 6, 
    bolivia_y: 6, burundi_y: 6, burkina_faso_y: 6, brazil_y: 6, senegal_y: 6, sudan_y: 6, suriname_y: 6, 
    sierra_leone_y: 6, argentina_y: 6, angola_y: 6, ecuador_y: 6, ethiopia_y: 6, uganda_y: 6, 
    equatorial_guinea_y: 6, car_y: 6, chad_y: 6, cameroon_y: 6, kenya_y: 6, ivory_coast_y: 6, 
    colombia_y: 6, congo_y: 6, congo_dr_y: 6, togo_y: 6, trinidad_y: 6, panama_y: 6, paraguay_y: 6, 
    peru_y: 6, french_guiana_y: 6,

    // 10일 (동물인플루엔자)
    mexico: 10, iowa_usa: 10, wa_usa_q6: 10, ca_usa_q6: 10, bangladesh_ai: 10, vietnam_se: 10, 
    india_ai: 10, china_gd_q6: 10, china_gx_q6: 10, china_gz_q6: 10, china_sx_q6: 10, china_sc_q6: 10, 
    china_yn_q6: 10, china_cq_q6: 10, china_tj_q6: 10, china_hn_q6: 10, china_hn2_q6: 10, china_hb_q6: 10, 
    cambodia_ai: 10,

    // 14일 (MERS)
    lebanon_m: 14, bahrain_m: 14, saudi_m: 14, syria_m: 14, uae_m: 14, yemen_m: 14, 
    oman_m: 14, jordan_m: 14, iraq_m: 14, iran_m: 14, israel_m: 14, qatar_m: 14, kuwait_m: 14
};

const countryDiseaseQ6 = {
    ghana_c: "콜레라", nigeria_c: "콜레라", south_sudan_c: "콜레라", nepal_c: "콜레라", niger_c: "콜레라", 
    rwanda_c: "콜레라", malawi_c: "콜레라", mozambique_c: "콜레라", myanmar_c: "콜레라", bangladesh_c: "콜레라", 
    burundi_c: "콜레라", somalia_c: "콜레라", sudan_c: "콜레라", syria_c: "콜레라", afghanistan_c: "콜레라", 
    angola_c: "콜레라", haiti_c: "콜레라", ethiopia_c: "콜레라", yemen_c: "콜레라", uganda_c: "콜레라", 
    iraq_c: "콜레라", india_c: "콜레라", zambia_c: "콜레라", zimbabwe_c: "콜레라", chad_c: "콜레라", 
    kenya_c: "콜레라", comoros_c: "콜레라", ivory_coast_c: "콜레라", congo_c: "콜레라", congo_dr_c: "콜레라", 
    tanzania_c: "콜레라", togo_c: "콜레라", pakistan_c: "콜레라", philippines_c: "콜레라",
    
    ghana_y: "황열", gabon_y: "황열", guyana_y: "황열", gambia_y: "황열", guinea_y: "황열", 
    guinea_bissau_y: "황열", nigeria_y: "황열", south_sudan_y: "황열", niger_y: "황열", liberia_y: "황열", 
    mali_y: "황열", mauritania_y: "황열", benin_y: "황열", venezuela_y: "황열", bolivia_y: "황열", 
    burundi_y: "황열", burkina_faso_y: "황열", brazil_y: "황열", senegal_y: "황열", sudan_y: "황열", 
    suriname_y: "황열", sierra_leone_y: "황열", argentina_y: "황열", angola_y: "황열", ecuador_y: "황열", 
    ethiopia_y: "황열", uganda_y: "황열", equatorial_guinea_y: "황열", car_y: "황열", chad_y: "황열", 
    cameroon_y: "황열", kenya_y: "황열", ivory_coast_y: "황열", colombia_y: "황열", congo_y: "황열", 
    congo_dr_y: "황열", togo_y: "황열", trinidad_y: "황열", panama_y: "황열", paraguay_y: "황열", 
    peru_y: "황열", french_guiana_y: "황열",

    mexico: "AI", iowa_usa: "AI", wa_usa_q6: "AI", ca_usa_q6: "AI", bangladesh_ai: "AI", 
    vietnam_se: "AI", india_ai: "AI", china_gd_q6: "AI", china_gx_q6: "AI", china_gz_q6: "AI", 
    china_sx_q6: "AI", china_sc_q6: "AI", china_yn_q6: "AI", china_cq_q6: "AI", china_tj_q6: "AI", 
    china_hn_q6: "AI", china_hn2_q6: "AI", china_hb_q6: "AI", cambodia_ai: "AI",

    lebanon_m: "MERS", bahrain_m: "MERS", saudi_m: "MERS", syria_m: "MERS", uae_m: "MERS", 
    yemen_m: "MERS", oman_m: "MERS", jordan_m: "MERS", iraq_m: "MERS", iran_m: "MERS", 
    israel_m: "MERS", qatar_m: "MERS", kuwait_m: "MERS"
};

/* =========================
   4. 폼 유효성 검사 (날짜 선후관계 강화)
========================= */
function validateForm(f) {
  for (let i = 1; i <= 7; i++) {
    if (!f.get(`q${i}`)) {
      alert(`Q${i}번 문항을 선택해주세요.`);
      return false;
    }
  }
  if (!f.get("depart48") || !f.get("boarding") || !f.get("dock")) {
    alert("기타사항의 모든 항목을 선택해주세요.");
    return false;
  }
  
  // Q5 날짜 유효성 체크
  if (f.get("q5") === "yes") {
    if (!f.get("q5_region") || !f.get("q5_departure_date") || !f.get("q5_arrival_date")) {
      alert("Q5 상세 항목을 모두 입력해주세요."); return false;
    }
    const d5 = new Date(f.get("q5_departure_date"));
    const a5 = new Date(f.get("q5_arrival_date"));
    if (a5 < d5) {
      alert("Q5: 입항 예정일이 출항일보다 빠를 수 없습니다."); return false;
    }
  }

  // Q6 날짜 유효성 체크 (승선일 vs 입항일)
  if (f.get("q6") === "yes") {
    if (!f.get("q6_region") || !f.get("q6_onboard_date") || !f.get("q6_arrival_date")) {
      alert("Q6 상세 항목을 모두 입력해주세요."); return false;
    }
    const o6 = new Date(f.get("q6_onboard_date"));
    const a6 = new Date(f.get("q6_arrival_date"));
    if (a6 < o6) {
      alert("Q6: 입항 예정일이 승선일보다 빠를 수 없습니다."); return false;
    }
  }
  return true;
}

/* =========================
   5. 결과 계산 메인 함수 (복수 사유 지원)
========================= */
function calculateResult() {
  const f = new FormData(document.getElementById("surveyForm"));
  if (!validateForm(f)) return;

  const q = n => f.get(`q${n}`);
  const reasons = [];
  let isQuarantine = false;

  // 로직 1: Q1~Q4 (즉시 승선검역)
  if ([1,2,3,4].some(i => q(i) === "yes")) {
    isQuarantine = true;
    reasons.push("STEP 1: 즉시 승선검역 사유 확인됨");
  }

  // 로직 2: Q5 중점검역지역 잠복기 체크
  if (q(5) === "yes") {
    const region = f.get("q5_region");
    const diff = (new Date(f.get("q5_arrival_date")) - new Date(f.get("q5_departure_date"))) / (1000 * 60 * 60 * 24);
    if (diff <= countryDays[region]) {
      isQuarantine = true;
      reasons.push(`Q5: ${regionLabel(region)} 출항 / ${countryDisease[region]} 잠복기 위험기간 내 입항 (${countryDays[region]}일)`);
    }
  }

  // 로직 3: Q6 선원교대 잠복기 체크 (요청 문구 반영)
  if (q(6) === "yes") {
    const region = f.get("q6_region");
    const diff = (new Date(f.get("q6_arrival_date")) - new Date(f.get("q6_onboard_date"))) / (1000 * 60 * 60 * 24);
    if (diff <= countryDaysQ6[region]) {
      isQuarantine = true;
      reasons.push(`Q6: ${regionLabelQ6(region)} 승선 / ${countryDiseaseQ6[region]} 최대 잠복기간 이내 선원 교대 (${countryDaysQ6[region]}일)`);
    }
  }

  // 로직 4: Q6 단순 교대 발생 + 접안 시 (잠복기 외)
  if (q(6) === "yes" && f.get("dock") === "yes") {
    if (!reasons.some(r => r.includes("Q6:"))) {
        isQuarantine = true;
        reasons.push("Q6: 검역관리지역 선원 교대 발생 + 선박 접안");
    }
  }

  // 로직 5: Q7 증명서 부적합
  if (q(7) === "yes") {
    isQuarantine = true;
    reasons.push("Q7: 선박위생관리 증명서 부적합");
  }

  // 최종 결과 출력
  if (isQuarantine) {
    renderResult("승선검역", reasons.join("<br>"), "#ef4444");
  } else {
    const depart48 = f.get("depart48") === "yes";
    const boarding = f.get("boarding") === "yes";
    const dock = f.get("dock") === "yes";
    if (depart48 && !boarding && !dock && q(6) === "no") {
        renderResult("조사생략", "조사생략 요건 충족", "#22c55e");
    } else {
        let note = "추가 위험 요소 없음";
        if (q(6) === "yes") note = "선원 교대 발생 (잠복기 경과)";
        renderResult("서류심사", note, "#f59e0b");
    }
  }
}

/* =========================
   6. 디자인 출력 및 스크롤 제어
========================= */
function renderResult(title, reason, color) {
  const resultBox = document.getElementById("result");
  resultBox.style.display = "block";
  resultBox.style.borderTop = `6px solid ${color}`;
  resultBox.innerHTML = `
    <div style="text-align:center; padding: 10px 0;">
      <p style="font-size:14px; color:#64748b; margin-bottom:5px; font-weight:500;">자동 판별 결과</p>
      <h2 style="font-size:32px; color:${color}; margin:0 0 15px 0; font-weight:900; letter-spacing:-1px;">${title}</h2>
      <div style="background:#f1f5f9; padding:15px; border-radius:10px; font-size:15px; color:#334155; line-height:1.6; text-align:left; border:1px solid #e2e8f0;">
        <strong style="color:${color}">● 사유:</strong><br>${reason}
      </div>
      <button onclick="window.scrollTo({top:0, behavior:'smooth'}); setTimeout(()=>location.reload(), 500);" 
              style="margin-top:20px; background:white; border:1px solid #cbd5e1; padding:10px 20px; border-radius:8px; cursor:pointer; font-size:14px; color:#64748b; font-weight:500;">
        처음부터 다시하기
      </button>
    </div>
  `;
  setTimeout(() => { resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 100);
}
