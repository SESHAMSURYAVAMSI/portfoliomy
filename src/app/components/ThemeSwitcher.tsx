'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Palette } from 'lucide-react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'purple'>('dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'light' | 'dark' | 'purple';
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark' | 'purple') => {
    document.documentElement.classList.remove('light-theme', 'dark-theme', 'purple-theme');
    document.documentElement.classList.add(`${newTheme}-theme`);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const themes = [
    { id: 'dark', name: 'Dark', icon: <Moon size={18} />, color: 'bg-gray-900' },
    { id: 'light', name: 'Light', icon: <Sun size={18} />, color: 'bg-yellow-100' },
    { id: 'purple', name: 'Purple', icon: <Palette size={18} />, color: 'bg-purple-900' },
  ];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-24 right-8 z-50 p-3 glass-effect rounded-full shadow-lg"
        aria-label="Change theme"
      >
        {theme === 'dark' ? <Moon /> : theme === 'light' ? <Sun /> : <Palette />}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed top-40 right-8 z-50 glass-effect rounded-2xl p-4 w-48"
        >
          <h4 className="font-bold mb-3">Choose Theme</h4>
          <div className="space-y-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id as any);
                  applyTheme(t.id as any);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${
                  theme === t.id ? 'bg-white/20' : 'hover:bg-white/10'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full ${t.color} border border-white/20`} />
                  <span>{t.name}</span>
                </div>
                {t.icon}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ThemeSwitcher;