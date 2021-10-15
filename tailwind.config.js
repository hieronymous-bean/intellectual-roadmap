module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        galano: ['Galano','sans-serif'],
      },
      colors: {
        primary: '#3453cd',
        secondary: '#3f64e2',
        tertiary: '#5576f1',
    
        greyone: '#fafbfc',
        greytwo: '#e5e7eb',
        greythree: '#75889b',
        dark: '#202c4f',
        light: ''
      }
    },
  }
};