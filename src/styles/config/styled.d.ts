import "styled-components";
// My Assets:
import { ScreenModeType } from "@/types";

export type StdColorsType = {
  primary: string;
  secondary: string;
  tertiary: string;
  dark: string;
  light: string;
};

export type ColorsType = {
  background01: string;
  background02: string;
  title: string;
  text01: string;
  text02: string;
};

export type TransitionDurationType = "0s" | "225ms";

declare module "styled-components" {
  export interface DefaultTheme {
    name: ScreenModeType;
    transitionDuration: TransitionDurationType;
    initBgColor: string;
    stdColors: StdColorsType;
    colors: ColorsType;
  }
}
