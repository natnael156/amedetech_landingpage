import type { AnalyticsEvent } from '@/types'

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Track page views
export const pageview = (url: string) => {
  if (!GA_TRACKING_ID || !window.gtag) return

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// Track custom events
export const event = ({ category, action, label, value }: AnalyticsEvent) => {
  if (!GA_TRACKING_ID || !window.gtag) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Predefined event helpers
export const trackCTAClick = (label: string) => {
  event({
    category: 'engagement',
    action: 'cta_click',
    label,
  })
}

export const trackFormSubmit = (formName: string) => {
  event({
    category: 'conversion',
    action: 'form_submit',
    label: formName,
  })
}

export const trackSectionView = (sectionName: string) => {
  event({
    category: 'navigation',
    action: 'section_view',
    label: sectionName,
  })
}

export const trackNavClick = (linkLabel: string) => {
  event({
    category: 'navigation',
    action: 'nav_click',
    label: linkLabel,
  })
}
