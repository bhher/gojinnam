import React from 'react';
import { MenuItem } from '../types';

const menuItems: MenuItem[] = [
  {
    name: "Premium Dosirak",
    description: "고기+4종반찬+공깃밥+계란후라이+김치찌개",
    price: 16900,
    cost: 5013,
    margin: 11887,
    image: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "SIGNATURE"
  },
  {
    name: "Fried Set A",
    description: "고기+볶음밥+소스+용기",
    price: 17900,
    cost: 4779,
    margin: 13121,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    badge: "BEST"
  },
  {
    name: "Noodle Set",
    description: "고기+냉면+소스+용기",
    price: 18900,
    cost: 4964,
    margin: 13936,
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const MenuProfitSection: React.FC = () => {
  return (
    <div className="bg-[#111] py-32 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm mb-2 block">Menu & Profit</span>
                <h2 className="text-4xl md:text-5xl font-bold">
                    High Margin,<br/>High Quality
                </h2>
            </div>
            <p className="text-gray-400 max-w-md text-right md:mt-0 mt-6 font-sans-kr">
                낮은 원가율, 높은 마진율. 고진남은 점주님의 순수익을 최우선으로 생각합니다. 
                프리미엄 메뉴 구성으로 객단가를 높였습니다.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
                <div key={index} className="group relative bg-[#1a1a1a] overflow-hidden hover:bg-[#222] transition-colors duration-500">
                    <div className="h-64 overflow-hidden relative">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
                        {item.badge && (
                            <div className="absolute top-4 right-4 bg-[#d4af37] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                                {item.badge}
                            </div>
                        )}
                    </div>
                    
                    <div className="p-8 relative">
                        <h3 className="text-2xl font-bold mb-1 text-white">{item.name}</h3>
                        <p className="text-gray-500 text-sm mb-6 font-sans-kr">{item.description}</p>
                        
                        <div className="space-y-4 border-t border-gray-800 pt-6">
                             <div className="flex justify-between text-sm">
                                <span className="text-gray-400">판매가</span>
                                <span className="font-bold text-white">{item.price.toLocaleString()}원</span>
                             </div>
                             <div className="flex justify-between text-sm">
                                <span className="text-gray-400">원가</span>
                                <span className="font-bold text-gray-300">{item.cost.toLocaleString()}원</span>
                             </div>
                             <div className="flex justify-between items-center pt-2">
                                <span className="text-[#d4af37] font-bold">순마진</span>
                                <span className="text-2xl font-black text-[#d4af37]">{item.margin.toLocaleString()}원</span>
                             </div>
                        </div>
                    </div>
                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border border-[#d4af37] opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};