import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '../../utils/motion';
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsList,
  BsX,
} from 'react-icons/bs';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50">
      <motion.div
        initial="hidden"
        animate="visible"
        className="bg-transparent backdrop-blur-3xl h-[70px] text-gray-300 flex justify-between md:justify-around items-center md:px-10 px-6"
      >
        <motion.div
          variants={slideInFromTop(0.3)}
          className="text-white font-bold text-lg"
        >
          <div>James Joy</div>
        </motion.div>

        <div className="hidden md:flex gap-10 bg-black bg-opacity-50 ml-[5rem] font-bold p-2 px-6 rounded-3xl">
          {['Home', 'About', 'Contact', 'Projects'].map((item, index) => (
            <motion.div
              key={index}
              variants={slideInFromTop(0.4 + index * 0.1)}
            >
              <Link href={`/${item.toLowerCase()}`}>
                <span className="hover:text-white cursor-pointer">{item}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div className="hidden md:flex items-center gap-8 text-2xl">
          {[BsFacebook, BsInstagram, BsTwitter, BsGithub].map((Icon, index) => (
            <motion.div
              key={index}
              variants={slideInFromTop(0.8 + index * 0.1)}
              whileHover={{
                scale: 1.2,
                color: '#faf3fb',
              }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer hover:drop-shadow-2xl hover:shadow-[#af7dff]"
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>

        <div className="md:hidden flex items-center hover:rotate-45">
          <button
            onClick={handleToggleMenu}
            className="text-3xl font-extrabold text-white hover:rotate-45"
          >
            {isOpen ? <BsX /> : <BsList />}
          </button>
        </div>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '70%' }}
          exit={{ width: 0 }}
          className="fixed md:hidden top-0 right-0 h-full bg-black text-white flex flex-col items-center justify-center space-y-8 -z-50"
        >
          {['Home', 'About', 'Contact', 'Projects'].map((item, index) => (
            <motion.div
              key={index}
              variants={slideInFromTop(0.4 + index * 0.1)}
            >
              <Link href={`/${item.toLowerCase()}`}>
                <span
                  onClick={handleToggleMenu}
                  className="text-lg hover:text-white cursor-pointer"
                >
                  {item}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
