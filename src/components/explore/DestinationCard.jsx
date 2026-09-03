import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchOrGenerateImage } from "../../services/geminiImageService";

const DestinationCard = ({ destination }) => {
  const [cardImage, setCardImage] = useState("");

  useEffect(() => {
    let isMounted = true;
    const loadImage = async () => {
      const cacheKey = `img_card_${destination.slug}`;
      const url = await fetchOrGenerateImage(cacheKey, destination.imageQuery);
      if (isMounted) setCardImage(url);
    };

    loadImage();
    return () => {
      isMounted = false;
    };
  }, [destination]);

  return (
    <Link to={`/destination/${destination.slug}`} className="destination-card">
      <div className="card-image-wrapper">
        {cardImage ? (
          <img src={cardImage} alt={destination.name} className="card-img" />
        ) : (
          <div className="card-image-placeholder">Loading...</div>
        )}
      </div>
      <div className="card-content">
        <h3 className="card-title">
          {destination.name}, {destination.country}
        </h3>
        <p className="card-blurb">{destination.blurb.substring(0, 80)}...</p>
        <div className="card-tags">
          {destination.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
