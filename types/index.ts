// Component Props Types
export interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage?: string
  backgroundVideo?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface ServicesSectionProps {
  services: Service[]
  sectionTitle: string
  sectionDescription?: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  highlight?: boolean
}

export interface FeaturesGridProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating?: number
}

export interface TestimonialsProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  interval?: number
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
  consent: boolean
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>
  showCompanyField?: boolean
  submitButtonText?: string
}

export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export interface NavigationProps {
  logo: string
  links: NavLink[]
  ctaButton?: {
    text: string
    href: string
  }
}

export interface SocialLink {
  platform: string
  url: string
  icon: React.ReactNode
}

export interface FooterProps {
  companyName: string
  description: string
  socialLinks: SocialLink[]
  legalLinks: NavLink[]
}

// Animation Types
export type AnimationType = 'fadeIn' | 'slideUp' | 'slideIn' | 'scale'

export interface AnimationWrapperProps {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  once?: boolean
}

// Theme Types
export type Theme = 'light' | 'dark' | 'system'

export interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

// Analytics Types
export interface AnalyticsEvent {
  category: 'engagement' | 'conversion' | 'navigation'
  action: string
  label?: string
  value?: number
}

// API Types
export interface ContactRequest {
  name: string
  email: string
  company?: string
  message: string
  honeypot?: string
}

export interface ContactResponse {
  success: boolean
  message: string
  error?: string
}

export interface SubscribeRequest {
  email: string
}

export interface SubscribeResponse {
  success: boolean
  message: string
}
