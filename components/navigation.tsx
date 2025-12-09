'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { navigationLinks, ctaButton } from '@/config/content'
import { trackNavClick, trackCTAClick } from '@/lib/analytics'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'services', 'features', 'testimonials', 'contact']
      const scrollPosition = window.scrollY + 100

      // Check if at top of page (home section)
      if (window.scrollY < 300) {
        setActiveSection('#')
        return
      }

      // Find which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId === 'home' ? '#' : `#${sectionId}`)
            return
          }
        }
      }
    }

    handleScroll() // Initial check
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (label: string) => {
    trackNavClick(label)
    setIsMobileMenuOpen(false)
  }

  const handleCTAClick = () => {
    trackCTAClick('header_cta')
    setIsMobileMenuOpen(false)
  }

  const isActive = (href: string) => {
    if (href === '#') {
      return activeSection === '' || activeSection === '#'
    }
    return activeSection === href
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-950/90 backdrop-blur-md shadow-lg shadow-cyan-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 outline-none rounded-lg px-2"
            onClick={() => handleNavClick('logo')}
          >
            Amede Tech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 transition-colors outline-none ${
                  isActive(link.href)
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
                onClick={() => handleNavClick(link.label)}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href={ctaButton.href}
              className="ml-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2 rounded-lg transition-all outline-none"
              onClick={handleCTAClick}
            >
              {ctaButton.text}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-800 outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-6 bg-gray-100 transition-transform ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-100 transition-opacity ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-100 transition-transform ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-950 border-t border-cyan-500/20"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative block px-4 py-3 rounded-lg transition-all outline-none ${
                    isActive(link.href)
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-cyan-400'
                  }`}
                  onClick={() => handleNavClick(link.label)}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-r" />
                  )}
                </Link>
              ))}
              <Link
                href={ctaButton.href}
                className="block text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-lg transition-all outline-none"
                onClick={handleCTAClick}
              >
                {ctaButton.text}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
