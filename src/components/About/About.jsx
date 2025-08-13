import React from 'react';

const About = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  imagePosition = 'right', // 'left' o 'right'
  backgroundColor = 'bg-white',
  textColor = 'text-gray-600',
  titleColor = 'text-gray-800'
}) => {
  const isImageLeft = imagePosition === 'left';
  
  return (
    <section className={`${backgroundColor} section-padding`}>
      <div className="container-custom">
        {/* Contenido en dos columnas */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Columna de texto */}
          <div className={`space-y-6 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Título alineado a la izquierda */}
            <h2 className={`text-3xl lg:text-4xl font-bold text-left ${titleColor} font-inter-semibold mb-6`}>
              {title}
            </h2>
            
            {/* Párrafos de texto */}
            {description.map((paragraph, index) => (
              <p key={index} className={`${textColor} font-inter-normal text-xl leading-relaxed`}>
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Columna de imagen */}
          <div className={`flex justify-center ${isImageLeft ? 'lg:justify-start lg:order-1' : 'lg:justify-end lg:order-2'}`}>
            <div className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg aspect-[5/5] overflow-hidden rounded-xl shadow-lg">
              <img 
                src={imageSrc} 
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
