import { TechStack } from "./TechStack";
import nsuLogo from "@/assets/nsu-logo.png";
import { Gamepad2, Crosshair, Compass, Trophy } from "lucide-react";

const competitiveGames = [
  "CS2", "CS:Source", "CS 1.6", "Rainbow Six Siege", 
  "Call of Duty", "Battlefield", "Payday 2"
];

const storyGames = [
  "Red Dead Redemption 2", "GTA V", "Assassin's Creed", 
  "Far Cry", "Hitman"
];

const sportsGames = ["FIFA"];

const GameBadge = ({ name }: { name: string }) => (
  <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-foreground/5 border border-foreground/10 rounded-full text-foreground/80 hover:bg-foreground/10 hover:border-foreground/20 transition-colors">
    {name}
  </span>
);

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 glass-badge">
              <span className="w-2 h-2 bg-white/60 rounded-full" />
              About Me
            </div>

            <h2 className="section-title">
              Bridging AI Innovation with
              <br />
              Practical Engineering
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Final-year Computer Science & Engineering student at{" "}
              <span className="text-foreground font-medium">North South University</span>. I combine a strong
              theoretical foundation in Machine Learning (PyTorch, CNNs, Transformers) and practical experience in
              building robust web applications using Java Spring Boot and modern React.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Beyond code, I'm a passionate graphic designer with{" "}
              <span className="text-foreground font-medium">150+ assets</span> and{" "}
              <span className="text-foreground font-medium">5,700+ downloads</span> on Freepik, blending technical
              precision with creative vision.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-foreground">99.2%</div>
                <div className="text-xs text-muted-foreground mt-1">ML Precision</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-foreground">5.7K+</div>
                <div className="text-xs text-muted-foreground mt-1">Downloads</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-foreground">150+</div>
                <div className="text-xs text-muted-foreground mt-1">Design Assets</div>
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-5 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                  <img src={nsuLogo} alt="North South University" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">North South University</h4>
                  <p className="text-sm text-muted-foreground">B.Sc. in Computer Science & Engineering</p>
                  <p className="text-xs text-muted-foreground mt-1">Final Year • AI/ML Specialization</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-5 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-foreground">IEEE</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Mastering Machine Learning Fundamentals</h4>
                  <p className="text-sm text-muted-foreground">A Practical Workshop • 2-Day Intensive Training</p>
                  <p className="text-xs text-muted-foreground mt-1">2024 • IEEE NSU Student Branch, WIE Affinity Group</p>
                </div>
              </div>
            </div>

            {/* Gaming - Hobby */}
            <div className="glass-card p-5 mt-4 border-dashed">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center shrink-0">
                  <Gamepad2 className="w-6 h-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">When I'm Not Coding...</h4>
                  <p className="text-sm text-muted-foreground mb-4">I love diving into games 🎮</p>
                  
                  {/* Competitive/FPS */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Crosshair className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground font-medium">Competitive / FPS</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {competitiveGames.map((game) => (
                        <GameBadge key={game} name={game} />
                      ))}
                    </div>
                  </div>

                  {/* Story/Adventure */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Compass className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground font-medium">Story / Adventure</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {storyGames.map((game) => (
                        <GameBadge key={game} name={game} />
                      ))}
                    </div>
                  </div>

                  {/* Sports */}
                  <div className="mb-3">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Trophy className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground font-medium">Sports</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {sportsGames.map((game) => (
                        <GameBadge key={game} name={game} />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground/60 italic mt-2">+ many more...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div className="lg:pt-16">
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};