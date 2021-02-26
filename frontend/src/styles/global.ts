import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root, #root>div {
  height: auto;
  width: auto;
  }

  body {
    background: #FEFEFE;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: 0;
  }

  button {
    cursor: pointer;
  }
`;
