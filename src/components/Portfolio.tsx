"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects as projectsData } from "../data/portfolio";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<"all" | "featured">("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const filteredProjects =
    activeFilter === "featured"
      ? projectsData.filter((p) => p.featured)
      : projectsData;

  return (
    <section id="portfolio" className="py-20 px-4 relative stone-texture">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medieval uppercase tracking-[0.3em] text-stone-light mb-2">
            ⚔ Your Conquests ⚔
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medieval font-black text-sand-light serious-text">
            Портфолио
          </h2>
          <div className="section-divider w-32 mx-auto mt-4" />
        </motion.div>

        {/* Фильтры */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="flex justify-center gap-4 mb-12"
        >
          {(["all", "featured"] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 font-medieval uppercase tracking-wider transition-all duration-300 border border-stone/50 ${
                activeFilter === filter
                  ? "bg-blood text-white shadow-lg shadow-blood/30"
                  : "bg-stone-dark text-sand-light hover:bg-blood/50"
              }`}
            >
              {filter === "all" ? "Все работы" : "⭐ Избранные"}
            </button>
          ))}
        </motion.div>

        {/* Сетка проектов */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: false }}
              className="project-card group cursor-pointer flex flex-col justify-between border border-stone/30 bg-[#2c2825] rounded-sm overflow-hidden"
            >
              <div>
                {/* Изображение проекта */}
                <div className="relative overflow-hidden h-52 bg-stone-dark">
                  <img
                    src={project.image || "/placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />

                  {/* Оверлей при наведении */}
                  <div className="absolute inset-0 bg-night/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 p-4">
                    {project.vercel && (
                      <a
                        href={project.vercel}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="serious-btn text-xs px-4 py-2"
                      >
                        🚀 Vercel
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="serious-btn text-xs px-4 py-2"
                      >
                        ⚔ GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Информация о проекте */}
                <div className="p-6">
                  {project.featured && (
                    <span className="text-[10px] font-medieval uppercase tracking-wider text-blood bg-blood/10 border border-blood/30 px-2 py-0.5 rounded-sm">
                      ⭐ Featured
                    </span>
                  )}

                  <h3 className="text-xl font-medieval text-sand-light mt-3 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-stone-light text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Технологии (всегда прижаты к низу карточки) */}
              <div className="px-6 pb-6 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 bg-stone-dark text-sand-light border border-stone/50 uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Кнопка "Все проекты" */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="serious-btn text-lg px-8 py-4 inline-block"
          >
            ⚔ Весь инвентарь на GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
