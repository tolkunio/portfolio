import React from 'react';
import styled from 'styled-components';
import {Link} from "../../../../components/Link";

export const TabMenu = (props: { menuItems: string[] }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((el, id) => {
                    return <ListItem key={id}>
                        <Link href={'#'}>{el}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};
const StyledTabMenu = styled.nav`
  margin-bottom: 30px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`
const ListItem = styled.li`
 
`
