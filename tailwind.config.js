/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
// import tailwindCssAnimated from 'tailwindcss-animated'
import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: { Campton: ['Campton', 'sans-serif'] },
    extend: {
      colors: {
        bgDarkColor: '#161616',
        lighten: '#F5F7FA',
      },
    },
  },
  darkMode: 'class',

  plugins: [scrollbar, nextui()],
}
