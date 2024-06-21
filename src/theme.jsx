export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#E0A75E",
          },
          secondary: {
            main: "#973131",
          },
          background: {
            default: "#D6DAC8",
          },
          text: {
            primary: "#9CAFAA",
          },
        }
      : {
          primary: {
            main: "#E0A75E",
            500: "#E0A75E", // Adding a fallback 500 property
          },
          secondary: {
            main: "#973131",
            500: "#973131", // Adding a fallback 500 property
          },
          background: {
            default: "#D6DAC8",
          },
          text: {
            primary: "#9CAFAA",
          },
        }),
  },
});
