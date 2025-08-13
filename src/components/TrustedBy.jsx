import React from 'react';

const partners = [
  "Local Supplier A",
  "Startup Partner B",
  "Community Organization C",
  "Small Business D",
  "Early Client E",
];

const TrustedByCompanies = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-10 text-primaryText tracking-tight">
          Trusted By Our Early Partners
        </h2>
        <div className="overflow-hidden whitespace-nowrap relative">
          <div className="inline-block animate-marquee whitespace-nowrap">
            {partners.map((partner, idx) => (
              <span
                key={idx}
                className="inline-flex items-center mx-4 px-6 py-3 border border-gray-300 bg-white rounded-xl text-lg font-semibold text-gray-700 tracking-wide shadow-md cursor-pointer transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-secondary hover:text-primary select-none"
              >
                {partner}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, idx) => (
              <span
                key={"dup-" + idx}
                className="inline-flex items-center mx-4 px-6 py-3 border border-gray-300 bg-white rounded-xl text-lg font-semibold text-gray-700 tracking-wide shadow-md cursor-pointer transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-secondary hover:text-primary select-none"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          padding-left: 0;
          animation: marquee 25s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default TrustedByCompanies;
