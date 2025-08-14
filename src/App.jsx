import { Header, Hero, About, Testimonials, Contact } from './components';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />

        {/* Services Section */}
        <section id="servicios" className="bg-dental-purple section-padding" aria-labelledby="servicios-title">
          <div className="container-custom">
            <h2 id="servicios-title" className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
              Servicios Dentales Especializados
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" role="list">
              <article className="bg-white p-6 rounded-2xl shadow-lg text-center" role="listitem">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Odontología General</h3>
                <p className="text-gray-600 text-xl">Cuidado dental integral para toda la familia con técnicas modernas y atención personalizada</p>
              </article>
              <article className="bg-white p-6 rounded-2xl shadow-lg text-center" role="listitem">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Cirugía Dental</h3>
                <p className="text-gray-600 text-xl">Procedimientos quirúrgicos especializados con tecnología avanzada y cuidado profesional</p>
              </article>
              <article className="bg-white p-6 rounded-2xl shadow-lg text-center" role="listitem">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ortodoncia</h3>
                <p className="text-gray-600 text-xl">Corrección y alineación dental profesional para una sonrisa perfecta</p>
              </article>
              <article className="bg-white p-6 rounded-2xl shadow-lg text-center" role="listitem">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Odontopediatría</h3>
                <p className="text-gray-600 text-xl">Atención dental especializada para niños en un ambiente cómodo y seguro</p>
              </article>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="sobre-mi" aria-labelledby="sobre-mi-title">
          <About
            title="Sobre Mí"
            description={[
              "Con una trayectoria de más de 30 años, he consolidado mi pasión por la odontología, profesión que elegí y que me ha permitido mantenerme en aprendizaje constante.",
              "Soy egresada de la Facultad de Odontología de la Universidad Autónoma de Zacatecas y me comprometo a ofrecer una atención de excelencia.",
              "Mi enfoque se centra en la actualización continua y en la aplicación de las técnicas más avanzadas para garantizar resultados de alta calidad."
            ]}
            imageSrc="/images/doctora-torres.jpeg"
            imageAlt="Dra. Patricia Torres - Cirujano Dentista con más de 30 años de experiencia"
            imagePosition="right"
            backgroundColor="bg-white"
          />
        </section>

        {/* Community Service Section */}
        <section aria-labelledby="servicio-comunidad-title">
          <About
            title="Servicio a la Comunidad"
            description={[
              "Mi pasión por la odontología va más allá del consultorio.",
              "A lo largo de mi carrera, he tenido el privilegio de ser parte de brigadas médicas altruistas, una labor que me ha permitido llevar atención dental a las personas que más lo necesitan.",
              "Estas experiencias, especialmente en zonas remotas como la Sierra de Chihuahua, me han enseñado que una sonrisa sana puede transformar vidas.",
              "Este compromiso es una parte fundamental de mi misión profesional y personal."
            ]}
            imageSrc="/images/doctora-torres.jpeg"
            imageAlt="Dra. Patricia Torres brindando servicio dental comunitario en brigadas médicas"
            imagePosition="left"
            backgroundColor="bg-white"
          />
        </section>

        {/* Testimonials Section */}
        <section aria-labelledby="testimonios-title">
          <Testimonials
            title="Pacientes Felices"
            image="/images/doctora-torres.jpeg"
          />
        </section>

        {/* Contact Section */}
        <section id="contacto" aria-labelledby="contacto-title">
          <Contact />
        </section>
      </main>

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
