/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF3E0",
          100: "#FFE5B2",
          200: "#FFD680",
          300: "#FFC84E",
          400: "#FFBB1D",
          500: "#FFBD60",
          600: "#E6A856",
          700: "#CC924B",
          800: "#B37C41",
          900: "#996637",
        },
        secondary: {
          50: "#E5E7E8",
          100: "#BCC1C2",
          200: "#8F979A",
          300: "#626B71",
          400: "#3B454B",
          500: "#2C3539",
          600: "#252C30",
          700: "#1E2327",
          800: "#171A1E",
          900: "#0F1114",
        },
      },
      fontFamily: {
        Signatra: ["Signatra", "sans-serif"],
      },
    },
  },
  plugins: [],
};
