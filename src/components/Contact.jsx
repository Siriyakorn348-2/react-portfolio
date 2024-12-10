import React from 'react';
import { CONTACT } from '../constants';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'; 

const Contact = () => {
  return (
    <div className="py-16 px-4">
      <motion.h1
        className="text-center text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto bg-black text-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-2xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get in touch
        </motion.h2>

        <p className="mb-6 text-xl">
         If you would like to collaborate or simply wish to connect, please don't hesitate to reach out
        </p>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Address:</h3>
          <p className="text-lg">{CONTACT.address}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Phone:</h3>
          <p className="text-lg">{CONTACT.phoneNo}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Email:</h3>
          <p className="text-lg">{CONTACT.email}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">GitHub:</h3>
          <a
            href={`https://github.com/${CONTACT.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            <FaGithub /> {CONTACT.github}
          </a>
        </div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl">Looking forward to hearing from you</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
