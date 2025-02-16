import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// Styled Components
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.3s ease-in;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: #292929;
  color: #fff;
  border: 2px solid ${({ isEducation }) => (isEducation ? "#86efac" : "#fc8181")}; /* Green for education, Red for experience */
  padding: 16px;
  border-radius: 8px;
  max-width: 97.3%;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0px 0px 15px 3px ${({ isEducation }) => (isEducation ? "rgba(0, 255, 0, 0.2)" : "rgba(255, 0, 0, 0.2)")};
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.3s ease-in;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  
  // @media (max-width: 768px) {
  //   transform: translateY(-10%); 
  // }

  @media (min-width: 576px) { max-width: 85%; }
  @media (min-width: 768px) { max-width: 75%; }
  @media (min-width: 992px) { max-width: 40%; }
`;


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ isEducation }) => (isEducation ? "#86efac" : "#fc8181")};
  padding-bottom: 8px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #fff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: linear-gradient(to right, #ff7e7e, #ff3b3b);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover { transform: scale(1.1); }
`;

const ModalBody = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  p, ul { margin: 0; color: #fff; }
  ul { padding-left: 1.5rem; }
`;

// Styled component for bold titles before the dash with a custom color
const BoldTitle = styled.span`
  font-weight: bold;
  font-family: 'Arial', sans-serif;
  color: ${({ isEducation }) => (isEducation ? "#86efac" : "#fc8181")}; /* Green for education, Red for experience */
`;

// Modal Component
const Modal = ({ data, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const isEducation = type === "education";

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') initiateClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const initiateClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return ReactDOM.createPortal(
    <ModalBackground isVisible={isVisible} onClick={initiateClose}>
      <ModalContainer isVisible={isVisible} isEducation={isEducation} onClick={(e) => e.stopPropagation()}>
        <Header isEducation={isEducation}>
          <Title>{isEducation ? data.degree : data.role}</Title>
          <CloseButton onClick={initiateClose}>&times;</CloseButton>
        </Header>
        <ModalBody>
          <h3>{isEducation ? data.institution : data.company}</h3>
          <p>{`${data.startDate} - ${data.endDate}`}</p>
          {Array.isArray(data.detailedDescription) ? (
            <ul>
              {data.detailedDescription.map((item, index) => {
                // Split the text into title and description parts
                const [title, description] = item.split(" - ");
                return (
                  <li key={index}>
                    <BoldTitle isEducation={isEducation}>{title} - </BoldTitle>
                    {description}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>{data.detailedDescription}</p>
          )}
        </ModalBody>
      </ModalContainer>
    </ModalBackground>,
    document.body
  );
};

export default Modal;
