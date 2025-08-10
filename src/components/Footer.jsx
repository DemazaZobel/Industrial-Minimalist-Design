import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-6 z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-base font-semibold mb-2">Dankal Industries</h3>
          <p className="text-xs mb-3">
            Empowering growth across manufacturing, construction, and global trade through innovative solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-white text-base font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-xs">
            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="/projects" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <h3 className="text-white text-base font-semibold mb-2">Contact Us</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center justify-center md:justify-end">
              <Mail className="w-3 h-3 mr-1 text-accent" />
              <a href="mailto:info@dankal.com" className="hover:text-white transition-colors">
                info@dankalindustrial.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <Phone className="w-3 h-3 mr-1 text-accent" />
              <a href="tel:+1234567890" className="hover:text-white transition-colors">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-end">
              <MapPin className="w-3 h-3 mr-1 text-accent" />
              <span>123 Industrial Way, Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-3 text-center">
        <p className="text-[10px] text-gray-500">
          &copy; {new Date().getFullYear()} Dankal Industries PLC. All rights reserved.
        </p>
        <p className="text-[10px] mt-0.5 text-gray-600">
          Registered in Ethiopia No. 12345678 | VAT No. GB123456789
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
