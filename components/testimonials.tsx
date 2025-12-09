'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { TestimonialsProps } from '@/types'
import { AnimationWrapper } from './animation-wrapper'
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation'
import { trackSectionView } from '@/lib/analytics'

export function Testimonials({
  testimonials,
  autoplay = true,
  interval = 5000,
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const { ref, isInView } = useScrollAnimation()

  useEffect(() => {
    if (isInView) {
      trackSectionView('testimonials')
    }
  }, [isInView])

  useEffect(() => {
    if (!autoplay || isPaused) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoplay, isPaused, interval, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 overflow-hidden"
    >
      {/* Web3 Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-sm text-blue-300 font-medium">Client Success Stories</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to
              say about working with us.
            </p>
          </div>
        </AnimationWrapper>

        <div
          className="relative max-w-5xl mx-auto"
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
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl opacity-20 blur-2xl" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyan-500/20">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 opacity-10">
                  <svg className="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="flex flex-col items-center text-center relative">
                  {/* Stars */}
                  {testimonials[currentIndex].rating && (
                    <div className="flex gap-1 mb-6">
                      {Array.from({
                        length: testimonials[currentIndex].rating || 5,
                      }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <svg
                            className="w-6 h-6 text-yellow-400 drop-shadow-lg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl text-gray-200 mb-10 leading-relaxed max-w-3xl">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-20" />
                    <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl px-8 py-4 border border-cyan-500/20">
                      <p className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-gray-400 text-sm mt-1">
                        {testimonials[currentIndex].role} at{' '}
                        <span className="text-cyan-400">{testimonials[currentIndex].company}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Web3 Style */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 group"
            aria-label="Previous testimonial"
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
            aria-label="Next testimonial"
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

          {/* Dots Navigation - Web3 Style */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className="relative group"
                aria-label={`Go to testimonial ${index + 1}`}
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
    </section>
  )
}
