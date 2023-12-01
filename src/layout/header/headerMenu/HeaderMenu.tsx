import React from 'react';
import styled from 'styled-components';
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {MenuType} from "../Header";
import {Link} from "react-scroll";

export const HeaderMenu = (props: { menuItems: MenuType[] }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((el, id) => {
                    return <ListItem key={id}>
                        <NavLink
                            activeClass="active"
                            smooth={true}
                            spy={true}
                            to={el.href}>{el.title}</NavLink>
                    </ListItem>
                })}
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px
  }

  @media ${theme.media.tablet} {
    display: none;
  }
`
const ListItem = styled.li`

`
const NavLink = styled(Link)`
  ${font({
    family: 'Poppins',
    color: `${theme.colors.sectionTitleFontColor}`,
    weight: 400,
    fmax: 25,
    fmin: 16
  })};

  text-align: center;
  letter-spacing: 1.375px;

  &:hover, &.active {
    color: black;
    font-size: 28px;
  }

`