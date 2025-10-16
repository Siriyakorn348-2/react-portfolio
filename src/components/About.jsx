import aboutImg from "../assets/pic2.jpg";
import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion";

const container = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: delay, ease: "easeOut" },
  },
});

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        variants={container(0)}
        initial="hidden"
        whileInView="visible"
        className="my-20 text-center text-4xl font-bold"
      >
        About <span className="text-purple-500">Me</span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-12 px-4 md:px-16">
        <motion.div
          variants={container(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <motion.img
            src={aboutImg}
            alt="about"
            className="rounded-3xl shadow-2xl shadow-purple-500/30 w-full max-w-md object-cover transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        <motion.div
          variants={container(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <motion.p
            variants={container(0.8)}
            initial="hidden"
            whileInView="visible"
            className="my-2 max-w-xl py-6 text-gray-300 leading-relaxed"
          >
            {ABOUT_TEXT}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
