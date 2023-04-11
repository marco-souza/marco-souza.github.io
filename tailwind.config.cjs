/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: "Times New Roman",
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
