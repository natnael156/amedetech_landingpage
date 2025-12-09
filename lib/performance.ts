// Core Web Vitals tracking
export function reportWebVitals(metric: any) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric)
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
      non_interaction: true,
    })
  }
}

// Performance marks for custom measurements
export function markPerformance(name: string) {
  if (typeof window !== 'undefined' && window.performance) {
    window.performance.mark(name)
  }
}

export function measurePerformance(name: string, startMark: string, endMark: string) {
  if (typeof window !== 'undefined' && window.performance) {
    try {
      window.performance.measure(name, startMark, endMark)
      const measure = window.performance.getEntriesByName(name)[0]
      console.log(`${name}: ${measure.duration}ms`)
      return measure.duration
    } catch (error) {
      console.warn('Performance measurement failed:', error)
      return null
    }
  }
  return null
}

// Preload critical resources
export function preloadResource(href: string, as: string) {
  if (typeof document !== 'undefined') {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    document.head.appendChild(link)
  }
}

// Check if user prefers reduced data
export function prefersReducedData(): boolean {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection
    return (
      connection?.saveData ||
      connection?.effectiveType === 'slow-2g' ||
      connection?.effectiveType === '2g'
    )
  }
  return false
}
