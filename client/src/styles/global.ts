import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width:720px) {
      font-size: 87.5%;
    }

    overflow-x: hidden;
  }

  body {
    font-family: 'Barlow', sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.textDark};
    font: 400 16px Barlow, sans-serif;
  }


  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`