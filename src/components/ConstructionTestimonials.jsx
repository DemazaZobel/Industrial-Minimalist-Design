import React from "react";
import w1 from "../assets/profile/w1.jpg";
import w2 from "../assets/profile/w2.jpg";
import man from "../assets/profile/man.jpg";

const testimonials = [
  {
    name: "Eleni Tesfaye",
    role: "Project Manager, Addis Construction",
    photo: w1, // replace with real Habesha photo URL
    feedback:
      "Dankil Industries delivered exceptional quality and timeliness on our last infrastructure project. Their communication and expertise set them apart.",
  },
  {
    name: "Michael Gebremariam",
    role: "CEO, Ethio Exporters",
    photo: man, // replace with real Habesha photo URL
    feedback:
      "Working with Dankil for our import/export needs was seamless. Their team handles everything professionally, helping us expand our market reach.",
  },
  {
    name: "Sara Abebe",
    role: "Operations Director, Global Logistics Ltd.",
    photo: w2, // replace with real Habesha photo URL
    feedback:
      "The logistics solutions provided were innovative and reliable. Dankil’s transparency throughout the process gave us great confidence.",
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-background py-20 px-6 md:px-16 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold text-primaryText mb-12">
        Success Stories & Testimonials
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {testimonials.map(({ name, role, photo, feedback }, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-text transition-transform hover:scale-105"
          >
            <img
              src={photo}
              alt={name}
              className="w-24 h-24 rounded-full mb-6 object-cover shadow-md"
            />
            <p className="italic text-lg mb-6">&quot;{feedback}&quot;</p>
            <h3 className="text-primaryText font-semibold text-xl">{name}</h3>
            <p className="text-accent text-sm">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
