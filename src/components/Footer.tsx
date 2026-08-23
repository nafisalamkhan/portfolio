import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { MagnificLogo } from '@/components/ui/logos';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-hairline bg-[var(--canvas)]">
      <div className="section-container py-[40px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-[24px]">
          {/* Copyright */}
          <div className="flex flex-col gap-1">
            <p className="body-md text-[var(--mute)]">
              © {currentYear} Md. Nafis Alam Khan. All rights reserved.
            </p>
            <p className="body-sm text-[var(--faint)]">
              Last updated August 2026
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="#home" className="body-md text-[var(--mute)] hover:text-ink transition-colors">
              Home
            </a>
            <a href="#about" className="body-md text-[var(--mute)] hover:text-ink transition-colors">
              About
            </a>
            <a href="#projects" className="body-md text-[var(--mute)] hover:text-ink transition-colors">
              Projects
            </a>
            <a href="#designs" className="body-md text-[var(--mute)] hover:text-ink transition-colors">
              Designs
            </a>
            <a href="#contact" className="body-md text-[var(--mute)] hover:text-ink transition-colors">
              Contact
            </a>
          </div>

          {/* Social & Back to top */}
          <div className="flex items-center gap-[16px]">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/nafisalamkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mute)] hover:text-ink transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nafisalamkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mute)] hover:text-ink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:nafis.alam010@gmail.com"
                className="text-[var(--mute)] hover:text-ink transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.magnific.com/author/nafisalamkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--mute)] hover:text-ink transition-colors"
                aria-label="Magnific"
              >
                <MagnificLogo className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-icon hidden md:flex"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};