import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faVideo } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import VideoModal from './VideoModal';

// Styled Button Component with enhanced shadow
const StyledButton = styled.a`
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
    padding: 12px 24px;
    font-size: 0.75rem;
  }
`;

const StyledButton2 = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background: linear-gradient(to right, #6ee7b7, #a3e635);
  border-radius: 9999px;
  padding: 12px 24px;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
  box-shadow: 0px 0px 15px 3px rgba(0, 255, 0, 0.2);

  &:hover {
    background: linear-gradient(to right, #4ade80, #a3e635);
    transform: scale(1.05);
    box-shadow: 0px 0px 20px 5px rgba(0, 255, 0, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 20px 5px rgba(0, 255, 0, 0.4);
  }

  @media only screen and (max-width: 768px) {
    padding: 12px 24px;
    font-size: 0.75rem;
  }
`;

const ProjectCard = ({ imgUrl, tags, title, description, githubUrl, demoUrl }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleOpenModal = () => {
    setShowVideoModal(true);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      <article className="flex flex-col rounded-lg items-center flex-shrink-0 bg-[#292929] p-6 overflow-hidden snap-center 
      md:w-[350px] md:h-[450px] w-[290px] h-[450px] border border-red-300 shadow-dark-red">
        <img
          className="w-32 h-32 xl:w-[150px] xl:h-[150px] object-contain object-center"
          src={imgUrl}
          alt={title}
        />
        <div className="flex space-x-2 mt-4">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-[#f07171] bg-opacity-10 text-[#ff2f2f] rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-left w-full mt-4">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <div className="max-w-[250px] mb-4 min-h-[64px]">
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
          <div className="flex justify-center space-x-4 px-10 py-7">
            <StyledButton href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              <span>Code</span>
            </StyledButton>

            <StyledButton2 onClick={handleOpenModal}>
              <FontAwesomeIcon icon={faVideo} className="mr-2" />
              <span>Demo</span>
            </StyledButton2>
          </div>
        </div>
      </article>

      {showVideoModal && <VideoModal videoUrl={demoUrl} onClose={handleCloseModal} />}
    </>
  );
};

export default ProjectCard;
