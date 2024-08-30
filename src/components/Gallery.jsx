import React from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "./Arrows";

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

function Gallery() {
  return (
    <section id="gallery" className="p-12 lg:p-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary">
            Gallery Kami
          </h1>
        </div>
        <div className="relative">
          <Slider {...sliderSettings}>
            {[
              {
                src: "/src/assets/img/angkatan/img1.png",
                alt: "Gallery Image 1",
              },
              {
                src: "/src/assets/img/angkatan/img2.png",
                alt: "Gallery Image 2",
              },
              {
                src: "/src/assets/img/angkatan/img3.png",
                alt: "Gallery Image 3",
              },
              {
                src: "/src/assets/img/angkatan/img4.jpg",
                alt: "Gallery Image 4",
              },
              {
                src: "/src/assets/img/angkatan/img5.jpg",
                alt: "Gallery Image 5",
              },
              {
                src: "/src/assets/img/angkatan/img6.jpg",
                alt: "Gallery Image 6",
              },
              {
                src: "/src/assets/img/angkatan/img-7.jpg",
                alt: "Gallery Image 7",
              },
              {
                src: "/src/assets/img/angkatan/img-9.jpg",
                alt: "Gallery Image 9",
              },
            ].map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  style={{ height: "700px" }} // Adjust height as needed
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
