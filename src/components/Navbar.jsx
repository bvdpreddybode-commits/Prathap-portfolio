import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#hero"
            className="text-lg font-bold text-gray-900 tracking-tight hover:text-accent-600 transition-colors"
          >
            Prathap<span className="text-accent-600">.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-accent-600 rounded-lg hover:bg-accent-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#resume"
              className="ml-3 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-accent-600 hover:bg-accent-700 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#resume"
            onClick={closeMenu}
            className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-accent-600 hover:bg-accent-700 rounded-lg transition-colors mt-2"
          >
            <Download size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
