import { ArrowDown, FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[64px]">
      <div className="section-container relative z-10 py-[38px] lg:py-[64px]">
        <div className="grid lg:grid-cols-2 gap-[22px] items-center">
          {/* Left: Content */}
          <div className="space-y-[24px]">
            {/* Eyebrow */}
            <span className="mono-eyebrow">AI & ML Engineer · Full-Stack Developer</span>

            {/* Main Headline */}
            <h1 className="display-xl animate-fade-in delay-1">
              Hi, I&apos;m <span className="text-gradient">Md. Nafis Alam Khan</span>
            </h1>

            {/* Sub-headline */}
            <p className="body-lg text-body animate-fade-in delay-2 max-w-xl">
              <span className="text-ink font-[500]">AI & Full-Stack Developer</span>
              <span className="text-[var(--mute)] mx-3">·</span>
              <span className="text-ink font-[500]">Creative Designer</span>
            </p>

            {/* Bio */}
            <p className="body-lg text-body animate-fade-in delay-3 max-w-xl">
              Dedicated and results driven Computer Science graduate specializing in Artificial Intelligence, Machine Learning, and Full Stack Development. Possesses a strong theoretical foundation paired with practical experience in building robust web applications and engineering high accuracy predictive models. Highly adaptable and research oriented, seeking to leverage analytical problem-solving skills and technical expertise to contribute to innovative software engineering or AI driven projects in a dynamic, growth focused organization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-[12px] animate-fade-in delay-4">
              <a
                href="https://drive.google.com/file/d/1g1w5WJ3KYTIW0Xfg6vrxnB6TR0cTXCig/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-[8px]"
              >
                <FileText className="w-5 h-5" />
                View CV
              </a>

              <a href="#about" className="btn-secondary inline-flex items-center gap-[8px]">
                Learn More
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-6">
            <div className="relative w-[288px] h-[288px] md:w-[320px] md:h-[320px] lg:w-[384px] lg:h-[384px] rounded-full overflow-hidden card-elevated">
              <img
                src={profilePhoto}
                alt="Md. Nafis Alam Khan"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-[var(--mute)]" />
        </div>
      </div>
    </section>
  );
};