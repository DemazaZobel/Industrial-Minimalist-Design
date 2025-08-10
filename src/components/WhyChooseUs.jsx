import React, { useRef, useEffect } from 'react';

const features = [
  { title: 'Innovation', description: 'Cutting-edge solutions for modern challenges' },
  { title: 'Sustainability', description: 'Environmentally responsible operations' },
  { title: 'Expert Team', description: 'Industry-leading professionals' },
  { title: 'Client Focused', description: 'Tailored solutions for your needs' },
  { title: 'Global Network', description: 'Worldwide partnerships' },
  { title: 'Quality Assurance', description: 'Uncompromising standards' },
];

const WhyChooseUs = () => {
  const radius = 160;
  const center = 200;
  const containerRef = useRef(null);

  useEffect(() => {
    // This would be where you'd initialize GSAP animations in a real project
    // For now, we'll just ensure the container is visible
    if (containerRef.current) {
      containerRef.current.style.opacity = 1;
    }
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primaryText tracking-tight">
            Why Partner With Us
          </h2>
          <div className="mt-4 max-w-2xl mx-auto">
            <p className="text-lg text-primaryText">
              We combine operational excellence with sustainable innovation to deliver transformative solutions.
            </p>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="relative w-[420px] h-[420px] mx-auto mb-20 opacity-0 transition-opacity duration-1000"
        >
          {/* Animated Rings */}
          <div className="absolute inset-0 rounded-full border-[14px] border-primary/10 animate-spin-slow">
            <Arrow rotation="normal" color="rgba(11, 171, 215, 0.8)" />
          </div>
          
          <div className="absolute inset-12 rounded-full border-[10px] border-accent/15 animate-spin-slow-reverse">
            <Arrow rotation="reverse" color="rgba(73, 113, 76, 0.7)" />
          </div>
          
          <div className="absolute inset-24 rounded-full border-[6px] border-secondary/20 animate-spin-faster">
            <Arrow rotation="normal" color="rgba(251, 178, 78, 0.7)" />
          </div>

          {/* Center Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-36 h-36 rounded-full bg-white border border-gray-100 shadow-sm flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold text-primary">Core</h3>
              <h4 className="text-2xl font-bold text-accent">Values</h4>
            </div>
          </div>

          {/* Feature Nodes */}
          {features.map((feature, index) => {
            const angle = (index / features.length) * 2 * Math.PI - Math.PI / 2;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute w-40 text-center -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:z-30"
                style={{ top: y, left: x }}
              >
                <div className="group relative">
                  <div className="px-4 py-3 bg-primaryText text-white rounded-lg shadow-md font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-110">
                    {feature.title}
                  </div> 

                
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 px-3 py-2 bg-white rounded-md shadow-lg text-sm text-primaryText opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40">
                    {feature.description}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white transform rotate-45"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>

      <style jsx global>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinSlowReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes spinFaster {
          from { transform: rotate(0deg); }
          to { transform: rotate(720deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 25s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spinSlowReverse 30s linear infinite;
        }
        .animate-spin-faster {
          animation: spinFaster 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

const Arrow = ({ rotation, color }) => {
  return (
    <div
      className={`absolute top-0 left-1/2 -translate-x-1/2`}
      style={{ 
        transform: rotation === 'reverse' ? 'translateX(-50%) rotate(180deg)' : 'translateX(-50%)',
        filter: `drop-shadow(0 0 6px ${color})`
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L19 21H5L12 2Z" />
      </svg>
    </div>
  );
};

export default WhyChooseUs;