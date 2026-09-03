import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations";
import WeatherRibbon from "../components/destination-detail/WeatherRibbon";
import { fetchOrGenerateImage } from "../services/geminiImageService";
import "./styles/DestinationDetail.css";
import TripPlanner from "../components/TripPlanner";
import AiChatBox from "../components/AiChatBox";

const DestinationPage = () => {
  const { slug } = useParams();
  const destination = destinations.find((dest) => dest.slug === slug);

  const [heroImage, setHeroImage] = useState("");
  const [placeImages, setPlaceImages] = useState({});
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    if (!destination) return;

    let isMounted = true;

    const loadImages = async () => {
      setLoadingImages(true);

      const heroCacheKey = `img_hero_${destination.slug}`;
      const heroUrl = await fetchOrGenerateImage(
        heroCacheKey,
        destination.imageQuery,
      );

      if (isMounted) setHeroImage(heroUrl);

      const placeImagesMap = {};
      for (let i = 0; i < destination.famousPlaces.length; i++) {
        const place = destination.famousPlaces[i];
        const placeCacheKey = `img_place_${destination.slug}_${place.name.toLowerCase().replace(/\s+/g, "-")}_${i}`;
        const placeUrl = await fetchOrGenerateImage(
          placeCacheKey,
          place.imageQuery,
        );
        placeImagesMap[i] = placeUrl;
      }
      if (isMounted) {
        setPlaceImages(placeImagesMap);
        setLoadingImages(false);
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, [destination]);

  if (!destination) {
    return (
      <main className="destination-not-found">
        <h1>Destination Not Found</h1>
        <Link to="/destinations" className="back-link">
          Return to Explore
        </Link>
      </main>
    );
  }

  return (
    <main className="destination-page">
      <section
        className="destination-hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Link to="/destinations" className="back-to-explore-btn">
          Back to Explore
        </Link>

        <div className="hero-text-content">
          <h1>{destination.name}</h1>
          <h2>
            {destination.country}, {destination.continent}
          </h2>
        </div>
      </section>

      <WeatherRibbon coordinates={destination.coordinates} />

      <section className="destination-editorial">
        <div className="travel-meta">
          <strong>Best time to visit:</strong> {destination.bestTimeToVisit}
        </div>
        <p className="destination-blurb">{destination.blurb}</p>
      </section>

      <section className="famous-places">
        <h3>Notable Locations</h3>
        <div className="places-grid">
          {destination.famousPlaces.map((place, index) => (
            <div key={index} className="place-card">
              <div className="place-image-wrapper">
                {placeImages[index] ? (
                  <img
                    src={placeImages[index]}
                    alt={place.name}
                    className="place-img"
                  />
                ) : (
                  <div className="place-image-placeholder">
                    Loading image...
                  </div>
                )}
              </div>
              <h4>{place.name}</h4>
              <span className="place-category">{place.category}</span>
              <p>{place.hook}</p>
            </div>
          ))}
        </div>
      </section>

      <TripPlanner />

      <AiChatBox destinationName={destination.name} />
    </main>
  );
};

export default DestinationPage;
