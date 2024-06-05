import React from 'react';
import { motion } from 'framer-motion';

export default function Skill({ directionLeft }) {
  return (
    <div className='group relative flex cursor-pointer'> 
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0 
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='https://cdn-icons-png.flaticon.com/128/226/226777.png' 
        className='rounded-3xl border border-gray-500 object-cover w-20 h-20 p-1 xl:w-20 lg:h-20 filter group-hover:brightness-75 transition duration-300 ease-in-out'
      />
    </div>
  );
}
