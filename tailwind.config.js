/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0D32",
        "xinxi-red": "#FC466B",
        "xinxi-blue": "#3F5EFB",
        "xinxi-clr": "#8E9EAB",
        hyper: "#0000FF",
      },
      backgroundImage: {
        "img-1": "url('/src/assets/img/img1.png')",
        "img-2": "url('/src/assets/img/img2.png')",
        "img-3": "url('/src/assets/img/img3.png')",
        "img-4": "url('/src/assets/img/img4.png')",
        "img-5": "url('/src/assets/img/img5.png')",
        "img-6": "url('/src/assets/img/img6.png')",
        logo: "url('/src/assets/img/Logo.png')",
      },
      fontFamily: {
        play: "Play",
      },
    },
  },
  plugins: [],
};
