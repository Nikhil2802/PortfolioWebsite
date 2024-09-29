import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ skill, directionLeft }) => {
  return (
    <div className="group relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
      <motion.img
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={skill.image}
        alt={skill.name}
        className="rounded-3xl object-cover w-full h-full p-1 filter group-hover:brightness-75 transition duration-300 ease-in-out border border-red-300 shadow-dark-red"
        style={{ cursor: 'none' }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-75 text-white text-center rounded-3xl">
        {skill.name}
      </div>
    </div>
  );
};

export default Skill;
