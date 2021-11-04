import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * { 
    font-family: 'Roboto', sans-serif;
  }

  html {
      @media (max-width: 1080px){
          font-size: 93.75%;
      }

      @media (max-width: 720px){
          font-size: 87.5%;
      }
  }



  body {
      background-color: ${(props) => props.theme.bodyBg};
      color: ${(props) => props.theme.dark};

      -webkit-font-smoothing: antialiased;

      min-height: 100vh;
  }

`;
