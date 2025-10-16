"use client"

import { useState, useEffect } from "react"
import { PROJECTS } from "../constants"
import { FaGithub, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!selectedProject || isHovering || !selectedProject.images || selectedProject.images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % selectedProject.images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [selectedProject, isHovering])

  const nextImage = () => {
    if (!selectedProject) return
    setCurrentImage((prev) => (prev + 1) % selectedProject.images.length)
  }

  const prevImage = () => {
    if (!selectedProject) return
    setCurrentImage((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length)
  }

  const openProject = (project) => {
    setSelectedProject(project)
    setCurrentImage(0)
  }

  return (
    <div className="border-b border-neutral-900 pb-4 my-20">
      <h1 className="text-center text-4xl mb-12 text-white font-bold">Projects</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.name}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ duration: 0.3 }}
            onClick={() => openProject(project)}
          >
            <div className="bg-black border-2 border-white rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-400 transition-all duration-300 h-full">
              {project.images && project.images[0] && (
                <div className="overflow-hidden">
                  <motion.img
                    src={project.images[0]}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              )}
              <div className="p-5">
                <h2 className="text-2xl text-white mb-2 text-center font-semibold">{project.name}</h2>
                <p className="text-gray-300 text-sm text-center mb-2 line-clamp-2">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
              <button
    className="absolute top-3 right-3 text-white hover:text-red-400 bg-black/50 p-2 rounded-full hover:bg-black/70 transition z-20"
    onClick={() => setSelectedProject(null)}
  >
    <FaTimes size={20} />
  </button>
          <motion.div
          className="bg-neutral-900 border-2 border-purple-500/50 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-purple-500/20 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >


  {selectedProject.images && selectedProject.images.length > 0 && (
    <div
      className="relative max-h-[60vh] overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          src={selectedProject.images[currentImage]}
          alt={selectedProject.name}
          className="w-full h-full object-cover rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {selectedProject.images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute top-1/2 -translate-y-1/2 left-3 text-white bg-black/60 p-3 rounded-full hover:bg-purple-600 hover:scale-110 transition-all duration-200"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 -translate-y-1/2 right-3 text-white bg-black/60 p-3 rounded-full hover:bg-purple-600 hover:scale-110 transition-all duration-200"
          >
            <FaArrowRight size={20} />
          </button>
        </>
      )}
    </div>
  )}

  <h2 className="text-3xl font-bold mt-6 text-center text-white">{selectedProject.name}</h2>
  <p className="text-gray-300 text-center mt-3 leading-relaxed px-4">{selectedProject.description}</p>
  {selectedProject.details && (
    <div className="mt-4 px-2">
      <h3 className="text-xl font-semibold text-white mb-2">Details</h3>
      <p className="text-gray-300 whitespace-pre-line leading-relaxed">{selectedProject.details}</p>
    </div>
  )}

  <div className="flex justify-center mt-6">
    <a
      href={selectedProject.github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:from-purple-700 hover:to-purple-900 hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/30"
    >
      <FaGithub size={20} /> View on GitHub
    </a>
  </div>
</motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects
