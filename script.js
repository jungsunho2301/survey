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
  switch (value) {
    case "korea": return "한국";
    case "china_tianjin": return "중국(텐진시)";
    case "china_shandong": return "중국(산둥성)";
    default: return "미선택";
  }
}

/* =========================
   결과 계산 로직
========================= */
function calculateResult() {
  const form = document.getElementById("surveyForm");
  const f = new FormData(form);

  /* -------------------------
     1️⃣ 즉시 승선검역 (Q1~Q4)
  ------------------------- */
  const immediateQuestions = ["q1", "q2", "q3", "q4"];
  for (let q of immediateQuestions) {
    if (f.get(q) === "yes") {
      return showResult(
        "승선검역",
        "즉시 승선검역 대상 항목(Q1~Q4)에 해당"
      );
    }
  }

  const q5 = f.get("q5");
  const q6 = f.get("q6");
  const q7 = f.get("q7");

  const depart48 = f.get("depart48") === "yes";
  const boarding = f.get("boarding") === "yes";
  const dock = f.get("dock") === "yes";

  /* -------------------------
     2️⃣ Q5 중점검역관리지역
  ------------------------- */
  if (q5 === "yes") {
    const region = f.get("q5_region");
    const departureDate = f.get("q5_departure_date");

    if (!region || !departureDate) {
      alert("중점검역관리지역의 지역과 출항일을 모두 입력해주세요.");
      return;
    }

    const today = new Date();
    const depart = new Date(departureDate);
    const diffDays = (today - depart) / (1000 * 60 * 60 * 24);

    if (diffDays > 14) {
      return showResult(
        "조사생략",
        `중점검역관리지역(${regionLabel(region)}) 출항이나 14일 초과`
      );
    }

    if (depart48 && !boarding) {
      return showResult(
        "조사생략",
        `중점검역관리지역(${regionLabel(region)}) 출항(14일 이내)이나 48시간 이내 출항 및 승선자 없음`
      );
    }

    return showResult(
      "승선검역",
      `중점검역관리지역(${regionLabel(region)}) 출항 또는 경유 (14일 이내)`
    );
  }

  /* -------------------------
     3️⃣ Q6 선원 교대
  ------------------------- */
  if (q6 === "yes") {
    if (dock) {
      return showResult(
        "승선검역",
        "선원 교대 발생 및 선박 접안"
      );
    }

    if (!dock && boarding) {
      return showResult(
        "서류검역",
        "선원 교대 발생, 비접안 상태이나 하선자 있음 (하선자 검역 필요)"
      );
    }

    if (depart48 && !boarding) {
      return showResult(
        "조사생략",
        "선원 교대 발생이나 48시간 이내 출항 및 승선자 없음"
      );
    }

    return showResult(
      "서류검역",
      "선원 교대 발생 (비접안)"
    );
  }

  /* -------------------------
     4️⃣ Q7 위생증명서
  ------------------------- */
  if (q7 === "yes") {
    if (depart48 && !boarding) {
      return showResult(
        "조사생략",
        "선박위생관리 증명서 미소지 또는 만료이나 48시간 이내 출항"
      );
    }

    return showResult(
      "승선검역",
      "선박위생관리(면제) 증명서 미소지 또는 유효기간 만료"
    );
  }

  /* -------------------------
     5️⃣ 기본값
  ------------------------- */
  showResult(
    "조사생략",
    "검역 관련 특이사항 없음"
  );
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
