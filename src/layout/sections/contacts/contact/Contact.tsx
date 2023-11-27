import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon';
import {theme} from "../../../../styles/Theme";

type ContactPropsType = {
    iconId: string,
    viewBox: string,
    link: string
}
export const Contact = (props: ContactPropsType) => {
    return (
        <StyledContact>
            <SocialList>
                <SocialItem>
                    <SocialLink>
                        <Icon iconId={props.iconId} viewBox={props.viewBox}/>
                    </SocialLink>
                </SocialItem>
            </SocialList>
            <LinkTitle>{props.link}</LinkTitle>
        </StyledContact>
    );
};
const StyledContact = styled.div`

`
const SocialList = styled.ul`

`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  color:${theme.colors.fontColorSecond}
  
  &:hover {
    color:${theme.colors.baseFontColor}
    transform: translateY(-4px);
  }
`
const LinkTitle = styled.h4`
  color: #3F3D56;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.925px;

`