
import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../constants';
import { CyberFrame } from '../ui/CyberFrame';
import { ExternalLink, Github, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from '../ui/Typewriter';
import { SectionFlicker } from '../ui/SectionFlicker';

export const Projects: React.FC = () => {
  const [recursionWarningId, setRecursionWarningId] = useState<string | null>(null);

  const handleLiveDemoClick = (e: React.MouseEvent, projectId: string) => {
    // If it's the portfolio project, intercept the click
    if (projectId === 'proj-portfolio') {
      e.preventDefault();
      setRecursionWarningId(projectId);
      setTimeout(() => setRecursionWarningId(null), 3000);
    }
  };

  return (
    <SectionFlicker id="projects" className="py-24 px-6 md:px-12 border-b border-white/10 relative scroll-mt-16">
      {/* Local Scanline Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))',
          backgroundSize: '100% 4px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          PROJECT_DEPLOYMENTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <CyberFrame className="h-full flex flex-col" label={`0${index + 1}`}>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-0.5 text-white/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-white/70 mb-8 flex-grow leading-relaxed text-sm">
                  <Typewriter text={project.description} speed={0.01} delay={0.3} />
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                  {project.link && (
                    <div className="relative">
                        <a 
                          href={project.link}
                          onClick={(e) => handleLiveDemoClick(e, project.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 text-sm font-bold hover:bg-white hover:text-black px-4 py-2 transition-all border border-transparent hover:border-white ${recursionWarningId === project.id ? 'bg-red-500/10 border-red-500 text-red-500 hover:bg-red-500 hover:text-white' : ''}`}
                        >
                          {recursionWarningId === project.id ? (
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }}
                                className="flex items-center gap-2"
                            >
                                <AlertTriangle size={16} />
                                <span>RECURSION_DETECTED</span>
                            </motion.div>
                          ) : (
                            <>
                                <ExternalLink size={16} />
                                <span>LIVE DEMO</span>
                            </>
                          )}
                        </a>
                        
                        {/* Optional Tooltip for more context */}
                        <AnimatePresence>
                            {recursionWarningId === project.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute bottom-full left-0 mb-2 w-max max-w-[250px] bg-black border border-red-500 p-2 text-[10px] text-red-400 font-mono"
                                >
                                    {`> SYSTEM_WARNING: YOU ARE ALREADY VIEWING THIS APP INSTANCE.`}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                  )}
                  {project.repo && (
                    <a 
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      CODEBASE
                    </a>
                  )}
                </div>
              </CyberFrame>
            </motion.div>
          ))}
        </div>
      </div>
      </SectionFlicker>
    );
};
