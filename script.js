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
  ghana_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  gabon_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  guyana_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}],
  gambia_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  greece_q6: [{d:"크리미안콩고출혈열", day:14}],
  guinea_q6: [{d:"황열", day:6}, {d:"라싸열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  guinea_bissau_q6: [{d:"황열", day:6}, {d:"홍역", day:21}],
  namibia_q6: [{d:"홍역", day:21}],
  nigeria_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"라싸열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  south_sudan_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}, {d:"홍역", day:21}],
  south_africa_q6: [{d:"홍역", day:21}],
  netherlands_q6: [{d:"홍역", day:21}],
  nepal_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  niger_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  germany_q6: [{d:"홍역", day:21}],
  laos_q6: [{d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  liberia_q6: [{d:"황열", day:6}, {d:"라싸열", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  russia_q6: [{d:"홍역", day:21}],
  lebanon_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  lesotho_q6: [{d:"홍역", day:21}],
  romania_q6: [{d:"홍역", day:21}],
  rwanda_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}, {d:"마버그열", day:21}, {d:"홍역", day:21}],
  libya_q6: [{d:"홍역", day:21}],
  lithuania_q6: [{d:"홍역", day:21}],
  mada_q6: [{d:"페스트", day:6}, {d:"홍역", day:21}, {d:"치쿤구니야열", day:12}],
  malawi_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  malaysia_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  mali_q6: [{d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  mexico_q6: [{d:"AI", day:10}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  morocco_q6: [{d:"홍역", day:21}],
  moritania_q6: [{d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  mozambique_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  montenegro_q6: [{d:"홍역", day:21}],
  moldova_q6: [{d:"홍역", day:21}],
  mongolia_q6: [{d:"홍역", day:21}],
  iowa_usa_q6: [{d:"AI", day:10}],
  wa_usa_q6: [{d:"AI", day:10}],
  ca_usa_q6: [{d:"AI", day:10}],
  usa_q6: [{d:"뎅기열", day:7}],
  myanmar_q6: [{d:"콜레라", day:5}, {d:"뎅기열", day:7}],
  bahrain_q6: [{d:"MERS", day:14}],
  bangladesh_q6: [{d:"AI", day:10}, {d:"콜레라", day:5}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}, {d:"니파바이러스", day:14}],
  benin_q6: [{d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  vietnam_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}],
  vietnam_se_q6: [{d:"AI", day:10}],
  belgium_q6: [{d:"홍역", day:21}],
  belize_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}],
  bosnia_q6: [{d:"홍역", day:21}],
  botswana_q6: [{d:"홍역", day:21}],
  bolivia_q6: [{d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  burundi_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  burkina_faso_q6: [{d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  brazil_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  saudi_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  cyprus_q6: [{d:"홍역", day:21}],
  senegal_q6: [{d:"황열", day:6}, {d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  serbia_q6: [{d:"홍역", day:21}],
  somalia_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}, {d:"치쿤구니야열", day:12}],
  sudan_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  suriname_q6: [{d:"황열", day:6}],
  syria_q6: [{d:"MERS", day:14}, {d:"콜레라", day:5}, {d:"홍역", day:21}],
  sierra_leone_q6: [{d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  spain_q6: [{d:"크리미안콩고출혈열", day:14}],
  uae_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  argentina_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  armenia_q6: [{d:"홍역", day:21}],
  haiti_q6: [{d:"콜레라", day:5}],
  ireland_q6: [{d:"홍역", day:21}],
  afghanistan_q6: [{d:"콜레라", day:5}, {d:"크리미안콩고출혈열", day:14}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  albania_q6: [{d:"홍역", day:21}],
  algeria_q6: [{d:"폴리오", day:21}, {d:"홍역", day:21}],
  angola_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  ecuador_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}],
  ethiopia_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"마버그열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  uk_q6: [{d:"홍역", day:21}],
  yemen_q6: [{d:"MERS", day:14}, {d:"콜레라", day:5}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  austria_q6: [{d:"홍역", day:21}],
  oman_q6: [{d:"MERS", day:14}],
  jordan_q6: [{d:"MERS", day:14}],
  uganda_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}, {d:"마버그열", day:21}, {d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}],
  uzbekistan_q6: [{d:"홍역", day:21}],
  ukraine_q6: [{d:"홍역", day:21}],
  iraq_q6: [{d:"MERS", day:14}, {d:"콜레라", day:5}, {d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}],
  iran_q6: [{d:"MERS", day:14}, {d:"뎅기열", day:7}],
  israel_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  egypt_q6: [{d:"홍역", day:21}],
  italy_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  india_q6: [{d:"AI", day:10}, {d:"콜레라", day:5}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}, {d:"니파바이러스", day:14}],
  indonesia_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  zambia_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}],
  georgia_q6: [{d:"홍역", day:21}],
  china_q6: [{d:"뎅기열", day:7}],
  china_gd_q6: [{d:"AI", day:10}, {d:"치쿤구니야열", day:12}],
  중앙아프리카공화국_q6: [{d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  지부티_q6: [{d:"홍역", day:21}],
  zimbabwe_q6: [{d:"콜레라", day:5}],
  chad_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  kazakhstan_q6: [{d:"크리미안콩고출혈열", day:14}, {d:"홍역", day:21}],
  qatar_q6: [{d:"MERS", day:14}, {d:"홍역", day:21}],
  cameroon_q6: [{d:"황열", day:6}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  cambodia_q6: [{d:"AI", day:10}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  canada_q6: [{d:"홍역", day:21}],
  kenya_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  comoros_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  ivory_coast_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  colombia_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  congo_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}],
  congo_dr_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"에볼라", day:21}, {d:"마버그열", day:21}, {d:"폴리오", day:21}, {d:"홍역", day:21}],
  kuwait_q6: [{d:"MERS", day:14}],
  kyrgyzstan_q6: [{d:"홍역", day:21}],
  tajikistan_q6: [{d:"홍역", day:21}],
  tanzania_q6: [{d:"콜레라", day:5}, {d:"에볼라", day:21}, {d:"마버그열", day:21}, {d:"뎅기열", day:7}],
  thailand_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  togo_q6: [{d:"콜레라", day:5}, {d:"황열", day:6}, {d:"홍역", day:21}, {d:"뎅기열", day:7}],
  tunisia_q6: [{d:"홍역", day:21}],
  turkiye_q6: [{d:"홍역", day:21}],
  trinidad_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}],
  panama_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}],
  paraguay_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  pakistan_q6: [{d:"콜레라", day:5}, {d:"크리미안콩고출혈열", day:14}, {d:"폴리오", day:21}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  papua_new_guinea_q6: [{d:"폴리오", day:21}],
  peru_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  poland_q6: [{d:"홍역", day:21}],
  france_q6: [{d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  philippines_q6: [{d:"콜레라", day:5}, {d:"홍역", day:21}, {d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  french_guiana_q6: [{d:"황열", day:6}, {d:"뎅기열", day:7}],
  
  // 신규 추가 국가들 (뎅기열/치쿤구니야열 등)
  guadeloupe_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
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
  maldives_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  virgin_islands_usa_q6: [{d:"뎅기열", day:7}],
  vanuatu_q6: [{d:"뎅기열", day:7}],
  barbados_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  samoa_q6: [{d:"뎅기열", day:7}],
  st_barthelemy_q6: [{d:"뎅기열", day:7}],
  seychelles_q6: [{d:"뎅기열", day:7}],
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
  uruguay_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  jamaica_q6: [{d:"뎅기열", day:7}],
  cape_verde_q6: [{d:"뎅기열", day:7}],
  costa_rica_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}, {d:"지카바이러스", day:14}],
  cuba_q6: [{d:"뎅기열", day:7}, {d:"치쿤구니야열", day:12}],
  cook_islands_q6: [{d:"뎅기열", day:7}],
  kiribati_q6: [{d:"뎅기열", day:7}],
  tonga_q6: [{d:"뎅기열", day:7}],
  tuvalu_q6: [{d:"뎅기열", day:7}],
  palau_q6: [{d:"뎅기열", day:7}],
  portugal_q6: [{d:"뎅기열", day:7}],
  polynesia_q6: [{d:"뎅기열", day:7}],
  puerto_rico_q6: [{d:"뎅기열", day:7}],
  fiji_q6: [{d:"뎅기열", day:7}],
  hoju_q6: [{d:"뎅기열", day:7}],
  timor_leste_q6: [{d:"치쿤구니야열", day:12}]
};

/* 한글 이름 라벨 매칭 (전체 수동 정렬) */
function regionLabelQ6(v) {
  const l = {
    ghana_q6: "가나", gabon_q6: "가봉", guyana_q6: "가이아나", gambia_q6: "감비아", greece_q6: "그리스", guinea_q6: "기니", guinea_bissau_q6: "기니비사우", namibia_q6: "나미비아", nigeria_q6: "나이지리아", south_sudan_q6: "남수단", south_africa_q6: "남아프리카공화국", netherlands_q6: "네덜란드", nepal_q6: "네팔", niger_q6: "니제르", germany_q6: "독일", laos_q6: "라오스", liberia_q6: "라이베리아", russia_q6: "러시아", lebanon_q6: "레바논", lesotho_q6: "레소토", romania_q6: "루마니아", rwanda_q6: "르완다", libya_q6: "리비아", lithuania_q6: "리투아니아", mada_q6: "마다가스카르", malawi_q6: "말라위", malaysia_q6: "말레이시아", mali_q6: "말리", mexico_q6: "멕시코", morocco_q6: "모로코", moritania_q6: "모리타니", mozambique_q6: "모잠비크", montenegro_q6: "몬테네그로", moldova_q6: "몰도바", mongolia_q6: "몽골", iowa_usa_q6: "미국(아이오와주)", wa_usa_q6: "미국(워싱턴주)", ca_usa_q6: "미국(캘리포니아주)", usa_q6: "미국", myanmar_q6: "미얀마", bahrain_q6: "바레인", bangladesh_q6: "방글라데시", benin_q6: "베냉", vietnam_q6: "베트남", vietnam_se_q6: "베트남(남동부)", belgium_q6: "벨기에", belize_q6: "벨리즈", bosnia_q6: "보스니아 헤르체고비나", botswana_q6: "보츠와나", bolivia_q6: "볼리비아", burundi_q6: "부룬디", burkina_faso_q6: "부르키나파소", brazil_q6: "브라질", saudi_q6: "사우디아라비아", cyprus_q6: "사이프러스", senegal_q6: "세네갈", serbia_q6: "세르비아", somalia_q6: "소말리아", sudan_q6: "수단", suriname_q6: "수리남", syria_q6: "시리아", sierra_leone_q6: "시에라리온", spain_q6: "스페인", uae_q6: "아랍에미리트", argentina_q6: "아르헨티나", armenia_q6: "아르메니아", haiti_q6: "아이티", ireland_q6: "아일랜드", afghanistan_q6: "아프가니스탄", albania_q6: "알바니아", algeria_q6: "알제리", angola_q6: "앙골라", ecuador_q6: "에콰도르", ethiopia_q6: "에티오피아", uk_q6: "영국", yemen_q6: "예멘", austria_q6: "오스트리아", oman_q6: "오만", jordan_q6: "요르단", uganda_q6: "우간다", uzbekistan_q6: "우즈베키스탄", ukraine_q6: "우크라이나", iraq_q6: "이라크", iran_q6: "이란", israel_q6: "이스라엘", egypt_q6: "이집트", italy_q6: "이탈리아", india_q6: "인도", indonesia_q6: "인도네시아", zambia_q6: "잠비아", georgia_q6: "조지아", china_q6: "중국", china_gd_q6: "중국(광둥성)", china_gx_q6: "중국(광시좡족자치구)", china_gz_q6: "중국(구이저우성)", china_sx_q6: "중국(산시성)", china_sc_q6: "중국(쓰촨성)", china_yn_q6: "중국(운남성)", china_cq_q6: "중국(충칭시)", china_tj_q6: "중국(텐진시)", china_hn_q6: "중국(허난성)", china_hn2_q6: "중국(후난성)", china_hb_q6: "중국(후베이성)", 중앙아프리카공화국_q6: "중앙아프리카공화국", 지부티_q6: "지부티", zimbabwe_q6: "짐바브웨", chad_q6: "차드", kazakhstan_q6: "카자흐스탄", qatar_q6: "카타르", cameroon_q6: "카메룬", cambodia_q6: "캄보디아", canada_q6: "캐나다", kenya_q6: "케냐", comoros_q6: "코모로", ivory_coast_q6: "코트디부아르", colombia_q6: "콜롬비아", congo_q6: "콩고", congo_dr_q6: "콩고민주공화국", kuwait_q6: "쿠웨이트", kyrgyzstan_q6: "키르기스스탄", tajikistan_q6: "타지키스탄", tanzania_q6: "탄자니아", thailand_q6: "태국", togo_q6: "토고", tunisia_q6: "튀니지", turkiye_q6: "튀르키예", trinidad_q6: "트리니다드토바고", panama_q6: "파나마", paraguay_q6: "파라과이", pakistan_q6: "파키스탄", papua_new_guinea_q6: "파푸아뉴기니", peru_q6: "페루", poland_q6: "폴란드", france_q6: "프랑스", philippines_q6: "필리핀", french_guiana_q6: "프랑스령 기아나",
    guadeloupe_q6: "과들루프", guatemala_q6: "과테말라", grenada_q6: "그레나다", nauru_q6: "나우루", new_caledonia_q6: "뉴칼레도니아", nicaragua_q6: "니카라과", taiwan_q6: "대만", dominica_q6: "도미니카공화국", reunion_q6: "레위니옹", madeira_q6: "마데이라", martinique_q6: "마르티니크", mayotte_q6: "마요트", micronesia_q6: "마이크로네시아", mauritius_q6: "모리셔스", maldives_q6: "몰디브", virgin_islands_usa_q6: "미국령 버진아일랜드", vanuatu_q6: "바누아투", barbados_q6: "바베이도스", samoa_q6: "사모아", st_barthelemy_q6: "생바르텔르미", seychelles_q6: "세이셸", st_lucia_q6: "세인트루시아", st_martin_q6: "세인트마틴", st_vincent_q6: "세인트빈센트", st_kitts_q6: "세인트키츠 네비스", solomon_islands_q6: "솔로몬제도", sri_lanka_q6: "스리랑카", sint_maarten_q6: "신트마르턴", singapore_q6: "싱가포르", aruba_q6: "아루바", antigua_q6: "앤티가 바부다", anguilla_q6: "앵귈라", eritrea_q6: "에리트레아", el_salvador_q6: "엘살바도르", virgin_islands_uk_q6: "영국령 버진아일랜드", australia_q6: "오스트레일리아", honduras_q6: "온두라스", wallis_q6: "왈리스푸투나", jamaica_q6: "자메이카", cape_verde_q6: "카보베르데", costa_rica_q6: "코스타리카", cuba_q6: "쿠바", cook_islands_q6: "쿡제도", kiribati_q6: "키리바시", tonga_q6: "통가", tuvalu_q6: "투발루", palau_q6: "팔라우", portugal_q6: "포르투칼", polynesia_q6: "폴리네시아", puerto_rico_q6: "푸에르토리코", fiji_q6: "피지", hoju_q6: "호주", timor_leste_q6: "동티모르"
  };
  return l[v] || v.replace("_q6","");
}

/* =========================================
   4. 폼 유효성 검사 (입력 강제 및 날짜 논리 체크)
   ========================================= */
function validateForm(f) {
  // 필수 기본 문항 체크 (Q1~Q7)
  const basicQs = ["q1", "q2", "q3", "q4", "q5", "q6", "q7"];
  for (let q of basicQs) {
    if (!f.get(q)) {
      alert(`${q.toUpperCase()}번 문항을 선택해주세요.`);
      return false;
    }
  }

  // Q5 상세 입력 및 날짜 체크
  if (f.get("q5") === "yes") {
    const reg = f.get("q5_region");
    const dStr = f.get("q5_departure_date");
    const aStr = f.get("q5_arrival_date");
    if (!reg || !dStr || !aStr) {
      alert("Q5 상세 항목(지역, 날짜)을 모두 입력해야 결과 확인이 가능합니다.");
      return false;
    }
    if (new Date(aStr) < new Date(dStr)) {
      alert("오류: Q5 입항 예정일이 출항일보다 빠를 수 없습니다.");
      return false;
    }
  }

  // Q6 상세 입력 및 날짜 체크
  if (f.get("q6") === "yes") {
    const reg = f.get("q6_region");
    const oStr = f.get("q6_onboard_date");
    const aStr = f.get("q6_arrival_date");
    if (!reg || !oStr || !aStr) {
      alert("Q6 상세 항목(지역, 날짜)을 모두 입력해야 결과 확인이 가능합니다.");
      return false;
    }
    if (new Date(aStr) < new Date(oStr)) {
      alert("오류: Q6 입항 예정일이 승선일보다 빠를 수 없습니다.");
      return false;
    }
  }

  // 기타사항 필수 체크
  if (!f.get("depart48") || !f.get("boarding") || !f.get("dock")) {
    alert("기타사항(접안여부, 출항시간, 승선자)을 모두 선택해주세요.");
    return false;
  }

  return true;
}

/* =========================================
   5. 결과 계산 메인 함수 (최종 개편 로직)
   ========================================= */
function calculateResult() {
  const f = new FormData(document.getElementById("surveyForm"));
  if (!validateForm(f)) return;

  const q = n => f.get(`q${n}`);
  const isDock = f.get("dock") === "yes";
  const isDepart48 = f.get("depart48") === "yes";
  const isNoBoarding = f.get("boarding") === "no";
  
  // 조사생략 공통 조건: 미접안 + 48시간 이내 출항 + 승선자 없음
  const isExemptionCondition = (!isDock && isDepart48 && isNoBoarding);

  let reasons = [];

  // --- [1] STEP 1: 즉시 승선검역 (최우선) ---
  if (q(1) === "yes") reasons.push("Q1: 선박 내 검역감염병 환자 또는 의심환자 발생으로 즉시 승선검역 대상");
  if (q(2) === "yes") reasons.push("Q2: 선박 내 사망자 발생으로 즉시 승선검역 대상");
  if (q(3) === "yes") reasons.push("Q3: 선원 또는 승객 중 유증상자(발열, 설사, 구토 등) 발생으로 즉시 승선검역 대상");
  if (q(4) === "yes") reasons.push("Q4: 선박 내 감염병 매개체의 서식 또는 흔적이 확인되어 즉시 승선검역 대상");

  if (reasons.length > 0) {
    renderResult("승선검역", reasons.join("<br>"), "#ef4444");
    return;
  }

  // --- [2] 조사생략 판정 (Q5, Q6, Q7이 '예'이더라도 특정 조건 충족 시) ---
  const isQ5Yes = q(5) === "yes";
  const isQ6Yes = q(6) === "yes";
  const isQ7Yes = q(7) === "yes";

  // 잠복기 체크용 변수
  let q5InIncubation = false;
  let q6InIncubation = false;
  let q5Reason = "";
  let q6Reasons = [];

  if (isQ5Yes) {
    const data = q5Data[f.get("q5_region")];
    const diff = (new Date(f.get("q5_arrival_date")) - new Date(f.get("q5_departure_date"))) / 86400000;
    if (data && diff <= data.day) {
      q5InIncubation = true;
      q5Reason = `Q5: ${data.l}. ${data.d} 중점검역관리지역 출항(경유) 후 최대 잠복기간 이내 입항 (${data.day}일)`;
    }
  }

  if (isQ6Yes) {
    const reg = f.get("q6_region");
    const diff = (new Date(f.get("q6_arrival_date")) - new Date(f.get("q6_onboard_date"))) / 86400000;
    const diseases = q6Data[reg] || [];
    diseases.forEach(d => {
      if (diff <= d.day) {
        q6InIncubation = true;
        q6Reasons.push(`Q6: ${regionLabelQ6(reg)} 승선 / ${d.d} 최대 잠복기간 내 선원교대 (${d.day}일)`);
      }
    });
  }

  // 조사생략 대상 여부 확인 (Q5, Q6, Q7 중 위험요소가 있으나 생략 조건을 만족할 때)
  if ((q5InIncubation || q6InIncubation || isQ7Yes) && isExemptionCondition) {
    renderResult("조사생략", "", "#22c55e");
    return;
  }

  // --- [3] 승선검역 판정 (나머지 위험 상황) ---
  if (q5InIncubation) reasons.push(q5Reason);
  
  // Q6는 잠복기 이내이면서 '접안'할 때 승선검역
  if (q6InIncubation && isDock) {
    reasons = reasons.concat(q6Reasons);
  }

  if (isQ7Yes) {
    reasons.push("Q7: 선박위생관리(면제)증명서 미소지 또는 유효기간 만료");
  }

  if (reasons.length > 0) {
    renderResult("승선검역", reasons.join("<br>"), "#ef4444");
    return;
  }

  // --- [4] 그 외 모두 서류심사 ---
  renderResult("서류심사", "", "#f59e0b");
}

/* 결과 출력 함수 */
function renderResult(t, r, c) {
  const rb = document.getElementById("result");
  rb.style.display = "block";
  rb.style.borderTop = `6px solid ${c}`;
  
  let reasonHtml = "";
  if (r) {
    reasonHtml = `
      <div style="background:#f1f5f9; padding:15px; border-radius:10px; font-size:15px; color:#334155; line-height:1.6; text-align:left; border:1px solid #e2e8f0;">
        <strong style="color:${c}">● 사유:</strong><br>${r}
      </div>`;
  }

  rb.innerHTML = `
    <div style="text-align:center; padding: 10px 0;">
      <h2 style="font-size:32px; color:${c}; margin:0 0 15px 0; font-weight:900;">${t}</h2>
      ${reasonHtml}
      <button onclick="location.reload()" style="margin-top:20px; background:white; border:1px solid #cbd5e1; padding:10px 20px; border-radius:8px; cursor:pointer;">처음부터 다시하기</button>
    </div>
  `;
  rb.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* =========================================
   6. 디자인 출력 함수
   ========================================= */
function renderResult(t, r, c) {
  const rb = document.getElementById("result");
  rb.style.display = "block";
  rb.style.borderTop = `6px solid ${c}`;
  rb.innerHTML = `
    <div style="text-align:center; padding: 10px 0;">
      <p style="font-size:14px; color:#64748b; margin-bottom:5px; font-weight:500;">자동 판별 결과</p>
      <h2 style="font-size:32px; color:${c}; margin:0 0 15px 0; font-weight:900; letter-spacing:-1px;">${t}</h2>
      <div style="background:#f1f5f9; padding:15px; border-radius:10px; font-size:15px; color:#334155; line-height:1.6; text-align:left; border:1px solid #e2e8f0;">
        <strong style="color:${c}">● 사유:</strong><br>${r}
      </div>
      <button onclick="window.scrollTo({top:0, behavior:'smooth'}); setTimeout(()=>location.reload(), 500);" 
              style="margin-top:20px; background:white; border:1px solid #cbd5e1; padding:10px 20px; border-radius:8px; cursor:pointer; font-size:14px; color:#64748b; font-weight:500;">
        처음부터 다시하기
      </button>
    </div>
  `;
  setTimeout(() => { rb.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 100);
}
