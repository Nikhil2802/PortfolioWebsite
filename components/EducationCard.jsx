import React, { useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';
import Modal from './Modal';

// Styled components
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
  position: relative; /* Ensure the button can be positioned absolutely */
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
  margin-bottom: 50px; /* Increased margin to ensure space for button */

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 5px; /* Adjusted for mobile view */
  }
`;

// Button with styles
const ViewMoreButton = styled.a`
  position: absolute; /* Positioning the button absolutely within its container */
  bottom: 10px; /* Spacing from the bottom */
  left: 10px; /* Spacing from the left */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #000; /* Black text color */
  background: linear-gradient(to right, #6ee7b7, #a3e635); /* Gradient background */
  border-radius: 9999px; /* Fully rounded button */
  padding: 12px 24px; /* Increased padding for a larger button */
  font-size: 0.875rem; /* Larger font size for the button */
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  box-shadow: 0px 0px 15px 3px rgba(0, 255, 0, 0.2); /* Shadow for the button */

  &:hover {
    background: linear-gradient(to right, #4ade80, #a3e635); /* Darker gradient on hover */
    transform: scale(1.05); /* Scale effect on hover */
    box-shadow: 0px 0px 20px 5px rgba(0, 255, 0, 0.4); /* Enhanced shadow on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 20px 5px rgba(0, 255, 0, 0.4); /* Shadow on focus */
  }

  @media only screen and (max-width: 768px) {
    padding: 8px 16px; /* Adjusted padding for mobile */
    font-size: 0.75rem; /* Smaller font size for mobile */
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

  const isALevels = education.degree === 'A Levels';

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
          paddingBottom: isALevels ? '10px' : '30px', // Reduce padding for A Levels card
        }}
        contentArrowStyle={{
          borderRight: '7px solid  #292929',
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
      
          {education.summaryPoints && Array.isArray(education.summaryPoints) && (
            <ul className="list-disc pl-5"> {/* Adds bullet points and left padding */}
              {education.summaryPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

          {education.summaryPoints && !Array.isArray(education.summaryPoints) && (
            <Span>{education.summaryPoints}</Span>
          )}
        </Description>

        {education.detailedDescription && education.detailedDescription.length > 0 && (
          <ViewMoreButton onClick={handleViewMore} target="_blank" rel="noopener noreferrer">
            View More
          </ViewMoreButton>
        )}
      </VerticalTimelineElement>

      {isModalOpen && <Modal education={education} onClose={handleCloseModal} />}
    </>
  );
};

export default EducationCard;
