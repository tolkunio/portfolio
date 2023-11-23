import React from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Container';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from '../../sections//skills/skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <Skill
                        iconId={'javascript'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'JS'}/>
                    <Skill
                        iconId={'typescript'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'TS'}/>
                    <Skill
                        iconId={'reactjs'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'React'}/>
                    <Skill
                        iconId={'redux'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'Redux'}/>
                    <Skill
                        iconId={'html5'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 30 30'}
                        skillTitle={'HTML 5'}/>
                    <Skill
                        iconId={'css3'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 50 50'}
                        skillTitle={'CSS3'}/>
                    <Skill
                        iconId={'styledComponents'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'Styled Components'}/>
                    <Skill
                        iconId={'material-ui'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 -26 256 256'}
                        skillTitle={'Material UI'}/>
                    <Skill
                        iconId={'node-js'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 32 32'}
                        skillTitle={'Node JS'}/>
                    <Skill
                        iconId={'postgrest'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 120 120'}
                        skillTitle={'postgresql'}/>
                    <Skill
                        iconId={'rest'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 20 20'}
                        skillTitle={'rest api'}/>
                    <Skill
                        iconId={'git'}
                        iconHeight={'120'}
                        iconWidth={'120'}
                        viewBox={'0 0 32 32'}
                        skillTitle={'Git'}/>


                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 120vh;
    display: flex;
`