/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      scrollbar: {
        thin: '8px',
        trackColor: '#cbd5e0',
        thumbColor: '#4b5563',
        thumbHoverColor: '#2d3748',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  darkMode: "class",
}

