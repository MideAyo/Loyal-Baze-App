/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      large: "1170px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryColor: " #121B27",
        darkColor: "#1D2939",
        darkGradient: " #5404FF",
        lightGradient: "#BD3BD2",
        androidBlue: " #175CE1",
        androidPurple: "#A75FD2",
        white: " #FCFCFC",
        borderColor: " rgba(221, 221, 221, 0.5)",
      },
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },

      fontWeight: {
        400: ["400"],
        600: ["600"],
        501: ["501"],
        700: ["700"],
        900: ["900"],
      },
    },
  },
  plugins: [],
};
