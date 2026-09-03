import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-brand-block">
          <img
            src="/logo/TravelleR_Logo_Text.png"
            alt="TravelleR"
            className="footer-brand-logo"
          />
          <p className="footer-text">
            Explore destinations, check live conditions, discover notable
            places, and shape a trip that fits the way you want to travel.
          </p>
          <span className="footer-location">
            Discover places / Plan your journey
          </span>
        </div>

        <div className="footer-column">
          <h3>Navigate</h3>
          <Link to="/">Home</Link>
          <Link to="/destinations">Explore destinations</Link>
          <span>Destination details</span>
        </div>

        <div className="footer-column">
          <h3>On every journey</h3>
          <span>Live weather conditions</span>
          <span>Notable places to discover</span>
          <span>AI itinerary planner</span>
        </div>

        <div className="footer-column footer-concierge">
          <h3>Your concierge</h3>
          <p>
            Open the assistant on any destination page for destination-aware
            travel suggestions.
          </p>
          <Link to="/destinations" className="footer-action">
            Start exploring <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>

        <div className="footer-meta">
          <span>&copy; {new Date().getFullYear()} TravelleR Inc.</span>
          <span>Made for curious travelers.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
