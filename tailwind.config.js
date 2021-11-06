const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class',
  important: true,
  theme: {
    extend: {},
    colors: {
      primary:colors.blue,
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      blue:colors.blue,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald,
      purple: colors.violet,
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.100","currentColor"),
      primary: theme("colors.gray.200"),
      danger: theme("colors.red.400"),
      success: theme("colors.green.400"),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
