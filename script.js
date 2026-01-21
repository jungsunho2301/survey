/* =========================
   Q5 UI 제어
========================= */
function toggleQ5(show) {
  document.getElementById("q5Detail").style.display = show ? "block" : "none";
}

/* =========================
   지역 표시용 라벨
========================= */
function regionLabel(value) {
  const labels = {
    mada: "마다가스카르",
    mongolia: "몽골",
    nm_usa: "미국(뉴멕시코주)",
    wa_usa: "미국(워싱턴주)",
    ca_usa: "미국(캘리포니아주)",
    bangladesh: "방글라데시",
    vietnam_hcm: "베트남(호찌민)",
    vietnam_dn: "베트남(동나이)",
    vietnam_dninh: "베트남(따이닌)",
    india: "인도",
    china_gd: "중국(광둥성)",
    china_gx: "중국(광시좡족자치구)",
    china_gz: "중국(구이저우성)",
    china_sx: "중국(산시성·Shaanxi)",
    china_sc: "중국(쓰촨성)",
    china_cq: "중국(충칭시)",
    china_tj: "중국(텐진시)",
    china_hn: "중국(허난성)",
    china_hn2: "중국(후난성)",
    china_hb: "중국(후베이성)",
    cambodia: "캄보디아",
    saudi: "사우디아라비아",
    uae: "아랍에미리트",
    qatar: "카타르",
    kuwait: "쿠웨이트",
    iran: "이란",
    iraq: "이라크",
    lebanon: "레바논",
    bahrain: "바레인",
    syria: "시리아",
    yemen: "예멘",
    oman: "오만",
    jordan: "요르단",
    israel: "이스라엘",
    congo: "콩고민주공화국",
    ethiopia: "에티오피아"
  };
  return labels[value] || "미선택";
}

/* =========================
   국가별 감염병 기준일
========================= */
const countryDays = {
  // 페스트 6일
  mada: 6, mongolia: 6, nm_usa: 6, congo: 6,
  // AI 10일
  mexico: 10, wa_usa: 10, ca_usa: 10,
  bangladesh: 10, vietnam_hcm: 10, vietnam_dn: 10, vietnam_dninh: 10, india: 10,
  china_gd: 10, china_gx: 10, china_gz: 10, china_sx: 10, china_sc: 10, china_cq: 10,
  china_tj: 10, china_hn: 10, china_hn2: 10, china_hb: 10,
  cambodia: 10,
  // MERS 14일
  lebanon: 14, bahrain: 14, saudi: 14, syria: 14, uae: 14, yemen: 14,
  oman: 14, jordan: 14, iraq: 14, iran: 14, israel: 14, qatar: 14, kuwait: 14,
  // 마버그열 21일
  ethiopia: 21
};

/* =========================
   국가별 감염병 이름
========================= */
const countryDisease = {
  // 페스트
  mada: "페스트",
  mongolia: "페스트",
  nm_usa: "페스트",
  congo: "페스트",
  // 동물인플루엔자
  mexico: "동물인플루엔자 인체감염증",
  wa_usa: "동물인플루엔자 인체감염증",
  ca_usa: "동물인플루엔자 인체감염증",
  bangladesh: "동물인플루엔자 인체감염증",
  vietnam_hcm: "동물인플루엔자 인체감염증",
  vietnam_dn: "동물인플루엔자 인체감염증",
  vietnam_dninh: "동물인플루엔자 인체감염증",
  india: "동물인플루엔자 인체감염증",
  china_gd: "동물인플루엔자 인체감염증",
  china_gx: "동물인플루엔자 인체감염증",
  china_gz: "동물인플루엔자 인체감염증",
  china_sx: "동물인플루엔자 인체감염증",
  china_sc: "동물인플루엔자 인체감염증",
  china_cq: "동물인플루엔자 인체감염증",
  china_tj: "동물인플루엔자 인체감염증",
  china_hn: "동물인플루엔자 인체감염증",
  china_hn2: "동물인플루엔자 인체감염증",
  china_hb: "동물인플루엔자 인체감염증",
  cambodia: "동물인플루엔자 인체감염증",
  // MERS
  lebanon: "중동호흡기증후군(MERS)",
  bahrain: "중동호흡기증후군(MERS)",
  saudi: "중동호흡기증후군(MERS)",
  syria: "중동호흡기증후군(MERS)",
  uae: "중동호흡기증후군(MERS)",
  yemen: "중동호흡기증후군(MERS)",
  oman: "중동호흡기증후군(MERS)",
  jordan: "중동호흡기증후군(MERS)",
  iraq: "중동호흡기증후군(MERS)",
  iran: "중동호흡기증후군(MERS)",
  israel: "중동호흡기증후군(MERS)",
  qatar: "중동호흡기증후군(MERS)",
  kuwait: "중동호흡기증후군(MERS)",
  // 마버그열
  ethiopia: "마버그열"
};

/* =========================
   필수 질문명 매핑 (친절한 alert용)
========================= */
const questionLabels = {
  q1: "Q1. 검역감염병 환자/의심환자 여부",
  q2: "Q2. 선박 내 사망자 발생 여부",
  q3: "Q3. 발열·설사·구토 증상자 여부",
  q4: "Q4. 감염병 매개체 흔적 여부",
  q5: "Q5. 중점검역관리지역 출항/경유 여부",
  "Q5 승선국가": "Q5. 출항·경유지역 선택",
  "Q5 승선일자": "Q5. 출항일 입력",
  "Q5 입항예정일": "Q5. 입항 예정일 입력",
  q6: "Q6. 선원 교대 여부",
  q7: "Ⅳ. 선박위생관리 증명서 여부",
  depart48: "Ⅴ. 기타사항 – 48시간 이내 출항 여부",
  boarding: "Ⅴ. 기타사항 – 승선자 존재 여부",
  dock: "Ⅴ. 기타사항 – 선박 접안 여부"
};

/* =========================
   결과 계산 로직
========================= */
function calculateResult() {
  const form = document.getElementById("surveyForm");
  const f = new FormData(form);

  /* 필수 질문 체크 */
  const requiredQuestions = [
    "q1","q2","q3","q4","q5","q6","q7","depart48","boarding","dock"
  ];

  let missing = [];
  for (let q of requiredQuestions) {
    if (!f.get(q)) missing.push(q);
  }

  // Q5 상세
  if (f.get("q5") === "yes") {
    if (!f.get("q5_region")) missing.push("Q5 승선국가");
    if (!f.get("q5_departure_date")) missing.push("Q5 승선일자");
    if (!f.get("q5_arrival_date")) missing.push("Q5 입항예정일");
  }

  if (missing.length > 0) {
    alert("다음 항목을 선택해주세요:\n" + missing.map(q => questionLabels[q] || q).join("\n"));
    return;
  }

  // 1️⃣ 즉시 승선검역 Q1~Q4
  for (let q of ["q1","q2","q3","q4"]) {
    if (f.get(q) === "yes") {
      return showResult("승선검역","즉시 승선검역 대상 항목(Q1~Q4) 해당");
    }
  }

  const q5 = f.get("q5");
  const q6 = f.get("q6");
  const q7 = f.get("q7");
  const depart48 = f.get("depart48") === "yes";
  const boarding = f.get("boarding") === "yes";
  const dock = f.get("dock") === "yes";

  /* -------------------------
     Q5 국가 기준일 처리
  ------------------------- */
  if (q5 === "yes") {
    const region = f.get("q5_region");
    const depart = new Date(f.get("q5_departure_date"));
    const arrival = new Date(f.get("q5_arrival_date"));

    if (depart > arrival) {
      alert("승선일자는 입항예정일보다 늦을 수 없습니다.");
      return;
    }

    const daysLimit = countryDays[region];
    const diseaseName = countryDisease[region] || ""; // 감염병 이름

    if (!daysLimit) {
      return showResult("서류검역","선택한 국가("+regionLabel(region)+") 기준일 정보 없음");
    }

    const diffDays = (arrival - depart)/(1000*60*60*24);

    if (diffDays > daysLimit) {
      return showResult("서류검역",
        `${diseaseName} 관련 중점검역관리지역(${regionLabel(region)}) 출항 또는 경유 (${daysLimit}일 초과)`
      );
    } else {
      return showResult("승선검역",
        `${diseaseName} 관련 중점검역관리지역(${regionLabel(region)}) 출항 또는 경유 (${daysLimit}일 이내)`
      );
    }
  }

  /* -------------------------
     Q6 선원 교대
  ------------------------- */
  if (q6 === "yes") {
    if (dock) return showResult("승선검역","선원 교대 발생 및 선박 접안");
    if (!dock && boarding) return showResult("서류검역","선원 교대 발생, 비접안 상태이나 하선자 있음");
    if (depart48 && !boarding) return showResult("서류검역","선원 교대 발생, 48시간 이내 출항 및 승선자 없음");
    return showResult("서류검역","선원 교대 발생 (비접안)");
  }

  /* -------------------------
     Q7 위생증명서
  ------------------------- */
  if (q7 === "yes") {
    if (depart48 && !boarding) return showResult("서류검역","선박위생관리 증명서 미소지, 48시간 이내 출항");
    return showResult("승선검역","선박위생관리(면제) 증명서 미소지 또는 유효기간 만료");
  }

  /* -------------------------
     기본값
  ------------------------- */
  showResult("서류검역","검역 관련 특이사항 없음");
}

/* =========================
   결과 출력
========================= */
function showResult(result, reason) {
  document.getElementById("result").innerHTML = `
    <h2>검역 분류 결과</h2>
    <p class="result ${result}"><strong>${result}</strong></p>
    <p class="reason">판단 근거: ${reason}</p>
  `;
}
