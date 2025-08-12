# Componente About

Un componente reutilizable para crear secciones de contenido con imagen y texto, perfecto para secciones como "Sobre Mí" o "Servicio a la Comunidad".

## Características

- **Flexible**: Permite posicionar la imagen a la izquierda o derecha
- **Responsive**: Se adapta automáticamente a diferentes tamaños de pantalla
- **Personalizable**: Colores, fondos y estilos configurables
- **Reutilizable**: Un solo componente para múltiples secciones
- **Imágenes Grandes**: Las imágenes ocupan aproximadamente 50% del contenedor
- **Tipografía Inter**: Usa la fuente Inter del proyecto con pesos específicos

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | string | - | Título de la sección |
| `description` | string[] | - | Array de párrafos de texto |
| `imageSrc` | string | - | Ruta de la imagen |
| `imageAlt` | string | - | Texto alternativo de la imagen |
| `imagePosition` | 'left' \| 'right' | 'right' | Posición de la imagen |
| `backgroundColor` | string | 'bg-white' | Color de fondo de la sección |
| `textColor` | string | 'text-gray-600' | Color del texto |
| `titleColor` | string | 'text-gray-800' | Color del título |

## Uso

### Ejemplo Básico

```jsx
<About 
  title="Sobre Mí"
  description={[
    "Primer párrafo de descripción...",
    "Segundo párrafo de descripción...",
    "Tercer párrafo de descripción..."
  ]}
  imageSrc="/images/sobre-mi.jpg"
  imageAlt="Descripción de la imagen"
/>
```

### Con Imagen a la Izquierda

```jsx
<About 
  title="Servicio a la Comunidad"
  description={[
    "Descripción del servicio...",
    "Más detalles..."
  ]}
  imageSrc="/images/servicio.jpg"
  imageAlt="Servicio comunitario"
  imagePosition="left"
  backgroundColor="bg-gray-50"
/>
```

### Personalización Completa

```jsx
<About 
  title="Título Personalizado"
  description={[
    "Texto personalizado...",
    "Más texto..."
  ]}
  imageSrc="/images/custom.jpg"
  imageAlt="Imagen personalizada"
  imagePosition="right"
  backgroundColor="bg-blue-50"
  textColor="text-blue-800"
  titleColor="text-blue-900"
/>
```

## Estructura del Componente

```
About/
├── About.jsx          # Componente principal
├── index.js           # Archivo de exportación
└── README.md          # Esta documentación
```

## Responsive

- **Mobile**: Título centrado, imagen y texto apilados verticalmente
- **Desktop**: Layout de dos columnas con imagen y texto lado a lado
- **Orden**: Se ajusta automáticamente según `imagePosition`

## Estilos

- **Imagen**: 
  - Mobile: `w-full max-w-lg` (ancho completo con máximo)
  - Desktop: `lg:w-3/4 xl:w-2/3` (aproximadamente 50% del contenedor)
  - Aspecto: `aspect-square` (cuadrada)
  - Bordes: `rounded-2xl` con sombra `shadow-xl`
- **Espaciado**: Usa las clases `section-padding` y `container-custom`
- **Tipografía**: 
  - Títulos: `font-inter-semibold` (Inter SemiBold)
  - Texto: `font-inter-normal` (Inter Regular) con `text-lg leading-relaxed`
- **Colores**: Configurables a través de props

## Tipografía Inter

El componente utiliza la fuente Inter del proyecto:

- **Títulos**: `font-inter-semibold` (Inter SemiBold - peso 600)
- **Texto del cuerpo**: `font-inter-normal` (Inter Regular - peso 400)
- **Tamaños**: Títulos grandes y centrados, texto legible con `text-lg`
- **Espaciado**: `leading-relaxed` para mejor legibilidad

## Integración

El componente está integrado en `src/components/index.js` y se puede importar así:

```jsx
import { About } from './components';
```

## Casos de Uso

1. **Sección "Sobre Mí"**: Imagen a la derecha, texto a la izquierda
2. **Sección "Servicios"**: Imagen a la izquierda, texto a la derecha
3. **Sección "Equipo"**: Múltiples instancias del componente
4. **Sección "Historia"**: Imagen y texto alternados

## Personalización

Para agregar más opciones de personalización, puedes extender el componente con props adicionales como:

- `imageSize`: Para diferentes tamaños de imagen
- `textAlignment`: Para alineación de texto personalizada
- `animation`: Para efectos de animación
- `borderRadius`: Para bordes personalizados
- `fontWeight`: Para diferentes pesos de fuente Inter
