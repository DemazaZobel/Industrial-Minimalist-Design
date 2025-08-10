import React, { useRef, useEffect, useState } from 'react';

const features = [
  { title: 'Innovation', description: 'Cutting-edge solutions for modern challenges' },
  { title: 'Sustainability', description: 'Environmentally responsible operations' },
  { title: 'Expert Team', description: 'Industry-leading professionals' },
  { title: 'Client Focused', description: 'Tailored solutions for your needs' },
  { title: 'Global Network', description: 'Worldwide partnerships' },
  { title: 'Quality Assurance', description: 'Uncompromising standards' },
];

const WhyChooseUs = () => {
  // Responsive radius and center based on screen width
  const [dimensions, setDimensions] = useState({ radius: 160, center: 200, containerSize: 420 });

  useEffect(() => {
    function updateDimensions() {
      if (window.innerWidth < 640) {
        // Mobile - a bit bigger than before
        setDimensions({ radius: 130, center: 170, containerSize: 360 });
      } else if (window.innerWidth < 1024) {
        // Tablet - medium size
        setDimensions({ radius: 140, center: 180, containerSize: 380 });
      } else {
        // Desktop - original size
        setDimensions({ radius: 160, center: 200, containerSize: 420 });
      }
    }

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.opacity = 1;
    }
  }, []);

  const { radius, center, containerSize } = dimensions;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20 px-4">
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
          className="relative mx-auto mb-20 opacity-0 transition-opacity duration-1000"
          style={{ width: containerSize, height: containerSize }}
        >
          {/* Animated Rings */}
          <div
            className="absolute rounded-full animate-spin-slow"
            style={{
              inset: 0,
              borderWidth: window.innerWidth < 640 ? '10px' : '14px',
              borderColor: 'rgba(11, 171, 215, 0.1)',
              borderStyle: 'solid',
            }}
          >
            <Arrow rotation="normal" color="rgba(11, 171, 215, 0.8)" size={window.innerWidth < 640 ? 26 : 32} />
          </div>

          <div
            className="absolute rounded-full animate-spin-slow-reverse"
            style={{
              inset: window.innerWidth < 640 ? '36px' : '48px',
              borderWidth: window.innerWidth < 640 ? '8px' : '10px',
              borderColor: 'rgba(73, 113, 76, 0.15)',
              borderStyle: 'solid',
            }}
          >
            <Arrow rotation="reverse" color="rgba(73, 113, 76, 0.7)" size={window.innerWidth < 640 ? 26 : 32} />
          </div>

          <div
            className="absolute rounded-full animate-spin-faster"
            style={{
              inset: window.innerWidth < 640 ? '72px' : '96px',
              borderWidth: window.innerWidth < 640 ? '4px' : '6px',
              borderColor: 'rgba(251, 178, 78, 0.2)',
              borderStyle: 'solid',
            }}
          >
            <Arrow rotation="normal" color="rgba(251, 178, 78, 0.7)" size={window.innerWidth < 640 ? 26 : 32} />
          </div>

          {/* Center Element */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center bg-white border border-gray-100 shadow-sm rounded-full"
            style={{
              width: window.innerWidth < 640 ? 160 : 144,
              height: window.innerWidth < 640 ? 160 : 144,
            }}
          >
            <h3 className={`font-bold ${window.innerWidth < 640 ? 'text-2xl' : 'text-2xl'} text-primary`}>Core</h3>
            <h4 className={`font-bold ${window.innerWidth < 640 ? 'text-2xl' : 'text-2xl'} text-accent`}>Values</h4>
          </div>

          {/* Feature Nodes */}
          {features.map((feature, index) => {
            const angle = (index / features.length) * 2 * Math.PI - Math.PI / 2;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);

            return (
              <div
                key={index}
                className="absolute text-center -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:z-30"
                style={{ top: y, left: x, width: window.innerWidth < 640 ? 110 : 160 }}
              >
                <div className="group relative">
                  <div className={`px-4 py-3 rounded-lg shadow-md font-medium text-sm text-white transition-all duration-300 hover:shadow-lg hover:scale-110 bg-primaryText`}>
                    {feature.title}
                  </div>

                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-white rounded-md shadow-lg text-sm text-primaryText opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-40"
                    style={{
                      maxWidth: window.innerWidth < 640 ? '11rem' : '12rem',
                      width: 'auto',
                      whiteSpace: 'normal',
                    }}
                  >
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

const Arrow = ({ rotation, color, size = 32 }) => {
  return (
    <div
      className={`absolute top-0 left-1/2 -translate-x-1/2`}
      style={{
        transform: rotation === 'reverse' ? 'translateX(-50%) rotate(180deg)' : 'translateX(-50%)',
        filter: `drop-shadow(0 0 6px ${color})`,
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
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
