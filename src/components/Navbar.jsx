import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isDestinationPage =
    location.pathname === "/destinations" ||
    location.pathname === "/explore" ||
    location.pathname.startsWith("/destination/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const brandLogoSrc = isHomePage
    ? "/logo/TravelleR_Logo_Text.png"
    : "/logo/TravelleR_Mark_Transparent.png";

  if (
    isDestinationPage &&
    !scrolled &&
    location.pathname.startsWith("/destination/")
  ) {
    return null;
  }

  return (
    <nav className={`app-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          {isHomePage ? (
            <img
              src={brandLogoSrc}
              alt="TravelleR"
              className="nav-brand-logo"
            />
          ) : (
            <>
              <img
                src={brandLogoSrc}
                alt="TravelleR mark"
                className="nav-brand-mark"
              />
              <span className="nav-brand-wordmark">TravelleR</span>
            </>
          )}
        </Link>
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/destinations"
            className={`nav-link ${location.pathname === "/destinations" || location.pathname === "/explore" ? "active" : ""}`}
          >
            Explore
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
