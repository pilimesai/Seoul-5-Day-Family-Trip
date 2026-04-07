import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Utensils, 
  ShoppingBag, 
  Info, 
  Clock, 
  Navigation, 
  CheckCircle2, 
  Bus, 
  Train, 
  Heart, 
  Baby,
  ExternalLink,
  Pill
} from 'lucide-react';
import { useState } from 'react';
import { 
  ITINERARY, 
  ESSENTIAL_INFO, 
  RESTAURANTS, 
  SHOPPING_LIST,
  TRANSPORT_INFO
} from './constants';

function App() {
  const [activeTab, setActiveTab] = useState<'itinerary' | 'info' | 'food' | 'shopping'>('itinerary');
  const [activeDay, setActiveDay] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-stone-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 py-6 px-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-100">
              <Baby className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black tracking-tight text-stone-900">首爾親子遊</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Family Itinerary Guide</p>
            </div>
          </div>
          <div className="bg-stone-50 px-3 py-1.5 rounded-full border border-stone-100 flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-teal-600" />
            <span className="text-xs font-bold text-stone-600">5 Days Tour</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto no-scrollbar border-b border-stone-200 sticky top-[81px] bg-white z-40 px-4">
          {[
            { id: 'itinerary', label: '行程規劃', icon: Calendar },
            { id: 'info', label: '行前資訊', icon: Info },
            { id: 'food', label: '美食地圖', icon: Utensils },
            { id: 'shopping', label: '必買藥妝', icon: ShoppingBag },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 whitespace-nowrap py-4 px-4 text-sm transition-all border-b-4 ${
                activeTab === tab.id 
                  ? 'border-teal-600 text-teal-600 font-bold' 
                  : 'border-transparent text-stone-400 hover:text-teal-500'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-4 md:p-6">
          {/* Tab Content: Itinerary */}
          {activeTab === 'itinerary' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-2">
                {[1, 2, 3, 4, 5].map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`flex-1 min-w-[70px] py-4 rounded-2xl flex flex-col items-center transition-all border ${
                      activeDay === day 
                        ? 'bg-teal-600 border-teal-600 text-white shadow-lg shadow-teal-100' 
                        : 'bg-white border-stone-100 text-stone-400'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-widest mb-1">Day</span>
                    <span className="text-xl font-black">{day}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-1 h-6 bg-teal-600 rounded-full" />
                   <h2 className="text-2xl font-black text-stone-900 leading-none">
                     {ITINERARY.find(d => d.day === activeDay)?.title}
                   </h2>
                </div>
                
                {ITINERARY.find(d => d.day === activeDay)?.activities.map((activity, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="bg-white rounded-2xl border border-stone-100 p-5 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-full -mr-12 -mt-12 opacity-50 group-hover:scale-110 transition-transform" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {activity.time}
                        </div>
                        {activity.location && (
                          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.location + ' Seoul')}`} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-teal-600 transition-colors">
                            <Navigation className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-stone-900 mb-2">{activity.name}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed mb-4">{activity.description}</p>
                      {activity.tips && activity.tips.length > 0 && (
                        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                          <div className="flex items-center gap-2 text-amber-800 mb-2 font-bold text-xs uppercase tracking-wider">
                            <Heart className="w-3.5 h-3.5" />
                            <span>Family Tip</span>
                          </div>
                          <ul className="space-y-1.5">
                            {activity.tips.map((tip, i) => (
                              <li key={i} className="text-amber-700 text-xs flex items-start gap-2">
                                <span className="mt-1 w-1 h-1 bg-amber-400 rounded-full shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab Content: Shopping (The Original UI Restoration) */}
          {activeTab === 'shopping' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SHOPPING_LIST.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants} 
                    className="bg-white rounded-xl shadow-sm overflow-hidden border border-stone-200 hover:shadow-md transition-all relative group flex flex-col"
                  >
                    {/* MUST BUY Badge - Restored */}
                    <div className="absolute top-3 left-3 z-10 bg-rose-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider shadow-sm">
                      MUST BUY
                    </div>

                    {item.imageUrl && (
                      <div className="h-48 overflow-hidden bg-stone-100">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                    )}
                    
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="flex items-start gap-3 mb-3">
                        {/* Pink Icon Circle - Restored */}
                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                          <Pill className="text-rose-500 w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-stone-900 text-base leading-tight mb-0.5 truncate">{item.name}</h3>
                          <div className="text-rose-600 text-xs font-medium flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-3">{item.description}</p>
                      
                      {item.usage && (
                        <div className="mt-auto pt-3 border-t border-stone-50 flex items-start gap-2">
                           <div className="text-rose-400 text-xs mt-0.5">💡</div>
                           <p className="text-stone-400 text-[11px] leading-tight italic">用法：{item.usage}</p>
                        </div>
                      )}
                      
                      {item.code && (
                        <div className="mt-4 p-3 bg-stone-50 border border-stone-100 rounded-xl flex items-center justify-between">
                          <div>
                            <p className="text-[9px] uppercase tracking-widest font-bold text-stone-400 mb-0.5">Stall / Promo Code</p>
                            <p className="text-stone-800 font-mono font-bold text-sm tracking-tight">{item.code}</p>
                          </div>
                          <button 
                            onClick={() => { navigator.clipboard.writeText(item.code || ''); alert('已複製！'); }}
                            className="text-[10px] bg-stone-800 text-white px-3 py-2 rounded-lg font-bold hover:bg-black transition-colors"
                          >
                            COPY
                          </button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tab Content: Food */}
          {activeTab === 'food' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RESTAURANTS.map((restaurant, index) => (
                <motion.div key={index} variants={itemVariants} className="bg-white rounded-2xl border border-stone-100 overflow-hidden flex flex-col group">
                  <div className="relative h-48 overflow-hidden bg-stone-100">
                    <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-teal-900/20">{restaurant.category}</div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-black text-stone-900 mb-2">{restaurant.name}</h3>
                    <p className="text-stone-500 text-sm mb-4 line-clamp-3 leading-relaxed">{restaurant.recommendation}</p>
                    <div className="mt-auto pt-4 border-t border-stone-50 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-stone-50 px-2 py-1 rounded-lg">
                        <span className="text-amber-500 text-xs font-bold leading-none">★</span>
                        <span className="font-bold text-stone-800 text-xs leading-none">{restaurant.rating}</span>
                      </div>
                      <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.name + ' Seoul')}`} target="_blank" rel="noopener noreferrer" className="text-teal-600 text-xs font-black flex items-center gap-1 hover:underline underline-offset-4">OPEN MAP <ExternalLink className="w-3 h-3" /></a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tab Content: Info */}
          {activeTab === 'info' && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {ESSENTIAL_INFO.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm flex gap-4 items-start">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-black text-stone-900 text-lg mb-1 leading-tight">{item.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-stone-900 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-teal-600/20 rounded-full -mb-16 -mr-16 blur-3xl opacity-50" />
                <h3 className="text-xl font-black mb-6 flex items-center gap-3 leading-none">
                  <Bus className="w-6 h-6 text-teal-400" />
                  交通與通訊指南
                </h3>
                <div className="space-y-6">
                  {TRANSPORT_INFO.map((info, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                        {info.type === 'net' ? <Navigation className="w-5 h-5 text-teal-400" /> : <Train className="w-5 h-5 text-teal-400" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{info.name}</h4>
                        <p className="text-stone-400 text-xs mt-1 leading-relaxed">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Mobile Footer - Hidden on Desktop */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-stone-100 p-2 md:hidden flex justify-around items-center z-50">
        {[
          { id: 'itinerary', label: '行程', icon: Calendar },
          { id: 'food', label: '美食', icon: Utensils },
          { id: 'shopping', label: '購物', icon: ShoppingBag },
          { id: 'info', label: '資訊', icon: Info },
        ].map(tab => (
          <button key={tab.id} onClick={() => setActiveTab(tab.id as any)} className={`flex flex-col items-center gap-1.5 transition-all px-4 py-2 rounded-2xl ${activeTab === tab.id ? 'text-teal-600 bg-teal-50 shadow-sm' : 'text-stone-400'}`}>
            <tab.icon className="w-5 h-5" />
            <span className="text-[10px] font-black tracking-tighter">{tab.label}</span>
          </button>
        ))}
      </footer>
    </div>
  );
}

export default App;
