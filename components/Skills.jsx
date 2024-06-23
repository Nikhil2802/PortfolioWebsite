import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { skills } from './skillsData';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full px-10">
        <div className="bg-[#292929] p-6 rounded-lg border border-blue-300 shadow-dark-blue  ">
          <h4 className="text-xl font-semibold mb-4 text-white">Front-End</h4>
          <div className="grid grid-cols-5 gap-5">
            {skills.frontEnd.map((skill, index) => (
              <Skill key={index} skill={skill} directionLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
        <div className="bg-[#292929] p-6 rounded-lg border border-blue-300 shadow-dark-blue">
          <h4 className="text-xl font-semibold mb-4 text-white">Back-End</h4>
          <div className="grid grid-cols-5 gap-5">
            {skills.backEnd.map((skill, index) => (
              <Skill key={index} skill={skill} directionLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 w-full px-10 mt-10">
        <div className="bg-[#292929] p-6 rounded-lg mx-auto w-full lg:w-1/2 border border-blue-300 shadow-dark-blue ">
          <h4 className="text-xl font-semibold mb-4 text-white">Machine Learning</h4>
          <div className="grid grid-cols-5 gap-5">
            {skills.ML.map((skill, index) => (
              <Skill key={index} skill={skill} directionLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
