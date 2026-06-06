import React from 'react';

export const AstrateqLogo: React.FC<{ className?: string }> = () => {
  return (
    <div className="flex items-center gap-3 select-none no-print">
      <div className="relative group/logo flex shrink-0">
        {/* Subtle, premium glowing pulse behind the logo to make it visually pop */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00D4FF] to-[#00D4FF]/20 rounded-xl blur-md opacity-45 group-hover/logo:opacity-75 transition-all duration-500 animate-pulse" />
        
        {/* Image element with secure rendering properties */}
        <img
          src="https://i.ibb.co/Z6hnHx3y/Gemini-Generated-Image-pta8i9pta8i9pta8.png"
          alt="Astrateq Premium Identity"
          className="relative h-10 w-10 md:h-11 md:w-11 object-cover rounded-xl border border-white/20 bg-[#071120] transition-transform duration-500 group-hover/logo:scale-105"
          referrerPolicy="no-referrer"
        />
        
        {/* Corner alignment crosshairs for extra sub-system feel */}
        <div className="absolute -top-1 -left-1 h-2.5 w-2.5 border-t border-l border-[#00D4FF]/60 rounded-tl pointer-events-none" />
        <div className="absolute -bottom-1 -right-1 h-2.5 w-2.5 border-b border-r border-[#00D4FF]/60 rounded-br pointer-events-none" />
      </div>

      <div className="flex flex-col justify-center leading-none">
        <span className="text-sm md:text-base font-display font-black text-white tracking-[0.24em] uppercase hover:text-[#00D4FF] transition-colors duration-300">
          ASTRATEQ
        </span>
        <span className="text-[9px] font-mono font-semibold text-[#00D4FF]/90 tracking-[0.38em] uppercase mt-1">
          INTELLIGENCE LOCAL
        </span>
      </div>
    </div>
  );
};

export default AstrateqLogo;
