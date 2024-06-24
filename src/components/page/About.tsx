'use client';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '../../utils/motion';
import Image from 'next/image';
import profilePic from '../../../public/images/profile.png';

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <section className="flex flex-col w-full mb-[10rem]">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center gap-5 md:gap-[10rem] md:justify-between px-6 md:px-20 z-[20]"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="w-[300px] h-[300px] md:w-1/2 flex items-center"
        >
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="rounded-full md:w-[500px] md:h-[500px] h-[300px] mt-[5rem] shadow-lg shadow-[#c054ff] object-cover mx-auto"
          />
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6 text-white md:text-start text-center mt-4">
            About Me
          </h2>
          <p className="md:text-xl text-lg text-gray-300 text-justify mb-4 max-w-[550px] gap-5">
            As a dedicated and driven{' '}
            <span className="text-cyan-400 ">Full Stack Developer</span>, I
            bring a wealth of experience in designing and building web
            applications with the latest modern technologies. My passion lies in
            continuously expanding my skill set and staying abreast of the
            ever-evolving trends within the tech industry. With a keen eye for
            detail and a commitment to delivering high-quality solutions, I
            thrive on tackling complex challenges and turning innovative ideas
            into reality.
          </p>
          <p className="text-xl text-gray-300 text-justify max-w-[550px]">
            My technical expertise encompasses a wide range of technologies
            including{' '}
            <span className="text-cyan-400">
              JavaScript, React, Next.js, Node.js, Express.js{' '}
            </span>
            and more. In addition to my core competencies, I am actively delving
            into the field of cybersecurity, seeking to broaden my knowledge and
            enhance my skill set through various online resources and
            certifications. My goal is to integrate robust security measures
            into my development practices, ensuring the creation of secure and
            resilient applications.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
