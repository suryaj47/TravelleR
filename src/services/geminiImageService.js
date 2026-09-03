import { GoogleGenAI, Modality } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_APP_GEMINI_API_KEY || "",
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchOrGenerateImage = async (cacheKey, promptText) => {
  const cachedImage = sessionStorage.getItem(cacheKey);
  if (cachedImage) {
    return cachedImage;
  }

  const randomSeed = encodeURIComponent(promptText.trim());
  const fallbackUrl = `https://picsum.photos/seed/${randomSeed}/1200/800`;

  try {
    await wait(600);

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: `Generate a photorealistic landscape or architectural travel photo of: ${promptText}`,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });

    let imageUrl = null;
    const candidate = response.candidates?.[0];
    if (candidate?.content?.parts) {
      for (const part of candidate.content.parts) {
        if (part.inlineData && part.inlineData.data) {
          imageUrl = `data:${part.inlineData.mimeType || "image/jpeg"};base64,${part.inlineData.data}`;
          break;
        }
      }
    }

    if (!imageUrl) throw new Error("image loading failed");

    sessionStorage.setItem(cacheKey, imageUrl);
    return imageUrl;
  } catch (error) {
    console.warn(`Using unique fallback image for: "${promptText}"`);
    sessionStorage.setItem(cacheKey, fallbackUrl);
    return fallbackUrl;
  }
};
