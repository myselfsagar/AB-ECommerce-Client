import React from "react";
import { useNavigate } from "react-router";
import "./Hero.scss";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="Hero">
      <div className="hero-content center">
        <h2 className="heading">Exclusive Print and Art Network</h2>
        <p className="subheading">
          Exclusive Art Pieces, for the Exclusive You.
        </p>
        <button
          onClick={() => navigate("/category/tv-shows")}
          className="btn-primary hero-btn"
        >
          Explore more
        </button>
      </div>
    </div>
  );
}

export default Hero;
