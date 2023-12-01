import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {theme} from "../../../styles/Theme";
import profilePhoto from '../../../assets/images/portfolio.png'
import {font} from "../../../styles/Common";
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';


export const Main = () => {
    return (
        <StyledMain id={'home'}>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <ProfileInfo>
                        <Greeting>Hi👋!</Greeting>
                        <Greeting>My name is</Greeting>
                        <Name>Tolkun O</Name>
                        <Position>
                            <Typewriter
                                options={{
                                    strings: ['I build things for web'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </Position>
                    </ProfileInfo>
                    <Tilt glareEnable={true} glareMaxOpacity={0.9} glareColor="lightblue" glarePosition="all">
                        <PhotoWrapper>
                            <Photo src={profilePhoto} alt=""></Photo>
                        </PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;

  @media ${theme.media.mobile} {
    padding: 70px 0;
  }
`
const ProfileInfo = styled.div`
  text-align: left;
  @media ${theme.media.mobile} {
    padding: 0 10px;
  }

`
const Greeting = styled.div`
  ${font({family: 'Poppins', weight: 600, fmax: 50, fmin: 36})};
  padding: 10px 0;
  color: ${theme.colors.fontColorSecond};
  letter-spacing: 0.25px;

`
const Name = styled.span`
  ${font({family: 'Poppins', weight: 700, fmax: 58, fmin: 36})};
  background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;;
  line-height: 70px;
  letter-spacing: -1px;

`
const Position = styled.h1`
  padding: 10px 0;
  color: ${theme.colors.fontColorSecond};
  ${font({family: 'Poppins', color: `${theme.colors.fontColorSecond}`, weight: 600, fmax: 50, fmin: 36})};
  letter-spacing: 0.25px;
`
const PhotoWrapper = styled.div`
  margin-top: 10px;
`
const Photo = styled.img`
  width: 350px;
  height: 350px;
  flex-shrink: 0;
  @media ${theme.media.mobile} {
    width: 300px;
    height: 300px;
  }
`