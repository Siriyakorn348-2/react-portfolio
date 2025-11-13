"use client"

import aboutImg from "../assets/pic2.jpg"
import { ABOUT_TEXT } from "../constants/index"
import { motion } from "framer-motion"

const container = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: delay, ease: "easeOut" },
  },
})

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-20 text-center text-6xl md:text-7xl font-bold text-white"
        >
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-12 px-4 md:px-16 relative z-10">
        <motion.div
          variants={container(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative group"
          >
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
            <motion.img
              src={aboutImg}
              alt="about"
              className="relative rounded-3xl w-full max-w-md object-cover border-2 border-purple-500/50"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={container(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 max-w-xl text-center lg:text-left relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-purple-500/30 rounded-tl-3xl" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-pink-500/30 rounded-br-3xl" />

          <motion.div
            className="backdrop-blur-sm bg-neutral-900/30 p-8 rounded-2xl border border-purple-500/20 shadow-xl shadow-purple-500/10"
            whileHover={{
              borderColor: "rgba(168, 85, 247, 0.4)",
              boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.2), 0 8px 10px -6px rgba(168, 85, 247, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              variants={container(0.8)}
              initial="hidden"
              whileInView="visible"
              className="text-gray-300 text-lg leading-relaxed relative"
            >
              <span className="text-5xl text-purple-500/50 absolute -top-2 -left-2 font-serif">"</span>
              {ABOUT_TEXT}
              <span className="text-5xl text-purple-500/50 absolute -bottom-6 -right-2 font-serif">"</span>
            </motion.p>

        
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
