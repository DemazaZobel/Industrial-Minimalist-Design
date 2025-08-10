import React from 'react';
import { FaShippingFast, FaFileInvoice, FaWarehouse, FaHandshake, FaClipboardCheck } from 'react-icons/fa';

const services = [
  {
    icon: <FaShippingFast className="text-primary w-10 h-10 mb-4" />,
    title: 'Freight Forwarding',
    description: 'Efficient transportation of goods via sea, air, and land, tailored to your timeline and budget.',
  },
  {
    icon: <FaFileInvoice className="text-primary w-10 h-10 mb-4" />,
    title: 'Customs Clearance',
    description: 'Expert handling of all customs documentation and compliance to ensure hassle-free import/export.',
  },
  {
    icon: <FaWarehouse className="text-primary w-10 h-10 mb-4" />,
    title: 'Warehousing & Distribution',
    description: 'Secure storage and timely distribution services with real-time inventory tracking.',
  },
  {
    icon: <FaHandshake className="text-primary w-10 h-10 mb-4" />,
    title: 'Trade Consulting',
    description: 'Personalized advice to optimize your international trade operations and reduce risks.',
  },
  {
    icon: <FaClipboardCheck className="text-primary w-10 h-10 mb-4" />,
    title: 'Specialized Cargo Handling',
    description: 'Handling of perishable, hazardous, and oversized goods with utmost care and compliance.',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Inquiry & Quotation',
    description: 'Reach out to us with your cargo details and receive a competitive and transparent quote.',
  },
  {
    step: 2,
    title: 'Documentation & Compliance',
    description: 'Our experts assist in preparing all necessary documentation to meet regulatory standards.',
  },
  {
    step: 3,
    title: 'Cargo Pickup & Transportation',
    description: 'Safe and timely pickup of goods with reliable logistics partners across all transport modes.',
  },
  {
    step: 4,
    title: 'Customs Clearance',
    description: 'We manage all customs procedures to ensure smooth cross-border transit.',
  },
  {
    step: 5,
    title: 'Delivery to Destination',
    description: 'Final mile delivery with tracking updates, ensuring your goods arrive securely.',
  },
];

const CargoService = () => {
  return (
    <section className="max-w-full mx-auto px-4 sm:px-6 md:px-12 py-20 bg-background space-y-20 mt-20 md:mt-40 ml-12 mr-12">
      
      {/* Services Overview */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primaryText mb-8 text-center px-2">
          Our Import & Export Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {services.map(({ icon, title, description }, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition max-w-md mx-auto"
            >
              {icon}
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-primary">{title}</h3>
              <p className="text-text max-w-xs sm:max-w-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className=''>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primaryText mb-8 text-center px-2 ">
          How It Works
        </h2>
        <ol className="space-y-12 md:space-y-0 md:grid md:grid-cols-5 md:gap-8 px-2 sm:px-6 max-w-6xl mx-auto">
          {processSteps.map(({ step, title, description }) => (
            <li key={step} className="flex flex-col items-center text-center max-w-xs mx-auto">
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white font-bold text-base sm:text-lg mb-4">
                {step}
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-primary">{title}</h3>
              <p className="text-text max-w-xs sm:max-w-sm">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default CargoService;
