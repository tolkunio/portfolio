import React from 'react';
import styled from "styled-components";
import {Container} from '../../../components/Container';
import {WorkExperience} from "./WorkExperience/WorkExperience";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/SectionTitle";

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
                    <SectionTitle>About Me</SectionTitle>
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
                                        workTime={'Full Time'}
                                        companyName={'Kyrgyzskij Rossijskij-Slavjanskij Universitet'}
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
  ${font({family: 'Poppins', color: `${theme.colors.baseBlack}`, weight: 700, fmax: 30, fmin: 16})};
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
  ${font({family: 'Poppins', color: '#666', weight: 400, fmax: 18, fmin: 15})};
  line-height: 26px; /* 144.444% */
  @media ${theme.media.mobile}{
    text-align: center;
  }
`
const WorkExperienceBlock = styled.div`

`
const EducationBlock = styled.div`
`