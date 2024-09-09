/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],
  darkMode: "class", // Use 'media' if you want to use system preferences for dark mode
  theme: {
    extend: {
      colors: {
        light: {
          background: "#FFFFFF",
          text: "#333333",
          accentPrimary: "#007BFF",
          accentSecondary: "#FFC107",
          border: "#E0E0E0",
        },
        dark: {
          background: "#121212",
          text: "#E0E0E0",
          accentPrimary: "#1E90FF",
          accentSecondary: "#FFB74D",
          border: "#333333",
        },
      },
    },
  },
  plugins: [],
};
