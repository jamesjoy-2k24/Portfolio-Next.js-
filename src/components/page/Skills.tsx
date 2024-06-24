'use client';

import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../../utils/motion';

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
    <section className="flex flex-col items-center justify-center py-20">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.3)}
        className="text-3xl font-bold mb-10 text-white"
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-12 px-6 md:px-20 w-full">
        {/* Programming Skills */}
        <div className="flex flex-col items-center w-full md:w-1/4 p-4">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.4)}
            className="text-2xl font-semibold mb-4 text-white"
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
        <div className="flex flex-col items-center w-full md:w-1/4 p-4">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.4)}
            className="text-2xl font-semibold mb-4 text-white"
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
        <div className="flex flex-col items-center w-full md:w-1/4 p-4">
          <motion.h3
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.4)}
            className="text-2xl font-semibold mb-4 text-white"
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
    </section>
  );
};

export default Skills;
