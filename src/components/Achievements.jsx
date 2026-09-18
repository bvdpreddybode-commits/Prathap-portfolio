import { Trophy, Users, Lightbulb, Target } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const achievements = [
  {
    icon: <Trophy size={24} />,
    title: 'Hackathon Participant',
    description: 'Participated in multiple hackathons and technical competitions, building innovative solutions under time constraints.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Project Builder',
    description: 'Developed multiple academic and personal projects spanning AI, web development, and data analysis.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: <Users size={24} />,
    title: 'Tech Club Member',
    description: 'Active member of technical clubs, contributing to workshops, peer learning sessions, and community events.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: <Target size={24} />,
    title: 'Continuous Learner',
    description: 'Passionate about AI, Data Science, and Web Development with a commitment to staying current with industry trends.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
];

export default function Achievements() {
  const [ref, isVisible] = useInView();

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-gray-50/50">
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
              Highlights
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Achievements
            </h2>
            <div className="mt-4 w-16 h-1 bg-accent-600 rounded-full mx-auto" />
          </div>

          {/* Achievement cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((item, i) => (
              <div
                key={item.title}
                className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
