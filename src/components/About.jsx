import { User, MapPin, BookOpen, Rocket } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-accent-600 font-semibold text-sm tracking-wider uppercase">
              Get to know me
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              About Me
            </h2>
            <div className="mt-4 w-16 h-1 bg-accent-600 rounded-full mx-auto" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Text */}
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                I'm <span className="font-semibold text-gray-900">Prathap Reddy</span>, a
                passionate B.Tech Data Science student at{' '}
                <span className="font-semibold text-gray-900">
                  VNR Vignana Jyothi Institute of Engineering and Technology
                </span>
                , Hyderabad. I love turning complex data into meaningful insights and
                building applications that solve real-world problems.
              </p>
              <p>
                My interests span across <span className="text-accent-600 font-medium">Artificial Intelligence</span>,{' '}
                <span className="text-accent-600 font-medium">Machine Learning</span>, and{' '}
                <span className="text-accent-600 font-medium">Full-Stack Web Development</span>.
                I enjoy working on projects that combine data analysis with intuitive
                user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                participating in hackathons, and collaborating with peers on innovative
                ideas. I aspire to build impactful products that leverage the power of
                data and AI.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard
                icon={<User size={22} />}
                title="Student"
                desc="B.Tech Data Science, 2024–2028"
              />
              <InfoCard
                icon={<MapPin size={22} />}
                title="Location"
                desc="Hyderabad, India"
              />
              <InfoCard
                icon={<BookOpen size={22} />}
                title="Interests"
                desc="AI, Data Science, Web Dev"
              />
              <InfoCard
                icon={<Rocket size={22} />}
                title="Goal"
                desc="Build impactful tech products"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, desc }) {
  return (
    <div className="group p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-accent-200 transition-all duration-300 hover:-translate-y-1">
      <div className="w-10 h-10 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center mb-3 group-hover:bg-accent-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
      <p className="text-gray-500 text-xs mt-1">{desc}</p>
    </div>
  );
}
