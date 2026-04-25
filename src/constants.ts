import { DayData, MapGroup, FoodItem, ShoppingItem, CouponItem } from './types';

export const ITINERARY_DATA: DayData[] = [
  {
    day: 1,
    title: "豪華帝王蟹與弘大探索",
    highlights: "AREX、帝王蟹、人生四格",
    sections: [
      { 
        time: "11:00", 
        text: "抵達仁川機場，搭乘<strong>AREX 普通車</strong> 往弘大入口站。",
        transport: "subway",
        transportTip: "AREX直達最省時，小孩入站半價。"
      },
      { 
        time: "13:00", 
        text: "午餐：波妞推薦 <strong>豚壽百豬肉湯飯</strong>（濃郁白湯，五歲小孩超愛，嚴禁牛羊者首選）。",
        transport: "walk",
        transportTip: "弘大站出口步行5分鐘內。"
      },
      {
        time: "14:30",
        text: "前往住宿點辦理 Check-in 或寄放行李：<br/>🏠 <strong>Julie's Place</strong> (2手房型，弘大站步行1分鐘)。",
        transport: "walk",
        transportTip: "離弘大站超級近，就在商圈核心區。"
      },
      { 
        time: "15:30", 
        text: "【豪華晚餐】搭計程車前往「麻浦農水產物市場」，前往 <strong>3112 攤位</strong> 挑選現蒸帝王蟹。",
        transport: "taxi",
        transportTip: "3人搭車比轉地鐵方便，且市場採買更省體力。"
      },
      { 
        time: "18:00", 
        text: "弘大商圈詳細攻略（結合紹紹 & 篠崎泫推薦）：<br/>- <strong>MMLG</strong>：在地知名街頭品牌。<br/>- <strong>What It Isnt</strong>：經典天使 Logo 潮流服飾。<br/>- <strong>Butter</strong>：生活雜貨選物店（小孩超愛）。<br/>- <strong>Lee / Fallett</strong>：休閒與設計感品牌。<br/>- <strong>Sigonggan</strong>：整面牆的耳環飾品天花板。<br/>- <strong>Common Unique</strong>：韓劇常見的甜美韓系穿搭。<br/>- <strong>Supernova</strong>：復古美式校園風服飾。<br/>- <strong>MUSINSA Standard</strong>：韓國版 Uniqlo，必買修身西裝褲。<br/>- <strong>Marithe / emis</strong>：今年最火紅的品牌，弘大旗艦店非常齊全。",
        transport: "taxi",
        transportTip: "吃飽後建議直接坐計程車回弘大主戰場逛街。"
      },
      { 
        time: "20:30", 
        text: "拍「人生四格」照片，留下珍貴家庭回憶。",
        transport: "walk",
        transportTip: "弘大商圈內隨處可見，步行即可。"
      }
    ]
  },
  {
    day: 2,
    title: "仁川一日團 (週五)",
    highlights: "極光秀、斜坡滑車、蒜味豬腳",
    sections: [
      { 
        time: "08:30", 
        text: "弘大站集合。仁川一日遊啟程。",
        transport: "walk",
        transportTip: "弘大站內集合，從飯店步行即可。"
      },
      { 
        time: "上午", 
        text: "INSPIRE Resort 極光秀 & 斜坡滑車 (Luge) 小孩超愛！",
        transport: "bus",
        transportTip: "跟團巴士移動，最輕鬆。"
      },
      { 
        time: "下午", 
        text: "永宗島鐵道自行車 (Rail Bike)，看海放鬆。",
        transport: "bus",
        transportTip: "團體行程安排，無需擔心交通。"
      },
      { 
        time: "19:00", 
        text: "晚餐：<strong>弘大豬腳小姐 (Myth Jokbal)</strong>，蒜味豬腳（純豬肉，避開牛羊）。",
        transport: "bus",
        transportTip: "一日遊行程結束回弘大解散。"
      }
    ]
  },
  {
    day: 3,
    title: "購物與手作 (週六)",
    highlights: "醫美、DIY、超市大掃貨",
    sections: [
      { 
        time: "10:00", 
        text: "【分頭行動】👩 媽媽前往 Forena Clinic 醫美；👨 爸爸帶小孩去 Object 進行布章手作 DIY。",
        transport: "walk",
        transportTip: "皆在弘大商圈內，分頭進行很方便。"
      },
      { 
        time: "12:30", 
        text: "午餐：風川鰻魚 (Pungcheon Jangeo) - 弘大名店，炭火現烤國產鰻魚（無牛羊）。",
        transport: "walk",
        transportTip: "弘大區內步行完成集合與午餐。"
      },
      { 
        time: "14:30", 
        text: "昌信洞文具玩具批發市場：五歲男童的放電天堂。",
        transport: "taxi",
        transportTip: "從弘大到昌信洞，3人搭計程車比地鐵轉乘輕鬆許多。"
      },
      { 
        time: "16:30", 
        text: "晚餐：<strong>天雞一隻雞 (新堂站)</strong>。提早吃免排隊（或可選安國站<strong>神仙豬排</strong>）。",
        transport: "taxi",
        transportTip: "距離不遠，建議直接坐車節省體力。"
      },
      { 
        time: "19:00", 
        text: "首爾站 Lotte Outlets (買 TNF 外套) ＆ 樂天超市買伴手禮。",
        transport: "taxi",
        transportTip: "新堂到首爾站直達，買完伴手禮大包小包可直接坐車回飯店。"
      }
    ]
  },
  {
    day: 4,
    title: "自然放電與聖水洞 (週日)",
    highlights: "首爾大公園、Dior、炸豬排",
    sections: [
      { 
        time: "09:30", 
        text: "早餐：Egg Drop 爆餡吐司。",
        transport: "walk",
        transportTip: "弘大站內 breakfast 餐廳，直接步行。"
      },
      { 
        time: "11:00", 
        text: "<strong>首爾大公園</strong>：搭大象列車看動物。戶外放電時間。",
        transport: "subway",
        transportTip: "4號線直達，不用擔心交通堵塞。"
      },
      { 
        time: "15:00", 
        text: "聖水洞深度探索（阿圓/紹紹/篠崎泫推薦）：<br/>- <strong>TAMBURINS</strong>：Jennie 愛用，必買蛋形護手霜與香氛蠟燭。<br/>- <strong>Rockfish Weatherwear</strong>：爆紅美鞋品牌，瑪莉珍鞋與芭蕾舞鞋必試。<br/>- <strong>fwee Agit</strong>：火熱「布丁唇頰泥」，聖水店可盡情試色。<br/>- <strong>Matin Kim</strong>：個性金屬鐵牌包、錢包，韓風潮流指標。<br/>- <strong>Stand Oil</strong>：簡約質感女包，Clam Bag 經典必看。<br/>- <strong>墨鏡三劍客</strong>：平價 <strong>Blue Elephant</strong>、前衛 <strong>Double Lovers</strong>、王者 <strong>Gentle Monster</strong>。<br/>- <strong>Point of View</strong>：質感文具天花板，文具控必逛。<br/>- <strong>美食地圖</strong>：排隊神店「自然島鹽可頌」、咖啡名店「Cafe Onion」、想吃杜拜巧克力必去「Rain Report」。",
        transport: "subway",
        transportTip: "從大公園回聖水（2號線），搭乘地鐵較穩。"
      },
      { 
        time: "18:00", 
        text: "晚餐建議：<strong>光化門國밥 (聖水店)</strong>。米其林必比登推薦的豬肉湯飯，湯頭清甜無雜味，非常適合小孩與不喜油膩者。",
        transport: "walk",
        transportTip: "聖水洞內精華區，步行即可到達。"
      }
    ]
  },
  {
    day: 5,
    title: "網美早午餐與賦歸",
    highlights: "溫室早午餐、整理戰利品",
    sections: [
      { 
        time: "10:00", 
        text: "退房寄放行李。步行前往「Urban Plant」合井站植物系早午餐。",
        transport: "walk",
        transportTip: "飯店退房後漫步至合井（1站路距離）。"
      },
      { 
        time: "12:00", 
        text: "弘大最後補貨（ABC Mart 買鞋或襪子）。",
        transport: "walk",
        transportTip: "最後在商圈內晃晃。"
      },
      { 
        time: "13:30", 
        text: "搭乘 AREX 普通車前往機場。16:00 班機起飛。",
        transport: "subway",
        transportTip: "回程搭 AREX 最穩，推薦提早一點到機場逛免稅店。"
      }
    ]
  }
];

export const MAP_LOCATIONS: MapGroup[] = [
  {
    day: "Day 1-2 弘大與周邊",
    locations: [
      { name: "🏠 Julie's Place (我們的家)", q: "Hongik University Station Exit 3", naverQ: "홍대입구역 3번출구" },
      { name: "🦀 麻浦農水產市場 (3112攤位)", q: "Mapo Agricultural and Marine Products Market", naverQ: "마포농수산물시장" },
      { name: "🍖 豬腳小姐", q: "Myth Jokbal Hongdae", naverQ: "미쓰족발 홍대본점" },
      { name: "🍲 豚壽百 弘大直營店", q: "Donsubaek Hongdae", naverQ: "돈수백 홍대직영점" },
      { name: "🛍️ MMLG (在地街頭潮牌)", q: "MMLG Hongdae", naverQ: "87MM" },
      { name: "🛍️ What It Isnt (天使Logo潮服)", q: "What It Isnt Hongdae", naverQ: "와릿이즌 홍대" },
      { name: "🧸 Butter (雜貨選物店)", q: "Butter Hongdae", naverQ: "버터 홍대점" },
      { name: "👖 Lee (美式丹寧休閒)", q: "Lee Hongdae", naverQ: "리 홍대" },
      { name: "💍 Sigonggan (耳環飾品)", q: "Sigonggan Hongdae", naverQ: "시공간 홍대" },
      { name: "👗 Common Unique (韓系服飾)", q: "Common Unique Hongdae", naverQ: "커먼유니크" },
      { name: "🏢 MUSINSA Standard 弘大", q: "MUSINSA Standard Hongdae", naverQ: "무신사 스탠다드 홍대" }
    ]
  },
  {
    day: "Day 3 首爾站與新堂",
    locations: [
      { name: "🧸 文具批發市場", q: "Changsin-dong Toy Market", naverQ: "창신동 문구완구시장" },
      { name: "🍲 天雞一隻雞", q: "Tien-Ji Chicken Shindang", naverQ: "천계닭한마리" },
      { name: "🛒 樂天超市首爾站", q: "Lotte Mart Seoul Station", naverQ: "롯데마트 서울역점" },
      { name: "🐍 風川鰻魚 弘大", q: "Pungcheon Jangeo Hongdae", naverQ: "풍천장어 홍대" },
      { name: "🐷 神仙豬排 安國", q: "God of Tonkatsu Anguk", naverQ: "신선돈까스 안국" }
    ]
  },
  {
    day: "Day 4-5 聖水與合井",
    locations: [
      { name: "🐘 首爾大公園", q: "Seoul Grand Park", naverQ: "서울대공원" },
      { name: "☕ Cafe Onion 聖水", q: "Cafe Onion Seongsu", naverQ: "어니언 성수" },
      { name: "🛍️ Rockfish (流行美鞋)", q: "Rockfish Weatherwear Seongsu", naverQ: "락피쉬웨더웨어 성수" },
      { name: "💄 Fwee Agit (火熱彩妝)", q: "Fwee Agit Seongsu", naverQ: "퓌 アジト 성수" },
      { name: "✒️ Point of View (文具選物)", q: "Point of View Seoul", naverQ: "포인트오브뷰" },
      { name: "🕶️ Blue Elephant (平價墨鏡)", q: "Blue Elephant Seongsu", naverQ: "블루엘리펀트 성수" },
      { name: "🕶️ Double Lovers (設計師墨鏡)", q: "Double Lovers Seongsu", naverQ: "더블러버스" },
      { name: "🍲 光化門國飯 (米其林豬肉湯飯)", q: "Gwanghwamun Gukbap Seongsu", naverQ: "광화문국밥 성수점" },
      { name: "🌿 Urban Plant 合井", q: "Urban Plant Hapjeong", naverQ: "어반플랜트 合정" }
    ]
  }
];

export const SHOPPING_DATA: ShoppingItem[] = [
  /* --- 專業藥局 購物清單 (藥膏類) --- */
  { 
    name: "Acnon 痘痘藥膏", 
    nameKr: "애크논 크림",
    loc: "各大藥局", 
    desc: "針對紅腫大痘非常有效（紅管）。韓國國民級抗痘產品。",
    recommender: "篠崎泫"
  },
  { 
    name: "Noscarna 去疤膏", 
    nameKr: "노스카나 겔",
    loc: "各大藥局", 
    desc: "韓國國民級去疤產品，針對新生疤痕效果顯著。",
    recommender: "篠崎泫"
  },
  { 
    name: "Aclean 水楊酸凝膠", 
    nameKr: "애클린 겔",
    loc: "各大藥局", 
    desc: "針對閉口粉刺與黑頭，含水楊酸成分，溫和代謝。",
    recommender: "篠崎泫"
  },
  { 
    name: "MelaToning Cream", 
    nameKr: "멜라토닝 크림",
    loc: "各大藥局", 
    desc: "淡斑神器，針對黑色素沉澱、雀斑有良好改善效果。",
    recommender: "篠崎泫"
  },
  { 
    name: "MARSHIQUE 頸紋貼", 
    nameKr: "마르시끄 넥패치",
    loc: "Olive Young", 
    desc: "近期爆紅的局部抗皺貼，睡前貼於頸部。",
    recommender: "篠崎泫"
  },
  /* --- Olive Young 購物清單 (阿圓 & 篠崎泫 推薦) --- */
  {
    name: "BioHeal BOH 膠原蛋白除皺貼",
    nameKr: "프로바이오덤 T3 콜라겐 패치",
    loc: "Olive Young",
    desc: "【特殊護理】針對抬頭紋、法令紋與瘦臉設計，貼著睡覺效果顯著。",
    recommender: "篠崎泫 / 阿圓"
  },
  {
    name: "UNOVE 深層修護髮膜",
    nameKr: "어노브 딥 데미지 트리트먼트",
    loc: "Olive Young",
    desc: "【美髮護理】國民級髮膜，針對受損髮質修復力極強，味道高級。",
    recommender: "阿圓"
  },
  {
    name: "ilso 溫和去黑頭鼻貼",
    nameKr: "일소 네추럴 마일드 클리어 코팩",
    loc: "Olive Young",
    desc: "【特殊護理】不傷毛孔的去黑頭神器，敷完導出黑頭再刮除，效果驚人。",
    recommender: "阿圓"
  },
  {
    name: "Torriden 低分子玻尿酸精華",
    nameKr: "토리든 다이브인 세럼",
    loc: "Olive Young",
    desc: "【基礎保養】長期佔據榜單第一，補水首選。",
    recommender: "阿圓"
  },
  {
    name: "UIQ Biome Barrier 精華噴霧",
    nameKr: "유아이큐 바이옴 베리어 에센스 미스트",
    loc: "Olive Young / 專賣店",
    desc: "【精華噴霧】篠崎泫女神級推薦！修復肌膚屏障，噴霧極細，妝前妝後都能用。",
    recommender: "篠崎泫"
  },
  {
    name: "Piccasso 專業化妝刮刀",
    nameKr: "피카소 메이크업 스파츌라",
    loc: "Olive Young / 弘大旗艦店",
    desc: "【化妝神器】篠崎泫化妝必備！能將粉底液推得極薄、平滑，打造輕薄韓系底妝。",
    recommender: "篠崎泫"
  },
  {
    name: "Rejuran 麗珠蘭 術後修復面膜",
    nameKr: "리쥬란 힐러 마스크",
    loc: "Olive Young / 醫美門市",
    desc: "【強效修復】針對醫美後或極乾燥肌膚，修復力奇佳，也是篠崎泫的愛用品。",
    recommender: "篠崎泫"
  },
  {
    name: "d'Alba 黛爾珀 白松露精華噴霧",
    nameKr: "달바 화이트 트러플 미스트 세럼",
    loc: "Olive Young",
    desc: "【空姐噴霧】洗臉後第一道手續或補妝時使用，增加肌膚光澤感。",
    recommender: "篠崎泫"
  },
  {
    name: "Medicube Zero 毛孔收縮填充棉片",
    nameKr: "메디큐브 제로 모공 패드",
    loc: "Olive Young",
    desc: "【毛孔護理】溫和去角質並收縮毛孔，每天早晚清潔後擦拭。",
    recommender: "篠崎泫"
  },
  {
    name: "Mediheal 棉片 (積雪草/茶樹)",
    nameKr: "메디힐 패드",
    loc: "Olive Young",
    desc: "【速效舒緩】針對不同膚況選擇，積雪草適合鎮靜，茶樹適合控油。",
    recommender: "篠崎泫"
  },
  {
    name: "Round Lab 白樺樹水分防曬霜",
    nameKr: "라운드랩 자작나무 수분 선크림",
    loc: "Olive Young",
    desc: "【防曬冠軍】清爽不厚重，像水乳液一樣好推開，補水效果好。",
    recommender: "篠崎泫"
  },
  {
    name: "Aestura Atobarrier 365 舒緩乳霜",
    nameKr: "에스트라 아토베리어365 크림",
    loc: "Olive Young",
    desc: "【高強修復】內含顆粒狀神經醯胺，深層鎖水，適合敏感肌與乾皮。",
    recommender: "篠崎泫"
  },
  {
    name: "Delight Project 貝果餅乾",
    nameKr: "딜라이트 프로젝트 베이글칩",
    loc: "Olive Young",
    desc: "【健康零食】回購率 100% 的低卡零食，蜂蜜奶油味必帶。",
    recommender: "阿圓"
  },
  /* --- 聖水/弘大/漢南 購物清單 (紹紹 & 篠崎泫 推薦) --- */
  {
    name: "Marithe Francois Girbaud",
    nameKr: "마리떼 프랑소와 저버",
    loc: "聖水洞旗艦店 / 弘大 / 漢南洞",
    desc: "【潮牌服飾 / 帽子】標誌性手寫 logo T-shirt、帆布包、貝雷帽。經典 Logo 系列非常修身且百搭。",
    recommender: "紹紹 / 篠崎泫"
  },
  {
    name: "Matin Kim",
    nameKr: "마틴킴",
    loc: "聖水洞旗艦店",
    desc: "【潮牌服飾 / 皮件】最火的金屬鐵牌包與錢包，抽繩包也是代購大熱門，展現冷淡系韓風。",
    recommender: "紹紹 / 篠崎泫"
  },
  {
    name: "emis",
    nameKr: "이미스",
    loc: "聖水洞 / 漢南洞",
    desc: "【帽子 / 質感包包】以 Waffle Cap 棒球帽與特色花紋包包聞名，韓星私服最愛指標品牌。",
    recommender: "紹紹 / 篠崎泫"
  },
  {
    name: "Stand Oil",
    nameKr: "스탠드오일",
    loc: "聖水洞旗艦店",
    desc: "【質感女包】簡約韓系設計、皮質柔軟，Clam Bag 是經典必掃款。聖水店裝潢極具藝術感。",
    recommender: "紹紹 / 篠崎泫"
  },
  {
    name: "Rockfish Weatherwear",
    nameKr: "락피쉬웨더웨어",
    loc: "聖水洞 / 漢南洞",
    desc: "【流行美鞋 / 雨靴】除了經典雨靴，近期大熱的是瑪莉珍鞋與芭蕾舞鞋。輕盈且修飾腳型。",
    recommender: "紹紹 / 篠崎泫"
  },
  {
    name: "fwee Agit",
    nameKr: "퓌 아지트",
    loc: "聖水洞旗艦店 / 弘大",
    desc: "【火熱彩妝 / 腮紅】爆紅「布丁唇頰泥」，質地絲滑，可以同時當腮紅與唇彩使用。",
    recommender: "篠崎泫"
  },
  {
    name: "Double Lovers",
    nameKr: "더블러버스",
    loc: "聖水洞",
    desc: "【設計師墨鏡】篠崎泫強烈推薦！款式前衛、視覺衝擊力強，修飾臉型神物。",
    recommender: "篠崎泫"
  },
  {
    name: "ept (East Pacific Trade)",
    nameKr: "이피티",
    loc: "聖水洞旗艦店",
    desc: "【潮流運動鞋 / 德訓鞋】韓國時髦人腳一雙的 Court 板鞋或德訓鞋，腳感舒適且視覺比例極佳。",
    recommender: "紹紹"
  },
  {
    name: "empty seoul",
    nameKr: "엠프티",
    loc: "聖水洞",
    desc: "【大咖選物店 / 服飾】佔地極大的工業風選物店，包含各國獨立設計師品牌。",
    recommender: "紹紹"
  },
  {
    name: "Blue Elephant",
    nameKr: "블루엘리펀트",
    loc: "聖水洞",
    desc: "【平價墨鏡】Gentle Monster 的最強平替，設計感極強且價格親民。",
    recommender: "篠崎泫"
  },
  {
    name: "Gentle Monster",
    nameKr: "젠틀몬스터",
    loc: "聖水洞旗艦店 / 弘大 / 漢南洞",
    desc: "【精品級墨鏡】韓國墨鏡界的王者。聖水店的實驗性裝潢是必拍打打卡點。",
    recommender: "篠崎泫"
  },
  {
    name: "CARIN",
    nameKr: "카린",
    loc: "聖水洞 SHOWROOM / 弘大",
    desc: "【氣質墨鏡 / 光學眼鏡】NewJeans 代言品牌。簡約風格、氣質優雅，適合長時間佩戴。",
    recommender: "篠崎泫"
  },
  {
    name: "TAMBURINS",
    nameKr: "탬버린즈",
    loc: "聖水洞旗艦店 / 漢南洞",
    desc: "【香氛 / 護手霜】Jennie 愛用品牌。蛋形護手霜、香氛蠟燭與固體香水是必買，旗艦店非常有藝術氣息。",
    recommender: "紹紹 / 篠崎泫 / 阿圓"
  },
  {
    name: "hince",
    nameKr: "힌스",
    loc: "聖水洞旗艦店 / 漢南洞",
    desc: "【質感彩妝】氛圍感十足的彩妝品牌。推薦第二層肌膚粉底液與單色眼影，包裝設計極具現代感。",
    recommender: "篠崎泫"
  }
];

export const FOOD_DATA: FoodItem[] = [
  { name: "麻浦帝王蟹 (3112攤位)", desc: "位於麻浦農水產物市場 3112 號，新鮮海產現場挑選蒸煮，無牛羊隱憂。", tag: "海鮮" },
  { name: "豬腳小姐", desc: "弘大名店，蒜味豬腳肥而不膩，搭配冷麵超讚。", tag: "豬肉" },
  { name: "天雞一隻雞", desc: "清淡鮮美雞湯，適合小孩拌飯吃。", tag: "雞肉" },
  { name: "風川鰻魚", desc: "弘大必吃名店，炭火現烤國產鰻魚，外焦內嫩，無牛羊隱憂。", tag: "海鮮" },
  { name: "神仙豬排 (安國站)", desc: "安國站名店，厚實多汁的炸豬排，深受在地人與遊客喜愛。", tag: "豬肉" },
  { name: "厚切炸豬排", desc: "聖水洞名物，外酥內嫩，高品質豬肉料理。", tag: "豬肉" },
  { name: "光化門國飯 (광화문국밥)", desc: "米其林必比登推薦名店（聖水分店）。清澈湯頭，無豬腥味，適合全家。", tag: "豬肉" },
  { name: "🥐 自然島鹽可頌 (자연도소금빵)", desc: "聖水洞排隊神店！每日限量出爐，口感Q彈奶油香濃郁。", tag: "麵包" },
  { name: "🍞 Meal° (밀도) 聖水店", desc: "以吐司聞名的小店，咖哩麵包與栗子吐司非常受歡迎。", tag: "麵包" }
];

export const COUPON_DATA: CouponItem[] = [
  {
    brand: "SPAO",
    title: "SPAO 弘大店 九折優惠券",
    subtitle: "Klook 獨家優惠",
    desc: "出示憑證即可享有九折優惠。憑證號：KLK8176732787。",
    code: "KLK8176732787",
    image: "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=KLK8176732787"
  },
  {
    brand: "Lotte Mart",
    title: "Lotte Mart KRW 6,000 折扣券",
    subtitle: "KKday 獨家行動現金券",
    desc: "滿 KRW 100,000 可折抵 KRW 6,000。",
    barcode: "9 119200 000237",
    validity: "2026.02.23 ~ 08.31",
    color: "#46C1CE"
  },
  {
    brand: "Lotte",
    title: "樂天觀光會員卡 (Lotte Tourist Card)",
    subtitle: "護照免費辦理 ‧ 購物交通二合一",
    desc: "於樂天百貨明洞總店 1F 免費辦理。享百貨95折、免稅店/7-11 9折、超市93折。",
    color: "#E30613"
  },
  {
    brand: "Lotte Duty Free",
    title: "樂天線上免稅店 (APP 購物)",
    subtitle: "線上購買 ‧ 機場取貨 ‧ 價格最優",
    desc: "推薦下載 APP 線上購買，比實體店更便宜。OLENS、隱形眼鏡價差大。",
    color: "#D4AF37"
  }
];

export const SHOPPING_SOURCE = "備註：以上資訊參考自 YouTube 頻道《紹紹 Shao Shao》、《一隻阿圓》與《篠崎泫 Hsiao-chi Hsuan》2024 完整逛街懶人包";
export const SHOPPING_URL = "https://www.youtube.com/watch?v=eqzATbg_1_g";

export const ANALYTICS_DATA = [
  { name: '購物補貨', value: 35, color: '#fb7185' },
  { name: '小孩放電', value: 30, color: '#fbbf24' },
  { name: '美食探索', value: 20, color: '#2dd4bf' },
  { name: '醫美手作', value: 15, color: '#818cf8' },
];
