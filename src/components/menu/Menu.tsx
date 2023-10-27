import React from 'react';
import styled from 'styled-components';

export const Menu = (props:{menuItems:string[]}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((el,id)=>{
                    return <li key={id}> <a href={'#'}>{el}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    ul {
          display: flex;
          gap:30px
    }
`