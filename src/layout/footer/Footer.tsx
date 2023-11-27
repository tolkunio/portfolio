import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
    return (
        <StyledFooter>
            <CopyRight>© 2023 Omurbekova Tolkun, All Rights Reserved.</CopyRight>
        </StyledFooter>
    );
};
const StyledFooter=styled.footer`
    padding: 40px 0;
`
const CopyRight=styled.small`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
`
