'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    { id: 1, title: "Mobile App Design", category: "UI Design" },
    { id: 2, title: "Dashboard Analytics", category: "Web Design" },
    { id: 3, title: "Brand Identity", category: "Branding" },
    { id: 4, title: "User Flow", category: "UX Design" },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 glass-effect rounded-xl font-semibold"
      >
        Open Gallery
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 p-2 glass-effect rounded-full z-10"
              >
                <X size={24} />
              </button>

              {/* Main Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                  <div className="text-8xl">🖼️</div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold">{images[currentImage].title}</h3>
                      <p className="text-gray-300">{images[currentImage].category}</p>
                    </div>
                    <div className="text-sm">
                      {currentImage + 1} / {images.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevImage}
                  className="p-3 glass-effect rounded-full"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Thumbnails */}
                <div className="flex space-x-3">
                  {images.map((img, index) => (
                    <button
                      key={img.id}
                      onClick={() => setCurrentImage(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden transition-all ${
                        currentImage === index
                          ? 'ring-2 ring-purple-500 scale-110'
                          : 'opacity-50 hover:opacity-100'
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        {index + 1}
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={nextImage}
                  className="p-3 glass-effect rounded-full"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryModal;