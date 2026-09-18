import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { useInView } from '../hooks/useInView';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    title: 'Email',
    value: 'prathap.reddy@example.edu.in',
    href: 'mailto:prathap.reddy@example.edu.in',
    actionText: 'Send an email',
  },
  {
    icon: <LinkedinIcon size={20} />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/prathap-reddy-placeholder',
    href: 'https://linkedin.com',
    actionText: 'Connect on LinkedIn',
  },
  {
    icon: <GithubIcon size={20} />,
    title: 'GitHub',
    value: 'github.com/prathap-reddy-placeholder',
    href: 'https://github.com',
    actionText: 'Follow on GitHub',
  },
  {
    icon: <MapPin size={20} />,
    title: 'Location',
    value: 'Hyderabad, Telangana, India',
    href: '#',
    actionText: 'VNR VJIET Campus',
  },
];

export default function Contact() {
  const [ref, isVisible] = useInView();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
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
              Get in touch
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
              Let's Build Something Together 🚀
            </h2>
            <div className="mt-4 w-16 h-1 bg-accent-600 rounded-full mx-auto" />
            <p className="mt-4 text-gray-500 max-w-lg mx-auto">
              Whether you want to collaborate on an AI project, talk about data science,
              or discuss internship opportunities, I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Contact channels */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-accent-200 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-11 h-11 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-600 group-hover:text-white transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5 break-all">
                      {item.value}
                    </p>
                    <span className="text-xs text-accent-600 group-hover:underline mt-1 inline-block">
                      {item.actionText} →
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick message form */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Send a Direct Message</h3>
              <p className="text-xs text-gray-400 mb-6">
                Fill in the details below to test how workshop attendees can plug in a contact form (e.g. EmailJS, Formspree, or Resend).
              </p>

              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-2xl flex items-center gap-3 text-green-800">
                  <CheckCircle size={24} className="text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Message received!</p>
                    <p className="text-xs text-green-700 mt-0.5">
                      Thank you for testing the workshop message form.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-accent-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-accent-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hi Prathap, I'd like to collaborate on..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-accent-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-all duration-200 shadow-md shadow-accent-600/20 hover:shadow-lg text-sm"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
