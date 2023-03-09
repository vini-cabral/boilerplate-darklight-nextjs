import styled from "styled-components";

export const StyledHeader = styled.header.attrs(({ className }) => ({
  className,
}))`
  background-color: ${({ theme }) => theme.colors.background02};
  transition-duration: ${({ theme }) => theme.transitionDuration};
  transition-property: background-color;
  * {
    color: ${({ theme }) => theme.colors.text02};
  }
`;
