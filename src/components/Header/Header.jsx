import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-dental-blue text-white">
      <nav className="container-custom section-padding">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-32 h-16 flex items-center justify-center">
              <img 
                src="/images/logo-dentista-torres.png" 
                alt="Logo Dra. Patricia Torres - Cirujano Dentista"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre-mi')} 
              className="text-dental-title hover:text-white transition-colors duration-200 font-medium"
            >
              Sobre mí
            </button>
            <button 
              onClick={() => scrollToSection('servicios')} 
              className="text-dental-title hover:text-white transition-colors duration-200 font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-dental-title hover:text-white transition-colors duration-200 font-medium"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-dental-title"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-dental-subtitle animate-fadeIn">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('sobre-mi')} 
                className="text-dental-title hover:text-white transition-colors duration-200 font-medium text-left py-2"
              >
                Sobre mí
              </button>
              <button 
                onClick={() => scrollToSection('servicios')} 
                className="text-dental-title hover:text-white transition-colors duration-200 font-medium text-left py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="text-dental-title hover:text-white transition-colors duration-200 font-medium text-left py-2"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
