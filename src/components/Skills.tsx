"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { skills as skillsData } from "../data/portfolio";

export default function Skills() {
  const ref = useRef(null);

  return (
    <section id="skills" className="py-20 px-4 relative stone-texture">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medieval uppercase tracking-[0.3em] text-stone-light mb-2">
            ⚔ Your Arsenal ⚔
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medieval font-black text-sand-light serious-text">
            Навыки и Технологии
          </h2>
          <div className="section-divider w-32 mx-auto mt-4" />
        </motion.div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 lg:max-w-5xl mx-auto"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: false }}
              className="project-card p-6 bg-[#2c2825] border border-stone/30 rounded-sm"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-medieval text-sand-light uppercase tracking-wider">
                  {skill.name}
                </h3>
                <span className="text-blood font-bold font-medieval">
                  {skill.level}%
                </span>
              </div>

              <div className="health-bar h-4 w-full bg-night border border-stone overflow-hidden p-0.5">
                <motion.div
                  className="health-bar-fill h-full bg-gradient-to-r from-blood to-red-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  viewport={{ once: false }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center mt-16"
        >
          <p className="text-stone-light italic text-sm md:text-base">
            "The only thing worse than being trained with a sword is to be
            trained with React."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
