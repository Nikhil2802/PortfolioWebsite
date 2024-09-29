import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";
import Head from "next/head";
import About from "@/components/About";
import Experience from "@/components/Experience";
import  Skills from '@/components/Skills';
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AnimatedCursor from "react-animated-cursor";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[hsl(0,0%,14%)] text-white h-screen snap-y snap-mandatory
    overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple-400">
      <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      />
      
      <Head>
        <title>Nikhil&apos;s Portfolio</title>
      </Head>

    <Header/>

    <section id="hero" className="snap-start" >
      <Hero/> 
    </section>

    <section id="about" className="snap-center">
      <About/>
    </section>

    <section id="skills" className="snap-center">
      <Skills/>
    </section>
    
    <section id="experience" className="snap-start">
     <Experience/>
    </section>
    
    
    <section id="projects" className="snap-start">
      <Projects/>
    </section>

    <section id="contact" className="snap-start">
      <Contact/>
    </section>

    </div>
  );
} 
