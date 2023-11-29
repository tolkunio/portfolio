import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Contact} from "./contact/Contact";
import {theme} from "../../styles/Theme";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'github'} width={'22'} height={'22'} viewBox={'0 0 22 22'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'email'} width={'22'} height={'22'} viewBox={'0 0 24 24'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'linkedin'} width={'22'} height={'22'} viewBox={'0 0 32 32'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
            <CopyRight>© 2023 Omurbekova Tolkun, All Rights Reserved.</CopyRight>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
  padding: 40px 0;
`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
`
const SocialItem = styled.li`
  &:hover {
    transform: translateY(-4px);
  }
`
const SocialLink = styled.a`
`
const CopyRight = styled.small`
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: normal;
`

