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
    role: "Middle+ Frontend Developer",
    mission:
      "Поиск новой горячей точки (Remote/Hybrid). Готовность развертывать масштабные SPA и SSR приложения без потери производительности.",
    ammo: "Vue 3, React, Next.js, Nuxt 3, TS",
  },
  {
    id: 2,
    year: "Проект",
    role: "Table CRM",
    mission:
      "Панель управления заказами для ритейла. Разработал прокси-сервер на Next.js API Routes для безопасного взаимодействия с внешним API и обхода ограничений CORS. Настроил CI/CD деплой на Vercel. Результат: масштабируемое приложение.",
    ammo: "Next.js (App Router), TS, Tailwind, Serverless",
  },
  {
    id: 3,
    year: "Проект",
    role: "MORENT",
    mission:
      "Агрегатор аренды автомобилей. Спроектировал архитектуру с нуля, добившись высокой скорости загрузки благодаря SSR. Реализовал сложную систему фильтрации и поиска, оптимизировал UX для мобильных устройств.",
    ammo: "Nuxt 3, Vue 3, Pinia, SCSS, Yandex Maps",
  },
  {
    id: 4,
    year: "Проект",
    role: "Tronk",
    mission:
      "Task Manager. Спроектировал и внедрил авторизацию (JWT) и личный кабинет пользователя. Разработал интерактивный CRUD-интерфейс для задач с мгновенным обновлением UI.",
    ammo: "Vue 3, Nuxt, REST API, JWT",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-tomb-pattern relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#e8d5b7] tracking-tighter uppercase drop-shadow-[0_2px_2px_#000]">
            Боевой <span className="text-[#c41e3a]">Путь</span>
          </h2>
        </div>

        <div className="relative" ref={ref}>
          {/* Вертикальная ось. На мобилке слева (ml-4), на десктопе по центру */}
          <div className="absolute left-4 md:left-1/2 w-1 bg-[#c41e3a]/30 h-full transform md:-translate-x-1/2 rounded"></div>

          <div className="space-y-12 md:space-y-0">
            {EXP_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex items-center justify-between w-full md:mb-12 ${
                    isEven ? "md:flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Пустой блок на десктопе для выравнивания */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Точка на таймлайне (Бомбочка) */}
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-[#c41e3a] border-4 border-[#160c08] rounded-full transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_#c41e3a] z-10">
                    <div className="w-1 h-1 bg-[#e8d5b7] rounded-full animate-pulse"></div>
                  </div>

                  {/* Карточка */}
                  <div className="w-full pl-12 md:pl-0 md:w-5/12 flex flex-col group">
                    <div
                      className={`p-6 bg-[#160c08]/90 border border-[#c41e3a]/30 backdrop-blur-sm transition-all duration-300 hover:border-[#c41e3a] hover:shadow-[0_0_20px_rgba(196,30,58,0.2)] ${
                        isEven ? "md:text-right" : "md:text-left"
                      } text-left`}
                    >
                      <span className="inline-block px-3 py-1 bg-[#c41e3a]/10 text-[#c41e3a] text-xs font-bold uppercase tracking-widest border border-[#c41e3a]/50 mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-black text-[#d4a574] mb-2 uppercase">
                        {item.role}
                      </h3>
                      <p className="text-[#e8d5b7]/80 text-sm md:text-base leading-relaxed mb-4">
                        {item.mission}
                      </p>
                      <div
                        className={`text-xs font-mono text-[#c41e3a] mt-auto flex ${isEven ? "md:justify-end justify-start" : "justify-start"}`}
                      >
                        &gt; LOADED: {item.ammo}
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
