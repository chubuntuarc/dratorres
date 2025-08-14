import { Header, Hero, About, Testimonials, Contact } from './components';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* Services Section */}
      <section id="servicios" className="bg-dental-purple section-padding">
        <div className="container-custom">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">Servicios</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Odontología General</h3>
              <p className="text-gray-600 text-xl">Cuidado dental integral para toda la familia</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Cirugía Dental</h3>
              <p className="text-gray-600 text-xl">Tratamientos de cirugía dental</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ortodoncia</h3>
              <p className="text-gray-600 text-xl">Alinea tus dientes de forma profesional</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pediatría</h3>
              <p className="text-gray-600 text-xl">Atención dental para niños</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <About
        title="Sobre Mí"
        description={[
          "Con una trayectoria de más de 30 años, he consolidado mi pasión por la odontología, profesión que elegí y que me ha permitido mantenerme en aprendizaje constante.",
          "Soy egresada de la Facultad de Odontología de la Universidad Autónoma de Zacatecas y me comprometo a ofrecer una atención de excelencia.",
          "Mi enfoque se centra en la actualización continua y en la aplicación de las técnicas más avanzadas para garantizar resultados de alta calidad."
        ]}
        imageSrc="/images/doctora-torres.jpeg"
        imageAlt="Dra. Patricia Torres - Cirujano Dentista"
        imagePosition="right"
        backgroundColor="bg-white"
      />

      {/* Community Service Section */}
      <About
        title="Servicio a la Comunidad"
        description={[
          "Mi pasión por la odontología va más allá del consultorio.",
          "A lo largo de mi carrera, he tenido el privilegio de ser parte de brigadas médicas altruistas, una labor que me ha permitido llevar atención dental a las personas que más lo necesitan.",
          "Estas experiencias, especialmente en zonas remotas como la Sierra de Chihuahua, me han enseñado que una sonrisa sana puede transformar vidas.",
          "Este compromiso es una parte fundamental de mi misión profesional y personal."
        ]}
        imageSrc="/images/doctora-torres.jpeg"
        imageAlt="Servicio a la comunidad dental"
        imagePosition="left"
        backgroundColor="bg-white"
      />

      {/* Testimonials Section */}
      <Testimonials
        title="Pacientes Felices"
        image="/images/dentista.png"
      />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-dental-blue text-white py-12">
        <div className="container-custom">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="w-48 h-24 flex items-center justify-center">
                <img
                  src="/images/logo-dentista-torres.png"
                  alt="Logo Dra. Patricia Torres - Cirujano Dentista"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Copyright */}
            <p className="text-dental-subtitle text-sm">
              © 2025 Todos los derechos reservados. Política de Privacidad
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
