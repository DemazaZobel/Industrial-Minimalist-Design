import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png"; // replace with your logo path
import image1 from "../assets/gallery/m.png";
import image2 from "../assets/gallery/c.png";
import image3 from "../assets/gallery/t.png";


const images = [image1, image2, image3];

const descriptions = [
 
  "Building strong foundations and durable infrastructure with innovative construction solutions tailored to your needs.",


  "Driving efficiency and precision through advanced manufacturing technologies and quality-driven production processes.",

  // Import and export related
  "Facilitating seamless global trade with reliable import-export services, connecting markets and delivering excellence worldwide.",
];



const LandingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const intervalRef = useRef(null);

  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 400);
  };

  const nextImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setFade(true);
    }, 400);
  };

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const randomDelay = Math.floor(Math.random() * 2000) + 3000;

    intervalRef.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 400);
    }, randomDelay);

    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-20 gap-16">
      {/* Left Side */}
      <div className="flex flex-col flex-1 max-w-xl space-y-4">
        {/* Logo */}
        <img src={logo} alt="Dankal Industrial PLC" className="w-76 h-auto lg:-ml-8 md:-ml-6 sm:-ml-2" />

        {/* Dynamic Text with fade transition */}
        <p
          className={`text-center lg:text-left text-primaryText text-xl leading-relaxed font-serif transition-opacity duration-500  ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          aria-live="polite"
        >
          {descriptions[currentIndex]}
        </p>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start gap-8">
          <button
            className="bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 focus:outline-none text-white px-10 py-3 rounded-full font-semibold shadow-lg transition-transform transform hover:scale-105 active:scale-95"
            aria-label="Explore more projects"
          >
            Explore More
          </button>
          <button
            className="bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-white focus:ring-4 focus:ring-yellow-300 focus:outline-none text-yellow-600 px-10 py-3 rounded-full font-semibold shadow-md transition-colors transition-transform transform hover:scale-105 active:scale-95"
            aria-label="See projects"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Right Side: Image Carousel */}
      <div className="flex-1 relative max-w-lg rounded-2xl overflow-hidden shadow-xl border border-gray-200 mt-16">
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className={`w-full h-96 object-cover rounded-2xl transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          draggable="false"
        />

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          aria-label="Previous image"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-500 bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 text-white shadow-lg transition-shadow focus:outline-none focus:ring-4 focus:ring-yellow-300"
          type="button"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          aria-label="Next image"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-500 bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 text-white shadow-lg transition-shadow focus:outline-none focus:ring-4 focus:ring-yellow-300"
          type="button"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default LandingSection;
