const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

(
  module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          primary: ["var(--primary-font)", ...fontFamily.mono],
          secondary: ["var(--secondary-font)", ...fontFamily.mono],
        },
      },
    },

    important: true,
  }
);
