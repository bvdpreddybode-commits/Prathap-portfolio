import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Education() {
  const [ref, isVisible] = useInView();

  return (
    <section id="education" className="py-20 lg:py-28">
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
              Academic background
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Education
            </h2>
            <div className="mt-4 w-16 h-1 bg-accent-600 rounded-full mx-auto" />
          </div>

          {/* Timeline */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-400 to-accent-200 hidden sm:block" />

              {/* Education card */}
              <div className="relative flex items-start gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 w-12 h-12 bg-accent-600 rounded-full items-center justify-center shadow-lg shadow-accent-600/30 z-10">
                  <GraduationCap size={22} className="text-white" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-50 text-accent-700 text-xs font-semibold rounded-full">
                      <Calendar size={12} />
                      2024 – 2028
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                      Currently Pursuing
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    B.Tech – Data Science
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">
                    VNR Vignana Jyothi Institute of Engineering and Technology
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} />
                      Hyderabad, India
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <GraduationCap size={14} />
                      CGPA: X.XX / 10
                    </span>
                  </div>

                  {/* Coursework */}
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Key Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Data Structures & Algorithms',
                        'Machine Learning',
                        'Database Management',
                        'Statistics & Probability',
                        'Web Technologies',
                        'Object-Oriented Programming',
                      ].map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-lg border border-gray-100"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
