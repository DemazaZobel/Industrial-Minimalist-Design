import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primaryText sm:text-4xl">
            About Dankal Industrial
          </h1>
          <p className="mt-4 text-lg text-primaryText max-w-2xl mx-auto">
            Delivering practical industrial, construction, and manufacturing solutions for global businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-primary">
              Who We Are
            </h2>
            <div className="space-y-4 text-primaryText">
              <p>
                Dankal Industrial is a startup enterprise focused on providing hands-on solutions in construction, manufacturing, and industrial services. We work directly with clients to execute projects, ensuring quality and efficiency at every step.
              </p>
              <p>
                Our team combines practical experience with a commitment to delivering results, helping businesses grow while maintaining sustainable and safe practices.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-4 rounded-lg shadow-xs border border-gray-200">
                <p className="text-2xl font-bold text-secondary">1+</p>
                <p className="text-sm text-primaryText">Years in Operation</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-xs border border-gray-200">
                <p className="text-2xl font-bold text-secondary">6+</p>
                <p className="text-sm text-primaryText">Projects to be Completed</p>
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
                  To provide reliable and practical industrial, construction, and manufacturing services, helping clients bring their projects to life while promoting sustainable and safe practices.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Core Values
                </h3>
                <ul className="space-y-3 text-primaryText">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Integrity in all our projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Hands-on, practical solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Client-focused approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Efficiency and quality in execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Sustainable and safe practices</span>
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
