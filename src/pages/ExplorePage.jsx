import React, { useState } from "react";
import { destinations } from "../data/destinations";
import DestinationCard from "../components/explore/DestinationCard";
import "./styles/Explore.css";

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("All");

  const continents = ["All", ...new Set(destinations.map((d) => d.continent))];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesContinent =
      selectedContinent === "All" || dest.continent === selectedContinent;
    return matchesSearch && matchesContinent;
  });

  return (
    <main id="destinations" className="explore-page">
      <header className="explore-header">
        <h1 className="explore-title">Our Destinations</h1>
        <p>Find your next great adventure.</p>

        <div className="explore-controls">
          <input
            type="text"
            placeholder="Search destinations or countries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="explore-search-input"
          />

          <div className="continent-tabs">
            {continents.map((continent) => (
              <button
                key={continent}
                onClick={() => setSelectedContinent(continent)}
                className={`tab-btn ${selectedContinent === continent ? "active" : ""}`}
              >
                {continent}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="explore-grid">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest) => (
            <DestinationCard key={dest.slug} destination={dest} />
          ))
        ) : (
          <p className="no-results">
            No destinations found matching your criteria.
          </p>
        )}
      </section>
    </main>
  );
};

export default ExplorePage;
