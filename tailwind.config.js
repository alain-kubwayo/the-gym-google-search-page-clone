/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#888888",
        secondary: "#2E23B3",
        tertiary: "#202124",
        navLink: "#4285F4",
        footerLink: "#70757A",
      },
      padding: {
        "1%": "1%",
        "2%": "2%",
        "3%": "3%",
        "4%": "4%",
        "6%": "6%",
        "8%": "8%",
        "10%": "10%",
        "20%": "20%",
      },
      spacing: {
        "3%": "3%",
        "20%": "20%",
        136: "35rem",
      },
      boxShadow: {
        primary: "0px 1px 3px rgb(192, 185, 185)",
      },
      fontFamily: {
        body: "Arial, sans-serif",
      },
      height: {
        "main-90vh": "90vh",
      },
    },
  },
  plugins: [],
};
