/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        "mainBg": "#ecf0f3",
        "text": "#181818",
        "white": "#ffffff",
        "secondText": "#a0a5a8",
        "tnGreen": "#4ade80",
        "tnGreenLight": "#86efac"

      },
      gridTemplateColumns: {
        "my-task-user": "1fr 3fr 1fr 1fr",
        "my-task-other": "1fr 3fr 1fr 1fr 1fr",
        "command-table": "3fr 3fr 3fr 1fr",
      }
    },
  },
  plugins: [],
}

