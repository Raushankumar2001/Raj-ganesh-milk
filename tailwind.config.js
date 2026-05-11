/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        leaf: "#1f6f43",
        field: "#4c9a5f",
        cream: "#fff8e8",
        milk: "#fffdf7",
        gold: "#d7a842",
        earth: "#6b5536",
        ink: "#162118"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(31, 111, 67, 0.16)"
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        mukta: ["var(--font-mukta)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
