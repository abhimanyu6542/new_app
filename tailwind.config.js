/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4A3AFF',
        graybg: '#f3f4f6',
        navItemHover: '#ff5722',
        gray3: '#ffffffb3',
        blue1: '#e5f1ff',
        blue2: '#377dff',
        orange6: '#ff5722',
        violet1: '#ffffff33',
        violet7: '#6a26da',
        violet8: '#5034fc',
        black: '#323b4b',
        gray: '#5f6673',
        background: '#fafbfc',
        numberDiv: 'rgba(80, 52, 252, 0.9)',
        featureBg:
          'linear-gradient(90deg, rgba(23,10,249,1) 33%, rgba(11,222,160,1) 59%, rgba(231,229,19,1) 100%)',
        cardText: 'rgba(255, 255, 255, 0.7)',
        gray2: "#25373fb3",
        gray4: "#262729b3",
        gray5: "#ffffff4d",
        blue7: "#2b59ff",
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      animation: {
        slide: 'slide 25s linear infinite',
      },
      keyframes: {
        slide: {
          '0%,100%': { transform: 'translateX(5%)' },
          '50%': { transform: 'translateX(-120%)' },
        },
      },
    },
  },
  plugins: [],
};
