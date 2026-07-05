"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-24 bg-[#160c08] relative overflow-hidden border-t-4 border-b-4 border-[#c41e3a]"
    >
      {/* Стилизация сканлайнов для эффекта экрана */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-30 z-10"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#0a0504] border-2 border-[#c41e3a] p-1 shadow-[0_0_30px_rgba(196,30,58,0.15)]"
        >
          <div className="border border-[#c41e3a]/50 p-6 md:p-10 relative">
            {/* Header терминала */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-[#c41e3a]/30 pb-4 mb-8">
              <div>
                <h2 className="text-3xl font-black text-[#c41e3a] tracking-widest uppercase">
                  NETRICSA v1.03
                </h2>
                <p className="text-[#d4a574] text-xs md:text-sm font-mono mt-1">
                  NEuro-TRonically Implanted Combat Situation Analyzer
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right font-mono text-sm space-y-1">
                <div className="text-[#e8d5b7] bg-[#c41e3a]/20 px-3 py-1 border border-[#c41e3a]">
                  STATUS: READY FOR DEPLOYMENT
                </div>
                <div className="text-[#d4a574] animate-pulse">
                  AMMO: INFINITE
                </div>
              </div>
            </div>

            {/* Грид характеристик */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-mono">
              <div className="space-y-2">
                <h3 className="text-[#c41e3a] font-bold text-xl uppercase border-l-4 border-[#c41e3a] pl-3">
                  Экипировка (Стек)
                </h3>
                <ul className="text-[#e8d5b7] space-y-1 pl-4 text-sm md:text-base">
                  <li>
                    <span className="text-[#d4a574]">[+]</span> Vue 3 & Nuxt 3
                    (Pinia, Composition API)
                  </li>
                  <li>
                    <span className="text-[#d4a574]">[+]</span> React & Next.js
                    (App Router, Zustand)
                  </li>
                  <li>
                    <span className="text-[#d4a574]">[+]</span> TypeScript /
                    JavaScript (ES6+)
                  </li>
                  <li>
                    <span className="text-[#d4a574]">[+]</span> Tailwind CSS /
                    SCSS / БЭМ
                  </li>
                  <li>
                    <span className="text-[#d4a574]">[+]</span> REST API / JWT /
                    SSR
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-[#c41e3a] font-bold text-xl uppercase border-l-4 border-[#c41e3a] pl-3">
                  Инфраструктура & Тулзы
                </h3>
                <ul className="text-[#e8d5b7] space-y-1 pl-4 text-sm md:text-base">
                  <li>
                    <span className="text-[#d4a574]">[+]</span> Git, CI/CD
                    (Vercel), Vite, Figma
                  </li>
                  <li>
                    <span className="text-[#d4a574]">[+]</span> Docker &
                    Containerization
                  </li>
                  <li>
                    <span className="text-[#d4a574]">[+]</span> AI Tools
                    (Copilot, ChatGPT, Claude)
                  </li>
                  <li>
                    <span className="text-[#d4a574]">[+]</span> Linux
                    environments (Bazzite)
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-[#c41e3a] font-bold text-xl uppercase border-l-4 border-[#c41e3a] pl-3">
                  Слайсинг Реальности
                </h3>
                <p className="text-[#e8d5b7] pl-4 text-sm leading-relaxed">
                  3D Printing Enthusiast. Печать объектов физического мира с
                  идеальной калибровкой. Работа со слайсерами, кастомное
                  охлаждение и термооптимизация.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-[#c41e3a] font-bold text-xl uppercase border-l-4 border-[#c41e3a] pl-3">
                  Бэкграунд
                </h3>
                <p className="text-[#e8d5b7] pl-4 text-sm leading-relaxed">
                  Магистратура (2020) и Аспирантура (2023), Исторический
                  факультет ДонГУ. Способность анализировать массивные объемы
                  данных прошлого для проектирования архитектуры будущего.
                  Интенсивный годовой курс профильного обучения
                  Frontend-разработке.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
