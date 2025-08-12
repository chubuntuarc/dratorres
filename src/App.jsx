import { Header, Hero, About } from './components';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Services Section */}
      <section id="servicios" className="bg-dental-purple section-padding">
        <div className="container-custom">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🦷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Odontología General</h3>
              <p className="text-gray-600">Cuidado dental integral para toda la familia</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Estética Dental</h3>
              <p className="text-gray-600">Transforma tu sonrisa con tratamientos modernos</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🦷</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ortodoncia</h3>
              <p className="text-gray-600">Alinea tus dientes de forma profesional</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <About 
        title="Sobre Mí"
        description={[
          "Lorem ipsum texto de ejemplo aqui solamente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Lorem ipsum texto de ejemplo aqui solamente. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Lorem ipsum texto de ejemplo aqui solamente. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ]}
        imageSrc="/images/dentista.png"
        imageAlt="Dra. Patricia Torres - Cirujano Dentista"
        imagePosition="right"
        backgroundColor="bg-white"
      />

      {/* Community Service Section */}
      <About 
        title="Servicio a la Comunidad"
        description={[
          "Lorem ipsum texto de ejemplo aqui solamente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "Lorem ipsum texto de ejemplo aqui solamente. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Lorem ipsum texto de ejemplo aqui solamente. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ]}
        imageSrc="/images/comunidad.png"
        imageAlt="Servicio a la comunidad dental"
        imagePosition="left"
        backgroundColor="bg-white"
      />

      {/* Additional Content Section */}
      <section className="bg-dental-purple section-padding">
        <div className="container-custom">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">Por Qué Elegirnos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🌟</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Experiencia</h3>
              <p className="text-gray-600">Más de 15 años de experiencia en odontología</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">💙</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compromiso</h3>
              <p className="text-gray-600">Comprometidos con la salud dental de nuestra comunidad</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tecnología</h3>
              <p className="text-gray-600">Equipamiento moderno y técnicas avanzadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-dental-purple section-padding">
        <div className="container-custom">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">Contacto</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Información de Contacto</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📍</span>
                      <span className="text-gray-600">Av. Principal 123, Ciudad</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📞</span>
                      <span className="text-gray-600">+1 234 567 8900</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">✉️</span>
                      <span className="text-gray-600">info@drapatriciatorres.com</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Horarios</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Lunes - Viernes:</strong> 9:00 AM - 6:00 PM</p>
                    <p><strong>Sábados:</strong> 9:00 AM - 2:00 PM</p>
                    <p><strong>Domingos:</strong> Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dental-blue text-white section-padding">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Dra. Patricia Torres</h3>
            <p className="text-dental-subtitle mb-6">Transformando sonrisas, compartiendo alegría</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-dental-title hover:text-white transition-colors duration-200">
                <span className="text-2xl">📱</span>
              </a>
              <a href="#" className="text-dental-title hover:text-white transition-colors duration-200">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-dental-title hover:text-white transition-colors duration-200">
                <span className="text-2xl">📷</span>
              </a>
            </div>
            <div className="mt-8 pt-6 border-t border-dental-subtitle">
              <p className="text-dental-subtitle">&copy; 2024 Dra. Patricia Torres. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
