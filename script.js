/* =========================
   Q5 UI
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
  mada: 6, mongolia: 6, nm_usa: 6, congo: 6,
  mexico: 10, wa_usa: 10, ca_usa: 10,
  bangladesh: 10, vietnam_hcm: 10, vietnam_dn: 10, vietnam_dninh: 10, india: 10,
  china_gd: 10, china_gx: 10, china_gz: 10, china_sx: 10, china_sc: 10,
  china_cq: 10, china_tj: 10, china_hn: 10, china_hn2: 10, china_hb: 10,
  cambodia: 10,
  lebanon: 14, bahrain: 14, saudi: 14, syria: 14, uae: 14, yemen: 14,
  oman: 14, jordan: 14, iraq: 14, iran: 14, israel: 14, qatar: 14, kuwait: 14,
  ethiopia: 21
};

/* =========================
   국가별 감염병 이름
========================= */
const countryDisease = {
  mada: "페스트",
  mongolia: "페스트",
  nm_usa: "페스트",
  congo: "페스트",
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
  ethiopia: "마버그열"
};

/* =========================
   기준일 계산
========================= */
function isWithinRiskPeriod(region, departDate, arrivalDate) {
  if (!region || !departDate || !arrivalDate) return false;
  if (!countryDays[region]) return false;

  const depart = new Date(departDate);
  const arrival = new Date(arrivalDate);
  const diffDays = (arrival - depart) / (1000 * 60 * 60 * 24);

  return diffDays <= countryDays[region];
}
function validateForm(f) {
  // Q1~Q7 선택 여부
  for (let i = 1; i <= 7; i++) {
    if (!f.get(`q${i}`)) {
      alert(`Q${i}번 문항을 선택해주세요.`);
      return false;
    }
  }

  // 기타 필수 선택
  if (!f.get("depart48")) {
    alert("48시간 이내 출항 여부를 선택해주세요.");
    return false;
  }

  if (!f.get("boarding")) {
    alert("승선자 여부를 선택해주세요.");
    return false;
  }

  if (!f.get("dock")) {
    alert("접안 여부를 선택해주세요.");
    return false;
  }

  // Q5 선택 시 상세 입력
  if (f.get("q5") === "yes") {
    if (
      !f.get("q5_region") ||
      !f.get("q5_departure_date") ||
      !f.get("q5_arrival_date")
    ) {
      alert("Q5 선택 시 출항지역과 출항일·입항일을 모두 입력해주세요.");
      return false;
    }

    // 날짜 역전 방지
    const depart = new Date(f.get("q5_departure_date"));
    const arrival = new Date(f.get("q5_arrival_date"));

    if (arrival < depart) {
      alert("입항일은 출항일 이후여야 합니다.");
      return false;
    }
  }

  return true;
}


/* =========================
   결과 계산
========================= */
function calculateResult() {
  const f = new FormData(document.getElementById("surveyForm"));
   if (!validateForm(f)) return;
  const q = n => f.get(`q${n}`);

  const depart48 = f.get("depart48") === "yes";
  const boarding = f.get("boarding") === "yes";
  const dock = f.get("dock") === "yes";

  const region = f.get("q5_region");
  const departDate = f.get("q5_departure_date");
  const arrivalDate = f.get("q5_arrival_date");

 /* 1️⃣ Q1~Q4 → 승선검역 */
if ([1,2,3,4].some(i => q(i) === "yes")) {
  return showResult("승선검역", "Q1~Q4 중 위험요소 존재");
}

/* 2️⃣ 조사생략 */
const hasQ567 = [5,6,7].some(i => q(i) === "yes");
if (hasQ567 && depart48 && !boarding && !dock) {
  return showResult("조사생략", "조사생략 요건 충족");
}

/* 3️⃣ Q5 기준일 판단 */
if (q(5) === "yes" && isWithinRiskPeriod(region, departDate, arrivalDate)) {
  return showResult(
    "승선검역",
    `${regionLabel(region)} 출항 / ${countryDisease[region]} 기준일 이내 (${countryDays[region]}일)`
  );
}

/* 4️⃣ Q6 + 접안 */
if (q(6) === "yes" && dock) {
  return showResult("승선검역", "선원 교대 + 접안");
}

/* 5️⃣ Q7 */
if (q(7) === "yes") {
  return showResult("승선검역", "위생관리 증명서 미소지/만료");
}

/* 6️⃣ 기본값 */
return showResult("서류심사", "추가 위험 요소 없음");
}

/* =========================
   결과 출력
========================= */
function showResult(resultText, reasonText) {
  const resultBox = document.getElementById("result");

  resultBox.innerHTML = "";
  resultBox.style.textAlign = "center";
  resultBox.style.marginTop = "20px";

  // 결과 텍스트
  const title = document.createElement("div");
  title.textContent = resultText;
  title.style.fontSize = "28px";
  title.style.fontWeight = "bold";

  // 색상
  if (resultText === "승선검역") {
    title.style.color = "#c62828";
  } else if (resultText === "서류심사") {
    title.style.color = "#f9a825";
  } else if (resultText === "조사생략") {
    title.style.color = "#2e7d32";
  }

  resultBox.appendChild(title);

  // 사유가 있을 때만 표시
  if (reasonText) {
    const reason = document.createElement("div");
    reason.textContent = `사유: ${reasonText}`;
    reason.style.fontSize = "15px";
    reason.style.marginTop = "10px";
    reason.style.color = "#555";

    resultBox.appendChild(reason);
  }
}

