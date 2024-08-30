import React from "react";
import "../styles/animation.css";

function Hero() {
  return (
    <section id="home" className="p-12 md:p-24 lg:p-36 bg-gray-50">
      <div className="container mx-auto min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-4 animate-fadeInUp">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              TRINISFO
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 mb-4">
              xinxixitong VENTITRÉ
            </h2>
            <p className="text-lg md:text-xl leading-relaxed font-medium text-slate-600 mb-5">
              Universitas Tanjungpura Sistem Informasi{" "}
              <span className="block font-bold text-primary">
                Angkatan 2023
              </span>
            </p>

            <div className="">
              <a href="#about">
                <button
                  type="button"
                  className="p-5 bg-primary rounded-full text-white font-semibold transform transition-transform hover:scale-105"
                >
                  Jelajahi angkatan
                </button>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end p-4 animate-fadeInUp">
            <img
              src="/src/public/img/Logo.png"
              alt="Logo"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
