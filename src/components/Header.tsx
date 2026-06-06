import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { AstrateqLogo } from './AstrateqLogo';
import { FileUp, Link, Menu, X, Check, Printer } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll height to add a dark glass blur background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Motion setup for reading progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://club.astrateqgadgets.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy link', err);
    }
  };

  const menuItems = [
    { label: 'Access', href: '#welcome' },
    { label: 'Founders', href: '#why' },
    { label: 'Mission', href: '#mission' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Winter', href: '#canadian' },
    { label: 'Resources', href: '#resources' },
    { label: 'Editorial', href: '#message' },
  ];

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#071120]/90 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#welcome" className="flex items-center">
          <AstrateqLogo className="h-9 w-auto" />
        </a>

        {/* Desktop Navigation Links (Responsive Highlights) */}
        <nav className="hidden lg:flex items-center space-x-1">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 text-xs font-mono tracking-wider uppercase transition-colors rounded-md ${
                  isActive ? 'text-[#00D4FF]' : 'text-[#D6DCE5]/70 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/5 border-b-2 border-[#00D4FF] rounded-md -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Print/PDF Export Button */}
          <button
            onClick={() => window.print()}
            aria-label="Export Guide to PDF"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/5 hover:bg-white/10 active:bg-white/15 text-[#D6DCE5] hover:text-white rounded-md text-xs font-mono border border-white/10 transition-all"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>EXPORT GUIDE</span>
          </button>

          {/* Copy Share Link Button */}
          <button
            onClick={handleCopyLink}
            aria-label="Copy Guide Link"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#00D4FF]/10 hover:bg-[#00D4FF]/20 text-[#00D4FF] rounded-md text-xs font-mono border border-[#00D4FF]/20 active:scale-95 transition-all"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400">COPIED LINK</span>
              </>
            ) : (
              <>
                <Link className="h-3.5 w-3.5" />
                <span>SHARE GUIDE</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#D6DCE5] hover:bg-white/5 rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Reading Progress Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00D4FF] via-purple-500 to-[#00D4FF] origin-left text-glow-cyan"
          style={{ scaleX }}
        />
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#071120] border-b border-white/5 shadow-2xl z-40">
          <div className="px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-2">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-xs font-mono tracking-wider uppercase rounded-md ${
                    activeSection === item.href.substring(1)
                      ? 'bg-white/5 text-[#00D4FF] border-l-2 border-[#00D4FF]'
                      : 'text-[#D6DCE5]/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
              <button
                onClick={() => {
                  window.print();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-white/5 text-[#D6DCE5] rounded-md text-xs font-mono border border-white/10"
              >
                <Printer className="h-4 w-4" />
                <span>EXPORT GUIDE (PDF)</span>
              </button>

              <button
                onClick={() => {
                  handleCopyLink();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#00D4FF]/10 text-[#00D4FF] rounded-md text-xs font-mono border border-[#00D4FF]/20"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">LINK COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Link className="h-4 w-4" />
                    <span>COPY SHARE LINK</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
