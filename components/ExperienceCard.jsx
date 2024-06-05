import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;


const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
      display: "flex",
      flexDirection: "column",
      gap: "12px", 
      background: '#292929', 
      color: '#fff',
      boxShadow: "0px 0px 15px 3px rgba(255,0,0,0.7)",
      borderRadius: "6px", 
      // height: '200px',
      // width: '400px',
      
    }}
      contentArrowStyle={{ 
        borderRight: '7px solid  #292929' 
    }}
    //   date={`${experience.startDate} - ${experience.endDate}`}
      iconStyle={{ background: '#292929', color: '#fff' }}
      icon={<img src={experience.logo} alt={experience.company} className="w-10 h-10 md:w-16 md:h-14 object-contain object-center" />}
    >

      <Top>
        {/* <Image src={experience.logo} /> */}
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{`${experience.startDate} - ${experience.endDate}`}</Date>
        </Body>
      </Top>

      <Description>
        {experience.summaryPoints && <Span>{experience.summaryPoints}</Span>}
      </Description>
       

        

      
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
