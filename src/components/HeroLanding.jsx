import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/HeroLanding.css";

const HeroLanding = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore");
    setTimeout(() => {
      const section = document.getElementById("destinations");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleScrollClick = () => {
    const section = document.getElementById("destinations");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/explore ");
      setTimeout(() => {
        const destinationSection = document.getElementById("destinations");
        if (destinationSection) {
          destinationSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  return (
    <section className="hero-section">
      <div className="video-wrapper">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero/poster.png"
        >
          <source src="/hero/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-headline">Find your next great adventure.</h1>
        <button className="hero-cta" onClick={handleExploreClick}>
          Explore destinations
        </button>
      </div>

      <button
        className="scroll-indicator"
        aria-label="Scroll to destinations"
        onClick={handleScrollClick}
        type="button"
      >
        <span className="scroll-arrow"></span>
      </button>
    </section>
  );
};

export default HeroLanding;
