module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      background: "#0d1318",
      primary: "#4169e1",
      secondary: "#ABAABA",
      active: "#E6E7E7",
      light: "#283B47",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};