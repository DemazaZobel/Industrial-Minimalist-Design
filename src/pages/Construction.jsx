import React from 'react';
import Constraction from '../components/HeroConstruction.jsx';
import WhatWeOffer from '../components/ConstructionOffer.jsx';
import ConstructionStep from '../components/ConstructionSteps.jsx';
import ConstructionTestimonials from '../components/ConstructionTestimonials.jsx';
import ConstructionCTA from '../components/ConstructionCTA.jsx';
import ConstructionGallery from '../components/ConstructionGallary.jsx';

const ServicesPage = () => (
  <div className='bg-background min-h-screen'>
    <title>Services | Dankil</title>
    <meta name="description" content="Explore the industrial, construction, manufacturing, and import-export services offered by Dankil." />
    
    <WhatWeOffer />
    <ConstructionStep />
    <ConstructionGallery />
    
    <ConstructionCTA />
  </div>
);

export default ServicesPage;
