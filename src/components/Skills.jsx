import { useEffect, useRef, useState } from 'react';

const skillGroups = [
  {
    category: 'Backend',
    color: 'from-indigo-500 to-blue-500',
    skills: [
      { name: 'Java / J2EE', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring Batch', level: 75 },
      { name: 'Python', level: 75 },
      { name: 'REST API', level: 88 },
    ],
  },
  {
    category: 'Frontend',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Angular / TypeScript', level: 85 },
      { name: 'React', level: 70 },
      { name: 'JavaScript', level: 78 },
      { name: 'HTML / CSS', level: 85 },
    ],
  },
  {
    category: 'Database',
    color: 'from-teal-500 to-cyan-500',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 80 },
      { name: 'MS SQL Server', level: 72 },
      { name: 'JPA / Hibernate', level: 78 },
    ],
  },
  {
    category: 'Tools & DevOps',
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git / GitLab', level: 88 },
      { name: 'Jenkins / CI-CD', level: 72 },
      { name: 'Docker', level: 65 },
      { name: 'SonarQube', level: 68 },
      { name: 'Jira / Confluence', level: 80 },
    ],
  },
  {
    category: 'Mobile & Other',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Kotlin / Android', level: 70 },
      { name: 'Machine Learning', level: 65 },
      { name: 'C / C#', level: 60 },
      { name: 'PHP / Django', level: 60 },
    ],
  },
];

function ProgressBar({ name, level, color, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Skills</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies I work with — from backend systems to frontend interfaces and DevOps tooling.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900/60 border border-gray-800/60 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors duration-200"
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-widest mb-5 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}
              >
                {group.category}
              </h3>
              {group.skills.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  animate={animate}
                />
              ))}
            </div>
          ))}

          <div className="bg-gray-900/60 border border-gray-800/60 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors duration-200">
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-5 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
              Methodologies
            </h3>
            {['Agile / Scrum', 'CI/CD', 'UML / MVC', 'Functional Analysis', 'Kanban'].map((m) => (
              <div
                key={m}
                className="flex items-center gap-2 mb-3 text-sm text-gray-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                {m}
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Languages</p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded text-xs">French (Native)</span>
                <span className="px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 rounded text-xs">English B2 (TOEIC 825)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
