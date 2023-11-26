import React from 'react';
import styled from 'styled-components';
import {Icon} from '../../../../components/icon/Icon';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    iconId: string
    src: string,
    title: string,
    text: string
}
export const Work = ({iconId, src, title, text}: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={src} alt={''}/>
                <Button>View project</Button>
            </ImageWrapper>
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
const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;
    }
  }
  ${Button} {
    color: white;
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }


`

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