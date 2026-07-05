'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Главная', href: '#home' },
  { name: 'Экипировка', href: '#skills' },
  { name: 'Инвентарь', href: '#portfolio' },
  { name: 'Боевой путь', href: '#experience' },
  { name: 'Координаты', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#160c08]/95 backdrop-blur border-b border-[#c41e3a]/30 shadow-[0_4px_20px_rgba(196,30,58,0.1)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Логотип с бомбой */}
          <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
            <svg className="w-10 h-10 transform transition-transform group-hover:rotate-12 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="60" r="30" fill="#111" stroke="#d4a574" strokeWidth="4"/>
              <path d="M50 30 V 20 C 50 10, 70 10, 70 20" stroke="#d4a574" strokeWidth="3" fill="none" />
              <rect x="42" y="27" width="16" height="8" fill="#555" stroke="#d4a574" strokeWidth="2"/>
              <path className="animate-spark" d="M68 20 L72 15 L76 20 L72 25 Z" />
            </svg>
            <span className="font-black text-2xl tracking-widest text-[#d4a574] group-hover:text-[#c41e3a] transition-colors">KIRILL<span className="text-[#c41e3a]">.DEV</span></span>
          </div>

          {/* Десктопное меню */}
          <div className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="text-[#e8d5b7] hover:text-[#c41e3a] font-bold tracking-wider uppercase text-sm transition-all hover:drop-shadow-[0_0_8px_rgba(196,30,58,0.8)]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Мобильный бургер */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#d4a574] hover:text-[#c41e3a] focus:outline-none p-2">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Мобильная панель */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute w-full bg-[#160c08] border-b neon-border-red"
          >
            <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 flex flex-col items-center">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="block px-3 py-4 text-[#e8d5b7] hover:text-[#c41e3a] font-black uppercase tracking-widest w-full text-center border-b border-[#c41e3a]/20"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}