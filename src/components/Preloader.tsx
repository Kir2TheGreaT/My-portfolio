"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Эффект взрывной волны (Вспышка на весь экран) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            exit={{
              scale: 250,
              opacity: 1,
              backgroundColor: "var(--color-blood-red)",
            }}
            transition={{ duration: 0.4, ease: "easeIn" }}
            className="absolute z-50 w-10 h-10 rounded-full pointer-events-none"
          />

          {/* Контейнер с GIF-бомбой */}
          <motion.div
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="relative z-40 flex flex-col items-center"
          >
            {/* 
              rounded-full + overflow-hidden намертво отсекают углы квадрата.
              shadow- вместо drop-shadow делает свечение идеально круглым.
            */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_10px_rgba(255,0,0,0.7)] bg-black">
              <Image
                src="/serious-sam-serious-bomb.gif"
                alt="Serious Sam Bomb GIF"
                fill
                priority
                unoptimized
                // scale-[1.05] слегка растягивает гифку, чтобы черные поля вылезли за круг и обрезались
                className="object-contain scale-[1.05]"
              />
            </div>

            {/* Текст загрузки */}
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 0.4 }}
              className="mt-6 text-blood-red font-black tracking-[0.3em] uppercase text-sm md:text-xl text-center"
            >
              Загрузка арсенала...
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
