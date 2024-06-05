import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-9xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-3xl font-semibold text-gray-400'>
          Here is a {""}
          <span className='underline decoration-gray-400 text-red-500'>little</span> background
        </h4>
        <p className='text-base'>
          I am a highly motivated computer science graduate with a passion for tackling challenging problems head-on. Throughout my academic journey, I've delved deep into the realms of Java and Python programming, sharpening my skills and gaining valuable experience in agile project development and leadership roles.
        </p>
      </div>
    </div>
  );
}
