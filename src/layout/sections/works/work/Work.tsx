import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon';
import {Link} from "../../../../components/Link";

type WorkPropsType = {
    iconId: string
    src: string,
    title: string,
    text: string
}
export const Work = ({iconId, src, title, text}: WorkPropsType) => {
    return (
        <StyledWork>
            <Icon iconId={iconId}/>
            <Title>{title}</Title>
            <Image src={src} alt={''}/>
            <StyledParagh>
                {text}
            </StyledParagh>
            <Link href={'#'}>demo</Link>
            <Link href={'#'}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
`
const Title = styled.h3`

`
const Image = styled.img`
  width: 100%;
  height: 164px;
  object-fit: cover;
`
const StyledParagh=styled.p`
    
`