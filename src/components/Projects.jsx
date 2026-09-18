import { ExternalLink, Satellite, ShoppingCart, BarChart3 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: 'CycloneAI',
    description:
      'Satellite-based tropical cyclone detection, tracking, classification and intensity prediction platform powered by deep learning models.',
    icon: <Satellite size={28} />,
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'Satellite Data'],
    gradient: 'from-blue-600 to-cyan-500',
    shadowColor: 'shadow-blue-500/10',
    github: '#',
    demo: '#',
  },
  {
    title: 'SmartShop',
    description:
      'Intelligent billing system using barcode scanning, database integration and automated receipt generation for retail stores.',
    icon: <ShoppingCart size={28} />,
    tags: ['Java', 'MySQL', 'JavaFX', 'ZXing', 'JDBC'],
    gradient: 'from-purple-600 to-pink-500',
    shadowColor: 'shadow-purple-500/10',
    github: '#',
    demo: '#',
  },
  {
    title: 'Data4Civic',
    description:
      'Interactive dashboard for analyzing government budget allocation and generating data-driven insights for civic transparency.',
    icon: <BarChart3 size={28} />,
    tags: ['React', 'D3.js', 'Python', 'Pandas', 'REST API'],
    gradient: 'from-emerald-600 to-teal-500',
    shadowColor: 'shadow-emerald-500/10',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const [ref, isVisible] = useInView();

  return (
    <section id="projects" className="py-20 lg:py-28 bg-gray-50/50">
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
              My work
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Featured Projects
            </h2>
            <div className="mt-4 w-16 h-1 bg-accent-600 rounded-full mx-auto" />
            <p className="mt-4 text-gray-500 max-w-lg mx-auto">
              Here are some of the projects I've built to solve real-world problems
              using data science and software development.
            </p>
          </div>

          {/* Project cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`group relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl ${project.shadowColor} transition-all duration-500 hover:-translate-y-3`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Top gradient banner */}
                <div
                  className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 border border-white/10 rounded-full" />
                  <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full" />

                  <div className="relative text-white p-4 bg-white/10 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-md border border-gray-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors duration-200"
                    >
                      <GithubIcon size={15} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent-600 text-white text-sm font-medium rounded-xl hover:bg-accent-700 transition-colors duration-200"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
