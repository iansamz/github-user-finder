module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        spin_once: {
          '0%': {
            transform: 'rotate(360deg)'
          },
          '1%': {
              transform: 'rotate(0deg)'
          },
          '100%': {
              transform: 'rotate(0deg)'
          }
        }
      },
      animation: {
        spin_slow: 'spin 5s ease-in-out infinite',
        spin_once: 'spin_once 50s ease-in infinite',
      }
    },
    fontSize: {
      'tiny': '.675rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    container: {
      center: true,

       padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    
    },
  },
  plugins: [],
}
