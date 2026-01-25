/* =========================================
   1. 상세 입력창 토글 함수
   ========================================= */
function toggleQ5(show) {
  const detailBox = document.getElementById("q5Detail");
  if (detailBox) detailBox.style.display = show ? "block" : "none";
}

function toggleQ6(show) {
  const detailBox = document.getElementById("q6Detail");
  if (detailBox) detailBox.style.display = show ? "block" : "none";
}

/* =========================================
   2. 데이터 정의 (Q5 중점검역관리지역용)
   ========================================= */
function regionLabel(v) {
  const l = { lebanon:"레바논", mada:"마다가스카르", mexico:"멕시코", mongolia:"몽골", nm_usa:"미국(뉴멕시코)", wa_usa:"미국(워싱턴)", ca_usa:"미국(캘리포니아)", bahrain:"바레인", bangladesh:"방글라데시", vietnam_dn:"베트남(동나이)", vietnam_dninh:"베트남(따이닌)", vietnam_hcm:"베트남(호찌민)", saudi:"사우디", syria:"시리아", uae:"아랍에미리트", ethiopia:"에티오피아", yemen:"예멘", oman:"오만", jordan:"요르단", iraq:"이라크", iran:"이란", israel:"이스라엘", india:"인도", china_gd:"중국(광둥성)", china_gx:"중국(광시좡족자치구)", china_gz:"중국(구이저우성)", china_sx:"중국(산시성)", china_sc:"중국(쓰촨성)", china_tj:"중국(텐진시)", china_cq:"중국(충칭시)", china_hn:"중국(허난성)", china_hn2:"중국(후난성)", china_hb:"중국(후베이성)", qatar:"카타르", cambodia:"캄보디아", congo:"콩고민주공화국", kuwait:"쿠웨이트" };
  return l[v] || v;
}
const countryDays = { mada:6, mongolia:6, nm_usa:6, congo:6, mexico:10, wa_usa:10, ca_usa:10, bangladesh:10, vietnam_hcm:10, vietnam_dn:10, vietnam_dninh:10, india:10, china_gd:10, china_gx:10, china_gz:10, china_sx:10, china_sc:10, china_cq:10, china_tj:10, china_hn:10, china_hn2:10, china_hb:10, cambodia:10, lebanon:14, bahrain:14, saudi:14, syria:14, uae:14, yemen:14, oman:14, jordan:14, iraq:14, iran:14, israel:14, qatar:14, kuwait:14, ethiopia:21 };
const countryDisease = { mada:"페스트", mongolia:"페스트", nm_usa:"페스트", congo:"페스트", mexico:"동물인플루엔자", wa_usa:"동물인플루엔자", ca_usa:"동물인플루엔자", bangladesh:"동물인플루엔자", vietnam_hcm:"동물인플루엔자", vietnam_dn:"동물인플루엔자", vietnam_dninh:"동물인플루엔자", india:"동물인플루엔자", china_gd:"동물인플루엔자", china_gx:"동물인플루엔자", china_gz:"동물인플루엔자", china_sx:"동물인플루엔자", china_sc:"동물인플루엔자", china_cq:"동물인플루엔자", china_tj:"동물인플루엔자", china_hn:"동물인플루엔자", china_hn2:"동물인플루엔자", china_hb:"동물인플루엔자", cambodia:"동물인플루엔자", lebanon:"MERS", bahrain:"MERS", saudi:"MERS", syria:"MERS", uae:"MERS", yemen:"MERS", oman:"MERS", jordan:"MERS", iraq:"MERS", iran:"MERS", israel:"MERS", qatar:"MERS", kuwait:"MERS", ethiopia:"마버그열" };

/* =========================================
   3. 데이터 정의 (Q6 선원교대 중복 질병 대응) - 배열 구조
   ========================================= */
const q6Data = {
  // 중복 질병 국가 (배열 [] 사용)
  ghana: [{d:"콜레라", day:5}, {d:"황열", day:6}],
  nigeria: [{d:"콜레라", day:5}, {d:"황열", day:6}],
  south_sudan: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}],
  syria: [{d:"MERS", day:14}, {d:"콜레라", day:5}],
  ethiopia: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"마버그열", day:21}],
  india: [{d:"AI", day:10}, {d:"콜레라", day:5}],
  bangladesh: [{d:"AI", day:10}, {d:"콜레라", day:5}],
  yemen: [{d:"MERS", day:14}, {d:"콜레라", day:5}],
  iraq: [{d:"MERS", day:14}, {d:"콜레라", day:5}],
  uganda: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}],
  kenya: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}],
  congo_dr: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}],
  tanzania: [{d:"콜레라", day:5}, {d:"에볼라", day:21}],
  rwanda: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}],
  
  // 단일 질병 국가
  mexico: [{d:"AI", day:10}], iowa_usa: [{d:"AI", day:10}], wa_usa: [{d:"AI", day:10}], ca_usa: [{d:"AI", day:10}],
  vietnam_se: [{d:"AI", day:10}], cambodia: [{d:"AI", day:10}],
  lebanon: [{d:"MERS", day:14}], bahrain: [{d:"MERS", day:14}], saudi: [{d:"MERS", day:14}], uae: [{d:"MERS", day:14}],
  oman: [{d:"MERS", day:14}], jordan: [{d:"MERS", day:14}], iran: [{d:"MERS", day:14}], israel: [{d:"MERS", day:14}], qatar: [{d:"MERS", day:14}], kuwait: [{d:"MERS", day:14}],
  nepal: [{d:"콜레라", day:5}], niger: [{d:"콜레라", day:5}, {d:"황열", day:6}], malawi: [{d:"콜레라", day:5}], mozambique: [{d:"콜레라", day:5}], myanmar: [{d:"콜레라", day:5}], burundi: [{d:"콜레라", day:5}, {d:"황열", day:6}], somalia: [{d:"콜레라", day:5}], sudan: [{d:"콜레라", day:5}, {d:"황열", day:6}], afghanistan: [{d:"콜레라", day:5}], angola: [{d:"콜레라", day:5}, {d:"황열", day:6}], haiti: [{d:"콜레라", day:5}], zambia: [{d:"콜레라", day:5}], zimbabwe: [{d:"콜레라", day:5}], chad: [{d:"콜레라", day:5}, {d:"황열", day:6}], comoros: [{d:"콜레라", day:5}], ivory_coast: [{d:"콜레라", day:5}, {d:"황열", day:6}], congo: [{d:"콜레라", day:5}, {d:"황열", day:6}], togo: [{d:"콜레라", day:5}, {d:"황열", day:6}], pakistan: [{d:"콜레라", day:5}], philippines: [{d:"콜레라", day:5}],
  gabon: [{d:"황열", day:6}], guyana: [{d:"황열", day:6}], gambia: [{d:"황열", day:6}], guinea: [{d:"황열", day:6}], guinea_bissau: [{d:"황열", day:6}], liberia: [{d:"황열", day:6}], mali: [{d:"황열", day:6}], moritania: [{d:"황열", day:6}], benin: [{d:"황열", day:6}], venezuela: [{d:"황열", day:6}], bolivia: [{d:"황열", day:6}], burkina_faso: [{d:"황열", day:6}], brazil: [{d:"황열", day:6}], senegal: [{d:"황열", day:6}], suriname: [{d:"황열", day:6}], sierra_leone: [{d:"황열", day:6}], argentina: [{d:"황열", day:6}], ecuador: [{d:"황열", day:6}], equatorial_guinea: [{d:"황열", day:6}], car: [{d:"황열", day:6}], cameroon: [{d:"황열", day:6}], colombia: [{d:"황열", day:6}], trinidad: [{d:"황열", day:6}], panama: [{d:"황열", day:6}], paraguay: [{d:"황열", day:6}], peru: [{d:"황열", day:6}], french_guiana: [{d:"황열", day:6}],
  china_gd:[{d:"AI", day:10}], china_gx:[{d:"AI", day:10}], china_gz:[{d:"AI", day:10}], china_sx:[{d:"AI", day:10}], china_sc:[{d:"AI", day:10}], china_yn:[{d:"AI", day:10}], china_cq:[{d:"AI", day:10}], china_tj:[{d:"AI", day:10}], china_hn:[{d:"AI", day:10}], china_hn2:[{d:"AI", day:10}], china_hb:[{d:"AI", day:10}]
};

function regionLabelQ6(v) {
  const l = { ghana:"가나", nigeria:"나이지리아", south_sudan:"남수단", syria:"시리아", ethiopia:"에티오피아", yemen:"예멘", uganda:"우간다", iraq:"이라크", india:"인도", kenya:"케냐", congo_dr:"콩고민주공화국", tanzania:"탄자니아", rwanda:"르완다", mexico:"멕시코", iowa_usa:"미국(아이오와주)", wa_usa:"미국(워싱턴주)", ca_usa:"미국(캘리포니아주)", vietnam_se:"베트남(남동부)", cambodia:"캄보디아", lebanon:"레바논", bahrain:"바레인", saudi:"사우디", uae:"아랍에미리트", oman:"오만", jordan:"요르단", iran:"이란", israel:"이스라엘", qatar:"카타르", kuwait:"쿠웨이트", nepal:"네팔", niger:"니제르", malawi:"말라위", mozambique:"모잠비크", myanmar:"미얀마", bangladesh:"방글라데시", burundi:"부룬디", somalia:"소말리아", sudan:"수단", afghanistan:"아프가니스탄", angola:"앙골라", haiti:"아이티", zambia:"잠비아", zimbabwe:"짐바브웨", chad:"차드", comoros:"코모로", ivory_coast:"코트디부아르", congo:"콩고", togo:"토고", pakistan:"파키스탄", philippines:"필리핀", gabon:"가봉", guyana:"가이아나", gambia:"감비아", guinea:"기니", guinea_bissau:"기니비사우", liberia:"라이베리아", mali:"말리", moritania:"모리타니", benin:"베냉", venezuela:"베네수엘라", bolivia:"볼리비아", burkina_faso:"부르키나파소", brazil:"브라질", senegal:"세네갈", suriname:"수리남", sierra_leone:"시에라리온", argentina:"아르헨티나", ecuador:"에콰도르", equatorial_guinea:"적도기니", car:"중앙아프리카공화국", cameroon:"카메룬", colombia:"콜롬비아", trinidad:"트리니다드토바고", panama:"파나마", paraguay:"파라과이", peru:"페루", french_guiana:"프랑스령 기아나", china_gd:"중국(광둥성)", china_gx:"중국(광시좡족자치구)", china_gz:"중국(구이저우성)", china_sx:"중국(산시성)", china_sc:"중국(쓰촨성)", china_yn:"중국(운남성)", china_cq:"중국(충칭시)", china_tj:"중국(텐진시)", china_hn:"중국(허난성)", china_hn2:"중국(후난성)", china_hb:"중국(후베이성)" };
  return l[v] || v;
}

/* =========================================
   4. 폼 유효성 검사 (날짜 선후관계 강화)
   ========================================= */
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
      alert("Q5 상세 항목을 모두 입력해주세요."); return false;
    }
    const d5 = new Date(f.get("q5_departure_date")), a5 = new Date(f.get("q5_arrival_date"));
    if (a5 < d5) { alert("Q5: 입항 예정일이 출항일보다 빠를 수 없습니다."); return false; }
  }

  if (f.get("q6") === "yes") {
    if (!f.get("q6_region") || !f.get("q6_onboard_date") || !f.get("q6_arrival_date")) {
      alert("Q6 상세 항목을 모두 입력해주세요."); return false;
    }
    const o6 = new Date(f.get("q6_onboard_date")), a6 = new Date(f.get("q6_arrival_date"));
    if (a6 < o6) { alert("Q6: 입항 예정일이 승선일보다 빠를 수 없습니다."); return false; }
  }
  return true;
}

/* =========================================
   5. 결과 계산 메인 함수 (복수 사유 지원)
   ========================================= */
function calculateResult() {
  const f = new FormData(document.getElementById("surveyForm"));
  if (!validateForm(f)) return;

  const q = n => f.get(`q${n}`);
  const reasons = [];
  let isQuarantine = false;

  // 로직 1: STEP 1 (즉시 승선검역)
  if ([1,2,3,4].some(i => q(i) === "yes")) {
    isQuarantine = true;
    reasons.push("STEP 1: 즉시 승선검역 사유 확인됨");
  }

  // 로직 2: Q5 중점검역지역 잠복기 체크
  if (q(5) === "yes") {
    const reg = f.get("q5_region"), diff = (new Date(f.get("q5_arrival_date")) - new Date(f.get("q5_departure_date"))) / 86400000;
    if (diff <= countryDays[reg]) {
      isQuarantine = true;
      reasons.push(`Q5: ${regionLabel(reg)} 출항 / ${countryDisease[reg]} 잠복기 위험기간 내 입항 (${countryDays[reg]}일)`);
    }
  }

  // 로직 3: Q6 선원교대 중복 질병 체크 (배열 반복문 필수!)
  if (q(6) === "yes") {
    const reg = f.get("q6_region"), diff = (new Date(f.get("q6_arrival_date")) - new Date(f.get("q6_onboard_date"))) / 86400000;
    const diseaseList = q6Data[reg] || [];
    
    diseaseList.forEach(item => {
      if (diff <= item.day) {
        isQuarantine = true;
        reasons.push(`Q6: ${regionLabelQ6(reg)} 승선 / ${item.d} 최대 잠복기간 이내 선원 교대 (${item.day}일)`);
      }
    });
  }

  // 로직 4: Q6 단순 교대 발생 + 접안 시 (잠복기 외)
  if (q(6) === "yes" && f.get("dock") === "yes" && !reasons.some(r => r.includes("Q6:"))) {
    isQuarantine = true;
    reasons.push("Q6: 검역관리지역 선원 교대 발생 + 선박 접안");
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
    const ok = f.get("depart48") === "yes" && f.get("boarding") === "no" && f.get("dock") === "no" && q(6) === "no";
    if (ok) renderResult("조사생략", "조사생략 요건 충족", "#22c55e");
    else renderResult("서류심사", q(6) === "yes" ? "선원 교대 발생 (잠복기 경과)" : "추가 위험 요소 없음", "#f59e0b");
  }
}

/* =========================================
   6. 디자인 출력 및 스크롤 제어
   ========================================= */
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
