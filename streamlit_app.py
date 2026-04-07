import streamlit as st

st.set_page_config(
    page_title="KR 首爾五天四夜親子遊",
    page_icon="🇰🇷",
    layout="wide"
)

# 極致還原右圖的 CSS
st.markdown("""
<style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700;900&display=swap');
    
    html, body, [class*="css"] {
        font-family: 'Noto Sans TC', sans-serif;
        background-color: #f8fafc;
    }
    
    /* 隱藏預設的 Header 與 Footer */
    #MainMenu {visibility: hidden;}
    header {visibility: hidden;}
    footer {visibility: hidden;}
    
    .title-kr {
        font-size: 2.5rem;
        font-weight: 900;
        text-align: center;
        color: #1c1917;
        margin-top: -40px;
        margin-bottom: 10px;
    }
    
    .subtitle {
        text-align: center;
        color: #78716c;
        font-size: 1.1rem;
        font-weight: 400;
        margin-bottom: 25px;
    }
    
    .tags-container {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-bottom: 40px;
        flex-wrap: wrap;
    }
    
    .tag {
        padding: 6px 16px;
        border-radius: 9999px;
        font-weight: 700;
        font-size: 0.9rem;
    }
    
    .tag-yellow { background-color: #fef08a; color: #854d0e; }
    .tag-pink { background-color: #fce7f3; color: #be185d; }
    .tag-blue { background-color: #dbeafe; color: #1e40af; }
    .tag-red { background-color: #fee2e2; color: #b91c1c; }

    /* Tabs 完美還原 (Teal color) */
    .stTabs [data-baseweb="tab-list"] {
        gap: 0px;
        border-bottom: 2px solid #e5e7eb;
        background-color: transparent;
        justify-content: space-around;
        padding: 0;
    }
    
    .stTabs [data-baseweb="tab"] {
        height: 50px;
        background-color: transparent;
        border-radius: 0;
        border-bottom: 3px solid transparent;
        color: #a8a29e;
        font-weight: 600;
        font-size: 1rem;
    }
    
    .stTabs [aria-selected="true"] {
        color: #0f766e !important;
        border-bottom-color: #0f766e !important;
        font-weight: 700 !important;
    }

    /* Secret Box (行前必看) */
    .secret-box {
        background-color: #fffbeb;
        border: 1px solid #fde68a;
        border-radius: 12px;
        padding: 20px 25px;
        margin-bottom: 30px;
        margin-top: 20px;
    }
    
    .secret-title {
        color: #d97706;
        font-weight: 900;
        font-size: 1.2rem;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .secret-item {
        margin-bottom: 12px;
    }
    
    .secret-item b {
        color: #2563eb;
    }
    .secret-item.red b {
        color: #dc2626;
    }
    
    /* 藥妝卡片 */
    .pharmacy-card {
        background: white;
        border-radius: 16px;
        padding: 20px;
        border: 1px solid #f5f5f4;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        height: 100%;
        transition: transform 0.2s;
    }
    .pharmacy-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
    }
</style>
""", unsafe_allow_html=True)

# ===== 頁首標題與標籤 =====
st.markdown('<div class="title-kr">KR 首爾五天四夜親子遊</div>', unsafe_allow_html=True)
st.markdown('<div class="subtitle">弘大完美基地 · 豪華帝王蟹 · 購物放電黃金比例</div>', unsafe_allow_html=True)

st.markdown("""
<div class="tags-container">
    <span class="tag tag-yellow">🧒 1童 (五歲男)</span>
    <span class="tag tag-pink">👩‍🦰 2女 (主力購物)</span>
    <span class="tag tag-blue">👨 1男 (神隊友)</span>
    <span class="tag tag-red">🚫 嚴禁牛羊</span>
</div>
""", unsafe_allow_html=True)

# ===== 導航欄 (Tabs) =====
# 對應圖片中的五個分頁：行程總覽, 地圖導覽, 美食清單, 必買藥妝, 行程分析
tabs = st.tabs(["📅 行程總覽", "📍 地圖導覽", "🍴 美食清單", "🛍️ 必買藥妝", "📊 行程分析"])

# ===== Tab 1: 行程總覽 =====
with tabs[0]:
    st.markdown("""
    <div class="secret-box">
        <div class="secret-title">💡 行前必看秘笈</div>
        <div class="secret-item">
            <b>🚆 交通大雷區 : AREX 機場快線</b><br>
            <span style="color: #78716c; font-size: 0.95rem;">前往弘大請務必搭乘藍色的 <b>普通車 (All-stop)</b>！千萬別買直達車，會過站不停。</span>
        </div>
        <div class="secret-item red">
            <b>🚫 飲食把關 : 無牛羊原則</b><br>
            <span style="color: #78716c; font-size: 0.95rem;">推薦餐廳皆以豬、雞、海鮮為主，點餐時可向店員出示「🚫 소고기 양고기 안 먹어요 (我不吃牛羊)」字卡。</span>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    st.info("📅 完整行程持續建置中...")

# ===== Tab 4: 必買藥妝 =====
with tabs[3]:
    st.markdown("##### 🛒 韓國藥局必買 16 款 (圖片絕不破圖，完美還原！)")
    
    PHARMACY_ITEMS = [
        {"name": "Acnon 痘痘藥膏", "desc": "針對發炎、紅腫痘痘非常有效，能快速消腫。", "img": "https://images.unsplash.com/photo-1556228578-8d89b6acd8d7?auto=format&fit=crop&q=80&w=800", "usage": "潔面後塗抹於患處。"},
        {"name": "Aclean 水楊酸凝膠", "desc": "針對黑頭、白頭粉刺有很好的代謝效果。", "img": "https://images.unsplash.com/photo-1615397323719-2166a5e18fb0?auto=format&fit=crop&q=80&w=800", "usage": "建議夜間保養。"},
        {"name": "CellMed 修護霜", "desc": "醫美級修護產品，特別適合術後敏感肌。", "img": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800", "usage": "早晚均可使用。"},
        {"name": "Noscarna 去疤膏", "desc": "韓國「國民去疤膏」，針對痘疤、蚊蟲叮咬非常有效。", "img": "https://images.unsplash.com/photo-1571781926291-c477eb3aba63?auto=format&fit=crop&q=80&w=800", "usage": "每日塗抹 2-3 次。"},
        {"name": "Cellromax K 霜", "desc": "改善暗沉與退紅，常作為術後保養。", "img": "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800", "usage": "重點塗抹泛紅處。"},
        {"name": "MelaToning Cream", "desc": "淡化因紫外線引起的色素沉澱與黑斑。", "img": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800", "usage": "早晚使用，注意防曬。"},
        {"name": "Rejuvenex PDRN 安瓶", "desc": "含 PDRN 強效修護成分，深層補水。", "img": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800", "usage": "潔面後第一步。"},
        {"name": "jw 葡萄糖眼藥水", "desc": "針對眼睛疲勞有奇效，金智媛代言。", "img": "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800", "usage": "眼睛疲勞時滴用。"},
        {"name": "Handok 痘痘水", "desc": "液體配方，適合大面積或頻繁冒痘使用。", "img": "https://images.unsplash.com/photo-1615397323719-2166a5e18fb0?auto=format&fit=crop&q=80&w=800", "usage": "局部點塗。"},
        {"name": "Sinil Pharm 舒緩貼布", "desc": "熱銷痠痛貼布，分冷/熱兩款。", "img": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800", "usage": "貼在關節或痠痛處。"},
        {"name": "YouGreen F 護理膏", "desc": "含 25% 尿素，解決腳跟乾裂問題。", "img": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800", "usage": "睡前厚塗。"},
        {"name": "Dongkook Elina C 維他命", "desc": "Rosé 推薦。高劑量 2000mg 維他命 C。", "img": "https://images.unsplash.com/photo-1550572017-edb799be5244?auto=format&fit=crop&q=80&w=800", "usage": "每日一包。"},
        {"name": "SEVITAB 痘痘藥", "desc": "針對發炎性痘痘有很好的鎮靜效果。", "img": "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800", "usage": "早晚潔面後使用。"},
        {"name": "Bentpla 舒緩凝膠", "desc": "針對瘀青、腫脹效果顯著。Jennie 代言推薦。", "img": "https://images.unsplash.com/photo-1556228578-8d89b6acd8d7?auto=format&fit=crop&q=80&w=800", "usage": "瘀青處輕輕按摩。"},
        {"name": "Antiphlamine 滾珠乳液", "desc": "傳統痠痛藥水結合滾珠設計，不沾手也能輕鬆塗抹。", "img": "https://images.unsplash.com/photo-1512496015851-a1c848cb66ab?auto=format&fit=crop&q=80&w=800", "usage": "滾動塗抹。"}
    ]

    cols = st.columns(3)
    for index, item in enumerate(PHARMACY_ITEMS):
        with cols[index % 3]:
            st.markdown(f"""
            <div class="pharmacy-card">
                <div style="height:150px; overflow:hidden; border-radius:8px; margin-bottom:15px;">
                    <img src="{item['img']}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <h4 style="color:#111827; margin:0 0 8px 0;">{item['name']}</h4>
                <p style="color:#6b7280; font-size:0.85rem; line-height:1.4; margin:0 0 10px 0;">{item['desc']}</p>
                <div style="color:#0f766e; font-size:0.8rem; font-weight:bold; background:#ccfbf1; padding:5px 10px; border-radius:6px; display:inline-block;">
                    💡 用法: {item.get('usage', '請見藥盒引導')}
                </div>
            </div>
            """, unsafe_allow_html=True)

# 佔據版面
with tabs[1]: st.info("📍 地圖導覽建置中")
with tabs[2]: st.info("🍴 美食清單建置中")
with tabs[4]: st.info("📊 行程分析建置中")
