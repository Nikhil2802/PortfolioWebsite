import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Circles from './Circles';

export default function Hero() {
    const [text] = useTypewriter({
        words: [
            "Software Developer",
            "System Engineer",
            "Web Developer",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className='h-screen flex flex-col -space-y-12 pb-32 items-center justify-center text-center overflow-hidden'>
            <Circles />
            <div className='z-20'>
                <h1 className='text-sm uppercase text-gray-500 tracking-[15px] '> Nikhil Patel</h1>
                <h2 className='text-3xl mb-4 lg:text-4xl font-semibold px-10 p-10'>
                    <span>{text}</span>
                    <Cursor cursorColor="" />   
                </h2>

                <div className='-space-x-3 md:space-x-0'> 
                    <button onClick={() => scrollToSection("about")} className='heroButton'>About</button>
                    <button onClick={() => scrollToSection("skills")} className='heroButton'>Skills</button>
                    <button onClick={() => scrollToSection("experience")} className='heroButton'>Experience</button>
                    <button onClick={() => scrollToSection("projects")} className='heroButton'>Projects</button> 
                </div>
            </div>
        </div>
    );
}
