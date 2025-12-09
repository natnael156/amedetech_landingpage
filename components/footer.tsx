import Link from 'next/link'
import { footerContent } from '@/config/content'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 text-gray-300 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              {footerContent.companyName}
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              {footerContent.description}
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/natnael-tefera156"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </a>
              
              <a
                href="https://github.com/natnael156"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                  <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-cyan-300 mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></span>
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link
                href="#services"
                className="group flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all mr-0 group-hover:mr-2"></span>
                Services
              </Link>
              <Link
                href="#features"
                className="group flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all mr-0 group-hover:mr-2"></span>
                Features
              </Link>
              <Link
                href="#testimonials"
                className="group flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all mr-0 group-hover:mr-2"></span>
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="group flex items-center text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 transition-all mr-0 group-hover:mr-2"></span>
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-cyan-300 mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></span>
              Get In Touch
            </h4>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Ready to transform your business with innovative technology solutions?
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 border border-cyan-500/30 hover:border-cyan-500/50 rounded-lg text-cyan-400 transition-all group"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent h-px"></div>
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {footerContent.companyName}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-2">
              <span className="text-gray-600">Created by</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                Natnael Tefera
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
