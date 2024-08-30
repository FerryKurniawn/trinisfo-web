import React, { useEffect } from "react";
import imageKelasB from "/data/img/kelas_b.json";

export default function KelasB() {
  useEffect(() => {
    document.title = "Kelas B | Trinisfo";

    return () => {
      document.title = "Home | Trinisfo";
    };
  }, []);

  return (
    <section className="py-12 lg:py-24 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-primary mb-4">
            Mahasiswa Kelas B
          </h1>
          <p className="text-gray-700 text-base lg:text-lg">
            Ini adalah mahasiswa Kelas B, NIM Ganjil
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {imageKelasB.map((image, index) => (
            <div
              key={index}
              className="relative group w-full h-96 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={image.src}
                alt={`NIM ${image.nim}`}
                className="w-full h-full object-cover text-center flex"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-lg font-semibold text-white mb-2 text-center">
                  {image.name}
                </div>
                <div className="text-md text-white mb-2">{image.nim}</div>
                <div className="text-md text-white italic text-center">
                  "{image.quotes}"
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
