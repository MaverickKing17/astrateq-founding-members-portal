import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { FaqSection } from './components/FaqSection';
import { CompatibilityPortal } from './components/CompatibilityPortal';
import { ResourceCard } from './components/ResourceCard';
import { TeamMessage } from './components/TeamMessage';
import { SEOAuditor } from './components/SEOAuditor';
import {
  FOUNDING_MEMBERS_MATTER,
  MISSION_DETAILS,
  FOUNDING_BENEFITS,
  PHILOSOPHY_PILLARS,
  CANADIAN_DIFFERENTIATORS,
  RESOURCE_CENTER_DOCS
} from './data';
import { Shield, Sparkles, ChevronRight, CheckCircle2, ArrowRight, ArrowUpCircle, Info, Lock, Globe, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import the generated premium luxury images
import suvInteriorImage from './assets/images/suv_interior_hardware_1780765442678.png';
import canadianWinterImage from './assets/images/canadian_winter_drive_1780765456291.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [selectedBenefitIdx, setSelectedBenefitIdx] = useState<number>(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll progress to set current active sticky nav section and "Back to Top" visibility
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top button
      setShowBackToTop(window.scrollY > 500);

      const sections = [
        'welcome',
        'why',
        'mission',
        'timeline',
        'benefits',
        'philosophy',
        'canadian',
        'resources',
        'message',
        'faq'
      ];

      const currentScroll = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#071120] text-[#D6DCE5] selection:bg-[#00D4FF]/30 selection:text-white antialiased overflow-x-hidden">
      {/* Editorial Grid Overlays for luxury ambiance */}
      <div className="absolute inset-x-0 top-0 h-[800px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#0B1F3A]/30 via-[#071120] to-transparent pointer-events-none -z-10" />
      
      {/* Background linear alignment grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />

      {/* Sticky Navigation and Reading Progress bar */}
      <Header activeSection={activeSection} />

      <main className="pt-20">
        {/* SECTION 1: HERO SECTION */}
        <section id="welcome" className="relative min-h-[90vh] flex items-center py-12 md:py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Editorial copy */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-[#00D4FF] uppercase font-bold">
                    PRIORITY ACCESS EDITION
                  </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1]">
                  Welcome to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D6DCE5] to-[#00D4FF]">
                    Founding Access
                  </span>
                </h1>
                
                <p className="text-base sm:text-lg text-[#D6DCE5]/80 leading-relaxed font-sans max-w-xl">
                  Thank you for joining Astrateq Gadgets as a founding member. This secure portal holds your private post-reservation briefings, diagnostic profiles, and engineering timelines.
                </p>

                {/* Info label box */}
                <div className="p-4 bg-[#0B1F3A]/30 glowing-card-border rounded-xl max-w-lg">
                  <div className="flex items-start gap-3">
                    <Lock className="h-4 w-4 text-[#00D4FF] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#D6DCE5]/70 leading-relaxed">
                      This space is exclusively reserved for verified token holders. It contains pre-launch compliance metrics and hardware platform logs of our local edge-computing cores.
                    </p>
                  </div>
                </div>

                {/* Call-to-action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => scrollToSection('benefits')}
                    className="px-6 py-3 bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-[#071120] rounded-xl text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                  >
                    <span>Explore Your Benefits</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => scrollToSection('compatibility-portal')}
                    className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-semibold border border-white/10 transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                  >
                    <span>View Diagnostic Compatibility Report</span>
                  </button>
                </div>
              </div>

              {/* Beautiful Canadian SUV image render preview framed by luxury bezel */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-xl bg-gradient-to-b from-[#0B1F3A] to-[#071120] p-2.5 rounded-2xl glowing-card-border overflow-hidden group">
                  <div className="absolute top-3 left-4 flex gap-1.5 z-10">
                    <span className="h-2 w-2 rounded-full bg-red-500/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/60" />
                  </div>
                  <div className="absolute top-2.5 right-4 z-10 text-[9px] font-mono text-[#00D4FF]/50 uppercase tracking-widest">
                    ASTRATEQ HW BREADBOARD RENDERING • EST. 2026
                  </div>
                  
                  {/* Image container frame */}
                  <div className="relative pt-[2.5px] rounded-xl overflow-hidden aspect-[16/9] border border-white/5 bg-[#071120]">
                    <img
                      src={suvInteriorImage}
                      alt="Premium Canadian SUV interior with subtle integrated Astrateq hardware"
                      className="w-full h-full object-cover grayscale-10 opacity-90 group-hover:scale-102 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="mt-4 p-4 bg-black/40 rounded-xl space-y-2 border border-white/5">
                    <span className="text-[10px] font-mono text-[#00D4FF] uppercase tracking-wider block">
                      CANADIAN SUV PREMIUM INTERIOR SPECIFICATION
                    </span>
                    <p className="text-[11px] text-[#D6DCE5]/70 leading-relaxed">
                      Laboratory render of Astrateq's secure optical isolation module seated into a premium Canadian EV vehicle's diagnostic control bridge.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: MEMBERSHIP IMPORTANCE SECTION */}
        <section id="why" className="py-20 border-b border-white/5 bg-[#0B1F3A]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wildest block mb-2 font-bold">
                COMMUNITY DRIVEN ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Why Founding Members Matter
              </h2>
              <p className="text-sm sm:text-base text-[#D6DCE5]/70 mt-3.5 leading-relaxed">
                We design with real feedback loops. By joining before the public release, founding members constitute our critical engineering validation group.
              </p>
            </div>

            {/* Matrix of Premium Importance cards in a Bento Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FOUNDING_MEMBERS_MATTER.map((card, idx) => {
                const isWide = idx === 0 || idx === 3;
                return (
                  <div
                    key={card.id}
                    className={`bg-[#0B1F3A]/20 rounded-3xl p-8 glowing-card-border flex flex-col justify-between group ${
                      isWide ? 'md:col-span-2' : 'md:col-span-1'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-mono text-[#00D4FF]/50 font-semibold block mb-2">
                        0{idx + 1} // PRIORITY
                      </span>
                      <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-[#00D4FF] transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[#D6DCE5]/70 mt-3 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <div className="mt-8 flex justify-end">
                      <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#00D4FF]/10 group-hover:border-[#00D4FF]/30 flex items-center justify-center text-[#D6DCE5]/60 group-hover:text-[#00D4FF] text-sm font-mono transition-all duration-300">
                        →
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: COMPANY MISSION SECTION */}
        <section id="mission" className="py-20 border-b border-white/5 relative overflow-hidden">
          {/* Subtle decoration element */}
          <div className="absolute right-0 top-1/4 h-80 w-80 bg-cyan-500/3 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              <div className="lg:col-span-5 bg-[#0B1F3A]/25 glowing-card-border rounded-3xl p-8 md:p-10 flex flex-col justify-between">
                <div className="space-y-5">
                  <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest block font-bold">
                    OUR CONVICTION
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
                    {MISSION_DETAILS.headline}
                  </h2>
                  <div className="h-1 w-12 bg-gradient-to-r from-[#00D4FF] to-transparent rounded-full" />
                </div>
                <div className="pt-6 border-t border-white/5 mt-6">
                  <p className="text-xs font-mono text-[#D6DCE5]/50 uppercase tracking-widest leading-relaxed">
                    // Decentralized vehicle diagnostics. Your car. Your logs. Local edge hardware isolation.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#0B1F3A]/15 glowing-card-border rounded-3xl p-8 md:p-10 space-y-6 flex flex-col justify-center">
                {MISSION_DETAILS.paragraphs.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-base text-[#D6DCE5]/80 leading-relaxed font-sans first-letter:text-xl first-letter:text-[#00D4FF] first-letter:font-semibold"
                  >
                    {para}
                  </p>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: POST-RESERVATION TIMELINE */}
        <section id="timeline" className="py-20 border-b border-white/5 bg-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wide block mb-2 font-bold">
                ROADMAP WITH ARCHITECTURAL VERIFICATION
              </span>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                Post-Reservation Timeline
              </h2>
              <p className="text-xs lg:text-sm text-[#D6DCE5]/60 mt-3 leading-relaxed">
                To guarantee extreme system reliability, we operate on rigorous engineering milestones rather than inflexible marketing dates.
              </p>
            </div>

            {/* Horizontal timeline */}
            <Timeline />
          </div>
        </section>

        {/* SECTION 5: FOUNDING MEMBER BENEFITS */}
        <section id="benefits" className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest block mb-2 font-bold">
                MEMBER ALLOTMENTS
              </span>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                Founding Member Benefits & Privileges
              </h2>
              <p className="text-sm text-[#D6DCE5]/70 mt-3leading-relaxed">
                As a pioneering member of our platform, you receive lifelong access tiers and dedicated developer packages.
              </p>
            </div>

            {/* Interactive Benefits Detail Explorer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Selector list */}
              <div className="lg:col-span-5 space-y-2.5">
                <span className="text-xs font-mono text-[#D6DCE5]/40 uppercase tracking-widest block mb-2 px-1">
                  CHOOSE BENEFIT CATEGORY
                </span>
                {FOUNDING_BENEFITS.map((benefit, idx) => {
                  const isSelected = selectedBenefitIdx === idx;
                  return (
                    <button
                      key={benefit.id}
                      onClick={() => setSelectedBenefitIdx(idx)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group cursor-pointer ${
                        isSelected
                          ? 'bg-[#00D4FF]/5 border-[#00D4FF]/40 border-glow-cyan'
                          : 'bg-[#0B1F3A]/20 border-white/5 hover:border-white/10 hover:bg-[#0B1F3A]/35'
                      }`}
                    >
                      <div className="space-y-1">
                        <span className={`text-[10px] font-mono block ${isSelected ? 'text-[#00D4FF]' : 'text-[#D6DCE5]/40'}`}>
                          BENEFIT 0{idx + 1}
                        </span>
                        <h4 className={`text-sm font-semibold transition-colors ${isSelected ? 'text-white' : 'text-[#D6DCE5]/80 group-hover:text-white'}`}>
                          {benefit.title}
                        </h4>
                      </div>
                      <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isSelected ? 'text-[#00D4FF] translate-x-1' : 'text-[#D6DCE5]/30 group-hover:text-white'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Right content box */}
              <div className="lg:col-span-7 bg-[#0B1F3A]/25 glowing-card-border rounded-2xl p-8 flex flex-col justify-between box-glow-cyan">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded text-[10px] font-mono text-[#00D4FF]">
                    ACTIVE BENEFIT DETAIL
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                      {FOUNDING_BENEFITS[selectedBenefitIdx].title}
                    </h3>
                    <p className="text-sm text-[#D6DCE5]/90 leading-relaxed font-sans font-medium">
                      {FOUNDING_BENEFITS[selectedBenefitIdx].description}
                    </p>
                  </div>

                  <div className="p-5 bg-black/30 rounded-xl glowing-card-border space-y-2.5">
                    <h5 className="text-[10px] font-mono text-[#00D4FF]/70 uppercase tracking-widest font-semibold flex items-center gap-1.5 leading-none">
                      <Sparkles className="h-3 w-3" />
                      TECHNICAL EXPLAINER
                    </h5>
                    <p className="text-xs text-[#D6DCE5]/70 leading-relaxed">
                      {FOUNDING_BENEFITS[selectedBenefitIdx].detail}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#D6DCE5]/40 leading-none">
                  <span>FOUNDER ENROLLMENT SECURE STATUS</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> ACTIVE ALLOTMENT
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: ASTRATEQ PHILOSOPHY SECTION */}
        <section id="philosophy" className="py-20 border-b border-white/5 bg-[#0B1F3A]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest block mb-2 font-bold">
                OUR PRINCIPLES
              </span>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                Privacy First. Intelligence Local.
              </h2>
              <p className="text-sm text-[#D6DCE5]/70 mt-3 leading-relaxed">
                Astrateq operates on an absolute zero-concession approach to telemetry ownership.
              </p>
            </div>

            {/* Description pillars in an asymmetric Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {PHILOSOPHY_PILLARS.map((pillar, idx) => {
                const isWide = idx === 0 || idx === 3;
                return (
                  <div
                    key={pillar.id}
                    className={`bg-black/25 rounded-3xl p-8 glowing-card-border flex flex-col justify-between ${
                      isWide ? 'md:col-span-7' : 'md:col-span-5'
                    }`}
                  >
                    <div>
                      <h4 className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-[#00D4FF] rounded-full animate-pulse" />
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-[#D6DCE5]/80 leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/30">
                      <span>PILLAR 0{idx + 1}</span>
                      <span>SECURE EDGE CORE</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE COMPATIBILITY PORTAL (THE SECOND CTA INTERACTIVITY) */}
        <section id="compatibility-portal" className="py-20 border-b border-white/5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0B1F3A]/10 via-[#071120] to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest block mb-2 font-bold">
                CAN-BUS GATEWAY INTERACTION
              </span>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                Diagnostic Compatibility Verification
              </h2>
              <p className="text-xs lg:text-sm text-[#D6DCE5]/60 mt-3 leading-relaxed">
                Verify how our physical modules hook into the diagnostic buses of premium SUVs in the Canadian market. Run a secure simulated handshake.
              </p>
            </div>

            <CompatibilityPortal />
          </div>
        </section>

        {/* SECTION 7: CANADIAN DRIVER CONSIDERATIONS */}
        <section id="canadian" className="py-20 border-b border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Photo from generation nested in a premium Bento card */}
              <div className="lg:col-span-6 bg-black/30 glowing-card-border rounded-3xl p-4 flex flex-col justify-between">
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 bg-[#071120] group">
                  <img
                    src={canadianWinterImage}
                    alt="Astrateq high-end vehicle testing in Canadian snow on sweeping highways at twilight"
                    className="w-full h-full object-cover grayscale-[15%] group-hover:scale-102 transition-transform duration-700 opacity-95"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071120]/90 via-transparent to-transparent opacity-80" />
                  
                  {/* Faux metadata log layout overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#071120]/90 p-3.5 rounded-xl border border-white/10 backdrop-blur-sm">
                    <span className="text-[9px] font-mono text-white/40 block tracking-widest uppercase">
                      Sub-Zero Stress Testing Location
                    </span>
                    <span className="text-xs font-mono text-[#00D4FF] font-semibold mt-0.5 block leading-tight">
                      Route 97 / Okanagan Valley, Canada (-35°C Ground Temp)
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-2">
                  <span className="text-[10px] font-mono text-[#00D4FF] uppercase tracking-widest block font-bold">
                    // PLATFORM CLIMATE BOUNDARIES
                  </span>
                  <p className="text-xs text-[#D6DCE5]/60 mt-1 leading-relaxed">
                    Automotive validation suite capturing low-voltage startup latency profiles during active blizzards.
                  </p>
                </div>
              </div>

              {/* Right Column: Editorial items inside a matching Bento card */}
              <div className="lg:col-span-6 bg-[#0B1F3A]/15 glowing-card-border rounded-3xl p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest block mb-2 font-bold">
                    PRE-LAUNCH RESILIENCE
                  </span>
                  <h2 className="text-3xl font-display font-bold text-white tracking-tight leading-tight">
                    {CANADIAN_DIFFERENTIATORS.headline}
                  </h2>
                  <p className="text-sm text-[#D6DCE5]/70 mt-3.5 leading-relaxed font-sans">
                    {CANADIAN_DIFFERENTIATORS.introduction}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 mt-8 pt-6 border-t border-white/5">
                  {CANADIAN_DIFFERENTIATORS.points.map((point, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="flex items-center justify-center h-8 w-8 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] shrink-0 border border-[#00D4FF]/20 text-xs font-mono">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white tracking-tight">
                          {point.title}
                        </h4>
                        <p className="text-xs text-[#D6DCE5]/60 mt-1.5 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 8: RESOURCE CENTER */}
        <section id="resources" className="py-20 border-b border-white/5 bg-black/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest block mb-2 font-bold">
                INFORMATION REPOSITORY
              </span>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                Founder Resource Center & Downloads
              </h2>
              <p className="text-xs lg:text-sm text-[#D6DCE5]/60 mt-3 leading-relaxed">
                Retrieve verified PDF specifications, platform guides, and data manifestos secure-signed for founding members.
              </p>
            </div>

            {/* Grid of documents */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {RESOURCE_CENTER_DOCS.map((doc) => (
                <ResourceCard key={doc.id} doc={doc} />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 9: FOUNDER/TEAM MESSAGE */}
        <section id="message" className="py-20 border-b border-white/5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0B1F3A]/10 via-[#071120] to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest block mb-1.5 font-bold">
                EDITORIAL NOTE
              </span>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                A Message from the Astrateq Team
              </h2>
            </div>

            <TeamMessage />
          </div>
        </section>

        {/* COLLAPSIBLE FAQ ACCORDION SECTION (SEO ENHANCEMENT) */}
        <section id="faq" className="py-20 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-widest block mb-2 font-bold">
                TECHNICAL INQUIRIES
              </span>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xs lg:text-sm text-[#D6DCE5]/60 mt-3 leading-relaxed">
                Transparent answers regarding edge processing parameters, vehicle warranties, and delivery safety loops.
              </p>
            </div>

            <FaqSection />
          </div>
        </section>

        {/* SECTION 10: FUTURE OUTLOOK SECTION */}
        <section className="py-24 bg-gradient-to-t from-black/60 to-transparent">
          <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
            <div className="inline-flex items-center gap-1 bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20 text-[10px] font-mono uppercase tracking-widest p-1 px-3 rounded-full">
              Sovereignty on the Edge • club.astrateqgadgets.com
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              The Journey Is Just Beginning
            </h2>
            
            <p className="text-sm md:text-base text-[#D6DCE5]/70 max-w-2xl mx-auto leading-relaxed">
              We are working diligently to finalize the validation codes of local hardware modules. Stay connected via your private access ranks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto pt-4 no-print">
              <button
                onClick={() => {
                  window.location.href = 'https://astrateqgadgets.com';
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#0B1F3A] hover:bg-[#0B1F3A]/80 text-[#D6DCE5] hover:text-white rounded-xl text-xs font-mono border border-white/10 transition-all cursor-pointer"
              >
                Return to Astrateq Gadgets
              </button>
              
              <button
                onClick={() => scrollToSection('resources')}
                className="w-full sm:w-auto px-6 py-3 bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 text-[#00D4FF] rounded-xl text-xs font-mono border border-[#00D4FF]/30 transition-all cursor-pointer"
              >
                Explore Resources
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-white/5 py-10 text-center font-mono text-[10px] text-[#D6DCE5]/40 tracking-wider space-y-4 no-print">
        <div className="flex flex-wrap justify-center gap-6 text-[11px] list-none">
          <a href="#welcome" className="hover:text-white transition-colors">Access</a>
          <a href="#timeline" className="hover:text-white transition-colors">Timeline</a>
          <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
          <a href="#resources" className="hover:text-white transition-colors">Resources</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <p>
          © 2026 ASTRATEQ GADGETS INC. ALL RIGHTS RESERVED. DELIVERED IN CANADA.
        </p>
        <p className="text-[9px] text-[#00D4FF]/40 uppercase tracking-widest">
          Secured Connection • Edge Node: LOCAL_HOST_VERIFIED • Host: club.astrateqgadgets.com (Priority Access Edition)
        </p>
      </footer>

      {/* Slide-out SEO schema validation panel */}
      <SEOAuditor />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 left-6 z-40 p-2.5 rounded-full tangerine-glow-box text-[#FF5B00] shadow-2xl cursor-pointer no-print"
            aria-label="Back to Top"
          >
            <ArrowUpCircle className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
