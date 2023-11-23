import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/heroImg.png'
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <ProfileInfo>
                        <Greeting>Hi !</Greeting>
                        <Name>I'm Tolkun Omurbekova</Name>
                        <Position>a Front-End Developer</Position>
                        <Description>
                            Front-End developer based in Bishkek, Kyrgyzstan <br/>
                            I’m coding with a clean and beautiful problem <br/>
                            solving in mind.
                        </Description>
                    </ProfileInfo>
                    <Photo src={photo} alt=""></Photo>
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
const Greeting = styled.div`
  padding: 10px 0;
  color: ${theme.colors.fontColorSecond};
  font-size: 35px;
  font-weight: 400;
  letter-spacing: 0.175px;
`
const Name = styled.span`
  padding: 10px 0;
  color: ${theme.colors.fontColorSecond};
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 0.25px;
`
const Position = styled.h1`
  padding: 10px 0;
  color: ${theme.colors.fontColorSecond};
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 0.25px;
`
const Description = styled.span`
  padding: 20px 0;
  color: #082032;
  font-size: 23px;
  font-weight: 400;
  letter-spacing: 0.345px;
  word-wrap: break-word;
`

const Photo = styled.img`
  width: 250px;
  height: 220px;
  object-fit: cover;
`