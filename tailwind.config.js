/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black": "#000000",
        "yellow": "#E0BC2D",
        "light-blue": "#b1ddf1",
        "dark-blue": "#057fb8",
        "bluest": "#0000ff",
        "off-white": "#dddbcb",
        "delete-red": "#ff0000"
      },
    },
  },
  plugins: [],
};
