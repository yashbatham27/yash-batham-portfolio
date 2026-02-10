
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Small timeout ensures the menu state has time to update/close
      // which prevents layout thrashing or event blocking on mobile
      setTimeout(() => {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[80] backdrop-blur-md bg-black/80 border-b border-white/10 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center relative">
        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-8 mx-auto">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs font-mono tracking-widest text-white/60 hover:text-white transition-colors group relative cursor-pointer"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3">[</span>
              {item.label}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3">]</span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle - Right Aligned with Icon-Internal Shine Animation */}
        <button 
          className="md:hidden ml-auto p-2 rounded group relative overflow-hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
           <div className="relative w-6 h-6">
             {/* 1. Base Layer: Dimmed Icon (Visible when shine passes) */}
             <div className="absolute inset-0 text-white/30 z-0">
               {isOpen ? <X size={24} /> : <Menu size={24} />}
             </div>
             
             {/* 2. Shine Layer: Bright Icon with Moving Mask */}
             {/* Using standard style prop for maskImage to ensure compatibility */}
             <motion.div
               className="absolute inset-0 text-white z-10"
               animate={{ 
                 WebkitMaskPosition: ["200% 0", "-200% 0"],
                 maskPosition: ["200% 0", "-200% 0"]
               } as any}
               transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.5
               }}
               style={{
                  maskImage: 'linear-gradient(115deg, transparent 40%, black 50%, transparent 60%)',
                  WebkitMaskImage: 'linear-gradient(115deg, transparent 40%, black 50%, transparent 60%)',
                  maskSize: '200% 100%',
                  WebkitMaskSize: '200% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat'
               }}
             >
               {isOpen ? <X size={24} /> : <Menu size={24} />}
             </motion.div>
           </div>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-mono tracking-widest text-white/60 hover:text-white hover:pl-2 transition-all cursor-pointer py-2 border-l border-transparent hover:border-white/40"
                >
                  {`> ${item.label}`}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
