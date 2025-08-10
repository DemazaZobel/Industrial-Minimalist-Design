import React from 'react';
import logo from '../assets/logo_light.png';
import heroImage from '../assets/construction/construction.jpg';
import { Link } from 'react-router-dom';
const HeroConstruction = () => {
  return (
    <section className="relative w-full h-[70vh] sm:h-[85vh] md:h-screen overflow-hidden -mt-20">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Manufacturing Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      
      {/* Centered Heading */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center px-6">
      <div className="mt-10">
          <img
            src={logo}
            alt="Dankil Industries Logo"
            className="w-44 sm:w-56 md:w-64 lg:w-72 xl:w-[700px] mx-auto drop-shadow-2xl"
          />
        </div>
                <h1 className="text-primary text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-extrabold drop-shadow-2xl tracking-wide leading-tight">
        Construction
        </h1>
        <p className="text-secondary mt-6 text-xl sm:text-2xl md:text-3xl font-light drop-shadow-lg max-w-4xl mx-auto mb-10">
        Building Ethiopia’s Tomorrow — From Foundations to Finish, We Construct with Integrity, Innovation, and Impact.
        </p>
        <Link
              to={"/contact"}
              className="bg-button/70 hover:bg-accent transition px-6 py-3 rounded-full text-white font-semibold shadow-md "
            >
            Connect With us
            </Link>
       
      </div>
    </section>
  );
};

export default HeroConstruction;
