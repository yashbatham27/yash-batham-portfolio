import React from 'react';
import { CyberFrame } from '../ui/CyberFrame';
import { Typewriter } from '../ui/Typewriter';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            ABOUT_<br />PROTOCOL
          </h2>
          <div className="w-12 h-1 bg-white mb-8" />
        </div>
        
        <div className="md:col-span-8 space-y-8">
          <CyberFrame label="Biography.log">
            <div className="space-y-6 text-white/80">
              <Typewriter 
                segments={[
                  { text: "I am a dedicated Software Developer with over 2.5 years of experience in architecting scalable, enterprise-grade web applications. Currently at " },
                  { text: "Accenture", className: "text-white font-bold" },
                  { text: ", I specialize in the full development lifecycle—delivering secure, high-performance solutions for complex business needs." }
                ]}
                className="leading-relaxed"
                speed={0.01}
              />
              <Typewriter 
                text="My expertise spans the modern JavaScript ecosystem, focusing on robust frontend architectures and seamless backend integrations. I thrive on solving intricate technical challenges and optimizing systems for performance, accessibility, and user experience."
                className="leading-relaxed"
                speed={0.01}
                delay={0.5}
              />
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 pt-4 text-xs font-mono uppercase tracking-wider text-white/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white" />
                  <span>Problem Solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white" />
                  <span>System Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white" />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white" />
                  <span>Performance</span>
                </div>
              </motion.div>
            </div>
          </CyberFrame>

          <CyberFrame label="Education_Data.struct">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">B.Tech in Electronics & Communication</h3>
                <Typewriter 
                   text="Focus on analytical problem solving and logic design."
                   className="text-white/60 text-sm"
                   speed={0.02}
                />
              </div>
              <div className="bg-white/5 border border-white/10 px-4 py-2 min-w-[100px] text-center">
                 <span className="text-[10px] text-white/50 block uppercase tracking-wider mb-1">CGPA SCORE</span>
                 <span className="text-xl font-mono font-bold text-white">8.28</span>
              </div>
            </div>
          </CyberFrame>
        </div>
      </div>
    </section>
  );
};