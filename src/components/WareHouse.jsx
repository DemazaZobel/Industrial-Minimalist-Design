import React from 'react';
import warehouse from "../assets/gallery/w.png"

const WarehouseOverview = () => (
  <section className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-24 md:py-32 space-y-12 bg-background text-text min-h-screen max-w-7xl">
    <h2 className="text-2xl sm:text-3xl font-bold text-primaryText mb-6 text-center">
      Our Warehouse Capabilities
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">State-of-the-Art Facilities</h3>
        <p className="text-sm sm:text-base">
          Our warehouses are equipped with climate control, CCTV, and advanced security systems to ensure your goods are protected 24/7.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Inventory Management</h3>
        <p className="text-sm sm:text-base">
          Real-time inventory tracking with modern warehouse management software lets you monitor your stock anytime, anywhere.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">Fast & Reliable Distribution</h3>
        <p className="text-sm sm:text-base">
          We coordinate efficient order picking, packing, and distribution services to meet your deadlines and reduce downtime.
        </p>
      </div>

      <img 
        src={warehouse} 
        alt="Warehouse" 
        className="w-full h-48 sm:h-64 md:h-72 object-cover rounded-lg shadow-lg mt-8 md:col-span-3" 
      />
    </div>
  </section>
);

export default WarehouseOverview;
