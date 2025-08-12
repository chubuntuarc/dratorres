/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dental-blue': '#023E8A',
        'dental-title': '#D7EBEC',
        'dental-button': '#D7EBEC',
        'dental-subtitle': '#6FB3B5',
        'dental-purple': '#f3e8ff',
        'dental-pink': '#fdf2f8',
        'brown': {
          400: '#a78a7f',
          500: '#8b5a3c',
          600: '#6b4423',
        }
      },
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
    },
  },
  plugins: [],
}
