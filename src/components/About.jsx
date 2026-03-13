import { GraduationCap, Briefcase, MapPin, Mail, Phone } from 'lucide-react';

const experiences = [
  {
    role: 'Fullstack Developer',
    company: 'MMA (Le Mans, France)',
    period: 'Since September 2024',
    description:
      'Developed responsive web interfaces with Angular & TypeScript. Built a Java J2EE monolith intranet application with Spring Batch. Set up CI/CD with GitLab, Jenkins & SonarQube. Migrated database from MS SQL Server to PostgreSQL. Project management with Kanban, Confluence & Jira.',
    tags: ['Angular', 'Java J2EE', 'Spring Batch', 'PostgreSQL', 'GitLab', 'Jenkins'],
  },
  {
    role: 'Mobile Developer',
    company: 'Sarthe Numérique – ENSIM (France)',
    period: 'Nov 2023 – Jun 2024',
    description:
      'Designed and developed an Android boat-counting app for lock operators in partnership with Sarthe Numérique. UI design with Figma, development in Kotlin under Android Studio.',
    tags: ['Android', 'Kotlin', 'Figma', 'Android Studio'],
  },
];

const education = [
  {
    degree: "Engineering Degree – Software & Systems",
    school: 'ENSIM – Le Mans Université (France)',
    period: 'Sep 2022 – Sep 2025',
    description:
      'OOP, database design, distributed systems, network programming, Big Data, Machine Learning, Deep Learning, Active Learning projects.',
  },
  {
    degree: 'Classe Préparatoire (MPSI)',
    school: 'Sup Prépa, Yaoundé, Cameroun',
    period: 'Sep 2019 – Sep 2021',
    description: 'Mathematics-Physics specialisation. Algorithmics and C programming.',
  },
];

function SectionTitle({ children }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{children}</h2>
      <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>About Me</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Who I am</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Fresh 2025 ENSIM graduate, I am immediately available for a permanent position in
              software development. My experience at MMA allowed me to develop fullstack expertise in
              Java/Angular and database modernisation.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              I also led projects in web, mobile and AI, reinforcing my versatility and creativity.
              Rigorous and solution-oriented, I want to put my skills to work on innovative projects.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-indigo-400" /> Le Mans, France
              </span>
              <span className="flex items-center gap-2">
                <Phone size={16} className="text-indigo-400" /> +33 07 51 03 41 70
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-indigo-400" /> bricenikenoumimipo@gmail.com
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 opacity-20 blur-2xl" />
              <div className="relative w-full h-full rounded-2xl border border-indigo-500/30 bg-gray-900/60 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="text-6xl font-bold text-gradient mb-2">BN</div>
                  <div className="text-gray-500 text-sm">Fullstack Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
              <Briefcase size={20} className="text-indigo-400" />
              Experience
            </h3>
            <div className="relative pl-6 border-l border-gray-800">
              {experiences.map((exp, i) => (
                <div key={i} className="mb-8 relative">
                  <div className="absolute -left-[29px] w-3 h-3 rounded-full bg-indigo-500 border-2 border-gray-950 top-1" />
                  <div className="bg-gray-900/60 border border-gray-800/60 rounded-xl p-5 hover:border-indigo-500/30 transition-colors duration-200">
                    <p className="text-xs text-indigo-400 mb-1">{exp.period}</p>
                    <h4 className="font-semibold text-white">{exp.role}</h4>
                    <p className="text-gray-500 text-sm mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
              <GraduationCap size={20} className="text-indigo-400" />
              Education
            </h3>
            <div className="relative pl-6 border-l border-gray-800">
              {education.map((edu, i) => (
                <div key={i} className="mb-8 relative">
                  <div className="absolute -left-[29px] w-3 h-3 rounded-full bg-purple-500 border-2 border-gray-950 top-1" />
                  <div className="bg-gray-900/60 border border-gray-800/60 rounded-xl p-5 hover:border-purple-500/30 transition-colors duration-200">
                    <p className="text-xs text-purple-400 mb-1">{edu.period}</p>
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <p className="text-gray-500 text-sm mb-2">{edu.school}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
