import React from "react";
import { Link } from "react-router-dom";
import trade from '../assets/gallery/container.png';
const CallToAction = () => (
  <section className="bg-black/50 py-16 text-white text-center  h-[400px]"
    style={{ backgroundImage: `url(${trade})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
    <div className="bg-black/70 p-8  h-[400px] mt-[-62px] flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
            Ready to Take Your Cargo Operations to the Next Level?
        </h2>
        <p className="text-lg mb-8 text-secondary">
            Contact us today to learn how Dankil Industries can streamline your import and export processes with our comprehensive services.
        </p>
        <Link
            to="/contact"
            className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-semibold transition duration-300"
        >
            Get Started
        </Link>     
</div>
  </section>
);

export default CallToAction;
