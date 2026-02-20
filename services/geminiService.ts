import { GoogleGenAI } from "@google/genai";

const apiKey = (import.meta.env.VITE_GEMINI_API_KEY as string) || '';
let ai: GoogleGenAI | null = null;
try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (_) {
  // API key not configured
}

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey || !ai) {
    return "Error: API Key no configurada.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "Eres 'Ignacio AI', un asistente virtual amigable y paciente para una página web de enseñanza de español llamada 'Spanish with Ignacio'. Tu objetivo es ayudar a los usuarios a practicar español, explicar gramática brevemente, corregir frases o sugerir vocabulario. Mantén tus respuestas concisas, alentadoras y educativas. Responde siempre en español, a menos que el usuario pida explícitamente una explicación en inglés.",
        thinkingConfig: { thinkingBudget: 0 } // Low latency for chat
      }
    });

    return response.text || "Lo siento, no pude procesar tu solicitud en este momento.";
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Hubo un error al conectar con el asistente. Por favor intenta de nuevo.";
  }
};