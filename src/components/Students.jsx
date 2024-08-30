import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import kelasa from "/src/public/img/angkatan/kelasa.jpg";
import kelasb from "/src/public/img/angkatan/kelasb.jpg";

function Students() {
  const navigate = useNavigate();

  const handleClickKelasB = (e) => {
    e.preventDefault();
    navigate("/students/kelas-b");
  };

  const handleClickKelasA = (e) => {
    e.preventDefault();
    navigate("/students/kelas-a");
  };

  useEffect(() => {
    document.title = "Students | Trinisfo";

    return () => {
      document.title = "Home | Trinisfo";
    };
  }, []);

  return (
    <section className="py-12 lg:py-24 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <div className="students-header mb-12 lg:mb-16 mt-10">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
            Mahasiswa Angkatan 2023
          </h1>
          <p className="text-gray-700 text-lg lg:text-xl mb-8">
            Keberagaman angkatan kami menciptakan kreativitas dan keahlian
            berbeda untuk mencapai tujuan bersama.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Kelas A */}
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
              <img
                src={kelasa}
                alt="Kelas A"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="#"
              className="relative text-primary text-2xl lg:text-3xl font-bold group mt-4"
              onClick={handleClickKelasA}
            >
              Kelas A
              <span className="absolute left-1/2 bottom-0 block h-1 bg-primary transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-full"></span>
            </a>
          </div>
          {/* Kelas B */}
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <div className="relative w-full h-[300px] lg:h-[400px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
              <img
                src={kelasb}
                alt="Kelas B"
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href="#"
              className="relative text-primary text-2xl lg:text-3xl font-bold group mt-4"
              onClick={handleClickKelasB}
            >
              Kelas B
              <span className="absolute left-1/2 bottom-0 block h-1 bg-primary transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Students;
