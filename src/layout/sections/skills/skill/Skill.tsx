import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon';


type SkillPropstype = {
    iconId: string,
    iconWidth?: string,
    iconHeight?: string,
    viewBox: string,
    skillTitle: string
}
export const Skill = (props: SkillPropstype) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}
                  viewBox={props.viewBox}/>
            <SkillTitle>{props.skillTitle}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: calc(100% / 4 - 20px);
  padding: 10px 0;
`
const SkillTitle = styled.h3`
  text-align: center;
  letter-spacing: 2.166px;
  text-transform: uppercase;
`