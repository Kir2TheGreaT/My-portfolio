"use client";

import { motion } from "framer-motion";

const CONTACT_DATA = [
  {
    label: "TELEGRAM_UPLINK",
    value: "@Kir2TheGreaT",
    href: "https://t.me/Kir2TheGreaT",
    color: "#0088cc",
  },
  {
    label: "SECURE_MAIL",
    value: "kir2thegreat@mail.ru",
    href: "mailto:kir2thegreat@mail.ru",
    color: "#c41e3a",
  },
  {
    label: "GITHUB_PROFILE",
    value: "Kir2TheGreaT",
    href: "https://github.com/Kir2TheGreaT",
    color: "#d4a574",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-tomb-pattern relative border-t-4 border-[#c41e3a]"
    >
      <div className="max-w-4xl mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-[#e8d5b7] tracking-tighter uppercase drop-shadow-[0_2px_2px_#000]">
            Передача <span className="text-[#c41e3a]">Координат</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0504] border-2 border-[#c41e3a] p-1 shadow-[0_0_30px_rgba(196,30,58,0.2)]"
        >
          <div className="border border-[#c41e3a]/50 p-6 md:p-10">
            <div className="flex justify-between items-center border-b-2 border-[#c41e3a]/30 pb-4 mb-8">
              <h3 className="text-2xl font-black text-[#c41e3a] tracking-widest uppercase">
                ТЕРМИНАЛ СВЯЗИ v1.0
              </h3>
              <div className="w-3 h-3 bg-[#c41e3a] rounded-full animate-pulse shadow-[0_0_10px_#c41e3a]"></div>
            </div>

            <div className="space-y-6 font-mono">
              {CONTACT_DATA.map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#160c08] border border-[#c41e3a]/20 hover:border-[#c41e3a] hover:bg-[#c41e3a]/10 transition-all group"
                >
                  <span className="text-[#d4a574] text-sm md:text-base mb-2 md:mb-0">
                    &gt; {contact.label}:
                  </span>
                  <span
                    className="text-lg md:text-xl font-bold tracking-wider group-hover:scale-105 transition-transform origin-left md:origin-right"
                    style={{ color: contact.color }}
                  >
                    {contact.value}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10 text-center text-[#e8d5b7]/50 text-xs font-mono uppercase tracking-widest">
              Система ожидает входящего соединения...
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
