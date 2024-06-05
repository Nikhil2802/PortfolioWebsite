import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ imgUrl, tags, title, description, githubUrl, demoUrl }) => {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 bg-[#292929] p-6 overflow-hidden snap-center w-[350px] h-[450px]">
      <img
        className="w-32 h-32 xl:w-[150px] xl:h-[150px] object-contain object-center"
        src={imgUrl}
        alt={title}
      />
      <div className="flex space-x-2 mt-4">
        {tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-[#f07171] bg-opacity-10 text-[#ff2f2f] rounded-full text-xs">{tag}</span>
        ))}
      </div>
      <div className="text-left w-full mt-4">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <div className="max-w-[250px] mb-4">
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
        <div className="flex space-x-4 px-10 py-7">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 rounded-full">
            <FontAwesomeIcon icon={faCode} className="mr-2" />
            <span>Code</span>
          </a>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-full">
            <FontAwesomeIcon icon={faVideo} className="mr-2" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
