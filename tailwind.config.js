/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },




  daisyui: {
    themes: [
      {
        itishcoll_theme: {
          primary: "#282A39",
          secondary: "#0D72B9",
          accent: "#333647",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

  plugins: [require("daisyui")],


}
