import React from "react";
import Slider from "react-slick";
import { PrevArrow, NextArrow } from "./Arrows";
import img1 from "/src/public/img/angkatan/img1.png";
import img2 from "/src/public/img/angkatan/img2.png";
import img3 from "/src/public/img/angkatan/img3.png";
import img4 from "/src/public/img/angkatan/img4.jpg";
import img5 from "/src/public/img/angkatan/img5.jpg";
import img6 from "/src/public/img/angkatan/img6.jpg";
import img7 from "/src/public/img/angkatan/img-7.jpg";
import img8 from "/src/public/img/angkatan/img-9.jpg";
import img9 from "/src/public/img/angkatan/batik.jpg";
import "../styles/animation.css";

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
  const images = [
    { src: img1, alt: "Gallery Image 1" },
    { src: img2, alt: "Gallery Image 2" },
    { src: img3, alt: "Gallery Image 3" },
    { src: img4, alt: "Gallery Image 4" },
    { src: img5, alt: "Gallery Image 5" },
    { src: img6, alt: "Gallery Image 6" },
    { src: img7, alt: "Gallery Image 7" },
    { src: img8, alt: "Gallery Image 9" },
    { src: img9, alt: "Gallery Image 10" },
  ];

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
            {images.map((image, index) => (
              <div key={index} className="relative animate-slideIn">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
                  style={{ height: "60vh" }}
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
