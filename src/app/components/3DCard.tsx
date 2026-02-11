'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Figma, Eye, Code } from 'lucide-react';

const Interactive3DCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="relative w-full max-w-md mx-auto cursor-pointer"
    >
      {/* Card */}
      <div className="glass-effect rounded-3xl p-8 transform-gpu shadow-2xl">
        <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">🎨</div>
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full">
              <Figma size={20} />
            </div>
            <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full">
              <Eye size={20} />
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-3">Design System Showcase</h3>
        <p className="text-gray-300 mb-6">
          A complete design system with reusable components, patterns, and guidelines.
        </p>

        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <div className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
              Figma
            </div>
            <div className="px-3 py-1 bg-pink-500/20 rounded-full text-sm">
              React
            </div>
          </div>
          <button className="p-3 glass-effect rounded-full">
            <Code size={20} />
          </button>
        </div>
      </div>

      {/* 3D Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl -z-10" />
    </motion.div>
  );
};

export default Interactive3DCard;