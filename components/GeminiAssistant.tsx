import React, { useState } from 'react';
import { generateMarketingContent } from '../services/geminiService';
import { AITaskType } from '../types';
import { Calculator, MessageCircle, Loader2, Send, Bot, CheckCircle2, AlertCircle } from 'lucide-react';

export const GeminiAssistant: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AITaskType>(AITaskType.PROFIT_ANALYSIS);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>('');
  const [userInput, setUserInput] = useState('');

  const handleGenerate = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setResult('');
    
    // Using the simplified task types for the new purpose
    const content = await generateMarketingContent(activeTab, userInput);
    setResult(content);
    setLoading(false);
  };

  return (
    <div className="bg-[#f8f9fa] py-24 border-t border-gray-200">
      <div className="container mx-auto px-6">
        
        {/* Investment Header */}
        <div className="text-center mb-16">
            <span className="text-[#d4af37] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Investment Guide</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                투명한 창업 비용<br/>
                <span className="text-gray-400">Reasonable Investment</span>
            </h2>
            <p className="text-gray-600 font-sans-kr max-w-2xl mx-auto">
                거품을 뺀 합리적인 비용으로 사장님의 성공적인 첫걸음을 지원합니다.<br/>
                인테리어, 주방기기 자체 시공/구입이 가능한 상생 프랜차이즈입니다.
            </p>
        </div>

        {/* Cost Tables */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Basic Fees */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-black"></span>
                    가맹 비용 안내
                </h3>
                <div className="space-y-4 font-sans-kr">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-bold">가맹비</span>
                        <div className="text-right">
                            <span className="text-gray-400 line-through text-sm mr-2">500만원</span>
                            <span className="text-red-500 font-bold">전액 면제</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-bold">교육비</span>
                        <div className="text-right">
                            <span className="text-gray-400 line-through text-sm mr-2">300만원</span>
                            <span className="text-black font-bold">100만원</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-bold">보증금</span>
                        <div className="text-right">
                            <span className="text-red-500 font-bold">면제</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-bold">로열티</span>
                        <div className="text-right">
                            <span className="text-gray-400 line-through text-sm mr-2">월 2%</span>
                            <span className="text-red-500 font-bold">면제</span>
                        </div>
                    </div>
                </div>
                <div className="mt-6 bg-[#fff8e6] text-[#b48f1f] p-4 rounded-lg text-sm font-bold text-center">
                    ✨ 오픈 50호점 한정 특별 프로모션 혜택 적용
                </div>
            </div>

            {/* Facility Costs */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-2 h-8 bg-[#d4af37]"></span>
                    시설 개설 비용
                </h3>
                <div className="space-y-4 font-sans-kr">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-bold">인테리어</span>
                        <div className="text-right">
                            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded mb-1 inline-block mr-2">평당 150만원</span>
                            <span className="text-blue-600 font-bold block md:inline">자체 시공 가능</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-bold">주방기기</span>
                        <div className="text-right">
                            <span className="text-blue-600 font-bold">자체 구입 가능</span>
                            <p className="text-xs text-gray-400 mt-1">기존 보유 기기 재사용 가능</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-bold">간판/사인</span>
                        <div className="text-right">
                            <span className="text-black font-bold">실비 별도</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-gray-600 font-bold">초도비용</span>
                        <div className="text-right">
                            <span className="text-black font-bold">100~200만원</span>
                        </div>
                    </div>
                </div>
                 <div className="mt-6 flex items-start gap-2 text-gray-500 text-xs">
                    <AlertCircle size={14} className="mt-1 flex-shrink-0" />
                    <span>철거, 냉난방기, 전기승압, 가스공사 등은 현장 상황에 따라 별도 비용이 발생할 수 있습니다.</span>
                </div>
            </div>
        </div>

        {/* AI Consultant Widget */}
        <div className="max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6 border-b border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                         <div className="bg-[#d4af37] p-3 rounded-full text-black">
                            <Bot size={24} />
                         </div>
                         <div>
                             <h4 className="text-white font-bold text-lg">AI Franchise Consultant</h4>
                             <p className="text-gray-400 text-sm">예상 수익과 창업 절차를 실시간으로 확인하세요.</p>
                         </div>
                    </div>
                    
                    <div className="flex bg-black/50 rounded-lg p-1">
                        <button
                            onClick={() => { setActiveTab(AITaskType.PROFIT_ANALYSIS); setResult(''); setUserInput(''); }}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                                activeTab === AITaskType.PROFIT_ANALYSIS 
                                ? 'bg-[#d4af37] text-black' 
                                : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <span className="flex items-center gap-2"><Calculator size={14}/> 수익 계산</span>
                        </button>
                        <button
                            onClick={() => { setActiveTab(AITaskType.STARTUP_QNA); setResult(''); setUserInput(''); }}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                                activeTab === AITaskType.STARTUP_QNA 
                                ? 'bg-[#d4af37] text-black' 
                                : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            <span className="flex items-center gap-2"><MessageCircle size={14}/> 창업 문의</span>
                        </button>
                    </div>
                </div>

                <div className="p-0">
                    <div className="h-[300px] bg-black overflow-y-auto p-6 font-mono text-sm border-b border-gray-800">
                        {loading ? (
                             <div className="flex items-center justify-center h-full text-[#d4af37] gap-3">
                                <Loader2 className="animate-spin" />
                                <span>AI가 분석 중입니다...</span>
                            </div>
                        ) : result ? (
                            <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg text-gray-200 leading-relaxed whitespace-pre-wrap animate-fadeIn">
                                {result}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-600 gap-4">
                                <Bot size={40} className="opacity-20" />
                                <p className="text-center max-w-sm">
                                    {activeTab === AITaskType.PROFIT_ANALYSIS 
                                        ? "지역, 예상 일매출, 매장 평수를 입력하시면 예상 월 순수익을 분석해 드립니다."
                                        : "창업 절차, 교육 일정, 인테리어 등 궁금한 점을 자유롭게 물어보세요."}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="p-4 bg-[#222]">
                        <div className="relative">
                            <input 
                                type="text" 
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder={activeTab === AITaskType.PROFIT_ANALYSIS ? "예: 강남역 인근 15평 매장, 일매출 150만원 예상" : "예: 가맹 계약 후 오픈까지 얼마나 걸리나요?"}
                                className="w-full bg-black border border-gray-700 rounded-lg pl-4 pr-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                                onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                            />
                            <button 
                                onClick={handleGenerate}
                                disabled={loading || !userInput}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-[#d4af37] rounded-md text-black hover:bg-white transition-colors disabled:opacity-50"
                            >
                                {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500 font-sans-kr">
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#d4af37]" /> Gemini Pro 기반 실시간 분석</div>
                <div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#d4af37]" /> 빅데이터 상권 분석 반영</div>
            </div>
        </div>

      </div>
    </div>
  );
};