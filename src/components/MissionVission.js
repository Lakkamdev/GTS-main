import React from "react";
import { motion } from "framer-motion";
import "./MissionVission.css";

const missionVision = [
  {
    title: "Mission",
    description:
      "Empowering businesses with innovative, scalable, and user-centric technology solutions that drive growth and efficiency.",
    icon: "https://cdn-icons-png.flaticon.com/128/14676/14676084.png",
  },
  {
    title: "Vision",
    description:
      "To be a global leader in cutting-edge digital solutions, transforming ideas into reality with exceptional quality and user experiences.",
    icon: "https://cdn-icons-png.flaticon.com/128/10434/10434252.png",
  },
];

const MissionVisionSection = () => {
  return (
    <section id="missionVision" className="mission-vision-container">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div 
          className="header-container"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Mission & Vision</h2>
          <p className="section-subtitle">
            Innovating with purpose, shaping the future of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12">
          {missionVision.map((item, index) => (
            <motion.div
              key={index}
              className="mission-vision-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="icon-container">
                <img src={item.icon} alt={item.title} className="icon" />
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
