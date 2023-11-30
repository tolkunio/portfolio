import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Container} from '../../../components/Container';
import {TabMenu} from './tabmenu/TabMenu';
import {Work} from './work/Work';
import {FlexWrapper} from '../../../components/FlexWrapper';
import sendpay from '../../../assets/images/sendPay.png'
import edtech from '../../../assets/images/edtech.png'
import ecom from '../../../assets/images/e-commerce.png'


const works = ['All', 'Landing Page', 'React', 'SPA']
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={works}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <Work iconId={''}
                          src={sendpay}
                          title={'SendPay'}
                          text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                 Assumenda at, autem beatae deleniti ea error eum illum ipsam ipsum`}/>
                    <Work iconId={''}
                          src={edtech}
                          title={'EdTech'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Work iconId={''}
                          src={ecom}
                          title={'E-Commerce'}
                          text={'test wordk descriotion fjkshskjdfhskjdfh shshf'}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`
  display: flex;
`