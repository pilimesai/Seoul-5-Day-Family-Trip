import { DayData, MapGroup, FoodItem, ShoppingItem } from './types';

export const ITINERARY_DATA: DayData[] = [
  {
    day: 1,
    title: "豪華帝王蟹與弘大探索",
    highlights: "AREX、帝王蟹、人生四格",
    sections: [
      { time: "11:00", text: "抵達仁川機場，搭乘 <strong>AREX 普通車</strong> 往弘大入口站。" },
      { time: "15:00", text: "【豪華晚餐】搭計程車前往「麻浦農水產物市場」，挑選現蒸帝王蟹（非牛羊海鮮大餐）。" },
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
      { name: "🦀 麻浦農水產市場", q: "Mapo Agricultural and Marine Products Market" },
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
  { name: "麻浦帝王蟹", desc: "新鮮海產，現場挑選蒸煮，無牛羊隱憂。", tag: "海鮮" },
  { name: "豬腳小姐", desc: "弘大名店，蒜味豬腳肥而不膩，搭配冷麵超讚。", tag: "豬肉" },
  { name: "天雞一隻雞", desc: "清淡鮮美雞湯，適合小孩拌飯吃。", tag: "雞肉" },
  { name: "厚切炸豬排", desc: "聖水洞名物，外酥內嫩，高品質豬肉料理。", tag: "豬肉" }
];

export const SHOPPING_DATA: ShoppingItem[] = [
  { 
    name: "Acnon 痘痘藥膏", 
    loc: "各大藥局", 
    desc: "針對紅腫大痘非常有效（紅管）。",
    image: "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0014/A00000014654101ko.jpg?l=zh"
  },
  { 
    name: "Noscarna 去疤膏", 
    loc: "各大藥局", 
    desc: "韓國國民級去疤產品。",
    image: "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0013/A00000013545401ko.jpg?l=zh"
  },
  { 
    name: "MARSHIQUE 頸紋貼", 
    loc: "Olive Young", 
    desc: "近期爆紅的局部抗皺貼。",
    image: "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0018/A00000018154101ko.jpg?l=zh"
  },
  { 
    name: "企鵝痠痛乳液", 
    loc: "各大藥局", 
    desc: "孫興慜代言，滾珠頭設計不沾手。",
    image: "https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0014/A00000014154101ko.jpg?l=zh"
  }
];

export const ANALYTICS_DATA = [
  { name: '購物補貨', value: 35, color: '#fb7185' },
  { name: '小孩放電', value: 30, color: '#fbbf24' },
  { name: '美食探索', value: 20, color: '#2dd4bf' },
  { name: '醫美手作', value: 15, color: '#818cf8' },
];
