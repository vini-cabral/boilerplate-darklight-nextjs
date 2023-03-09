import { createGlobalStyle } from "styled-components";
import { shade } from "polished";

const GlobalStyle = createGlobalStyle`
  * {
    ::-webkit-scrollbar {
      height: 5px;
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) =>
        theme.name === "dark"
          ? theme.stdColors.secondary
          : theme.stdColors.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => shade(0.4, theme.stdColors.light)};
    }
  }
  body, button, input, textarea, p, a, strong, em, cite, q, blockquote {
    color: ${({ theme }) => theme.colors.text01};
  }
  button {
    color: ${({ theme }) => theme.stdColors.light};
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
    transition-duration: ${({ theme }) => theme.transitionDuration};
    transition-property: color;
  }
`;

export default GlobalStyle;
