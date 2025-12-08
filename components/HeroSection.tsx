import React from 'react';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[800px] bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Premium Fried Pork" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 animate-[fadeInDown_1s_ease-out]">
            <span className="border border-[#d4af37] text-[#d4af37] px-6 py-2 text-xs md:text-sm tracking-[0.3em] uppercase font-bold backdrop-blur-sm">
                Premium Fried Pork Belly
            </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 leading-tight animate-[fadeInUp_1s_ease-out_0.3s_both]">
          <span className="text-white block">Crispy</span>
          <span className="text-[#d4af37] block italic">Golden</span>
          <span className="text-white block">Juicy</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12 font-sans-kr animate-[fadeInUp_1s_ease-out_0.6s_both]">
            대한민국 최초, 튀긴 삼겹살의 시작.<br/>
            고진남은 고기에 대한 진심을 담아 새로운 미식 경험을 선사합니다.
        </p>

        <button className="group relative px-10 py-4 bg-transparent overflow-hidden rounded-none animate-[fadeInUp_1s_ease-out_0.9s_both]">
            <span className="absolute inset-0 w-full h-full bg-[#d4af37] group-hover:bg-white transition-all duration-300 ease-out"></span>
            <span className="relative text-black font-bold tracking-widest uppercase group-hover:text-black">
                Start Business
            </span>
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown />
      </div>
    </div>
  );
};