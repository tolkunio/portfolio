import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

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
  }
  section{
    padding: 100px 0;
    @media ${theme.media.mobile}{
      padding: 40px 0;
    }
  }
  section:nth-of-type(odd){
    background-color:${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.accent};
  }
  
  h3{
    color: ${theme.colors.baseFontColor};
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
  }
  p{
   font-weight: 400;
   font-size: 14px; 
    line-height: 1.4;
  }
  button{
    cursor: pointer;
    color: ${theme.colors.fontColorSecond};
    outline: 1px solid;
  }
`