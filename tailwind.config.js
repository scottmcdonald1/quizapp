module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebasNeue: ['Bebas Neue', 'cursive'],
        abel: ['Abel', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
    colors: {
      vert59: "rgb(66,143,112)",
      orangeVif: "rgb(196,94,58)",
      ombreNaturelle31: "rgb(90,85,80)",
      vertAnglaisPale: "rgb(190,203,183)",
    },
    container: {
      center: true,
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
