import styled from 'styled-components';
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  color: #14279B;
  text-align: center;
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 6.475px;
  position: relative;
  margin-bottom: 90px;
  
  &:before{
    content: '';
    display: inline-block;
    width: 80px;
    height: 1px;
    background-color: ${theme.colors.line};
    
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
    bottom: -30px;
  }
`