import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const mailto = `mailto:bricenikenoumimipo@gmail.com?subject=${encodeURIComponent(subject || `Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get In Touch</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want
            to say hi, my inbox is always open!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="bg-gray-900/60 border border-gray-800/60 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:bricenikenoumimipo@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-indigo-400" />
                  </div>
                  bricenikenoumimipo@gmail.com
                </a>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-indigo-400" />
                  </div>
                  +33 07 51 03 41 70
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-indigo-400" />
                  </div>
                  Le Mans, France
                </div>
              </div>
            </div>

            <div className="bg-gray-900/60 border border-gray-800/60 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">Follow me</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/brice-noumi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/brice-noumi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-gray-900/60 border border-gray-800/60 rounded-2xl p-6">
            <h3 className="text-white font-semibold mb-6">Send a message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-gray-800/60 border border-gray-700/60 text-gray-200 placeholder-gray-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1.5 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-gray-800/60 border border-gray-700/60 text-gray-200 placeholder-gray-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is it about?"
                  className="w-full bg-gray-800/60 border border-gray-700/60 text-gray-200 placeholder-gray-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full bg-gray-800/60 border border-gray-700/60 text-gray-200 placeholder-gray-600 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-colors resize-none"
                />
              </div>

              {status === 'sent' && (
                <p className="text-green-400 text-sm">
                  Message sent! Your email client should have opened.
                </p>
              )}

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-indigo-500/20"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
