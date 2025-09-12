/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#C9A34A',
        'slate': '#3B4752', 
        'soft-white': '#F8F9FB',
        'primary': '#C9A34A',
        'secondary': '#3B4752',
        'accent': '#C9A34A',
        'navy': '#1e3a8a',           // Deep professional navy
        'teal': '#0f766e',           // Sophisticated teal
        'forest': '#166534',         // Deep forest green
        'burgundy': '#7f1d1d',       // Rich burgundy
        'charcoal': '#374151',       // Professional charcoal
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
