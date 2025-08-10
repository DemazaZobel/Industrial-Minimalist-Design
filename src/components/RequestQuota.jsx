import React from "react";
import machine from "../assets/gallery/m.jpeg";

const RequestQuote = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-16 mx-auto text-center bg-background"
      style={{
        backgroundImage: `url(${machine})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content with relative z-index to appear above overlay */}
      <div className="relative max-w-3xl mx-auto text-white">
        <h2 className="text-4xl font-bold mb-6 text-secondary">Request a Quote</h2>
        <p className="text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Interested in working with us? Reach out to get a customized quote tailored to your business needs.  
          Our team is ready to assist you with any questions or requests.
        </p>
        <a
          href="mailto:contact@dankil.com"
          className="inline-block px-8 py-4 bg-button text-white font-semibold rounded-full hover:bg-accent transition"
        >
          Contact Us Now
        </a>
      </div>
    </section>
  );
};

export default RequestQuote;
