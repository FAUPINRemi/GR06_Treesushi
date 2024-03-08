/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: { 
      scale: {
        '80': '.8',
      }
    },
  },
  variants: {},
  plugins: [],
}

