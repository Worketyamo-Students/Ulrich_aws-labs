/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "var(--color-body)",
        button: "var(--color-button)",
        bgbutton: "var(--color-bgbutton)",
        title1: "var(--color-title1)",
        title2: "var(--color-title2)",
        gris: "var(--color-gris)",
        bord: 'var(--couleur-bord)',
        grisweb: 'var(--couleur-grisweb)'
      },

      fontFamily: {
        inter: "var(--font-inter)",
        roboto: "var(--font-roboto)",
      },
    },
  },
  plugins: [],
};
