function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          a11y: withOpacity("--color-a11y"),
        },
      },
      backgroundColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          a11y: withOpacity("--color-a11y"),
        },
      },
      ringColor: {
        skin: {
          primary: withOpacity("--color-primary"),
        },
      },
      borderColor: {
        skin: {
          primary: withOpacity("--color-primary"),
          a11y: withOpacity("--color-a11y"),
        },
      },
      backgroundImage: {
        "edit-dots": "url('/images/bg-dots.svg')",
      },
    },
  },
  plugins: [],
}
