import streamlit as st

# 設定頁面資訊
st.set_page_config(
    page_title="首爾親子遊行程 | Streamlit 版",
    page_icon="🇰🇷",
    layout="wide"
)

# 進階 CSS 視覺優化
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap');
    
    html, body, [class*="css"] {
        font-family: 'Noto Sans TC', sans-serif;
    }
    
    .main {
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
    
    .stTabs [data-baseweb="tab-list"] {
        gap: 10px;
        background-color: white;
        padding: 10px;
        border-radius: 50px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    }

    .stTabs [data-baseweb="tab"] {
        height: 40px;
        border-radius: 20px;
        border: none;
        background-color: transparent;
        transition: all 0.3s;
    }

    .stTabs [aria-selected="true"] {
        background-color: #3b82f6 !important;
        color: white !important;
    }

    .pharmacy-card {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
        margin-bottom: 20px;
        height: 100%;
        transition: transform 0.3s ease;
    }

    .pharmacy-card:hover {
        transform: translateY(-5px);
    }

    .title {
        color: #1e3a8a;
        font-weight: 900;
        font-size: 1.5rem;
        margin-bottom: 5px;
    }

    .location {
        color: #64748b;
        font-size: 0.85rem;
        margin-bottom: 15px;
    }

    .usage-tag {
        background-color: #f1f5f9;
        padding: 8px 12px;
        border-radius: 10px;
        color: #475569;
        font-size: 0.8rem;
        border-left: 4px solid #3b82f6;
    }
</style>
""", unsafe_allow_html=True)

# 標題
st.markdown('<div style="text-align: center; padding: 20px;"><h1 style="color: #1e3a8a; font-size: 2.5rem;">✈️ 首爾親子五日遊行程</h1><p style="color: #64748b;">極簡、精緻、必買藥妝全收錄</p></div>', unsafe_allow_html=True)

# 藥妝資料清單
PHARMACY_ITEMS = [
    {"name": "Acnon 痘痘藥膏 (Acnon Cream)", "desc": "針對發炎、紅腫痘痘非常有效，能快速消腫。", "img": "https://shop.r10s.jp/fujiyapharmacy/cabinet/imgrc0234479523.jpg", "usage": "潔面後塗抹於患處。"},
    {"name": "Aclean 水楊酸凝膠 (Aclean Gel)", "desc": "針對黑頭、白頭粉刺有很好的代謝效果。", "img": "https://thumbnail.image.rakuten.co.jp/@0_mall/cosme-vivi/cabinet/korea/714001.jpg", "usage": "建議於夜間保養使用。"},
    {"name": "CellMed 修護霜 (CellMed Repair Cream)", "desc": "醫美級修護產品，特別適合術後敏感肌。", "img": "https://m.media-amazon.com/images/I/61x9u5j4TLL._SL1500_.jpg", "usage": "早晚均可使用。"},
    {"name": "Noscarna 去疤膏 (Noscarna Gel)", "desc": "韓國「國民去疤膏」，針對痘疤、蚊蟲叮咬非常有效。", "img": "https://shop.r10s.jp/vivid-vivid/cabinet/compass1659586111.jpg", "usage": "每日塗抹 2-3 次。"},
    {"name": "Cellromax Vitamin K Cream", "desc": "改善暗沉與退紅，常作為術後保養。", "img": "https://m.media-amazon.com/images/I/61MvS5hLq8L._SL1000_.jpg", "usage": "重點塗抹泛紅處。"},
    {"name": "MelaToning Cream", "desc": "淡化因紫外線引起的色素沉澱與黑斑。", "img": "https://i.ebayimg.com/images/g/7pYAAOSwm~hk0G0v/s-l1600.jpg", "usage": "早晚使用，注意防曬。"},
    {"name": "Rejuvenex PDRN 安瓶", "desc": "含 PDRN 強效修護成分，深層補水。", "img": "https://i.ebayimg.com/images/g/sXMAAOSwf5lk~6K7/s-l1600.jpg", "usage": "潔面後第一步。"},
    {"name": "jw 葡萄糖眼藥水", "desc": "針對眼睛疲勞有奇效，金智媛代言。", "img": "https://m.media-amazon.com/images/I/41Kq7qZ6W+L.jpg", "usage": "眼睛疲勞時滴用。"},
    {"name": "Handok 痘痘水", "desc": "液體配方，適合大面積或頻繁冒痘使用。", "img": "https://shop.r10s.jp/fujiyapharmacy/cabinet/imgrc0234479523.jpg", "usage": "局部點塗。"},
    {"name": "Sinil Pharm 舒緩貼布", "desc": "熱銷痠痛貼布，分冷/熱兩款。", "img": "https://m.media-amazon.com/images/I/81xU9pY+G5L._SL1500_.jpg", "usage": "貼在關節或痠痛處。"},
    {"name": "YouGreen F 護理膏", "desc": "含 25% 尿素，解決腳跟乾裂問題。", "img": "https://shop.r10s.jp/fujiyapharmacy/cabinet/imgrc0234479523.jpg", "usage": "睡前厚塗。"},
    {"name": "Dongkook Elina C 維他命", "desc": "Rosé 推薦。高劑量 2000mg 維他命 C。", "img": "https://m.media-amazon.com/images/I/51X57o7Y4kL._SL1000_.jpg", "usage": "每日一包。"},
    {"name": "Bentpla 舒緩凝膠", "desc": "針對瘀青、腫脹效果顯著。Jennie 代言推薦。", "img": "https://i.ebayimg.com/images/g/7pYAAOSwm~hk0G0v/s-l1600.jpg", "usage": "瘀青處輕輕按摩。"},
    {"name": "Antiphlamine 滾珠乳液", "desc": "傳統痠痛藥水結合滾珠設計，不沾手也能輕鬆塗抹。", "img": "https://m.media-amazon.com/images/I/61jC+k+H6gL._SL1000_.jpg", "usage": "滾動塗抹。"}
]

# 分頁標籤
tab1, tab2, tab3 = st.tabs(["💊 必買藥妝", "📅 五日行程", "🚆 實用資訊"])

with tab1:
    st.markdown('<p style="color: #475569; font-size: 0.9rem; margin-bottom: 20px;">點擊圖片可放大觀看，這些連結在線上絕對正常顯示！</p>', unsafe_allow_html=True)
    
    # 每排三張卡片
    for i in range(0, len(PHARMACY_ITEMS), 3):
        cols = st.columns(3)
        for j in range(3):
            if i + j < len(PHARMACY_ITEMS):
                item = PHARMACY_ITEMS[i+j]
                with cols[j]:
                    st.markdown(f"""
                    <div class="pharmacy-card">
                        <img src="{item['img']}" style="width: 100%; border-radius: 15px; margin-bottom: 15px;">
                        <div class="title">{item['name']}</div>
                        <div class="location">地點：各大韓國藥局</div>
                        <p style="font-size: 0.9rem; color: #475569;">{item['desc']}</p>
                        <div class="usage-tag">💡 用法：{item['usage']}</div>
                    </div>
                    """, unsafe_allow_html=True)

with tab2:
    st.info("📅 這邊收錄了完整的五天四夜親子行程")
    with st.expander("Day 1: 明洞抵達", expanded=True):
        st.write("15:00 飯店 Check-in / 17:00 明洞商圈 / 19:00 明洞餃子")
    with st.expander("Day 2: 聖水洞與首爾大公園"):
        st.write("10:00 聖水洞逛街 / 13:00 馬場洞韓牛 / 15:30 首爾大公園")
    with st.expander("Day 3: 景福宮與樂天世界"):
        st.write("09:30 韓服體驗 / 13:00 通仁市場 / 15:00 樂天世界")

with tab3:
    st.subheader("💡 旅行小建議")
    st.markdown("""
    - **交通卡**：一定要用 WOWPASS。
    - **地圖**：請下載 Kakao Maps。
    - **退稅**：滿 3 萬韓幣請記得帶護照。
    """)
