import React, { useState } from "react";

// Array of image URLs for the carousel items
const carouselItems = [
  "/src/assets/img/img1.png",
  "/src/assets/img/img2.png",
  "/src/assets/img/img3.png",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-r from-nav-bg to-[#2b58766d]">
      {/* Carousel wrapper */}
      <div className="relative w-full h-full">
        {/* Carousel items */}
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              {/* Image */}
              <img
                src={item}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2b58766d]"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex bottom-5 left-1/2 transform -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group transform -translate-y-1/2"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group transform -translate-y-1/2"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      {/* Overlay content */}
      <div
        id="content"
        className="absolute inset-0 flex items-center justify-center text-black"
      >
        <div id="text-hero" className="flex flex-col font-play text-center">
          <h1 className="text-[6vw] text-xinxi-clr font-bold font-play space-x-3">
            <span>T</span>
            <span>R</span>
            <span>I</span>
            <span>N</span>
            <span>I</span>
            <span>S</span>
            <span>F</span>
            <span>O</span>
          </h1>

          <span className="text-transparent bg-gradient-to-r from-xinxi-red to-xinxi-blue font-bold text-[3vw] bg-clip-text">
            // xinxixitong VENTITRÉ//
          </span>
          <p className="text-gray-400 mt-4">
            Web Angkatan Sistem Informasi Fakultas MIPA
            <span className="block">Universitas Tanjungpura Angkatan 2023</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
