import styled from "styled-components";
import {font} from "../styles/Common";
import {theme} from "../styles/Theme";

export const Button = styled.button`
  width: 170px;
  height: 32px;
  ${font({family: 'Poppins',weight: 400, fmax: 14, fmin: 10})};
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
  
  @media ${theme.media.tablet} {
    width: 120px;
    height: 22px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`