import { createGlobalStyle } from "styled-components";

const PresetStyle = createGlobalStyle<{
  isRead: boolean;
  hasTransition: boolean;
}>`
  body {
    opacity: ${({ isRead }) => (isRead ? 1 : 0)};
    overflow: ${({ isRead }) => (isRead ? "auto" : "hidden")};
    background-color: ${({ theme, isRead }) =>
      isRead ? theme.colors.background01 : theme.initBgColor};
    transition-duration: ${({ theme, hasTransition }) =>
      hasTransition ? theme.transitionDuration : "600ms"};
    transition-timing-function: ${({ hasTransition }) =>
      hasTransition ? "linear" : "ease-in"};
    transition-property: background-color, opacity;
  }
`;

export default PresetStyle;
