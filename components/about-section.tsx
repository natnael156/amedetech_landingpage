'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { AnimationWrapper } from './animation-wrapper'
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation'
import { trackSectionView } from '@/lib/analytics'
import { useEffect, useState } from 'react'

interface AboutStat {
  value: string
  label: string
}

interface WhyChooseItem {
  icon: string
  title: string
  description: string
}

interface AboutSectionProps {
  title: string
  subtitle: string
  paragraphs: string[]
  stats: AboutStat[]
  whyChooseUs: WhyChooseItem[]
}

export function AboutSection({ title, subtitle, paragraphs, stats, whyChooseUs }: AboutSectionProps) {
  const { ref, isInView } = useScrollAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isInView) {
      trackSectionView('about')
    }
  }, [isInView])

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paragraphs.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [isPaused, paragraphs.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + paragraphs.length) % paragraphs.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % paragraphs.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-sm text-cyan-300 font-medium">Who We Are</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                {title}
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </AnimationWrapper>

        {/* Main Content - Carousel Style like Testimonials */}
        <div className="max-w-5xl mx-auto mb-16">
          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-20 blur-2xl" />
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyan-500/20">
                  {/* Paragraph */}
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                    {paragraphs[currentIndex]}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 group"
              aria-label="Previous paragraph"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors">
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 group"
              aria-label="Next paragraph"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-500/60 transition-colors">
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-12 gap-3">
              {paragraphs.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative group"
                  aria-label={`Go to paragraph ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md"
                      layoutId="activeDot"
                    />
                  )}
                  <div
                    className={`relative w-3 h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400 w-10'
                        : 'bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <AnimationWrapper animation="slideUp" delay={0.4}>
            {/* Stats - Clean Floating Design */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="group relative text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.15, 
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {/* Glow Effect Behind Number */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition duration-500"
                  />
                  
                  {/* Value */}
                  <motion.div 
                    className="relative text-5xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-2xl"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    {stat.value}
                  </motion.div>
                  
                  {/* Underline */}
                  <motion.div 
                    className="w-12 h-0.5 mx-auto mb-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Label */}
                  <div className="text-base md:text-lg text-gray-400 font-medium group-hover:text-cyan-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimationWrapper>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-24 max-w-7xl mx-auto">
          <AnimationWrapper animation="slideUp">
            <div className="text-center mb-16">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Why Choose Amede Tech
                </span>
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We combine technical excellence with a client-first approach to deliver exceptional results
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <AnimationWrapper key={index} animation="slideUp" delay={index * 0.1}>
                <motion.div
                  className="group relative"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                  
                  {/* Card */}
                  <div className="relative h-full bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                    {/* Icon */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative text-5xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-3 border border-cyan-500/20">
                          {item.icon}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all">
                        {item.title}
                      </h4>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
