import React from 'react';
import { Package, Clock, ThumbsUp } from 'lucide-react';

export const DeliverySection: React.FC = () => {
  return (
    <div className="bg-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute right-0 top-0 w-96 h-96 bg-[#d4af37] rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-0 bottom-0 w-96 h-96 bg-black rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
                <div className="relative">
                    <img 
                        src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Gojinnam Delivery Packaging" 
                        className="w-full h-[500px] object-cover rounded-2xl shadow-2xl z-10 relative"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-[200px]">
                        <div className="flex items-center gap-2 mb-2 text-[#d4af37] font-bold">
                             <Clock size={20} />
                             <span>Speed System</span>
                        </div>
                        <p className="text-gray-600 text-sm font-sans-kr font-bold">
                            조리부터 포장까지<br/>단 5분이면 충분합니다.
                        </p>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-10 -left-10 w-20 h-20 border-4 border-[#d4af37] rounded-full opacity-30"></div>
                    <div className="absolute -bottom-10 right-10 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
                </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
                <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Delivery System</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    배달의 격을 높이다<br/>
                    <span className="text-gray-400">Perfect Delivery</span>
                </h2>
                <p className="text-gray-600 text-lg mb-10 font-sans-kr leading-relaxed">
                    배달 음식은 식으면 맛이 없다는 편견, 고진남이 깹니다.<br/>
                    독자적인 포장 기술과 시스템으로 고객의 식탁까지<br/> 
                    매장에서 먹는 맛 그대로를 전달합니다.
                </p>

                <div className="space-y-8">
                    <div className="flex gap-6">
                        <div className="w-14 h-14 bg-[#1a1a1a] text-white flex items-center justify-center rounded-lg flex-shrink-0">
                            <Package size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">특수 제작 통기성 용기</h4>
                            <p className="text-gray-500 font-sans-kr">
                                튀김의 적은 수분입니다. 자체 개발한 통기성 용기는 내부 습기를 배출하여 
                                배달 시간 동안에도 눅눅해지지 않고 바삭함을 유지합니다.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6">
                        <div className="w-14 h-14 bg-[#1a1a1a] text-white flex items-center justify-center rounded-lg flex-shrink-0">
                            <ThumbsUp size={28} />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-2">식어도 맛있는 크러스트</h4>
                            <p className="text-gray-500 font-sans-kr">
                                일반 튀김옷이 아닙니다. 진공 저온 방식으로 조리된 표면은 
                                식었을 때 오히려 더 쫀득하고 바삭한 식감을 선사합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};