"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Icons for the hamburger menu

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav
                initial={{ y: -500, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="hidden md:flex mx-auto p-3 rounded-full bg-[#212121] z-50 justify-center items-center w-full md:w-[60%] custom1000:w-[50%] max-w-[900px] overflow-hidden"
            >
                {/* Desktop Links (visible only on medium and larger screens) */}
                <div className="flex justify-center space-x-6 items-center overflow-hidden">
                    {/* Home */}
                    <div className="relative group overflow-hidden">
                        <Link href="/home" className="outline-none">
                            <span className="relative z-10 block px-4 py-2 text-slate-200 transition-colors duration-700 ease-in-out bg-transparent rounded-full hover:text-white">
                                Home
                            </span>
                        </Link>
                        <div className="absolute inset-0 w-full h-full rounded-full bg-[#D29515] transition-all duration-[500ms] ease-[cubic-bezier(0.25, 1.25, 0.75, 1.25)] transform translate-y-full group-hover:translate-y-0"></div>
                    </div>

                    {/* About */}
                    <div className="relative group overflow-hidden">
                        <Link href="/about" className="outline-none">
                            <span className="relative z-10 block px-4 py-2 text-slate-200 transition-colors duration-700 ease-in-out bg-transparent rounded-full hover:text-white">
                                About
                            </span>
                        </Link>
                        <div className="absolute inset-0 w-full h-full rounded-full bg-[#D29515] transition-all duration-[500ms] ease-[cubic-bezier(0.25, 1.25, 0.75, 1.25)] transform translate-y-full group-hover:translate-y-0"></div>
                    </div>

                    {/* Projects */}
                    <div className="relative group overflow-hidden">
                        <Link href="/projects" className="outline-none">
                            <span className="relative z-10 block px-4 py-2 text-slate-200 transition-colors duration-700 ease-in-out bg-transparent rounded-full hover:text-white">
                                Projects
                            </span>
                        </Link>
                        <div className="absolute inset-0 w-full h-full rounded-full bg-[#D29515] transition-all duration-[500ms] ease-[cubic-bezier(0.25, 1.25, 0.75, 1.25)] transform translate-y-full group-hover:translate-y-0"></div>
                    </div>

                    {/* Blog */}
                    <div className="relative group overflow-hidden">
                        <Link href="/blog" className="outline-none">
                            <span className="relative z-10 block px-4 py-2 text-slate-200 transition-colors duration-700 ease-in-out bg-transparent rounded-full hover:text-white">
                                Blog
                            </span>
                        </Link>
                        <div className="absolute inset-0 w-full h-full rounded-full bg-[#D29515] transition-all duration-[500ms] ease-[cubic-bezier(0.25, 1.25, 0.75, 1.25)] transform translate-y-full group-hover:translate-y-0"></div>
                    </div>

                    {/* Contact */}
                    <div className="relative group overflow-hidden">
                        <Link href="/contact" className="outline-none">
                            <span className="relative z-10 block px-4 py-2 text-slate-200 transition-colors duration-700 ease-in-out bg-transparent rounded-full hover:text-white">
                                Contact
                            </span>
                        </Link>
                        <div className="absolute inset-0 w-full h-full rounded-full bg-[#D29515] transition-all duration-[500ms] ease-[cubic-bezier(0.25, 1.25, 0.75, 1.25)] transform translate-y-full group-hover:translate-y-0"></div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Navbar */}
            <motion.nav className="md:hidden w-full flex justify-end p-4 relative">
                {/* Menu Button for smaller screens */}
                <button
                    className="text-slate-200 text-3xl"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute w-full top-full right-0 bg-[#212121] z-40 flex flex-col items-center justify-center space-y-4 p-4"
                    >
                        <Link href="/home" className="text-slate-200 text-lg hover:text-white" onClick={toggleMenu}>Home</Link>
                        <Link href="/about" className="text-slate-200 text-lg hover:text-white" onClick={toggleMenu}>About</Link>
                        <Link href="/projects" className="text-slate-200 text-lg hover:text-white" onClick={toggleMenu}>Projects</Link>
                        <Link href="/blog" className="text-slate-200 text-lg hover:text-white" onClick={toggleMenu}>Blog</Link>
                        <Link href="/contact" className="text-slate-200 text-lg hover:text-white" onClick={toggleMenu}>Contact</Link>
                    </motion.div>
                )}
            </motion.nav>
        </>
    );
};

export default Navbar;