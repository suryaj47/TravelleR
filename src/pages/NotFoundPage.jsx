import React from "react";
import { Link } from "react-router-dom";
import "./styles/NotFound.css";

const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <div className="not-found-orbit" aria-hidden="true">
        <span>404</span>
      </div>
      <section className="not-found-content" aria-labelledby="not-found-title">
        <img
          src="/logo/TravelleR_Logo_Text.png"
          alt="TravelleR"
          className="not-found-logo"
        />
        <p className="not-found-kicker">The trail ends here</p>
        <h1 id="not-found-title">This place is off the map.</h1>
        <p className="not-found-message">
          The page you are looking for may have moved, or the address may be
          incomplete. Let us guide you back to somewhere worth exploring.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-primary">
            Back to home
          </Link>
          <Link to="/destinations" className="not-found-secondary">
            Explore destinations
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
