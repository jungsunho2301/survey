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
   2. 데이터 정의 (Q5 중점검역관리지역 전용)
   ========================================= */
const q5Data = {
  lebanon_q5: {l:"레바논", d:"MERS", day:14}, mada_q5: {l:"마다가스카르", d:"페스트", day:6},
  mexico_q5: {l:"멕시코", d:"AI", day:10}, mongolia_q5: {l:"몽골", d:"페스트", day:6},
  nm_usa_q5: {l:"미국(뉴멕시코주)", d:"페스트", day:6}, wa_usa_q5: {l:"미국(워싱턴주)", d:"AI", day:10},
  ca_usa_q5: {l:"미국(캘리포니아주)", d:"AI", day:10}, bahrain_q5: {l:"바레인", d:"MERS", day:14},
  bangladesh_q5: {l:"방글라데시", d:"AI", day:10}, vietnam_dn_q5: {l:"베트남(동나이)", d:"AI", day:10},
  vietnam_dninh_q5: {l:"베트남(따이닌)", d:"AI", day:10}, vietnam_hcm_q5: {l:"베트남(호찌민)", d:"AI", day:10},
  saudi_q5: {l:"사우디아라비아", d:"MERS", day:14}, syria_q5: {l:"시리아", d:"MERS", day:14},
  uae_q5: {l:"아랍에미리트", d:"MERS", day:14}, ethiopia_q5: {l:"에티오피아", d:"마버그열", day:21},
  yemen_q5: {l:"예멘", d:"MERS", day:14}, oman_q5: {l:"오만", d:"MERS", day:14},
  jordan_q5: {l:"요르단", d:"MERS", day:14}, iraq_q5: {l:"이라크", d:"MERS", day:14},
  iran_q5: {l:"이란", d:"MERS", day:14}, israel_q5: {l:"이스라엘", d:"MERS", day:14},
  india_q5: {l:"인도", d:"AI", day:10}, china_gd_q5: {l:"중국(광둥성)", d:"AI", day:10},
  china_gx_q5: {l:"중국(광시좡족자치구)", d:"AI", day:10}, china_gz_q5: {l:"중국(구이저우성)", d:"AI", day:10},
  china_sx_q5: {l:"중국(산시성)", d:"AI", day:10}, china_sc_q5: {l:"중국(쓰촨성)", d:"AI", day:10},
  china_tj_q5: {l:"중국(텐진시)", d:"AI", day:10}, china_cq_q5: {l:"중국(충칭시)", d:"AI", day:10},
  china_hn_q5: {l:"중국(허난성)", d:"AI", day:10}, china_hn2_q5: {l:"중국(후난성)", d:"AI", day:10},
  china_hb_q5: {l:"중국(후베이성)", d:"AI", day:10}, qatar_q5: {l:"카타르", d:"MERS", day:14},
  cambodia_q5: {l:"캄보디아", d:"AI", day:10}, congo_q5: {l:"콩고민주공화국", d:"페스트", day:6},
  kuwait_q5: {l:"쿠웨이트", d:"MERS", day:14}
};

/* =========================================
   3. 데이터 정의 (Q6 선원교대 중복 질병 대응)
   ========================================= */
const q6Data = {
  // 가나다순 정렬 및 중복 질병 통합
  ghana_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  gabon_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  guyana_q6: [{d:"황열", day:6}],
  gambia_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  guinea_q6: [{d:"황열", day:6}, {d:"라싸열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  guinea_bissau_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  greece_q6: [{d:"크리미안콩고출혈열", day:14}], // 신규
  nigeria_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"라싸열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  south_sudan_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}, {d:"홍역", day:21}],
  namibia_q6: [{d:"홍역", day:21}], // 신규
  south_africa_q6: [{d:"홍역", day:21}], // 신규
  netherlands_q6: [{d:"홍역", day:21}], // 신규
  nepal_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  niger_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  germany_q6: [{d:"홍역", day:21}], // 신규
  laos_q6: [{d:"폴리오", day:21}, {d:"홍역", day:21}], // 신규
  lebanon_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  lesotho_q6: [{d:"홍역", day:21}], // 신규
  liberia_q6: [{d:"황열", day:6}, {d:"라싸열", day:21}, {d:"홍역", day:21}],
  russia_q6: [{d:"홍역", day:21}], // 신규
  romania_q6: [{d:"홍역", day:21}], // 신규
  rwanda_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}, {d:"마버그열", day:21}, {d:"홍역", day:21}],
  libya_q6: [{d:"홍역", day:21}], // 신규
  lithuania_q6: [{d:"홍역", day:21}], // 신규
  mada_q6: [{d:"페스트", day:6}, {d:"홍역", day:21}],
  malawi_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  malaysia_q6: [{d:"홍역", day:21}], // 신규
  mali_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  mexico_q6: [{d:"AI", day:10}, {d:"홍역", day:21}],
  morocco_q6: [{d:"홍역", day:21}], // 신규
  moritania_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  mozambique_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  montenegro_q6: [{d:"홍역", day:21}], // 신규
  moldova_q6: [{d:"홍역", day:21}], // 신규
  mongolia_q6: [{d:"홍역", day:21}],
  usa_q6: [{d:"AI", day:10}], // 미국은 주별로 관리되므로 기존 iowa, wa, ca 유지
  iowa_usa_q6: [{d:"AI", day:10}],
  wa_usa_q6: [{d:"AI", day:10}],
  ca_usa_q6: [{d:"AI", day:10}],
  myanmar_q6: [{d:"콜레라", day:5}],
  bahrain_q6: [{d:"MERS", day:14}],
  bangladesh_q6: [{d:"AI", day:10}, {d:"콜레라", day:5}],
  benin_q6: [{d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  vietnam_q6: [{d:"홍역", day:21}], // 베트남 홍역 추가
  vietnam_se_q6: [{d:"AI", day:10}],
  belgium_q6: [{d:"홍역", day:21}], // 신규
  belize_q6: [{d:"홍역", day:21}], // 신규
  bosnia_q6: [{d:"홍역", day:21}], // 신규
  botswana_q6: [{d:"홍역", day:21}], // 신규
  bolivia_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  burundi_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  burkina_faso_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  brazil_q6: [{d:"황열", day:6}],
  saudi_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  cyprus_q6: [{d:"홍역", day:21}], // 신규
  senegal_q6: [{d:"황열", day:6}, {d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}],
  serbia_q6: [{d:"홍역", day:21}], // 신규
  somalia_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  sudan_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  suriname_q6: [{d:"황열", day:6}],
  syria_q6: [{d:"MERS", day:14}, {d:"콜레라", day:5}, {d:"홍역", day:21}],
  sierra_leone_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  spain_q6: [{d:"크리미안콩고출혈열", day:14}], // 신규
  uae_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  argentina_q6: [{d:"황열", day:6}],
  armenia_q6: [{d:"홍역", day:21}], // 신규
  ireland_q6: [{d:"홍역", day:21}], // 신규
  afghanistan_q6: [{d:"콜레라", day:5}, {d:"크리미안콩고출혈열", day:14}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  albania_q6: [{d:"홍역", day:21}], // 신규
  algeria_q6: [{d:"폴리오", day:21}, {d:"홍역", day:21}], // 신규
  angola_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  ethiopia_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"마버그열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  uk_q6: [{d:"홍역", day:21}], // 신규
  yemen_q6: [{d:"MERS", day:14}, {d:"콜레라", day:5}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  austria_q6: [{d:"홍역", day:21}], // 신규
  oman_q6: [{d:"MERS", day:14}],
  jordan_q6: [{d:"MERS", day:14}],
  uganda_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}, {d:"마버그열", day:21}, {d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}],
  uzbekistan_q6: [{d:"홍역", day:21}], // 신규
  ukraine_q6: [{d:"홍역", day:21}], // 신규
  iraq_q6: [{d:"MERS", day:14}, {d:"콜레라", day:5}, {d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}],
  iran_q6: [{d:"MERS", day:14}],
  israel_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  egypt_q6: [{d:"홍역", day:21}], // 이집트 추가
  italy_q6: [{d:"홍역", day:21}], // 신규
  india_q6: [{d:"AI", day:10}, {d:"콜레라", day:5}, {d:"홍역", day:21}],
  indonesia_q6: [{d:"홍역", day:21}], // 신규
  zambia_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  georgia_q6: [{d:"홍역", day:21}], // 신규
  중앙아프리카공화국_q6: [{d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  지부티_q6: [{d:"홍역", day:21}], // 신규
  chad_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  kazakhstan_q6: [{d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}], // 신규
  qatar_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  cameroon_q6: [{d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  cambodia_q6: [{d:"AI", day:10}, {d:"홍역", day:21}],
  canada_q6: [{d:"홍역", day:21}], // 신규
  kenya_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}, {d:"홍역", day:21}],
  comoros_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  ivory_coast_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  colombia_q6: [{d:"황열", day:6}],
  congo_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  congo_dr_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}, {d:"마버그열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  kyrgyzstan_q6: [{d:"홍역", day:21}], // 신규
  kuwait_q6: [{d:"MERS", day:14}],
  tajikistan_q6: [{d:"홍역", day:21}], // 신규
  tanzania_q6: [{d:"콜레라", day:5}, {d:"에볼라", day:21}, {d:"마버그열", day:21}],
  thailand_q6: [{d:"홍역", day:21}], // 신규
  togo_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  tunisia_q6: [{d:"홍역", day:21}], // 신규
  turkiye_q6: [{d:"홍역", day:21}], // 신규
  trinidad_q6: [{d:"황열", day:6}],
  panama_q6: [{d:"황열", day:6}],
  paraguay_q6: [{d:"황열", day:6}],
  pakistan_q6: [{d:"콜레라", day:5}, {d:"크리미안콩고출혈열", day:14}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  papua_new_guinea_q6: [{d:"폴리오", day:21}], // 신규
  peru_q6: [{d:"황열", day:6}],
  poland_q6: [{d:"홍역", day:21}], // 신규
  france_q6: [{d:"홍역", day:21}], // 신규
  philippines_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  french_guiana_q6: [{d:"황열", day:6}]
};

/* 한글 이름 매칭 (새로 추가된 국가 포함) */
function regionLabelQ6(v) {
  const l = { 
    greece_q6: "그리스", namibia_q6: "나미비아", south_africa_q6: "남아프리카공화국", netherlands_q6: "네덜란드", germany_q6: "독일", laos_q6: "라오스", lesotho_q6: "레소토", russia_q6: "러시아", romania_q6: "루마니아", libya_q6: "리비아", lithuania_q6: "리투아니아", malaysia_q6: "말레이시아", morocco_q6: "모로코", montenegro_q6: "몬테네그로", moldova_q6: "몰도바", belgium_q6: "벨기에", belize_q6: "벨리즈", bosnia_q6: "보스니아 헤르체고비나", botswana_q6: "보츠와나", cyprus_q6: "사이프러스", serbia_q6: "세르비아", spain_q6: "스페인", armenia_q6: "아르메니아", ireland_q6: "아일랜드", albania_q6: "알바니아", algeria_q6: "알제리", uk_q6: "영국", austria_q6: "오스트리아", uzbekistan_q6: "우즈베키스탄", ukraine_q6: "우크라이나", italy_q6: "이탈리아", indonesia_q6: "인도네시아", georgia_q6: "조지아", 지부티_q6: "지부티", kazakhstan_q6: "카자흐스탄", canada_q6: "캐나다", kyrgyzstan_q6: "키르기스스탄", tajikistan_q6: "타지키스탄", thailand_q6: "태국", tunisia_q6: "튀니지", turkiye_q6: "튀르키예", papua_new_guinea_q6: "파푸아뉴기니", poland_q6: "폴란드", france_q6: "프랑스", 중앙아프리카공화국_q6: "중앙아프리카공화국",
    mada_q6: "마다가스카르", ghana_q6:"가나", nigeria_q6:"나이지리아", south_sudan_q6:"남수단", syria_q6:"시리아", ethiopia_q6:"에티오피아", yemen_q6:"예멘", uganda_q6:"우간다", iraq_q6:"이라크", india_q6:"인도", kenya_q6:"케냐", congo_dr_q6:"콩고민주공화국", tanzania_q6:"탄자니아", rwanda_q6:"르완다", mexico_q6:"멕시코", iowa_usa_q6:"미국(아이오와주)", wa_usa_q6:"미국(워싱턴주)", ca_usa_q6:"미국(캘리포니아주)", vietnam_se_q6:"베트남(남동부)", cambodia_q6:"캄보디아", lebanon_q6:"레바논", bahrain_q6:"바레인", saudi_q6:"사우디아라비아", uae_q6:"아랍에미리트", oman_q6:"오만", jordan_q6:"요르단", iran_q6:"이란", israel_q6:"이스라엘", qatar_q6:"카타르", kuwait_q6:"쿠웨이트", nepal_q6:"네팔", niger_q6:"니제르", malawi_q6:"말라위", mozambique_q6:"모잠비크", myanmar_q6:"미얀마", bangladesh_q6:"방글라데시", burundi_q6:"부룬디", somalia_q6:"소말리아", sudan_q6:"수단", afghanistan_q6:"아프가니스탄", angola_q6:"앙골라", haiti_q6:"아이티", zambia_q6:"잠비아", zimbabwe_q6:"짐바브웨", chad_q6:"차드", comoros_q6:"코모로", ivory_coast_q6:"코트디부아르", congo_q6:"콩고", togo_q6:"토고", pakistan_q6:"파키스탄", philippines_q6:"필리핀", gabon_q6:"가봉", guyana_q6:"가이아나", gambia_q6:"감비아", guinea_q6:"기니", guinea_bissau_q6:"기니비사우", liberia_q6:"라이베리아", mali_q6:"말리", moritania_q6:"모리타니", ben인_q6:"베냉", venezuela_q6:"베네수엘라", bolivia_q6:"볼리비아", burkina_faso_q6:"부르키나파소", brazil_q6:"브라질", senegal_q6:"세네갈", suriname_q6:"수리남", sierra_leone_q6:"시에라리온", argentina_q6:"아르헨티나", ecuador_q6:"에콰도르", equatorial_guinea_q6:"적도기니", car_q6:"중앙아프리카공화국", cameroon_q6:"카메룬", colombia_q6:"콜롬비아", trinidad_q6:"트리니다드토바고", panama_q6:"파나마", paraguay_q6:"파라과이", peru_q6:"페루", french_guiana_q6:"프랑스령 기아나", china_gd_q6:"중국(광둥성)", china_gx_q6:"중국(광시좡족자치구)", china_gz_q6:"중국(구이저우성)", china_sx_q6:"중국(산시성)", china_sc_q6:"중국(쓰촨성)", china_yn_q6:"중국(운남성)", china_cq_q6:"중국(충칭시)", china_tj_q6:"중국(텐진시)", china_hn_q6:"중국(허난성)", china_hn2_q6:"중국(후난성)", china_hb_q6:"중국(후베이성)"
  };
  return l[v] || v.replace("_q6","");
}

/* =========================================
   4. 폼 유효성 검사
   ========================================= */
function validateForm(f) {
  for (let i = 1; i <= 7; i++) {
    if (!f.get(`q${i}`)) { alert(`Q${i}번 문항을 선택해주세요.`); return false; }
  }
  if (!f.get("depart48") || !f.get("boarding") || !f.get("dock")) {
    alert("기타사항의 모든 항목을 선택해주세요."); return false;
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
   5. 결과 계산 메인 함수
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

  // 로직 2: Q5 중점검역지역 체크
  if (q(5) === "yes") {
    const reg = f.get("q5_region");
    const diff = (new Date(f.get("q5_arrival_date")) - new Date(f.get("q5_departure_date"))) / 86400000;
    const data = q5Data[reg];
    if (data && diff <= data.day) {
      isQuarantine = true;
      reasons.push(`Q5: ${data.l} 출항 / ${data.d} 잠복기 위험기간 내 입항 (${data.day}일)`);
    }
  }

  // 로직 3: Q6 선원교대 중복 질병 체크
  if (q(6) === "yes") {
    const reg = f.get("q6_region");
    const diff = (new Date(f.get("q6_arrival_date")) - new Date(f.get("q6_onboard_date"))) / 86400000;
    const diseaseList = q6Data[reg] || [];
    diseaseList.forEach(item => {
      if (diff <= item.day) {
        isQuarantine = true;
        reasons.push(`Q6: ${regionLabelQ6(reg)} 승선 / ${item.d} 최대 잠복기간 이내 선원 교대 (${item.day}일)`);
      }
    });
  }

  // 로직 4: Q6 발생 + 접안
  if (q(6) === "yes" && f.get("dock") === "yes" && !reasons.some(r => r.includes("Q6:"))) {
    isQuarantine = true;
    reasons.push("Q6: 검역관리지역 선원 교대 발생 + 선박 접안");
  }

  // 로직 5: Q7 증명서
  if (q(7) === "yes") { isQuarantine = true; reasons.push("Q7: 선박위생관리 증명서 부적합"); }

  // 최종 판정 및 출력
  if (isQuarantine) {
    renderResult("승선검역", reasons.join("<br>"), "#ef4444");
  } else {
    const ok = f.get("depart48") === "yes" && f.get("boarding") === "no" && f.get("dock") === "no" && q(6) === "no";
    if (ok) renderResult("조사생략", "조사생략 요건 충족", "#22c55e");
    else renderResult("서류심사", "추가 위험 요소 없음", "#f59e0b");
  }
}

/* =========================================
   6. 디자인 출력 및 스크롤 제어
   ========================================= */
function renderResult(title, reason, color) {
  const rb = document.getElementById("result");
  rb.style.display = "block";
  rb.style.borderTop = `6px solid ${color}`;
  rb.innerHTML = `
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
  setTimeout(() => { rb.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 100);
}
