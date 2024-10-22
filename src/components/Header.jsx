"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import Navbar from './Navbar';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaXTwitter } from 'react-icons/fa6';
import IconButton from './IconButton';

function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // New state for mounted check
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setDropdownOpen(prev => !prev);

    useEffect(() => {
        setIsMounted(true); // Set mounted state to true
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className='sticky top-0 p-5 max-w-7xl mx-auto z-20'>
            <Navbar />
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className='absolute top-10 left-5'
            >
                <button onClick={toggleDropdown} className='uppercase text-sm glowing-text'>
                    Get In Touch
                </button>
                {isMounted && isDropdownOpen && ( // Conditional rendering based on mounted state
                    <div ref={dropdownRef} className='flex flex-row items-center justify-center absolute mt-4 gap-x-2'>
                        <a href="https://github.com/harshkharwar1204" target="_blank" rel="noopener noreferrer">
                            <IconButton text="Github">
                                <FaGithub size={20} />
                            </IconButton>
                        </a>
                        <a href="https://www.linkedin.com/in/harsh-kharwar-82546928a/" target="_blank" rel="noopener noreferrer">
                            <IconButton text="LinkedIn" color="bg-blue-400">
                                <FaLinkedin size={20} />
                            </IconButton>
                        </a>
                        <a href="https://www.instagram.com/kharwar._harsh" target="_blank" rel="noopener noreferrer">
                            <IconButton text="/kharwar._harsh" color="bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500">
                                <GrInstagram size={20} />
                            </IconButton>
                        </a>
                        <a href="https://twitter.com/HarshK_1204" target="_blank" rel="noopener noreferrer">
                            <IconButton text="/HarshK_1204" color="bg-black">
                                <FaXTwitter size={20} />
                            </IconButton>
                        </a>
                    </div>
                )}
            </motion.div>
        </header>
    );
}

export default Header;
