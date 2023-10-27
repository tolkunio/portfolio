import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../components/FlexWrapper';
import {SectionTitle} from '../../../components/SectionTitle';
import {Skill} from '../../sections//skills/skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper align={'center'} justify={'space-evenly'} wrap={'wrap'}>
                <Skill
                    iconId={'react'}
                    iconHeight={'50'}
                    iconWidth={'50'}
                    viewBox={'0 0 50 50'}
                    skillTitle={'React'}/>
                <Skill
                    iconId={'css3'}
                    iconHeight={'53'}
                    iconWidth={'53'}
                    viewBox={'0 0 53 53'}
                    skillTitle={'CSS3'}/>
                <Skill
                    iconId={'html5'}
                    iconHeight={'44'}
                    iconWidth={'44'}
                    viewBox={'0 0 44 44'}
                    skillTitle={'HTML 5'}/>
                <Skill
                    iconId={'ts'}
                    iconHeight={'50'}
                    iconWidth={'50'}
                    viewBox={'0 0 50 50'}
                    skillTitle={'Typescript'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    min-height: 100vh;
`