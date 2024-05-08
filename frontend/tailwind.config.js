/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./components/**/*.{js,vue,ts}",
    // "./layouts/**/*.vue",
    // "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    // "./app.vue",
    // "./error.vue",
  ],
  theme: {
    container: {
      padding: "15px",
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "990px",
        xl: "1100px",
      },
    },
    screens: {
      xxxs: "320px",
      xxs: "360px",
      xs: "480px",
      sm: "620px",
      md: "768px",
      lg: "976px",
      xl: "1028px",
      xxl: "1440px",
    },
    extend: {
      colors: {
        primary: "#2B8CFB",
        second: "#1D1D33",
        trisec: "#20407C",
        third: "#EC254E",
      },
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100%': '100% 100%',
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
