import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Circles from './Circles';
import Link from 'next/link';

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [
            "Software Developer",
            "System Engineer",
            "Web Developer",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-12 items-center justify-center text-center overflow-hidden'>
            <Circles />
            <div className='z-20'>
                <h1 className='text-sm uppercase text-gray-500 tracking-[15px]'> Nikhil Patel</h1>
                <h2 className='text-3xl mb-4 lg:text-4xl font-semibold px-10 p-10'>
                    <span>{text}</span>
                    <Cursor cursorColor="Red" />   
                </h2>

                <div className='-space-x-3 md:space-x-0'> 
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>   
                             
                </div>
            </div>
        </div>
    );
}
