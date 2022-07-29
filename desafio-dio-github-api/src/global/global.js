import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  boxSizing: 'border-box';
}

body{
  width: 100vw;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
}
`;
