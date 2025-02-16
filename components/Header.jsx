import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Header() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    { url: "https://www.linkedin.com/in/nikhil-patel-b83795199/", id: "linkedin" },
    { url: "https://www.instagram.com/_nikhil_28", id: "instagram" },
    { url: "https://github.com/Nikhil2802", id: "github" }
  ];

  // Function to smoothly scroll to the contact section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className='top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center'>
      
      {/* Social Icons */}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, type: 'spring' }}
        className='flex flex-row items-center'
      >
        {socialLinks.map((link) => (
          <div key={link.id} 
            className="transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setHoveredIcon(link.id)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <SocialIcon 
              url={link.url} 
              fgColor={hoveredIcon === link.id ? "red" : "gray"} 
              bgColor="transparent" 
              className="social-icon"
            />
          </div>
        ))}
      </motion.div>
 
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, type: 'spring' }}
        className='flex flex-row items-center text-gray-300 group -space-x-6'
      >
        <div 
          className="transition-all duration-300 hover:scale-110"
          onMouseEnter={() => setHoveredIcon("email")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <SocialIcon 
            network='email' 
            fgColor={hoveredIcon === "email" ? "red" : "gray"} 
            bgColor='transparent' 
            className='cursor-pointer'
            onClick={() => scrollToSection("contact")} 
          />
        </div>

          <button onClick={() => scrollToSection("contact")} className='heroButton text-gray-400'>CONTACT ME</button>
          
      </motion.div>
    </header>
  );
}
