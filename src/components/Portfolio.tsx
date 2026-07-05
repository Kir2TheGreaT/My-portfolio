"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-[#0a0504] relative border-t-4 border-[#c41e3a] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] opacity-30 z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#e8d5b7] tracking-tighter uppercase drop-shadow-[0_2px_2px_#000]">
            Личный <span className="text-[#c41e3a]">Инвентарь</span>
          </h2>
          <p className="text-[#d4a574] font-mono mt-4 uppercase tracking-widest text-sm">
            Доступ к исходным кодам и секретным разработкам
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#160c08]/90 border-2 border-[#d4a574]/40 p-8 md:p-12 text-center shadow-[0_0_30px_rgba(212,165,116,0.1)] group hover:border-[#d4a574] transition-colors"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-[#c41e3a]/20 border border-[#c41e3a] flex items-center justify-center rounded-sm rotate-45 group-hover:rotate-0 transition-all duration-500">
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

          <h3 className="text-2xl font-black text-[#e8d5b7] uppercase mb-4">
            GitHub Repository
          </h3>
          <p className="text-[#d4a574] mb-8 font-mono text-sm max-w-2xl mx-auto">
            Здесь хранятся исходные коды боевых задач, пет-проектов и
            экспериментов с новыми технологиями. Доступ открыт для проверки
            архитектуры и чистоты кода.
          </p>

          <a
            href="https://github.com/Kir2TheGreaT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-transparent border-2 border-[#d4a574] text-[#d4a574] font-black uppercase tracking-widest hover:bg-[#d4a574] hover:text-[#0a0504] transition-all skew-x-[-10deg]"
          >
            <span className="skew-x-[10deg] block">Изучить арсенал</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
