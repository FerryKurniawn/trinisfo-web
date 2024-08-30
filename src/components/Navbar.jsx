import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/src/public/img/Typograph@2x.png";

export default function Navbar() {
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
    navigate("/"); // Navigate to home page
    // Use setTimeout to wait for navigation to complete before scrolling
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
        gallerySection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={handleHomeClick}
        >
          <img src={logo} alt="Logo" className="lg:p-2 lg:w-[130px] w-28" />
        </a>

        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <a
                href="#hero"
                className="relative inline-block pb-1 text-primary text-[1.2em] group font-bold transition-transform duration-300 ease-out"
                onClick={handleHomeClick}
              >
                Home
                <span className="absolute left-1/2 bottom-0 block h-1 bg-primary transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative inline-block pb-1 text-primary text-[1.2em] group font-bold transition-transform duration-300 ease-out"
                onClick={handleAboutClick}
              >
                About
                <span className="absolute left-1/2 bottom-0 block h-1 bg-primary transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative inline-block pb-1 text-primary text-[1.2em] group font-bold transition-transform duration-300 ease-out"
                onClick={handleStudentsClick}
              >
                Students
                <span className="absolute left-1/2 bottom-0 block h-1 bg-primary transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="relative inline-block pb-1 text-primary text-[1.2em] group font-bold transition-transform duration-300 ease-out"
                onClick={handleGalleryClick}
              >
                Gallery
                <span className="absolute left-1/2 bottom-0 block h-1 bg-primary transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-full"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
