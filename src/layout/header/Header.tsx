import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../components/logo/Logo';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export type MenuType = {
    title: string,
    href: string
}
const items: MenuType[] = [
    {title: 'Home', href: 'home'},
    {title: 'About', href: 'about'},
    {title: 'Tech Stack', href: 'tech'},
    {title: 'Projects', href: 'projects'},
    {title: 'Contact', href: 'contact'}]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #FFFFFF;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`
