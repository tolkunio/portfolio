import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle'
import {Contact} from '../contacts/contact/Contact';
import {FlexWrapper} from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact Me</SectionTitle>
                <FlexWrapper justify={'space-around'}>
                    <Contact link={'Github'} iconId={'github'}/>
                    <Contact link={'Instagram'} iconId={'instagram'}/>
                    <Contact link={'Email'} iconId={'communication/message'}/>
                    <Contact link={'Telp'} iconId={'communication/call'}/>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 80vh;
`
