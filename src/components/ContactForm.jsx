import React from 'react';
import park from '../assets/office.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const PhoneSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline mr-3 text-secondary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    width={24} height={24}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V9a1 1 0 01-1 1H7a10 10 0 0010 10v-2a1 1 0 011-1h1a1 1 0 011 1v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
    />
  </svg>
);

const EmailSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline mr-3 text-secondary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    width={24} height={24}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8-4H8m10 8v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2a2 2 0 012-2h8a2 2 0 012 2z" />
  </svg>
);

const LocationSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline mr-3 text-secondary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    width={24} height={24}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const ContactUs = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${park})` }}
        aria-hidden="true"
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6 py-20 sm:py-28 md:py-36 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 sm:mb-8">Contact Us</h2>
        <p className="mb-12 sm:mb-16 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
          Let’s start a conversation. Reach out to us using the details below.
        </p>

        {/* Contact Info */}
        <div className="space-y-5 mb-12 text-base sm:text-lg font-medium max-w-xs mx-auto">
          <p className="flex items-center justify-center"><PhoneSVG /> +251 912 345 678</p>
          <p className="flex items-center justify-center"><EmailSVG /> info@dankilindustries.com</p>
          <p className="flex items-center justify-center"><LocationSVG /> Addis Ababa, Ethiopia</p>
        </div>

        {/* CTA Button with floating animation */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contact"
            className="bg-primary/70 hover:bg-secondary transition-all duration-300 px-8 sm:px-12 py-3 sm:py-4 rounded-full text-white font-semibold shadow-xl"
          >
            Connect With Us
          </Link>
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-8 md:gap-12 p-8 md:p-12 text-2xl md:text-3xl justify-center text-button relative z-10 -mt-40">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-secondary transition-transform transform hover:scale-110 p-3 md:p-4">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-secondary transition-transform transform hover:scale-110 p-3 md:p-4">
          <FaLinkedinIn />
        </a>
        <a href="https://t.me/yourtelegramhandle" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-secondary transition-transform transform hover:scale-110 p-3 md:p-4">
          <FaTelegramPlane />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-secondary transition-transform transform hover:scale-110 p-3 md:p-4">
          <FaWhatsapp />
        </a>
      
      </div>
    </section>
  );
};

export default ContactUs;
