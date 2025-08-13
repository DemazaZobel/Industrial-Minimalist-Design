import React from "react";
import img1 from "../assets/construction/c1.png";
import img2 from "../assets/construction/c2.png";
import img3 from "../assets/construction/c3.png";
import img4 from "../assets/construction/c4.png";
import img5 from "../assets/construction/c5.png";
import img6 from "../assets/construction/c6.png";
import { Link, useNavigate } from "react-router-dom";

const images = [img1, img2, img3, img4, img5, img6];

const ConstructionGallery = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-background py-20 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold text-primaryText mb-4 drop-shadow-md">
          Our Construction Masterpieces
        </h2>
        <p className="text-lg text-text">
          Explore our portfolio showcasing cutting-edge projects where expertise meets innovation and craftsmanship.
        </p>
      </div>

      {/* Projects Button */}
      <div className="mb-8 flex justify-center">
        <Link
          to="/projects"
          className="px-6 py-2 bg-primary rounded-full text-white font-semibold shadow hover:bg-secondary transition"
        >
          More Projects
        </Link>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition cursor-pointer"
            aria-label={`Explore construction project ${i + 1}`}
            onClick={() => navigate("/projects")}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate("/projects");
              }
            }}
          >
            <img
              src={img}
              alt={`Construction project ${i + 1}`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition pointer-events-none">
              <span className="text-white text-xl font-semibold tracking-wide select-none">
                Explore
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConstructionGallery;
