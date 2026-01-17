import { ArrowDown, FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-0">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background" />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I'm <span className="text-foreground">Md. Nafis Alam Khan</span>
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-foreground">AI & Full-Stack Developer</span>
              <span className="text-muted-foreground/50"> • </span>
              <span className="text-foreground">Creative Designer</span>
            </p>

            {/* Bio */}
            <p className="text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.25s" }}>
              Final-year Computer Science & Engineering student at North South University. I combine a strong
              theoretical foundation in Machine Learning with practical experience in building robust web applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://drive.google.com/file/d/1g1w5WJ3KYTIW0Xfg6vrxnB6TR0cTXCig/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg 
                           bg-foreground text-background font-medium 
                           transition-all duration-300 hover:bg-white/90"
              >
                <FileText size={18} />
                View CV
              </a>

              <a href="#about" className="inline-flex items-center gap-2 px-6 py-3 glass-button font-medium">
                Learn More
                <ArrowDown size={16} className="animate-bounce" />
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Photo container with glass effect */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden glass-card">
                <img
                  src={profilePhoto}
                  alt="Md. Nafis Alam Khan"
                  className="w-full h-full object-cover relative z-10"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-white/10 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-white/5 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
