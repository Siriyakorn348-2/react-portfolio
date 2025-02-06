import aboutImg from "../assets/pic2.jpg";
import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion";

// สร้างฟังก์ชันสำหรับ variants
const container = (delay) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        variants={container(0)}
        initial="hidden"
        whileInView="visible" 
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-500 "> Me</span>
      </motion.h1>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            whileInView="visible" 
            className="flex items-center justify-center"
          >
            <motion.img
              className="rounded-2xl"
              src={aboutImg}
              alt="about"
              variants={container(1)}
              initial="hidden"
              whileInView="visible" 
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            variants={container(1)}
            initial="hidden"
            whileInView="visible" 
            className="flex items-center justify-center"
          >
            <motion.p
              variants={container(1.2)}
              initial="hidden"
              whileInView="visible" 
              className="my-2 max-w-xl py-6"
            >
              {ABOUT_TEXT}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
