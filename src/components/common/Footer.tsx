'use client';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer: NextPage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="md:px-20 px-6 bg-gray-900 w-full py-5">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <h2 className="text-2xl hover:text-white hover:scale-110 duration-300 font-bold text-white">
              Stay Connected
            </h2>
            <p className="text-gray-300 text-center">
              Follow me on my social media channels and get in touch!
            </p>
            <div className="flex text-lg text-white">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ duration: 0.5 }}
                className="flex gap-7 mb-6 lg:mb-0 z-20"
              >
                <Link href="https://github.com/your-github" aria-label="GitHub">
                  <FaGithub className="text-gray-300 text-2xl hover:text-white hover:scale-110 duration-300" />
                </Link>
                <Link
                  href="https://linkedin.com/in/your-linkedin"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-gray-300 text-2xl hover:text-white hover:scale-110 duration-300" />
                </Link>
                <Link
                  href="https://twitter.com/your-twitter"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-gray-300 text-2xl hover:text-white hover:scale-110 duration-300" />
                </Link>
                <Link href="mailto:your-email@example.com" aria-label="Email">
                  <FaEnvelope className="text-gray-300 text-2xl hover:text-white hover:scale-110 duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div className="text-white font-bold text-sm text-center w-full bg-black py-1">
        {' '}
        <p>&copy; 2024 Joy James. All rights reserved.</p>
      </motion.div>
      {showButton && (
        <motion.button
          className="fixed bottom-10 right-6 bg-fuchsia-700 text-white p-3 rounded-full shadow-lg hover:bg-black duration-200 focus:outline-none z-20"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
