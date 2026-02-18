import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
             <h2 className="text-2xl font-bold font-display">
              <span className="text-white">Spanish with </span>
              <span className="text-red-400">Ignacio</span>
            </h2>
            <p className="mt-2 text-blue-200 text-sm">
              Aprende español real, para el mundo real.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-blue-800 pt-8 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Spanish with Ignacio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;