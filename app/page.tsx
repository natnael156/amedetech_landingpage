'use client'

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { FeaturesGrid } from '@/components/features-grid'
import { Testimonials } from '@/components/testimonials'
import { ContactForm } from '@/components/contact-form'
import { Footer } from '@/components/footer'
import { GoogleAnalytics } from '@/components/google-analytics'
import { SkipToContent } from '@/components/skip-to-content'
import {
  heroContent,
  aboutContent,
  services,
  features,
  testimonials,
} from '@/config/content'
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getServiceSchema,
} from '@/lib/structured-data'

export default function Home() {
  return (
    <>
      <SkipToContent />
      <GoogleAnalytics />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebsiteSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getServiceSchema()),
        }}
      />

      <Navigation />
      
      <main id="main-content">
        <HeroSection {...heroContent} />
        
        <AboutSection {...aboutContent} />
        
        <ServicesSection
          services={services}
          sectionTitle="Our Services"
          sectionDescription="Comprehensive technology solutions tailored to your business needs"
        />
        
        <FeaturesGrid features={features} columns={3} />
        
        <Testimonials testimonials={testimonials} autoplay interval={5000} />
        
        <ContactForm />
      </main>
      
      <Footer />
    </>
  )
}
