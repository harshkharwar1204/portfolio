"use client";
import React, { useRef, useState, ReactNode, ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text: string;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ children, text, color = "bg-black", ...props }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const ref = useRef<HTMLSpanElement | null>(null);

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex p-2 items-center rounded-lg text-white ${color}`}
            {...props}
        >
            {children}
            <div
                style={{ width: isHovered ? ref.current?.offsetWidth || 0 : 0 }}
                className="overflow-x-hidden transition-all duration-300 ease-out"
            >
                <span ref={ref} className="px-1.5">{text}</span>
            </div>
        </button>
    );
};

export default IconButton;
