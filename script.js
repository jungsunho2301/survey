function calculateResult() {
  const f = new FormData(document.getElementById("surveyForm"));

  const immediateQuestions = ["q1", "q2", "q3", "q4"];

  // 1️⃣ 즉시 승선검역
  for (let q of immediateQuestions) {
    if (f.get(q) === "yes") {
      return showResult("승선검역", "즉시 승선검역 대상 항목(Q1~Q4)에 해당");
    }
  }

  const q5 = f.get("q5");
  const q6 = f.get("q6");
  const q7 = f.get("q7");

  const depart48 = f.get("depart48") === "yes";
  const boarding = f.get("boarding") === "yes";
  const dock = f.get("dock") === "yes";

  // 2️⃣ Q5 중점검역관리지역
  if (q5 === "yes") {
    if (depart48 && !boarding) {
      return showResult("조사생략", "중점검역관리지역 해당이나 48시간 이내 출항 및 승선자 없음");
    }
    return showResult("승선검역", "중점검역관리지역 출항·경유");
  }

  // 3️⃣ Q6 선원 교대
  if (q6 === "yes") {
    if (dock) {
      return showResult("승선검역", "선원 교대 + 접안");
    }
    if (!dock && boarding) {
      return showResult("서류검역", "선원 교대 + 비접안 (하선자 검역 필요)");
    }
    if (depart48 && !boarding) {
      return showResult("조사생략", "선원 교대 있으나 48시간 이내 출항 및 승선자 없음");
    }
    return showResult("서류검역", "선원 교대 확인");
  }

  // 4️⃣ Q7 위생증명서
  if (q7 === "yes") {
    if (depart48 && !boarding) {
      return showResult("조사생략", "위생증명서 미소지이나 48시간 이내 출항");
    }
    return showResult("승선검역", "선박위생관리 증명서 미소지 또는 만료");
  }

  // 기본
  showResult("조사생략", "특이사항 없음");
}

function showResult(result, reason) {
  document.getElementById("result").innerHTML = `
    <h2>검역 분류 결과</h2>
    <p class="result"><strong>${result}</strong></p>
    <p class="reason">판단 근거: ${reason}</p>
  `;
}
