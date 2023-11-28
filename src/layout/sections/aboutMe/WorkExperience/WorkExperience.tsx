import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import office from '../../../../assets/icons/office.svg'
import location from '../../../../assets/icons/location.svg'

type WorkExperiencePropsType = {
    workTitle: string,
    workTime: string,
    companyName: string,
    location?: string,
    workPeriod: string
}

export const WorkExperience = ({workTitle, workTime, companyName, location, workPeriod}: WorkExperiencePropsType) => {
    return (
        <StyledWorkExperience>
            <FlexWrapper justify={'space-between'}>
                <WorkTitle>{workTitle}</WorkTitle>
                <WorkTime>{workTime}</WorkTime>
            </FlexWrapper>
            <FlexWrapper justify={'space-between'}>
                <StyledName>{companyName}</StyledName>
                {location ? <StyledLocation>{location}</StyledLocation> : ''}
                <StyledSpan>{workPeriod}</StyledSpan>
            </FlexWrapper>
            <StyledLine/>
        </StyledWorkExperience>
    );
};
const StyledWorkExperience = styled.div`
`
const WorkTitle = styled.span`
  color: var(--dark-content, #666);
  font-size: 20px;
  font-weight: 400;
  line-height: 28px; /* 140% */
  letter-spacing: 1px;
`
const WorkTime = styled.span`
  width: 80px;
  height: 20px;
  border-radius: 100px;
  background: #D7FFE0;
  color: #018C0F;
  text-align: center;
  font-size: 9px;
  font-weight: 600;
  line-height: 26px; /* 288.889% */
`
const StyledSpan = styled.span`
  color: var(--light-Content, #A7A7A7);
  font-size: 12px;
  font-weight: 500;
  line-height: 28px; /* 233.333% */
  letter-spacing: 1px;
`
const StyledLocation = styled.span`
  color: var(--light-Content, #A7A7A7);
  font-size: 12px;
  font-weight: 500;
  line-height: 28px; /* 233.333% */
  letter-spacing: 1px;
  position: relative;

  &:before {
    content: url(${location});
  }
`
const StyledName = styled.span`
  color: var(--light-Content, #A7A7A7);
  font-size: 12px;
  font-weight: 500;
  line-height: 28px; /* 233.333% */
  letter-spacing: 1px;
  position: relative;

  &:before {
    content: url(${office});
  }
`
const StyledLine = styled.div`
  border-bottom: 2px solid #EBEAED;
  margin-top: 5px;
  width: 100%;
  margin-bottom: 30px;
`