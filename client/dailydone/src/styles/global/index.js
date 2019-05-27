import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #FFF;
    background: #222;
    font-family:Helvetica;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100vh;
  }
`;

export default GlobalStyle;
