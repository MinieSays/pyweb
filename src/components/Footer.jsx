import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                loading="lazy"
                src={logo}
                className="h-12 w-auto"
                alt="Brand Logo"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Minie Sayadeth. All Rights
              Reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center space-x-6">
            <Link
              to="/"
              className="text-white hover:text-[#ffc857] transition-colors duration-300 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-[#ffc857] transition-colors duration-300 font-semibold"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-[#ffc857] transition-colors duration-300 font-semibold"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-[#ffc857] transition-colors duration-300 font-semibold"
            >
              Contact
            </Link>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#ffc857] transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#ffc857] transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#ffc857] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#ffc857] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
