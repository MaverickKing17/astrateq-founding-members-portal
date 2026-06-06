import React, { useState } from 'react';
import { ResourceDocument } from '../types';
import { FileText, Download, CheckCircle, Eye, AlertCircle, FileArchive, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ResourceCardProps {
  doc: ResourceDocument;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ doc }) => {
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setCompleted(false);

    // Simulate luxury document assembly
    setTimeout(() => {
      setDownloading(false);
      setCompleted(true);
      setTimeout(() => setCompleted(false), 3000);
    }, 2000);
  };

  const getDocIcon = (type: string) => {
    const className = 'h-8 w-8 text-[#00D4FF]';
    if (type === 'education') {
      return <FileArchive className={className} />;
    }
    return <FileText className={className} />;
  };

  return (
    <div className="bg-[#0B1F3A]/20 glowing-card-border rounded-3xl p-8 flex flex-col justify-between h-full relative overflow-hidden group">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

      <div className="space-y-4">
        {/* Document Header Indicator */}
        <div className="flex items-center justify-between">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10 shrink-0">
            {getDocIcon(doc.type)}
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
              {doc.format}
            </span>
            <span className="text-[10px] font-mono text-[#D6DCE5]/40 block mt-1 tracking-widest uppercase">
              {doc.size}
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-[10px] font-mono text-[#D6DCE5]/50 tracking-wider block">
            {doc.subtitle}
          </span>
          <h4 className="text-base font-semibold text-white mt-1 group-hover:text-[#00D4FF] transition-colors">
            {doc.title}
          </h4>
          <p className="text-xs text-[#D6DCE5]/70 mt-2 leading-relaxed">
            {doc.description}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 pt-4 border-t border-white/5 flex gap-2.5 items-center no-print">
        {/* Info/Preview Action */}
        <button
          onClick={() => setShowPreview(true)}
          className="flex-1 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-mono text-[#D6DCE5] border border-white/15 hover:border-white/20 transition-all flex items-center justify-center gap-1.5"
        >
          <Eye className="h-3.5 w-3.5" />
          <span>OVERVIEW</span>
        </button>

        {/* Assembly action */}
        <button
          onClick={handleDownload}
          disabled={downloading}
          className={`flex-1 py-2 rounded-lg text-xs font-mono font-medium transition-all flex items-center justify-center gap-1.5 ${
            completed
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              : downloading
              ? 'bg-[#00D4FF]/5 text-[#00D4FF] border border-[#00D4FF]/20 cursor-wait'
              : 'bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30 active:scale-95'
          }`}
        >
          {completed ? (
            <>
              <CheckCircle className="h-3.5 w-3.5" />
              <span>DOWNLOADED</span>
            </>
          ) : downloading ? (
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#00D4FF] animate-ping" />
              <span>SIGNING RES...</span>
            </div>
          ) : (
            <>
              <Download className="h-3.5 w-3.5" />
              <span>SECURE PDF</span>
            </>
          )}
        </button>
      </div>

      {/* Preview Brief / Modal Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071120]/85 backdrop-blur-sm no-print"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0B1F3A] border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-5 border-b border-white/5 flex items-center justify-between bg-black/25">
                <div>
                  <span className="text-[10px] font-mono text-[#00D4FF] uppercase tracking-widest">{doc.subtitle}</span>
                  <h3 className="text-base font-semibold text-white mt-0.5">{doc.title}</h3>
                </div>
                <button
                  onClick={() => setShowPreview(false)}
                  className="px-2.5 py-1 text-xs font-mono bg-white/5 border border-white/10 text-white rounded hover:bg-white/10 transition-colors"
                >
                  ESC
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-2.5 text-xs text-[#D6DCE5]/80 leading-relaxed font-sans">
                  <div className="flex items-center gap-1.5 text-[#00D4FF] font-mono uppercase tracking-wider mb-2">
                    <AlertCircle className="h-4 w-4" />
                    <span>FOUNDER ACCESS PRIVILEGE</span>
                  </div>
                  {doc.type === 'guide' && (
                    <p>
                      This handbook outlines how Astrateq Gadgets integrates with current vehicle wiring arrays. It includes schematics detailing how our optical isolators insulate power traces, ensuring the vehicle electrical ecosystem is fully untouched.
                    </p>
                  )}
                  {doc.type === 'report' && (
                    <p>
                      An end-to-end electrical map showing compatible luxury and EV vehicle sockets. Shows where the OBD-II nodes lie, the layout coordinates, and CAN telemetry metrics available.
                    </p>
                  )}
                  {doc.type === 'manifesto' && (
                    <p>
                      Our public pact to the community. Documents how Astrateq limits vehicle metrics processing to local memory arrays, preventing remote vehicle telemetry harvesting.
                    </p>
                  )}
                  {doc.type === 'education' && (
                    <p>
                      Compilation pack for software developers: contains custom header maps, isolated sandbox scripts, and kernel flashing files to configure personalized dashboards.
                    </p>
                  )}
                  <div className="border-t border-white/5 pt-3.5 font-mono text-[10px] text-[#D6DCE5]/50 flex justify-between items-center">
                    <span>DATED: JUNE 2026</span>
                    <span>SECURITY: VERIFIED ACCESS ONLY</span>
                  </div>
                </div>

                <div className="flex gap-3 justify-end pt-2">
                  <button
                    onClick={() => setShowPreview(false)}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-xs font-mono text-[#D6DCE5] rounded-lg hover:bg-white/10"
                  >
                    CLOSE OVERVIEW
                  </button>
                  <button
                    onClick={() => {
                      setShowPreview(false);
                      handleDownload();
                    }}
                    className="px-4 py-2 bg-[#00D4FF]/15 border border-[#00D4FF]/30 text-xs font-mono text-[#00D4FF] rounded-lg hover:bg-[#00D4FF]/25 font-semibold"
                  >
                    DOWNLOAD NOW
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
