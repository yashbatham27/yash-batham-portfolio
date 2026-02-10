import React from 'react';
import { motion } from 'framer-motion';

interface SectionFlickerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}


export const SectionFlicker: React.FC<SectionFlickerProps> = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`relative ${className}`}>
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: [0, 1, 0.5, 1, 0.8, 1],
        }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.5,
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};