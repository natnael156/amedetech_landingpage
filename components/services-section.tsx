'use client'

import { motion } from 'framer-motion'
import type { ServicesSectionProps } from '@/types'
import { AnimationWrapper } from './animation-wrapper'
import { useScrollAnimation } from '@/lib/hooks/use-scroll-animation'
import { trackSectionView } from '@/lib/analytics'
import { useEffect } from 'react'

export function ServicesSection({
  services,
  sectionTitle,
  sectionDescription,
}: ServicesSectionProps) {
  const { ref, isInView } = useScrollAnimation()

  useEffect(() => {
    if (isInView) {
      trackSectionView('services')
    }
  }, [isInView])

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950 overflow-hidden"
    >
      {/* Web3 Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimationWrapper animation="slideUp">
          <div className="text-center mb-20">
            {/* Web3 Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm text-cyan-300 font-medium">Our Services</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                {sectionTitle}
              </span>
            </h2>
            {sectionDescription && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {sectionDescription}
              </p>
            )}
          </div>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimationWrapper
              key={service.id}
              animation="slideUp"
              delay={index * 0.1}
            >
              <motion.div
                className="group relative h-full cursor-pointer"
                whileHover={{ y: -12, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              >
                {/* Animated Glow Effect on Hover */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-500"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/20 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/20 rounded-br-2xl" />
                  
                  {/* Icon with Glow */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative text-6xl bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-cyan-500/20 inline-block">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-cyan-300 group-hover:to-blue-300 transition-all">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-gray-300 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="relative mr-3 mt-1">
                          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-sm opacity-50 group-hover/item:opacity-100 transition-opacity" />
                          <svg
                            className="relative w-5 h-5 text-cyan-400 group-hover/item:text-cyan-300 transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm group-hover/item:text-white transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Interactive Hover Effect - Ripple */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-purple-500/5"
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
