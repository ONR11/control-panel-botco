import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        discord: '#5865F2',
        'discord-dark': '#36393F',
        'discord-darker': '#2C2F33',
        'discord-black': '#202225',
        'discord-success': '#57F287',
        'discord-danger': '#ED4245',
        'discord-warning': '#FFA500',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-ring': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(88, 101, 242, 0.7)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(88, 101, 242, 0)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(88, 101, 242, 0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'pulse-ring': 'pulse-ring 2s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
