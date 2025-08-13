import React, { useState } from 'react';
import { motion } from 'framer-motion';
import machine from "../assets/gallery/m4.png";
import machine1 from "../assets/gallery/m.png";
import textile from "../assets/gallery/textile.png";
import construction from "../assets/gallery/c.png";
import importexport from "../assets/ExportImport/coffee.png";
import factory from "../assets/gallery/m2.png";

const projectsData = [
  {
    id: 1,
    title: 'Textile Manufacturing Plant',
    industry: 'Manufacturing',
    image: textile,
    location: 'Ethiopia',
    year: 2025,
    status: 'Planned',
    description:
      'Cutting-edge textile manufacturing line utilizing automated spinning and weaving technologies with sustainable and efficient operations.',
  },
  {
    id: 2,
    title: 'Export of Coffee & Sesame',
    industry: 'Export',
    image: importexport,
    location: 'Ethiopia',
    year: 2026,
    status: 'Planned',
    description:
      'End-to-end export logistics for coffee and sesame sourced from over 1,000 Ethiopian farmers with optimized shipping and international compliance.',
  },
  {
    id: 3,
    title: 'Dankal Tower Construction',
    industry: 'Construction',
    image: construction,
    location: 'Ethiopia',
    year: 2027,
    status: 'Planned',
    description:
      'A modern 14-story commercial tower featuring green terraces, solar integration, and comprehensive design and construction management.',
  },
  {
    id: 4,
    title: 'Machinery Import Deal',
    industry: 'Import',
    image: factory,
    location: 'Ethiopia',
    year: 2025,
    status: 'Planned',
    description:
      'Procurement and import of industrial-grade machines with precise logistics, customs handling, and installation.',
  },
 {
  id: 5,
  title: 'Industrial Facility Construction',
  industry: 'Construction',
  image: machine,
  location: 'Ethiopia',
  year: 2025,
  status: 'Planned',
  description:
    'Construction of a modern industrial facility with integrated manufacturing lines, storage solutions, and operational support for local industries.',
},

  {
    id: 6,
    title: 'Renewable Energy Initiative',
    industry: 'Manufacturing',
    image: machine1,
    location: 'Ethiopia',
    year: 2026,
    status: 'Planned',
    description:
      'Implementation of solar panels and energy storage systems to power industrial operations sustainably and efficiently.',
  },
];



const industries = ['All', 'Manufacturing', 'Import', 'Export', 'Construction'];

const statusColor = {
  Planned: 'text-yellow-600',
  Ongoing: 'text-green-600',
};

const Projects = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredProjects =
    selectedIndustry === 'All'
      ? projectsData
      : projectsData.filter((project) => project.industry === selectedIndustry);

  return (
    <section className="min-h-screen bg-background py-20 px-6  relative m-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            Our Projects
          </h2>
        
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-14 px-4 sm:px-0 max-w-4xl mx-auto">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setSelectedIndustry(industry)}
            className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm md:text-base border font-medium transition duration-300
              ${
                selectedIndustry === industry
                  ? 'bg-primary text-white border-transparent'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
              }
            `}
          >
            {industry}
          </button>
        ))}
      </div>


        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;
            const shortDesc = project.description.slice(0, 140) + "...";
            return (
              <motion.div
                layout
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <div className="text-sm text-gray-500 my-2">
                    📍 Ethiopia | 📅 {project.year} | <span className={`${statusColor[project.status]} font-medium`}>{project.status}</span>
                  </div>
                  <span className="inline-block text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    {project.industry}
                  </span>
                  <p className="text-sm text-gray-600">
                    {isExpanded ? project.description : shortDesc}
                  </p>
                  <button
                    onClick={() => toggleReadMore(project.id)}
                    className="mt-4 block text-sm text-blue-600 hover:underline focus:outline-none"
                  >
                    {isExpanded ? 'Show less' : 'Read more'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
