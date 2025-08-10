import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primaryText sm:text-4xl">
            About Dankal Industrial
          </h1>
          <p className="mt-4 text-lg text-primaryText max-w-2xl mx-auto">
            Empowering industries through innovation and operational excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              Who We Are
            </h2>
            <div className="space-y-4 text-primaryText">
              <p>
                Dankal Industrial PLC is a leading multi-sector enterprise specializing in industrial solutions, construction management, and global trade operations. Founded on principles of quality and innovation, we deliver comprehensive services across local and international markets.
              </p>
              <p>
                Our team of experts combines technical expertise with strategic vision to provide end-to-end solutions that drive sustainable growth and create lasting value for our clients and partners.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-xs border border-gray-200">
                <p className="text-2xl font-bold text-secondary">20+</p>
                <p className="text-sm text-primaryText">Years in Operation</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-xs border border-gray-200">
                <p className="text-2xl font-bold text-secondary">300+</p>
                <p className="text-sm text-primaryText">Successful Projects</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Our Mission
                </h3>
                <p className="text-primaryText">
                  To deliver superior industrial solutions that combine cutting-edge technology with sustainable practices, creating value for our clients while contributing to economic development.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Core Values
                </h3>
                <ul className="space-y-3 text-primaryText">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Integrity in all operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Innovation-driven solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Client-focused approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Operational excellence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Sustainable practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default About;