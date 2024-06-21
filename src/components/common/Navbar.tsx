import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { slideInFromTop } from '../../utils/motion'
import { BsFacebook, BsInstagram, BsTwitterX, BsGithub } from 'react-icons/bs'
import Link from 'next/link'

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <div>
      <motion.div initial="hidden" animate="visible">
        <div className="bg-transparent backdrop-blur-3xl h-[70px] z-10 absolute text-white w-full flex justify-around items-center text-lg font-extrabold">
          <motion.div variants={slideInFromTop(0.3)}>
            <div>James Joy</div>
          </motion.div>
          <div>
            <motion.div className="flex gap-10">
              <motion.div variants={slideInFromTop(0.4)}>
                <Link className="hover:text-white" href={'/'}>
                  Home
                </Link>
              </motion.div>
              <motion.div variants={slideInFromTop(0.5)}>
                <Link className="hover:text-white" href={'/'}>
                  About
                </Link>
              </motion.div>
              <motion.div variants={slideInFromTop(0.6)}>
                <Link className="hover:text-white" href={'/'}>
                  Contact
                </Link>
              </motion.div>
              <motion.div variants={slideInFromTop(0.7)}>
                <Link className="hover:text-white" href={'/'}>
                  Projects
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <motion.div className="flex items-center gap-6 text-xl">
            <motion.div variants={slideInFromTop(0.8)}>
              <BsFacebook />
            </motion.div>
            <motion.div variants={slideInFromTop(0.9)}>
              <BsInstagram />
            </motion.div>
            <motion.div variants={slideInFromTop(1)}>
              <BsTwitterX />
            </motion.div>
            <motion.div variants={slideInFromTop(1.1)}>
              <BsGithub />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
