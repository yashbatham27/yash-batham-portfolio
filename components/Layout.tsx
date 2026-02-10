import React from 'react';
import { MatrixRain } from './ui/MatrixRain';
import { ScrollToTop } from './ui/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-white selection:text-black">
      {/* Startup Animation Overlay */}
      <div className="startup-overlay" />

      {/* Global Visual Effects */}
      <div className="scanlines" />
      <div className="crt-flicker" />
      
      {/* Dynamic Matrix Rain Background */}
      <MatrixRain />

      {/* Scroll to Top Navigation */}
      <ScrollToTop />

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Fixed UI Overlays */}
      <div className="fixed top-6 right-6 z-50 text-[10px] md:text-xs text-right hidden md:block mix-blend-difference pointer-events-none">
         <div className="flex flex-col gap-1 text-white/60">
           <span>LAT: 51.5074 N</span>
           <span>LNG: 0.1278 W</span>
           <span className="animate-pulse text-green-500 mt-2">● ONLINE</span>
         </div>
      </div>
    </div>
  );
};
