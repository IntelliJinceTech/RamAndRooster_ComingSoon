/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './*.{html,js}'],
  theme: {
    screens: {
      xs: '310px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        quint: ['Quintessential', 'serif'],
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
}
