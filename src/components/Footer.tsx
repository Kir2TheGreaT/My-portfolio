"use client";

import { motion } from "framer-motion";
import { contactInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-night-deep border-t-2 border-stone">
      <div className="max-w-6xl mx-auto text-center">
        {/* Декоративный разделитель */}
        <div className="section-divider w-32 mx-auto mb-8" />

        {/* Социальные ссылки */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="flex justify-center gap-6 mb-8"
        >
          {/* GitHub */}
          {contactInfo.github && (
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-stone-dark border-2 border-stone text-sand-light hover:bg-blood transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          )}

          {/* LinkedIn */}
          {contactInfo.linkedin && (
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-stone-dark border-2 border-stone text-sand-light hover:bg-blood transition-colors duration-300"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          {contactInfo.telegram && (
            <a
              href={`https://t.me/${contactInfo.telegram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-stone-dark border-2 border-stone text-sand-light hover:bg-blood transition-colors duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12S18.63 0 12 0zm4.9 4.9l-14 14h14V4.9z"
                  fill="currentColor"
                />
              </svg>
            </a>
          )}

          <a
            href={`mailto:${contactInfo.email}`}
            className="w-12 h-12 flex items-center justify-center bg-stone-dark border-2 border-stone text-sand-light hover:bg-blood transition-colors duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12s12-5.37 12-12S18.63 0 12 0zm4.9 4.9l-14 14h14V4.9z"
                fill="currentColor"
              />
            </svg>
          </a>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-stone pt-8">
          <p className="text-sm font-medieval text-sand-light uppercase tracking-wider mb-2">
            ⚔ Serious Sam Portfolio ⚔
          </p>
          <p className="text-xs text-stone-light">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-xs text-stone-light mt-2 italic">
            "The only thing worse than being trained with a sword is to be
            trained with React."
          </p>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 serious-btn w-12 h-12 rounded-full flex items-center justify-center"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 4L4 16h16L12 4z" fill="currentColor" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
