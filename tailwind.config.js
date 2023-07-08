/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: { 
      colors :{
        bgone: '#F5F5F5',
        bgtwo: '#FFFFFF',
        bgthree : '#EAEAEA',
        sectext: '#858585',
        box1:'#DDEFE0',
      },
      fontFamily :{
        greatVibes : 'Great Vibes',
        mont:'Montserrat',
        lato:'Lato',
        opensans:'Open Sans'
      }
    },
  },
  plugins: [],
}

