/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark: "#22223b",
        bgDark2: "#4a4e69",
      },
    },
  },
  plugins: [],
};
