"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // Функция для плавного перемещения к секциям
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Фон с пирамидами и бомбой */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Desert Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Градиентный слой (визор), чтобы затемнить картинку для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-tomb-bg"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center mt-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-blood-red font-bold tracking-[0.3em] uppercase mb-4 block drop-shadow-[0_0_5px_rgba(0,0,0,0.8)]">
            Serious Developer
          </span>
          <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-sand-gold to-sand-muted drop-shadow-[0_5px_10px_rgba(0,0,0,1)] tracking-tighter">
            KIRILL.DEV
          </h1>
        </motion.div>

        {/* Блок статистики */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-row justify-around md:justify-center items-center w-full gap-4 md:gap-12 mt-12 bg-black/50 p-6 border-y-2 border-blood-red/50 backdrop-blur-md"
        >
          {[
            { val: "3+", label: " года выживания" },
            { val: "100+", label: "Боевых задач" },
            { val: "100%", label: "Strict Type" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <span className="text-3xl md:text-5xl font-black text-blood-red drop-shadow-[0_0_15px_rgba(196,30,58,0.8)]">
                {stat.val}
              </span>
              <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-sand-gold text-center mt-2 whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Боевые кнопки (теперь с прицелом на нужные секции) */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 mt-16"
        >
          <a
            href="#portfolio"
            onClick={(e) => handleScrollTo(e, "#portfolio")}
            className="px-8 py-4 bg-blood-red text-sand-gold font-black uppercase tracking-widest neon-border-red hover:bg-rose-900 hover:scale-105 transition-all skew-x-[-10deg] inline-block text-center cursor-pointer"
          >
            <span className="skew-x-[10deg] block">Смотреть инвентарь</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="px-8 py-4 bg-black/60 backdrop-blur-sm border-2 border-sand-muted text-sand-muted font-black uppercase tracking-widest hover:bg-sand-muted/20 hover:shadow-[0_0_15px_rgba(212,165,116,0.6)] hover:scale-105 transition-all skew-x-[-10deg] inline-block text-center cursor-pointer"
          >
            <span className="skew-x-[10deg] block">Вызвать на дуэль</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
