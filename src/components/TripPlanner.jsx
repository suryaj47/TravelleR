import React, { useState } from "react";
import { generateTravelItinerary } from "../services/aiChatService";
import "./styles/TripPlanner.css";

const TripPlanner = ({ defaultDestination = "Kyoto" }) => {
  const [destination, setDestination] = useState(defaultDestination);
  const [days, setDays] = useState(3);
  const [style, setStyle] = useState("Cultural & Relaxed");
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setItinerary(null);
    const result = await generateTravelItinerary(destination, days, style);
    setItinerary(result);
    setLoading(false);
  };

  return (
    <div className="trip-planner-container">
      <div className="planner-header">
        <h2>AI Itinerary Planner</h2>
        <p>Design a custom day-by-day roadmap tailored to your travel style.</p>
      </div>

      <form onSubmit={handleGenerate} className="planner-form">
        <div className="form-group">
          <label>Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Duration (Days)</label>
          <input
            type="number"
            min="1"
            max="7"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Travel Style</label>
          <select value={style} onChange={(e) => setStyle(e.target.value)}>
            <option value="Cultural & Historical">Cultural & Historical</option>
            <option value="Food & Culinary Focus">Food & Culinary Focus</option>
            <option value="Adventure & Outdoors">Adventure & Outdoors</option>
            <option value="Relaxed & Scenic">Relaxed & Scenic</option>
          </select>
        </div>

        <button type="submit" className="generate-btn" disabled={loading}>
          {loading ? "Crafting Your Journey..." : "Generate Itinerary"}
        </button>
      </form>

      {itinerary && (
        <div className="itinerary-result-card">
          <div className="result-header">
            <h3>
              {itinerary.destination} ({itinerary.duration})
            </h3>
            <p>{itinerary.summary}</p>
          </div>

          <div className="days-timeline">
            {itinerary.days.map((dayPlan) => (
              <div key={dayPlan.day} className="day-block">
                <h4>
                  Day {dayPlan.day}: {dayPlan.theme}
                </h4>
                <div className="activities-list">
                  {dayPlan.activities.map((act, idx) => (
                    <div key={idx} className="activity-item">
                      <span className="activity-time">{act.time}</span>
                      <div className="activity-details">
                        <strong>{act.title}</strong>
                        <p>{act.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripPlanner;
