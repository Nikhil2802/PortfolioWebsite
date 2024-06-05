import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

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
`;


const ModalContainer = styled.div`
  background: #292929;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0px 0px 15px 3px rgba(0, 255, 0, 0.7);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CloseButton = styled.button`
  background-color: #ff5f5f;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: -195px;
  &:hover {
    background-color: #e55555;
  }
`;

const Modal = ({ education, onClose }) => {
  return ReactDOM.createPortal(
    <ModalBackground>
      <ModalContainer>
        <CloseButton onClick={onClose} target="_blank" rel="noopener noreferrer" className="items-center text-white bg-gradient-to-r from-red-400 via-red-600 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium text-sm px-5 py-2.5 text-center me-52  -mb-8 md:-mb-1 rounded-full">Close</CloseButton>
        {/* <CloseButton onClick={onClose} target="_blank" rel="noopener noreferrer" className="items-center text-white bg-gradient-to-r from-pink-400 via-pink-600 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 py-2.5 text-center me-52 md:me-64 -mb-8 md:-mb-1  rounded-full">Close</CloseButton> */}
        <h2>{education.degree}</h2>
        <h3>{education.institution}</h3>
        <p>{`${education.startDate} - ${education.endDate}`}</p>
        <p>{education.detailedDescription}</p>
      </ModalContainer>
    </ModalBackground>,
    document.body
  );
};

export default Modal;
