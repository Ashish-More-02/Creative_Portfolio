/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "serif"], // Register the Montserrat font
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({});
    },
  ],
};
