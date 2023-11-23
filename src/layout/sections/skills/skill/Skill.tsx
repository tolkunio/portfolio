import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon';


type SkillPropstype = {
    iconId: string,
    iconWidth: string,
    iconHeight: string,
    viewBox: string,
    skillTitle: string
}
export const Skill = (props: SkillPropstype) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}
                  width={props.iconWidth}
                  height={props.iconHeight}
                  viewBox={props.viewBox}/>
            <SkillTitle>{props.skillTitle}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: calc(100% / 4);
`
const SkillTitle = styled.h3`
  color: var(--text, #1F2626);
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 2.166px;
  text-transform: uppercase;
`