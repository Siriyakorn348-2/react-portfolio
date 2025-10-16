"use client"

import { motion } from "framer-motion"
import {WORK_EXPERIENCES} from "../constants"


const container = (delay) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const Work = () => {
  return (
    <div className="py-20 px-4 md:px-16 ">
      <motion.h1
        variants={container(0)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-5xl"
      >
        Work Experience
      </motion.h1>

      <div className="relative border-l-2 border-purple-500 mx-auto max-w-4xl">
        {WORK_EXPERIENCES.map((work, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-8 md:ml-12 flex flex-col md:flex-row items-start md:items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport='visible' 
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute -left-4 md:-left-5 w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>

            <div className="w-full md:w-1/4 text-white font-medium text-sm mb-2 md:mb-0">
              {work.duration}
            </div>

            <div className="w-full md:w-3/4 bg-neutral-900 border-2 border-purple-500 rounded-xl p-5 md:ml-6 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white">{work.position}</h3>
              <p className="text-gray-300 text-sm mb-1">{work.company}</p>
              <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed">{work.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Work
