'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { PROJECTS } from '@/lib/constants'; // ← ADD THIS

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A selection of my recent design work and case studies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => ( // ← USING CONSTANT
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group hover-lift"
            >
              <div className="glass-effect rounded-3xl overflow-hidden h-full">
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                      >
                        <Eye size={20} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full"
                      >
                        <ExternalLink size={20} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-sm text-purple-300 font-medium">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                    </div>
                    <ExternalLink className="text-gray-400" size={20} />
                  </div>

                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features from constants */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-300">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-medium"
                    >
                      View Case Study
                    </motion.button>
                    
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href={project.link}
                        className="p-2 glass-effect rounded-full"
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2 }}
                        href={project.github}
                        className="p-2 glass-effect rounded-full"
                      >
                        <Github size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;