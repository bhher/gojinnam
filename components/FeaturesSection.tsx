import React from 'react';
import { UtensilsCrossed, Clock, Box, ShieldCheck } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
    const features = [
        {
            id: "01",
            title: "튀겨야 진짜 고기다",
            subtitle: "Signature Recipe",
            desc: "일반적인 삼겹살 조리법으로는 느낄 수 없는 식감입니다. 고진남만의 진공 저온 튀김 기술은 겉은 완벽하게 바삭하고(Crispy), 속은 육즙으로 가득 찬(Juicy) 미식의 정점을 구현했습니다.",
            image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: <UtensilsCrossed className="w-6 h-6" />
        },
        {
            id: "02",
            title: "96시간의 기다림",
            subtitle: "Aging Process",
            desc: "시간이 맛을 만듭니다. 엄선된 프리미엄 원육을 0~5℃의 전용 숙성고에서 96시간 동안 저온 숙성하여, 부드러움의 차원이 다른 고기를 완성합니다.",
            image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: <Clock className="w-6 h-6" />
        },
        {
            id: "03",
            title: "배달의 한계를 넘다",
            subtitle: "Delivery Quality",
            desc: "배달 후에도 갓 튀긴 듯한 바삭함. 자체 개발한 특수 통기성 용기와 포장 매뉴얼은 고객의 식탁까지 최상의 퀄리티를 그대로 전달합니다.",
            image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: <Box className="w-6 h-6" />
        },
        {
            id: "04",
            title: "1개 매장, 4개 브랜드",
            subtitle: "Shop in Shop",
            desc: "고진남과 함께라면 매출 공백은 없습니다. 패밀리 브랜드 샵인샵 시스템을 무상으로 지원하여, 하나의 매장에서 4배의 수익 창출 기회를 제공합니다.",
            image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            icon: <ShieldCheck className="w-6 h-6" />
        }
    ];

    return (
        <div className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm block mb-4">Why Gojinnam</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-black">
                        성공할 수밖에 없는<br/>
                        <span className="italic relative z-10">
                            4가지 경쟁력
                            <span className="absolute bottom-0 left-0 w-full h-3 bg-[#d4af37]/30 -z-10"></span>
                        </span>
                    </h2>
                </div>

                <div className="flex flex-col gap-32">
                    {features.map((feature, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute top-4 left-4 w-full h-full border-2 border-[#d4af37] -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                                <div className="overflow-hidden">
                                    <img 
                                        src={feature.image} 
                                        alt={feature.title} 
                                        className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-black text-white w-24 h-24 flex items-center justify-center text-3xl font-bold">
                                    {feature.id}
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-gray-100 rounded-full text-black">
                                        {feature.icon}
                                    </div>
                                    <span className="text-[#d4af37] font-bold tracking-widest uppercase text-sm">
                                        {feature.subtitle}
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed font-sans-kr">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};