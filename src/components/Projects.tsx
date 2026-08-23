import { Github, ExternalLink, Eye, Code } from 'lucide-react';
import rupantorPreview from '@/assets/rupantor-preview.png';
import plotcorev1Preview from '@/assets/plotcorev1-preview.png';

interface Project {
  title: string;
  course: string;
  description: string[];
  stack: string[];
  featured: boolean;
  github: string;
  live?: string;
  image?: string;
  showGithub?: boolean;
}

const projects: Project[] = [
  {
    title: 'Rupantor',
    course: '',
    description: [
      'Web-based language conversion platform transforming text between Bengali, Banglish, and English',
      '13 distinct emotional/tone registers: Professional, Friendly, Lovely, Sad, Funny, Angry, Informal, Optimistic, Pessimistic, Sarcastic, Serious, and Normal',
      'Powered by Google Gemini AI for accurate semantic conversion and stylistic transformations',
      'Liquid-glass UI with light/dark theme support and animated transitions',
      'History persistence via localStorage, one-click copy, 100% client-side (no server)',
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide', 'Recharts', 'Supabase', '@dnd-kit', 'Google Gemini AI'],
    featured: true,
    github: 'https://github.com/nafisalamkhan/Rupantor',
    live: 'https://rupantorai.vercel.app/',
    image: rupantorPreview,
    showGithub: true,
  },
  {
    title: 'PlotCore v1',
    course: '',
    description: [
      'Cyberpunk-themed polar curve animator visualizing Rose curves (r = a·cos(nθ), r = a·sin(nθ)) and Limaçons (r = a ± b·cos(θ), r = a ± b·sin(θ))',
      'Dual graph view: polar and cartesian graphs displayed side-by-side with animated tracing',
      'Play/pause/step-forward/step-back/restart/reset controls with progress bar',
      'Key points data table showing r and θ values for critical points per period',
      'Dark/light theme toggle with cyberpunk dark theme, download polar graph as PNG',
      'Built-in learn panel with SVG diagrams explaining polar curves, fully responsive',
    ],
    stack: ['React 19', 'Vite 8', 'p5.js', 'Canvas 2D API', 'mathjs', 'CSS Custom Properties'],
    featured: true,
    github: 'https://github.com/nafisalamkhan/PlotCore_v1',
    live: 'https://plot-core-v1.vercel.app/',
    image: plotcorev1Preview,
    showGithub: true,
  },
  {
    title: 'Smart Price Discovery Framework for Agricultural Markets',
    course: 'CSE499 - Senior Design',
    description: [
      'Developing a data-driven framework to enhance supply chain efficiency and ensure fair rice pricing for farmers',
      'Leveraging community enterprise models to analyze market dynamics and improve market stability',
      'Integrating full-stack development with data analytics to create actionable insights for stakeholders',
    ],
    stack: ['ReactJS', 'Machine Learning'],
    featured: false,
    github: 'https://github.com/nafisalamkhan/Smart-Price-Discovery',
  },
  {
    title: 'Industrial Acoustic Anomaly Detection via Knowledge Distillation',
    course: 'CSE465 - Pattern Recognition and Neural Network',
    description: [
      'Designed a lightweight Custom CNN (0.11M parameters) achieving 99% accuracy for industrial acoustic anomaly detection with a 1,200x size reduction compared to VGG-16',
      'Implemented Knowledge Distillation from DenseNet-201 teacher model, recovering 15% performance in high-noise environments (-6dB SNR)',
      'Validated model interpretability using Grad-CAM visualization to ensure robust feature learning and deployment readiness',
    ],
    stack: ['PyTorch', 'CNNs', 'Knowledge Distillation'],
    featured: false,
    github: 'https://github.com/nafisalamkhan/Industrial-Acoustic-Anomaly-Detection',
  },
  {
    title: 'Predicting Student Academic Performance with Explainable AI',
    course: 'CSE498R - Direct Research',
    description: [
      'Engineered an interpretable ML pipeline using Ensemble methods and SMOTE, achieving 89% accuracy',
      'Applied Causal Inference (Propensity Score Matching) to quantify behavioral drivers behind performance gaps',
      'Implemented Explainable AI frameworks (SHAP, LIME) for actionable insights for educational stakeholders',
      'Published research findings with reproducible code and comprehensive documentation',
    ],
    stack: ['Python', 'SHAP', 'LIME', 'Scikit-Learn', 'Pandas', 'Causal Inference'],
    featured: false,
    github: 'https://github.com/nafisalamkhan/Student-Performance-Prediction',
  },
  {
    title: 'CKD Risk Assessment using Lifestyle and Demographic Factors',
    course: 'CSE445 - Machine Learning',
    description: [
      'Developed a predictive model using non-invasive lifestyle data to assess chronic kidney disease risk (89% accuracy)',
      'Performed comprehensive data preprocessing, feature engineering, and model comparison',
      'Created a low-cost, accessible healthcare solution for resource-constrained environments',
      'Validated with clinical datasets and prepared deployment-ready model artifacts',
    ],
    stack: ['Scikit-Learn', 'Pandas', 'NumPy', 'XGBoost', 'Medical Data'],
    featured: false,
    github: 'https://github.com/nafisalamkhan/CKD-Risk-Assessment',
  },
  {
    title: 'Learning Management System',
    course: 'CSE299 - Software Engineering',
    description: [
      'Developed a full-stack web application managing courses, assignments, and user authentication with RBAC',
      'Designed scalable database schema and implemented RESTful APIs for seamless frontend-backend integration',
      'Applied software design patterns (MVC, Repository, Factory) for maintainability and robustness',
      'Deployed with Docker containers and configured CI/CD pipelines',
    ],
    stack: ['Java Spring Boot', 'SQL', 'REST APIs', 'Docker', 'JWT', 'MVC'],
    featured: false,
    github: 'https://github.com/nafisalamkhan/LMS-SpringBoot',
  },
  {
    title: 'Online Voting System',
    course: 'CSE327 - Software Engineering II',
    description: [
      'Applied core software engineering principles to build a secure, efficient polling system',
      'Implemented security measures (encryption, audit logs, rate limiting) for data integrity',
      'Used design patterns (Observer, Strategy, Decorator) for extensible architecture',
      'Conducted thorough testing including penetration testing and load testing',
    ],
    stack: ['Java Spring Boot', 'Software Design Patterns', 'Security', 'Testing'],
    featured: false,
    github: 'https://github.com/nafisalamkhan/Online-Voting-System',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div
      className="card-hover p-6 group animate-fade-in flex flex-col h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Preview Image */}
      {project.image && (
        <div className="mb-4 aspect-video relative overflow-hidden rounded-[12px] bg-[var(--muted)] flex-shrink-0">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* Header: Course Badge & Featured */}
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        {project.course && (
          <span className="mono-eyebrow bg-[var(--muted)] px-3 py-1 rounded-[6px]">
            {project.course}
          </span>
        )}
        {project.featured && (
          <span className="inline-flex items-center gap-1.5 text-[12px] font-[500] text-[var(--link)]">
            <span className="w-1.5 h-1.5 bg-[var(--link)] rounded-full" />
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="heading-md mb-4 group-hover:text-[var(--link)] transition-colors flex-shrink-0 pl-4.5">
        {project.title}
      </h3>

      {/* Description */}
      <ul className="space-y-3 mb-6 flex-1 overflow-hidden pl-4.5">
        {project.description.slice(0, 4).map((point, i) => (
          <li key={i} className="body-md text-body leading-relaxed flex items-start gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6 flex-shrink-0">
        {project.stack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-[var(--muted)] text-body rounded-[6px] border border-hairline"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-4 border-t border-hairline flex-shrink-0">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 text-[14px] px-4"
          >
            <Eye className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {project.showGithub && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-[96px] lg:py-[128px] relative">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-[48px]">
          <div className="inline-flex items-center gap-2 bg-[var(--muted)] border border-hairline rounded-[6px] px-4 py-2 mb-6 mx-auto max-w-fit">
            <span className="w-2 h-2 bg-[var(--link)] rounded-full" />
            <span className="label-sm text-ink">Featured Work</span>
          </div>
          <h2 className="heading-lg mb-4">
            Software Projects
          </h2>
          <p className="body-lg text-body mx-auto max-w-xl">
            A collection of projects showcasing my expertise in AI/ML and Full-Stack Development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Link */}
        <div className="text-center mt-[48px]">
          <a
            href="https://github.com/nafisalamkhan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};