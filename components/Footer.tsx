import React, { useState } from 'react';
import { ArrowRight, Phone, Instagram, Facebook, Youtube, Loader2, CheckCircle2 } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase';

export const Footer: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    // 입력값 검증
    if (!name.trim() || !contact.trim()) {
      alert('성함과 연락처를 모두 입력해주세요.');
      return;
    }

    setLoading(true);
    setSuccess(false);

    try {
      // Firestore에 데이터 저장
      await addDoc(collection(db, 'contacts'), {
        name: name.trim(),
        contact: contact.trim(),
        timestamp: new Date(),
        createdAt: new Date().toISOString()
      });

      // 성공 처리
      setSuccess(true);
      setName('');
      setContact('');
      
      // 3초 후 성공 메시지 숨기기
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('연락처 저장 중 오류 발생:', error);
      alert('저장 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <footer className="bg-[#111] text-white pt-24 pb-32">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-gray-800 pb-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6">GOJINNAM</h2>
                    <p className="text-gray-400 font-light font-sans-kr max-w-sm">
                        고기에 대한 진심, 맛에 대한 고집.<br/>
                        대한민국 대표 프리미엄 튀긴 삼겹살 브랜드 고진남입니다.
                    </p>
                </div>
                
                <div className="flex gap-16">
                    <div>
                        <h4 className="font-bold mb-6 text-[#d4af37] text-sm uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-sans-kr">
                            <li className="hover:text-white cursor-pointer transition-colors">브랜드 스토리</li>
                            <li className="hover:text-white cursor-pointer transition-colors">CEO 인사말</li>
                            <li className="hover:text-white cursor-pointer transition-colors">오시는 길</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-[#d4af37] text-sm uppercase tracking-widest">Franchise</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-sans-kr">
                            <li className="hover:text-white cursor-pointer transition-colors">가맹 안내</li>
                            <li className="hover:text-white cursor-pointer transition-colors">창업 비용</li>
                            <li className="hover:text-white cursor-pointer transition-colors">상담 신청</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-sans-kr gap-4">
                <div className="flex flex-col md:flex-row gap-2 md:gap-6">
                    <span>(주)고진남푸드</span>
                    <span>사업자번호: 144-19-00831</span>
                    <span>대표: 홍길동</span>
                    <span>주소: 서울특별시 강남구 테헤란로 123</span>
                </div>
                <div className="flex gap-4">
                    <Instagram size={18} className="hover:text-white cursor-pointer transition-colors" />
                    <Facebook size={18} className="hover:text-white cursor-pointer transition-colors" />
                    <Youtube size={18} className="hover:text-white cursor-pointer transition-colors" />
                </div>
            </div>
        </div>
      </footer>

      {/* Modern Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <div className="bg-black/90 backdrop-blur-lg border-t border-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center text-black flex-shrink-0">
                            <Phone size={20} />
                        </div>
                        <div className="hidden md:block">
                            <p className="text-[#d4af37] text-xs font-bold uppercase">Franchise Inquiry</p>
                            <p className="text-white text-xl font-bold">1833-8312</p>
                        </div>
                    </div>

                    <div className="flex-1 max-w-2xl w-full lg:mx-8 flex flex-col sm:flex-row items-center gap-2">
                        <input 
                            type="text" 
                            placeholder="성함" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                            className="bg-white/10 border-none rounded px-4 py-3 text-white placeholder-gray-500 text-sm w-full focus:ring-1 focus:ring-[#d4af37] focus:outline-none" 
                        />
                        <input 
                            type="text" 
                            placeholder="연락처" 
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                            className="bg-white/10 border-none rounded px-4 py-3 text-white placeholder-gray-500 text-sm w-full focus:ring-1 focus:ring-[#d4af37] focus:outline-none" 
                        />
                    </div>

                    <button 
                        onClick={handleSubmit}
                        disabled={loading}
                        className="bg-[#d4af37] hover:bg-white hover:text-black text-black px-8 py-3 font-bold uppercase text-sm tracking-wider flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative w-full sm:w-auto justify-center"
                    >
                        {success ? (
                            <>
                                <CheckCircle2 size={16} />
                                <span>완료</span>
                            </>
                        ) : loading ? (
                            <>
                                <Loader2 size={16} className="animate-spin" />
                                <span>저장 중...</span>
                            </>
                        ) : (
                            <>
                                Start Now <ArrowRight size={16} />
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};