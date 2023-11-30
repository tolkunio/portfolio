import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon';
import {theme} from "../../../../styles/Theme";
import {font} from "../../../../styles/Common";


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
            <Icon width={'80'}
                  height={'80'}
                  iconId={props.iconId}
                  viewBox={props.viewBox}/>
            <SkillTitle>{props.skillTitle}</SkillTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: calc(100% / 4 - 20px);
  padding: 10px 0;
  
  @media ${theme.media.mobile}{
    width: calc(100% / 3 - 10px);
  }
`
const SkillTitle = styled.h3`
  ${font({family:'Montserrat',weight:400,fmax:16,fmin:10})};
  text-align: center;
  letter-spacing: 2.166px;
  text-transform: uppercase;
`