const projects = [
  {
    title: 'Industrial Acoustic Anomaly Detection via Knowledge Distillation',
    course: 'CSE465',
    description: [
      'Designed a lightweight Custom CNN (0.11M parameters) achieving 99% accuracy for industrial acoustic anomaly detection with a 1,200x size reduction compared to VGG-16',
      'Implemented Knowledge Distillation from DenseNet-201 teacher model, recovering 15% performance in high-noise environments (-6dB SNR)',
      'Validated model interpretability using Grad-CAM visualization to ensure robust feature learning and deployment readiness',
    ],
    stack: ['PyTorch', 'CNNs', 'Knowledge Distillation'],
    featured: true,
  },
  {
    title: 'Predicting Student Academic Performance with Explainable AI',
    course: 'CSE498R',
    description: [
      'Engineered an interpretable ML pipeline using Ensemble methods and SMOTE, achieving 89% accuracy in predicting student grades',
      'Applied Causal Inference techniques (Propensity Score Matching) to quantify behavioral drivers behind performance gaps between STEM and Humanities subjects',
      'Implemented Explainable AI frameworks (SHAP, LIME) to provide actionable insights for educational stakeholders',
    ],
    stack: ['Python', 'SHAP', 'LIME'],
    featured: true,
  },
  {
    title: 'CKD Risk Assessment using Lifestyle and Demographic Factors',
    course: 'CSE445',
    description: [
      'Developed a predictive model using non-invasive lifestyle data to assess chronic kidney disease risk with high accuracy of 89%',
      'Performed comprehensive data preprocessing, feature engineering, and model comparison to create a low-cost, accessible healthcare solution',
      'Demonstrated potential for real-world deployment in resource-constrained healthcare environments',
    ],
    stack: ['Scikit-Learn', 'Pandas'],
    featured: false,
  },
  {
    title: 'Smart Price Discovery Framework for Agricultural Markets',
    course: 'CSE499A/B',
    description: [
      'Developing a data-driven framework to enhance supply chain efficiency and ensure fair rice pricing for farmers',
      'Leveraging community enterprise models to analyze market dynamics and improve market stability',
      'Integrating full-stack development with data analytics to create actionable insights for stakeholders',
    ],
    stack: ['ReactJS', 'Machine Learning'],
    featured: true,
  },
  {
    title: 'Learning Management System',
    course: 'CSE299',
    description: [
      'Developed a full-stack web application managing courses, assignments, and user authentication with role-based access control',
      'Designed scalable database schema and implemented RESTful APIs for seamless frontend-backend integration',
      'Applied software design patterns to ensure code maintainability and system robustness',
    ],
    stack: ['Java Spring Boot', 'SQL', 'REST APIs'],
    featured: false,
  },
  {
    title: 'Online Voting System',
    course: 'CSE327',
    description: [
      'Applied core software engineering principles to build a secure, efficient polling system for gathering public opinion',
      'Implemented security measures and design patterns to ensure data integrity and system reliability',
    ],
    stack: ['Java Spring Boot', 'Software Design Patterns'],
    featured: false,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-badge mb-6">
            <span className="w-2 h-2 bg-white/60 rounded-full" />
            Featured Work
          </div>
          <h2 className="section-title">
            Software Projects
          </h2>
          <p className="section-subtitle mx-auto">
            A collection of projects showcasing my expertise in AI/ML and Full-Stack Development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card p-6 transition-all duration-300 hover:bg-white/[0.05] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Course Badge & Featured */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">
                  {project.course}
                </span>
                {project.featured && (
                  <span className="text-xs text-foreground/60 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-white transition-colors leading-tight">
                {project.title}
              </h3>

              {/* Description Points */}
              <ul className="space-y-2 mb-5">
                {project.description.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-white/30 mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-white/5 text-muted-foreground rounded-full border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};