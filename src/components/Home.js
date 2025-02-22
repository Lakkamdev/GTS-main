import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="gradient-text">
          Welcome to Gollamudi Technology and Software
        </h1>
        <p>
          At GTS, we transform ideas into reality. Our expertise lies in building world-class web and mobile applications tailored to meet your business goals. Whether it's designing intuitive websites or developing powerful software solutions, we deliver innovation that drives success.
        </p>
        <p>
          Are you ready to kickstart your career? Join our team and become part of a dynamic environment that values creativity, growth, and excellence. At GTS, fresh talent is nurtured, and every idea matters.
        </p>
      </div>

      {/* Image Carousel Section */}
      <div className="carousel">
        <div className="carousel-card">
          <img
            src="https://osc.com.fj/wp-content/uploads/2024/05/Unveiling-Modern-Trends-in-Technology.jpeg"
            alt="Technology Trends"
          />
          <div className="card-content">
            <h3>Modern Tech Trends</h3>
            <p>Stay ahead with cutting-edge innovations.</p>
          </div>
        </div>

        <div className="carousel-card">
          <img
            src="https://www.netsolutions.com/wp-content/uploads/2023/03/The-Future-of-Software-Development-in-2024-and-Beyond.webp"
            alt="Software Development"
          />
          <div className="card-content">
            <h3>Software Development</h3>
            <p>Build powerful software solutions with GTS.</p>
          </div>
        </div>

        <div className="carousel-card">
          <img
            src="https://i0.wp.com/ranksol.com/wp-content/uploads/2023/08/future_of_web_design.jpeg?fit=830%2C500&ssl=1"
            alt="Future of Web Design"
          />
          <div className="card-content">
            <h3>Web Design Evolution</h3>
            <p>Creating visually stunning and user-friendly interfaces.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
