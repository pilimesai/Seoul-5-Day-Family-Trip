/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Utensils, 
  ShoppingBag, 
  Calendar, 
  PieChart, 
  Baby, 
  Users, 
  User, 
  Ban, 
  Lightbulb, 
  TrainFront, 
  Pill,
  ChevronRight,
  Ticket,
  Barcode,
  ExternalLink,
  Car,
  Train,
  Bus,
  Footprints,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ShoppingItem } from './types';
import { ITINERARY_DATA, MAP_LOCATIONS, FOOD_DATA, SHOPPING_DATA, ANALYTICS_DATA, SHOPPING_SOURCE, SHOPPING_URL, COUPON_DATA, TRANSPORT_COMPARISON } from './constants';

/**
 * Utility for merging tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TabType = 'itinerary' | 'map' | 'food' | 'shopping' | 'coupons' | 'analytics' | 'transport';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('itinerary');
  const [activeDay, setActiveDay] = useState(1);
  const [activeMapQuery, setActiveMapQuery] = useState('Hongik University Station');

  const currentDayData = useMemo(() => 
    ITINERARY_DATA.find(d => d.day === activeDay) || ITINERARY_DATA[0]
  , [activeDay]);

  const selectedLocation = useMemo(() => {
    for (const group of MAP_LOCATIONS) {
      const found = group.locations.find(l => l.q === activeMapQuery);
      if (found) return found;
    }
    return null;
  }, [activeMapQuery]);

  return (
    <div className="bg-stone-50 text-stone-800 antialiased min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm pt-8 pb-6 px-4 border-b-4 border-teal-600">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-stone-900 mb-4 tracking-tight"
          >
            🇰🇷 首爾五天四夜親子遊
          </motion.h1>
          <p className="text-lg md:text-xl text-stone-600 mb-6 font-medium">
            弘大完美基地 ‧ 豪華帝王蟹 ‧ 購物放電黃金比例
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-sm">
            <Badge icon={<Baby className="w-4 h-4" />} color="amber">1童 (五歲男)</Badge>
            <Badge icon={<Users className="w-4 h-4" />} color="rose">2女 (主力購物)</Badge>
            <Badge icon={<User className="w-4 h-4" />} color="blue">1男 (神隊友)</Badge>
            <Badge icon={<Ban className="w-4 h-4" />} color="red">嚴禁牛羊</Badge>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white sticky top-0 z-10 shadow-md">
        <div className="max-w-5xl mx-auto px-4 flex justify-around overflow-x-auto hide-scrollbar">
          <TabButton 
            active={activeTab === 'itinerary'} 
            onClick={() => setActiveTab('itinerary')}
            icon={<Calendar className="w-4 h-4" />}
          >
            行程總覽
          </TabButton>
          <TabButton 
            active={activeTab === 'map'} 
            onClick={() => setActiveTab('map')}
            icon={<MapPin className="w-4 h-4" />}
          >
            地圖導覽
          </TabButton>
          <TabButton 
            active={activeTab === 'food'} 
            onClick={() => setActiveTab('food')}
            icon={<Utensils className="w-4 h-4" />}
          >
            美食清單
          </TabButton>
          <TabButton 
            active={activeTab === 'shopping'} 
            onClick={() => setActiveTab('shopping')}
            icon={<ShoppingBag className="w-4 h-4" />}
          >
            購物清單
          </TabButton>
          <TabButton 
            active={activeTab === 'coupons'} 
            onClick={() => setActiveTab('coupons')}
            icon={<Ticket className="w-4 h-4" />}
          >
            折價券
          </TabButton>
          <TabButton 
            active={activeTab === 'analytics'} 
            onClick={() => setActiveTab('analytics')}
            icon={<PieChart className="w-4 h-4" />}
          >
            行程分析
          </TabButton>
          <TabButton 
            active={activeTab === 'transport'} 
            onClick={() => setActiveTab('transport')}
            icon={<TrainFront className="w-4 h-4" />}
          >
            交通比價
          </TabButton>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow max-w-5xl mx-auto w-full p-4 md:p-6 lg:p-8">
        <AnimatePresence mode="wait">
          {activeTab === 'itinerary' && (
            <motion.section 
              key="itinerary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl shadow-sm">
                <h3 className="font-bold text-amber-800 text-lg mb-3 flex items-center">
                  <Lightbulb className="w-5 h-5 text-amber-500 mr-2" />
                  行前必看秘笈
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-stone-700 text-sm">
                    <TrainFront className="w-4 h-4 text-blue-500 mt-1 mr-2 shrink-0" />
                    <div>
                      <strong className="text-blue-600 block mb-0.5">交通攻略：AREX 與機場電梯動線</strong>
                      前往弘大請務必搭乘藍色的 <strong>普通車 (All-stop)</strong>！<br/>
                      <div className="mt-2 p-3 bg-white border border-blue-100 rounded-lg shadow-sm">
                        <p className="font-bold text-blue-700 mb-1 leading-none flex items-center gap-1">
                          🛗 機場「全程電梯」推車動線：
                        </p>
                        <ul className="space-y-1 text-xs text-stone-600">
                          <li>1. 抵達大廳 (1F) 後，前往 <strong>7 號或 8 號門</strong> 附近的電梯。</li>
                          <li>2. 搭電梯降至 <strong>地下 B1 層 (交通中心)</strong>。</li>
                          <li>3. 沿著「Airport Railroad」地標前進，地面有藍色線條引導。</li>
                          <li>4. 進入 AREX 閘口前，找兩側的 <strong>專用寬閘口</strong> 或電梯直達 <strong>B4/B3 月台</strong>。</li>
                          <li>5. <strong>弘大站</strong>：抵達後搭電梯至 B1 穿堂，從 <strong>3 號或 7 號出口</strong> 電梯直登地面。</li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start text-stone-700 text-sm">
                    <Ban className="w-4 h-4 text-red-500 mt-1 mr-2 shrink-0" />
                    <div>
                      <strong className="text-stone-800">飲食把關：無牛羊原則</strong>
                      推薦餐廳皆以豬、雞、海鮮為主，點餐時可向店員出示「🚫 소고기 양고기 안먹어요 (我不吃牛羊)」字卡。
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex md:flex-col overflow-x-auto gap-2 hide-scrollbar">
                  {ITINERARY_DATA.map((day) => (
                    <button
                      key={day.day}
                      onClick={() => setActiveDay(day.day)}
                      className={cn(
                        "w-full text-left md:text-center px-4 py-3 rounded-lg border font-bold transition whitespace-nowrap md:whitespace-normal",
                        activeDay === day.day 
                          ? "bg-teal-600 text-white border-teal-600 shadow-md" 
                          : "bg-white text-stone-600 border-stone-200 hover:border-teal-300"
                      )}
                    >
                      Day {day.day}
                    </button>
                  ))}
                </div>
                <div className="md:w-3/4 bg-white rounded-xl shadow-sm border border-stone-200 p-5 md:p-6 min-h-[400px]">
                  <h2 className="text-2xl font-extrabold mb-4 text-stone-900 border-b pb-2 flex items-center justify-between">
                    <span>Day {currentDayData.day}: {currentDayData.title}</span>
                    <span className="text-xs font-normal text-stone-400 hidden sm:inline">{currentDayData.highlights}</span>
                  </h2>
                  <div className="space-y-8 relative before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-0.5 before:bg-teal-100 md:before:hidden">
                    {currentDayData.sections.map((sec, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row gap-4 group relative">
                        <div className="md:w-28 shrink-0 flex items-center md:items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-white border-2 border-teal-500 z-10 flex items-center justify-center shrink-0 md:hidden">
                            <div className="w-2 h-2 rounded-full bg-teal-500" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-mono text-lg font-black text-teal-600 block leading-none">{sec.time}</span>
                            {sec.transport && (
                              <div className="hidden md:flex items-center gap-1 mt-2 text-[10px] font-bold uppercase tracking-widest text-teal-400">
                                {sec.transport === 'taxi' && <Car className="w-3 h-3" />}
                                {sec.transport === 'subway' && <Train className="w-3 h-3" />}
                                {sec.transport === 'bus' && <Bus className="w-3 h-3" />}
                                {sec.transport === 'walk' && <Footprints className="w-3 h-3" />}
                                {sec.transport}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex-1 bg-stone-50 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none">
                          <div 
                            className="text-stone-800 text-base leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: sec.text }}
                          />
                          {(sec.transport || sec.transportTip) && (
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              {/* Mobile Transport Icon */}
                              {sec.transport && (
                                <div className="md:hidden flex items-center gap-1 text-[10px] font-bold uppercase py-1 px-2 bg-teal-100 text-teal-700 rounded-lg">
                                  {sec.transport === 'taxi' && <Car className="w-3 h-3" />}
                                  {sec.transport === 'subway' && <Train className="w-3 h-3" />}
                                  {sec.transport === 'bus' && <Bus className="w-3 h-3" />}
                                  {sec.transport === 'walk' && <Footprints className="w-3 h-3" />}
                                  {sec.transport}
                                </div>
                              )}
                              {sec.transportTip && (
                                <div className="flex items-center gap-1.5 text-xs font-medium text-teal-600 bg-teal-50/50 py-1.5 px-3 rounded-xl border border-teal-100/50 italic">
                                  <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                  <span>{sec.transportTip}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === 'map' && (
            <motion.section 
              key="map"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col md:flex-row gap-6 h-[600px]"
            >
              <div className="md:w-1/3 flex flex-col overflow-y-auto gap-2 pr-2 hide-scrollbar bg-white p-4 rounded-xl border border-stone-200">
                {MAP_LOCATIONS.map((group, gIdx) => (
                  <div key={gIdx}>
                    <div className="font-bold mt-4 mb-2 text-stone-400 text-xs tracking-widest uppercase px-1">
                      {group.day}
                    </div>
                    {group.locations.map((loc, lIdx) => (
                      <button
                        key={lIdx}
                        onClick={() => setActiveMapQuery(loc.q)}
                        className={cn(
                          "w-full text-left px-3 py-3 border mb-2 rounded-lg transition shadow-sm text-sm",
                          activeMapQuery === loc.q
                            ? "bg-rose-50 text-rose-700 border-rose-200 font-bold"
                            : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-white"
                        )}
                      >
                        {loc.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
              <div className="md:w-2/3 bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden relative min-h-[300px] flex flex-col">
                <div className="p-3 border-b flex justify-between items-center bg-stone-50">
                  <span className="text-sm font-bold text-stone-700 truncate mr-2">
                    {selectedLocation?.name || "地圖預覽"}
                  </span>
                  {selectedLocation?.naverQ && (
                    <a 
                      href={`https://map.naver.com/v5/search/${encodeURIComponent(selectedLocation.naverQ)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 bg-[#03C75A] text-white text-xs font-bold rounded-full hover:bg-[#02b351] transition shadow-sm shrink-0"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Naver Map
                    </a>
                  )}
                </div>
                <div className="flex-grow">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(activeMapQuery)}&output=embed`}
                  />
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === 'food' && (
            <motion.section 
              key="food"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {FOOD_DATA.map((item, idx) => (
                <div key={idx} className="bg-white p-5 border rounded-xl shadow-sm border-l-4 border-l-teal-500 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded font-bold">{item.tag}</span>
                  </div>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.section>
          )}

          {activeTab === 'shopping' && (
            <motion.section 
              key="shopping"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Pharmacy Section */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-rose-200">
                  <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                    <Pill className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-stone-800 tracking-tight">藥局 購物清單 <span className="text-sm font-medium text-stone-400 ml-2">Pharmacy List</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SHOPPING_DATA.filter(item => item.loc.includes('藥局')).map((item, idx) => (
                    <ShoppingCard key={idx} item={item} type="pharmacy" />
                  ))}
                </div>
              </div>

              {/* Olive Young Section */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-green-200">
                  <div className="p-2 bg-green-100 rounded-lg text-green-700">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-stone-800 tracking-tight">Olive Young 購物清單 <span className="text-sm font-medium text-stone-400 ml-2">Beauty & Life</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SHOPPING_DATA.filter(item => item.loc.includes('Olive Young')).map((item, idx) => (
                    <ShoppingCard key={idx} item={item} type="olive" />
                  ))}
                </div>
              </div>

              {/* Featured Brands Section */}
              <div>
                <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-teal-200">
                  <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-stone-800 tracking-tight">精選品牌 購物清單 <span className="text-sm font-medium text-stone-400 ml-2">Fashion & Trends</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SHOPPING_DATA.filter(item => 
                    !item.loc.includes('藥局') && !item.loc.includes('Olive Young')
                  ).map((item, idx) => (
                    <ShoppingCard key={idx} item={item} type="olive" />
                  ))}
                </div>
              </div>

              <div className="mt-8 p-4 bg-stone-100 rounded-lg text-xs text-stone-500 italic text-center border border-stone-200">
                <p>{SHOPPING_SOURCE}</p>
                <a 
                  href={SHOPPING_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-teal-600 hover:underline mt-1 inline-block break-all"
                >
                  {SHOPPING_URL}
                </a>
              </div>
            </motion.section>
          )}

          {activeTab === 'coupons' && (
            <motion.section 
              key="coupons"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {COUPON_DATA.map((coupon, idx) => (
                <div 
                  key={idx} 
                  className={cn(
                    "border-2 border-dashed rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative",
                    coupon.color ? "border-white/20" : "bg-white border-stone-200"
                  )}
                  style={coupon.color ? { backgroundColor: coupon.color, color: 'white' } : {}}
                >
                  {/* Coupon Notch Effect */}
                  <div className={cn(
                    "absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-r-2 border-dashed",
                    coupon.color ? "bg-stone-50 border-white/20" : "bg-stone-50 border-stone-200"
                  )} />
                  <div className={cn(
                    "absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-l-2 border-dashed",
                    coupon.color ? "bg-stone-50 border-white/20" : "bg-stone-50 border-stone-200"
                  )} />
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className={cn(
                          "inline-block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-1",
                          coupon.color ? "bg-white/20 text-white" : "bg-stone-100 text-stone-600"
                        )}>
                          {coupon.brand}
                        </span>
                        <h3 className={cn(
                          "text-xl font-black leading-tight",
                          coupon.color ? "text-white" : "text-stone-900"
                        )}>{coupon.title}</h3>
                        {coupon.subtitle && (
                          <p className={cn(
                            "text-xs font-bold mt-1",
                            coupon.color ? "text-white/80" : "text-teal-600"
                          )}>{coupon.subtitle}</p>
                        )}
                      </div>
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                        coupon.color ? "bg-white/20 text-white" : "bg-teal-50 text-teal-600"
                      )}>
                        <Ticket className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <p className={cn(
                      "text-sm mb-4 leading-relaxed",
                      coupon.color ? "text-white/90" : "text-stone-600"
                    )}>{coupon.desc}</p>
                    
                    {coupon.image && (
                      <div className="mb-4 rounded-lg overflow-hidden border border-stone-100 bg-white p-2">
                        <img 
                          src={coupon.image} 
                          alt={coupon.title} 
                          className="w-full h-auto max-w-[200px] mx-auto"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}

                    {coupon.barcode && (
                      <div className="bg-white p-4 border rounded-xl flex flex-col items-center gap-2">
                        <img 
                          src={`https://bwipjs-api.metafloor.com/?bcid=ean13&text=${coupon.barcode.replace(/\s/g, '')}&scale=2&rotate=N&includetext=false`}
                          alt="Barcode"
                          className="w-full h-16 object-contain"
                          referrerPolicy="no-referrer"
                        />
                        <span className="font-mono text-lg font-bold tracking-[0.1em] text-stone-800">{coupon.barcode}</span>
                      </div>
                    )}

                    {coupon.code && (
                      <div className={cn(
                        "mt-2 p-3 border border-dashed rounded-lg flex flex-col items-center",
                        coupon.color ? "bg-white/10 border-white/30 text-white" : "bg-amber-50 border-amber-300 text-amber-900"
                      )}>
                        <span className={cn(
                          "text-[10px] font-bold uppercase mb-1",
                          coupon.color ? "text-white/60" : "text-amber-600"
                        )}>Promo Code</span>
                        <span className="text-xl font-mono font-black">{coupon.code}</span>
                      </div>
                    )}

                    {coupon.validity && (
                      <div className={cn(
                        "mt-4 pt-4 border-t flex items-center justify-center gap-2 text-[10px] font-bold uppercase",
                        coupon.color ? "border-white/20 text-white/60" : "border-stone-100 text-stone-400"
                      )}>
                        <span>Validity:</span>
                        <span>{coupon.validity}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.section>
          )}
          {activeTab === 'analytics' && (
            <motion.section 
              key="analytics"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 flex flex-col items-center gap-8 text-center"
            >
              <h3 className="text-xl font-bold">行程權重分配</h3>
              <div className="w-full h-[300px] md:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={ANALYTICS_DATA}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {ANALYTICS_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36}/>
                  </RePieChart>
                </ResponsiveContainer>
              </div>
              <p className="text-stone-500 text-sm max-w-md">
                此行程已根據您的需求調整：上午多為小孩放電或特色景點，下午與傍晚則安排購物，確保兩位女士逛得開心，神隊友與小孩體力充足。
              </p>
            </motion.section>
          )}

          {activeTab === 'transport' && (
            <motion.section 
              key="transport"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                <div className="bg-teal-600 p-4 text-white">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <TrainFront className="w-6 h-6" />
                    仁川機場 ⇄ 弘大：交通比價
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-stone-50 border-b border-stone-200">
                        <th className="p-4 font-bold text-stone-600">交通工具</th>
                        <th className="p-4 font-bold text-stone-600">單人價格</th>
                        <th className="p-4 font-bold text-stone-600">3人總價</th>
                        <th className="p-4 font-bold text-stone-600">時間</th>
                        <th className="p-4 font-bold text-stone-600">優點</th>
                      </tr>
                    </thead>
                    <tbody>
                      {TRANSPORT_COMPARISON.map((item, idx) => (
                        <tr key={idx} className="border-b border-stone-100 hover:bg-stone-50/50 transition">
                          <td className="p-4">
                            <div className="font-bold text-stone-900">{item.mode}</div>
                            <div className="text-[10px] text-teal-600 font-bold uppercase tracking-tighter mt-1">推薦：{item.recommend}</div>
                          </td>
                          <td className="p-4 text-stone-600">{item.priceText}</td>
                          <td className="p-4">
                            <span className="font-mono font-bold text-rose-600">約 {item.totalPrice.toLocaleString()} KRW</span>
                          </td>
                          <td className="p-4 text-stone-500 font-medium">{item.time}</td>
                          <td className="p-4">
                            <div className="text-stone-700 font-medium mb-1 flex items-center gap-1">
                              <BadgeSmall color="green">優</BadgeSmall> {item.pros}
                            </div>
                            <div className="text-stone-400 text-xs flex items-center gap-1">
                              <BadgeSmall color="gray">缺</BadgeSmall> {item.cons}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-100 p-5 rounded-2xl">
                  <h3 className="font-bold text-blue-800 mb-3 flex items-center gap-2 text-base">
                    <Lightbulb className="w-5 h-5 text-blue-500" />
                    在地小撇步
                  </h3>
                  <ul className="space-y-2 text-sm text-blue-900/80">
                    <li className="flex gap-2">
                      <span className="shrink-0">•</span>
                      <span><strong>T-money 小孩卡：</strong> 5-12 歲小孩可購買小孩卡，乘車半價，可在便利商店或機場服務台憑護照設定。</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="shrink-0">•</span>
                      <span><strong>計程車 APP：</strong> 如果要搭計程車，推薦下載 <strong>Kakao Taxi</strong> 可預估車資且減少溝通難度。</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-rose-50 border border-rose-100 p-5 rounded-2xl">
                  <h3 className="font-bold text-rose-800 mb-3 flex items-center gap-2 text-base">
                    <Info className="w-5 h-5 text-rose-500" />
                    給您的建議
                  </h3>
                  <p className="text-sm text-rose-900/80 leading-relaxed">
                    您的行程中有「3位成人+1位5歲小孩」，且攜帶購物戰利品。<b>回程</b>強烈建議預約<b>機場接送 (Private car)</b>，除了省去拖重行李轉車的痛苦，分擔下來每人僅需約 2 萬多韓幣，性價比極高！
                  </p>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-stone-800 text-stone-300 py-6 text-center mt-auto">
        <p className="text-sm italic">"讓旅行成為全家人的美好記憶" ‧ 客製化行程系統</p>
      </footer>
    </div>
  );
}

function ShoppingCard({ item, type }: { item: ShoppingItem, type: 'pharmacy' | 'olive', key?: React.Key }) {
  const isPharmacy = type === 'pharmacy';
  
  return (
    <div className={cn(
      "bg-white p-5 border rounded-xl shadow-sm hover:shadow-md transition border-l-4",
      isPharmacy ? "border-l-rose-500" : "border-l-green-500"
    )}>
      <div className="flex gap-4 items-start">
        <div className={cn(
          "w-10 h-10 flex items-center justify-center rounded-full shrink-0",
          isPharmacy ? "bg-rose-50 text-rose-500" : "bg-green-50 text-green-600"
        )}>
          {isPharmacy ? <Pill className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-baseline gap-2 mb-1">
            <h3 className="font-bold text-stone-800">{item.name}</h3>
            {item.nameKr && <span className="text-xs text-stone-400 font-medium">{item.nameKr}</span>}
          </div>
          <p className={cn(
            "text-[10px] inline-block px-1.5 py-0.5 rounded font-bold mb-2",
            isPharmacy ? "bg-rose-100 text-rose-600" : "bg-green-100 text-green-700"
          )}>
            {item.loc}
          </p>
          <p className="text-stone-600 text-sm leading-relaxed mb-3">{item.desc}</p>
          {item.recommender && (
            <div className="flex items-center gap-1.5 text-xs font-bold py-1 px-2 bg-stone-100 text-stone-500 rounded-md mb-2">
              <Users className="w-3.5 h-3.5" />
              <span>推薦者: {item.recommender}</span>
            </div>
          )}
          {item.image && (
            <div className={cn(
              "mt-3 rounded-lg overflow-hidden border border-stone-200",
              item.code ? "max-w-[200px] mx-auto" : "w-full"
            )}>
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
          {item.code && (
            <div className="mt-3 p-2 bg-amber-50 border border-dashed border-amber-300 rounded flex items-center justify-between">
              <span className="text-[10px] font-bold text-amber-700 uppercase">Promo Code</span>
              <span className="text-sm font-mono font-bold text-amber-900">{item.code}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BadgeSmall({ children, color }: { children: React.ReactNode, color: 'green' | 'gray' }) {
  const colors = {
    green: "bg-green-100 text-green-700",
    gray: "bg-stone-100 text-stone-500"
  };
  return (
    <span className={cn("text-[10px] px-1 rounded font-black uppercase", colors[color])}>
      {children}
    </span>
  );
}

function Badge({ children, icon, color }: { children: React.ReactNode, icon: React.ReactNode, color: 'amber' | 'rose' | 'blue' | 'red' }) {
  const colors = {
    amber: "bg-amber-100 text-amber-800 border-amber-200",
    rose: "bg-rose-100 text-rose-800 border-rose-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    red: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <span className={cn("flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold border", colors[color])}>
      {icon}
      {children}
    </span>
  );
}

function TabButton({ children, active, onClick, icon }: { children: React.ReactNode, active: boolean, onClick: () => void, icon: React.ReactNode }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 whitespace-nowrap py-4 px-3 text-sm md:text-base transition-all border-b-4",
        active 
          ? "border-teal-600 text-teal-600 font-bold" 
          : "border-transparent text-stone-500 hover:text-teal-400"
      )}
    >
      {icon}
      {children}
    </button>
  );
}
