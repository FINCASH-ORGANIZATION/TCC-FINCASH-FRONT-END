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
    },
  },
  plugins: [],
}

