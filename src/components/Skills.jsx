import { SKILLS } from "../constants";
import { motion } from "framer-motion"; 

const TechnicalProficiency = () => {
  
  const container = (delay) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    }
  });

  return (
    <div className="border-b border-neutral-900 pb-8 my-20">
      <h1 className="text-center text-5xl font-bold mb-12">
        <span>Technical Proficiency</span>
      </h1>

      <div className="flex flex-wrap justify-between gap-2">
        {/* Frontend Skills */}
        <motion.div
          className="bg-black text-white p-6 rounded-xl shadow-lg w-72"
          variants={container(0.5)} 
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-3xl font-semibold mb-4 text-gradient-to-r from-green-400 to-blue-500">
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Frontend
            </span>
          </h2>
          <ul>
            {SKILLS.frontend.map((skill) => (
              <li key={skill.name} className="text-xl mb-2">
                {skill.name}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          className="bg-black text-white p-6 rounded-xl shadow-lg w-72"
          variants={container(1)}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-3xl font-semibold mb-4 text-gradient-to-r from-yellow-400 to-red-500">
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Backend
            </span>
          </h2>
          <ul>
            {SKILLS.backend.map((skill) => (
              <li key={skill.name} className="text-xl mb-2">
                {skill.name}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tools Skills */}
        <motion.div
          className="bg-black text-white p-6 rounded-xl shadow-lg w-72"
          variants={container(1.2)} 
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-3xl font-semibold mb-4 text-gradient-to-r from-teal-400 to-blue-600">
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Tools
            </span>
          </h2>
          <ul>
            {SKILLS.tools.map((skill) => (
              <li key={skill.name} className="text-xl mb-2">
                {skill.name}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          className="bg-black text-white p-6 rounded-xl shadow-lg w-72"
          variants={container(1.5)} 
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-3xl font-semibold mb-4 text-gradient-to-r from-purple-500 to-pink-600">
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Soft Skills
            </span>
          </h2>
          <ul>
            {SKILLS.softSkills.map((skill) => (
              <li key={skill.name} className="text-xl mb-2">
                {skill.name}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnicalProficiency;
