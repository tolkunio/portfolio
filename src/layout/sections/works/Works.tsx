import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from '../../../components/SectionTitle';
import {Container} from '../../../components/Container';
import {TabMenu} from './tabmenu/TabMenu';
import {Work} from './work/Work';
import {FlexWrapper} from '../../../components/FlexWrapper';
import beauty from '../../../assets/images/healthy-beaty.png'
import todos from '../../../assets/images/todos.png'
import diary from '../../../assets/images/diary.png';


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
                          text={'Healthy Beaty - All for modern beauty & cosmetics shop sites'}/>
                    <Work iconId={''}
                          src={diary}
                          title={'The Diary'}
                          text={' Personal Diary is an online diary app that lets you write your thoughts, secrets, and personal events in a safe and private way. With its unique and intuitive user interface, it is a perfect tool for anyone who wants to create a diary of their own. '}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`
  display: flex;
`