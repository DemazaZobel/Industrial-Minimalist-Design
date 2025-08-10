import React from "react";
import isoLogo from "../assets/certifications/7758174.jpg";
import tradeCert from "../assets/certifications/7758174.jpg";

const certifications = [
  {
    title: "ISO 9001 Quality Management",
    description:
      "Ensuring top quality management processes across our operations.",
    logo: isoLogo,
    link: "/certificates/iso9001.pdf",
  },
  {
    title: "Trade Compliance Certification",
    description:
      "Certified to meet international trade compliance and regulations.",
    logo: tradeCert,
    link: "/certificates/trade-compliance.pdf",
  },
  // add more as needed
];

const Certifications = () => (
  <section className="max-w-5xl mx-auto py-20 px-6 md:px-12 bg-background  space-y-12 mt-20">
    {/* Airplane Image */}
    <div className="flex justify-center">
      
    </div>

    {/* Title */}
    <h1 className="text-4xl font-bold text-primaryText mb-8 text-center">
      Certifications & Compliance
    </h1>

    {/* Certification Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {certifications.map(({ title, description, logo, link }, idx) => (
        <article
          key={idx}
          className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img src={logo} alt={title} className="w-32 h-auto mb-6" />
          <h2 className="text-2xl font-semibold text-primary mb-3">{title}</h2>
          <p className="text-text mb-6 max-w-xs">{description}</p>
          <a
            href={link}
            download
            className="px-8 py-3 bg-button text-white rounded-full hover:bg-primary transition duration-300"
          >
            Download Certificate
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default Certifications;
