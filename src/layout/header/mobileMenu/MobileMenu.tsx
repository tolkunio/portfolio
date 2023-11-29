import React from 'react';
import styled, {css} from 'styled-components';
import {theme} from "../../../styles/Theme";

export const MobileMenu = (props: { menuItems: string[] }) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuWrapper isOpen={false}>
                <ul>
                    {props.menuItems.map((el, id) => {
                        return <ListItem key={id}>
                            <Link href={'#'}>{el}</Link>
                        </ListItem>
                    })}
                </ul>
            </MobileMenuWrapper>

        </StyledMobileMenu>
    );
};
const StyledMobileMenu = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -110px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.baseBlack};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(0, 0, 0, 0);
    `
    }
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.baseBlack};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateX(0);
      `
      }
    }
    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.baseBlack};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateX(0);
          width: 36px;
        `
      }
`
const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
  background-color: whitesmoke;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  }
  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
  }
`

const ListItem = styled.li`
  &:hover {

    transform: translateY(-4px);
  }
`
const Link = styled.a`
  color: #212121;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1.375px;


`
