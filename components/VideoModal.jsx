import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';

// Keyframes for fade-in and fade-out animations
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

// Styled components for the modal
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
  z-index: 2;

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

const CloseButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(to right, #ff7e7e, #ff3b3b);
  border-radius: 50%;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  max-height: 60vh;
  border-radius: 8px;
  z-index: 1;
`;

const VideoModal = ({ videoUrl, onClose }) => {
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
        <CloseButton onClick={initiateClose}>&times;</CloseButton>
        <VideoPlayer class="w-full" controls>
          <source src={videoUrl} type="video/mp4"/>
          Your browser does not support the video tag.
        </VideoPlayer>
      </ModalContainer>
    </ModalBackground>,
    document.body
  );
};

export default VideoModal;
