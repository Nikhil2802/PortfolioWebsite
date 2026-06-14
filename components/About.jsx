import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 pt-32 pb-16 md:pt-24 md:pb-12 justify-center gap-8 md:gap-12 lg:gap-16 mx-auto items-center'
    >
      {/* Section Title */}
      <h3 className='absolute top-16 md:top-20 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        About
      </h3>

      {/* Profile Image */}
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src='/me.png'
        alt='Profile'
        className='flex-shrink-0 w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover object-center md:rounded-lg md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[360px] xl:h-[360px] shadow-lg border border-gray-600'
      />

      {/* Text Section */}
      <div className='w-full max-w-3xl space-y-4 md:space-y-6 bg-gray-800 bg-opacity-20 p-4 md:p-6 rounded-lg shadow-lg md:shadow-xl'>
        <p className='text-sm md:text-lg leading-relaxed md:leading-relaxed text-gray-300'>
          Computer Science graduate with First Class Honours and professional experience delivering secure enterprise IT infrastructure solutions within the UK Defence sector.

        </p>
        <p className='text-sm md:text-lg leading-relaxed md:leading-relaxed text-gray-300'>
          Currently working as a Systems Engineer at Fujitsu, supporting large-scale virtualised and secure environments across technologies including VMware vSphere, Horizon, NSX, Windows Server, Active Directory, Exchange, SharePoint, Cisco networking and PowerShell automation.
        </p>
        <p className='text-sm md:text-lg leading-relaxed md:leading-relaxed text-gray-300'>
          Alongside my infrastructure experience, I have a strong passion for software engineering and full-stack development. I have designed and built web applications using React, Next.js, Node.js, PostgreSQL, Docker and AWS, focusing on scalable architecture, user authentication, cloud deployment and modern user experiences.
        </p>
        <p className='text-sm md:text-lg leading-relaxed md:leading-relaxed text-gray-300'>
          I enjoy solving complex technical problems, learning new technologies and building solutions that improve efficiency through automation and software development. I am particularly interested in software engineering, cloud technologies, DevOps practices and enterprise-scale systems.
        </p>
      </div>
    </motion.div>
  );
}
