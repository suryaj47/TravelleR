# TravelleR

TravelleR is a React travel discovery website for browsing destinations, viewing destination details, checking current weather, generating itineraries, and asking a destination-aware AI concierge for travel suggestions.

## What The App Includes

- A video landing page with a link to the destination explorer.
- An Explore page at `/destinations` with destination search and continent filters.
- Destination detail pages at `/destination/:slug`.
- Generated hero and notable-place images for destination pages.
- Current temperature, feels-like temperature, and humidity from Open-Meteo.
- An AI itinerary planner with duration and travel-style inputs.
- An AI chat assistant that uses the current destination name as context.
- Fallback itinerary and chat responses when the Groq key is unavailable or a request fails.
- Session caching for generated destination images.
- Responsive navigation, destination cards, detail pages, planner, chatbot, and footer.

## AI Services Used

### Groq

The Groq SDK powers the text features in `src/services/aiChatService.js`:

- AI itinerary generation using the `openai/gpt-oss-120b` model.
- JSON-formatted itinerary responses containing days, themes, activities, and descriptions.
- Destination-aware concierge chat responses.
- Local fallback content when no Groq API key is configured or the request fails.

### Google Gemini

The `@google/genai` package powers destination image generation in `src/services/geminiImageService.js`:

- The `gemini-2.5-flash-image` model creates destination and notable-place images from image prompts.
- Generated images are stored in `sessionStorage` for the current browser session.
- Picsum seeded images are used as a fallback when Gemini image generation is unavailable.

### Open-Meteo

Open-Meteo provides current weather data for destination coordinates. It does not require an API key.

## Technology

- React 19
- Vite
- React Router
- Custom CSS
- Groq SDK
- Google GenAI SDK
- Open-Meteo API

## Routes

| Route                | Purpose                                                      |
| -------------------- | ------------------------------------------------------------ |
| `/`                  | Video landing page                                           |
| `/destinations`      | Searchable and filterable destination explorer               |
| `/explore`           | Alias for the destination explorer                           |
| `/destination/:slug` | Destination details, weather, places, planner, and concierge |

## Project Structure

```text
src/
   components/
      AiChatBox.jsx
      Footer.jsx
      Navbar.jsx
      TripPlanner.jsx
      explore/DestinationCard.jsx
      destination-detail/WeatherRibbon.jsx
   data/
      destinations.js
   hooks/
      useWeather.js
   pages/
      HomePage.jsx
      ExplorePage.jsx
      DestinationsPage.jsx
   services/
      aiChatService.js
      geminiImageService.js
```

## Run Locally

### Requirements

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
VITE_GROQ_API_KEY=your_groq_api_key
VITE_APP_GEMINI_API_KEY=your_gemini_api_key
```

Both keys are optional during local development. Without them, the app uses fallback text and fallback destination images where applicable.

### Start Development Server

```bash
npm run dev
```

### Build For Production

```bash
npm run build
```

### Preview The Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Current Limitations

- AI requests are made from the browser because the current Vite app does not include a server-side API layer.
- API keys exposed through `VITE_*` variables are included in the client bundle. A production application should proxy AI requests through a secure backend.
- Destination metadata is stored locally in `src/data/destinations.js`.
- Generated images are cached only for the current browser session.
