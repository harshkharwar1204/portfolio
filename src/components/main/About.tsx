import {
  Backend_skill,
  Frontend_skill,
  Other_skill,
} from "@/src/constants";
import React, { useState, useEffect } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const [isContentVisible, setContentVisible] = useState(false);
  const [isParagraphVisible, setParagraphVisible] = useState(false);

  // Toggle visibility for the content and paragraph animations
  useEffect(() => {
    const contentTimer = setTimeout(() => {
      setContentVisible(true);
    }, 500); // Adjust timing as needed

    const paragraphTimer = setTimeout(() => {
      setParagraphVisible(true);
    }, 1000); // Adjust timing as needed

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(paragraphTimer);
    };
  }, []);

  return (
    <>
      <motion.div
        className="mt-20 text-6xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        id="about-me"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }} // Adjust duration if needed
      >
        Passion Fuels Purpose!
      </motion.div>

      {isContentVisible && (
        <div className="grid w-full grid-cols-8 gap-16 my-16">
          <div
            className={`col-span-4 flex flex-col items-start ml-44 justify-start transform transition-all duration-1000 text-[#e1dbf5] font-medium ${isParagraphVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
          >
            <h2 className="mb-4 text-xl font-bold uppercase text-[#BFBFBF]">
              About Harsh
            </h2>

            <p>
              I&#39;m a web developer with a passion for building interactive and user-friendly websites. With skills in JavaScript, React, and Tailwind CSS, I focus on creating seamless and visually appealing designs. I enjoy working with frameworks like Next.js and using tools such as Framer Motion to enhance interactivity in my projects.
            </p>

            <p className="my-4">
              On the back-end, I&#39;ve gained experience working with technologies like Node.js, Express, and MongoDB to build full-stack applications. I&#39;m comfortable working with APIs, using Git for version control, and integrating 3D models with libraries like Spline to make projects more dynamic.
            </p>

            <p>
              I love collaborating on projects and contributing to open-source work on GitHub. Participating in hackathons helps me stay up-to-date with the latest industry trends. Whether working solo or in a team, I&#39;m committed to creating engaging web experiences that combine creativity and functionality.
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-3xl border-2 border-solid border-[#BFBFBF] bg-black p-6">
            <div className="absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-[#BFBFBF]" />
            <Image
              src="/HARSH IMAGE.jpeg"
              alt="Harsh Kharwar"
              width={100}
              height={150}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      )}

      <section
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-28"
        style={{ transform: "scale(0.9)" }}
      >
        <SkillText />

        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
