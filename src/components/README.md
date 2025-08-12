# Componentes de la Landing Page

Esta carpeta contiene todos los componentes reutilizables de la landing page de la Dra. Patricia Torres.

## 📁 Estructura de Carpetas

```
components/
├── Header/           # Componente de navegación principal
├── Hero/            # Sección hero principal
├── Services/        # Sección de servicios (próximamente)
├── About/           # Sección sobre mí (próximamente)
├── Community/       # Sección de servicio comunitario (próximamente)
├── Contact/         # Sección de contacto (próximamente)
├── Footer/          # Pie de página (próximamente)
└── index.js         # Exportaciones principales
```

## 🎯 Componentes Implementados

### Header
- **Archivo**: `Header/Header.jsx`
- **Propósito**: Navegación principal con logo y menú móvil
- **Características**:
  - Logo con nombre de la Dra. Torres
  - Navegación desktop y móvil
  - Scroll suave a las secciones
  - Menú hamburguesa para móviles
  - Animaciones de transición

### Hero
- **Archivo**: `Hero/Hero.jsx`
- **Propósito**: Sección principal de presentación
- **Características**:
  - Título principal y subtítulo
  - Tagline de la práctica
  - Botón de llamada a la acción
  - Imagen placeholder con elementos decorativos
  - Diseño responsivo

## 🚀 Uso de los Componentes

### Importación
```jsx
import { Header, Hero } from './components';
```

### Implementación
```jsx
function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* Otros componentes */}
    </div>
  );
}
```

## 🎨 Estilos y Clases CSS

### Clases Utilitarias Personalizadas
- `.btn-primary`: Botón principal azul
- `.btn-secondary`: Botón secundario gris
- `.section-padding`: Padding estándar para secciones
- `.container-custom`: Contenedor centrado con ancho máximo

### Animaciones Personalizadas
- `.animate-fadeIn`: Fade in suave
- `.animate-slideDown`: Slide down desde arriba
- `.animate-bounce-in`: Bounce in con escala

## 🔧 Personalización

### Colores
Los colores están definidos en `tailwind.config.js`:
- `dental-blue`: #1e3a8a
- `dental-purple`: #f3e8ff
- `dental-pink`: #fdf2f8

### Tipografía
- Fuente principal: Inter (Google Fonts)
- Pesos disponibles: 300, 400, 500, 600, 700

## 📱 Responsividad

Todos los componentes están diseñados para ser completamente responsivos:
- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚧 Próximos Componentes

- [ ] Services: Sección de servicios dentales
- [ ] About: Información personal de la Dra. Torres
- [ ] Community: Servicio comunitario
- [ ] Contact: Formulario de contacto y mapa
- [ ] Footer: Pie de página con información legal

## 💡 Mejoras Futuras

- [ ] Integración con formularios reales
- [ ] Lazy loading de imágenes
- [ ] Animaciones de scroll
- [ ] Integración con CMS
- [ ] Optimización de SEO
