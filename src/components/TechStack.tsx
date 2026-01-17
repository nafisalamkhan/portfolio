interface TechItem {
  name: string;
  logo: string;
  color: string;
}

const techStack: TechItem[] = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#00599C' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#ED8B00' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', color: '#6DB33F' },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
  { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#150458' },
  { name: 'Scikit-Learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', color: '#F7931E' },
];

export const TechStack = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Tech Stack</h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className="group relative flex flex-col items-center gap-2 py-4 px-6 rounded-xl 
                       bg-white/[0.03] border-[1.5px] border-white/[0.12]
                       transition-all duration-300 animate-fade-in cursor-pointer
                       overflow-hidden isolate
                       hover:border-white/[0.25] hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]"
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            {/* Diagonal shine effect overlay */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
              style={{
                background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
                backgroundSize: '200% 200%',
                animation: 'none',
              }}
            />
            <div 
              className="absolute inset-0 -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-700 ease-out pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)',
              }}
            />
            
            <div className="w-10 h-10 flex items-center justify-center relative z-10">
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-8 h-8 transition-all duration-300 grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100"
              />
            </div>
            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center whitespace-nowrap relative z-10">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};