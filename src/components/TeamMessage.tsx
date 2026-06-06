import React from 'react';
import { FOUNDERS_MESSAGE } from '../data';
import { Quote, Feather } from 'lucide-react';
import { motion } from 'motion/react';

export const TeamMessage: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-12 md:p-12 rounded-3xl bg-gradient-to-b from-[#0B1F3A]/30 to-black/10 glowing-card-border overflow-hidden box-glow-cyan">
      {/* Absolute faint background SVG quote */}
      <div className="absolute top-10 left-10 text-[#00D4FF]/3 select-none pointer-events-none no-print">
        <Quote className="h-44 w-44 font-light rotate-180" />
      </div>

      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-3 border-b border-white/5 pb-5 no-print">
          <div className="h-10 w-10 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center border border-[#00D4FF]/20">
            <Feather className="h-5 w-5 text-[#00D4FF]" />
          </div>
          <div>
            <h4 className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest leading-none">
              ASTRATEQ EDITORIAL NOTE
            </h4>
            <p className="text-[10px] font-mono text-[#D6DCE5]/40 mt-1 leading-none uppercase">
              Verbatim • Authenticated Post-Reservation Brief
            </p>
          </div>
        </div>

        {/* Let's output the editorial letter */}
        <div className="prose prose-invert max-w-none">
          <p className="text-sm md:text-base text-[#D6DCE5]/90 italic font-medium leading-relaxed font-sans border-l-2 border-[#00D4FF]/30 pl-5 mb-8">
            "We believe the modern vehicle is a sanctuary of personal movement, not a node for centralized surveillance."
          </p>
          
          <div className="space-y-4 text-xs md:text-sm text-[#D6DCE5]/80 leading-relaxed font-sans">
            {FOUNDERS_MESSAGE.editorial.split('\n\n').filter(Boolean).map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* Signature lockup */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-[#D6DCE5]/40 block uppercase tracking-widest">
              DESIGNED AND MANUFACTURED IN
            </span>
            <span className="text-sm font-semibold text-white mt-1 block">
              Toronto & Vancouver, Canada // Edge Labs
            </span>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-xs font-mono text-[#00D4FF] block tracking-wide font-medium">
              {FOUNDERS_MESSAGE.signature}
            </span>
            <span className="text-xs font-mono text-[#D6DCE5]/40 mt-1 block uppercase">
              Release Phase: 2026.1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamMessage;
