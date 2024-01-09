/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}","./src/components/*.{html,js,jsx}","./src/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {

      },
      keyframes: {
        'trans-right':{
          '0%, 100%': {transform: 'translateX(1000px)'},
          '50%' : {transform: 'translateX(0)'}
        }

      }

    },
  },
  plugins: [],
}

