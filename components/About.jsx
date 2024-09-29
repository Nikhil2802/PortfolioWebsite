import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center'
    >
      {/* Section Title */}
      <h3 className='absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        About
      </h3>

      {/* Profile Image */}
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='/PHOTO-2022-09-11-19-39-04.jpg'
        alt='Profile'
        className='-mb-16 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-80 xl:w-[400px] xl:h-[500px] shadow-lg border border-gray-600'
      />

      {/* Text Section */}
      <div className='space-y-6 md:space-y-8 px-0 md:px-10 bg-gray-800 bg-opacity-20 p-4 md:p-6 rounded-lg shadow-lg md:shadow-xl md:mb-4'>
        <p className='text-sm md:text-lg leading-relaxed md:leading-relaxed text-gray-300'>
          I am a <span className='text-yellow-400 font-semibold'>Computer Science graduate</span> with a strong passion for technology and solving complex problems. My experience with <span className='text-purple-400'>AI</span> and <span className='text-purple-400'>Machine Learning</span>, particularly through my final year project on <span className='text-blue-400'>Facial Recognition</span>, has equipped me to tackle cutting-edge challenges in software development.
        </p>
        <p className='text-sm md:text-base leading-relaxed text-gray-300'>
          I thrive in environments that demand both analytical thinking and creativity, pushing the boundaries of what technology can achieve. Beyond tech, I’m dedicated to maintaining a balanced lifestyle through sports, constantly challenging myself to reach new heights.
        </p>
      </div>
    </motion.div>
  );
}
