/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primary: "#FCF7FF",
        secondary: "#4A3AFF",
        tertiary: "",
        brand: "()",
        link: "()",
      },
      backgroundColor: {
        primary: "#FCF7FF",
        secondary: "#4A3AFF",
        secondaryA: "()",
        tertiary: "()",
        gradient: "background: rgb(74,58,255),  background: linear-gradient(123deg, rgba(74,58,255,1) 0%, rgba(55,39,233,1) 98%);"
      },
      borderColor: {
        primary: "()",
        secondary: "()",
      },
      ringOffsetColor: {
        primary: "",
      },
      keyframes: {
        in: {
          "0%": { transform: "translateY(18px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "in-reverse": {
          "0%": { transform: "translateY(-18px)", opacity: 0 },
          "100%": { transform: "translateY(0px)", opacity: 1 },
        },
      },
      animation: {
        in: "in .6s both",
        "in-reverse": "in-reverse .6s both",
      },
    },
  },
  plugins: [],
}