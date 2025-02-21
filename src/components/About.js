import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Left: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-container"
      >
        <h2 className="title">About Us</h2>
        <p className="description-about">
          Gollamudi Technology and Software is dedicated to delivering
          cutting-edge technology solutions that empower modern businesses.
          Our team of experts specializes in developing bespoke software,
          dynamic web applications, and intuitive mobile apps designed to
          elevate user experience and drive business success.
          <br />
          <br />
          Whether you seek seamless digital experiences or robust business
          solutions, we are your trusted partner in accelerating growth and
          achieving excellence in the digital era. Let’s innovate, build, and
          lead the future together.
        </p>
      </motion.div>

      {/* Right: Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="video-container"
      >
        <video
          autoPlay
          loop
          muted
          className="video"
        >
          <source
            src="https://cdn.pixabay.com/video/2021/01/03/61037-497754241_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
};

export default About;
