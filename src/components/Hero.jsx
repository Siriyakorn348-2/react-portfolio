"use client"

import { HERO_CONTENT } from "../constants"
import Pic from "../assets/pic3.jpg"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})

const roles = ["Full Stack Developer", "Frontend UI Designer"]

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 px-4 lg:px-16">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white"
          >
            Siriyakorn Artyangkam
          </motion.h1>

          <div className="h-16 relative mt-2 perspective-1000">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentRole}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute text-4xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
                style={{ backfaceVisibility: "hidden", display: "inline-block" }}
              >
                {roles[currentRole]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-6 max-w-xl font-light text-gray-300 text-lg leading-relaxed"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center px-4 lg:px-16 mt-8 lg:mt-0 relative">
          {/* Main Profile Picture */}
          <motion.img
            initial={{ x: 100, opacity: 0, rotate: 5 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1 }}
            src={Pic}
            alt="Profile Picture"
            className="rounded-3xl shadow-2xl shadow-purple-500/30 w-full max-w-md object-cover hover:scale-105 transition-transform duration-500 relative z-10"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 1.5 },
              scale: { duration: 0.5, delay: 1.5 },
              y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="absolute top-0 left-8 lg:left-16 w-24 h-24 rounded-2xl overflow-hidden shadow-xl shadow-pink-500/40 border-2 border-pink-400/30 z-20"
          >
            <img src="/images/hero/3.jpg" alt="" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 1.7 },
              scale: { duration: 0.5, delay: 1.7 },
              y: { duration: 3.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 },
              rotate: { duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 },
            }}
            className="absolute top-12 right-4 lg:right-12 w-28 h-28 rounded-2xl overflow-hidden shadow-xl shadow-purple-500/40 border-2 border-purple-400/30 z-20"
          >
            <img src="/images/hero/1.jpg" alt="" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, 20, 0],
              rotate: [0, -5, 0],
              x: [0, 10, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 1.9 },
              scale: { duration: 0.5, delay: 1.9 },
              y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
              rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
              x: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 },
            }}
            className="absolute bottom-16 left-4 lg:left-8 w-20 h-20 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/40 border-2 border-blue-400/30 z-20"
          >
            <img src="/images/hero/2.jpg" alt="" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero
