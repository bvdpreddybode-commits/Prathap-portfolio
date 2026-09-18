import { Award, ExternalLink, Calendar } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const certifications = [
  {
    title: 'Python for Data Science',
    issuer: 'Course Certification Platform',
    year: '2024',
    description: 'Comprehensive training in data manipulation, visualization, and scientific computing with Python.',
    link: '#',
    badge: 'Data Science',
  },
  {
    title: 'Machine Learning Fundamentals',
    issuer: 'Online Learning Platform',
    year: '2024',
    description: 'Core concepts in supervised & unsupervised learning, model evaluation, and regression/classification.',
    link: '#',
    badge: 'Machine Learning',
  },
  {
    title: 'Web Development',
    issuer: 'Web Development Academy',
    year: '2024',
    description: 'Foundations of frontend engineering, responsive UI design, modern JavaScript, and component libraries.',
    link: '#',
    badge: 'Frontend Dev',
  },
];

export default function Certifications() {
  const [ref, isVisible] = useInView();

  return (
    <section id="certifications" className="py-20 lg:py-28">
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
              Qualifications
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Certifications
            </h2>
            <div className="mt-4 w-16 h-1 bg-accent-600 rounded-full mx-auto" />
            <p className="mt-4 text-gray-500 max-w-lg mx-auto">
              Verified certifications that demonstrate continuous skill building and hands-on dedication.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:border-accent-200 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center group-hover:bg-accent-600 group-hover:text-white transition-colors duration-300">
                      <Award size={24} />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-accent-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 font-medium">{cert.issuer}</p>
                  
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2 mb-3">
                    <Calendar size={13} />
                    <span>Issued {cert.year}</span>
                  </div>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={cert.link}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
