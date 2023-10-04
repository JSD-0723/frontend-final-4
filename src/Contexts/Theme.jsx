import React from "react";
import { createTheme } from "@mui/material/styles";

const lightColors = {
  primary: "#1b4b66",
  primaryTint: "#639599",
  error: "#b00020",
  highlight: "#ff8c4b",
  accent: "#f4f4f4",
  dark: "#13101e",
  bright: "#fff",
  grey: "#f1f1f1",
  lightText: "#b6b6b6",
  typeHighEmphasis: "#171520",
  typeLowEmphasis: "#626262",
};

const darkColors = {
  primary: "#1b4b66",
  primaryTint: "#639599",
  error: "#b00020",
  highlight: "#ff8c4b",
  accent: "#f4f4f4",
  dark: "#13101e",
  bright: "#fff",
  grey: "#f1f1f1",
  lightText: "#b6b6b6",
  typeHighEmphasis: "#171520",
  typeLowEmphasis: "#626262",
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: lightColors.primary,
      tint: lightColors.primaryTint,
      error: lightColors.error,
      highlight: lightColors.highlight,
      accent: lightColors.accent,
      dark: lightColors.dark,
      bright: lightColors.bright,
      grey: lightColors.grey,
      lightText: lightColors.lightText,
      typeHighEmphasis: lightColors.typeHighEmphasis,
      typeLowEmphasis: lightColors.typeLowEmphasis,
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: lightColors.primary,
      tint: lightColors.primaryTint,
      error: lightColors.error,
      highlight: lightColors.highlight,
      accent: lightColors.accent,
      dark: lightColors.dark,
      bright: lightColors.bright,
      grey: lightColors.grey,
      lightText: lightColors.lightText,
      typeHighEmphasis: lightColors.typeHighEmphasis,
      typeLowEmphasis: lightColors.typeLowEmphasis,
    },
  },
});

export { lightTheme, darkTheme };
