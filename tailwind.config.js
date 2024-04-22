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
      boxShadow:{
        'button':'-4px 0 12px -2px #1a54d0, 4px 0 12px -2px #8603c4',
      },
      screens: {
        xxl: "1600px",
      },
    },
  },
  plugins: [],
};
