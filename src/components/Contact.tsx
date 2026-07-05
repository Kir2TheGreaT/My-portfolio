"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { contactInfo } from "../data/portfolio";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь можно добавить отправку формы
    console.log("Form submitted:", formData);
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative stone-texture">
      <div className="max-w-6xl mx-auto">
        {/* Заголовок секции */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medieval uppercase tracking-[0.3em] text-stone-light mb-2">
            ⚔ Send a Raven ⚔
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medieval font-black text-sand-light serious-text">
            Контакты
          </h2>
          <div className="section-divider w-32 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:max-w-6xl mx-auto">
          {/* Контактная информация */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <div className="project-card p-8">
              <h3 className="text-2xl font-medieval text-sand-light mb-6 uppercase tracking-wider">
                📜 Связаться со мной
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-4 bg-stone-dark/50 hover:bg-blood/20 transition-colors duration-300"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-sm text-stone-light uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sand-light">{contactInfo.email}</p>
                  </div>
                </a>

                {/* Telegram */}
                {contactInfo.telegram && (
                  <a
                    href={`https://t.me/${contactInfo.telegram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-stone-dark/50 hover:bg-blood/20 transition-colors duration-300"
                  >
                    <span className="text-2xl">💬</span>
                    <div>
                      <p className="text-sm text-stone-light uppercase tracking-wider">
                        Telegram
                      </p>
                      <p className="text-sand-light">{contactInfo.telegram}</p>
                    </div>
                  </a>
                )}

                {/* GitHub */}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-stone-dark/50 hover:bg-blood/20 transition-colors duration-300"
                >
                  <span className="text-2xl">⚔</span>
                  <div>
                    <p className="text-sm text-stone-light uppercase tracking-wider">
                      GitHub
                    </p>
                    <p className="text-sand-light">{contactInfo.github}</p>
                  </div>
                </a>

                {/* LinkedIn */}
                {contactInfo.linkedin && (
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-stone-dark/50 hover:bg-blood/20 transition-colors duration-300"
                  >
                    <span className="text-2xl">💼</span>
                    <div>
                      <p className="text-sm text-stone-light uppercase tracking-wider">
                        LinkedIn
                      </p>
                      <p className="text-sand-light">{contactInfo.linkedin}</p>
                    </div>
                  </a>
                )}

                {/* Phone */}
                {contactInfo.phone && (
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-4 p-4 bg-stone-dark/50 hover:bg-blood/20 transition-colors duration-300"
                  >
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-sm text-stone-light uppercase tracking-wider">
                        Phone
                      </p>
                      <p className="text-sand-light">{contactInfo.phone}</p>
                    </div>
                  </a>
                )}
              </div>

              {/* Декоративный текст */}
              <p className="mt-8 text-stone-light italic text-center">
                "A message sent is a battle half won."
              </p>
            </div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
          >
            <div className="project-card p-8">
              <h3 className="text-2xl font-medieval text-sand-light mb-6 uppercase tracking-wider">
                ✉️ Написать сообщение
              </h3>

              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-6 bg-blood/20 border-2 border-blood"
                >
                  <p className="text-4xl mb-4">🏆</p>
                  <h4 className="text-xl font-medieval text-sand-light uppercase tracking-wider mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-stone-light">
                    Your raven has been dispatched. I'll respond soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medieval uppercase tracking-wider text-sand-light mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-night border-2 border-stone text-sand-light font-body focus:border-blood focus:outline-none transition-colors duration-300"
                      placeholder="Enter your name..."
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medieval uppercase tracking-wider text-sand-light mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-night border-2 border-stone text-sand-light font-body focus:border-blood focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email..."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medieval uppercase tracking-wider text-sand-light mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-night border-2 border-stone text-sand-light font-body focus:border-blood focus:outline-none transition-colors duration-300 resize-vertical"
                      placeholder="Write your message here..."
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="serious-btn w-full text-lg px-8 py-4 pulse-blood"
                  >
                    🏹 Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
