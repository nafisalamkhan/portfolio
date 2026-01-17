import { Mail, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:nafis.alam010@gmail.com',
    label: 'nafis.alam010@gmail.com',
    logo: 'https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nafisalamkhan',
    label: 'Connect on LinkedIn',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/nafisalamkhan',
    label: 'View GitHub Profile',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass-badge mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]" />
              Get In Touch
            </div>
            <h2 className="section-title">
              Let's Connect
            </h2>
            <p className="section-subtitle mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="group glass-card p-6 text-center transition-all duration-300 hover:bg-white/[0.05] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                  <img
                    src={link.logo}
                    alt={link.name}
                    className={`w-7 h-7 ${link.name === 'GitHub' ? 'invert' : ''}`}
                  />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-white transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  {link.label}
                  {link.name !== 'Email' && <ExternalLink size={12} />}
                </p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="glass-card p-8 inline-block">
              <p className="text-muted-foreground mb-4">
                Interested in working together?
              </p>
              <a
                href="mailto:nafis.alam010@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg 
                           bg-foreground text-background font-medium 
                           transition-all duration-300 hover:bg-white/90"
              >
                <Mail size={18} />
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};