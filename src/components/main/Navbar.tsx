"use client"
import React, { useState, useRef, useEffect, MouseEvent } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';
import IconButton from "./IconButton";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | Event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-evenly m-auto px-[10px]">
        <a
          href="#hero"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Harsh Kharwar
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a 
              href="#about-me" 
              className="cursor-pointer hover:scale-110 hover:text-[#EBA8FE] transition-transform duration-300"
            >
              About me
            </a>
            <a 
              href="#education-heading" 
              className="cursor-pointer hover:scale-110 hover:text-[#EBA8FE] transition-transform duration-300"
            >
              Education
            </a>
            <a 
              href="#projects" 
              className="cursor-pointer hover:scale-110 hover:text-[#EBA8FE] transition-transform duration-300"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="cursor-pointer hover:scale-110 hover:text-[#EBA8FE] transition-transform duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Get In Touch Button */}
        <motion.div
          initial={{ x: 100, opacity: 0 }} // Slide in from the right
          animate={{ x: 0, opacity: 1 }} // Final position
          transition={{ duration: 1.5 }}
          className='relative flex flex-col items-end' // Flex column to position dropdown correctly
        >
          <button onClick={toggleDropdown} className='uppercase text-sm glowing-text'>
            Get In Touch
          </button>

          {isDropdownOpen && (
            <div ref={dropdownRef} className='flex flex-col items-center justify-center absolute mt-4 gap-x-2 bg-transparent z-50'>
              <a 
                href="https://github.com/harshkharwar1204" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-[#EBA8FE] transition-transform duration-300"
              >
                <IconButton text="Github">
                  <FaGithub size={20} />
                </IconButton>
              </a>
              <a 
                href="https://www.linkedin.com/in/harsh-kharwar-82546928a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-[#EBA8FE] transition-transform duration-300"
              >
                <IconButton text="LinkedIn" color="bg-blue-400">
                  <FaLinkedin size={20} />
                </IconButton>
              </a>
              <a 
                href="https://www.instagram.com/kharwar._harsh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-[#EBA8FE] transition-transform duration-300"
              >
                <IconButton text="/kharwar._harsh" color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500">
                  <GrInstagram size={20} />
                </IconButton>
              </a>
              <a 
                href="https://twitter.com/HarshK_1204" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-[#EBA8FE] transition-transform duration-300"
              >
                <IconButton text="/HarshK_1204" color="bg-black">
                  <FaXTwitter size={20} />
                </IconButton>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
