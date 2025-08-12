# Tipografía del Proyecto - Fuente Inter

Este proyecto utiliza la fuente **Inter** como tipografía principal, una fuente sans-serif moderna y altamente legible diseñada específicamente para interfaces digitales.

## 🌐 Fuente Inter

- **Fuente**: [Inter en Google Fonts](https://fonts.google.com/specimen/Inter)
- **Diseñador**: Rasmus Andersson
- **Estilo**: Sans-serif geométrico
- **Optimizada para**: Pantallas y dispositivos digitales

## 📱 Pesos Disponibles

El proyecto incluye todos los pesos de la fuente Inter:

- **100** - Thin (Ultra Light)
- **200** - Extra Light
- **300** - Light
- **400** - Regular (Normal)
- **500** - Medium
- **600** - Semi Bold
- **700** - Bold
- **800** - Extra Bold
- **900** - Black (Ultra Bold)

## 🎯 Uso por Elementos

### Títulos Principales
- **H1**: `font-inter-normal` (400) - Títulos principales como "Dra. Patricia Torres"
- **H2**: `font-inter-thin italic` (100) - Subtítulos como "Cirujano Dentista"
- **H3-H6**: `font-inter-semibold` (600) - Títulos de sección

### Texto del Cuerpo
- **Párrafos**: `font-inter-normal` (400) - Texto principal
- **Slogan**: `font-inter-light` (300) - Texto destacado como "Transformando sonrisas..."
- **Botones**: `font-inter-normal` (400) - Llamadas a la acción

### Elementos Especiales
- **Subtítulos**: `text-subtitle` - Estilo especial para subtítulos (Thin + Italic)
- **Texto Hero**: `text-hero` - Estilo para títulos principales (Regular)
- **Texto Slogan**: `text-slogan` - Estilo para slogans (Light)

## 🎨 Clases CSS Personalizadas

### Clases de Fuente
```css
.font-inter          /* Fuente Inter con peso normal */
.font-inter-thin     /* Peso 100 */
.font-inter-light    /* Peso 300 */
.font-inter-normal   /* Peso 400 */
.font-inter-medium   /* Peso 500 */
.font-inter-semibold /* Peso 600 */
.font-inter-bold     /* Peso 700 */
```

### Clases de Texto
```css
.text-hero           /* Estilo para títulos principales (Regular) */
.text-subtitle       /* Estilo para subtítulos (Thin + Italic) */
.text-slogan         /* Estilo para slogans (Light) */
.text-body           /* Estilo para texto del cuerpo (Regular) */
```

## 📏 Tamaños de Fuente

### Tamaños Personalizados
- **Hero Mobile**: `text-hero-mobile` - 3rem (48px)
- **Hero Desktop**: `text-hero` - 4.5rem (72px)

### Tamaños Estándar de Tailwind
- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)
- **7xl**: 4.5rem (72px)

## 🔧 Configuración en Tailwind

```javascript
// tailwind.config.js
fontFamily: {
  'sans': ['Inter', 'system-ui', 'sans-serif'],
  'inter': ['Inter', 'sans-serif'],
},
fontWeight: {
  'light': '300',
  'normal': '400',
  'medium': '500',
  'semibold': '600',
  'bold': '700',
},
fontSize: {
  'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'hero-mobile': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
}
```

## 📱 Responsividad

### Móvil (< 768px)
- Títulos principales: `text-hero-mobile` (3rem)
- Subtítulos: `text-2xl` (1.5rem)
- Texto del cuerpo: `text-xl` (1.25rem)

### Desktop (≥ 768px)
- Títulos principales: `text-hero` (4.5rem)
- Subtítulos: `text-3xl` (1.875rem)
- Texto del cuerpo: `text-2xl` (1.5rem)

## 🎨 Características de la Fuente

### Ventajas
- **Alta legibilidad** en pantallas pequeñas
- **Optimizada para interfaces** digitales
- **Excelente rendimiento** en web
- **Diseño moderno** y profesional
- **Gran variedad de pesos** para jerarquía visual

### Aplicación en el Proyecto
- **Profesionalismo**: Perfecta para una práctica dental
- **Legibilidad**: Fácil lectura en todos los dispositivos
- **Accesibilidad**: Cumple estándares de accesibilidad web
- **Consistencia**: Mantiene coherencia visual en toda la landing page

## 🚀 Implementación

La fuente Inter se importa automáticamente en `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
```

Y se aplica globalmente en el `body`:

```css
body {
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 400;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

## 📋 Especificaciones del Hero

### Título Principal
- **Texto**: "Dra. Patricia Torres"
- **Fuente**: Inter Regular (400)
- **Color**: `#D7EBEC` (dental-title)
- **Tamaño**: 4.5rem (desktop) / 3rem (móvil)

### Subtítulo
- **Texto**: "Cirujano Dentista"
- **Fuente**: Inter Thin Italic (100)
- **Color**: `#6FB3B5` (dental-subtitle)
- **Tamaño**: 3xl (desktop) / 2xl (móvil)

### Slogan
- **Texto**: "Transformando sonrisas, compartiendo alegría."
- **Fuente**: Inter Light (300)
- **Color**: `#FFFFFF` (blanco)
- **Tamaño**: 2xl (desktop) / xl (móvil)

### Botón CTA
- **Texto**: "Agendar Cita"
- **Fuente**: Inter Regular (400)
- **Fondo**: `#D7EBEC` (dental-button)
- **Texto**: `#023E8A` (dental-blue)

---

**Nota**: La fuente Inter es una excelente elección para proyectos de salud y profesionales, ya que transmite confianza, modernidad y legibilidad.
