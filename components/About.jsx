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
        className='-mb-16 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[350px] xl:h-[350px] shadow-lg border border-gray-600'
      />

      {/* Text Section */}
      <div className='space-y-6 md:space-y-8 px-0 md:px-10 bg-gray-800 bg-opacity-20 p-4 md:p-6 rounded-lg shadow-lg md:shadow-xl mb-12 md:mb-4'>
        <p className='text-sm md:text-lg leading-relaxed md:leading-relaxed text-gray-300'>
          I am a passionate Computer Science graduate with a focus on technology-driven problem-solving. With a solid background in Artificial Intelligence and Machine Learning, I’ve had the opportunity to apply these skills to a wide range of projects, including my final year research on Facial Recognition technology. These experiences have sharpened my ability to develop innovative software solutions that tackle complex challenges.
        </p>
        <p className='text-sm md:text-lg leading-relaxed md:leading-relaxed text-gray-300'>
          I am deeply driven by both analytical problem-solving and creative thinking, thriving in environments that require constant learning and pushing technological boundaries. When I'm not coding, I enjoy staying active through sports, which helps me stay balanced and continue to push myself toward new personal achievements.
        </p>
      </div>
    </motion.div>
  );
}
