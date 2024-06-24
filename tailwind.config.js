/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-poppins)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'image': "url('/intro.jpg')",
        'image2': "url('/headerLargeScreensBlack.png')",
        'interprise': "url('/interprise.jpg')",
        'footer': "url('/logo-500-gold-transparent.png')",
      },
      colors: {
        'green-header': '#253D38',
        'green-sections': '#566A69',
        'gold-details': '#B68E63',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        gochi: ['var--(font-gochiHand)', 'sans-serif']
      },
      boxShadow: {
        'inner-top': 'inset 0 12px 3px -9px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
};
