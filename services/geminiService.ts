import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AITaskType } from '../types';

// Initialize the client.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

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
  if (!process.env.API_KEY) {
    return "Error: API Key is missing. Please configure process.env.API_KEY.";
  }

  const config = PROMPTS[task];

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: config.model,
      contents: userInput,
      config: {
        systemInstruction: config.systemInstruction,
        temperature: config.temperature,
      },
    });

    return response.text || "No content generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to generate content. Please try again later.";
  }
};