import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      imgUrl: "FR-3.webp",
      tags: ["Python", "Tensorflow", "Keras"],
      title: "Facial Recognition System",
      description: "A facial recognition system using deep learning and techniques to identify and verify individuals.",
      githubUrl: "https://github.com/Nikhil2802/FacialRecognitionProject",
      demoUrl: "/FRdemo.mp4"
    },
    {
      imgUrl: "ProjectPlaceholder.png",
      tags: ["???", "???", "???"],
      title: "Project 2",
      description: "Project 2 Description",
      githubUrl: "https://www.youtube.com/watch?v=xvFZjo5PgG0",
      demoUrl: "/Rick Roll.mp4"
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
      
      <div className='w-full max-w-7xl mx-auto md:p-10 '>
        {/* Mobile carousel */}
        <div className="w-full flex overflow-x-scroll snap-x snap-mandatory space-x-0 md:hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-400">
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
        
        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-12 md:p-3">
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
  )   
}

export default Projects;
