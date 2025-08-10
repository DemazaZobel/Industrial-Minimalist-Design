import React from "react";
import { Link } from "react-router-dom";
import constructionImg from '../assets/gallery/c.png';

const CallToAction = () => (
  <section
    className="relative bg-black/50 py-16 text-white text-center  h-[400px]"
    style={{ backgroundImage: `url(${constructionImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/70" />

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary max-w-3xl">
        Ready to Build the Future with Confidence?
      </h2>
      <p className="text-lg mb-8 text-secondary max-w-4xl">
        Partner with Dankil Industries for innovative construction solutions that deliver quality, safety, and efficiency — every step of the way.
      </p>
      <Link
        to="/contact"
        className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full font-semibold transition duration-300"
      >
        Get a Consultation
      </Link>
    </div>
  </section>
);

export default CallToAction;
