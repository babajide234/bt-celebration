
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateBirthdayWish = async (name: string, context?: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, elegant, and heartfelt birthday wish for ${name}. ${context ? `Consider this context: ${context}` : ''} Keep it under 40 words and professional yet warm.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    return response.text || "Wishing you a fantastic year ahead filled with joy and success!";
  } catch (error) {
    console.error("Error generating wish:", error);
    return "Happy Birthday! May your day be as incredible as your journey.";
  }
};
