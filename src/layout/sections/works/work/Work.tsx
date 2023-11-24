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
            <Image src={src} alt={''}/>
            <Description>
                <Title>{title}</Title>
                <StyledParagh>
                    {text}
                </StyledParagh>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>
            </Description>


        </StyledWork>
    );
};

const StyledWork = styled.div`
  max-width: 540px;
  width: 100%;
`
const Description = styled.div`
    padding: 25px 20px;
`
const Title = styled.h3`
  text-align: left;
`
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`
const StyledParagh = styled.p`
  text-align: left;
  margin: 14px 0 10px;

`