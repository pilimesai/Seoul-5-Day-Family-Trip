import { DayData, MapGroup, FoodItem, ShoppingItem } from './types';

export const ITINERARY_DATA: DayData[] = [
  {
    day: 1,
    title: "豪華帝王蟹與弘大探索",
    highlights: "AREX、帝王蟹、人生四格",
    sections: [
      { time: "11:00", text: "抵達仁川機場，搭乘 <strong>AREX 普通車</strong> 往弘大入口站。" },
      { time: "15:00", text: "【豪華晚餐】搭計程車前往「麻浦農水產物市場」，前往 <strong>3112 攤位</strong> 挑選現蒸帝王蟹（非牛羊海鮮大餐）。" },
      { time: "18:00", text: "弘大商圈逛街：SPAO (買童裝)、Olive Young (補藥妝)、全家拍「人生四格」照片。" }
    ]
  },
  {
    day: 2,
    title: "仁川一日團 (週五)",
    highlights: "極光秀、斜坡滑車、蒜味豬腳",
    sections: [
      { time: "08:30", text: "弘大站集合。仁川一日遊啟程。" },
      { time: "上午", text: "INSPIRE Resort 極光秀 & 斜坡滑車 (Luge) 小孩超愛！" },
      { time: "下午", text: "永宗島鐵道自行車 (Rail Bike)，看海放鬆。" },
      { time: "19:00", text: "晚餐：<strong>弘大豬腳小姐 (Myth Jokbal)</strong>，蒜味豬腳（純豬肉，避開牛羊）。" }
    ]
  },
  {
    day: 3,
    title: "購物與手作 (週六)",
    highlights: "醫美、DIY、超市大掃貨",
    sections: [
      { time: "10:00", text: "【分頭行動】👩 媽媽前往 Forena Clinic 醫美；👨 爸爸帶小孩去 Object 進行布章手作 DIY。" },
      { time: "12:30", text: "午餐：多樂套雞湯飯（濃郁雞骨湯，小孩友善）。" },
      { time: "14:30", text: "昌信洞文具玩具批發市場：五歲男童的放電天堂。" },
      { time: "16:30", text: "晚餐：<strong>天雞一隻雞 (新堂站)</strong>。提早吃免排隊。" },
      { time: "19:00", text: "首爾站 Lotte Outlets (買 TNF 外套) ＆ 樂天超市買伴手禮。" }
    ]
  },
  {
    day: 4,
    title: "自然放電與聖水洞 (週日)",
    highlights: "首爾大公園、Dior、炸豬排",
    sections: [
      { time: "09:30", text: "早餐：Egg Drop 爆餡吐司。" },
      { time: "11:00", text: "<strong>首爾大公園</strong>：搭大象列車看動物。戶外放電時間。" },
      { time: "15:00", text: "聖水洞探索：媽媽逛 Dior 概念店與 Musinsa Standard；爸爸與小孩在 Cafe Onion 享用麵包。" },
      { time: "18:00", text: "晚餐：聖水洞厚切炸豬排（小孩最愛）。" }
    ]
  },
  {
    day: 5,
    title: "網美早午餐與賦歸",
    highlights: "溫室早午餐、整理戰利品",
    sections: [
      { time: "10:00", text: "退房寄放行李。步行前往「Urban Plant」合井站植物系早午餐。" },
      { time: "12:00", text: "弘大最後補貨（ABC Mart 買鞋或襪子）。" },
      { time: "13:30", text: "搭乘 AREX 普通車前往機場。16:00 班機起飛。" }
    ]
  }
];

export const MAP_LOCATIONS: MapGroup[] = [
  {
    day: "Day 1-2 弘大與周邊",
    locations: [
      { name: "🦀 麻浦農水產市場 (3112攤位)", q: "Mapo Agricultural and Marine Products Market" },
      { name: "🍖 豬腳小姐", q: "Myth Jokbal Hongdae" }
    ]
  },
  {
    day: "Day 3 首爾站與新堂",
    locations: [
      { name: "🧸 文具批發市場", q: "Changsin-dong Toy Market" },
      { name: "🍲 天雞一隻雞", q: "Tien-Ji Chicken Shindang" },
      { name: "🛒 樂天超市首爾站", q: "Lotte Mart Seoul Station" }
    ]
  },
  {
    day: "Day 4-5 聖水與合井",
    locations: [
      { name: "🐘 首爾大公園", q: "Seoul Grand Park" },
      { name: "☕ Cafe Onion 聖水", q: "Cafe Onion Seongsu" },
      { name: "🌿 Urban Plant 合井", q: "Urban Plant Hapjeong" }
    ]
  }
];

export const FOOD_DATA: FoodItem[] = [
  { name: "麻浦帝王蟹 (3112攤位)", desc: "位於麻浦農水產物市場 3112 號，新鮮海產現場挑選蒸煮，無牛羊隱憂。", tag: "海鮮" },
  { name: "豬腳小姐", desc: "弘大名店，蒜味豬腳肥而不膩，搭配冷麵超讚。", tag: "豬肉" },
  { name: "天雞一隻雞", desc: "清淡鮮美雞湯，適合小孩拌飯吃。", tag: "雞肉" },
  { name: "厚切炸豬排", desc: "聖水洞名物，外酥內嫩，高品質豬肉料理。", tag: "豬肉" }
];

export const SHOPPING_DATA: ShoppingItem[] = [
  { 
    name: "Acnon 痘痘藥膏", 
    nameKr: "애크논 크림",
    loc: "各大藥局", 
    desc: "針對紅腫大痘非常有效（紅管）。韓國國民級抗痘產品。"
  },
  { 
    name: "Noscarna 去疤膏", 
    nameKr: "노스카나 겔",
    loc: "各大藥局", 
    desc: "韓國國民級去疤產品，針對新生疤痕效果顯著。"
  },
  { 
    name: "Aclean 水楊酸凝膠", 
    nameKr: "애클린 겔",
    loc: "各大藥局", 
    desc: "針對閉口粉刺與黑頭，含水楊酸成分，溫和代謝。"
  },
  { 
    name: "MelaToning Cream", 
    nameKr: "멜라토닝 크림",
    loc: "各大藥局", 
    desc: "淡斑神器，針對黑色素沉澱、雀斑有良好改善效果。"
  },
  { 
    name: "Handok 痘痘水 (Clearteen)", 
    nameKr: "클리어틴",
    loc: "各大藥局", 
    desc: "液態設計，方便大面積塗抹於背部 or 臉部粉刺區。"
  },
  { 
    name: "Dongkook Elina C 維他命 C", 
    nameKr: "엘리나 씨",
    loc: "各大藥局 / Olive Young", 
    desc: "高濃度維他命C粉，BLACKPINK 同款，口感好吸收快。"
  },
  { 
    name: "jw 葡萄糖眼藥水", 
    nameKr: "jw 포도당 점안액",
    loc: "各大藥局", 
    desc: "緩解眼睛疲勞，提供營養，適合長時間用眼者。"
  },
  { 
    name: "YouGreen F 腳後跟護理膏", 
    nameKr: "유그린 에프 연고",
    loc: "各大藥局", 
    desc: "針對腳跟龜裂、粗糙有神效，滋潤度極高。"
  },
  { 
    name: "MARSHIQUE 頸紋貼", 
    nameKr: "마르시끄 넥패치",
    loc: "Olive Young", 
    desc: "近期爆紅的局部抗皺貼，睡前貼於頸部。"
  },
  { 
    name: "企鵝痠痛乳液 (Antiphlamine)", 
    nameKr: "안티푸라민 롤파스",
    loc: "各大藥局", 
    desc: "孫興慜代言，滾珠頭設計不沾手，緩解肌肉痠痛。"
  },
  { 
    name: "Bentpla 舒緩凝膠", 
    nameKr: "벤트플라 겔",
    loc: "各大藥局", 
    desc: "針對瘀青、腫脹有快速舒緩效果，旅行必備。"
  },
  { 
    name: "CellMed 修護霜", 
    nameKr: "셀메드 리페어 크림",
    loc: "各大藥局", 
    desc: "強效修護受損肌膚，醫美術後亦可使用。"
  },
  {
    name: "SPAO 弘大店 (童裝/服飾)",
    loc: "弘大入口站 9號出口",
    desc: "韓國必買平價服飾，記得出示優惠券或使用 Tax Refund。",
    code: "SPAO-SEOUL-2024"
  }
];

export const SHOPPING_SOURCE = "備註：以上藥妝資訊參考自 Funliday 〈2026韓國藥局必買｜16款推薦清單〉";
export const SHOPPING_URL = "https://www.funliday.com/posts/korea-pharmacy-must-buy/";

export const ANALYTICS_DATA = [
  { name: '購物補貨', value: 35, color: '#fb7185' },
  { name: '小孩放電', value: 30, color: '#fbbf24' },
  { name: '美食探索', value: 20, color: '#2dd4bf' },
  { name: '醫美手作', value: 15, color: '#818cf8' },
];
