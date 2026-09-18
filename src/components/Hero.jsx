import { ArrowDown, Eye } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-100 rounded-full blur-3xl opacity-40 animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-50 rounded-full blur-3xl opacity-50 animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-accent-50 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-50 text-accent-700 rounded-full text-sm font-medium mb-6 border border-accent-100">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-400">
                Prathap Reddy
              </span>{' '}
              <span className="inline-block animate-float" style={{ animationDuration: '3s' }}>👋</span>
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-700">
              Data Science Student &amp; Developer
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              I build data-driven applications and explore the intersection of AI,
              technology, and real-world problem solving.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-all duration-300 shadow-lg shadow-accent-600/25 hover:shadow-xl hover:shadow-accent-600/30 hover:-translate-y-0.5"
              >
                <Eye size={18} />
                View My Projects
              </a>
              <a
                href="#resume"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-accent-300 hover:text-accent-600 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Avatar illustration */}
          <div className="flex-shrink-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-2xl opacity-20 scale-110" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-accent-100 to-accent-200 border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Stylized avatar placeholder */}
                <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56">
                  {/* Head */}
                  <circle cx="100" cy="70" r="40" fill="#4338ca" opacity="0.85" />
                  {/* Body */}
                  <ellipse cx="100" cy="160" rx="55" ry="40" fill="#4338ca" opacity="0.7" />
                  {/* Face details */}
                  <circle cx="88" cy="65" r="4" fill="#e0e7ff" />
                  <circle cx="112" cy="65" r="4" fill="#e0e7ff" />
                  <path d="M90 80 Q100 90 110 80" stroke="#e0e7ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  {/* Glasses */}
                  <circle cx="88" cy="65" r="10" stroke="#c7d2fe" strokeWidth="2" fill="none" />
                  <circle cx="112" cy="65" r="10" stroke="#c7d2fe" strokeWidth="2" fill="none" />
                  <line x1="98" y1="65" x2="102" y2="65" stroke="#c7d2fe" strokeWidth="2" />
                  {/* Laptop in hands */}
                  <rect x="70" y="130" width="60" height="6" rx="2" fill="#818cf8" opacity="0.8" />
                  <rect x="72" y="124" width="56" height="8" rx="1" fill="#a5b4fc" opacity="0.6" />
                  {/* Code on screen */}
                  <line x1="78" y1="127" x2="92" y2="127" stroke="#e0e7ff" strokeWidth="1.5" />
                  <line x1="78" y1="129" x2="86" y2="129" stroke="#c7d2fe" strokeWidth="1.5" />
                </svg>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-xl shadow-lg animate-float" style={{ animationDelay: '0s' }}>
                💻
              </div>
              <div className="absolute -bottom-2 -left-4 w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                📊
              </div>
              <div className="absolute top-1/2 -right-6 w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center text-lg shadow-lg animate-float" style={{ animationDelay: '4s' }}>
                🤖
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-400 hover:text-accent-600 transition-colors" aria-label="Scroll down">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
