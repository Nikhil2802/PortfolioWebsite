import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

// Keyframes for the fade-in and fade-out animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Styled components
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
  border: 2px solid #86efac;
  padding: 16px;
  border-radius: 8px;
  max-width: 97.3%;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0px 0px 15px 3px rgba(0, 255, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.3s ease-in;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};

  @media (min-width: 576px) {
    max-width: 85%;
  }

  @media (min-width: 768px) {
    max-width: 75%;
  }

  @media (min-width: 992px) {
    max-width: 40%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #86efac;
  padding-bottom: 8px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #fff;
`;

const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background: linear-gradient(to right, #ff7e7e, #ff3b3b);
  border-radius: 9999px;
  padding: 12px 24px;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
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
`;

const ModalBody = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  p, ul {
    margin: 0;
    color: #fff;
  }
  ul {
    padding-left: 1.5rem;
  }
`;

// Modal component
const Modal = ({ education, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        initiateClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const initiateClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300); // Match the animation duration
  };

  return ReactDOM.createPortal(
    <ModalBackground isVisible={isVisible} onClick={initiateClose}>
      <ModalContainer isVisible={isVisible} onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>{education.degree}</Title>
          <CloseButton onClick={initiateClose}>Close</CloseButton>
        </Header>
        <ModalBody>
          <h3>{education.institution}</h3>
          <p>{`${education.startDate} - ${education.endDate}`}</p>
          {Array.isArray(education.detailedDescription) ? (
            <ul>
              {education.detailedDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{education.detailedDescription}</p>
          )}
        </ModalBody>
      </ModalContainer>
    </ModalBackground>,
    document.body
  );
};

export default Modal;
