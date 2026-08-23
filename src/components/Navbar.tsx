import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Designs', href: '#designs' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--canvas)]/95 backdrop-blur-xl border-b border-hairline shadow-[var(--shadow-floating)]'
          : 'bg-[var(--canvas)]/80 backdrop-blur-xl border-b border-hairline'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-[64px] px-[24px] lg:px-[32px]">
          {/* Logo / Wordmark */}
          <a href="#home" className="font-[600] text-[20px] leading-[28px] tracking-[-0.4px] text-ink">
            Nafis Alam Khan
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[4px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="btn-ghost text-body rounded-full px-3 py-1.5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side: Theme toggle + Mobile menu button */}
          <div className="flex items-center gap-[8px]">
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden btn-icon"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-[16px] border-t border-hairline animate-fade-in px-[24px] lg:px-[32px] bg-[var(--canvas)]/95 backdrop-blur-xl">
            <div className="flex flex-col gap-[8px]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-ghost text-body justify-start w-full rounded-full px-3 py-1.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};