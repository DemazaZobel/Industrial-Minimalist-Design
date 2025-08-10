/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-slow-reverse': 'spin-reverse 12s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
       'marquee-reverse': 'marqueeReverse 30s linear infinite',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      colors: {
        primary: '#0084A9',
        secondary: '#FBB24E',
        accent: '#49714C',
        background: '#FAF6F6',
        primaryText: "#134D82",
        text: '#112639',
        button: "#E99521",
      },
     
    }
    
  },
  plugins: [],
}
