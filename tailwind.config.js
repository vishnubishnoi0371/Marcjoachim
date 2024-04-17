/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: { "100%": "100% 100%" },

      fontFamily: {
        "ff-inter": "Inter, sans-serif",
        "ff-pop": "Poppins, sans-serif",
      },
      screens: {
   
        xxl: "1600px",
      },
    },
  },
  plugins: [],
};
