import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import { experiences, education } from './Constants';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex flex-col items-center mx-auto relative"
    >
      <h3 className="absolute top-28 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl z-20">
        Experience
      </h3>
      
      {/* Tabs Container */}
      <div className="w-full mt-40 md:mt-28 mb-8 z-20">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <ul className="flex justify-center text-sm font-medium text-center" role="tablist">
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'Experience' ? 'text-purple-600 border-purple-600' : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300'}`}
                onClick={() => setActiveTab('Experience')}
                type="button"
                role="tab"
              >
                Experience
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === 'Education' ? 'text-purple-600 border-purple-600' : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300'}`}
                onClick={() => setActiveTab('Education')}
                type="button"
                role="tab"
              >
                Education
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Timeline Content */}
      <div id="tab-content" className="w-full flex-grow">
        {activeTab === 'Experience' && (
          <div className="p-4 rounded-lg">
            <VerticalTimeline lineColor="gray">
              {experiences.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </VerticalTimeline>
          </div>
        )}
        {activeTab === 'Education' && (
          <div className="p-4 rounded-lg">
            <VerticalTimeline lineColor="white">
              {education.map((education, index) => (
                <EducationCard key={index} education={education} />
              ))}
            </VerticalTimeline>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Experience;
