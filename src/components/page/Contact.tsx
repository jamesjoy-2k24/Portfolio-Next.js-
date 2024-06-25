'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight } from '@/utils/motion';
import Button from '../common/Button';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    // Handle form submission, e.g., send data to an API
  };

  return (
    <div className="container mx-auto py-20 md:px-20 px-6 z-[20]">
      <section className="text-center">
        <div className="font-extrabold flex flex-col">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.3)}
            className="text-3xl text-white"
          >
            Contact Me
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.3)}
            className="text-gray-300 mt-4 "
          >
            Feel free to reach out to me by filling out the form below.
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromRight(0.3)}
          className="mt-8 flex flex-wrap items-center justify-around"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl  p-8 rounded-l-lg "
          >
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 text-gray-900 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 text-gray-900 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 text-gray-900 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-300 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 text-gray-900 rounded-md"
                rows={5}
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button label="Send Message" onClick={handleSubmit} />
              </motion.div>
            </div>
          </form>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(0.3)}
            className="md:w-full max-w-lg rounded-lg flex justify-center"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1178.4541078512034!2d80.36489650352419!3d8.649421009812022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc46b547104c8f%3A0xe2a3d3b1d77c531c!2sPeriyapuliyalankulam!5e0!3m2!1sen!2slk!4v1719310302147!5m2!1sen!2slk"
              width="600"
              height="500"
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
