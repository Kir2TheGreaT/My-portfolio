"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  // Функция для воспроизведения выстрела из пушки
  const playCannonShot = () => {
    const audio = new Audio("/CannonFire.wav");
    audio.volume = 0.2;
    audio.play().catch((e) => console.log("Звук выстрела заблокирован:", e));
  };

  return (
    <section
      id="portfolio"
      className="py-24 relative border-t-4 border-[#c41e3a] overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        // Загружаем скриншот и сразу тонируем его в глубокие темные тона Сирианской ночи
        backgroundImage: `linear-gradient(to bottom, rgba(10, 5, 4, 0.92), rgba(22, 12, 8, 0.88)), url('/ChatGPT Image 5 июл. 2026 г., 18_29_02.png')`,
      }}
    >
      {/* Дополнительный радиальный багровый свет из центра, как вспышка от ракеты */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,30,58,0.15)_0%,transparent_70%)] pointer-events-none z-0"></div>

      {/* Фирменные сканлайны игрового интерфейса */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.04),rgba(0,255,0,0.01),rgba(0,0,255,0.04))] bg-[length:100%_4px,3px_100%] opacity-40 z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#e8d5b7] tracking-tighter uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
            Личный <span className="text-[#c41e3a]">Инвентарь</span>
          </h2>
          <p className="text-[#d4a574] font-mono mt-4 uppercase tracking-widest text-sm drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Доступ к исходным кодам и флагманским разработкам
          </p>
        </div>

        {/* Сетка на 2 колонки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* СЛОТ 1: GITHUB */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col bg-[#0a0504]/90 backdrop-blur-sm border-2 border-[#d4a574]/40 p-8 md:p-10 text-center shadow-[0_0_40px_rgba(0,0,0,0.7)] group hover:border-[#d4a574] transition-colors relative"
          >
            {/* Олдскульные уголки HUD */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#d4a574]/30 group-hover:border-[#d4a574]"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#d4a574]/30 group-hover:border-[#d4a574]"></div>

            <div className="w-20 h-20 mx-auto mb-6 bg-[#c41e3a]/20 border border-[#c41e3a] flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-0 transition-all duration-500 shrink-0">
              <svg
                className="w-10 h-10 text-[#c41e3a] -rotate-45 group-hover:rotate-0 transition-all duration-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-black text-[#e8d5b7] uppercase mb-2">
              GitHub Arsenal
            </h3>
            <p className="text-[#d4a574] mb-8 font-mono text-sm grow">
              Исходные коды боевых задач, пет-проектов и экспериментов. Доступ
              открыт для проверки архитектуры и чистоты кода.
            </p>

            <a
              href="https://github.com/Kir2TheGreaT"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCannonShot} /* Добавили звук пушки на клик */
              className="mt-auto inline-block px-8 py-4 bg-transparent border-2 border-[#d4a574] text-[#d4a574] font-black uppercase tracking-widest hover:bg-[#d4a574] hover:text-[#0a0504] transition-all skew-x-[-10deg]"
            >
              <span className="skew-x-[10deg] block">Изучить репозиторий</span>
            </a>
          </motion.div>

          {/* СЛОТ 2: MORENT (Флагманский проект) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col bg-[#0a0504]/90 backdrop-blur-sm border-2 border-[#c41e3a]/50 p-8 md:p-10 text-center shadow-[0_0_40px_rgba(196,30,58,0.2)] group hover:border-[#c41e3a] transition-colors relative overflow-hidden"
          >
            {/* Лейбл "Флагман" в углу */}
            <div className="absolute top-4 right-[-35px] bg-[#c41e3a] text-[#e8d5b7] text-[10px] font-black tracking-widest uppercase py-1 px-10 rotate-45 shadow-md z-30">
              Флагман
            </div>

            {/* Олдскульные уголки HUD */}
            <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#c41e3a]/40 group-hover:border-[#c41e3a]"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#c41e3a]/40 group-hover:border-[#c41e3a]"></div>

            <div className="w-20 h-20 mx-auto mb-6 bg-[#d4a574]/10 border border-[#d4a574] flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-0 transition-all duration-500 shrink-0">
              <svg
                className="w-10 h-10 text-[#d4a574] -rotate-45 group-hover:rotate-0 transition-all duration-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-black text-[#c41e3a] uppercase mb-2">
              Проект: MORENT
            </h3>
            <p className="text-[#e8d5b7] mb-8 font-mono text-sm grow">
              Агрегатор аренды автомобилей. Мощная архитектура на{" "}
              <span className="text-[#c41e3a] font-bold">Nuxt 3</span>.
              Полностью готовый продукт со сложной системой фильтрации, SSR и
              адаптивным UI.
            </p>

            <a
              href="https://diplomas-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playCannonShot} /* Добавили звук пушки на клик */
              className="mt-auto inline-block px-8 py-4 bg-[#c41e3a]/10 border-2 border-[#c41e3a] text-[#c41e3a] font-black uppercase tracking-widest hover:bg-[#c41e3a] hover:text-[#0a0504] transition-all skew-x-[-10deg] shadow-[0_0_15px_rgba(196,30,58,0.4)]"
            >
              <span className="skew-x-[10deg] block">Запустить симуляцию</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
