/* =========================================
   1. 상세 입력창 토글 함수
   ========================================= */
function toggleQ5(show) {
  const d = document.getElementById("q5Detail");
  if (d) d.style.display = show ? "block" : "none";
}

function toggleQ6(show) {
  const d = document.getElementById("q6Detail");
  if (d) d.style.display = show ? "block" : "none";
}

/* =========================================
   2. 데이터 정의 (Q5 중점검역관리지역 전용)
   ========================================= */
const q5Data = {
  lebanon_q5: {l:"레바논", d:"MERS", day:14}, 
  mada_q5: {l:"마다가스카르", d:"페스트", day:6},
  mongolia_q5: {l:"몽골", d:"페스트", day:6},
  nm_usa_q5: {l:"미국(뉴멕시코주)", d:"페스트", day:6}, 
  wa_usa_q5: {l:"미국(워싱턴주)", d:"AI", day:10},
  bahrain_q5: {l:"바레인", d:"MERS", day:14},
  bangladesh_q5: {
    l: "방글라데시",
    diseases: [
      { name: "AI", day: 10 },
      { name: "니파바이러스", day: 14 }
    ]
  },
  saudi_q5: {l:"사우디아라비아", d:"MERS", day:14}, 
  syria_q5: {l:"시리아", d:"MERS", day:14},
  uae_q5: {l:"아랍에미레이트", d:"MERS", day:14}, 
  yemen_q5: {l:"예멘", d:"MERS", day:14}, 
  oman_q5: {l:"오만", d:"MERS", day:14},
  jordan_q5: {l:"요르단", d:"MERS", day:14}, 
  iraq_q5: {l:"이라크", d:"MERS", day:14},
  iran_q5: {l:"이란", d:"MERS", day:14}, 
  israel_q5: {l:"이스라엘", d:"MERS", day:14},
  india_q5: {
    l: "인도",
    diseases: [
      { name: "AI", day: 10 },
      { name: "니파바이러스", day: 14 }
    ]
  },
  china_gd_q5: {l:"중국(광둥성)", d:"AI", day:10},
  china_gx_q5: {l:"중국(광시좡족자치구)", d:"AI", day:10}, 
  china_gz_q5: {l:"중국(구이저우성)", d:"AI", day:10}, 
  china_sx_q5: {l:"중국(산시성)", d:"AI", day:10},
  china_sc_q5: {l:"중국(쓰촨성)", d:"AI", day:10}, 
  china_tj_q5: {l:"중국(텐진시)", d:"AI", day:10}, 
  china_cq_q5: {l:"중국(충칭시)", d:"AI", day:10},
  china_hn_q5: {l:"중국(허난성)", d:"AI", day:10}, 
  china_hn2_q5: {l:"중국(후난성)", d:"AI", day:10}, 
  china_hb_q5: {l:"중국(후베이성)", d:"AI", day:10}, 
  qatar_q5: {l:"카타르", d:"MERS", day:14},
  cambodia_q5: {l:"캄보디아", d:"AI", day:10}, 
  congo_q5: {l:"콩고민주공화국", d:"페스트", day:6},
  kuwait_q5: {l:"쿠웨이트", d:"MERS", day:14}
};

const q6Data = {
  mexico_q6: [{d:"AI", day:10}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  wa_usa_q6: [{d:"AI", day:10}],
  bangladesh_q6: [{d:"AI", day:10}, {d:"콜레라", day:5}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}, {d:"니파바이러스", day:14}],
  india_q6: [{d:"AI", day:10}, {d:"콜레라", day:5}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}, {d:"니파바이러스", day:14}],
  china_gd_q6: [{d:"AI", day:10}, {d:"치쿤구니야열", day:12}],
  china_gx_q6: [{d:"AI", day:10}],
  china_gz_q6: [{d:"AI", day:10}],
  china_sx_q6: [{d:"AI", day:10}],
  china_sc_q6: [{d:"AI", day:10}],
  china_yn_q6: [{d:"AI", day:10}],
  china_cq_q6: [{d:"AI", day:10}],
  china_tj_q6: [{d:"AI", day:10}],
  china_hn_q6: [{d:"AI", day:10}],
  china_hn2_q6: [{d:"AI", day:10}],
  china_hb_q6: [{d:"AI", day:10}],
  cambodia_q6: [{d:"AI", day:10}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],

  south_sudan_q6: [{d:"에볼라", day:21}, {d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  rwanda_q6: [{d:"에볼라", day:21}, {d:"콜레라", day:5}, {d:"마버그열", day:21}, {d:"홍역", day:21}],
  ethiopia_q6: [{d:"에볼라", day:21}, {d:"콜레라", day:5}, {d:"황열", day:6}, {d:"마버그열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  uganda_q6: [{d:"에볼라", day:21}, {d:"콜레라", day:5}, {d:"황열", day:6}, {d:"마버그열", day:21}, {d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}],
  kenya_q6: [{d:"에볼라", day:21}, {d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  congo_dr_q6: [{d:"에볼라", day:21}, {d:"페스트", day:6}, {d:"콜레라", day:5}, {d:"황열", day:6}, {d:"마버그열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  tanzania_q6: [{d:"에볼라", day:21}, {d:"콜레라", day:5}, {d:"마버그열", day:21}, {d:"뎅기열", day:7}, {d:"홍역", day:21}],

  lebanon_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  bahrain_q6: [{d:"MERS", day:14}],
  saudi_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  syria_q6: [{d:"MERS", day:14}, {d:"콜레라", day:5}, {d:"홍역", day:21}],
  uae_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  yemen_q6: [{d:"MERS", day:14}, {d:"콜레라", day:5}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  oman_q6: [{d:"MERS", day:14}],
  jordan_q6: [{d:"MERS", day:14}],
  iraq_q6: [{d:"MERS", day:14}, {d:"콜레라", day:5}, {d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}],
  iran_q6: [{d:"MERS", day:14}, {d:"뎅기열", day:7}],
  israel_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  qatar_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  kuwait_q6: [{d:"MERS", day:14}],

  mada_q6: [{d:"페스트", day:6}, {d:"홍역", day:21}, {d:"치쿤구니야열", day:12}],
  mongolia_q6: [{d:"페스트", day:6}, {d:"홍역", day:21}],
  nm_usa_q6: [{d:"페스트", day:6}],

  ghana_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  nigeria_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"라싸열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  nepal_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  niger_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  malawi_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  mozambique_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  myanmar_q6: [{d:"콜레라", day:5}, {d:"뎅기열", day:7}],
  burundi_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  somalia_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}, {d:"치쿤구니야열", day:12}, {d:"폴리오", day:21}],
  sudan_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  afghanistan_q6: [{d:"콜레라", day:5}, {d:"크리미안콩고출혈열", day:14}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  angola_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  haiti_q6: [{d:"콜레라", day:5}],
  zambia_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  zimbabwe_q6: [{d:"콜레라", day:5}],
  chad_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  comoros_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  ivory_coast_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  congo_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  togo_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  pakistan_q6: [{d:"콜레라", day:5}, {d:"크리미안콩고출혈열", day:14}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  philippines_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],

  gabon_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  guyana_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  gambia_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  guinea_q6: [{d:"황열", day:6}, {d:"라싸열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  guinea_bissau_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  liberia_q6: [{d:"황열", day:6}, {d:"라싸열", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  mali_q6: [{d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  moritania_q6: [{d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  benin_q6: [{d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  venezuela_q6: [{d:"황열", day:6}],
  bolivia_q6: [{d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  burkina_faso_q6: [{d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  brazil_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  senegal_q6: [{d:"황열", day:6}, {d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  suriname_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  sierra_leone_q6: [{d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  argentina_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  ecuador_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}],
  "equatorial_guinea_q6": [{d:"황열", day:6}, {d:"홍역", day:21}],
  중앙아프리카공화국_q6: [{d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  cameroon_q6: [{d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  colombia_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  trinidad_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}],
  panama_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  paraguay_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  peru_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  french_guiana_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],

  greece_q6: [{d:"크리미안콩고출혈열", day:14}],
  spain_q6: [{d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}],
  kazakhstan_q6: [{d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}],

  laos_q6: [{d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  algeria_q6: [{d:"폴리오", day:21}, {d:"홍역", day:21}],
  papua_new_guinea_q6: [{d:"폴리오", day:21}],
  palestine_q6: [{d:"폴리오", day: 21}], 

  namibia_q6: [{d:"홍역", day:21}, {d:"콜레라", day:5}], 
  south_africa_q6: [{d:"홍역", day:21}],
  netherlands_q6: [{d:"홍역", day:21}],
  germany_q6: [{d:"홍역", day:21}],
  russia_q6: [{d:"홍역", day:21}],
  lesotho_q6: [{d:"홍역", day:21}],
  romania_q6: [{d:"홍역", day:21}],
  libya_q6: [{d:"홍역", day:21}],
  malaysia_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  morocco_q6: [{d:"홍역", day:21}],
  montenegro_q6: [{d:"홍역", day:21}],
  moldova_q6: [{d:"홍역", day:21}],
  vietnam_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}],
  belgium_q6: [{d:"홍역", day:21}],
  belize_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}],
  bosnia_q6: [{d:"홍역", day:21}],
  botswana_q6: [{d:"홍역", day:21}],
  serbia_q6: [{d:"홍역", day:21}],
  armenia_q6: [{d:"홍역", day:21}],
  ireland_q6: [{d:"홍역", day:21}],
  uk_q6: [{d:"홍역", day:21}],
  austria_q6: [{d:"홍역", day:21}],
  uzbekistan_q6: [{d:"홍역", day:21}],
  ukraine_q6: [{d:"홍역", day:21}],
  italy_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  indonesia_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  georgia_q6: [{d:"홍역", day:21}],
  지부티_q6: [{d:"홍역", day:21}],
  canada_q6: [{d:"홍역", day:21}],
  kyrgyzstan_q6: [{d:"홍역", day:21}],
  tajikistan_q6: [{d:"홍역", day:21}],
  thailand_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  tunisia_q6: [{d:"홍역", day:21}],
  turkiye_q6: [{d:"홍역", day:21}],
  poland_q6: [{d:"홍역", day:21}],
  france_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],

  guadeloupe_q6: [{d:"뎅기열", day:7}],
  guatemala_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  grenada_q6: [{d:"뎅기열", day:7}],
  nauru_q6: [{d:"뎅기열", day:7}],
  new_caledonia_q6: [{d:"뎅기열", day:7}],
  nicaragua_q6: [{d:"뎅기열", day:7}],
  taiwan_q6: [{d:"뎅기열", day:7}],
  dominica_q6: [{d:"뎅기열", day:7}],
  reunion_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  madeira_q6: [{d:"뎅기열", day:7}],
  martinique_q6: [{d:"뎅기열", day:7}],
  mayotte_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  micronesia_q6: [{d:"뎅기열", day:7}],
  mauritius_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  maldives_q6: [{d:"뎅기열", day:7}],
  usa_q6: [{d:"뎅기열", day:7}, {d:"홍역", day:21}, {d:"치쿤구니야열", day:12}],
  virgin_islands_usa_q6: [{d:"뎅기열", day:7}],
  vanuatu_q6: [{d:"뎅기열", day:7}],
  barbados_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  samoa_q6: [{d:"뎅기열", day:7}],
  st_barthelemy_q6: [{d:"뎅기열", day:7}],
  seychelles_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  st_lucia_q6: [{d:"뎅기열", day:7}],
  st_martin_q6: [{d:"뎅기열", day:7}],
  st_vincent_q6: [{d:"뎅기열", day:7}],
  st_kitts_q6: [{d:"뎅기열", day:7}],
  solomon_islands_q6: [{d:"뎅기열", day:7}],
  sri_lanka_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  sint_maarten_q6: [{d:"뎅기열", day:7}],
  singapore_q6: [{d:"뎅기열", day:7}, {d:"지카바이러스", day:14}],
  aruba_q6: [{d:"뎅기열", day:7}],
  antigua_q6: [{d:"뎅기열", day:7}],
  anguilla_q6: [{d:"뎅기열", day:7}],
  eritrea_q6: [{d:"뎅기열", day:7}],
  el_salvador_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  virgin_islands_uk_q6: [{d:"뎅기열", day:7}],
  australia_q6: [{d:"뎅기열", day:7}],
  honduras_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  wallis_q6: [{d:"뎅기열", day:7}],
  uruguay_q6: [{d:"뎅기열", day:7}],
  jamaica_q6: [{d:"뎅기열", day:7}],
  china_q6: [{d:"뎅기열", day:7}],
  cape_verde_q6: [{d:"뎅기열", day:7}],
  costa_rica_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  cuba_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  cook_islands_q6: [{d:"뎅기열", day:7}],
  kiribati_q6: [{d:"뎅기열", day:7}],
  tonga_q6: [{d:"뎅기열", day:7}],
  tuvalu_q6: [{d:"뎅기열", day:7}],
  palau_q6: [{d:"뎅기열", day:7}],
  polynesia_q6: [{d:"뎅기열", day:7}],
  puerto_rico_q6: [{d:"뎅기열", day:7}],
  fiji_q6: [{d:"뎅기열", day:7}],
  timor_leste_q6: [{d:"뎅기열", day:7}]
};

/* 한글 이름 라벨 매칭 (전체 수동 정렬) */
function regionLabelQ6(v) {
  const l = {
    // 가
    ghana_q6: "가나", gabon_q6: "가봉", guyana_q6: "가이아나", gambia_q6: "감비아", 
    guadeloupe_q6: "과들루프", guatemala_q6: "과테말라", greece_q6: "그리스", grenada_q6: "그레나다", 
    guinea_q6: "기니", guinea_bissau_q6: "기니비사우",
    // 나
    namibia_q6: "나미비아", nauru_q6: "나우루", nigeria_q6: "나이지리아", south_sudan_q6: "남수단", 
    south_africa_q6: "남아프리카공화국", netherlands_q6: "네덜란드", nepal_q6: "네팔", 
    new_caledonia_q6: "뉴칼레도니아", nicaragua_q6: "니카라과", niger_q6: "니제르",
    // 다
    taiwan_q6: "대만", germany_q6: "독일", timor_leste_q6: "동티모르", dominica_q6: "도미니카공화국",
    // 라
    laos_q6: "라오스", liberia_q6: "라이베리아", russia_q6: "러시아", lebanon_q6: "레바논", 
    lesotho_q6: "레소토", reunion_q6: "레위니옹", romania_q6: "루마니아", rwanda_q6: "르완다", 
    libya_q6: "리비아", lithuania_q6: "리투아니아",
    // 마
    mada_q6: "마다가스카르", madeira_q6: "마데이라", malawi_q6: "말라위", malaysia_q6: "말레이시아", 
    mali_q6: "말리", martinique_q6: "마르티니크", mayotte_q6: "마요트", mexico_q6: "멕시코", 
    morocco_q6: "모로코", moritania_q6: "모리타니", mauritius_q6: "모리셔스", mozambique_q6: "모잠비크", 
    montenegro_q6: "몬테네그로", moldova_q6: "몰도바", maldives_q6: "몰디브", mongolia_q6: "몽골", 
    micronesia_q6: "마이크로네시아", iowa_usa_q6: "미국(아이오와주)", nm_usa_q6: "미국(뉴멕시코주)", 
    wa_usa_q6: "미국(워싱턴주)", ca_usa_q6: "미국(캘리포니아주)", usa_q6: "미국", 
    virgin_islands_usa_q6: "미국령 버진아일랜드", myanmar_q6: "미얀마",
    // 바
    vanuatu_q6: "바누아투", bahrain_q6: "바레인", barbados_q6: "바베이도스", bangladesh_q6: "방글라데시", 
    benin_q6: "베냉", venezuela_q6: "베네수엘라", vietnam_q6: "베트남", vietnam_se_q6: "베트남(남동부)", 
    belgium_q6: "벨기에", belize_q6: "벨리즈", bosnia_q6: "보스니아 헤르체고비나", botswana_q6: "보츠와나", 
    bolivia_q6: "볼리비아", burundi_q6: "부룬디", burkina_faso_q6: "부르키나파소", brazil_q6: "브라질",
    // 사
    samoa_q6: "사모아", saudi_q6: "사우디아라비아", cyprus_q6: "사이프러스", st_barthelemy_q6: "생바르텔르미", 
    senegal_q6: "세네갈", serbia_q6: "세르비아", seychelles_q6: "세이셸", st_lucia_q6: "세인트루시아", 
    st_martin_q6: "세인트마틴", st_vincent_q6: "세인트빈센트그레나딘", st_kitts_q6: "세인트키츠 네비스", 
    somalia_q6: "소말리아", solomon_islands_q6: "솔로몬제도", sudan_q6: "수단", sri_lanka_q6: "스리랑카", 
    suriname_q6: "수리남", syria_q6: "시리아", sierra_leone_q6: "시에라리온", sint_maarten_q6: "신트마르턴", 
    singapore_q6: "싱가포르", spain_q6: "스페인",
    // 아
    aruba_q6: "아루바", uae_q6: "아랍에미레이트", argentina_q6: "아르헨티나", armenia_q6: "아르메니아", 
    haiti_q6: "아이티", ireland_q6: "아일랜드", afghanistan_q6: "아프가니스탄", antigua_q6: "앤티가 바부다", 
    albania_q6: "알바니아", algeria_q6: "알제리", angola_q6: "앙골라", anguilla_q6: "앵귈라", 
    eritrea_q6: "에리트레아", ecuador_q6: "에콰도르", ethiopia_q6: "에티오피아", el_salvador_q6: "엘살바도르", 
    uk_q6: "영국", virgin_islands_uk_q6: "영국령 버진아일랜드", yemen_q6: "예멘", oman_q6: "오만", 
    australia_q6: "오스트레일리아", austria_q6: "오스트리아", honduras_q6: "온두라스", jordan_q6: "요르단", 
    uganda_q6: "우간다", uruguay_q6: "우루과이", uzbekistan_q6: "우즈베키스탄", ukraine_q6: "우크라이나", 
    wallis_q6: "왈리스푸투나", iraq_q6: "이라크", iran_q6: "이란", israel_q6: "이스라엘", 
    italy_q6: "이탈리아", india_q6: "인도", indonesia_q6: "인도네시아",
    // 자
    jamaica_q6: "자메이카", zambia_q6: "잠비아", "equatorial_guinea_q6": "적도기니", georgia_q6: "조지아", 
    china_q6: "중국", china_gd_q6: "중국(광둥성)", china_gx_q6: "중국(광시좡족자치구)", 
    china_gz_q6: "중국(구이저우성)", china_sx_q6: "중국(산시성)", china_sc_q6: "중국(쓰촨성)", 
    china_yn_q6: "중국(원난성)", china_cq_q6: "중국(충칭시)", china_tj_q6: "중국(텐진시)", 
    china_hn_q6: "중국(허난성)", china_hn2_q6: "중국(후난성)", china_hb_q6: "중국(후베이성)", 
    중앙아프리카공화국_q6: "중앙아프리카공화국", 지부티_q6: "지부티", zimbabwe_q6: "짐바브웨",
    // 차
    chad_q6: "차드",
    // 카
    kazakhstan_q6: "카자흐스탄", qatar_q6: "카타르", cape_verde_q6: "카보베르데", cameroon_q6: "카메룬", 
    cambodia_q6: "캄보디아", canada_q6: "캐나다", kenya_q6: "케냐", comoros_q6: "코모로", 
    costa_rica_q6: "코스타리카", ivory_coast_q6: "코트디부아르", colombia_q6: "콜롬비아", 
    congo_q6: "콩고", congo_dr_q6: "콩고민주공화국", cuba_q6: "쿠바", kuwait_q6: "쿠웨이트", 
    cook_islands_q6: "쿡제도", kyrgyzstan_q6: "키르기스스탄", kiribati_q6: "키리바시",
    // 타
    tajikistan_q6: "타지키스탄", tanzania_q6: "탄자니아", thailand_q6: "태국", togo_q6: "토고", 
    tonga_q6: "통가", tunisia_q6: "튀니지", turkiye_q6: "튀르키예", tuvalu_q6: "투발루", 
    trinidad_q6: "트리니다드토바고",
    // 파
    panama_q6: "파나마", paraguay_q6: "파라과이", pakistan_q6: "파키스탄", papua_new_guinea_q6: "파푸아뉴기니", 
    palau_q6: "팔라우", palestine_q6: "팔레스타인", peru_q6: "페루", portugal_q6: "포르투갈", poland_q6: "폴란드", 
    polynesia_q6: "폴리네시아", puerto_rico_q6: "푸에르토리코", france_q6: "프랑스", 
    french_guiana_q6: "프랑스령 기아나", fiji_q6: "피지", philippines_q6: "필리핀",
    // 하
    hoju_q6: "호주"
  };
  return l[v] || v.replace("_q6","");
}

/* =========================================
   4. 폼 유효성 검사 (개별 문항 안내)
   ========================================= */
function validateForm(f) {
  const questions = [
    { id: "q1", msg: "Q1번 문항을 선택해주세요." },
    { id: "q2", msg: "Q2번 문항을 선택해주세요." },
    { id: "q3", msg: "Q3번 문항을 선택해주세요." },
    { id: "q4", msg: "Q4번 문항을 선택해주세요." },
    { id: "q5", msg: "Q5번 문항을 선택해주세요." },
    { id: "q6", msg: "Q6번 문항을 선택해주세요." },
    { id: "q7", msg: "Q7번 문항을 선택해주세요." },
    { id: "dock", msg: "Q8번 문항(접안 여부)을 선택해주세요." }, 
    { id: "depart48", msg: "Q9번 문항(출항 예정)을 선택해주세요." }, 
    { id: "boarding", msg: "Q10번 문항(승선자 여부)을 선택해주세요." } 
  ];

  // [1] 기본 라디오 버튼 체크 여부 확인
  for (let item of questions) {
    if (!f.get(item.id)) {
      alert(item.msg);
      return false;
    }
  }

  // [2] Q5 상세 입력 및 날짜 논리 체크
  if (f.get("q5") === "yes") {
    const depDate = f.get("q5_departure_date");
    const arrDate = f.get("q5_arrival_date");

    if (!f.get("q5_region") || !depDate || !arrDate) {
      alert("Q5 상세 항목(지역, 날짜)을 모두 입력해주세요.");
      return false;
    }

    // 날짜 비교: 입항일이 출항일보다 빠를 경우
    if (new Date(arrDate) < new Date(depDate)) {
      alert("오류: Q5 입항 예정일이 출항일보다 빠를 수 없습니다. 날짜를 확인해주세요.");
      return false;
    }
  }

  // [3] Q6 상세 입력 및 날짜 논리 체크
  if (f.get("q6") === "yes") {
    const onDate = f.get("q6_onboard_date");
    const arrDate = f.get("q6_arrival_date");

    if (!f.get("q6_region") || !onDate || !arrDate) {
      alert("Q6 상세 항목(지역, 날짜)을 모두 입력해주세요.");
      return false;
    }

    // 날짜 비교: 입항일이 승선일보다 빠를 경우
    if (new Date(arrDate) < new Date(onDate)) {
      alert("오류: Q6 입항 예정일이 승선일보다 빠를 수 없습니다. 날짜를 확인해주세요.");
      return false;
    }
  }

  return true; // 모든 검사를 통과하면 true 반환
}

/* =========================================
   5. 결과 계산 메인 함수 (사유 통합 및 로직 완성)
   ========================================= */
function calculateResult() {
  const f = new FormData(document.getElementById("surveyForm"));
  if (!validateForm(f)) return;

  const q = n => f.get(`q${n}`);
  const isDock = f.get("dock") === "yes";
  const isDepart48 = f.get("depart48") === "yes";
  const isNoBoarding = f.get("boarding") === "no";
  
  // [1] 조사생략 유일 조건: Q7 부적합 + 미접안 + 48시간 내 출항 + 승선자 없음
  const isExemptionCondition = (q(7) === "yes" && !isDock && isDepart48 && isNoBoarding);

  let reasons = [];

  // --- [STEP 1] 절대 승선검역 사유 (Q1 ~ Q4) ---
  if (q(1) === "yes") reasons.push("Q1: 선박 내 환자 또는 의심환자 발생");
  if (q(2) === "yes") reasons.push("Q2: 선박 내 사망자 발생");
  if (q(3) === "yes") reasons.push("Q3: 선원 또는 승객 중 유증상자 발생");
  if (q(4) === "yes") reasons.push("Q4: 선박 내 감염병 매개체 서식 또는 흔적 확인");

  // --- [STEP 2] Q5 잠복기 및 접안 체크 ---
  let q5InIncubation = false;
  let q5Reason = "";
  if (q(5) === "yes") {
    const data = q5Data[f.get("q5_region")];
    const diff = (new Date(f.get("q5_arrival_date")) - new Date(f.get("q5_departure_date"))) / 86400000;
    if (data) {
      if (data.diseases) {
        let active = data.diseases.filter(dis => diff <= dis.day).map(dis => `Q5: ${data.l} / ${dis.name} 잠복기 내 (${dis.day}일)`);
        if (active.length > 0) { q5InIncubation = true; q5Reason = active.join("<br>"); }
      } else if (diff <= data.day) {
        q5InIncubation = true;
        q5Reason = `Q5: ${data.l} / ${data.d} 잠복기 내 (${data.day}일)`;
      }
    }
  }

  // Q5는 잠복기 이내이면서 '접안'했을 때만 승선 사유 추가
  if (q5InIncubation && isDock) {
    reasons.push(q5Reason);
  }

  // --- [STEP 3] Q7 부적합 및 승선/생략 판정 ---
  const isQ7Yes = q(7) === "yes";

  // [최종 판정 1] 조사생략 (딱 1가지 경우)
  if (isExemptionCondition && reasons.length === 0) {
    renderResult("조사생략", "", "#22c55e");
    return;
  }

  // [최종 판정 2] Q7 승선검역 (조사생략 조건을 만족하지 못한 Q7 부적합 선박)
  if (isQ7Yes && !isExemptionCondition) {
    reasons.push("Q7: 선박위생관리(면제)증명서 미소지 또는 유효기간 만료");
  }

  // --- [STEP 4] 최종 출력 ---
  if (reasons.length > 0) {
    // 승선검역: 수집된 사유(박스)와 함께 출력
    renderResult("승선검역", reasons.join("<br>"), "#ef4444");
  } else {
    // 서류검역: 사유 박스 없이 출력 (Q6 잠복기 등 나머지는 모두 여기로 옴)
    renderResult("서류검역", "", "#f59e0b");
  }
}
/* =========================================
   6. 디자인 출력 함수 (사유 박스 조건부 렌더링)
   ========================================= */
function renderResult(t, r, c) {
  const rb = document.getElementById("result");
  rb.style.display = "block";
  rb.style.borderTop = `6px solid ${c}`;
  
  let reasonHtml = "";
  if (r && r.trim() !== "") {
    reasonHtml = `
      <div style="background:#f1f5f9; padding:15px; border-radius:10px; font-size:15px; color:#334155; line-height:1.6; text-align:left; border:1px solid #e2e8f0; margin-top:10px;">
        <strong style="color:${c}">● 사유:</strong><br>${r}
      </div>`;
  }

  const titleMargin = r ? "15px" : "30px";

  rb.innerHTML = `
    <div style="text-align:center; padding: 20px 0;">
      <p style="font-size:14px; color:#64748b; margin-bottom:10px; font-weight:500;">자동 판별 결과</p>
      <h2 style="font-size:40px; color:${c}; margin:0 0 ${titleMargin} 0; font-weight:900; letter-spacing:-1px;">${t}</h2>
      ${reasonHtml}
      <button onclick="location.reload()" 
              style="margin-top:10px; background:white; border:1px solid #cbd5e1; padding:10px 20px; border-radius:8px; cursor:pointer; font-size:14px; color:#64748b; font-weight:500;">
        처음부터 다시하기
      </button>
    </div>
  `;
  
  setTimeout(() => {
    rb.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}
/* =========================================
   [추가] 탭 전환 및 간편 판정 로직 (꼬임 방지)
   ========================================= */

// 1. 탭 전환 기능 함수
function openTab(evt, tabName) {
  // 모든 탭 콘텐츠 숨기기
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  
  // 모든 탭 버튼에서 active 클래스 제거
  const tabBtns = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove("active");
  }
  
  // 선택된 탭 보여주기 및 버튼 활성화
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

/* =========================================
   [최종] 두 번째 탭: 중점·검역관리 통합 판정 로직
   ========================================= */
function calculateCoreResult() {
  const coreForm = document.getElementById("coreForm");
  const f = new FormData(coreForm);
  
  const rawId = f.get("core_region"); 
  const depDate = f.get("core_departure_date");
  const arrDate = f.get("core_arrival_date");

  if (!rawId || !depDate || !arrDate) {
    alert("지역과 날짜를 모두 선택해주세요.");
    return;
  }

  const dDate = new Date(depDate);
  const aDate = new Date(arrDate);

  if (aDate < dDate) {
    alert("입항일이 출항(경유)일보다 빠를 수 없습니다. 날짜를 다시 확인해 주세요.");
    return; // 여기서 실행을 중단시킵니다.
  }
   
  const diff = (new Date(arrDate) - new Date(depDate)) / 86400000;
  const baseId = rawId.replace("_q5", "").replace("_q6", ""); 
  
  let titles = [];
  let details = [];

  // --- [1] 중점검역관리지역(Q5) 데이터 조회 ---
  const q5Key = baseId + "_q5";
  const d5 = q5Data[q5Key];
  if (d5) {
    let activeQ5 = [];
    if (d5.diseases) {
      activeQ5 = d5.diseases
        .filter(d => diff <= d.day)
        .map(d => `${d5.l} 출항(경유) / ${d.name} 최대 잠복기간 이내 입항 (${d.day}일)`);
    } else if (diff <= d5.day) {
      activeQ5.push(`${d5.l} 출항(경유) / ${d5.d} 최대 잠복기간 이내 입항 (${d5.day}일)`);
    }
    
    if (activeQ5.length > 0) {
      titles.push("중점검역관리지역 출항(경유)");
      details = details.concat(activeQ5);
    }
  }

  // --- [2] 일반 검역관리지역(Q6) 데이터 조회 ---
  const q6Key = baseId + "_q6";
  const d6 = q6Data[q6Key];
  if (d6) {
    const hangleName = regionLabelQ6(q6Key);
    const activeQ6 = d6
      .filter(d => diff <= d.day)
      .map(d => `${hangleName} 출항(경유) / ${d.d} 최대 잠복기간 이내 입항 (${d.day}일)`);
    
    if (activeQ6.length > 0) {
      titles.push("검역관리지역 출항(경유)");
      details = details.concat(activeQ6);
    }
  }

  const resultDiv = document.getElementById("coreResult");
  resultDiv.style.display = "block";

  // --- [3] 화면 출력 (제목 나열 및 상세 내역 통합) ---
  if (titles.length > 0) {
    resultDiv.style.borderTop = "6px solid var(--danger-red)";
    resultDiv.innerHTML = `
      <div style="padding: 10px;">
        ${titles.map(t => `<h2 style="font-size:24px; color:var(--danger-red); margin:0 0 8px 0; font-weight:900; line-height:1.2;">${t}</h2>`).join("")}
        
        <div style="margin-top:15px; background:#fef2f2; padding:15px; border-radius:10px; border:1px solid #fee2e2; text-align:left; font-size:15px; color:#1e293b; line-height:1.6; word-break:keep-all;">
          ${details.join("<br>")}
        </div>
        <button onclick="location.reload()" style="margin-top:15px; background:none; border:1px solid #cbd5e1; padding:8px 15px; border-radius:6px; cursor:pointer; color:#64748b; font-size:13px;">다시하기</button>
      </div>
    `;
  } else {
    // 잠복기 경과 시 "해당사항 없음"
    resultDiv.style.borderTop = "6px solid var(--accent-blue)";
    resultDiv.innerHTML = `
      <div style="padding: 10px;">
        <h2 style="font-size:32px; color:var(--accent-blue); margin:0 0 10px 0; font-weight:900;">해당사항 없음</h2>
        <p style="font-size:15px; color:#1e293b; margin:0;">모든 중점 및 검역관리 질병의 잠복기가 경과되었습니다.</p>
        <button onclick="location.reload()" style="margin-top:15px; background:none; border:1px solid #cbd5e1; padding:8px 15px; border-radius:6px; cursor:pointer; color:#64748b; font-size:13px;">다시하기</button>
      </div>
    `;
  }
  
  // 스크롤 이동
  setTimeout(() => {
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}
