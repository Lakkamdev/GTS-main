import React from "react";
import { FcMultipleDevices } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Web Development",
    description:
      "We design and develop highly responsive websites with modern UI/UX principles, ensuring a seamless user experience.",
    icon: <FcMultipleDevices />,
  },
  {
    title: "App Development",
    description:
      "Our mobile app development services provide custom solutions for iOS and Android platforms with intuitive interfaces.",
    icon: <FaLaptopCode className="text-orange-500" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="services-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center pb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Our Services
        </h2>
        <p className="text-lg md:text-2xl text-gray-200 mt-4">
          We craft innovative solutions to empower your business with advanced technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="icon-container">{service.icon}</div>
            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
            <p className="text-lg text-gray-300 text-center mt-3">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
