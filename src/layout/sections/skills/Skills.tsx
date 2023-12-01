import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from '../../sections//skills/skill/Skill';
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Skills = () => {
    return (
        <StyledSkills id={'tech'}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionDescription>Technologies I’ve been working with recently</SectionDescription>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <Skill
                        iconId={'javascript'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'JS'}/>
                    <Skill
                        iconId={'typescript'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'TS'}/>
                    <Skill
                        iconId={'reactjs'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'React'}/>
                    <Skill
                        iconId={'redux'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'Redux'}/>
                    <Skill
                        iconId={'html5'}
                        viewBox={'0 0 30 30'}
                        skillTitle={'HTML 5'}/>
                    <Skill
                        iconId={'css3'}
                        viewBox={'0 0 50 50'}
                        skillTitle={'CSS3'}/>
                    <Skill
                        iconId={'styledComponents'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'Styled Components'}/>
                    <Skill
                        iconId={'material-ui'}
                        viewBox={'0 -26 256 256'}
                        skillTitle={'Material UI'}/>
                    <Skill
                        iconId={'node-js'}
                        viewBox={'0 0 32 32'}
                        skillTitle={'Node JS'}/>
                    <Skill
                        iconId={'postgrest'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'postgresql'}/>
                    <Skill
                        iconId={'rest'}
                        viewBox={'0 0 20 20'}
                        skillTitle={'rest api'}/>
                    <Skill
                        iconId={'git'}
                        viewBox={'0 0 32 32'}
                        skillTitle={'Git'}/>


                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  display: flex;
  margin-bottom: 50px;
`
const SectionDescription = styled.h2`
  ${font({family:'Montserrat', color: `${theme.colors.sectionDescFontColor}`,weight:400,fmax:20,fmin:16})};
  text-align: center;
  line-height: 26px;
  margin-bottom: 20px;
`