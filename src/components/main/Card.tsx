"use client";

import { InfiniteMovingCards } from '../sub/InfiniteMovingCard';   // Adjust the import path accordingly
import { CardSpotlight } from "../sub/Cardspotlight";
import { certificates } from '@/src/constants';
import { useState } from "react";
import { motion } from 'framer-motion';

export function Card() {
    // State to store the clicked image URL
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Function to handle image click
    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    // Function to close the modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="">
            <motion.div
                className="text-6xl mt-32 mb-20 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                id="certifications-heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                Certificates
            </motion.div>
            {/* InfiniteMovingCards wrapped around certificates */}
            <InfiniteMovingCards
                items={certificates.map((certificate, index) => (
                    <CardSpotlight key={index} className="h-96 w-96">
                        {/* Card Content */}
                        <div className="flex flex-col justify-between h-full relative z-20">
                            {/* Issued By Heading */}
                            <p className="text-2xl font-bold text-white mt-4 text-center">
                                {certificate.issuedby}
                            </p>

                            {/* Image Container */}
                            <div className="flex justify-center items-center my-6">
                                <img
                                    src={certificate.imageUrl}
                                    alt={certificate.name}
                                    className="h-44 w-52 object-cover rounded-lg cursor-pointer"
                                    onClick={() => handleImageClick(certificate.imageUrl)} // Handle image click
                                />
                            </div>

                            {/* Certificate Name */}
                            <p className="text-white text-sm text-center mb-4">
                                {certificate.name}
                            </p>
                        </div>
                    </CardSpotlight>
                ))}
                direction="left" // Set the scroll direction
                speed="normal" // Set the speed of the scroll
                pauseOnHover={true} // Pause scroll on hover
                className="mt-10" // Optional additional styling
            />

            {/* Modal for displaying the clicked image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal} // Close modal when clicking outside the image
                >
                    <div className="relative" onClick={(e) => e.stopPropagation()}> {/* Prevent modal close on image click */}
                        <button
                            className="absolute top-0 right-0 text-white text-xl p-2"
                            onClick={closeModal}
                        >
                            X
                        </button>
                        <img
                            src={selectedImage}
                            alt="Enlarged certificate"
                            className="h-auto w-auto max-w-3xl max-h-3xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
