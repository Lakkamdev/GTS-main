import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.jpeg";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <nav className="navbar-container">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img className="rounded-2xl" src={logo} width={60} alt="Logo" />
          <span className="hidden md:block md:text-2xl font-semibold" style={{color: "#f06321"}}>
            Gollamudi Technology and Software
          </span>
        </div>

        {/* Navigation Links */}
        <ul
          className={`${
            menu ? "block" : "hidden"
          } w-full md:w-auto py-2 mt-10 font-semibold md:mt-0 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-8`}
        >
          <a href="/home">
            <li className="nav-link">
              Home
            </li>
          </a>
          <div className="block sm:hidden container mx-auto px-4 flex-col md:flex-row justify-center items-center mt-4 border-t pt-4"></div>
          <a href="/services">
            <li className="nav-link">
              Our Services
            </li>
          </a>
          <div className="block md:hidden container mx-auto px-4 flex-col md:flex-row justify-center items-center mt-4 border-t pt-4"></div>
          <a href="/about">
            <li className="nav-link">
              About us
            </li>
          </a>
          <div className="block md:hidden container mx-auto px-4 flex-col md:flex-row justify-center items-center mt-4 border-t pt-4"></div>
          <a href="/contact">
            <li className="nav-link">
              Contact Us
            </li>
          </a>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;
