import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Menu} from '../../../components/menu/Menu';
import {Work} from './work/Work';
import {FlexWrapper} from '../../../components/FlexWrapper';
import sendpay from '../../../assets/images/sendPay.png'
import edtech from '../../../assets/images/edtech.png'
import ecom from '../../../assets/images/e-commerce.png'



const works=['All','Landing Page','Reac','SPA']
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={works}/>
            <FlexWrapper justify={'space-around'}>
                <Work iconId={''} src={sendpay} title={'SendPay'}/>
                <Work iconId={''} src={edtech} title={'EdTech'}/>
                <Work iconId={''} src={ecom} title={'E-Commerce'}/>
            </FlexWrapper>

        </StyledWorks>
    );
};
const StyledWorks=styled.section`
    min-height: 100vh;
    background-color: aliceblue;
`