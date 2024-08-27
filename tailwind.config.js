/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sex: {
          50: "#f5fdfb",
          100: "#dcfbf5",
          200: "#baf6ed",
          300: "#93ece1",
          400: "#6dd9cf",
          500: "#29e0d1",
          600: "#16bbb1",
          700: "#19938d",
          800: "#1c7572",
          900: "#1e605d",
          950: "#073b3b",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
