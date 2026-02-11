'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, CONTACT_FORM } from '@/lib/constants'; // ← ADD THIS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {CONTACT_FORM.fields.map((field) => ( // ← USING CONSTANT
                <div key={field.name}>
                  <label className="block text-sm font-medium mb-2">
                    {field.label} {field.required && <span className="text-red-400">*</span>}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.name as keyof typeof formData] as string}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder={`Enter your ${field.label.toLowerCase()}...`}
                      rows={5}
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type}
                      value={formData[field.name as keyof typeof formData] as string}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder={`Enter your ${field.label.toLowerCase()}...`}
                      required={field.required}
                    />
                  )}
                </div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="glass-effect rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-xl">
                    <Mail className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">{PERSONAL_INFO.email}</p> {/* ← USING CONSTANT */}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-pink-500/20 rounded-xl">
                    <Phone className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="font-medium">{PERSONAL_INFO.phone}</p> {/* ← USING CONSTANT */}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <MapPin className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="font-medium">{PERSONAL_INFO.location}</p> {/* ← USING CONSTANT */}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            {/* <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {SOCIAL_LINKS.map((social) => ( // ← USING CONSTANT
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{social.icon}</span>
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;