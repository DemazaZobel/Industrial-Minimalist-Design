import React, { useEffect, useState } from "react";
import image1 from "../assets/gallery/m2.png";
import image2 from "../assets/gallery/c.png";
import image3 from "../assets/gallery/ship.png";
import image4 from "../assets/gallery/m.png";
import image5 from "../assets/gallery/c1.jpg";
import image6 from "../assets/gallery/c4.png";
import image7 from "../assets/gallery/container.png";
import image8 from "../assets/gallery/integration.png";

import { Link } from "react-router-dom";

const images = [image5, image4, image3, image2, image1, image6, image7, image8];

const GalleryPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen px-6 py-16 sm:px-10 md:px-16 bg-gradient-to-br from-primary/50 to-accent/50 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-28">

      {/* Text Side */}
      <div className="w-full lg:w-1/2 z-10 flex flex-col justify-center space-y-6 md:space-y-8 lg:ml-20 px-0 sm:px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          A Visual Journey Through Our Work
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl">
          From groundbreaking infrastructure to world-class manufacturing, our gallery reveals the milestones, moments, and missions that drive us forward.
        </p>
        <Link to="/projects" className="inline-block">
          <button className="bg-primaryText text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300">
            Explore Full Projects
          </button>
        </Link>
      </div>

      {/* Image Side */}
      <div className="relative w-full lg:w-1/2 h-[460px] sm:h-[500px] md:h-[560px] flex items-center justify-center z-10 px-4 lg:px-0">

        {/* Decorative Background (hidden on small screens) */}
        <div className="hidden lg:block absolute top-0 left-0 w-full h-full blur-xl opacity-20 pointer-events-none scale-105">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`bg-${i}`}
              className="absolute w-[180px] h-[250px] object-cover rounded-xl shadow-xl"
              style={{
                top: `${(i % 3) * 70 + 60}px`,
                left: `${i * 90}px`,
                rotate: `${i % 2 === 0 ? "-" : ""}10deg`,
              }}
            />
          ))}
        </div>

        {/* Main Slideshow Image */}
        <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-full rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentIndex === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Previews */}
        <div className="absolute bottom-6 right-6 z-20 flex space-x-2 sm:space-x-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-12 h-20 sm:w-16 sm:h-24 rounded-xl overflow-hidden shadow-lg border-4 transition-all duration-300 ${
                currentIndex === i
                  ? "border-blue-800 scale-110"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <img src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
