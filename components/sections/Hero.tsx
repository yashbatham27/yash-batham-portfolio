import React from 'react';
import { motion } from 'framer-motion';
import { GlitchText } from '../ui/GlitchText';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 pt-20 border-b border-white/10">
      <div className="max-w-4xl w-full mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 flex items-center gap-4"
        >
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60">
            System.Identity.User
          </span>
          <div className="h-[1px] bg-white/40 flex-grow max-w-[100px]" />
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
          <span className="block text-white">YASH</span>
          <GlitchText text="BATHAM" className="text-white" />
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative pl-6 border-l-2 border-white/30"
        >
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            SOFTWARE DEVELOPER <span className="text-white/40 mx-2">|</span> 2.5+ YOE
          </h2>
          <p className="text-white/70 max-w-xl text-sm md:text-base leading-relaxed">
            Architecting scalable, enterprise-grade web applications. 
            Bridging the gap between raw code and human experience.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 opacity-50">
         <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
         >
           <ArrowDown size={20} />
         </motion.div>
         <span className="text-xs uppercase tracking-widest">Scroll to Initialize</span>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};