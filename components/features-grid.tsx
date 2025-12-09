'use client'

import { motion } from 'framer-motion'
import type { FeaturesGridProps } from '@/types'
import { AnimationWrapper } from './animation-wrapper'
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation'
import { trackSectionView } from '@/lib/analytics'
import { useEffect, useState } from 'react'

// Generate particles data once to avoid hydration mismatch
const generateParticles = () => {
  return [...Array(15)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  }))
}

export function FeaturesGrid({ features, columns = 3 }: FeaturesGridProps) {
  const { ref, isInView } = useScrollAnimation()
  const [particles, setParticles] = useState<ReturnType<typeof generateParticles>>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (isInView) {
      trackSectionView('features')
    }
  }, [isInView])
  
  useEffect(() => {
    setParticles(generateParticles())
    setIsMounted(true)
  }, [])

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 overflow-hidden"
    >
      {/* Web3 Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Animated Particles */}
        {isMounted && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-sm text-purple-300 font-medium">Why Choose Us</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Why Choose Amede Tech
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical excellence with business understanding to
              deliver solutions that drive real results.
            </p>
          </div>
        </AnimationWrapper>

        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
          {features.map((feature, index) => (
            <AnimationWrapper
              key={feature.id}
              animation="scale"
              delay={index * 0.1}
            >
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                role="article"
                aria-label={feature.title}
              >
                {feature.highlight ? (
                  // Highlighted Card - Premium Design
                  <>
                    {/* Animated Border */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition duration-500 animate-pulse" />
                    
                    <div className="relative h-full bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-xl rounded-2xl p-8 border-2 border-purple-400/50">
                      {/* Premium Badge */}
                      <div className="absolute -top-3 -right-3">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-md" />
                          <span className="relative inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900">
                            ⭐ POPULAR
                          </span>
                        </div>
                      </div>
                      
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur-xl opacity-50" />
                        <div className="relative text-5xl bg-gradient-to-br from-purple-800 to-pink-800 rounded-xl p-4 inline-block border border-purple-400/30">
                          {feature.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {feature.title}
                      </h3>
                      <p className="text-purple-100">
                        {feature.description}
                      </p>
                      
                      {/* Decorative Elements */}
                      <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-purple-400/20 rounded-full" />
                      <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-pink-400/20 rounded-full" />
                    </div>
                  </>
                ) : (
                  // Standard Card - Glassmorphism
                  <>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                    
                    <div className="relative h-full bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                      {/* Corner Accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/20 rounded-tr-2xl" />
                      
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
                        <div className="relative text-5xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 inline-block border border-cyan-500/20">
                          {feature.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-cyan-300 group-hover:to-blue-300 transition-all">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {feature.description}
                      </p>
                      
                      {/* Hover Indicator */}
                      <motion.div
                        className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
