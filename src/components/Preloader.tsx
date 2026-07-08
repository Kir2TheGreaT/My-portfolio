"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  // Имитация загрузки
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Функция активации: звук + запуск анимации ворот
  const handleActivate = () => {
    const audio = new Audio("/Voicy_Serious Firepower.mp3");
    audio.volume = 0.2;
    audio.play().catch((e) => console.log("Браузер блокирует звук", e));

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          // Контейнер остается видимым, пока створки полностью не уедут за экран (0.8 сек)
          exit={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-transparent overflow-hidden"
        >
          {/* ЛЕВАЯ СТВОРКА ВОРОТ */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }} // Кастомный плавный, но тяжелый выезд
            className="absolute inset-y-0 left-0 w-1/2 bg-black border-r-2 border-[#c41e3a] shadow-[inset_-15px_0_30px_rgba(196,30,58,0.2)] z-10"
          />

          {/* ПРАВАЯ СТВОРКА ВОРОТ */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 bg-black border-l-2 border-[#c41e3a] shadow-[inset_15px_0_30px_rgba(196,30,58,0.2)] z-10"
          />

          {/* ЦЕНТРАЛЬНЫЙ КОНТЕНТ (Над воротами благодаря z-40) */}
          <motion.div
            exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="relative z-40 flex flex-col items-center"
          >
            {/* Контейнер с GIF-бомбой */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_10px_rgba(255,0,0,0.7)] bg-black">
              <Image
                src="/serious-sam-serious-bomb.gif"
                alt="Serious Sam Bomb GIF"
                fill
                priority
                unoptimized
                className="object-contain scale-[1.05]"
              />
            </div>

            {/* Логика текста */}
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="mt-6 font-black tracking-[0.3em] uppercase text-sm md:text-xl text-center"
            >
              {isReady ? (
                <button
                  onClick={handleActivate}
                  className="text-white hover:text-blood-red transition-colors border border-white/20 px-6 py-2 rounded-full cursor-pointer bg-black/40 backdrop-blur-sm"
                >
                  [ КЛИК ДЛЯ АКТИВАЦИИ ]
                </button>
              ) : (
                <span className="text-blood-red">Загрузка арсенала...</span>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
