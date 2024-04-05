import defaultTheme from 'tailwindcss/defaultTheme'
import { addDynamicIconSelectors } from '@iconify/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Ysabeau', 'sans-serif', ...defaultTheme.fontFamily.sans],
        sigmar: ['Sigmar', 'cursive']
      },
      colors: {
        primary: 'rgba(var(--color-primary), <alpha-value>)',
        secondary: 'rgba(var(--color-secondary), <alpha-value>)'
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
}
