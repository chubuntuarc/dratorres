# Componentes del Proyecto

Este directorio contiene todos los componentes reutilizables de la landing page de Dra. Patricia Torres.

## Estructura

```
components/
├── Header/           # Navegación principal
├── Hero/            # Sección principal de bienvenida
├── About/           # Secciones de contenido con imagen y texto
├── Services/        # Sección de servicios (pendiente)
├── Community/       # Sección de servicio comunitario (pendiente)
├── Contact/         # Sección de contacto (pendiente)
├── Footer/          # Pie de página (pendiente)
├── index.js         # Exportaciones principales
└── README.md        # Esta documentación
```

## Componentes Implementados

### ✅ Header
- **Archivo**: `Header/Header.jsx`
- **Función**: Navegación principal con logo y menú responsive
- **Características**: 
  - Logo real de la práctica dental
  - Menú de navegación con scroll suave
  - Menú hamburguesa para mobile
  - Colores personalizados del tema dental

### ✅ Hero
- **Archivo**: `Hero/Hero.jsx`
- **Función**: Sección principal de bienvenida
- **Características**:
  - Layout responsive con imagen y texto
  - Diferentes comportamientos para mobile y desktop
  - Botón de "Agendar Cita" prominente
  - Imagen hero.png integrada

### ✅ About
- **Archivo**: `About/About.jsx`
- **Función**: Secciones de contenido reutilizables
- **Características**:
  - Componente flexible para múltiples secciones
  - Posicionamiento configurable de imagen (izquierda/derecha)
  - Colores y estilos personalizables
  - Layout responsive automático

## Componentes Pendientes

### 🔄 Services
- **Función**: Mostrar servicios dentales ofrecidos
- **Estado**: Estructura básica en App.jsx

### 🔄 Community
- **Función**: Mostrar trabajo comunitario y social
- **Estado**: Estructura básica en App.jsx

### 🔄 Contact
- **Función**: Información de contacto y formularios
- **Estado**: Estructura básica en App.jsx

### 🔄 Footer
- **Función**: Pie de página con información adicional
- **Estado**: Estructura básica en App.jsx

## Uso

### Importación Individual
```jsx
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
```

### Importación Múltiple
```jsx
import { Header, Hero, About } from './components';
```

## Estilos

Todos los componentes utilizan:
- **Tailwind CSS** para estilos
- **Clases personalizadas** definidas en `src/index.css`
- **Colores del tema dental** (dental-blue, dental-title, etc.)
- **Fuente Inter** de Google Fonts
- **Responsive design** con breakpoints de Tailwind

## Responsive

Los componentes están diseñados para ser completamente responsive:
- **Mobile First**: Diseño optimizado para dispositivos móviles
- **Breakpoints**: Adaptación automática a tablet y desktop
- **Touch Friendly**: Elementos interactivos optimizados para touch

## Animaciones

Incluidas en `src/index.css`:
- `animate-fadeIn`: Fade in suave
- `animate-slideDown`: Slide down desde arriba
- `animate-bounce-in`: Bounce con escala
- `animate-float`: Flotación suave

## Personalización

Cada componente puede ser personalizado a través de:
- **Props**: Para contenido dinámico
- **Clases CSS**: Para estilos específicos
- **Tailwind**: Para modificaciones rápidas
- **CSS Custom Properties**: Para variables del tema

## Próximos Pasos

1. **Implementar Services**: Crear componente para servicios dentales
2. **Implementar Community**: Componente para trabajo comunitario
3. **Implementar Contact**: Formularios y información de contacto
4. **Implementar Footer**: Pie de página completo
5. **Testing**: Agregar tests unitarios
6. **Optimización**: Lazy loading y performance

## Contribución

Para agregar nuevos componentes:
1. Crear directorio con nombre descriptivo
2. Implementar componente principal
3. Crear archivo `index.js` para exportación
4. Actualizar `components/index.js`
5. Documentar en este README
6. Agregar a `App.jsx` si es necesario
