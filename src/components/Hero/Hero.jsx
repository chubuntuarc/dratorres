import React from 'react';
import { whatsappConfig } from '../../config/whatsapp';

const Hero = () => {
  const handleWhatsAppClick = () => {
    whatsappConfig.openWhatsApp();
  };

  return (
    <section className="bg-dental-blue text-white">
      <div className="container-custom py-0 px-8 pb-12 sm:pb-16 lg:pt-4 lg:pb-8">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-center min-h-[500px] lg:min-h-[500px]">
          {/* Left Column - Text Content (Hidden on Mobile) */}
          <div className="hidden lg:block space-y-6 lg:space-y-8 text-left order-1 lg:order-1">
            <div className="space-y-2 lg:space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-hero font-inter-normal leading-tight">
                Dra. Patricia Torres
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-subtitle font-inter-thin italic">
                Cirujano Dentista
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slogan font-inter-light max-w-lg leading-relaxed" style={{ textWrap: 'balance' }}>
              Transformando sonrisas, compartiendo alegría.
            </p>

            <div className="pt-4 lg:pt-6">
              <button
                onClick={handleWhatsAppClick}
                className="btn-hero font-inter-normal text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-200"
              >
                <span>Agendar Cita</span>
              </button>
            </div>
          </div>

          {/* Center Column - Slogan (Mobile) and Dental Image */}
          <div className="flex flex-col items-center lg:justify-end order-1 lg:order-2 mb-4 lg:mb-0 col-span-1 lg:col-span-1">
            {/* Slogan visible solo en móvil */}
            <div className="lg:hidden text-center mb-6">
              <p className="text-xl sm:text-2xl text-slogan font-inter-light leading-relaxed" style={{ textWrap: "balance" }}>
                Transformando sonrisas, compartiendo alegría.
              </p>
            </div>

            <div className="relative w-full lg:max-w-lg xl:max-w-xl">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
                {/* Real Dental Image */}
                <img
                  src="/images/hero.png"
                  alt="Dra. Patricia Torres trabajando con un paciente en consulta dental"
                  className="w-full h-80 sm:h-96 md:h-[450px] lg:h-96 xl:h-[500px] object-cover object-center"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 bg-pink-400 rounded-full animate-pulse delay-1000 shadow-lg"></div>
            </div>
          </div>

          {/* Bottom Section - Button (Mobile Only) */}
          <div className="lg:hidden col-span-1 lg:col-span-2 order-2 lg:order-3 pt-2 lg:pt-0">
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={handleWhatsAppClick}
                className="btn-hero font-inter-normal text-lg sm:text-xl lg:text-lg w-full max-w-lg px-8 sm:px-10 lg:px-8 py-4 sm:py-5 lg:py-4 flex items-center justify-center space-x-2 hover:scale-105 transition-transform duration-200"
              >
                <span>Agendar Cita</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
