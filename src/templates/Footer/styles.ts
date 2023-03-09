import styled from "styled-components";
import { lighten, shade } from "polished";

export const StyledFooter = styled.footer.attrs(({ className }) => ({
  className,
}))`
  background-color: ${({ theme }) => shade(0.4, theme.stdColors.tertiary)};
  & * {
    color: ${({ theme }) => theme.stdColors.light};
  }
  a,
  cite {
    color: ${({ theme }) => theme.stdColors.primary};
    text-decoration: underline;
  }
  a:hover,
  cite:hover {
    color: ${({ theme }) => lighten(0.25, theme.stdColors.primary)};
    transition-property: color;
    transition-duration: ${({ theme }) => theme.transitionDuration};
  }
  em * {
    color: ${({ theme }) => theme.stdColors.primary};
  }
`;
