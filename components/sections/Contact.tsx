import React from 'react';
import { SOCIAL_LINKS } from '../../constants';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer className="py-24 px-6 md:px-12 bg-black relative">
       <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-4xl md:text-6xl font-bold mb-8">
           INITIATE_CONTACT
         </h2>
         <p className="text-white/50 mb-12 max-w-xl mx-auto">
           Available for freelance collaborations and full-time opportunities. 
           Let's build the future together.
         </p>

         <div className="flex flex-col md:flex-row justify-center gap-6">
           <a 
             href={SOCIAL_LINKS.email}
             className="group flex items-center justify-center gap-3 border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
           >
             <Mail size={20} />
             <span className="uppercase tracking-wider font-bold">Send Transmission</span>
           </a>
           
           <a 
             href={SOCIAL_LINKS.linkedin}
             target="_blank"
             rel="noreferrer"
             className="group flex items-center justify-center gap-3 border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
           >
             <Linkedin size={20} />
             <span className="uppercase tracking-wider font-bold">Connect Network</span>
             <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
           </a>
         </div>

         <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-mono">
           <p>© {new Date().getFullYear()} YASH BATHAM. ALL RIGHTS RESERVED.</p>
           <p>SYSTEM.STATUS: OPERATIONAL</p>
         </div>
       </div>
    </footer>
  );
};