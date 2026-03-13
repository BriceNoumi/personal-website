import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800/60 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-lg">
          <Code2 size={20} />
          <span className="text-gradient">Brice Noumi</span>
        </div>

        <p className="text-gray-600 text-sm flex items-center gap-1.5">
          &copy; {year} Brice Noumi — Built with{' '}
          <Heart size={13} className="text-pink-500" fill="currentColor" />
          using React & Tailwind CSS
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/brice-noumi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-white transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/brice-noumi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:bricenikenoumimipo@gmail.com"
            aria-label="Email"
            className="text-gray-500 hover:text-indigo-400 transition-colors duration-200"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
