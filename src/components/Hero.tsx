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
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-none font-extrabold text-sand-gold [text-shadow:0_4px_24px_rgba(0,0,0,0.85)]">
            KIRILL<span className="text-sand-muted">.DEV</span>
          </h1>
          <p className="mt-4 text-base md:text-xl font-semibold uppercase tracking-[0.2em] text-sand-muted [text-shadow:0_2px_12px_rgba(0,0,0,0.9)]">
            Serious Developer
          </p>
        </motion.div>

        {/* Блок статистики */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-row justify-around md:justify-center items-start w-full gap-4 md:gap-14 mt-12 bg-black/65 px-6 py-5 md:px-10 border-y border-blood-red/60"
        >
          {[
            { val: "1+", label: " года выживания" },
            { val: "100+", label: "Боевых задач" },
            { val: "100%", label: "Strict Type" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <span className="font-display text-4xl md:text-5xl font-bold text-blood-text">
                {stat.val}
              </span>
              <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-sand-gold text-center mt-2">
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
            className="px-8 py-4 bg-blood-red text-sand-gold font-bold uppercase tracking-widest hover:bg-[#a3182f] hover:-translate-y-0.5 transition-[background-color,transform] duration-200 ease-out skew-x-[-10deg] inline-block text-center cursor-pointer"
          >
            <span className="skew-x-[10deg] block">Смотреть инвентарь</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="px-8 py-4 bg-black/60 border-2 border-sand-muted text-sand-muted font-bold uppercase tracking-widest hover:bg-sand-muted hover:text-tomb-bg hover:-translate-y-0.5 transition-[background-color,color,transform] duration-200 ease-out skew-x-[-10deg] inline-block text-center cursor-pointer"
          >
            <span className="skew-x-[10deg] block">Вызвать на дуэль</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
