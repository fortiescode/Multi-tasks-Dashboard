/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "system-ui"],
      roboto: ["Roboto", "system-ui"],
    },
    extend: {
      colors: {
        primary: "#0081cf",
        heading1: "#2563ebe6",
        gray1: " #eeeeeeb2",
        gray2: "#757575",
        shadow1: "#80808036",
      },
    },
  },
  plugins: [],
};
