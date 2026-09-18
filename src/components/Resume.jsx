import { Download, FileText, CheckCircle2, Eye } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const highlights = [
  'B.Tech in Data Science (2024–2028) at VNR VJIET',
  'Proficient in Python, Machine Learning, SQL & Web Stack',
  '3+ full-stack and predictive modeling projects built',
  'Hands-on hackathon participant & active club member',
];

export default function Resume() {
  const [ref, isVisible] = useInView();

  return (
    <section id="resume" className="py-20 lg:py-28 bg-gray-50/50">
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
              Curriculum Vitae
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              My Resume
            </h2>
            <div className="mt-4 w-16 h-1 bg-accent-600 rounded-full mx-auto" />
            <p className="mt-4 text-gray-500 max-w-lg mx-auto">
              Looking for a quick overview of my experience, coursework, and technical skills?
              Download my official resume below.
            </p>
          </div>

          {/* Resume preview card */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-50 text-accent-700 rounded-lg text-xs font-semibold">
                  <FileText size={14} />
                  PDF Format (Updated for 2026)
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Prathap Reddy – Resume
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Includes full technical background, academic milestones at VNR VJIET, project repositories, and technical skills.
                </p>

                <div className="grid sm:grid-cols-2 gap-2.5 pt-2">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={15} className="text-accent-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                <a
                  href="#resume"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("This is an example portfolio workshop template. In production, link to your hosted PDF file (e.g. Google Drive, public/resume.pdf, or GitHub Releases)!");
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-all duration-200 shadow-md shadow-accent-600/20 hover:shadow-lg hover:shadow-accent-600/30 text-sm whitespace-nowrap"
                >
                  <Download size={16} />
                  Download My Resume
                </a>
                <a
                  href="#hero"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
                >
                  <Eye size={16} />
                  Preview Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
