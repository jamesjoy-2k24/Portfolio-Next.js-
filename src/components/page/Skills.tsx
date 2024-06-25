'use client';

import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../../utils/motion';
import Image from 'next/image';

// Photos
import skill from '../../../public/images/next.png';
import skill1 from '../../../public/images/html.png';
import skill2 from '../../../public/images/css.png';
import skill3 from '../../../public/images/node-js.png';
import skill4 from '../../../public/images/react.png';
import skill5 from '../../../public/images/graphql.png';
import skill6 from '../../../public/images/js.png';
import skill7 from '../../../public/images/figma.png';
import skill8 from '../../../public/images/framer.png';
import skill9 from '../../../public/images/mongodb.png';

const skills = [
  skill,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
  skill,
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
  skill7,
  skill8,
  skill9,
];

interface Skill {
  name: string;
  level: number;
}

const programmingSkills: Skill[] = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS', level: 70 },
];

const communicationSkills: Skill[] = [
  { name: 'Team Collaboration', level: 85 },
  { name: 'Public Speaking', level: 70 },
  { name: 'Negotiation', level: 75 },
];

const otherSkills: Skill[] = [
  { name: 'Problem Solving', level: 90 },
  { name: 'Time Management', level: 85 },
  { name: 'Adaptability', level: 80 },
];

const Skills: NextPage = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 md:px-20 z-[20]">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.3)}
        className="text-3xl font-bold mb-10 text-white"
      >
        Skills
      </motion.h2>

      {/* Skill Bars */}
      <div className="flex flex-wrap justify-around  px-6 md:px-20 w-full">
        {/* Programming Skills */}
        <div className="flex flex-col items-center w-full md:w-[400px] p-4">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.4)}
            className="text-2xl font-semibold mb-[3rem] text-white text-center"
          >
            Programming Skills
          </motion.h3>
          {programmingSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={slideInFromLeft(0.5)}
              className="w-full mb-4"
            >
              <div className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-purple-700 to-cyan-600 "
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Communication Skills */}
        <div className="flex flex-col items-center w-full md:w-[400px] p-4">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.4)}
            className="text-2xl font-semibold mb-[3rem] text-white text-center"
          >
            Communication Skills
          </motion.h3>
          {communicationSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={slideInFromRight(0.5)}
              className="w-full mb-4"
            >
              <div className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-600 "
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="flex flex-col items-center w-full md:w-[400px] p-4">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.4)}
            className="text-2xl font-semibold mb-[3rem] text-white text-center"
          >
            Other Skills
          </motion.h3>
          {otherSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={slideInFromRight(0.5)}
              className="w-full mb-4"
            >
              <div className="text-xl font-semibold text-white mb-2">
                {skill.name}
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-600 "
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skill Images */}
      <div className="w-full overflow-hidden mt-10 md:px-20 px-6">
        <motion.div
          className="flex space-x-12 animate-scroll"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 15,
            ease: 'linear',
          }}
        >
          {skills.map((skill, index) => (
            <Image
              key={index}
              src={skill}
              alt={`Skill ${index + 1}`}
              className="w-[100px] h-[100px]"
            />
          ))}
          {skills.map((skill, index) => (
            <Image
              key={index + skills.length}
              src={skill}
              alt={`Skill ${index + skills.length + 1}`}
              className="w-[100px] h-[100px]"
            />
          ))}
          {skills.map((skill, index) => (
            <Image
              key={index + skills.length}
              src={skill}
              alt={`Skill ${index + skills.length + 1}`}
              className="w-[100px] h-[100px]"
            />
          ))}
          {skills.map((skill, index) => (
            <Image
              key={index + skills.length}
              src={skill}
              alt={`Skill ${index + skills.length + 1}`}
              className="w-[100px] h-[100px]"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
