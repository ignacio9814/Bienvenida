/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        'elna-blue': '#1B3A6B', // Azul institucional
        'elna-green': '#27AE60', // Verde
        'elna-yellow': '#F2C94C', // Amarillo
        'elna-gray': '#F5F6FA', // Gris claro de fondo
        'elna-pink': '#E94E8A', // Rosa/Magenta
        'elna-red': '#E74C3C', // Rojo
      },
      borderRadius: {
        elna: '1.5rem', // Bordes redondeados grandes
      },
    },
  },
  plugins: [],
} 