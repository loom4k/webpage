/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#fff',
      'epic-black': '#131212',
      'epic-black-light': '#1c1b1b',
      'pastel': {
        'green': '#6dcc93',
        'red': "#FF6666",
        'blue': '#77DDFF',
        'yellow': '#EEAC42',
        'orange': '#FFCC66',
        'blurple': '#7777FF',
        'pink': '#FF77FF',
        'white': '#FFFFFF',
        'black': '#000000',
      }
    },  
    extend: {},
  },
  plugins: [],
}
