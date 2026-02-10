import React from 'react';

interface CyberFrameProps {
  children: React.ReactNode;
  className?: string;
  label?: string;
}

export const CyberFrame: React.FC<CyberFrameProps> = ({ children, className = '', label }) => {
  return (
    <div className={`relative border border-white/20 p-6 ${className} group hover:border-white/60 transition-colors duration-500`}>
      {/* Corner Markers */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white -translate-x-0.5 -translate-y-0.5" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-white translate-x-0.5 -translate-y-0.5" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-white -translate-x-0.5 translate-y-0.5" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white translate-x-0.5 translate-y-0.5" />
      
      {/* Label */}
      {label && (
        <div className="absolute -top-3 left-6 bg-black px-2 text-xs text-white/70 uppercase tracking-widest border border-white/20">
          {label}
        </div>
      )}

      {children}
    </div>
  );
};