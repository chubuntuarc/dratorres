import { whatsappConfig } from '../../config/whatsapp';

const Contact = () => {
  const handleScheduleAppointment = () => {
    whatsappConfig.openWhatsApp();
  };

  return (
    <section id="contacto" className="bg-dental-purple section-padding">
      <div className="container-custom">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">Contacto</h2>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Dirección</h3>
                <div className="text-gray-600 text-lg leading-relaxed">
                  <p>Av. de las Industrias 17107B</p>
                  <p>Dumas, Rio Sacramento Nte</p>
                  <p>31137 Chihuahua, Chih.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Teléfono</h3>
                <div className="text-gray-600 text-lg space-y-2">
                  <p>(614) 198 8652</p>
                </div>
              </div>
            </div>

            {/* Mapa y botón */}
            <div className="relative">
              {/* Placeholder para el mapa - puedes reemplazar con un mapa real */}
              <div className="bg-gray-200 rounded-lg h-64 lg:h-80 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center"
                  style={{ backgroundImage: 'url(/images/map.webp)' }}
                />

                {/* Botón de Agendar Cita */}
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={handleScheduleAppointment}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Agendar Cita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;