"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ExperienceData {
  id: number;
  year: string;
  role: string;
  mission: string;
  ammo: string;
}

const EXP_DATA: ExperienceData[] = [
  {
    id: 1,
    year: "Текущее время",
    role: "Middle Frontend Developer",
    mission:
      "Поиск новой локации (Remote/Hybrid). Готовность проектировать и развертывать высоконагруженные SPA и SSR приложения без потери производительности и с идеальным DX.",
    ammo: "Vue 3, Nuxt 3, React, Next.js, TS",
  },
  {
    id: 2,
    year: "Март 2023 — Март 2026",
    role: "SQNS — Frontend Developer",
    mission:
      "Разработка B2B/B2C систем и веб-сервисов под ключ. Спроектировал клиентскую архитектуру на Vue 3 / Nuxt 3 и Next.js. Провел глубокий рефакторинг legacy-модулей (ускорение рендеринга на 25-35%), создал переиспользуемый UI Kit на Tailwind/SCSS и настроил CI/CD процессы.",
    ammo: "Vue 3, Nuxt 3, React, Next.js, TS, Vite",
  },
  {
    id: 3,
    year: "Проект • SQNS",
    role: "Table CRM",
    mission:
      "Панель управления заказами для ритейла. Разработал безопасный прокси-слой на Next.js API Routes / Serverless Functions для обхода ограничений CORS и изоляции секретных ключей. Настроил CI/CD деплой на Vercel.",
    ammo: "Next.js (App Router), TS, Tailwind, Serverless",
  },
  {
    id: 4,
    year: "Проект • SQNS",
    role: "MORENT",
    mission:
      "Агрегатор аренды автомобилей. Спроектировал SSR-архитектуру с нуля (Nuxt 3), добившись FCP < 1 сек. Интегрировал Yandex Maps API с оптимизацией рендеринга маркеров и построит сложную систему фильтрации.",
    ammo: "Nuxt 3, Vue 3, Pinia, SCSS, Yandex Maps",
  },
  {
    id: 5,
    year: "Проект • SQNS",
    role: "Tronk",
    mission:
      "Task Management Platform. Спроектировал и внедрил систему аутентификации (JWT token refresh pattern, защищенные роуты). Разработал интерактивный CRUD-интерфейс задач с оптимистичными обновлениями.",
    ammo: "Vue 3, Nuxt, REST API, JWT, Pinia",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed border-t-4 border-[#d4a574]/10"
      style={{
        // Глубокое тонирование скриншота древнеегипетского храма под общую палитру
        backgroundImage: `linear-gradient(to bottom, rgba(10, 5, 4, 0.96), rgba(22, 12, 8, 0.88), rgba(10, 5, 4, 0.96)), url('/Gemini_Generated_Image_jub0itjub0itjub0.png')`,
      }}
    >
      {/* Боковой багровый свет, имитирующий свечение лавы или факелов в гробнице */}
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#c41e3a]/5 to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#d4a574]/5 to-transparent pointer-events-none z-0"></div>

      {/* Сканлайны интерфейса NETRICSA */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] opacity-30 z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-[#e8d5b7] tracking-tighter uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
            Боевой <span className="text-[#c41e3a]">Путь</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c41e3a] to-transparent mx-auto mt-4"></div>
        </div>

        <div className="relative" ref={ref}>
          {/* Вертикальная ось таймлайна с градиентным свечением */}
          <div className="absolute left-4 md:left-1/2 w-[2px] bg-gradient-to-b from-[#c41e3a]/10 via-[#c41e3a]/60 to-[#c41e3a]/10 h-full transform md:-translate-x-1/2 rounded shadow-[0_0_10px_rgba(196,30,58,0.5)]"></div>

          <div className="space-y-12 md:space-y-0">
            {EXP_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex items-center justify-between w-full md:mb-16 ${
                    isEven ? "md:flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Пустой блок на десктопе для выравнивания */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Точка на таймлайне (Фирменная классическая бомба Serious Sam) */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[#0a0504] border-2 border-[#c41e3a] rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(196,30,58,0.6)] z-30 group">
                    <svg
                      className="w-4 h-4 text-[#e8d5b7] animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {/* Упрощенный силуэт классической бомбы с фитилем */}
                      <path d="M19.07 4.93c-.39-.39-1.03-.39-1.42 0l-1.34 1.34C14.93 5.48 13.54 5 12 5c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7c0-1.54-.48-2.93-1.27-4.31l1.34-1.34c.39-.39.39-1.03 0-1.42zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                      <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </div>

                  {/* Карточка миссии */}
                  <div className="w-full pl-12 md:pl-0 md:w-5/12 flex flex-col group">
                    <div
                      className={`p-6 md:p-8 bg-[#0a0504]/90 border border-[#d4a574]/20 backdrop-blur-md transition-all duration-300 hover:border-[#c41e3a] hover:shadow-[0_0_30px_rgba(196,30,58,0.25)] relative ${
                        isEven ? "md:text-right" : "md:text-left"
                      } text-left`}
                    >
                      {/* Древнеегипетские угловые элементы интерфейса HUD */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4a574]/30 group-hover:border-[#c41e3a] transition-colors"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#d4a574]/30 group-hover:border-[#c41e3a] transition-colors"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#d4a574]/30 group-hover:border-[#c41e3a] transition-colors"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4a574]/30 group-hover:border-[#c41e3a] transition-colors"></div>

                      <span className="inline-block px-3 py-1 bg-[#c41e3a]/10 text-[#c41e3a] text-xs font-black uppercase tracking-widest border border-[#c41e3a]/40 mb-4 shadow-[0_0_10px_rgba(196,30,58,0.1)]">
                        {item.year}
                      </span>

                      <h3 className="text-2xl font-black text-[#e8d5b7] mb-3 uppercase tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {item.role}
                      </h3>

                      <p className="text-[#d4a574]/90 text-sm md:text-base font-sans leading-relaxed mb-5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                        {item.mission}
                      </p>

                      <div
                        className={`text-xs font-mono text-[#c41e3a] font-bold tracking-wider mt-auto flex items-center gap-1 ${
                          isEven
                            ? "md:justify-end justify-start"
                            : "justify-start"
                        }`}
                      >
                        <span className="opacity-60 text-[#e8d5b7]">
                          &gt; AMMO:
                        </span>
                        <span className="text-[#c41e3a] drop-shadow-[0_0_5px_rgba(196,30,58,0.5)]">
                          {item.ammo}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
