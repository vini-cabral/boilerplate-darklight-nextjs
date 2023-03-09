import styled from "styled-components";

export const StyledSpan = styled.span.attrs(({ className }) => ({
  className,
}))`
  & > * {
    transition-duration: ${({ theme }) => theme.transitionDuration};
    transition-property: opacity, transform;
  }
  &:hover svg > * {
    color: ${({ theme }) =>
      theme.name === "dark" ? theme.stdColors.light : theme.stdColors.dark};
    transition-duration: ${({ theme }) => theme.transitionDuration};
    transition-property: color;
  }
`;
