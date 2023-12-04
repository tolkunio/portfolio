import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {font} from "./Common";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.fontColorFirst};
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.fontColorSecond};
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: unset;
    cursor: pointer;
    color: ${theme.colors.fontColorSecond};
  }

  section {
    padding: 100px 0;
    @media ${theme.media.mobile} {
      padding: 40px 0;
    }
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.accent};
  }

  h3 {
    ${font({family: 'Montserrat', color: '${theme.colors.baseFontColor}', weight: 400, fmax: 16, fmin: 10})};
  }

  p {
    ${font({family: 'Poppins', weight: 400, fmax: 14, fmin: 10})};
    line-height: 1.4;
  }
`