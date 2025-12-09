'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import type { AnimationWrapperProps } from '@/types'
import { getAnimationVariants } from '@/lib/animation-variants'

export function AnimationWrapper({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  once = true,
}: AnimationWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()

  const variants = getAnimationVariants(animation)

  // If user prefers reduced motion, don't animate
  if (shouldReduceMotion) {
    return <div ref={ref}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}
