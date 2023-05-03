/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        "blockBg": "#fc6e20",
        "mainText": "#ffe7d0",
        "secondBg": "#323232",
        "mainBg": "#1b1b1b"
      },
      gridTemplateColumns: {
        "my-task-user": "1fr 3fr 1fr 1fr",
        "my-task-other": "1fr 3fr 1fr 1fr 1fr",
      }
    },
  },
  plugins: [],
}

