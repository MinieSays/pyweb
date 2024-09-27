import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/logo.png"; // Replace with your logo path
import Modal from "./Modal";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <nav className="bg-white border-b">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img loading="lazy" src={logo} className="h-12 w-auto" alt="Brand Logo" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#ffc857] focus:outline-none"
          >
            {menuOpen ? (
              <FaTimes className="w-7 h-7" />
            ) : (
              <FaBars className="w-7 h-7" />
            )}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } z-50 w-full md:w-auto md:flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 absolute md:static top-16 left-0 md:top-auto md:left-auto bg-white md:bg-transparent md:shadow-none shadow-lg py-6 md:py-0 transition-all duration-300 z-10`}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-6 md:space-y-0 text-center md:text-left">
              <li>
                <Link
                  to="/"
                  className="relative inline-block font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="relative inline-block font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="relative inline-block font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="relative inline-block font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <button
                  className="px-6 py-3 rounded-full bg-[#ffc857] text-black font-semibold shadow-md hover:bg-[#ffdb70] transition-colors duration-300 ease-in-out"
                  onClick={() => {
                    closeMenu();
                    toggleModal();
                  }}
                >
                  Free Consultation
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Navbar;
