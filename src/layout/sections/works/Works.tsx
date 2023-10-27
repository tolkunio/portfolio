import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Menu} from '../../../components/menu/Menu';
import {Work} from 'src/layout/sections/works/work/Work';

const works=['All','Landing Page','Reac','SPA']
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={works}/>
           <Work/>
        </StyledWorks>
    );
};
const StyledWorks=styled.section`
    min-height: 100vh;
    background-color: aliceblue;
`