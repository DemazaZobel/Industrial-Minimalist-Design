import React, { useState } from 'react';
import { motion } from 'framer-motion';
import machine from "../assets/gallery/m.jpeg";
import machine1 from "../assets/gallery/m.png";
import textile from "../assets/gallery/textile.png";
import construction from "../assets/gallery/c.png";
import importexport from "../assets/ExportImport/dark-coffee-beans-bowl-brown-table.jpg";
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
      'We established a cutting-edge textile manufacturing line utilizing automated spinning and weaving technologies. The project involved procurement, installation, training, and supply chain coordination across five regional vendors. Our approach prioritized sustainability and operational efficiency, making the plant one of the most cost-effective textile units in East Africa.',
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
      'Dankil Industries manages the end-to-end export logistics for coffee and sesame sourced from over 1,000 Ethiopian farmers. We ensure international compliance, cold chain optimization, and efficient port handling. Our strategic partnerships have boosted exports by 30% year-on-year.',
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
      'This 14-story commercial tower is designed with modern glass curtain walls and reinforced concrete technology. Dankil is overseeing the architectural design, project financing, and execution. The building includes green terraces, rooftop solar, and 3-level basement parking.',
  },
  {
    id: 4,
    title: 'Machinery Import Deal',
    industry: 'Import',
    image: machine,
    location: 'Ethiopia',
    year: 2025,
    status: 'Planned',
    description:
      'We successfully negotiated, procured, and imported 30 units of industrial-grade manufacturing equipment from German OEMs. Customs clearance, transportation, and installation were all handled by our logistics team with zero delays or damage claims.',
  },
  {
    id: 5,
    title: 'Modular Housing Development',
    industry: 'Construction',
    image: factory,
    location: 'Ethiopia',
    year: 2025,
    status: 'Planned',
    description:
      'In partnership with regional housing authorities, we delivered 500 modular homes within 6 months. Dankil oversaw site preparation, modular fabrication, and service integration (plumbing, electrical). The homes provide affordable, safe housing for low-income communities.',
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
      'Dankil Industries is investing in renewable energy solutions to power industrial operations sustainably. This initiative includes solar panel installation and energy storage systems to reduce carbon footprint and operational costs.',
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
        <div className="flex justify-center flex-wrap gap-3 mb-14">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-5 py-2 rounded-full text-sm border font-medium ${
                selectedIndustry === industry
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100'
              } transition duration-300`}
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
