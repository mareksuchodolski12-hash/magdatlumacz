/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#213B34",
          accent: "#6F9E8F",
          light: "#F3F8F4",
          gold: "#A8C98B",
        },
      },
      fontFamily: {
        sans: ["Inter", "Source Sans 3", "sans-serif"],
      },
      boxShadow: {
        premium: "0 16px 36px -24px rgba(33, 59, 52, 0.3)",
      },
    },
  },
};
