/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.jsx",

  ],
  theme: {
    screens:{
      'sm': {'min': '320px', 'max': '586px'},
      'md': {'min': '587px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
    }
  },
  plugins: [],
}

