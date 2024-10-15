/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mdlg: "975px", // Custom breakpoint at 975px
      },
    },
  },
  plugins: [],
};
