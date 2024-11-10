import React, { useRef } from 'react';
import { useScroll,motion } from 'framer-motion';
import LiIcon from '../sub/LiIcon';

interface DetailsProps {
    title: string;
    place: string;
    placeLink: string;
    time: string;
    info: string;
}

const Details: React.FC<DetailsProps> = ({ title, place, placeLink, time, info }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between text-white">
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
            >
                <h3 className='capitalize font-bold text-2xl'>
                    {title}&nbsp;
                    <a href={placeLink} target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        @{place}
                    </a>
                </h3>
                <span className='capitalize font-medium text-white'>{time}</span>
                <p className='font-medium w-full'>{info}</p>
            </motion.div>
        </li>
    );
};

const Education: React.FC = () => {
const ref = useRef(null)
const {scrollYProgress} = useScroll(
    {
        target: ref,
        offset: ["start end", "center start"]
    }
)

    return (
        <div>
            <motion.div
                className="text-6xl mb-20 text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                id="education-heading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                Education
            </motion.div>
            <div ref={ref} className="w-[75%] mx-auto relative mt-8">

                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-gradient-to-r from-purple-500 to-cyan-500 origin-top '/>

                <ul className='w-full flex flex-col items-center justify-between ml-4'>
                    <Details
                        title="Secondary School"
                        place="SSRVM"
                        placeLink="https://surat.ssrvm.org/"
                        time="2006 - 2020"
                        info="Focused on Secondary schooling"
                    />
                    <Details
                        title="High School"
                        place="Bhagwan Mahawir School"
                        placeLink="https://bmis.in/"
                        time="2020 - 2022"
                        info="Focused on High Schooling."
                    />
                    <Details
                        title="Bachelor of Technology in Computer Science"
                        place="Symbiosis Institute of Technology"
                        placeLink="https://www.sitpune.edu.in/"
                        time="2022 - Present"
                        info="Focused on software engineering, data structures, algorithms, and AI."
                    />
                </ul>
            </div>
        </div>
    );
};

export default Education;
