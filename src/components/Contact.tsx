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
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed border-t-4 border-[#c41e3a]"
      style={{
        // Мягкое затемнение эпичного египетского заката для идеальной читаемости интерфейса
        backgroundImage: `linear-gradient(to bottom, rgba(10, 5, 4, 0.95), rgba(22, 12, 8, 0.9), rgba(10, 5, 4, 0.95)), url('/Gemini_Generated_Image_wdsikbwdsikbwdsi.png')`,
      }}
    >
      {/* Пульсирующий багровый радар на фоне */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,30,58,0.12)_0%,transparent_75%)] pointer-events-none z-0 animate-pulse"></div>

      {/* Горизонтальные сканлайны монитора NETRICSA */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_6px] opacity-40 z-10"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#e8d5b7] tracking-tighter uppercase drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
            Передача <span className="text-[#c41e3a]">Координат</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#c41e3a] mx-auto mt-4"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0a0504]/95 backdrop-blur-md border-2 border-[#c41e3a] p-1 shadow-[0_0_50px_rgba(0,0,0,0.9)] relative group"
        >
          {/* Внешние угловые маркеры захвата цели (Target Lock) */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#c41e3a] group-hover:scale-110 transition-transform"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#c41e3a] group-hover:scale-110 transition-transform"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#c41e3a] group-hover:scale-110 transition-transform"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#c41e3a] group-hover:scale-110 transition-transform"></div>

          <div className="border border-[#c41e3a]/40 p-6 md:p-10 relative">
            {/* Шапка терминала */}
            <div className="flex justify-between items-center border-b-2 border-[#c41e3a]/30 pb-4 mb-8">
              <h3 className="text-base md:text-2xl font-black text-[#c41e3a] tracking-widest uppercase font-mono flex items-center gap-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                <span className="inline-block w-2 h-5 bg-[#c41e3a] animate-pulse"></span>
                ТЕРМИНАЛ NETRICSA v1.0
              </h3>
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c41e3a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c41e3a] shadow-[0_0_10px_#c41e3a]"></span>
              </div>
            </div>

            {/* Список каналов связи */}
            <div className="space-y-6 font-mono">
              {CONTACT_DATA.map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-[#160c08]/80 border border-[#c41e3a]/20 hover:border-[#c41e3a] hover:bg-[#c41e3a]/10 hover:shadow-[0_0_20px_rgba(196,30,58,0.15)] transition-all group/item relative overflow-hidden"
                >
                  {/* Боковой лазерный маркер при наведении */}
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-[#c41e3a] transform -translate-x-full group-hover/item:translate-x-0 transition-transform duration-200"></div>

                  <span className="text-[#d4a574] text-sm md:text-base mb-2 md:mb-0 flex items-center gap-1 transition-colors group-hover/item:text-[#e8d5b7]">
                    <span className="text-[#c41e3a] font-bold opacity-70 group-hover/item:opacity-100">
                      &gt;
                    </span>
                    {contact.label}:
                  </span>

                  <span
                    className="text-base md:text-xl font-bold tracking-wider group-hover/item:translate-x-[-4px] transition-transform origin-right filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    style={{ color: contact.color }}
                  >
                    {contact.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Статус-бар */}
            <div className="mt-10 text-center text-[#e8d5b7]/40 text-xs font-mono uppercase tracking-widest">
              Система ожидает входящего соединения... Квадрат чист.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
