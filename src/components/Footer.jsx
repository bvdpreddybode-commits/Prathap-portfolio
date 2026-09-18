import { ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Workshop roadmap banner */}
        <div className="bg-gradient-to-r from-accent-50 via-indigo-50 to-blue-50 border border-accent-100/60 rounded-2xl p-6 mb-10 text-center">
          <div className="inline-flex items-center gap-2 text-accent-700 font-semibold text-xs uppercase tracking-wider mb-2">
            <Code2 size={16} />
            <span>Workshop Portfolio Roadmap</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-700 font-medium overflow-x-auto py-1">
            Introduction <span className="text-accent-400">→</span> About{' '}
            <span className="text-accent-400">→</span> Skills{' '}
            <span className="text-accent-400">→</span> Projects{' '}
            <span className="text-accent-400">→</span> Education{' '}
            <span className="text-accent-400">→</span> Achievements &amp; Certifications{' '}
            <span className="text-accent-400">→</span> Resume{' '}
            <span className="text-accent-400">→</span> Contact
          </p>
          <p className="text-[11px] text-gray-500 mt-2">
            Designed as a modular, production-ready template for engineering students. Ready to deploy via GitHub + Vercel.
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-gray-800">
              Prathap Reddy
            </p>
            <p className="text-xs text-gray-500 mt-0.5 flex items-center justify-center sm:justify-start gap-1">
              Built with <Heart size={13} className="text-red-500 fill-red-500" /> | <span className="font-semibold text-gray-700">PROFOLIO – CONVERGENCE 2K26</span>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-accent-50 hover:text-accent-600 rounded-xl border border-gray-200 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
