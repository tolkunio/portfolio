import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon';
type ContactPropsType ={
    iconId:string,
    viewBox:string,
    link:string
}
export const Contact = (props:ContactPropsType) => {
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
const StyledContact= styled.div`

`
const SocialList=styled.ul`
    
`
const SocialItem = styled.li`
    
`
const SocialLink= styled.a`

`
const LinkTitle = styled.h4`
`