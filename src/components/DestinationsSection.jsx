import React from "react";
import { destinations } from "../data/destinations";
import "./styles/DestinationsSection.css";

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations-section">
      <div className="destinations-header">
        <p className="section-kicker">Curated escapes</p>
        <h2>Explore destinations</h2>
      </div>

      <div className="destinations-grid">
        {destinations.map((destination) => (
          <article className="destination-card" key={destination.slug}>
            <div className="destination-image-wrap">
              <img
                src={`https://images.unsplash.com/${destination.imageQuery
                  .split(" ")
                  .join("+")}?auto=format&fit=crop&w=900&q=80`}
                alt={destination.name}
                className="destination-image"
              />
            </div>
            <div className="destination-content">
              <div className="destination-meta">
                <span>{destination.country}</span>
                <span>{destination.continent}</span>
              </div>
              <h3>{destination.name}</h3>
              <p>{destination.blurb}</p>
              <button type="button" className="destination-button">
                View details
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;
