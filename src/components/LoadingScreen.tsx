"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingTexts] = useState([
    "Loading textures...",
    "Initializing weapons...",
    "Preparing the arena...",
    "Sharpening swords...",
    "Ready for battle!",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  const currentTextIndex = Math.floor(progress / 20);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={progress >= 100 ? { opacity: 0 } : {}}
      transition={{ duration: 0.5, delay: progress >= 100 ? 0.3 : 0 }}
      className="fixed inset-0 z-[9999] bg-night-deep flex items-center justify-center"
    >
      <div className="text-center max-w-md px-8">
        {/* Логотип */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-medieval font-black text-sand-light serious-text">
            SERIOUS SAM
          </h1>
          <p className="text-xl font-medieval text-blood mt-2">PORTFOLIO</p>
        </motion.div>

        {/* Полоска загрузки */}
        <div className="w-full h-6 bg-night border-2 border-stone mb-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
            className="h-full bg-gradient-to-r from-blood to-red-500"
          />
        </div>

        {/* Текст загрузки */}
        <p className="text-sm font-medieval text-sand-light uppercase tracking-wider">
          {loadingTexts[Math.min(currentTextIndex, loadingTexts.length - 1)]}
        </p>

        {/* Процент */}
        <p className="text-2xl font-bold text-blood mt-4">{progress}%</p>

        {/* Декоративный текст */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs text-stone-light italic mt-8"
        >
          "The only thing worse than being trained with a sword is to be trained
          with React."
        </motion.p>
      </div>
    </motion.div>
  );
}
