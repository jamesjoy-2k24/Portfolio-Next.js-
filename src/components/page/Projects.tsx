'use client';
import { useState } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';
import { FaHandPointRight } from 'react-icons/fa';
import Button from '../common/Button';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  category: 'All' | 'Latest' | 'Future';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio',
    description: 'The new portfolio Using Next.js',
    imageUrl: '/projects/project1.png',
    link: 'https://github.com/jamesjoy-2k24/Sportify',
    category: 'Latest',
  },
  {
    id: 2,
    title: 'Pro-Pulse',
    description: 'The Booking Platform Using MERN Stack',
    imageUrl: '/projects/project2.png',
    link: 'https://github.com/jamesjoy-2k24/Pro-Pulse',
    category: 'Latest',
  },
  {
    id: 3,
    title: 'Sportify',
    description: 'The Sports Related Platform Using MERN Stack',
    imageUrl: '/projects/project3.png',
    link: 'https://github.com/jamesjoy-2k24/Sportify',
    category: 'Latest',
  },
  {
    id: 4,
    title: 'Portfolio',
    description: 'The new portfolio Using Next.js',
    imageUrl: '/projects/project1.png',
    link: 'https://github.com/jamesjoy-2k24/Sportify',
    category: 'Latest',
  },
  {
    id: 5,
    title: 'Pro-Pulse',
    description: 'The Booking Platform Using MERN Stack',
    imageUrl: '/projects/project2.png',
    link: 'https://github.com/jamesjoy-2k24/Pro-Pulse',
    category: 'Future',
  },
  {
    id: 6,
    title: 'Sportify',
    description: 'The Sports Related Platform Using MERN Stack',
    imageUrl: '/projects/project3.png',
    link: 'https://github.com/jamesjoy-2k24/Sportify',
    category: 'Future',
  },
  // Add more projects here
];

const ProjectCard: NextPage<{ project: Project }> = ({ project }) => (
  <motion.div
    className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <Image
        src={project.imageUrl}
        alt={project.title}
        layout="responsive"
        width={400}
        height={300}
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-80 transition duration-300 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100">
        <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex items-center justify-center gap-1">
          <FaHandPointRight className="text-yellow-500" />
          <Link href={project.link} className="text-white font-bold">
            GitHub
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    'All' | 'Latest' | 'Future'
  >('All');

  const handleChange = (category: 'All' | 'Latest' | 'Future') => {
    setSelectedCategory(category);
  };

  const filteredProjects = projects.filter(
    project =>
      selectedCategory === 'All' || project.category === selectedCategory,
  );

  return (
    <div className="container mx-auto py-20 z-[20]">
      <section className="text-center">
        <div className="font-extrabold flex flex-col">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.3)}
            className="text-3xl text-white"
          >
            My Projects
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.3)}
            className="text-gray-300 mt-4"
          >
            These are my latest and all projects using modern technologies.
          </motion.p>
        </div>
        <motion.div className="mt-8 flex justify-center gap-4">
          <Button label="All" onClick={() => handleChange('All')} />
          <Button label="Latest" onClick={() => handleChange('Latest')} />
          <Button label="Future" onClick={() => handleChange('Future')} />
        </motion.div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
