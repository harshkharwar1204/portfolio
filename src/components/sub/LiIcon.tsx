import React, { RefObject } from 'react';
import { motion, useScroll } from 'framer-motion';

interface LiIconProps {
  reference: RefObject<HTMLElement>;
}

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-white">
      <svg className='-rotate-90' width="75" height="75" viewBox="0 0 100 100">
        <circle cx="65" cy="50" r="30" className="stroke-purple-500 stroke-[3px] fill-none" />
        
        {/* Animate scale or opacity to show the scroll effect */}
        <motion.circle 
          cx="65" 
          cy="50" 
          r="20" 
          className="stroke-[5px] fill-transparent" 
          style={{ pathLength: scrollYProgress }}
        />
        
        <circle cx="65" cy="50" r="10" className="animate-pulse stroke-1 fill-cyan-500" />
      </svg>
    </figure>
  );
};

export default LiIcon;
