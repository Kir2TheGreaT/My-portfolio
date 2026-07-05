"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-tomb-pattern pt-20"
    >
      {/* Водяной знак */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <svg
          viewBox="0 0 100 100"
          className="w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw]"
          fill="currentColor"
        >
          <circle cx="50" cy="60" r="30" />
          <path
            d="M50 30 V 20 C 50 10, 70 10, 70 20"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <rect x="42" y="27" width="16" height="8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-[#c41e3a] font-bold tracking-[0.3em] uppercase mb-4 block">
            Serious Developer
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#e8d5b7] to-[#d4a574] drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-tighter">
            KIRILL.DEV
          </h1>
        </motion.div>

        {/* Адаптивный блок статистики, flex-row */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-row justify-around md:justify-center items-center w-full gap-4 md:gap-12 mt-12 bg-[#160c08]/80 p-6 border-y-2 border-[#c41e3a]/50 backdrop-blur-sm"
        >
          <div className="flex flex-col items-center flex-1">
            <span className="text-3xl md:text-5xl font-black text-[#c41e3a] drop-shadow-[0_0_10px_rgba(196,30,58,0.5)]">
              4+
            </span>
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#d4a574] text-center mt-2 whitespace-nowrap">
              Года выживания
            </span>
          </div>
          <div className="h-12 w-[2px] bg-[#c41e3a]/30 hidden sm:block"></div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-3xl md:text-5xl font-black text-[#c41e3a] drop-shadow-[0_0_10px_rgba(196,30,58,0.5)]">
              30+
            </span>
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#d4a574] text-center mt-2 whitespace-nowrap">
              Боевых задач
            </span>
          </div>
          <div className="h-12 w-[2px] bg-[#c41e3a]/30 hidden sm:block"></div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-3xl md:text-5xl font-black text-[#c41e3a] drop-shadow-[0_0_10px_rgba(196,30,58,0.5)]">
              100%
            </span>
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#d4a574] text-center mt-2 whitespace-nowrap">
              Strict Type
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 mt-16"
        >
          <button className="px-8 py-4 bg-[#c41e3a] text-[#e8d5b7] font-black uppercase tracking-widest neon-border-red hover:bg-[#8b1529] hover:scale-105 transition-all skew-x-[-10deg]">
            <span className="skew-x-[10deg] block">Смотреть инвентарь</span>
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-[#d4a574] text-[#d4a574] font-black uppercase tracking-widest hover:bg-[#d4a574]/10 hover:shadow-[0_0_15px_rgba(212,165,116,0.4)] hover:scale-105 transition-all skew-x-[-10deg]">
            <span className="skew-x-[10deg] block">Вызвать на дуэль</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
