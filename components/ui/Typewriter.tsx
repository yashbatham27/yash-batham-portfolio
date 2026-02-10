import React from 'react';
import { motion } from 'framer-motion';

interface Segment {
  text: string;
  className?: string;
}

interface TypewriterProps {
  text?: string;
  segments?: Segment[];
  as?: React.ElementType;
  className?: string;
  speed?: number;
  delay?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  segments, 
  as: Component = 'p', 
  className = "", 
  speed = 0.005, // Very fast default speed for smooth reading
  delay = 0 
}) => {
  const content = segments || (text ? [{ text }] : []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: speed, 
        delayChildren: delay 
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Component className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={container}
        style={{ display: 'inline-block' }} // Ensures transform origin works if needed, though mostly for opacity here
      >
        {content.map((segment, segIndex) => (
          <React.Fragment key={segIndex}>
            {Array.from(segment.text).map((char, charIndex) => (
              <motion.span 
                key={`${segIndex}-${charIndex}`} 
                variants={child} 
                className={segment.className}
              >
                {char}
              </motion.span>
            ))}
          </React.Fragment>
        ))}
      </motion.span>
    </Component>
  );
};