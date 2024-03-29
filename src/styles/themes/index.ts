/**
 * NOTE
 * The value in "transitionDuration" should be assigned to the"$transition-duration" variable in "src/styles/sass/_variables.sass".
 */

import { DefaultTheme } from "styled-components";
// My Assets:
import { StdColorsType } from "@/styles/config/styled";

const stdColors: StdColorsType =
  process.env.NEXT_PUBLIC_COLORS_MODE === "app"
    ? {
        // Application Colors
        primary: "#06CC06",
        secondary: "#008000",
        tertiary: "#220D80",
        dark: "#222",
        light: "#F5F5F5",
      }
    : {
        // Prototype Colors
        primary: "#CCC",
        secondary: "#555",
        tertiary: "#DDD",
        dark: "#000",
        light: "#FFF",
      };

const transitionDuration: DefaultTheme["transitionDuration"] = "300ms"; /** Refer to NOTE */

export const darkTheme: DefaultTheme = {
  name: "dark",
  transitionDuration,
  colors: {
    background01: stdColors.dark,
    background02: stdColors.primary,
    title: stdColors.primary,
    text01: stdColors.light,
    text02: stdColors.dark,
  },
  stdColors,
};

export const lightTheme: DefaultTheme = {
  name: "light",
  transitionDuration,
  colors: {
    background01: stdColors.light,
    background02: stdColors.secondary,
    title: stdColors.secondary,
    text01: stdColors.dark,
    text02: stdColors.light,
  },
  stdColors,
};
