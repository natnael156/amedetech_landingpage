'use client'

import { useEffect, useRef } from 'react'

interface OptimizedVideoProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
}

export function OptimizedVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  controls = false,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (autoPlay) {
              video.play().catch((error) => {
                console.warn('Video autoplay failed:', error)
              })
            }
          } else {
            if (autoPlay) {
              video.pause()
            }
          }
        })
      },
      { threshold: 0.25 }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [autoPlay])

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
