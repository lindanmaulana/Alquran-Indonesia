/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true
    },

    fontFamily: {
      'poppins': ["poppins", 'sans-serif']
    },
    extend: {
      colors: {
        bgPrimary: "#1F2125",
        bgSecondary: "#343A40",
        bgSepia: "#FFF7EA",
        primary: "#E7E9EA",
        secondary: "#2CA4AB",
      },
      boxShadow: {
        'rightBar': "0 10px 8px rgba(0,0,0,0.8)",
        'leftBar': "1px 0 10px rgba(0,0,0,0.8)"
      }
    },
  },
  plugins: [],
};
