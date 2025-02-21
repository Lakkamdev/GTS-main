import React from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Animated Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="content-box"
      >
        <h1 className="title">
          Welcome to{" "}
          <span className="typed-text">
            <ReactTyped
              strings={["Gollamudi Technology and Software"]}
              typeSpeed={80}
              loop={true}
              backSpeed={40}
            />
          </span>
        </h1>

        <p className="description">
          At <span className="highlight">GTS</span>, we transform ideas into reality.
          Our expertise lies in building world-class <span className="highlight">web</span> and{" "}
          <span className="highlight">mobile applications</span> tailored to meet your business goals.
          Whether it's designing intuitive websites or developing powerful software solutions,
          we deliver <span className="bold">innovation that drives success.</span>
        </p>

        <p className="description">
          Are you ready to <span className="highlight">kickstart your career?</span> Join our team
          and become part of a dynamic environment that values <span className="bold">creativity, growth, and excellence.</span>
          At GTS, fresh talent is nurtured, and <span className="bold">every idea matters.</span>
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
