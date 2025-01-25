import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
          type: 'spring'
        }}
        className='flex flex-row items-center'>
        {/* soical icons */}
        <SocialIcon url="https://www.linkedin.com/in/nikhil-patel-b83795199/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.instagram.com/_nikhil_28" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://github.com/Nikhil2802" fgColor="gray" bgColor="transparent" />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
          type: 'spring'
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-gray-400 text-sm'> Contact me </p>
      </motion.div>
        
        
      
    </header>
  );
}
