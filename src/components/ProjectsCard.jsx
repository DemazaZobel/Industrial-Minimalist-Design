import React from 'react';
import { Link } from 'react-router-dom';
import machine from "../assets/gallery/m.jpeg";
import machine1 from "../assets/gallery/m.png";
import textile from "../assets/gallery/textile.png";
import construction from "../assets/gallery/c.png";
import construction1 from "../assets/construction/new.png";
import importexport from "../assets/ExportImport/logistics.png";
import importexport1 from "../assets/ExportImport/supplychain.png";
import factory from "../assets/gallery/m2.png";
import { ImOpt } from 'react-icons/im';

const projects = [
  // Manufacturing Projects
  {
    title: 'Industrial Equipment Installation',
    description: 'We handle the full installation of machinery and production lines for new manufacturing setups.',
    imageUrl: factory,
    link: '/projects',
  },
  {
    title: 'Eco-Friendly Manufacturing Projects',
    description: 'Executing sustainable manufacturing processes that reduce waste and energy consumption.',
    imageUrl: machine,
    link: '/projects',
  },

  // Import & Export Projects
  {
    title: 'International Logistics & Shipment',
    description: 'Managing import-export operations to streamline delivery and reduce costs for clients.',
    imageUrl: importexport,
    link: '/projects',
  },
  {
    title: 'Supply Chain Setup & Optimization',
    description: 'Implementing efficient supply chains for small to mid-sized industrial clients.',
    imageUrl: importexport1,
    link: '/projects',
  },

  // Construction Projects
  {
    title: 'Residential & Commercial Construction',
    description: 'Executing small to mid-scale construction projects from foundation to finishing.',
    imageUrl: construction,
    link: '/projects',
  },
  {
    title: 'Turnkey Industrial Construction',
    description: 'Managing end-to-end construction projects for industrial facilities, including planning, procurement, and execution.',
    imageUrl: construction1,
    link: '/projects',
  },
];



const Projects = () => (
  <section className="py-20 bg-background">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center text-primaryText mb-14">Our Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map(({ title, description, imageUrl, link }) => (
          <Link
            to={link}
            key={title}
            className="relative group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-300"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-52 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white font-medium text-lg">Explore more →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/projects"
          className="inline-block px-6 py-3 text-primary hover:underline text-lg font-medium"
        >
          See more projects →
        </Link>
      </div>
    </div>
  </section>
);

export default Projects;
