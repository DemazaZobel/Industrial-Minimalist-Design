import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Martha Alemu',
    company: 'Dankal Industries',
    position: 'Employee',
    quote: 'We are just getting started, but our team is committed to providing quality service and building strong relationships with our first clients.',
    rating: 5
  },
  {
    name: 'Daniel Bekele',
    company: 'Dankal Industries',
    position: 'Employee',
    quote: 'As a new company, every project is a learning experience. We are focused on growing responsibly and delivering what we promise.',
    rating: 4
  },
  {
    name: 'Selam Tesfaye',
    company: 'Dankal Industries',
    position: 'Operations Manager',
    quote: 'Our goal is to establish trust with our first partners and ensure transparent communication throughout every project.',
    rating: 4
  },
];


const Testimonials = () => {
  const refs = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = refs.current.findIndex(ref => ref === entry.target);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems]);

  const renderStars = (rating) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-background py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4 tracking-wider uppercase">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primaryText tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-primaryText">
              Hear from our valued partners about their experiences working with Dankal Industrial.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, company, position, quote, rating }, idx) => (
            <blockquote
              key={name}
              ref={el => (refs.current[idx] = el)}
              className={`relative bg-white rounded-xl shadow-sm p-8 border border-gray-200 transition-all duration-500 ease-out
                ${visibleItems.includes(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                hover:shadow-md hover:border-primary/30`}
              aria-label={`Testimonial from ${name}, ${position} at ${company}`}
            >
              <Quote className="w-8 h-8 text-accent absolute top-8 left-8 opacity-10" />
              <div className="relative z-10">
                {renderStars(rating)}
                <p className="text-primaryText text-lg leading-relaxed mb-6">"{quote}"</p>

                <footer className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg uppercase">
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <p className="text-primary font-semibold">{name}</p>
                    <p className="text-sm text-gray-500">{position}</p>
                    <p className="text-sm text-gray-400">{company}</p>
                  </div>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;