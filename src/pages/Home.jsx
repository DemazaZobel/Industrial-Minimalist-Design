import React from 'react';
import HeroHome from '../components/HeroHome';
import Services from '../components/Services';
import Projects from '../components/ProjectsCard';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustedBy from '../components/TrustedBy';
import ContactUs from '../components/ContactForm';
import GalleryPage from '../components/Gallary';

const Home = () => (
  <div className="bg-background">
    <title>DANKAL | Home</title>
    <meta name="description" content="Dankil Industrial, Construction, Manufacturing, and Import-Export Services" />
    <HeroHome />
    <About />
    <Services />
    <Projects />
    <WhyChooseUs />
    <GalleryPage />
    <TrustedBy />
    <Testimonials />
    <ContactUs />
  </div>
);

export default Home;
