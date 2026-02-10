import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', as: Tag = 'span' }) => {
  return (
    <Tag className={`glitch-text inline-block relative font-bold ${className}`} data-text={text}>
      {text}
    </Tag>
  );
};