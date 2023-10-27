import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon';

type SkillPropstype ={
    iconId:string,
    iconWidth:string,
    iconHeight:string,
    viewBox:string,
    skillTitle:string
}
export const Skill = (props:SkillPropstype) => {
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
`
const SkillTitle = styled.h3`
`