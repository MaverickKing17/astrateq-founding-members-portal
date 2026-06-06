import React from 'react';
import { TIMELINE_STEPS } from '../data';
import { CheckCircle2, Clock, Hourglass, Shield, Compass, Hammer } from 'lucide-react';
import { motion } from 'motion/react';

export const Timeline: React.FC = () => {
  // Map index to a premium design icon
  const getStepIcon = (index: number, status: string) => {
    const className = `h-6 w-6 ${
      status === 'completed'
        ? 'text-emerald-400'
        : status === 'current'
        ? 'text-[#00D4FF] animate-pulse'
        : 'text-[#D6DCE5]/40'
    }`;
    switch (index) {
      case 0:
        return <CheckCircle2 className={className} />;
      case 1:
        return <Compass className={className} />;
      case 2:
        return <Clock className={className} />;
      case 3:
        return <Hammer className={className} />;
      case 4:
        return <Shield className={className} />;
      default:
        return <Hourglass className={className} />;
    }
  };

  return (
    <div className="relative py-12 px-4 select-none">
      {/* Background connector bar (hidden on mobile, shown on desktop) */}
      <div className="hidden md:block absolute top-[2.85rem] left-8 right-8 h-[2px] bg-gradient-to-r from-emerald-500 via-[#00D4FF] to-white/10 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-10">
        {TIMELINE_STEPS.map((step, idx) => {
          const isCompleted = step.status === 'completed';
          const isCurrent = step.status === 'current';
          const isUpcoming = step.status === 'upcoming';

          return (
            <motion.div
              key={step.id}
              className="flex flex-col md:items-center text-left md:text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {/* Icon Container Card with Glowing Status */}
              <div
                className={`flex items-center justify-center h-12 w-12 rounded-2xl mb-4 md:mx-auto border transition-all ${
                  isCompleted
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : isCurrent
                    ? 'bg-[#00D4FF]/10 border-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.25)]'
                    : 'bg-black/20 border-white/5'
                }`}
              >
                {getStepIcon(idx, step.status)}
              </div>

              {/* Status Header Block */}
              <span
                className={`text-[10px] font-mono tracking-widest uppercase mb-1.5 ${
                  isCompleted
                    ? 'text-emerald-400'
                    : isCurrent
                    ? 'text-[#00D4FF] font-semibold'
                    : 'text-[#D6DCE5]/40'
                }`}
              >
                {step.subtitle}
              </span>

              {/* Title & Short description */}
              <h4 className="text-sm font-semibold text-white tracking-tight group-hover:text-[#00D4FF] transition-colors">
                {step.title}
              </h4>
              <p className="text-xs text-[#D6DCE5]/60 mt-1.5 md:px-2 leading-relaxed max-w-xs md:max-w-none">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
