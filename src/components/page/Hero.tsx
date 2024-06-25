'use client';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '../../utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import mainIcon from '../../../public/icons/mainIconsdark.svg';

interface Props {}
const Hero: NextPage<Props> = ({}) => {
  return (
    <div className="relative flex flex-col w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute md:top-[-400px] top-[-300px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex md:flex-row  flex-col items-center justify-center px-6 md:px-20 mt-40 z-[20]"
      >
        <div className="flex flex-col gap-5 justify-center items-center h-full w-full mt-20 md:ml-[3rem] md:items-start">
          <motion.div
            variants={slideInFromTop(0.5)}
            className="Welcome-box bg-black md:bg-transparent py-[10px] px-[15px] border border-[#7042f88b] opacity-[0.9] "
          >
            <SparklesIcon className="text-[#b49bff] mr-[8px] h-5 w-10" />
            <h1 className="Welcome-text text-[#ffffffbb] text-[15px] ">
              Full Stack Developer
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col text-center md:text-start gap-4 md:mt-6 text-4xl md:text-6xl text-bold text-white max-w-[600px]"
          >
            Hello !
            <span className="text-transparent text-center md:text-start text-4xl md:text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              I am Joy
            </span>
            <span className="text-2xl sm:text-3xl md:text-6xl">
              Full Stack Developer.
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="md:text-xl text-lg md:text-justify text-center text-gray-300 my-5 max-w-[550px]"
          >
            I&apos;m a Full Stack Developer with experience in website, and
            software development. Check out my projects and skills. Now a days I
            am learning about cyber security with online resources.
          </motion.p>

          <motion.a
            variants={slideInFromLeft(0.8)}
            className="py-2 px-6 button-primary text-center mt-0 mb-4 text-white cursor-pointer rounded-xl"
          >
            Hire Me !
          </motion.a>
        </div>
        <motion.div
          variants={slideInFromRight(0.8)}
          className="md:w-full w-[400px] h-full md:flex justify-center items-center hidden"
        >
          <Image src={mainIcon} alt="work icons" height={750} width={750} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
