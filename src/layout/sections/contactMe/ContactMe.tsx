import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle'
import { Container } from '../../../components/Container';

export const ContactMe = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>For any questions please mail me:</SectionTitle>
                <StyledEmail>toprog27@gmail.com</StyledEmail>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    ${SectionTitle}{
      margin-bottom: 5px;
    }

`
const StyledEmail= styled.span`
  text-align: center;
  font-family: DM Sans;
  font-size: 30px;
  font-weight: 700;
  line-height: 70px; /* 120.69% */
  letter-spacing: -1px;
  background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`
