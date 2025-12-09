import { siteMetadata } from '@/config/content'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Amede Tech',
    url: siteMetadata.url,
    logo: `${siteMetadata.url}/logo.png`,
    description: siteMetadata.description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/company/amede-tech',
      'https://twitter.com/amede_tech',
      'https://github.com/amede-tech',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['English'],
    },
  }
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Amede Tech',
    url: siteMetadata.url,
    description: siteMetadata.description,
    publisher: {
      '@type': 'Organization',
      name: 'Amede Tech',
    },
  }
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Technology Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Amede Tech',
      url: siteMetadata.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Applications',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile Solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud Infrastructure',
          },
        },
      ],
    },
  }
}
