/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      Mobile: { "min": "375px", "max": "600px" },
    },
    colors: {
      // ### Primary

      "Desaturated-Red": "hsl(0, 36%, 70%)",
      "Soft-Red": "hsl(0, 93%, 68%)",

      // ### Neutral

      "Dark-Grayish-Red": "hsl(0, 6%, 24%)",

      // ### Gradients

      "Linear-a-1": "hsl(0, 0%, 100%)",
      "Linear-a-2": "hsl(0, 100%, 98%)",
      "Linear-b-1": "hsl(0, 80%, 86%)",
      "Linear-b-2": "hsl(0, 74%, 74%)",

    },
    fontSize: {
      "ms": "16px",
    },
    fontFamily: {
      "Josefin": ["Josefin Sans", "sans-serif"]
    },
    fontWeight: {
      "ms": 300,
      "lg": 400,
      "xl": 600,
    },
    extend: {},
  },
  plugins: [],
}
