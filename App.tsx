import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { RevenueSection } from './components/RevenueSection';
import { MenuProfitSection } from './components/MenuProfitSection';
import { FeaturesSection } from './components/FeaturesSection';
import { GeminiAssistant } from './components/GeminiAssistant';
import { DeliverySection } from './components/DeliverySection';
import { Footer } from './components/Footer';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-sans-kr">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
                <div className="w-10 h-10 bg-[#d4af37] rounded-none flex items-center justify-center font-black text-2xl text-black">
                    G
                </div>
                <div className="text-white font-bold text-2xl tracking-wide">
                    GOJINNAM
                </div>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-10 text-sm font-medium text-white/90">
                <li onClick={() => scrollToSection('features')} className="hover:text-[#d4af37] cursor-pointer transition-colors tracking-widest uppercase text-xs">Competitiveness</li>
                <li onClick={() => scrollToSection('revenue')} className="hover:text-[#d4af37] cursor-pointer transition-colors tracking-widest uppercase text-xs">Success</li>
                <li onClick={() => scrollToSection('menu')} className="hover:text-[#d4af37] cursor-pointer transition-colors tracking-widest uppercase text-xs">Menu</li>
                <li onClick={() => scrollToSection('delivery')} className="hover:text-[#d4af37] cursor-pointer transition-colors tracking-widest uppercase text-xs">System</li>
                <li onClick={() => scrollToSection('investment')} className="hover:text-[#d4af37] cursor-pointer transition-colors tracking-widest uppercase text-xs">Investment</li>
                <li onClick={() => scrollToSection('footer')} className="border border-[#d4af37] px-6 py-2 hover:bg-[#d4af37] hover:text-black transition-all cursor-pointer uppercase text-xs font-bold">
                    Inquiry
                </li>
                <li onClick={() => setShowAdmin(true)} className="border border-white/30 px-6 py-2 hover:bg-white/10 transition-all cursor-pointer uppercase text-xs font-bold">
                    어드민
                </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-black text-white p-6 md:hidden shadow-xl border-t border-gray-800">
                 <ul className="flex flex-col gap-4 text-center">
                    <li onClick={() => scrollToSection('features')} className="py-2 border-b border-gray-800 cursor-pointer hover:text-[#d4af37]">Competitiveness</li>
                    <li onClick={() => scrollToSection('revenue')} className="py-2 border-b border-gray-800 cursor-pointer hover:text-[#d4af37]">Success</li>
                    <li onClick={() => scrollToSection('menu')} className="py-2 border-b border-gray-800 cursor-pointer hover:text-[#d4af37]">Menu</li>
                    <li onClick={() => scrollToSection('delivery')} className="py-2 border-b border-gray-800 cursor-pointer hover:text-[#d4af37]">System</li>
                     <li onClick={() => scrollToSection('investment')} className="py-2 border-b border-gray-800 cursor-pointer hover:text-[#d4af37]">Investment</li>
                    <li onClick={() => scrollToSection('footer')} className="py-2 border-b border-gray-800 cursor-pointer hover:text-[#d4af37]">Inquiry</li>
                    <li onClick={() => { setShowAdmin(true); setMobileMenuOpen(false); }} className="py-2 cursor-pointer hover:text-[#d4af37] font-bold">어드민</li>
                </ul>
            </div>
        )}
      </nav>

      {showAdmin ? (
        isAdminLoggedIn ? (
          <AdminDashboard 
            onBack={() => {
              setShowAdmin(false);
              setIsAdminLoggedIn(false);
            }} 
          />
        ) : (
          <AdminLogin 
            onLogin={() => setIsAdminLoggedIn(true)}
            onBack={() => setShowAdmin(false)}
          />
        )
      ) : (
        <>
          <main>
            <div id="hero"><HeroSection /></div>
            <div id="revenue"><RevenueSection /></div>
            <div id="features"><FeaturesSection /></div>
            <div id="menu"><MenuProfitSection /></div>
            <div id="delivery"><DeliverySection /></div>
            <div id="investment"><GeminiAssistant /></div>
          </main>

          <div id="footer"><Footer /></div>
        </>
      )}
    </div>
  );
}

export default App;