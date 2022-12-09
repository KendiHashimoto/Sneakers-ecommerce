/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "976px",
      desktop: "1440px",
    },
    colors: {
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",
      veryDarkBlue: "hsl(220, 13%, 13%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)", // with 75% opacity for lightbox background
    },
    extend: {
      gridTemplateColumns: {
        navbar: "1fr 6fr 1fr",
      },
      spacing: {
        logo: "140px",
      },
    },
  },
  plugins: [],
}
