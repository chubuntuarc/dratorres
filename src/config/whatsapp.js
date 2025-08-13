// Configuración de WhatsApp para la Dra. Patricia Torres
export const whatsappConfig = {
  // Número de WhatsApp (formato internacional)
  phoneNumber: '+526641234567', // Cambiar por el número real de la Dra. Torres
  
  // Mensaje predefinido para agendar cita
  defaultMessage: 'Hola Dra. Patricia Torres, me gustaría agendar una cita dental. ¿Podría ayudarme?',
  
  // URL base de WhatsApp Web
  baseUrl: 'https://wa.me',
  
  // Función para generar la URL de WhatsApp
  generateWhatsAppUrl: (customMessage = null) => {
    const message = customMessage || whatsappConfig.defaultMessage;
    const encodedMessage = encodeURIComponent(message);
    return `${whatsappConfig.baseUrl}/${whatsappConfig.phoneNumber}?text=${encodedMessage}`;
  },
  
  // Función para abrir WhatsApp
  openWhatsApp: (customMessage = null) => {
    const url = whatsappConfig.generateWhatsAppUrl(customMessage);
    window.open(url, '_blank');
  }
};

export default whatsappConfig;
