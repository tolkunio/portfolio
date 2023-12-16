import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Container} from '../../../components/Container';
import {TabMenu} from './tabmenu/TabMenu';
import {Work} from './work/Work';
import {FlexWrapper} from '../../../components/FlexWrapper';
import beauty from '../../../assets/images/healthy-beaty.png'
import todos from '../../../assets/images/todos.png'
import ssn from '../../../assets/images/ssn.jpg'
import ecom from '../../../assets/images/e-commerce.png'


const works = ['All', 'Landing Page', 'React', 'SPA']
export const Works = () => {
    return (
        <StyledWorks id={'projects'}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <TabMenu menuItems={works}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={'wrap'}>
                    <Work iconId={''}
                          src={todos}
                          title={'Task Organized App'}
                          text={`Task tracking app for manage tasks, projects and everything in between`}/>
                    <Work iconId={''}
                          src={beauty}
                          title={'Healthy Beauty'}
                          text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Work iconId={''}
                          src={ssn}
                          title={'Social network'}
                          text={'test wordk descriotion fjkshskjdfhskjdfh shshf'}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`
  display: flex;
`