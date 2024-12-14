/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        customArrow: "customArrow 2s linear infinite",
      },
      keyframes: {
        customArrow: {
          "0%": { transform: "translateY(-100%)", opacity: 1 },
          "80%": { transform: "translateY(0)", opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
