import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/animation.css";
import about from "/src/public/img/about.png";

function About() {
  const [isVisible, setIsVisible] = useState({
    title: false,
    image: false,
    content: false,
  });
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handleStudentsClick = (e) => {
    e.preventDefault();
    navigate("/students#");
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible((prev) => ({
          ...prev,
          [entry.target.dataset.name]: true,
        }));
        observer.unobserve(entry.target);
      }
    }, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      className="p-24 md:p-24 lg:p-36 min-h-screen bg-gray-50"
    >
      <div className="container mx-auto min-h-screen flex flex-col items-center">
        <div
          ref={titleRef}
          data-name="title"
          className={`items-center justify-center mb-8 ${
            isVisible.title ? "animate-fadeInUp" : ""
          }`}
        >
          <h1 className="text-3xl font-bold text-primary">
            <span className="">Tentang</span> Kami
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div
            ref={imageRef}
            data-name="image"
            className={`w-full md:w-1/2 flex justify-center items-center md:justify-start mb-8 md:mb-0 ${
              isVisible.image ? "animate-fadeInLeft" : ""
            }`}
          >
            <img
              src={about}
              alt="Descriptive Alt Text"
              className="max-w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
          </div>
          <div
            ref={contentRef}
            data-name="content"
            className={`w-full md:w-1/2 flex flex-col md:p-24 ${
              isVisible.content ? "animate-fadeInRight" : ""
            }`}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-3">
              Gimana sih angkatan 2023?
            </h1>

            <p className="text-lg md:text-xl leading-relaxed font-medium text-slate-600 mb-8">
              Angkatan ini adalah Angkatan yang gak biasa. Bukan cuma belajar,
              tapi biasanya main game, scrolling pada saat mata kuliah. Seru,
              kan? Di sini, kita suka saling bantu, sharing tempat mancing, dan
              bikin suasana belajar yang menyenangkan! 💻🚀
            </p>
            <p className="mb-3">Siapa aja sih orangnya?</p>
            <div className="">
              <a href="#" onClick={handleStudentsClick}>
                <button
                  type="button"
                  className="p-5 bg-primary rounded-full text-white font-semibold cursor-pointer transition-transform transform hover:scale-105"
                >
                  Mahasiswa angkatan
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
