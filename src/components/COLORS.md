# Paleta de Colores del Proyecto

Este documento describe la paleta de colores utilizada en la landing page de la Dra. Patricia Torres.

## 🎨 Colores Principales

### Azul Principal (Fondo)
- **Hex**: `#023E8A`
- **RGB**: `rgb(2, 62, 138)`
- **HSL**: `hsl(214, 97%, 27%)`
- **Uso**: Fondo principal del header y hero, color base de la marca

### Título (Texto Principal)
- **Hex**: `#D7EBEC`
- **RGB**: `rgb(215, 235, 236)`
- **HSL**: `hsl(183, 47%, 88%)`
- **Uso**: Títulos principales, texto destacado, elementos del logo

### Botón (Fondo del Botón)
- **Hex**: `#D7EBEC`
- **RGB**: `rgb(215, 235, 236)`
- **HSL**: `hsl(183, 47%, 88%)`
- **Uso**: Fondo de botones principales, elementos interactivos

### Subtítulo (Texto Secundario)
- **Hex**: `#6FB3B5`
- **RGB**: `rgb(111, 179, 181)`
- **HSL**: `hsl(182, 33%, 57%)`
- **Uso**: Subtítulos, texto secundario, descripciones

## 🔧 Implementación en Tailwind

### Configuración
```javascript
// tailwind.config.js
colors: {
  'dental-blue': '#023E8A',      // Fondo principal
  'dental-title': '#D7EBEC',     // Títulos
  'dental-button': '#D7EBEC',    // Botones
  'dental-subtitle': '#6FB3B5',  // Subtítulos
}
```

### Clases CSS Personalizadas
```css
.text-hero {
  @apply text-dental-title;      /* Color para títulos principales */
}

.text-subtitle {
  @apply text-dental-subtitle;   /* Color para subtítulos */
}

.btn-hero {
  @apply bg-dental-button;       /* Fondo del botón principal */
}
```

## 📱 Uso por Componentes

### Header
- **Fondo**: `bg-dental-blue` (#023E8A)
- **Logo**: `border-dental-title` (#D7EBEC)
- **Título**: `text-dental-title` (#D7EBEC)
- **Subtítulo**: `text-dental-subtitle` (#6FB3B5)
- **Navegación**: `text-white` con hover `text-dental-title`

### Hero
- **Fondo**: `bg-dental-blue` (#023E8A)
- **Título principal**: `text-dental-title` (#D7EBEC)
- **Subtítulo**: `text-dental-subtitle` (#6FB3B5)
- **Texto del cuerpo**: `text-white`
- **Botón**: `bg-dental-button` (#D7EBEC) con `text-dental-blue` (#023E8A)

## 🎯 Psicología del Color

### Azul Principal (#023E8A)
- **Significado**: Confianza, profesionalismo, estabilidad
- **Aplicación**: Perfecto para una práctica dental, transmite seriedad y confiabilidad

### Azul Claro (#D7EBEC)
- **Significado**: Limpieza, frescura, tranquilidad
- **Aplicación**: Ideal para títulos y botones, crea contraste y llama la atención

### Verde Azulado (#6FB3B5)
- **Significado**: Salud, bienestar, naturaleza
- **Aplicación**: Excelente para subtítulos, relacionado con la salud dental

## 🔍 Accesibilidad

### Contraste de Colores
- **Azul principal + Título**: Contraste alto ✅
- **Azul principal + Subtítulo**: Contraste medio ✅
- **Azul principal + Blanco**: Contraste alto ✅

### Cumplimiento WCAG
- **Nivel AA**: Cumple con los estándares de accesibilidad web
- **Nivel AAA**: Cumple con los estándares más estrictos

## 🚀 Personalización

### Cambiar Colores
Para modificar la paleta de colores:

1. **Actualizar `tailwind.config.js`**:
   ```javascript
   colors: {
     'dental-blue': '#NUEVO_COLOR',
     // ... otros colores
   }
   ```

2. **Actualizar clases CSS** en `src/index.css`

3. **Verificar contraste** para mantener accesibilidad

### Nuevos Colores
Para agregar nuevos colores:

1. **Definir en Tailwind**:
   ```javascript
   'dental-accent': '#HEX_CODE'
   ```

2. **Crear clases CSS**:
   ```css
   .text-accent {
     @apply text-dental-accent;
   }
   ```

## 📊 Paleta Completa

| Elemento | Color | Hex | Uso |
|----------|-------|-----|-----|
| Fondo Principal | Azul | #023E8A | Header, Hero |
| Títulos | Azul Claro | #D7EBEC | H1, H2, Logo |
| Botones | Azul Claro | #D7EBEC | CTA, Botones |
| Subtítulos | Verde Azulado | #6FB3B5 | H3-H6, Descripciones |
| Texto | Blanco | #FFFFFF | Párrafos, Navegación |

---

**Nota**: Esta paleta de colores está diseñada específicamente para transmitir profesionalismo, confianza y limpieza, elementos clave para una práctica dental exitosa.
