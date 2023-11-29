import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";
import profilePhoto from '../../../assets/images/portfolio.png'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <ProfileInfo>
                        <Greeting>Hi👋!</Greeting>
                        <Greeting>My name is</Greeting>
                        <Name>Tolkun O</Name>
                        <Position>I build things for web</Position>
                    </ProfileInfo>
                    <Photo src={profilePhoto} alt=""></Photo>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
`
const ProfileInfo = styled.div`
  padding: 0 40px;
  text-align: left;
`
const Greeting= styled.div`
  padding: 10px 0;
  color: ${theme.colors.fontColorSecond};
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 0.25px;
`
const Name = styled.span`
  background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;

`
const Position = styled.h1`
  padding: 10px 0;
  color: ${theme.colors.fontColorSecond};
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 0.25px;
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  flex-shrink: 0;
`