import { PROJECTS } from "../constants"; 
import { FaGithub } from 'react-icons/fa'; 
import { motion } from "framer-motion"; 

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 my-20">
      <h1 className="text-center text-4xl mb-12">Projects</h1>

      <div className="flex flex-wrap justify-between gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.name}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }} 
          >
            <div className="bg-black border-2 border-white rounded-xl p-6">
              <h2 className="text-2xl mb-4 text-center text-white">{project.name}</h2>
              <p className="text-white mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
              <p className="text-sm text-white mt-2">Year: {project.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
