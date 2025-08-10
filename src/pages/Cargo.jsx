import React from 'react';
import Globe from '../components/Globe.jsx';
import CargoService from '../components/CargoService.jsx';
import CallToAction from '../components/CargoCallToAction.jsx';
import Certifications from '../components/CargoCertification.jsx';
import ShippingMap from '../components/ShippingMap.jsx';

const Cargo = () => (
  <div className="mt-[-74px] bg-background">
    <title>About Us | DANKAL</title>
    <meta name="description" content="Learn more about Dankil, our mission, vision, and leadership." />
   
    <Globe />
    <CargoService />
    <Certifications />
    <ShippingMap />
    <CallToAction />
  </div>
);

export default Cargo;
