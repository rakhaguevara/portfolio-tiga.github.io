/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],

  darkMode: "class", // Mengaktifkan mode gelap dengan class "dark"

  theme: {
    container: {
      center: true, // Semua container akan di tengah secara default
      padding: "16px", // Padding default untuk container
    },

    extend: {
      colors: {
        primary: "#14b8a6", // Warna utama
        dark: "#0f172a", // Warna untuk mode gelap
        secondary: "#64748b", // Warna sekunder
      },
      screens: {
        "2xl": "1320px", // Ukuran layar tambahan
      },
      animation: {
        typing: "typing 2s steps(30, end), blink-caret 0.75s step-end infinite", // Animasi mengetik
        fadeIn: "fadeIn 0.5s ease-in-out", // Animasi fade in
        fadeOut: "fadeOut 0.5s ease-in-out", // Animasi fade out
        fadeInUp: "fadeInUp 1s ease-out forwards", // Animasi gambar muncul dari bawah
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "50%": { borderColor: "transparent" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
