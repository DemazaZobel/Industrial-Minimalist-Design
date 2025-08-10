import React from "react";
import { Truck, Package, Globe, ShieldCheck } from "lucide-react";

const offers = [
  {
    icon: <Truck size={36} className="text-primary" />,
    title: "Efficient Logistics",
    description: "End-to-end cargo transport solutions with real-time tracking and timely delivery.",
  },
  {
    icon: <Package size={36} className="text-primary" />,
    title: "Packaging & Handling",
    description: "Secure and customized packaging to ensure product safety during transit.",
  },
  {
    icon: <Globe size={36} className="text-primary" />,
    title: "Global Network",
    description: "Trusted partnerships with worldwide carriers and customs agents for smooth import/export.",
  },
  {
    icon: <ShieldCheck size={36} className="text-primary" />,
    title: "Certified Compliance",
    description: "Adherence to international trade regulations and certifications to protect your shipments.",
  },
];

const WhatWeOffer = () => (
  <section className="bg-background py-20 px-6 md:px-16">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12 text-primaryText">What We Offer</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {offers.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-primaryText">{title}</h3>
            <p className="text-text leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeOffer;
