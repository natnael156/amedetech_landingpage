'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import type { HeroSectionProps } from '@/types'
import { trackCTAClick } from '@/lib/analytics'
import { staggerContainerVariants, slideUpVariants } from '@/lib/animation-variants'

// Generate particles data once to avoid hydration mismatch
const generateParticles = () => {
  return [...Array(40)].map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    duration: 4 + Math.random() * 4,
    delay: Math.random() * 5,
    color: ['bg-cyan-400', 'bg-blue-400', 'bg-purple-400', 'bg-pink-400'][Math.floor(Math.random() * 4)],
    left: Math.random() * 100,
    top: Math.random() * 100,
    xOffset: Math.random() * 50 - 25,
  }))
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  
  // Generate particles only on client side to avoid hydration mismatch
  const [particles, setParticles] = useState<ReturnType<typeof generateParticles>>([])
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setParticles(generateParticles())
    setIsMounted(true)
  }, [])

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Tech Office Background */}
      <motion.div 
        className="absolute inset-0 bg-[#1a2332]"
        style={{ y }}
      >
        {/* Background Image - Tech Office with Holographic Displays */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)',
          }}
        />
        
        {/* Dark overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-950/85 to-slate-900/90" />
        
        {/* Simulated office environment with holographic elements */}
        <div className="absolute inset-0">
          {/* Floor glow effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cyan-500/10 via-blue-500/5 to-transparent" />
          
          {/* Holographic interface elements */}
          <div className="absolute inset-0 opacity-20">
            {/* Vertical holographic panels */}
            <div className="absolute left-[15%] top-[20%] w-[200px] h-[300px] border-2 border-cyan-400/40 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm" />
            <div className="absolute right-[15%] top-[25%] w-[180px] h-[280px] border-2 border-blue-400/40 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm" />
            
            {/* Floating data visualization */}
            <div className="absolute left-[25%] top-[35%] w-[150px] h-[150px] border border-cyan-400/30 rounded-full">
              <div className="absolute inset-4 border border-cyan-400/40 rounded-full" />
              <div className="absolute inset-8 border border-cyan-400/50 rounded-full" />
            </div>
          </div>
        </div>
        
        {/* Advanced Grid Pattern with Glow */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(6,182,212,0.03)_2px,transparent_2px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,black_40%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_50%,transparent_100%)]" />
        </div>
        
        {/* Holographic Network Connections */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="holo-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="holo-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
            <filter id="holo-glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Holographic connection lines */}
          <motion.path
            d="M200,300 L400,300 L400,450 L700,450"
            stroke="url(#holo-gradient-1)"
            strokeWidth="3"
            fill="none"
            filter="url(#holo-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            d="M1600,350 L1300,350 L1300,500 L1000,500"
            stroke="url(#holo-gradient-2)"
            strokeWidth="3"
            fill="none"
            filter="url(#holo-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 0], opacity: [0, 0.8, 0] }}
            transition={{ duration: 6, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Holographic nodes */}
          {[
            { cx: 400, cy: 300 },
            { cx: 700, cy: 450 },
            { cx: 1300, cy: 350 },
          ].map((node, i) => (
            <motion.circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r="6"
              fill="#06b6d4"
              filter="url(#holo-glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 1, 0.7]
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          ))}
        </svg>
        
        {/* Subtle Floating Data Points */}
        {isMounted && (
          <div className="absolute inset-0">
            {particles.slice(0, 20).map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute bg-cyan-400 rounded-full"
                style={{
                  width: 2,
                  height: 2,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  filter: 'blur(0.5px)',
                  boxShadow: '0 0 10px rgba(6,182,212,0.5)',
                }}
                animate={{
                  y: [0, -60, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        )}
        
        {/* Holographic UI Elements */}
        <div className="absolute inset-0 font-mono overflow-hidden opacity-30">
          {/* Left side holographic display */}
          <motion.div
            className="absolute left-[10%] top-[30%] text-cyan-400 text-xs"
            style={{ textShadow: '0 0 10px rgba(6,182,212,0.8)' }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="border border-cyan-400/40 rounded p-2 bg-cyan-500/5 backdrop-blur-sm">
              <div className="mb-1">SYSTEM STATUS</div>
              <div className="text-[10px] text-cyan-300/70">▸ ONLINE</div>
              <div className="text-[10px] text-cyan-300/70">▸ CONNECTED</div>
            </div>
          </motion.div>
          
          {/* Right side data visualization */}
          <motion.div
            className="absolute right-[12%] top-[35%] text-blue-400 text-xs"
            style={{ textShadow: '0 0 10px rgba(59,130,246,0.8)' }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, delay: 1, repeat: Infinity }}
          >
            <div className="border border-blue-400/40 rounded p-2 bg-blue-500/5 backdrop-blur-sm">
              <div className="mb-1">ANALYTICS</div>
              <div className="text-[10px] text-blue-300/70">█████░░░ 67%</div>
              <div className="text-[10px] text-blue-300/70">███████░ 89%</div>
            </div>
          </motion.div>
          
          {/* Center holographic circle */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-32 h-32 border-2 border-cyan-400/20 rounded-full relative">
              <div className="absolute inset-4 border border-cyan-400/30 rounded-full" />
              <div className="absolute inset-8 border border-cyan-400/40 rounded-full" />
              <motion.div 
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Subtle Ambient Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft cyan glow from left */}
        <motion.div
          className="absolute left-0 top-1/3 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Soft blue glow from right */}
        <motion.div
          className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 60%)',
          }}
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.6, 0.4, 0.6],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Bottom floor glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, transparent 70%)',
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
      
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50" />

      {/* Content with Parallax */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{ opacity }}
      >
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Glowing Badge */}
          <motion.div
            variants={slideUpVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm text-cyan-300 font-medium">Transforming Ideas into Reality</span>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            variants={slideUpVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-200 drop-shadow-2xl">
              {title}
            </span>
          </motion.h1>

          {/* Subtitle with Glow */}
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 0 40px rgba(6,182,212,0.3)',
            }}
            variants={slideUpVariants}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={slideUpVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={ctaLink}
              className="group relative inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
              onClick={() => trackCTAClick('hero_cta')}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <span className="relative z-10">{ctaText}</span>
              <svg className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <Link
              href="#services"
              className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500/60 backdrop-blur-sm transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span>Explore Services</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <div className="flex flex-col items-center text-gray-300">
              <span className="text-sm mb-2">Scroll to explore</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-20" />
    </section>
  )
}
