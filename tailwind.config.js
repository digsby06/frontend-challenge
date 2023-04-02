/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: {
        DEFAULT: '#FFFFFF',
      },
      gray: {
        DEFAULT: '#EAEAEA',
        500: '#808080', // Dark Gray
      },
      red: {
				DEFAULT: '#EB3E3E',
				500: '#C62232', // Barstool Dark Red
			},
    }
  },
  plugins: [],
}
