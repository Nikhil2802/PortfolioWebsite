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
      
      <div className="absolute border border-[#333333] rounded-full h-[50px] w-[50px] mt-52 animate-ping opacity-20 sm:h-[100px] sm:w-[100px]" />
      <div className='rounded-full border border-[#333333] h-[150px] w-[150px] absolute mt-52 opacity-20 sm:h-[300px] sm:w-[300px]' />
      <div className='rounded-full border border-red-500 opacity-20 h-[380px] w-[380px] absolute mt-52 animate-pulse sm:h-[450px] sm:w-[450px]'/>
      <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52 opacity-20 sm:h-[600px] sm:w-[600px]'/>
    </motion.div>
  );
}
