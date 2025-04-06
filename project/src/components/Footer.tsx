import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4A3428] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">© 2024 Кофемания. Все права защищены.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#D4A574] transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-[#D4A574] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-[#D4A574] transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;