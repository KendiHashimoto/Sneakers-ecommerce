/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "480px",
      tablet: "1200px",
      desktop: "1440px",
      bigDesktop: "1980px",
    },
    colors: {
      orange: "hsl(26, 100%, 55%)",
      lightOrange: "hsl(26, 100%, 75%)",
      paleOrange: "hsl(25, 100%, 94%)",
      veryDarkBlue: "hsl(220, 13%, 13%)",
      darkGrayishBlue: "hsl(219, 9%, 45%)",
      lightGrayishBlue: "hsl(223, 64%, 98%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)", // with 75% opacity for lightbox background
    },
    extend: {
      gridTemplateColumns: {
        desktopNavbar: "1fr 6fr 1fr",
        mobileNavbar: "2fr 2fr",
      },
      boxShadow: {
        addToCart: "0 15px 50px -10px rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        logo: "160px",
      },
    },
  },
  plugins: [],
}
