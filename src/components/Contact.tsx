import { Mail, ExternalLink, Send, Github, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nafisalamkhan',
    label: 'Connect on LinkedIn',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/nafisalamkhan',
    label: 'View GitHub Profile',
    icon: Github,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-[96px] lg:py-[128px] relative">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-[48px]">
            <div className="inline-flex items-center gap-2 bg-[var(--muted)] border border-hairline rounded-[6px] px-4 py-2 mb-6 mx-auto max-w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="label-sm text-ink">Get In Touch</span>
            </div>
            <h2 className="heading-lg mb-4">
              Let&apos;s Connect
            </h2>
            <p className="body-lg text-body mx-auto max-w-xl">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-[48px]">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover p-4 text-center group animate-fade-in min-w-[160px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-[12px] bg-[var(--muted)] flex items-center justify-center group-hover:bg-[var(--hairline-soft)] transition-colors">
                  <link.icon className="w-6 h-6 text-[var(--mute)] group-hover:text-ink transition-colors" />
                </div>
                <h3 className="font-[600] text-[16px] leading-[24px] text-ink mb-1 group-hover:text-[var(--link)] transition-colors">
                  {link.name}
                </h3>
                <p className="body-sm text-[var(--mute)] flex items-center justify-center gap-1">
                  {link.label}
                  <ExternalLink className="w-3.5 h-3.5" />
                </p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="card p-8 inline-block max-w-md w-full">
              <p className="body-lg text-body mb-6">
                Interested in working together?
              </p>
              <a
                href="mailto:nafis.alam010@gmail.com"
                className="btn-primary inline-flex items-center gap-3 w-full justify-center"
              >
                <Mail className="w-5 h-5" />
                Send me an email
                <Send className="w-5 h-5" />
              </a>
              <p className="body-sm text-[var(--mute)] mt-4">
                nafis.alam010@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};