import { Groq } from "groq-sdk";

const groqApiKey = import.meta.env.VITE_GROQ_API_KEY;
const groq = new Groq({
  apiKey: groqApiKey || "placeholder_key",
  dangerouslyAllowBrowser: true,
});

const generateFallbackItinerary = (
  destinationName,
  durationDays,
  travelerStyle,
) => {
  const daysArray = [];
  const themes = [
    "Arrival & Iconic Landmarks",
    "Cultural Heritage & Hidden Alleys",
    "Local Gastronomy & Markets",
    "Scenic Views & Panoramic Lookouts",
    "Artisan Workshops & Neighborhood Strolls",
    "Nature, Parks & Relaxation",
    "Departure & Last-Minute Souvenirs",
  ];

  for (let i = 1; i <= Number(durationDays); i++) {
    daysArray.push({
      day: i,
      theme: themes[(i - 1) % themes.length],
      activities: [
        {
          time: "Morning",
          title: `Explore ${destinationName}'s historic core`,
          description: `Begin your day with a guided walk through the most iconic architectural spots tailored for a ${travelerStyle} experience.`,
        },
        {
          time: "Afternoon",
          title: `Culinary immersion & local lunch`,
          description: `Sample authentic regional specialties at a highly recommended local spot in the heart of the city.`,
        },
        {
          time: "Evening",
          title: `Sunset views and evening atmosphere`,
          description: `Wind down with a scenic evening stroll as the city lights illuminate the iconic landmarks.`,
        },
      ],
    });
  }

  return {
    destination: destinationName,
    duration: `${durationDays} Days`,
    summary: `A carefully curated ${durationDays}-day journey through ${destinationName}, designed specifically for a ${travelerStyle.toLowerCase()} traveler blending culture, iconic sights, and local flavor.`,
    days: daysArray,
  };
};

export const generateTravelItinerary = async (
  destinationName,
  durationDays,
  travelerStyle,
) => {
  if (!groqApiKey || groqApiKey === "placeholder_key") {
    return generateFallbackItinerary(
      destinationName,
      durationDays,
      travelerStyle,
    );
  }

  try {
    const prompt = `Create a detailed ${durationDays}-day travel itinerary for ${destinationName} tailored for a ${travelerStyle} traveler. Return ONLY valid JSON matching this exact structure: {"destination": "", "duration": "", "summary": "", "days": [{"day": 1, "theme": "", "activities": [{"time": "", "title": "", "description": ""}]}]}`;

    const response = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "openai/gpt-oss-120b",
      response_format: { type: "json_object" },
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.warn(
      "Cloud generation failed, switching to fallback template:",
      error,
    );
    return generateFallbackItinerary(
      destinationName,
      durationDays,
      travelerStyle,
    );
  }
};

export const sendChatMessage = async (
  destinationName,
  userMessage,
  chatHistory = [],
) => {
  if (!groqApiKey || groqApiKey === "placeholder_key") {
    return `As an AI assistant for ${destinationName}, I recommend exploring the historic downtown, trying local specialties, and planning for at least 3 to 4 days to see the major highlights! (Connect your Groq API key for live answers).`;
  }

  try {
    const messages = [
      {
        role: "system",
        content: `You are an expert, elegant travel concierge assistant for a high-end portal. You are currently helping a user who is asking about ${destinationName}. Keep answers concise, inspiring, and focused on travel advice.`,
      },
      ...chatHistory,
      { role: "user", content: userMessage },
    ];

    const response = await groq.chat.completions.create({
      messages: messages,
      model: "openai/gpt-oss-120b",
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Chat error:", error);
    return `I apologize, but I am having trouble connecting right now. For ${destinationName}, I suggest planning 3-5 days and visiting during the shoulder seasons for the best experience.`;
  }
};
