export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#EFBC9B",
          },
          secondary: {
            main: "#FBF3D5",
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
            main: "#EFBC9B",
            500: "#EFBC9B", // Adding a fallback 500 property
          },
          secondary: {
            main: "#FBF3D5",
            500: "#FBF3D5", // Adding a fallback 500 property
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
