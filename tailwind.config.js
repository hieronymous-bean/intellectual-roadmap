module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        galano: ['Galano','sans-serif'],
      },
      colors: {
        primary: '#7C3AED',
        greyone: '#F9FAFB',
        greytwo: '#E5E7EB'
      }
    },
  }
};