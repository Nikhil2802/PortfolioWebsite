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
  const hasManyTags = tags.length > 3;

  const handleOpenModal = () => {
    setShowVideoModal(true);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      <article className="flex flex-col rounded-lg items-center flex-shrink-0 bg-[#292929] p-5 md:p-6 overflow-hidden snap-center 
      md:w-[270px] md:h-[470px] w-[290px] h-[480px] border border-red-300 shadow-dark-red">
        <img
          className="w-28 h-28 md:w-32 md:h-32 xl:w-36 xl:h-36 object-contain object-center"
          src={imgUrl}
          alt={title}
        />
        <div className={`flex justify-center gap-2 mt-4 ${hasManyTags ? 'flex-wrap min-h-[52px]' : 'flex-nowrap'}`}>
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-[#f07171] bg-opacity-10 text-[#ff2f2f] rounded-full text-[11px] whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-1 flex-col text-left w-full mt-4">
          <h4 className="text-xl font-semibold mb-2">{title}</h4>
          <div className="max-w-[250px] min-h-[118px]">
            <p className="text-gray-300 text-sm leading-relaxed overflow-hidden [display:-webkit-box] [-webkit-line-clamp:5] [-webkit-box-orient:vertical]">
              {description}
            </p>
          </div>
          <div className="mt-auto flex justify-center gap-3 px-0 pt-5">
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
