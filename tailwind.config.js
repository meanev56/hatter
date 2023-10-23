/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'dark-copy': 'var(--dark-copy)',
        highlights: "var(--highlights)",
      },
      fontFamily: {
        'body-copy': "var(--body-copy-font-family)",
        'CTA-hyperlink': "var(--CTA-hyperlink-font-family)",
        h1: 'var(--h1-font-family)',
        h2: 'var(--h2-font-family)',
        h3: 'var(--h3-font-family)',
        'menu-item': 'var(--menu-item-font-family)',
        subheading: 'var(--subheading-font-family)',
      }
    },
  },
  plugins: [],
}