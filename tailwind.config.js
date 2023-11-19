/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fira: ["Fira Code monospace"],
    },
    extend: {
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(-3rem)" },
          "100%": { transform: "translateY(0)" },
        },
      },

      animation: {
        dropdown: "dropdown 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
