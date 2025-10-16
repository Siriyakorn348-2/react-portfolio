import { HERO_CONTENT } from "../constants";
import Pic from "../assets/pic3.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const roles = ["Full Stack Developer", "Frontend UI Designer"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

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

        <div className="w-full lg:w-1/2 flex justify-center px-4 lg:px-16 mt-8 lg:mt-0">
          <motion.img
            initial={{ x: 100, opacity: 0, rotate: 5 }}
            animate={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 1 }}
            src={Pic}
            alt="Profile Picture"
            className="rounded-3xl shadow-2xl shadow-purple-500/30 w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
