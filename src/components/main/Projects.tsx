import React, { useEffect, useState, Suspense } from 'react';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Developer from '../canvas/Developer';
import CanvasLoader from '../canvas/Loading';
import ProjectCard from '../sub/ProjectCard';
import { myProjects } from '@/src/constants';
import { InfiniteMovingCards } from '../sub/InfiniteMovingCard';
import  { motion } from "framer-motion"

const Projects: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Animation transition for the text effect
  useEffect(() => {
    gsap.fromTo(
      '.animatedText',
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' }
    );
  }, [selectedProjectIndex]);

  return (
    <section className="c-space mt-40" id="projects">
            <motion.div
        className="text-6xl mt-32 mb-20 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        id="certifications-heading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Projects
      </motion.div>

      <div className="work-container">
        <div className="work-canvas">
          <Canvas>
            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

            <Suspense fallback={<CanvasLoader />}>
              <Developer position-y={-2.1} scale={2.5} animationName={myProjects[selectedProjectIndex].animation} />
            </Suspense>
          </Canvas>
        </div>

        <div className="work-content">
          <div className="sm:py-10 sm:px-5 m-20 flex justify-center items-center">
            {/* Wrap ProjectCard components inside InfiniteMovingCards */}
            <InfiniteMovingCards
              items={myProjects.map((project, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => setSelectedProjectIndex(index)}
                >
                  <ProjectCard
                    src="/NextWebsite.png" // Replace with actual project image
                    title={project.title}
                    animation={project.animation}
                    desc={project.desc}
                    subdesc={project.subdesc}
                    href={project.href}
                    tags={project.tags}
                  />
                </div>
              ))}
              direction="left"
              speed="normal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
