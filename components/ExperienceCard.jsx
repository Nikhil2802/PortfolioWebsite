import React, { useState, useEffect } from 'react';
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
  margin-bottom: 40px;  // Added margin-bottom to avoid overlap with the button

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 1px; // Adjusted margin for mobile to prevent button overlap
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ViewMoreButton = styled.a`
  position: absolute; /* Positioning the button absolutely within its container */
  bottom: 10px; /* Spacing from the bottom */
  left: 10px; /* Spacing from the left */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #000; /* Black text color */
  background: linear-gradient(to right, #ff7e7e, #ff3b3b);
  border-radius: 9999px; /* Fully rounded button */
  padding: 12px 24px; /* Increased padding for a larger button */
  font-size: 0.875rem; /* Larger font size for the button */
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  box-shadow: 0px 0px 15px 3px rgba(255, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(to right, #ff4c4c, #ff1a1a);
    transform: scale(1.05);
    box-shadow: 0px 0px 20px 5px rgba(255, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 20px 5px rgba(255, 0, 0, 0.4);
  }

  @media only screen and (max-width: 768px) {
    padding: 8px 16px; /* Adjusted padding for mobile */
    font-size: 0.75rem; /* Smaller font size for mobile */
    bottom: 10px; /* Adjust bottom positioning on mobile */
  }
`;

const ExperienceCard = ({ experience }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  const handleViewMore = () => { setIsModalOpen(true); };
  const handleCloseModal = () => { setIsModalOpen(false); };

  // Set up an effect to detect screen size change
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Set mobile state based on window width
    };

    checkScreenSize(); // Run on component mount
    window.addEventListener('resize', checkScreenSize); // Listen for screen size changes

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Clean up event listener
    };
  }, []);

  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          background: '#292929',
          color: '#fff',
          boxShadow: "0px 0px 15px 3px rgba(255,0,0,0.2)",
          borderRadius: "6px",
          border: "2px solid #fc8181",
        }}
        contentArrowStyle={{ borderRight: '7px solid #292929' }}
        date={!isMobile ? `${experience.startDate} - ${experience.endDate}` : null} // Show date inline on desktop only
        iconStyle={{ background: '#292929', color: '#fff' }}
        icon={<img src={experience.logo} alt={experience.company} className="w-14 h-12 md:w-20 md:h-20 object-contain object-center" />}
      >
        <Top>
          <Body>
            <Role>{experience.role}</Role>
            <Company>{experience.company}</Company>
            {/* Only show the Date on mobile view */}
            {isMobile && <Date>{`${experience.startDate} - ${experience.endDate}`}</Date>}
          </Body>
        </Top>

        <Description>
          {experience.summaryPoints && <Span>{experience.summaryPoints}</Span>}
        </Description>

        {experience.detailedDescription && experience.detailedDescription.length > 0 && (
          <ViewMoreButton onClick={handleViewMore}>View More</ViewMoreButton>
        )}
      </VerticalTimelineElement>

      {isModalOpen && <Modal data={experience} type="experience" onClose={handleCloseModal} />}
    </>
  );
};

export default ExperienceCard;
