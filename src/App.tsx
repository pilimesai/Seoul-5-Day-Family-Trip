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
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ShoppingItem } from './types';
import { ITINERARY_DATA, MAP_LOCATIONS, FOOD_DATA, SHOPPING_DATA, ANALYTICS_DATA, SHOPPING_SOURCE, SHOPPING_URL, COUPON_DATA } from './constants';

/**
 * Utility for merging tailwind classes
 */
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TabType = 'itinerary' | 'map' | 'food' | 'shopping' | 'coupons' | 'analytics';

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
            必買藥妝
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
                      <strong className="text-blue-600 block mb-0.5">交通大雷區：AREX 機場快線</strong>
                      前往弘大請務必搭乘藍色的 <strong>普通車 (All-stop)</strong>！千萬別買直達車，會過站不停。
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
                  <div className="space-y-6">
                    {currentDayData.sections.map((sec, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row gap-2 group">
                        <div className="md:w-20 font-bold text-teal-600 shrink-0 flex items-center md:items-start">
                          <span className="bg-teal-50 px-2 py-1 rounded md:bg-transparent md:p-0">{sec.time}</span>
                          <ChevronRight className="w-4 h-4 ml-1 md:hidden text-teal-300" />
                        </div>
                        <div 
                          className="text-stone-700 leading-relaxed pl-2 md:pl-0 border-l-2 border-teal-100 md:border-0"
                          dangerouslySetInnerHTML={{ __html: sec.text }}
                        />
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
                  <h2 className="text-2xl font-black text-stone-800 tracking-tight">專業藥局必買 <span className="text-sm font-medium text-stone-400 ml-2">Pharmacy Only</span></h2>
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
                  <h2 className="text-2xl font-black text-stone-800 tracking-tight">Olive Young 必買 <span className="text-sm font-medium text-stone-400 ml-2">Beauty & Life</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {SHOPPING_DATA.filter(item => item.loc.includes('Olive Young')).map((item, idx) => (
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
          <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
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
