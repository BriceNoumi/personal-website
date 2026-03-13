import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-glow pointer-events-none" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I&apos;m{' '}
          <span className="text-gradient">Brice Noumi</span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Fullstack Developer
          <span className="text-indigo-400"> (Java / Angular)</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Engineering graduate from ENSIM, passionate about building modern web applications.
          Experienced with Java, Spring Boot, Angular and cloud-native solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/25"
          >
            View My Work
          </a>
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 px-8 py-3.5 border border-gray-700 hover:border-indigo-500/50 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/brice-noumi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/brice-noumi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:bricenikenoumimipo@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors duration-200"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hover:text-indigo-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
