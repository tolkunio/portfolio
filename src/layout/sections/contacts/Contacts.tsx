import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle'
import {Contact} from '../contacts/contact/Contact';
import {FlexWrapper} from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact Me</SectionTitle>
                <FlexWrapper justify={'space-around'}>
                    <Contact link={'Github'} iconId={'github2'} viewBox={'0 0 20 20'}/>
                    <Contact link={'Linkedin'} iconId={'linkedin'} viewBox={'0 0 32 32'}/>
                    <Contact link={'Email'} iconId={'email'} viewBox={'0 0 24 24'}/>
                    <Contact link={'Telp'} iconId={'telephone'} viewBox={'0 0 24 24'}/>
                </FlexWrapper>
                <Button>Send Message</Button>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 80vh;
`
