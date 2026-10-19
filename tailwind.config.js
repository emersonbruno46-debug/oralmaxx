/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#173A5C',
          'navy-dark': '#0D2945',
          'navy-deep': '#072039',
          'navy-intermediate': '#28577E',
          blue: '#6DBBEF',
          'blue-hover': '#5CA9DE',
          'blue-soft': '#EAF5FC',
          'blue-tint': '#F2F8FD',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          warm: '#FAFAF8',
          gray: '#F3F5F6',
          subtle: '#F8FAFB',
        },
        ink: {
          primary: '#0D2945',
          secondary: '#657587',
          muted: '#8898A9',
          light: '#A6B4C2',
        },
        wood: {
          warm: '#9A5836',
          light: '#C27F57',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Newsreader', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(13, 41, 69, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(13, 41, 69, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 16px 36px -4px rgba(13, 41, 69, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'pill': '0 4px 16px rgba(109, 187, 239, 0.35)',
        'pill-hover': '0 8px 24px rgba(109, 187, 239, 0.5)',
        'elevated': '0 24px 50px -12px rgba(7, 32, 57, 0.25)',
      },
      borderRadius: {
        'pill': '9999px',
        'card': '20px',
        'card-lg': '24px',
      }
    },
  },
  plugins: [],
}
