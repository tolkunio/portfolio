import React from 'react';
import styled from 'styled-components';
import {Icon} from 'src/components/icon/Icon';
type WorkPropsType={
    iconId:string
    src:string,
    title:string,
}
export const Work = (props:WorkPropsType) => {
    return (
        <div>
            <Icon></Icon>
            <Title></Title>
            <Image src={props.src} alt={''}/>
        </div>
    );
};
const Title = styled.h3`
    
`
const Image= styled.img`
    
`