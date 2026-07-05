"use client";

import { motion } from "framer-motion";
import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative stone-texture">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medieval font-black text-sand-light serious-text mb-12">
          Добыча (Портфолио)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border-2 border-stone bg-[#2c2825] p-6 rounded"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 grayscale hover:grayscale-0 transition duration-300"
              />
              <h3 className="text-2xl font-medieval text-sand-light">
                {project.title}
              </h3>
              <p className="my-4 text-stone-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-1 bg-[#3e3a37] text-sand-light border border-stone rounded uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff5e62] hover:underline font-bold text-lg underline decoration-blood decoration-2"
                  >
                    ⚔ Исходники на GitHub
                  </a>
                )}

                {project.vercel && (
                  <a
                    href={project.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ff5e62] text-white font-medieval px-4 py-2 rounded hover:scale-105 transition transform inline-block"
                  >
                    🚀 Запустить в Vercel
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <a
          href={projects[0]?.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="serious-btn text-lg px-8 py-4 inline-block mt-16"
        >
          ⚔ Весь инвентарь на GitHub
        </a>
      </div>
    </section>
  );
}
