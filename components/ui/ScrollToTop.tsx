import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, y: 20, clipPath: 'inset(100% 0 0 0)' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            onClick={scrollToTop}
            className="group relative flex items-center justify-center w-12 h-12 bg-black border border-white/20 hover:border-white transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            aria-label="Scroll to top"
          >
            {/* Scanner line effect on hover */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
            
            <ArrowUp size={20} className="text-white/60 group-hover:text-white transition-colors group-hover:-translate-y-0.5 transition-transform" />
            
            <div className="absolute -top-8 right-0 pointer-events-none">
              <span className="text-[10px] text-white/40 font-mono tracking-tighter uppercase opacity-0 group-hover:opacity-100 transition-all group-hover:-translate-y-1 block text-right">
                SYS.UP
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
