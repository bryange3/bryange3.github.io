/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      'sans': ['Inter','ui-sans-serif', 'system-ui'],
      'serif': ['Newsreader', 'ui-serif'],
      'mono': ['IBM Plex Mono', 'ui-monospace', 'system-ui'],
    }
  }
}