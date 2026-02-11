'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowRight, Users, Calendar, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    // Animate counting up
    const projectTimer = setTimeout(() => {
      setProjectCount(47); // Your actual project count
    }, 500);
    
    const clientTimer = setTimeout(() => {
      setClientCount(32); // Your actual client count
    }, 800);

    return () => {
      clearTimeout(projectTimer);
      clearTimeout(clientTimer);
    };
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        <div className="glass-effect rounded-3xl p-8 text-center">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {projectCount}+
              </div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {clientCount}+
              </div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                3+
              </div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full glass-effect">
              <Rocket className="text-yellow-400" size={20} />
              <span className="text-sm">Let's Build Something Amazing</span>
            </div>
            
            <h2 className="text-3xl font-bold gradient-text mb-4">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              I'm currently available for freelance work and full-time positions. 
              Let's discuss how we can work together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                className="group px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass-effect rounded-full font-semibold"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download Resume
              </motion.button> */}
            </div>
          </motion.div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Logo with Back to Top */}
              <div className="flex flex-col items-center md:items-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={scrollToTop}
                  className="text-2xl font-bold gradient-text cursor-pointer mb-2"
                >
                  Designer<span className="text-pink-500">.</span>
                </motion.button>
                <p className="text-sm text-gray-500">
                  UI/UX Designer & Problem Solver
                </p>
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-gray-400 flex items-center justify-center">
                  Made with <Heart className="mx-2 text-red-500 animate-pulse" size={18} /> 
                  © {currentYear} All rights reserved
                </p>
                {/* <p className="text-sm text-gray-500 mt-2">
                  Designed & Developed with Next.js & Tailwind CSS
                </p> */}
              </div>

              {/* Quick Links */}
              <div className="flex flex-col items-center md:items-end space-y-2">
                <div className="flex space-x-6">
                  {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                    <motion.button
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      onClick={() => {
                        const section = document.getElementById(item.toLowerCase());
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
                <a 
                  href="mailto:pankajhanchate@gmail.com" 
                  className="text-purple-400 hover:text-purple-300 text-sm"
                >
                  pankajhanchate@gmail.com
                </a>
              </div>
            </div>

            {/* Bottom Note */}
            {/* <div className="mt-8 text-center text-xs text-gray-500">
              <p>
                This website uses cookies to enhance user experience. 
                <button className="ml-1 text-gray-400 hover:text-white underline">
                  Learn more
                </button>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;