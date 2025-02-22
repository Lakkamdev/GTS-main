import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <img
        src="https://gollamuditechnologyandsoftware.vercel.app/static/media/logo.b577779c31c6d4b7ee27.jpeg"  /* Replace with actual navbar image URL */
        alt="GTs"
        className="loader-logo"
      />
      <h2 className="loading-text">Gollamudi Technology and Software.</h2>
    </div>
  );
};

export default Loader;
