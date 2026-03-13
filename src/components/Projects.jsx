import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'MMA Intranet Platform',
    description:
      'Enterprise-grade intranet web application built as a Java J2EE monolith with batch processing. Features responsive Angular UI, CI/CD pipeline and a full database migration from MS SQL Server to PostgreSQL.',
    tags: ['Java J2EE', 'Spring Batch', 'Angular', 'TypeScript', 'PostgreSQL', 'GitLab CI'],
    github: '#',
    live: '#',
    color: 'from-indigo-600 to-blue-600',
  },
  {
    title: 'Boat Counter – Android App',
    description:
      'Android application for lock operators to count and track boats. Designed with Figma, developed in Kotlin. Includes local database, intuitive forms and simplified input tools for non-tech users.',
    tags: ['Kotlin', 'Android Studio', 'Figma', 'Room DB'],
    github: '#',
    live: null,
    color: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Portfolio Website',
    description:
      'Modern personal portfolio built with React, Vite and Tailwind CSS. Fully responsive dark-mode design with smooth animations, project showcase and contact form.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/brice-noumi',
    live: '#',
    color: 'from-teal-600 to-cyan-600',
  },
  {
    title: 'Active Learning Research Project',
    description:
      'AI-focused academic project exploring Active Learning strategies to minimise labelling effort in machine learning pipelines. Implemented in Python with scikit-learn and PyTorch.',
    tags: ['Python', 'PyTorch', 'scikit-learn', 'Machine Learning', 'Active Learning'],
    github: '#',
    live: null,
    color: 'from-orange-600 to-red-600',
  },
  {
    title: 'Deep Learning Image Classifier',
    description:
      'Convolutional neural network image classification project developed during ENSIM engineering studies. Trained on custom datasets with data augmentation and evaluated using standard metrics.',
    tags: ['Python', 'Deep Learning', 'CNN', 'TensorFlow', 'Jupyter'],
    github: '#',
    live: null,
    color: 'from-green-600 to-emerald-600',
  },
  {
    title: 'REST API – Data Management',
    description:
      'RESTful API built with Spring Boot for managing structured data with full CRUD operations, JPA/Hibernate persistence and Swagger documentation.',
    tags: ['Spring Boot', 'Java', 'REST API', 'JPA', 'MySQL', 'Swagger'],
    github: '#',
    live: null,
    color: 'from-violet-600 to-indigo-600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Projects</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from enterprise software to mobile apps and AI research.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-gray-900/60 border border-gray-800/60 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 card-glow flex flex-col"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-gray-800 text-gray-400 border border-gray-700/50 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-gray-800/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    <Github size={15} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200"
                    >
                      <ExternalLink size={15} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
