import streamlit as st

# 設定頁面資訊
st.set_page_config(
    page_title="首爾五天四夜親子遊行程指南",
    page_icon="🇰🇷",
    layout="centered"
)

# 自定義 CSS
st.markdown("""
    <style>
    .stApp {
        background-color: #f8fafc;
    }
    .main-title {
        color: #1e3a8a;
        font-weight: 800;
        text-align: center;
        margin-bottom: 0px;
    }
    .sub-title {
        text-align: center;
        color: #64748b;
        margin-bottom: 30px;
    }
    .product-card {
        background-color: white;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        border: 1px solid #e2e8f0;
        margin-bottom: 25px;
    }
    .itinerary-item {
        border-left: 4px solid #3b82f6;
        padding-left: 15px;
        margin-bottom: 25px;
    }
    .usage-box {
        background-color: #f1f5f9;
        padding: 10px;
        border-radius: 8px;
        font-size: 0.85em;
        color: #475569;
        margin-top: 10px;
    }
    </style>
""", unsafe_allow_html=True)

st.markdown('<h1 class="main-title">🇰🇷 首爾五天四夜親子遊</h1>', unsafe_allow_html=True)
st.markdown('<p class="sub-title">全家人最安心的旅行行程指南</p>', unsafe_allow_html=True)

# 主要分頁
tab1, tab2, tab3, tab4 = st.tabs(["📅 五日行程", "🍱 美食探店", "💊 必買藥妝", "🚆 交通資訊"])

# 藥妝資料
PHARMACY_ITEMS = [
    {"name": "Acnon 痘痘藥膏 (Acnon Cream)", "desc": "針對發炎、紅腫痘痘非常有效，能快速消腫。", "img": "https://shop.r10s.jp/fujiyapharmacy/cabinet/imgrc0234479523.jpg", "usage": "潔面後塗抹於患處。"},
    {"name": "Aclean 水楊酸凝膠 (Aclean Gel)", "desc": "針對黑頭、白頭粉刺有很好的代謝效果。", "img": "https://thumbnail.image.rakuten.co.jp/@0_mall/cosme-vivi/cabinet/korea/714001.jpg", "usage": "建議於夜間保養使用。"},
    {"name": "CellMed 修護霜 (CellMed Repair Cream)", "desc": "醫美級修護產品，特別適合術後敏感肌。", "img": "https://m.media-amazon.com/images/I/61x9u5j4TLL._SL1500_.jpg", "usage": "早晚均可使用。"},
    {"name": "Cellromax Vitamin K Cream", "desc": "改善暗沉與退紅，常作為術後保養。", "img": "https://m.media-amazon.com/images/I/61MvS5hLq8L._SL1000_.jpg"},
    {"name": "Noscarna 去疤膏 (Noscarna Gel)", "desc": "韓國「國民去疤膏」，針對痘疤、蚊蟲叮咬非常有效。", "img": "https://shop.r10s.jp/vivid-vivid/cabinet/compass1659586111.jpg", "usage": "傷口結痂後每日塗抹 2-3 次。"},
    {"name": "MelaToning Cream", "desc": "淡化因紫外線引起的色素沉澱與黑斑。", "img": "https://i.ebayimg.com/images/g/7pYAAOSwm~hk0G0v/s-l1600.jpg"},
    {"name": "Rejuvenex PDRN 精華安瓶", "desc": "含 PDRN 強效修護成分，深層補水。", "img": "https://i.ebayimg.com/images/g/sXMAAOSwf5lk~6K7/s-l1600.jpg"},
    {"name": "Rejuall 修護霜 (Rejuall Repair Cream)", "desc": "高價值 PDRN 修護霜，用於術後保濕。", "img": "https://m.media-amazon.com/images/I/51pWf2C-u0L._SL1000_.jpg"},
    {"name": "jw 葡萄糖眼藥水", "desc": "針對眼睛疲勞有奇效，金智媛代言。", "img": "https://m.media-amazon.com/images/I/41Kq7qZ6W+L.jpg"},
    {"name": "Handok 痘痘水 (Handok Acne Water)", "desc": "液體配方，適合大面積或頻繁冒痘使用。", "img": "https://shop.r10s.jp/fujiyapharmacy/cabinet/imgrc0234479523.jpg"},
    {"name": "Sinil Pharm 舒緩貼布", "desc": "熱銷痠痛貼布，分冷/熱兩款。", "img": "https://m.media-amazon.com/images/I/81xU9pY+G5L._SL1500_.jpg"},
    {"name": "YouGreen F 腳後跟護理膏", "desc": "含 25% 尿素，解決腳跟乾裂問題。", "img": "https://shop.r10s.jp/fujiyapharmacy/cabinet/imgrc0234479523.jpg"},
    {"name": "Dongkook Elina C 維他命 C", "desc": "Rosé 推薦。高劑量 2000mg 維他命 C。", "img": "https://m.media-amazon.com/images/I/51X57o7Y4kL._SL1000_.jpg"},
    {"name": "Bentpla 舒緩凝膠 (Jennie 代言)", "desc": "針對瘀青、腫脹效果顯著。Jennie、李尚敏推薦。", "img": "https://i.ebayimg.com/images/g/7pYAAOSwm~hk0G0v/s-l1600.jpg"},
    {"name": "Antiphlamine 滾珠乳液", "desc": "傳統痠痛藥水結合滾珠設計，不沾手也能輕鬆塗抹。", "img": "https://m.media-amazon.com/images/I/61jC+k+H6gL._SL1000_.jpg"}
]

# 📅 1. 行程
with tab1:
    days = ["Day 1 抵達/明洞", "Day 2 聖水洞/公園", "Day 3 景福宮/樂天", "Day 4 南大門/市場", "Day 5 北村/歸途"]
    choice = st.selectbox("選擇行程天數", days)
    st.info(f"📍 您選擇的是：{choice}")
    
    itinerary_data = {
        "Day 1": [
            ("15:00 飯店 Check-in", "明洞 L7 或索拉利亞西鐵。"),
            ("17:00 明洞商圈探索", "Olive Young、Daiso、LINE FRIENDS。"),
            ("19:00 明洞餃子館", "米其林刀切麵，全家都愛。")
        ],
        "Day 2": [
            ("10:00 聖水洞文青行", "Dior 旗艦店與小店。"),
            ("13:00 馬場洞韓牛", "入口即化的最高級韓牛。"),
            ("15:30 首爾大公園", "大象列車與動物園。")
        ],
        "Day 3": [
            ("09:30 景福宮韓服", "全家穿韓服，拍傳家寶照片。"),
            ("13:00 通仁市場", "古銅錢買便當體驗。"),
            ("15:00 樂天世界", "室內樂園，再帶去買零食。")
        ]
    }
    
    current_day = choice.split()[0] + " " + choice.split()[1]
    items = itinerary_data.get(current_day, [("尚未更新", "敬請期待詳細資料")])
    for time_name, desc in items:
        st.markdown(f'<div class="itinerary-item"><b>{time_name}</b><br/>{desc}</div>', unsafe_allow_html=True)

# 🍱 2. 美食
with tab2:
    st.subheader("首爾必吃清單")
    st.write("精選口感軟爛、無牛羊負擔的推薦餐廳。")
    st.image("https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=800", caption="明洞餃子")
    st.image("https://images.unsplash.com/photo-1594179047519-f347310d3322?auto=format&fit=crop&q=80&w=800", caption="滿足五香豬蹄")

# 💊 3. 必買藥妝
with tab3:
    st.subheader("🇰🇷 韓國藥局 16 款必買清單")
    st.markdown("不用再怕被擋掉！圖片已優化為穩定版本。")
    
    for item in PHARMACY_ITEMS:
        col1, col2 = st.columns([1, 2])
        with col1:
            st.image(item["img"], use_column_width=True)
        with col2:
            st.markdown(f"**{item['name']}**")
            st.write(item["desc"])
            if "usage" in item:
                st.markdown(f'<div class="usage-box">💡 用法：{item["usage"]}</div>', unsafe_allow_html=True)
        st.divider()

# 🚆 4. 資訊
with tab4:
    st.subheader("行前必看設定")
    st.success("✅ **交通卡**：一定要準備 WOWPASS。")
    st.warning("✅ **導航**：不要用 Google Map，請用 Kakao Maps。")
    st.info("✅ **退稅**：滿 3 萬韓幣記得帶護照辦現場退稅。")
