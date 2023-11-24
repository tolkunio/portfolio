import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Link=styled.a`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 0;
  
  &:hover{
    &::before{
      height: 2px;
    }
  }
  
  &::before{
    content: '';
    display: inline-block;
   
    background-color: ${theme.colors.line};
    
    position: absolute;
    bottom: 1px;
    left: 0;
    right: 0;
    z-index: -1;
  }
`