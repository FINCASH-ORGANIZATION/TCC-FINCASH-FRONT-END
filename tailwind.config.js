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
        cinzaClaro: '#1D1D1D',
        quaseBranco: '#FBFBFB',
        amareloPastel: '#F6E58D',
        azulEscurso: '#222F3E',
        azulclaro: '#00B3FF'
      }
    },
  },
  plugins: [],
}

