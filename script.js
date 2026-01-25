/* =========================
   1. Q5 상세 입력창 토글 (디자인 매칭용)
========================= */
function toggleQ5(show) {
  const detailBox = document.getElementById("q5Detail");
  if (detailBox) {
    detailBox.style.display = show ? "block" : "none";
  }
}

/* =========================
   2. 데이터 정의 (가나다순 정렬)
========================= */
function regionLabel(value) {
  const labels = {
    lebanon: "레바논",
    mada: "마다가스카르",
    mexico: "멕시코",
    mongolia: "몽골",
    nm_usa: "미국(뉴멕시코주)",
    wa_usa: "미국(워싱턴주)",
    ca_usa: "미국(캘리포니아주)",
    bahrain: "바레인",
    bangladesh: "방글라데시",
    vietnam_dn: "베트남(동나이)",
    vietnam_dninh: "베트남(따이닌)",
    vietnam_hcm: "베트남(호찌민)",
    saudi: "사우디아라비아",
    syria: "시리아",
    uae: "아랍에미리트",
    ethiopia: "에티오피아",
    yemen: "예멘",
    oman: "오만",
    jordan: "요르단",
    iraq: "이라크",
    iran: "이란",
    israel: "이스라엘",
    india: "인도",
    china_gd: "중국(광둥성)",
    china_gx: "중국(광시좡족자치구)",
    china_gz: "중국(구이저우성)",
    china_sx: "중국(산시성·Shaanxi)",
    china_sc: "중국(쓰촨성)",
    china_tj: "중국(텐진시)",
    china_cq: "중국(충칭시)",
    china_hn: "중국(허난성)",
    china_hn2: "중국(후난성)",
    china_hb: "중국(후베이성)",
    qatar: "카타르",
    cambodia: "캄보디아",
    congo: "콩고민주공화국",
    kuwait: "쿠웨이트"
  };
  return labels[value] || "미선택";
}

const countryDays = {
  // 6일 (페스트 등)
  mada: 6, mongolia: 6, nm_usa: 6, congo: 6,
  // 10일 (동물인플루엔자 인체감염증 등)
  mexico: 10, wa_usa: 10, ca_usa: 10, bangladesh: 10, 
  vietnam_hcm: 10, vietnam_dn: 10, vietnam_dninh: 10, india: 10, 
  china_gd: 10, china_gx: 10, china_gz: 10, china_sx: 10, china_sc: 10, 
  china_cq: 10, china_tj: 10, china_hn: 10, china_hn2: 10, china_hb: 10, 
  cambodia: 10,
  // 14일 (MERS 등)
  lebanon: 14, bahrain: 14, saudi: 14, syria: 14, uae: 14, yemen: 14, 
  oman: 14, jordan: 14, iraq: 14, iran: 14, israel: 14, qatar: 14, kuwait: 14,
  // 21일 (마버그열 등)
  ethiopia: 21
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
  lebanon: "중동호흡기증후군(MERS)", bahrain: "중동호흡기증후군(MERS)", saudi: "중동호흡기증후군(MERS)",
  syria: "중동호흡기증후군(MERS)", uae: "중동호흡기증후군(MERS)", yemen: "중동호흡기증후군(MERS)",
  oman: "중동호흡기증후군(MERS)", jordan: "중동호흡기증후군(MERS)", iraq: "중동호흡기증후군(MERS)",
  iran: "중동호흡기증후군(MERS)", israel: "중동호흡기증후군(MERS)", qatar: "중동호흡기증후군(MERS)",
  kuwait: "중동호흡기증후군(MERS)", ethiopia: "마버그열"
};

/* =========================
   3. 폼 유효성 검사
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
  if (f.get("q5") === "yes") {
    if (!f.get("q5_region") || !f.get("q5_departure_date") || !f.get("q5_arrival_date")) {
      alert("Q5 선택 시 출항지역과 출항/입항일을 모두 입력해주세요.");
      return false;
    }
  }
  return true;
}

/* =========================
   4. 결과 계산 메인 함수
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

  // 로직 1: 즉시 승선검역 (Q1~Q4) - 최우선 순위
  if ([1,2,3,4].some(i => q(i) === "yes")) {
    renderResult("승선검역", "Q1~Q4 항목 중 즉시 승선검역 사유 확인됨", "#ef4444");
    return;
  }

  // 로직 2: 조사생략 조건 (선원 교대(Q6)가 없을 때만 조사생략 가능)
  const hasQ567 = [5,6,7].some(i => q(i) === "yes");
  const noQ6 = (q(6) === "no"); 

  if (hasQ567 && noQ6 && depart48 && !boarding && !dock) {
    renderResult("조사생략", "조사생략 요건(48시간 이내 출항, 선원교대/승선자/접안 없음)을 충족함", "#22c55e");
    return;
  }

  // 로직 3: Q5 지역별 기준일 판단 (날짜 표시 기능 추가됨)
  if (q(5) === "yes") {
    const d = new Date(departDate);
    const a = new Date(arrivalDate);
    const diff = (a - d) / (1000 * 60 * 60 * 24);
    if (diff <= countryDays[region]) {
      const days = countryDays[region];
      const disease = countryDisease[region] || '감염병';
      const regionName = regionLabel(region);
      
      // 결과창에 잠복기 일수를 포함하여 출력
      renderResult("승선검역", `${regionName} 출항 / ${disease} 잠복기 위험기간 내 입항 (${days}일)`, "#ef4444");
      return;
    }
  }

  // 로직 4: Q6 선원교대 + 접안 여부
  if (q(6) === "yes" && dock) {
    renderResult("승선검역", "검역관리지역 선원 교대 발생 + 선박 접안", "#ef4444");
    return;
  }

  // 로직 5: Q7 증명서 만료
  if (q(7) === "yes") {
    renderResult("승선검역", "선박위생관리 증명서 부적합(미소지 또는 만료)", "#ef4444");
    return;
  }

  // 로직 6: 기본값 (서류심사)
  renderResult("서류심사", "추가적인 승선검역 위험 요소가 발견되지 않음", "#f59e0b");
}

/* =========================
   5. 디자인 출력 및 스크롤 제어
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
        <strong style="color:${color}">● 사유:</strong> ${reason}
      </div>
      <button onclick="window.scrollTo({top:0, behavior:'smooth'}); setTimeout(()=>location.reload(), 500);" 
              style="margin-top:20px; background:white; border:1px solid #cbd5e1; padding:10px 20px; border-radius:8px; cursor:pointer; font-size:14px; color:#64748b; font-weight:500; transition:all 0.2s;">
        처음부터 다시하기
      </button>
    </div>
  `;

  setTimeout(() => {
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}
