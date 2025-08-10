import React from 'react';
import globe from '../assets/global.png';

import coffee from '../assets/ExportImport/dark-coffee-beans-bowl-brown-table.jpg';
import sesame from '../assets/ExportImport/white-sesame-black-sesame-dark-background.jpg';
import livestock from '../assets/ExportImport/black-white-spotty-cows-farm.jpg';
import wheat from '../assets/ExportImport/field-with-spikelets-close-up-background-with-wheat-spikelets.jpg';
import sugar from '../assets/ExportImport/background-sugar-cubes.jpg';
import fuel from '../assets/ExportImport/petrol-pump-hand-biodiesel-sustainable-environment.jpg';

const tradeImages = [wheat, sugar, fuel, coffee, sesame, livestock];

const Globe = () => {
  return (
    <section className="w-full bg-background px-4 md:px-20 py-16 flex flex-col items-center space-y-20 select-none">

      {/* Slogan */}
      <div className="flex flex-col items-center text-center space-y-4 mt-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primaryText tracking-wide whitespace-nowrap mt-20">
          DANKAL Global Trade Solutions
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-secondary max-w-2xl">
          Connecting Ethiopia to the World through Reliable Import and Export Services
        </p>
      </div>

      {/* Globe & Lists Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl w-full">

        {/* Imports */}
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xs flex flex-col items-start">
          <h3 className="text-3xl font-bold mb-6 text-[#0084A9] border-b-2 border-[#0084A9] pb-2 w-full">Imports</h3>
          <ul className="list-disc list-inside space-y-3 text-lg font-medium">
            <li>Wheat</li>
            <li>Sugar</li>
            <li>Fuel & Petroleum</li>
            <li>Machinery</li>
            <li>Pharmaceuticals</li>
          </ul>
        </div>

        {/* Globe */}
        <div className="w-[250px] sm:w-[320px] md:w-[400px] lg:w-[480px] xl:w-[580px] rounded-full overflow-hidden shadow-2xl animate-spin-slow">
          <img src={globe} alt="Rotating Globe" className="w-full h-auto block" />
        </div>

        {/* Exports */}
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xs flex flex-col items-start">
          <h3 className="text-3xl font-bold mb-6 text-primary border-b-2 border-[#49714C] pb-2 w-full">Exports</h3>
          <ul className="list-disc list-inside space-y-3 text-lg font-medium">
            <li>Coffee</li>
            <li>Sesame Seeds</li>
            <li>Livestock</li>
            <li>Leather Products</li>
            <li>Flowers</li>
          </ul>
        </div>
      </div>

      {/* Horizontal Scrolling Images */}
      <div className="w-full overflow-hidden mt-12">
        <div className="flex w-max animate-marquee-reverse space-x-14">
          {[...tradeImages, ...tradeImages].map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Trade Item ${idx + 1}`}
              className="w-44 h-44 object-cover rounded-3xl shadow-xl border border-gray-300"
            />
          ))}
        </div>
      </div>

      {/* Marquee and Spin Keyframes */}
      <style>{`
        @keyframes marquee-reverse {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 15s linear infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default Globe;
