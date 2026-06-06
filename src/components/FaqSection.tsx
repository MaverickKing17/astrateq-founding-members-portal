import React, { useState } from 'react';
import { COMMON_FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {COMMON_FAQS.map((faq, idx) => {
        const isOpen = activeIdx === idx;
        return (
          <div
            key={idx}
            className="bg-[#0B1F3A]/15 border border-white/10 rounded-2xl overflow-hidden hover:border-[#00D4FF]/25 transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 group focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-sm md:text-base font-semibold text-white group-hover:text-[#00D4FF] transition-colors leading-relaxed flex items-start gap-3">
                <HelpCircle className="h-5 w-5 text-[#00D4FF]/60 shrink-0 mt-0.5 group-hover:text-[#00D4FF] transition-colors" />
                {faq.question}
              </span>
              <span
                className={`p-1.5 rounded-lg bg-white/5 text-[#D6DCE5]/70 shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#00D4FF] bg-[#00D4FF]/10' : ''
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 pt-1 border-t border-white/5 text-sm text-[#D6DCE5]/80 leading-relaxed font-sans pl-[44px]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
