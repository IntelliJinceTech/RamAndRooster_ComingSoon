/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        quint: ['Quintessential', 'serif'],
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
}
