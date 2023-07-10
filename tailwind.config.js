/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      montserat: ['Montserrat', 'sans-serif']
    },
    colors: {
     'dark-liver': "#514E4F",
     'old-silver': "#828282",
     'anti-flash-white': "#f2f2f2",
     'chinese-white': "#e0e0e0",
     'royal-orange': "#F2994A",
     'white': "#fff"
    },
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1204px',
      xl: '1280px',
    },
  },
  plugins: [],
}