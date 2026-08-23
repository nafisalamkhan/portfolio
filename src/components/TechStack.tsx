interface TechCategory {
  category: string;
  items: TechItem[];
}

interface TechItem {
  name: string;
  logo: string;
  color: string;
}

const techCategories: TechCategory[] = [
  {
    category: "Languages",
    items: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', color: '#00599C' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', color: '#ED8B00' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#EE4C2C' },
      { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#FF6F00' },
      { name: 'Scikit-Learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg', color: '#F7931E' },
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', color: '#150458' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg', color: '#013243' },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', color: '#6DB33F' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
    ],
  },
  {
    category: "Frontend & Tools",
    items: [
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
      { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032' },
      { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', color: '#000000' },
      { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', color: '#FCC624' },
    ],
  },
];

export const TechStack = () => {
  const totalTechs = techCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="heading-md">Technical Stack</h3>
        <span className="mono-eyebrow">{totalTechs} Technologies</span>
      </div>
      
      <div className="space-y-10">
        {techCategories.map((category, catIndex) => (
          <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-px h-6 bg-gradient-to-b from-[var(--gradient-develop-start)] to-[var(--gradient-preview-end)]" />
              <span className="mono-eyebrow text-ink">{category.category}</span>
              <span className="body-sm text-[var(--mute)]">({category.items.length})</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {category.items.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group card p-4 flex flex-col items-center gap-3 transition-all duration-300 hover:border-[var(--link)] hover:shadow-[var(--shadow-whisper)]"
                  style={{ animationDelay: `${catIndex * 0.1 + index * 0.03}s` }}
                >
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gradient-develop-start)] to-[var(--gradient-preview-end)] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[10px]" />
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="relative w-7 h-7 transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                  <span className="body-sm text-center whitespace-nowrap text-body group-hover:text-ink transition-colors font-[500]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};