import React from 'react';
import styled from 'styled-components';

export const HeaderMenu = (props:{menuItems:string[]}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((el,id)=>{
                    return <ListItem key={id}>
                        <Link href={'#'}>{el}</Link>
                    </ListItem>
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
const ListItem=styled.li`
`
const Link = styled.a`
  color: #212121;
  text-align: center;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1.375px;
`