import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon';
type WorkPropsType={
    iconId:string
    src:string,
    title:string,
}
export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork >
            <Icon iconId={props.iconId} />
            <Title>{props.title}</Title>
            <Image src={props.src} alt={''}/>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
`
const Title = styled.h3`
    
`
const Image= styled.img`
    width: 100%;
    height: 164px;
  object-fit: cover;
`