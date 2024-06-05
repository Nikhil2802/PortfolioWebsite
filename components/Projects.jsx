import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      imgUrl: "FR-3.webp",
      tags: ["Python", "Tensorflow", "Keras"],
      title: "Facial Recognition System",
      description: "A facial recognition system using deep learning techniques to identify and verify individuals.",
      githubUrl: "https://github.com/Nikhil2802/FacialRecognitionProject",
      demoUrl: "https://youtu.be/demo-video"
    },
    {
      imgUrl: "FR-3.webp",
      tags: ["JavaScript", "React", "Node.js"],
      title: "Web Development Project",
      description: "A full-stack web development project utilizing React for the frontend and Node.js for the backend.",
      githubUrl: "https://github.com/yourusername/web-development-project",
      demoUrl: "https://youtu.be/demo-video-2"
    },
    {
      imgUrl: "FR-3.webp",
      tags: ["Java", "Spring Boot", "MySQL"],
      title: "E-commerce Platform",
      description: "An e-commerce platform built with Java and Spring Boot, featuring a robust backend and scalable database.",
      githubUrl: "https://github.com/yourusername/e-commerce-platform",
      demoUrl: "https://youtu.be/demo-video-3"
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
      
      <div className='w-full max-w-7xl mx-auto p-10'>
        <div className="flex space-x-12 overflow-x-scroll p-3 snap-x snap-mandatory md:hidden">
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
