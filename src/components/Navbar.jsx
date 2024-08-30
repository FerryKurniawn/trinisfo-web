import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/src/public/img/Typograph@2x.png";
import cat from "/src/public/img/pow.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleStudentsClick = (e) => {
    e.preventDefault();
    navigate("/students");
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleGalleryClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const gallerySection = document.getElementById("gallery");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 shadow-xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={handleHomeClick}
        >
          <img src={logo} alt="Logo" className="lg:p-2 lg:w-[150px] w-32" />
        </a>

        {!isOpen && (
          <button
            type="button"
            className="inline-flex items-center p-2 w-12 h-12 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-transform duration-300 ease-in-out"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8 transform transition-transform duration-300 hover:rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        )}

        <div
          className={`fixed top-0 right-0 w-3/5 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          id="navbar-sticky"
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-10 h-10 transform transition-transform duration-300 hover:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center p-6 mt-10 font-medium space-y-6">
            <li>
              <a
                href="#hero"
                className="text-primary text-2xl font-bold hover:text-primary-dark transition-colors duration-300 relative group pb-1"
                onClick={handleHomeClick}
              >
                Home
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-primary text-2xl font-bold hover:text-primary-dark transition-colors duration-300 relative group pb-1"
                onClick={handleAboutClick}
              >
                About
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-primary text-2xl font-bold hover:text-primary-dark transition-colors duration-300 relative group pb-1"
                onClick={handleStudentsClick}
              >
                Students
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="text-primary text-2xl font-bold hover:text-primary-dark transition-colors duration-300 relative group pb-1"
                onClick={handleGalleryClick}
              >
                Gallery
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
          </ul>
          <div className="flex justify-center p-4">
            <img
              src={cat}
              alt="ini kucing"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex space-x-8 font-medium">
            <li>
              <a
                href="#hero"
                className="relative text-primary text-lg font-bold hover:text-primary-dark transition-colors duration-300 group pb-1"
                onClick={handleHomeClick}
              >
                Home
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative text-primary text-lg font-bold hover:text-primary-dark transition-colors duration-300 group pb-1"
                onClick={handleAboutClick}
              >
                About
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-primary text-lg font-bold hover:text-primary-dark transition-colors duration-300 group pb-1"
                onClick={handleStudentsClick}
              >
                Students
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="relative text-primary text-lg font-bold hover:text-primary-dark transition-colors duration-300 group pb-1"
                onClick={handleGalleryClick}
              >
                Gallery
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
