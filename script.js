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
   감염병별 국가 목록 + 기준일
========================= */
const diseaseData = {
  plague: { days: 6, countries: ["mongolia","mada","nm_usa","congo"] },
  ai: { days: 10, countries: ["mexico","wa_usa","ca_usa","bangladesh","vietnam_hcm","vietnam_dn","vietnam_dninh","india",
                             "china_gd","china_gx","china_gz","china_sx","china_sc","china_cq","china_tj","china_hn","china_hn2","china_hb",
                             "cambodia"] },
  mers: { days: 14, countries: ["lebanon","bahrain","saudi","syria","uae","yemen","oman","jordan","iraq","iran","israel","qatar","kuwait"] },
  marburg: { days: 21, countries: ["ethiopia"] }
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
  if (f.get("q5")==="yes") {
    if (!f.get("q5_disease")) missing.push("Q5 감염병 선택");
    if (!f.get("q5_region")) missing.push("Q5 출항·경유 국가");
    if (!f.get("q5_departure_date")) missing.push("Q5 출항일");
  }

  if (missing.length>0) {
    alert("다음 항목을 선택해주세요:\n" + missing.join("\n"));
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
  const depart48 = f.get("depart48")==="yes";
  const boarding = f.get("boarding")==="yes";
  const dock = f.get("dock")==="yes";

  /* -------------------------
     Q5 감염병 기준일 처리
  ------------------------- */
  if (q5==="yes") {
    const disease = f.get("q5_disease");
    const region = f.get("q5_region");
    const departDateStr = f.get("q5_departure_date");
    const arrivalDateStr = f.get("q5_arrival_date");

    if (!diseaseData[disease].countries.includes(region)) {
      return showResult("서류검역","선택된 감염병("+disease+")와 국가("+regionLabel(region)+") 불일치");
    }

    const depart = new Date(departDateStr);
    const arrival = new Date(arrivalDateStr);
    const daysLimit = diseaseData[disease].days;

    if (depart > arrival) {
      alert("출항일은 입항 예정일보다 늦을 수 없습니다.");
      return;
    }

    const diffDays = (arrival - depart)/(1000*60*60*24);

    if (diffDays > daysLimit) {
      return showResult("서류검역",
        `중점검역관리지역(${regionLabel(region)}) 출항 또는 경유 (${daysLimit}일 초과)`);
    } else {
      return showResult("승선검역",
        `중점검역관리지역(${regionLabel(region)}) 출항 또는 경유 (${daysLimit}일 이내)`);
    }
  }

  /* -------------------------
     Q6 선원 교대
  ------------------------- */
  if (q6==="yes") {
    if (dock) return showResult("승선검역","선원 교대 발생 및 선박 접안");
    if (!dock && boarding) return showResult("서류검역","선원 교대 발생, 비접안 상태이나 하선자 있음");
    if (depart48 && !boarding) return showResult("서류검역","선원 교대 발생, 48시간 이내 출항 및 승선자 없음");
    return showResult("서류검역","선원 교대 발생 (비접안)");
  }

  /* -------------------------
     Q7 위생증명서
  ------------------------- */
  if (q7==="yes") {
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
