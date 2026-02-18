import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

interface HeaderProps {
  activeSection: SectionId;
  scrollToSection: (section: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', id: SectionId.HOME, isButton: false },
    { label: 'Recursos', id: SectionId.RESOURCES, isButton: false },
    { label: 'Juegos', id: SectionId.GAMES, isButton: true },
  ];

  const handleNavClick = (id: SectionId) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section matching the image */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-baseline"
            onClick={() => handleNavClick(SectionId.HOME)}
          >
            <h1 className="text-3xl font-extrabold tracking-tight">
              <span className="text-brand-blue">Spanish with </span>
              <span className="text-brand-red">Ignacio</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  text-lg font-semibold transition-colors duration-200 px-4 py-2 rounded-md
                  ${item.isButton 
                    ? 'bg-red-50 text-brand-red hover:bg-red-100' // The "Juegos" styling
                    : 'text-slate-600 hover:text-brand-blue'
                  }
                  ${!item.isButton && activeSection === item.id ? 'text-brand-blue' : ''}
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-brand-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`
                  block w-full text-left px-3 py-3 rounded-md text-base font-medium
                  ${item.isButton 
                    ? 'bg-red-50 text-brand-red font-bold' 
                    : 'text-slate-600 hover:bg-gray-50 hover:text-brand-blue'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;