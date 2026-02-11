'use client';

import { motion } from 'framer-motion';
import { SKILLS, TOOLS } from '@/lib/constants'; // ← ADD THIS
import { Palette, Users, Layers, Zap } from 'lucide-react';
import React from 'react';

const Skills = () => {
  const iconMap: Record<string,  React.ReactElement> = {
    '🎨': <Palette />,
    '🔍': <Users />,
    '⚡': <Zap />,
    '📦': <Layers />,
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tools and methodologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {SKILLS.map((skill, index) => ( // ← USING CONSTANT
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    {iconMap[skill.icon] || <span>{skill.icon}</span>}
                  </div>
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                </div>
                <span className="text-2xl font-bold">{skill.level}%</span>
              </div>

              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
              
              <div className="mt-2 text-xs text-gray-400">
                Category: {skill.category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {TOOLS.map((tool) => ( // ← USING CONSTANT
              <motion.div
                key={tool}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center space-y-3 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <span className="text-lg">{tool.charAt(0)}</span>
                </div>
                <span className="font-medium text-sm text-center">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;