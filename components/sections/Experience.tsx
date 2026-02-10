import React from 'react';
import { EXPERIENCE_DATA } from '../../constants';
import { Briefcase } from 'lucide-react';
import { Typewriter } from '../ui/Typewriter';
import { SectionFlicker } from '../ui/SectionFlicker';

export const Experience: React.FC = () => {
  return (
    <SectionFlicker id="experience" className="py-24 px-6 md:px-12 border-b border-white/10 scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-right">
          EXPERIENCE_LOG
        </h2>

        <div className="relative border-l border-white/20 ml-4 md:ml-0 space-y-16">
          {EXPERIENCE_DATA.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-16 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border border-white group-hover:bg-white transition-colors duration-300 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-shadow-glow transition-all">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                     <Briefcase size={14} className="text-white/60" />
                     <span className="text-sm font-mono text-white/80">{exp.role}</span>
                  </div>
                </div>
                <span className="text-xs font-mono py-1 px-3 mt-2 md:mt-0 border border-white/20 text-white/60 bg-white/5 w-fit">
                  {exp.period}
                </span>
              </div>
              
              <div className="mb-6 italic border-l-2 border-white/10 pl-4 text-sm md:text-base">
                <Typewriter 
                  text={exp.description} 
                  className="text-white/60"
                  speed={0.01}
                />
              </div>

              <ul className="space-y-4">
                {exp.achievements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-base text-white/70 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 bg-white shrink-0 shadow-[0_0_5px_white]" />
                    <Typewriter text={item} speed={0.005} delay={i * 0.2} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionFlicker>
  );
};