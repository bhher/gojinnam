import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AITaskType } from '../types';

// Initialize the client.
const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_API_KEY || '' });

const PROMPTS = {
  [AITaskType.PROFIT_ANALYSIS]: {
    model: 'gemini-2.5-flash',
    systemInstruction: "당신은 '고진남' 프랜차이즈의 수익 분석 전문가입니다. 사용자가 지역, 평수, 예상 일매출 등을 입력하면, 고진남의 높은 마진율(30% 이상)과 낮은 원가율을 바탕으로 예상 월 순수익을 계산해주고, 긍정적인 투자 가치를 설명해줘야 합니다. 논리적이고 구체적인 숫자를 제시하세요.",
    temperature: 0.4
  },
  [AITaskType.STARTUP_QNA]: {
    model: 'gemini-2.5-pro-preview-09-2025',
    systemInstruction: "당신은 '고진남' 프랜차이즈의 친절한 가맹 상담원입니다. 창업 절차, 비용, 교육, 인테리어(자체 시공 가능) 등 가맹 관련 질문에 대해 답변해줍니다. 특히 '50호점 한정 프로모션(가맹비 면제 등)'과 '강제성 없는 합리적인 창업 비용'을 강조하여 답변하세요.",
    temperature: 0.3
  }
};

export const generateMarketingContent = async (task: AITaskType, userInput: string): Promise<string> => {
  const apiKey = process.env.REACT_APP_API_KEY;
  
  if (!apiKey || apiKey === 'your_api_key_here') {
    console.error("API Key check:", { 
      hasKey: !!apiKey, 
      keyValue: apiKey ? `${apiKey.substring(0, 10)}...` : 'undefined' 
    });
    return "Error: API Key is missing. Please configure process.env.REACT_APP_API_KEY in .env file.";
  }

  const config = PROMPTS[task];

  try {
    // API 키가 변경되었을 수 있으므로 매번 새로 초기화
    const aiClient = new GoogleGenAI({ apiKey });
    
    const response: GenerateContentResponse = await aiClient.models.generateContent({
      model: config.model,
      contents: userInput,
      config: {
        systemInstruction: config.systemInstruction,
        temperature: config.temperature,
      },
    });

    return response.text || "No content generated.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    console.error("Error details:", {
      message: error?.message,
      status: error?.status,
      statusText: error?.statusText,
      response: error?.response
    });
    
    // 더 구체적인 에러 메시지 제공
    if (error?.message?.includes('API key')) {
      return "Error: Invalid API key. Please check your REACT_APP_API_KEY in .env file.";
    }
    if (error?.status === 401 || error?.status === 403) {
      return "Error: Authentication failed. Please verify your API key is correct.";
    }
    if (error?.status === 429) {
      return "Error: Rate limit exceeded. Please try again later.";
    }
    
    return `Failed to generate content: ${error?.message || 'Unknown error'}. Please check the browser console for details.`;
  }
};