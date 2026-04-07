import { DayItinerary, EssentialInfo, Restaurant, ShoppingItem, TransportInfo } from './types';

export const ITINERARY: DayItinerary[] = [
  {
    day: 1,
    title: "抵達首爾與明洞漫步",
    activities: [
      {
        time: "15:00",
        name: "抵達飯店 Check-in",
        location: "明洞 (Myeongdong)",
        description: "抵達仁川機場後，搭乘機場巴士或機場快線 A'REX 前往明洞地區飯店辦理入住，放下行李稍作休息。",
        tips: ["推薦入住 L7 明洞或索拉利亞西鐵飯店，對親子旅客非常友善。"]
      },
      {
        time: "17:00",
        name: "明洞商圈探索",
        location: "明洞樂天百貨",
        description: "逛逛明洞大街，體驗熱鬧的氛圍。明洞有許多藥妝店如 Olive Young 與卡通聯名店。",
        tips: ["孩子會喜歡 LINE FRIENDS 店與明洞大創。"]
      },
      {
        time: "19:00",
        name: "明洞美食：明洞餃子",
        location: "明洞餃子",
        description: "品嚐米其林推薦的明洞餃子與刀切麵。",
        tips: ["麵條軟Q、湯頭濃郁，非常適合小孩吃。"]
      }
    ]
  },
  {
    day: 2,
    title: "聖水洞潮流與童裝巡禮",
    activities: [
      {
        time: "10:00",
        name: "聖水洞巡禮",
        location: "聖水洞 (Seongsu-dong)",
        description: "首爾最紅的文青區，有許多廢棄倉庫改建的咖啡廳與潮牌店。參觀 Dior 旗艦店。",
        tips: ["聖水洞有許多適合拍照的街景。", "聖水洞也有不少特色童裝選物店。"]
      },
      {
        time: "13:00",
        name: "馬場洞韓牛盛宴 (海鮮龍蝦專屬)",
        location: "馬場洞畜產物市場",
        description: "在馬場洞品嚐現烤的韓牛，這是首爾最頂級的牛肉享受。",
        tips: ["推薦店家：馬場骨。"]
      },
      {
        time: "15:30",
        name: "首爾大公園",
        location: "首爾大公園 (Seoul Grand Park)",
        description: "佔地廣大的首爾大公園，有動物園、植物園與主題樂園。搭乘大象列車和小纜車。",
        tips: ["小纜車風景絕佳，非常輕鬆。"]
      }
    ]
  },
  {
    day: 3,
    title: "文化體驗與樂天世界",
    activities: [
      {
        time: "09:30",
        name: "景福宮韓服體驗",
        location: "景福宮 (Gyeongbokgung Palace)",
        description: "全家人一起換上美美的韓服，走進古老的宮殿群拍攝家庭紀念照。",
        tips: ["有很多兒童韓服款式。"]
      },
      {
        time: "13:00",
        name: "通仁市場 便當體驗",
        location: "通仁市場 (Tongin Market)",
        description: "用古銅錢購買美食裝進便當盒。這是首爾非常獨特的體驗。",
        tips: ["可以讓孩子自己拿銅錢去選想吃的東西。"]
      },
      {
        time: "15:00",
        name: "樂天世界與超市購物",
        location: "樂天世界 (Lotte World)",
        description: "這裡是全世界最大的室內遊樂園，即使下雨也不影響遊玩。",
        tips: ["室內區域有很多適合幼兒的慢速設施。"]
      }
    ]
  },
  {
    day: 4,
    title: "南大門採買與豬蹄晚餐",
    activities: [
      {
        time: "10:00",
        name: "南大門童裝街",
        location: "南大門市場 (Namdaemun Market)",
        description: "全韓國最大的童裝批發地。不管是潮流款還是韓式文青款，都可以在這裡用最划算的價格買到。",
        tips: ["建議多留一點預算與行李空間。"]
      },
      {
        time: "13:00",
        name: "廣藏市場 傳統美食",
        location: "廣藏市場 (Gwangjang Market)",
        description: "體驗韓國傳統市場氛圍，品嚐有名的綠豆餅與生牛肉。",
        tips: ["攤位 13 號非常有特色。"]
      },
      {
        time: "18:00",
        name: "夢幻豬蹄全餐",
        location: "滿足五香豬蹄",
        description: "肉質 Q 彈厚實，膠原蛋白滿滿。",
        tips: ["明洞店離商圈很近，交通超方便。"]
      }
    ]
  },
  {
    day: 5,
    title: "漫步北村與準備歸賦",
    activities: [
      {
        time: "10:00",
        name: "北村韓屋村",
        location: "北村韓屋村 (Bukchon Hanok Village)",
        description: "漫步在保留完好的傳統韓屋建築群中。",
        tips: ["住宅區請保持安靜。"]
      },
      {
        time: "13:00",
        name: "林蔭道 Cafe Time",
        location: "新沙洞林蔭道 (Garosu-gil)",
        description: "在時髦的咖啡廳享受午後光陰。",
        tips: ["Gentle Monster 旗艦店非常酷。"]
      },
      {
        time: "16:00",
        name: "前往機場",
        location: "仁川機場 (ICN)",
        description: "準備登機，返回溫暖的家。",
        tips: ["仁川機場有很多親子設施。"]
      }
    ]
  }
];

export const ESSENTIAL_INFO: EssentialInfo[] = [
  {
    title: "簽證與護照",
    content: "持有台灣、香港或馬來西亞護照通常可免簽。出發前需確認。"
  },
  {
    title: "氣候與衣著",
    content: "春秋季（4-5月, 10-11月）最適合。夏季炎熱多雨，冬季嚴寒。"
  },
  {
    title: "換匯與支付",
    content: "推薦使用 WOWPASS 卡，集換匯、支付、交通卡 T-money 於一身。"
  },
  {
    title: "退稅優惠",
    content: "滿 30,000 韓元即可憑護照享有現場退稅或機場退稅。"
  }
];

export const RESTAURANTS: Restaurant[] = [
  {
    name: "明洞餃子",
    category: "韓式刀切麵",
    rating: 4.8,
    location: "明洞",
    imageUrl: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800",
    recommendation: "米其林推薦。肉燥刀切麵湯頭濃郁，餃子皮薄餡多。",
  },
  {
    name: "滿足五香豬蹄",
    category: "豬蹄與生菜包肉",
    rating: 4.7,
    location: "明洞/市廳",
    imageUrl: "https://images.unsplash.com/photo-1594179047519-f347310d3322?auto=format&fit=crop&q=80&w=800",
    recommendation: "首爾三大豬蹄之一。肉質非常軟滑，帶一點甜味。",
  }
];

export const SHOPPING_LIST: ShoppingItem[] = [
  {
    name: "Acnon 痘痘藥膏 (Acnon Cream)",
    location: "各大韓國藥局 (Pharmacy)",
    category: "必買藥妝",
    description: "針對發炎、紅腫痘痘非常有效，能快速消腫。",
    imageUrl: "https://shop.r10s.jp/fujiyapharmacy/cabinet/imgrc0234479523.jpg",
    usage: "潔面後塗抹於患處。"
  },
  {
    name: "Aclean 水楊酸凝膠 (Aclean Gel)",
    location: "各大韓國藥局 (Pharmacy)",
    category: "必買藥妝",
    description: "針對黑頭、白頭粉刺有很好的代謝效果。",
    imageUrl: "https://thumbnail.image.rakuten.co.jp/@0_mall/cosme-vivi/cabinet/korea/714001.jpg",
    usage: "建議於夜間保養使用。"
  },
  {
    name: "CellMed 修護霜 (CellMed Repair Cream)",
    location: "醫美診所/指定藥局",
    category: "必買藥妝",
    description: "醫美級修護產品，特別適合術後敏感肌。",
    imageUrl: "https://m.media-amazon.com/images/I/61x9u5j4TLL._SL1500_.jpg",
    usage: "早晚均可使用。"
  },
  {
    name: "Cellromax Vitamin K Cream",
    location: "各大韓國藥局 (Pharmacy)",
    category: "必買藥妝",
    description: "改善暗沉與退紅，常作為術後保養。",
    imageUrl: "https://m.media-amazon.com/images/I/61MvS5hLq8L._SL1000_.jpg",
    usage: "重點塗抹泛紅處。"
  },
  {
    name: "Noscarna 去疤膏 (Noscarna Gel)",
    location: "各大藥局",
    category: "必買藥妝",
    description: "韓國「國民去疤膏」，針對痘疤、蚊蟲叮咬非常有效。",
    imageUrl: "https://shop.r10s.jp/vivid-vivid/cabinet/compass1659586111.jpg",
    usage: "傷口結痂後每日塗抹 2-3 次。"
  },
  {
    name: "MelaToning Cream",
    location: "各大韓國藥局 (Pharmacy)",
    category: "必買藥妝",
    description: "淡化因紫外線引起的色素沉澱與黑斑。",
    imageUrl: "https://i.ebayimg.com/images/g/7pYAAOSwm~hk0G0v/s-l1600.jpg",
    usage: "早晚使用，注意防曬。"
  },
  {
    name: "Rejuvenex PDRN 精華安瓶",
    location: "指定藥局",
    category: "必買藥妝",
    description: "含 PDRN 強效修護成分，深層補水。",
    imageUrl: "https://i.ebayimg.com/images/g/sXMAAOSwf5lk~6K7/s-l1600.jpg",
    usage: "潔面後第一步。"
  },
  {
    name: "Rejuall 修護霜 (Rejuall Repair Cream)",
    location: "各大韓國藥局 (Pharmacy)",
    category: "必買藥妝",
    description: "高價值 PDRN 修護霜，用於術後保濕。",
    imageUrl: "https://m.media-amazon.com/images/I/51pWf2C-u0L._SL1000_.jpg",
    usage: "早晚使用。"
  },
  {
    name: "jw 葡萄糖眼藥水",
    location: "各大藥局",
    category: "必買藥妝",
    description: "針對眼睛疲勞有奇效，金智媛代言。",
    imageUrl: "https://m.media-amazon.com/images/I/41Kq7qZ6W+L.jpg",
    usage: "眼睛疲勞時滴用。"
  },
  {
    name: "Handok 痘痘水 (Handok Acne Water)",
    location: "各大韓國藥局 (Pharmacy)",
    category: "必買藥妝",
    description: "液體配方，含有 2% 水楊酸，針對黑頭、白頭粉刺有奇效。",
    imageUrl: "https://www.handok.co.kr/_File/Product/20130625105221_5088.jpg",
    usage: "局部點塗於粉刺處。"
  },
  {
    name: "Sinil Pharm 舒緩貼布",
    location: "各大韓國藥局 (Pharmacy)",
    category: "必買藥妝",
    description: "熱銷痠痛貼布，分冷/熱兩款。",
    imageUrl: "https://m.media-amazon.com/images/I/81xU9pY+G5L._SL1500_.jpg",
    usage: "貼在關節或痠痛處。"
  },
  {
    name: "YouGreen F 腳後跟護理膏",
    location: "各大韓國藥局 (Pharmacy)",
    category: "必買藥妝",
    description: "含 25% 尿素，超強效軟化角質，解決腳跟乾裂問題。",
    imageUrl: "https://www.mirpharma.co.kr/data/item/1603957297/thumb-67C867C467C467C4_600x600.png",
    usage: "睡前厚塗，可搭配襪子使用。"
  },
  {
    name: "Dongkook Elina C 維他命 C",
    location: "各大韓國藥局 (Pharmacy)",
    category: "必買藥妝",
    description: "Rosé 推薦。高劑量 2000mg 維他命 C。",
    imageUrl: "https://m.media-amazon.com/images/I/51X57o7Y4kL._SL1000_.jpg",
    usage: "每日一包。"
  },
  {
    name: "SEVITAB 痘痘藥 (Sebitap)",
    location: "各大韓國藥局 (Pharmacy)",
    category: "必買藥妝",
    description: "針對發炎性痘痘有很好的鎮靜效果，含有維生素 B3 成分。",
    imageUrl: "https://img.khan.co.kr/news/2024/05/27/l_2024052701000300800025911.jpg",
    usage: "潔面後塗抹於紅腫處。"
  },
  {
    name: "Bentpla 舒緩凝膠 (Jennie 代言)",
    location: "Jennie 推薦 / 各大藥局",
    category: "必買藥妝",
    description: "針對瘀青、大面積腫脹效果顯著。Jennie 曾在 VLOG 中推薦。",
    imageUrl: "http://www.taiguk.co.kr/_File/Product/20140224163901_3879.jpg",
    usage: "於淤青處輕輕按摩。"
  },
  {
    name: "Antiphlamine 滾珠乳液",
    location: "各大藥局",
    category: "必買藥妝",
    description: "傳統痠痛藥水結合滾珠設計，不沾手也能塗抹。",
    imageUrl: "https://m.media-amazon.com/images/I/61jC+k+H6gL._SL1000_.jpg",
    usage: "滾動塗抹。"
  }
];

export const TRANSPORT_INFO: TransportInfo[] = [
  {
    name: "WOWPASS 旅遊神卡",
    description: "集換匯、支付、交通卡 T-money 於一身。",
    type: "transport"
  },
  {
    name: "Kakao Maps",
    description: "韓國導航必備。",
    type: "net"
  }
];
