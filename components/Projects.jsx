import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track active project

  const projects = [
    {
      imgUrl: "FR-3.webp",
      tags: ["Python", "Tensorflow", "Keras"],
      title: "Facial Recognition System",
      description: "A facial recognition system using deep learning and machine learning techniques to identify and verify individuals.",
      githubUrl: "https://github.com/Nikhil2802/FacialRecognitionProject",
      demoUrl: "/FRdemo.mp4"
    },
    {
      imgUrl: "Bottle1.png",
      tags: ["Next.js", "Node.js", "FastAPI", "PostgreSQL", "Docker", "AWS"],
      title: "ScentScape",
      description: "Designed and developed a full-stack fragrance discovery platform featuring a catalogue of 23,000+ fragrances, advanced search and filtering, user reviews and ratings, role-based account functionality, and machine learning-powered scent recommendations.",
      githubUrl: "https://github.com/Nikhil2802/ScentScape",
      demoUrl: "/ScentScape.mp4"
    },
    {
      imgUrl: "ProjectPlaceholder.png",
      tags: ["???", "???", "???"],
      title: "Project 3",
      description: "Project 3 Description",
      githubUrl: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      demoUrl: "/Rick Roll.mp4"
    }
  ];

  // Handle scroll to update active index
  const handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const totalWidth = event.target.scrollWidth;
    const itemWidth = totalWidth / projects.length;
    setActiveIndex(Math.round(scrollLeft / itemWidth));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row px-12 justify-center items-center mx-auto md:top-24'
    >
      <h3 className='absolute top-28 md:top-5 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='w-full max-w-7xl mx-auto md:p-10'>
        {/* Mobile carousel with scroll tracking */}
        <div className="w-full flex overflow-x-scroll snap-x snap-mandatory space-x-0 md:hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-400"
          onScroll={handleScroll}>
          {projects.map((project, index) => (
            <div key={index} className="w-screen px-4">
              <ProjectCard
                imgUrl={project.imgUrl}
                tags={project.tags}
                title={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
              />
            </div>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center mt-4 md:hidden">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${activeIndex === index ? 'bg-red-500 scale-110' : 'bg-gray-500'}`}
            />
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-40 md:p-1 md:mr-14">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgUrl={project.imgUrl}
              tags={project.tags}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
