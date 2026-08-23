import { TechStack } from "./TechStack";
import nsuLogo from "@/assets/nsu-logo.png";
import { Gamepad2, Crosshair, Compass, Trophy, Award } from "lucide-react";

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
  <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-[var(--muted)] border border-hairline rounded-full text-body hover:bg-[var(--hairline-soft)] hover:border-[var(--mute)] transition-colors">
    {name}
  </span>
);

export const About = () => {
  return (
    <section id="about" className="py-[96px] lg:py-[128px] relative">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-[48px] items-start">
          {/* Left: Bio */}
          <div className="space-y-[24px]">
            <div className="inline-flex items-center gap-[8px] bg-[var(--muted)] border border-hairline rounded-[6px] px-4 py-2">
              <span className="w-2 h-2 bg-[var(--link)] rounded-full" />
              <span className="label-sm text-ink">About Me</span>
            </div>

            <h2 className="heading-lg">
              Bridging AI Innovation with
              <br />
              Practical Engineering
            </h2>

            <p className="body-lg text-body max-w-xl">
              Dedicated and results driven Computer Science graduate specializing in Artificial Intelligence, Machine Learning, and Full Stack Development. Possesses a strong theoretical foundation paired with practical experience in building robust web applications and engineering high accuracy predictive models.
            </p>

            <p className="body-lg text-body max-w-xl">
              Beyond code, I&apos;m a passionate graphic designer with{" "}
              <span className="text-ink font-[500]">200+ assets</span> and{" "}
              <span className="text-ink font-[500]">8.3K+ downloads</span> on Magnific, blending technical
              precision with creative vision.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-[16px] pt-[8px]">
              <div className="card p-4 text-center">
                <div className="font-[600] text-[24px] leading-[32px] tracking-[-0.96px] text-ink">8.3K+</div>
                <div className="mono-eyebrow mt-1">Downloads</div>
              </div>
              <div className="card p-4 text-center">
                <div className="font-[600] text-[24px] leading-[32px] tracking-[-0.96px] text-ink">200+</div>
                <div className="mono-eyebrow mt-1">Design Assets</div>
              </div>
            </div>

            {/* Education */}
            <div className="card p-[20px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-[var(--muted)]">
                  <img src={nsuLogo} alt="North South University" className="w-full h-full object-contain p-2" />
                </div>
                <div>
                  <h4 className="font-[600] text-[16px] leading-[24px] text-ink">North South University</h4>
                  <p className="body-sm mt-1">B.Sc. in Computer Science & Engineering</p>
                  <p className="body-sm mt-1">Final Year · AI/ML Specialization</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card p-[20px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--muted)] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-[var(--mute)]" />
                </div>
                <div>
                  <h4 className="font-[600] text-[16px] leading-[24px] text-ink">Mastering Machine Learning Fundamentals</h4>
                  <p className="body-sm mt-1">A Practical Workshop · 2-Day Intensive Training</p>
                  <p className="body-sm mt-1">2024 · IEEE NSU Student Branch, WIE Affinity Group</p>
                </div>
              </div>
            </div>

            {/* Gaming - Hobby */}
            <div className="card p-[20px]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--muted)] flex items-center justify-center shrink-0">
                  <Gamepad2 className="w-6 h-6 text-[var(--mute)]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-[600] text-[16px] leading-[24px] text-ink">When I&apos;m Not Coding...</h4>
                  <p className="body-sm mt-1">I love diving into games 🎮</p>
                  
                  {/* Competitive/FPS */}
                  <div className="mt-4">
                    <div className="flex items-center gap-[8px] mb-2">
                      <Crosshair className="w-4 h-4 text-[var(--mute)]" />
                      <span className="mono-eyebrow">Competitive / FPS</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {competitiveGames.map((game) => (
                        <GameBadge key={game} name={game} />
                      ))}
                    </div>
                  </div>

                  {/* Story/Adventure */}
                  <div className="mt-4">
                    <div className="flex items-center gap-[8px] mb-2">
                      <Compass className="w-4 h-4 text-[var(--mute)]" />
                      <span className="mono-eyebrow">Story / Adventure</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {storyGames.map((game) => (
                        <GameBadge key={game} name={game} />
                      ))}
                    </div>
                  </div>

                  {/* Sports */}
                  <div className="mt-4">
                    <div className="flex items-center gap-[8px] mb-2">
                      <Trophy className="w-4 h-4 text-[var(--mute)]" />
                      <span className="mono-eyebrow">Sports</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {sportsGames.map((game) => (
                        <GameBadge key={game} name={game} />
                      ))}
                    </div>
                  </div>

                  <p className="body-sm italic mt-2">+ many more...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div className="lg:pt-[64px] animate-fade-in">
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
};