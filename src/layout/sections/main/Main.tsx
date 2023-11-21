import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/heroImg.png'
import {FlexWrapper} from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi !</span>
                    <span>I'm Tolkun Omurbekova</span>
                    <h1>a Front-End Developer</h1>
                    <span>
                        Front-End developer based in Bishkek, Kyrgyzstan
                        I’am coding with a clean and beautiful problem
                        solving in mind.
                    </span>
                </div>
                <Photo src={photo} alt=""></Photo>
            </FlexWrapper>

        </StyledMain>
    );
};
const StyledMain = styled.div`
  padding: 60px 0;
  margin: 20px;
`
const Photo = styled.img`
  width: 250px;
  height: 220px;
  object-fit: cover;
`