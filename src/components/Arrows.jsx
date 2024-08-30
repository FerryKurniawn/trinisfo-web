// src/components/Arrows.jsx
import React from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md"; // Menggunakan ikon dari react-icons

// Tombol panah kiri
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10"
    onClick={onClick}
    style={{ zIndex: 1000 }}
  >
    <MdArrowBack size={24} />
  </button>
);

// Tombol panah kanan
const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10"
    onClick={onClick}
    style={{ zIndex: 1000 }}
  >
    <MdArrowForward size={24} />
  </button>
);

export { PrevArrow, NextArrow };
