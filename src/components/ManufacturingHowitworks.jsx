import React from "react";
import { CheckCircle } from "lucide-react";
import factory from "../assets/gallery/m.png"

const steps = [
  {
    title: "Step 1: Request & Consultation",
    description:
      "Clients contact us with product requirements, specifications, and delivery timelines. Our experts provide consultations to understand your needs fully.",
  },
  {
    title: "Step 2: Global Sourcing & Quotation",
    description:
      "We identify suitable global partners or factories, obtain pricing, and provide transparent quotations including logistics and taxes.",
  },
  {
    title: "Step 3: Manufacturing & Quality Control",
    description:
      "Once approved, production begins under strict quality control processes, ensuring your standards are met before shipment.",
  },
  {
    title: "Step 4: Logistics, Tracking & Delivery",
    description:
      "We manage the entire shipping process, customs documentation, and real-time tracking until safe delivery at your destination.",
  },
];

const HowItWorks = () => (
  <section className="bg-background py-20 px-4 sm:px-6 lg:px-16"
    style={{
      backgroundImage: `url(${factory})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
    <div className="max-w-6xl mx-auto bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-secondary mb-12">
        How It Works
      </h2>
      <div className="grid gap-10 sm:grid-cols-2">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-start space-x-4">
              <CheckCircle className="text-green-600 mt-1" size={28} />
              <div>
                <h3 className="text-xl font-semibold text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-primaryText">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
