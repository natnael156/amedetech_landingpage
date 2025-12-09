import type {
  HeroSectionProps,
  Service,
  Feature,
  Testimonial,
  NavLink,
  SocialLink,
} from '@/types'

// Navigation Configuration
export const navigationLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const ctaButton = {
  text: 'Get Started',
  href: '#contact',
}

// Hero Section Content
export const heroContent: HeroSectionProps = {
  title: 'Transform Your Business with Cutting-Edge Technology',
  subtitle: '',
  ctaText: 'Start Your Journey',
  ctaLink: '#contact',
}

// About Section Content
export const aboutContent = {
  title: 'About Amede Tech',
  subtitle: 'Transforming Ideas into Digital Reality',
  paragraphs: [
    'Founded on the principles of innovation, quality, and client success, Amede Tech has grown into a trusted technology partner for businesses worldwide. We specialize in creating custom software solutions that are not just functional, but transformative—helping our clients streamline operations, enhance user experiences, and unlock new opportunities for growth.',
    'Our approach combines technical excellence with deep business understanding. We take the time to truly understand your goals, challenges, and vision, then craft solutions that align perfectly with your needs. Whether you\'re a startup looking to build your first product or an established enterprise seeking digital transformation, we bring the expertise, creativity, and dedication needed to make your project a success.',
    'What sets us apart is our commitment to long-term partnerships. We don\'t just deliver projects—we build relationships. Our team stays with you from initial concept through deployment and beyond, providing ongoing support, maintenance, and strategic guidance. With cutting-edge technologies, agile methodologies, and a client-first mindset, we ensure every solution we create is built to last and designed to scale.',
  ],
  stats: [
    { value: '100+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
    { value: '5+', label: 'Years Experience' },
  ],
  whyChooseUs: [
    {
      icon: '🎯',
      title: 'Client-Focused Approach',
      description: 'Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations.',
    },
    {
      icon: '⚡',
      title: 'Fast & Agile Development',
      description: 'Rapid delivery without compromising quality. Our agile methodology ensures you see progress quickly and can adapt as needed.',
    },
    {
      icon: '🔒',
      title: 'Enterprise-Grade Security',
      description: 'Your data is safe with us. We implement industry-leading security practices to protect your applications and information.',
    },
    {
      icon: '💡',
      title: 'Innovative Solutions',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative problem-solving to give you a competitive edge.',
    },
    {
      icon: '🤝',
      title: 'Long-Term Partnership',
      description: 'We\'re not just developers—we\'re your technology partners. We provide ongoing support and strategic guidance beyond launch.',
    },
    {
      icon: '🌐',
      title: 'Modern Tech Stack',
      description: 'Built with the latest technologies and best practices to ensure your solution is scalable, maintainable, and future-proof.',
    },
  ],
}

// Services Content
export const services: Service[] = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description:
      'Tailored software solutions designed to meet your unique business requirements and scale with your growth.',
    icon: '💻',
    features: [
      'Full-stack development',
      'Cloud-native architecture',
      'API integration',
      'Legacy system modernization',
    ],
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    description:
      'High-performance web applications built with modern frameworks for exceptional user experiences.',
    icon: '🌐',
    features: [
      'Responsive design',
      'Progressive Web Apps',
      'Real-time features',
      'SEO optimization',
    ],
  },
  {
    id: 'mobile-solutions',
    title: 'Mobile Solutions',
    description:
      'Native and cross-platform mobile applications that engage users and drive business results.',
    icon: '📱',
    features: [
      'iOS & Android development',
      'Cross-platform solutions',
      'App store optimization',
      'Push notifications',
    ],
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    description:
      'Scalable cloud solutions that ensure reliability, security, and optimal performance.',
    icon: '☁️',
    features: [
      'AWS & Azure expertise',
      'DevOps automation',
      'Microservices architecture',
      'Container orchestration',
    ],
  },
  {
    id: 'consulting',
    title: 'Technology Consulting',
    description:
      'Strategic guidance to help you make informed technology decisions and maximize ROI.',
    icon: '💡',
    features: [
      'Digital transformation',
      'Architecture review',
      'Technology roadmap',
      'Best practices',
    ],
  },
]

// Features Content
export const features: Feature[] = [
  {
    id: 'agile',
    title: 'Agile Development',
    description:
      'Iterative approach with continuous feedback and rapid delivery cycles.',
    icon: '⚡',
    highlight: true,
  },
  {
    id: 'quality',
    title: 'Quality Assurance',
    description:
      'Comprehensive testing strategies ensuring robust and reliable solutions.',
    icon: '✓',
  },
  {
    id: 'security',
    title: 'Security First',
    description:
      'Built-in security measures protecting your data and applications.',
    icon: '🔒',
    highlight: true,
  },
  {
    id: 'scalable',
    title: 'Scalable Architecture',
    description:
      'Solutions designed to grow seamlessly with your business needs.',
    icon: '📈',
  },
  {
    id: 'support',
    title: '24/7 Support',
    description:
      'Round-the-clock technical support ensuring your systems run smoothly.',
    icon: '🛟',
  },
  {
    id: 'innovation',
    title: 'Continuous Innovation',
    description:
      'Staying ahead with the latest technologies and industry best practices.',
    icon: '🚀',
    highlight: true,
  },
]

// Testimonials Content
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'MARC Team',
    role: 'Management',
    company: 'Melkasa Agriculture Center',
    content:
      'We worked with the developer to create a fully developed restaurant management system that streamlined our operations and improved efficiency.',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Hillal Shop',
    role: 'Owner',
    company: 'Hillal Shop',
    content:
      'The fully developed e-commerce website has transformed our business. The platform is user-friendly and has significantly increased our online sales.',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Mario Import Export',
    role: 'Director',
    company: 'Mario Import Export',
    content:
      'Working with this developer was excellent. They delivered a comprehensive solution that perfectly meets our import-export business needs.',
    rating: 5,
  },
]

// Footer Content
export const footerContent = {
  companyName: 'Amede Tech',
  description:
    'Empowering businesses through innovative technology solutions and digital transformation.',
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/natnael-tefera156', icon: null },
    { platform: 'GitHub', url: 'https://github.com/natnael156', icon: null },
  ] as SocialLink[],
}

// SEO Metadata
export const siteMetadata = {
  title: 'Amede Tech - Technology Solutions & Digital Transformation',
  description:
    'Leading technology solutions provider specializing in custom software development, web applications, mobile solutions, and cloud infrastructure.',
  keywords: [
    'software development',
    'web applications',
    'mobile apps',
    'cloud solutions',
    'digital transformation',
    'technology consulting',
    'Amede Tech',
  ],
  ogImage: '/og-image.jpg',
  url: 'https://amede-tech.com',
}
