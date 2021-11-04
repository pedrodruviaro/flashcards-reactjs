import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * { 
    font-family: 'Roboto', sans-serif;
  }

  body {
      background-color: ${(props) => props.theme.bodyBg};
      color: ${(props) => props.theme.dark};
  }

  
`;
