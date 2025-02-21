import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import React from "react";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.jpeg";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-sections">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <img src={logo} alt="Logo" className="footer-logo" />
            <h2 className="footer-company">Gollamudi Technology & Software</h2>
          </div>

          {/* Links Section */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a onClick={() => navigate("/services")} className="footer-link">
              Our Services
            </a>
            <a onClick={() => navigate("/contact")} className="footer-link">
              Contact
            </a>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <a
              href="https://www.linkedin.com/company/gollamudi-technology-and-software/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025{" "}
          <a href="/" className="footer-link">
            Gollamudi Technology and Software
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
