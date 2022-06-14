/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996dff",
          500: "#8257E5",
        },
      },
      fontFamily: {
        sans: ['"Inter"'],
      },
      boxShadow: {
        '4xl': '0px 8px 32px rgba(0, 0, 0, 0.15);'
      },
      borderRadius: {
        md: "4px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
