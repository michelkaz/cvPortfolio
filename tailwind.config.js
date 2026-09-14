/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F5F3EE',
        surface: '#FFFFFF',
        'surface-2': '#ECE8DE',
        ink: '#14213D',
        text: {
          primary: '#1A1A1A',
          secondary: '#5C6472',
        },
        accent: {
          DEFAULT: '#356AE6',
          2: '#1F3D8C',
        },
        line: '#E1DDD1',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
