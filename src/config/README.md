# Configuración de WhatsApp

Este directorio contiene la configuración para la funcionalidad de WhatsApp en la landing page.

## Archivos

### `whatsapp.js`
Configuración principal para la funcionalidad de WhatsApp.

## Configuración

### Número de Teléfono
```javascript
phoneNumber: '+526641234567' // Cambiar por el número real de la Dra. Torres
```

**Formato requerido:**
- Debe incluir el código de país (+52 para México)
- Sin espacios ni caracteres especiales
- Solo números y el símbolo +

### Mensaje Predefinido
```javascript
defaultMessage: 'Hola Dra. Patricia Torres, me gustaría agendar una cita dental. ¿Podría ayudarme?'
```

**Personalización:**
- Puedes cambiar el mensaje por defecto
- Se codifica automáticamente para URLs
- Soporta emojis y caracteres especiales

## Uso

### Función Básica
```javascript
import { whatsappConfig } from './config/whatsapp';

// Abrir WhatsApp con mensaje por defecto
whatsappConfig.openWhatsApp();

// Abrir WhatsApp con mensaje personalizado
whatsappConfig.openWhatsApp('Mensaje personalizado aquí');
```

### Generar URL
```javascript
// Obtener URL de WhatsApp
const url = whatsappConfig.generateWhatsAppUrl();

// Con mensaje personalizado
const customUrl = whatsappConfig.generateWhatsAppUrl('Mensaje personalizado');
```

## Funcionalidades

### ✅ **Apertura Automática**
- Abre WhatsApp Web en nueva pestaña
- Funciona en desktop y mobile
- Redirige a la app en dispositivos móviles

### ✅ **Mensaje Predefinido**
- Texto profesional y amigable
- Fácil de personalizar
- Codificación automática de caracteres

### ✅ **Configuración Centralizada**
- Un solo lugar para cambiar el número
- Fácil mantenimiento
- Reutilizable en otros componentes

## Personalización

### Cambiar Número de Teléfono
1. Editar `src/config/whatsapp.js`
2. Cambiar `phoneNumber` por el número real
3. Guardar y reiniciar el servidor

### Cambiar Mensaje por Defecto
1. Editar `src/config/whatsapp.js`
2. Modificar `defaultMessage`
3. Guardar cambios

### Agregar Más Funcionalidades
```javascript
// Ejemplo: Diferentes tipos de mensajes
export const messageTemplates = {
  appointment: 'Hola, me gustaría agendar una cita dental.',
  consultation: 'Hola, tengo una consulta dental.',
  emergency: 'Hola, necesito atención dental urgente.'
};
```

## Integración

### Componente Hero
- Botón "Agendar Cita" abre WhatsApp
- Funciona en desktop y mobile
- Icono de teléfono para mejor UX

### Otros Componentes
- Se puede usar en cualquier parte de la app
- Importar `whatsappConfig` donde sea necesario
- Mantiene consistencia en toda la aplicación

## Notas Importantes

### Formato del Número
- **Correcto**: `+526641234567`
- **Incorrecto**: `+52 664 123 4567` (con espacios)
- **Incorrecto**: `6641234567` (sin código de país)

### Mensajes
- Se codifican automáticamente para URLs
- Soportan emojis y caracteres especiales
- Longitud recomendada: menos de 200 caracteres

### Compatibilidad
- Funciona en todos los navegadores modernos
- Redirige a la app en dispositivos móviles
- Abre WhatsApp Web en desktop
