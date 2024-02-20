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

  plugins: [
    scrollbar,
    nextui({
      themes: {
        light: {
          colors: {
            secondary: '#FF6DFB',
            background: '#FFFFFF', // or DEFAULT
            foreground: '#11181C', // or 50 to 900 DEFAULT
            primary: {
              50: '#ffe2f6',
              100: '#ffb2de',
              200: '#ff80c5',
              300: '#fd4eac',
              400: '#fc1d95',
              500: '#e2037b',
              600: '#b10060',
              700: '#800045',
              800: '#4e0029',
              900: '#1f0011',
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: '#FFFFFF', // or DEFAULT
            foreground: '#11181C', // or 50 to 900 DEFAULT
            primary: {
              50: '#ffe2f6',
              100: '#ffb2de',
              200: '#ff80c5',
              300: '#fd4eac',
              400: '#fc1d95',
              500: '#e2037b',
              600: '#b10060',
              700: '#800045',
              800: '#4e0029',
              900: '#1f0011',
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE',
            },
            // ... rest of the colors
          },
        },
        // dark: {
        //   colors: {
        //     background: '#000000', // or DEFAULT
        //     foreground: '#ECEDEE', // or 50 to 900 DEFAULT
        //     primary: {
        //       //... 50 to 900
        //       foreground: '#FFFFFF',
        //       DEFAULT: '#006FEE',
        //     },
        //   },
        //   // ... rest of the colors
        // },
        // mytheme: {
        //   // custom theme
        //   extend: 'dark',
        //   colors: {
        //     primary: {
        //       DEFAULT: '#BEF264',
        //       foreground: '#000000',
        //     },
        //     focus: '#BEF264',
        //   },
        // },
      },
    }),
  ],
}
