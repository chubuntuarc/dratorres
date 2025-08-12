import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-dental-blue text-white">
        <nav className="container-custom section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold">Dra. Patricia Torres</h1>
                <p className="text-sm text-blue-200">Cirujano Dentista</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('sobre-mi')} className="hover:text-blue-200 transition-colors">
                Sobre mi
              </button>
              <button onClick={() => scrollToSection('servicios')} className="hover:text-blue-200 transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="hover:text-blue-200 transition-colors">
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-blue-700">
              <div className="flex flex-col space-y-4 pt-4">
                <button onClick={() => scrollToSection('sobre-mi')} className="hover:text-blue-200 transition-colors">
                  Sobre mi
                </button>
                <button onClick={() => scrollToSection('servicios')} className="hover:text-blue-200 transition-colors">
                  Servicios
                </button>
                <button onClick={() => scrollToSection('contacto')} className="hover:text-blue-200 transition-colors">
                  Contacto
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold">Dra. Patricia Torres</h2>
              <h3 className="text-2xl lg:text-3xl text-blue-200">Cirujano Dentista</h3>
              <p className="text-lg text-blue-100">Transformando sonrisas, compartiendo alegría.</p>
              <button className="btn-secondary text-dental-blue">
                Agendar Cita
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🦷</div>
                  <p className="text-sm">Imagen del dentista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="servicios" className="bg-dental-purple section-padding">
        <div className="container-custom text-center">
          <div className="mb-12">
            <p className="text-lg text-gray-600">Celebrando</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">40 Años de Servicio</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                number: "01",
                title: "Precise laser treatment",
                description: "Best suited and prescribed for decay treatment and last few era"
              },
              {
                number: "02",
                title: "Tooth pulled extraction",
                description: "Painless extractions are almost always to prevent further pain."
              },
              {
                number: "03",
                title: "Maxillofacial surgery",
                description: "Treated in such a way that limits the spread of drastic periodontal disease"
              },
              {
                number: "04",
                title: "Bridges and implants",
                description: "Best suited and prescribed for decay treatment and lost few era."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-8 h-8 bg-dental-purple rounded-full flex items-center justify-center text-sm font-semibold text-gray-600 mb-4 mx-auto">
                  {service.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="sobre-mi" className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">Sobre Mí</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-gray-600">Lorem ipsum texto de ejemplo aqui solamente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-gray-600">Lorem ipsum texto de ejemplo aqui solamente. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-gray-600">Lorem ipsum texto de ejemplo aqui solamente. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">👩‍⚕️</div>
                  <p className="text-sm">Dra. Patricia Torres</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Service Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">Servicio a la Comunidad</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-300 to-green-300 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">🏥</div>
                  <p className="text-sm">Servicio comunitario</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">Lorem ipsum texto de ejemplo aqui solamente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="text-gray-600">Lorem ipsum texto de ejemplo aqui solamente. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="text-gray-600">Lorem ipsum texto de ejemplo aqui solamente. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="bg-dental-purple section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <p className="text-gray-600">Lorem ipsum texto de ejemplo aqui solamente. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <p className="text-gray-600">Lorem ipsum texto de ejemplo aqui solamente. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-2">👶</div>
                  <p className="text-sm">Atención pediátrica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-dental-purple section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Dirección</h4>
                  <p className="text-gray-600">Blvd. Agua Caliente 11300-227, Plaza Campestre<br />Colonia Aviación, Tijuana, B.C.N, Mexico 22014</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Teléfonos</h4>
                  <p className="text-gray-600">USA +1 (619) 713 7193</p>
                  <p className="text-gray-600">México +52 (664) 290 1000</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p>Mapa de Google Maps</p>
                </div>
              </div>
              <button className="absolute bottom-4 right-4 btn-primary">
                Agendar Cita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dental-blue text-white section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Dra. Patricia Torres</h3>
                <p className="text-sm text-blue-200">Cirujano Dentista</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-200">© 2025 Todos los derechos reservados.</p>
              <button className="text-blue-200 hover:text-white transition-colors">Política de Privacidad</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
