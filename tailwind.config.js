/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        "orange": "#fc6e20",
        "beige": "#ffe7d0",
        "gray": "#323232",
        "black": "#1b1b1b"
      },
      gridTemplateColumns: {
        "my-task-user": "1fr 3fr 1fr 1fr",
        "my-task-other": "1fr 3fr 1fr 1fr 1fr",
      }
    },
  },
  plugins: [],
}

