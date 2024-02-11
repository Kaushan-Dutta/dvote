import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary:"#2D3250",
        dark:"#424769",
        light:"#7077A1",
        highlight:"#F6B17A"
      },
      fontFamily:{
        header:['Nova Square', 'sans-serif'],
        primary:['Open Sans', 'sans-serif'],
        header1:[ 'VT323', 'monospace']
      }
    },
  },
  plugins: [],
}
export default config
