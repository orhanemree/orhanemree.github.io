module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "15%": "15%",
      },
      translate: {
        "1/-2": '-50%',
      }
    },
    fontFamily: {
      "inter": ['inter', 'sans-serif']
    },
    colors: {
      "gray": "#191919",
      "light-gray": "#afb8c133",
      "black": "#000",
      "white": "#fff",
      "blue": "#2b4f5f"
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
