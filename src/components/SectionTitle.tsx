import styled from 'styled-components';
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({family: 'Poppins', color: `${theme.colors.sectionTitleFontColor}`, weight: 700, fmax: 30, fmin: 16})};
  text-align: center;
  line-height: 26px; /* 54.167% */
  margin-bottom: 40px;
`