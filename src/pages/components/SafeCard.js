import React from "react";
import "./SafeCard.css";

export default function SafeCard({ header, description, image }) {
  return (
    <div className="safecard-main-container">
      <div>
        <img src={image} className="safecard-image-container" />
      </div>
      <div>
        <h4 className="safe-card-header-text">{header}</h4>
        <p className="safe-card-description-text">{description} </p>
      </div>
    </div>
  );
}
