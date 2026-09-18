import { Code, BrainCircuit, Globe, Database } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code size={22} />,
    color: 'from-blue-500 to-cyan-500',
    bgLight: 'bg-blue-50',
    textColor: 'text-blue-600',
    skills: ['Python', 'Java', 'C++', 'JavaScript'],
  },
  {
    title: 'Data & AI',
    icon: <BrainCircuit size={22} />,
    color: 'from-purple-500 to-pink-500',
    bgLight: 'bg-purple-50',
    textColor: 'text-purple-600',
    skills: ['Machine Learning', 'Pandas', 'NumPy', 'Data Analysis'],
  },
  {
    title: 'Web Development',
    icon: <Globe size={22} />,
    color: 'from-orange-500 to-red-500',
    bgLight: 'bg-orange-50',
    textColor: 'text-orange-600',
    skills: ['HTML', 'CSS', 'React', 'JavaScript'],
  },
  {
    title: 'Database & Tools',
    icon: <Database size={22} />,
    color: 'from-green-500 to-emerald-500',
    bgLight: 'bg-green-50',
    textColor: 'text-green-600',
    skills: ['SQL', 'MongoDB', 'Git', 'GitHub'],
  },
];

export default function Skills() {
  const [ref, isVisible] = useInView();

  return (
    <section id="skills" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-accent-600 font-semibold text-sm tracking-wider uppercase">
              What I work with
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Skills & Technologies
            </h2>
            <div className="mt-4 w-16 h-1 bg-accent-600 rounded-full mx-auto" />
          </div>

          {/* Skill cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.title}
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Gradient bar at top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 ${cat.bgLight} ${cat.textColor} rounded-xl flex items-center justify-center mb-4`}
                >
                  {cat.icon}
                </div>

                <h3 className="font-bold text-gray-900 mb-4">{cat.title}</h3>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg border border-gray-100 hover:bg-accent-50 hover:text-accent-700 hover:border-accent-200 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
