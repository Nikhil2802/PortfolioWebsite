import React, { useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';
import Modal from './Modal';

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
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


const EducationCard = ({ education }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          background: '#292929',
          color: '#fff',
          boxShadow: "0px 0px 15px 3px rgba(0,255,0,0.2)",
          borderRadius: "6px",
          border: "2px solid #86efac",  
        }}
        contentArrowStyle={{
          borderRight: '7px solid  #292929'
        }}
        iconStyle={{ background: '#292929', color: '#fff' }}
        icon={<img src={education.logo} alt={education.institution} className="w-10 h-10 md:w-16 md:h-14 object-contain object-center" />}
      >
        <Top>
          <Body>
            <Role>{education.degree}</Role>
            <Company>{education.institution}</Company>
            <Date>{`${education.startDate} - ${education.endDate}`}</Date>
          </Body>
        </Top>

        <Description>
          {education.summaryPoints && <Span>{education.summaryPoints}</Span>}
        </Description>
          <a onClick={handleViewMore} target="_blank" rel="noopener noreferrer" className="items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium text-sm px-5 py-2.5 text-center me-52 md:me-64 -mb-8 md:-mb-1  rounded-full">
            <span>View More</span>
          </a>
      </VerticalTimelineElement>
      {isModalOpen && <Modal education={education} onClose={handleCloseModal} />}
    </>
  );
};

export default EducationCard;
