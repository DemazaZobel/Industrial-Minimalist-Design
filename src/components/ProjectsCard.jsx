import React from 'react';
import { Link } from 'react-router-dom';
import machine from "../assets/gallery/m.jpeg";
import machine1 from "../assets/gallery/m.png";
import textile from "../assets/gallery/textile.png";
import construction from "../assets/gallery/c.png";
import importexport from "../assets/ExportImport/dark-coffee-beans-bowl-brown-table.jpg";
import factory from "../assets/gallery/m2.png";

const projects = [
  {
    title: 'Industrial Plant Expansion',
    description: 'Successfully expanded the capacity by 40% using advanced machinery.',
    imageUrl: factory,
    link: '/projects',
  },
  {
    title: 'International Logistics Network',
    description: 'Optimized import-export routes across multiple continents.',
    imageUrl: importexport,
    link: '/projects',
  },
  {
    title: 'Eco-Friendly Manufacturing',
    description: 'Implemented sustainable manufacturing practices reducing waste.',
    imageUrl: machine,
    link: '/projects',
  },
  {
    title: 'Urban Construction Project',
    description: 'Delivered a high-rise commercial complex on time and under budget.',
    imageUrl: construction,
    link: '/projects',
  },
  {
    title: 'Eco-Friendly Manufacturing',
    description: 'Implemented sustainable manufacturing practices reducing waste.',
    imageUrl: machine,
    link: '/projects',
  },
  {
    title: 'Urban Construction Project',
    description: 'Delivered a high-rise commercial complex on time and under budget.',
    imageUrl: construction,
    link: '/projects',
  },
];

const Projects = () => (
  <section className="py-20 bg-background">
    <div className="max-w-7xl mx-auto px-6">
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
