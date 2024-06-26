/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        branco: '#FFFFFF',
        preto: '#000000',
        cinzaEscuro: '#151515',
        cinzaClaro1: '#1D1D1D',
        cinzaClaro2: '#404040',
        cinzaClaro3: '#4E4E4E',
        cinzaClaro4: '#7D7D7D',
        cinzaClaro5: '#939393',
        cinzaClaro6: '#AFAFAF',
        quaseBranco: '#FBFBFB',
        amareloPastel: '#F6E58D',
        azulEscurso: '#222F3E',
        azulclaro: '#00B3FF'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        'full-hd': '1920px',
        // => @media (min-width: 1920px) { ... }

        '4k': '3840px',
        // => @media (min-width: 3840px) { ... }
      }
    },
  },
  plugins: [],
}

