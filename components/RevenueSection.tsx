import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RevenueData } from '../types';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const data: RevenueData[] = [
  { name: '변경 전', before: 1700, after: 0 },
  { name: '1개월차', before: 0, after: 3200 },
  { name: '3개월차', before: 0, after: 4500 },
];

export const RevenueSection: React.FC = () => {
  return (
    <div className="bg-[#f8f9fa] py-32 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100/50 -skew-x-12 transform translate-x-1/4"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:w-5/12">
            <div className="flex items-center gap-2 mb-4 text-[#d4af37] font-bold tracking-widest text-sm uppercase">
                <TrendingUp size={16} />
                <span>Revenue Growth</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-[1.2]">
              압도적인 매출 상승,<br/>
              숫자가 증명합니다.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed font-sans-kr">
              업종 변경만으로 달성한 놀라운 결과입니다. 고진남의 독보적인 맛과 시스템은 
              불황에도 흔들리지 않는 탄탄한 매출 구조를 만듭니다.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                    <div className="text-5xl font-black text-black mb-2">440<span className="text-2xl text-[#d4af37]">%</span></div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Max Growth</div>
                </div>
                <div>
                    <div className="text-5xl font-black text-black mb-2">4.5<span className="text-2xl text-[#d4af37]">천</span></div>
                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">Monthly Revenue</div>
                </div>
            </div>

            <button className="flex items-center gap-2 text-black border-b-2 border-black pb-1 font-bold hover:text-[#d4af37] hover:border-[#d4af37] transition-all">
                자세한 수익구조 확인하기 <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Chart Card */}
          <div className="lg:w-7/12 w-full">
             <div className="bg-white p-8 rounded-none shadow-2xl border-l-4 border-[#d4af37] relative">
                 <div className="flex justify-between items-end mb-8">
                    <div>
                        <h3 className="font-bold text-2xl text-gray-800">월 매출 성장 추이</h3>
                        <p className="text-sm text-gray-400 mt-1">단위: 만원 / A지점 기준</p>
                    </div>
                    <div className="bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold text-sm">
                        🔥 Hot Place
                    </div>
                 </div>
                 
                 <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorAfter" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#d4af37" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#d4af37" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#999', fontSize: 12}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#999', fontSize: 12}} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '4px', color: '#fff' }}
                                itemStyle={{ color: '#d4af37' }}
                            />
                            <Area 
                                type="monotone" 
                                dataKey="after" 
                                stroke="#d4af37" 
                                strokeWidth={3} 
                                fillOpacity={1} 
                                fill="url(#colorAfter)" 
                            />
                             <Area 
                                type="monotone" 
                                dataKey="before" 
                                stroke="#ccc" 
                                strokeWidth={2} 
                                strokeDasharray="5 5"
                                fill="transparent" 
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                 </div>
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-[#1a1a1a] text-white p-6 shadow-xl hidden md:block max-w-xs">
                <p className="font-bold italic text-lg text-[#d4af37] mb-2">"Amazing Change"</p>
                <p className="text-sm text-gray-400">떡볶이 매장에서 고진남으로 변경 후 매출이 폭발적으로 상승했습니다.</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};