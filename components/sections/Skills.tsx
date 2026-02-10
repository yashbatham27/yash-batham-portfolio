
import React, { useState } from 'react';
import { SKILLS_DATA } from '../../constants';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionFlicker } from '../ui/SectionFlicker';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <SectionFlicker id="skills" className="py-24 px-6 md:px-12 border-b border-white/10 bg-cyber-black relative scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">SKILLS_TERMINAL</h2>
          <span className="text-xs md:text-sm text-white/50 mb-2">v2.5.0</span>
        </div>

        <div className="w-full bg-black border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-white/20 bg-white/5">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-white/70" />
              <span className="text-xs uppercase tracking-wider text-white/70">root@yash-batham:~</span>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 border border-white/40" />
              <div className="w-3 h-3 border border-white/40" />
              <div className="w-3 h-3 bg-white/40" />
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-10 min-h-[400px] font-mono text-sm md:text-base">
            <div className="flex flex-col md:flex-row gap-8 h-full">
              
              {/* Sidebar / Tabs */}
              <div className="w-full md:w-1/3 flex flex-col gap-2 border-r border-white/10 pr-4">
                <p className="text-white/50 mb-4 text-xs">SELECT MODULE:</p>
                {SKILLS_DATA.map((skillGroup, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(idx)}
                    className={`text-left px-4 py-3 border border-transparent transition-all duration-300 uppercase tracking-wider text-xs md:text-sm
                      ${activeCategory === idx 
                        ? 'bg-white text-black font-bold border-white' 
                        : 'text-white/60 hover:text-white hover:border-white/30'
                      }`}
                  >
                    {`> ${skillGroup.category}`}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="flex-1 pt-2 md:pt-0 pl-2">
                 <p className="text-white/40 mb-6">
                   <span className="text-green-500">➜</span> exec list_capabilities --module="{SKILLS_DATA[activeCategory].category}"
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {SKILLS_DATA[activeCategory].items.map((skill, index) => (
                     <motion.div 
                       key={`${activeCategory}-${skill}`}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.3, delay: index * 0.1 }}
                       className="group flex items-center gap-3 p-3 border border-white/10 hover:border-white transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                     >
                        <div className="w-1.5 h-1.5 bg-white/50 group-hover:bg-white group-hover:shadow-[0_0_8px_white] transition-all" />
                        <span className="group-hover:translate-x-1 transition-transform">{skill}</span>
                     </motion.div>
                   ))}
                 </div>

                 <div className="mt-8 pt-8 border-t border-white/10 text-white/30 text-xs animate-pulse">
                   _cursor_waiting...
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionFlicker>
  );
};
