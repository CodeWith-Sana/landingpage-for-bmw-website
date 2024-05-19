/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
          'sm':'640px',
          'lg':'1024px',
          'xl':'1280px'
      },
      fontFamily:{
        "poppins":['Poppins'],
        "Roboto":['Roboto'],
        
        

      }
    },
  },
  plugins: [],
}