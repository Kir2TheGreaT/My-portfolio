"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Текстура монументальных каменных блоков Сирианских гробниц с вкраплениями тех-матрицы
  const sirianStonePattern = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="60" viewBox="0 0 120 60"><path d="M0 0h120v60H0z" fill="none"/><path d="M0 0h120M0 30h120M0 60h120M30 0v30M90 0v30M0 30v30M60 30v30M120 30v30" stroke="%23c41e3a" stroke-width="1" stroke-opacity="0.12"/><path d="M15 15h2v2h-2zm60 0h2v2h-2zm-30 30h2v2h-2zm45 0h2v2h-2z" fill="%23d4a574" fill-opacity="0.15"/></svg>`;

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-[#0d0604] border-t-4 border-b-4 border-[#c41e3a]"
      style={{ backgroundImage: `url('${sirianStonePattern}')` }}
    >
      {/* Атмосферное багровое свечение (заряд артефакта / ярость Сэма) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,30,58,0.22)_0%,transparent_65%)] pointer-events-none z-0 animate-pulse [animation-duration:4s]"></div>

      {/* Огромный фоновый силуэт древнего солярного знака Сириуса на заднем плане */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none z-0">
        <svg
          className="w-[600px] h-[600px] text-[#d4a574]"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M50 5 L50 20 M50 80 L50 95 M5 L50 20 L50 50 M95 50 L80 50 M18 18 L29 29 M82 82 L71 71 M18 82 L29 71 M82 18 L71 29"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Оригинальный слой сканлайнов NETRICSA */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.05),rgba(0,255,0,0.01),rgba(0,0,255,0.05))] bg-[length:100%_4px,3px_100%] opacity-40 z-10"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-[#050202]/95 border-2 border-[#c41e3a] p-1 shadow-[0_0_40px_rgba(196,30,58,0.25)] relative"
        >
          {/* Декоративные угловые фиксаторы в стиле древних храмовых блоков */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#d4a574] -mt-[2px] -ml-[2px]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#d4a574] -mt-[2px] -mr-[2px]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#d4a574] -mb-[2px] -ml-[2px]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#d4a574] -mb-[2px] -mr-[2px]"></div>

          <div className="border border-[#c41e3a]/40 p-6 md:p-10 relative">
            {/* Header терминала */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-[#c41e3a]/30 pb-4 mb-8">
              <div>
                <h2 className="text-3xl font-black text-[#c41e3a] tracking-widest uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  NETRICSA v1.03
                </h2>
                <p className="text-[#d4a574] text-xs md:text-sm font-mono mt-1">
                  NEuro-TRonically Implanted Combat Situation Analyzer
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right font-mono text-sm space-y-1">
                <div className="text-[#e8d5b7] bg-[#c41e3a]/20 px-3 py-1 border border-[#c41e3a] tracking-wider text-xs font-bold">
                  STATUS: READY FOR DEPLOYMENT
                </div>
                <div className="text-[#d4a574] animate-pulse text-xs tracking-widest">
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
                  3D Printing
                </h3>
                <p className="text-[#e8d5b7] pl-4 text-sm leading-relaxed">
                  3D Printing Enthusiast. Печать объектов физического мира с
                  идеальной калибровкой на 3D принтере.
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
