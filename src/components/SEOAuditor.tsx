import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Code, Eye, X, Globe, Terminal, Layers } from 'lucide-react';

export const SEOAuditor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'faq' | 'org' | 'metadata'>('faq');

  const faqSchemaString = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Astrateq process vehicle telemetry without the cloud?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Astrateq modules house an on-board neural acceleration core that plugs directly into your car's diagnostic and control ports using passive, optically isolated couplers. It runs machine learning models locally on the edge to analyze steering, traction, and cabin metrics. No raw data is serialized, stored on corporate servers, or transmitted."
      }
    },
    {
      "@type": "Question",
      "name": "Are my vehicle's manufacturer warranties affected by the installation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Astrateq leverages active optical isolation barriers and high-impedance taps. Since it does not modify the vehicle's electrical architecture or write to secure vehicle components, the installation remains fully factory-compliant and non-invasive."
      }
    },
    {
      "@type": "Question",
      "name": "How do you guarantee operation during the extreme Canadian winter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All Astrateq modules undergo continuous thermal cycling down to -46°C. We use military-grade parts, low-resistivity gold traces, and an efficient on-board sub-zero heating block to maintain boot stability during heavy winter cold starts."
      }
    }
  ]
}`;

  const orgSchemaString = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Astrateq Gadgets",
  "url": "https://club.astrateqgadgets.com",
  "logo": "https://club.astrateqgadgets.com/assets/logo.png",
  "description": "High-end automotive hardware accelerating local vehicle intelligence and telemetry privacy filters at the edge.",
  "sameAs": [
    "https://twitter.com/astrateqgadgets",
    "https://github.com/astrateqgadgets"
  ]
}`;

  const metadataList = [
    { property: 'title', value: 'Astrateq Founding Member Guide — Priority Access Edition' },
    { property: 'description', value: 'Exclusive post-reservation guidance, compatibility reports, and zero-cloud philosophical manifests for verified Astrateq founding members.' },
    { property: 'og:title', value: 'Astrateq Founding Member Premium Guide' },
    { property: 'og:description', value: 'Secure edge computing for luxury vehicle intelligence. Explore timelines and diagnostic compatibility.' },
    { property: 'og:image', value: 'https://club.astrateqgadgets.com/assets/images/suv_interior.jpg' },
    { property: 'og:url', value: 'https://club.astrateqgadgets.com' },
    { property: 'og:type', value: 'website' },
    { property: 'twitter:card', value: 'summary_large_image' },
    { property: 'twitter:title', value: 'Astrateq Founding Member Guide' },
    { property: 'twitter:description', value: 'Local processing, driver telemetry sovereignty, and sub-zero winter resilience.' },
    { name: 'robots', value: 'index, follow' }
  ];

  return (
    <>
      {/* Floating trigger widget */}
      <div className="fixed bottom-6 right-6 z-40 no-print">
        <motion.button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#00D4FF]/20 text-[#00D4FF] hover:text-white px-4 py-2.5 rounded-full text-xs font-mono border border-[#00D4FF]/30 hover:border-[#00D4FF] shadow-2xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Inspect SEO & Schema Metadata"
        >
          <Code className="h-4 w-4" />
          <span>SEO SCHEMAS & METADATA</span>
        </motion.button>
      </div>

      {/* Slide-out Sidebar Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#071120] z-50 no-print"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-[#071120] border-l border-white/5 shadow-25xl z-50 overflow-hidden flex flex-col no-print"
            >
              {/* Header */}
              <div className="p-5 border-b border-white/5 bg-[#0B1F3A]/30 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white font-mono uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-[#00D4FF]" />
                    TECHNICAL SEO COMPLIANCE
                  </h3>
                  <p className="text-xs text-[#D6DCE5]/60 mt-1">
                    Structured data & head tags active for club.astrateqgadgets.com
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-[#D6DCE5]/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-white/5 bg-[#0B1F3A]/10 p-2 gap-1.5 shrink-0">
                <button
                  onClick={() => setActiveTab('faq')}
                  className={`flex-1 py-1.5 text-center text-xs font-mono rounded transition-colors ${
                    activeTab === 'faq'
                      ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30'
                      : 'text-[#D6DCE5]/70 hover:bg-white/5'
                  }`}
                >
                  FAQ Schema
                </button>
                <button
                  onClick={() => setActiveTab('org')}
                  className={`flex-1 py-1.5 text-center text-xs font-mono rounded transition-colors ${
                    activeTab === 'org'
                      ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30'
                      : 'text-[#D6DCE5]/70 hover:bg-white/5'
                  }`}
                >
                  Organization Schema
                </button>
                <button
                  onClick={() => setActiveTab('metadata')}
                  className={`flex-1 py-1.5 text-center text-xs font-mono rounded transition-colors ${
                    activeTab === 'metadata'
                      ? 'bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30'
                      : 'text-[#D6DCE5]/70 hover:bg-white/5'
                  }`}
                >
                  Social OG & Tags
                </button>
              </div>

              {/* Panel body */}
              <div className="flex-1 overflow-y-auto p-5">
                {activeTab === 'faq' && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-2.5 p-3.5 bg-[#00D4FF]/5 border border-[#00D4FF]/10 rounded-lg">
                      <Terminal className="h-4 w-4 text-[#00D4FF] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#D6DCE5]/80 leading-relaxed">
                        This microdata is injected into the head via JSON-LD scripting. It enables search engine bots to parse, map, and output immediate answer structures below search result headers:
                      </p>
                    </div>
                    <pre className="p-4 bg-black/40 border border-white/5 rounded-lg text-[11px] font-mono text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
                      {faqSchemaString}
                    </pre>
                  </div>
                )}

                {activeTab === 'org' && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-2.5 p-3.5 bg-[#00D4FF]/5 border border-[#00D4FF]/10 rounded-lg">
                      <Globe className="h-4 w-4 text-[#00D4FF] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#D6DCE5]/80 leading-relaxed">
                        The Organization Schema anchors the brand name, official domains, security logos, and social networks, guaranteeing high search ranking fidelity:
                      </p>
                    </div>
                    <pre className="p-4 bg-black/40 border border-white/5 rounded-lg text-[11px] font-mono text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
                      {orgSchemaString}
                    </pre>
                  </div>
                )}

                {activeTab === 'metadata' && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-2.5 p-3.5 bg-[#00D4FF]/5 border border-[#00D4FF]/10 rounded-lg">
                      <Layers className="h-4 w-4 text-[#00D4FF] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#D6DCE5]/80 leading-relaxed">
                        Active open-graph and twitter-card declarations verify that previews remain visually luxurious when shared across slack, twitter/X, or diagnostic networks:
                      </p>
                    </div>
                    <div className="border border-white/5 rounded-lg overflow-hidden divide-y divide-white/5 bg-black/20">
                      {metadataList.map((tag, idx) => (
                        <div key={idx} className="p-3 grid grid-cols-3 gap-2 text-xs">
                          <span className="font-mono text-[#00D4FF]">
                            {tag.property || tag.name}
                          </span>
                          <span className="col-span-2 text-white/90 font-sans break-all">
                            {tag.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Panel Footer */}
              <div className="p-5 border-t border-white/5 bg-[#0B1F3A]/10 text-center text-xs font-mono text-[#D6DCE5]/50">
                SEO Schema Auditing Module • Astrateq Core
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
