import React from 'react';
import styled from "styled-components";
import {Container} from '../../../components/Container';
import {WorkExperience} from "./WorkExperience/WorkExperience";

type Experience = {
    Title: string,
    workTime: string,
    companyName: string,
    location: string,
    workPeriod: string
}
const experiences: Array<Experience> = [
    {
        Title: 'Frontend developer',
        workTime: 'Full Time',
        companyName: 'Cash2U',
        location: 'Bishkek',
        workPeriod: '2023 Jan - Present'
    },
    {
        Title: 'Junior support Engineer',
        workTime: 'Full Time',
        companyName: 'InstantPayments',
        location: 'Almaty',
        workPeriod: '2019 Dec - 2020 May'
    },
    {
        Title: 'Intern .Net Developer',
        workTime: 'InternShip',
        companyName: 'FinanceSoft',
        location: 'Bishkek',
        workPeriod: '2018 Jan - 2018 July'
    },

]
export const AboutMe = () => {
    return (
        <StyledSection>
            <Container>
                <AboutMeBlock>
                    <BlockTitle>About Me</BlockTitle>
                    <Description>
                        Front-end developer with more than 1 years of commercial experience, creating responsive
                        and user-friendly web applications using JS/ES6+,Typescript, React, Redux Toolkit,
                        HTML/CSS, Rest API.
                        Experience with testing frameworks such as Jest, StoryBook and Material UI for building UI
                        components.
                    </Description>
                    <WorkExperienceBlock>
                        <BlockTitle>Work Experience</BlockTitle>
                        {
                            experiences.map((item, index) => {
                                return <WorkExperience key={index}
                                                       workTitle={item.Title}
                                                       workTime={item.workTime}
                                                       companyName={item.companyName}
                                                       location={item.location}
                                                       workPeriod={item.workPeriod}
                                />
                            })}
                    </WorkExperienceBlock>
                    <EducationBlock>
                        <BlockTitle>Education</BlockTitle>
                        <WorkExperience workTitle={'Bachelor’s degree, Computer Software Engineering'}
                                        workTime={'Full Time'} companyName={'Kyrgyzskij Rossijskij-Slavjanskij Universitet'}
                                        workPeriod={'2013- 2017\n'}/>
                    </EducationBlock>

                </AboutMeBlock>

            </Container>
        </StyledSection>
    );
};
const StyledSection = styled.section`

`
const BlockTitle = styled.h2`
  color: #42446E;
  font-size: 30px;
  font-weight: 700;
  line-height: 52px; /* 123.81% */
  letter-spacing: -0.4px;
  margin-bottom: 15px;
`
const AboutMeBlock = styled.div`
  max-width: 900px;
  padding: 0 40px;
  text-align: left;
`

const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  color: var(--dark-content, #666);
  font-size: 18px;
  font-weight: 400;
  line-height: 26px; /* 144.444% */
`
const WorkExperienceBlock = styled.div`

`
const EducationBlock = styled.div`
`