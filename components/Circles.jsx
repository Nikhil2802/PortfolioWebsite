import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCircles() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen size on the client side
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize(); // Call once on mount to set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{
        scale: isSmallScreen ? [1, 1.5, 1.5, 4, 1] : [1, 2, 2, 6, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: isSmallScreen ? ["20%", "20%", "40%", "60%", "20%"] : ["20%", "20%", "50%", "80%", "20%"],
      }}  
      transition={{ duration: 2 }}
      className='relative flex justify-center items-center'>
      
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-20 animate-ping opacity-20 sm:h-[100px] sm:w-[100px]" />
      <div className='rounded-full border border-[#333333] md:h-[300px] md:w-[300px] h-[280px] w-[280px] absolute mt-20 opacity-20 sm:h-[300px] sm:w-[300px]' />
      <div className='rounded-full border border-red-500 opacity-20 h-[330px] w-[330px] absolute mt-20 animate-pulse sm:h-[400px] sm:w-[400px]'/>
      <div className='rounded-full border border-[#333333]  h-[380px] w-[380px] absolute md:mt-24 mt-20 opacity-20 sm:h-[530px] sm:w-[530px]'/>
    </motion.div>
  );
}
