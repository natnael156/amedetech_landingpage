import { MetadataRoute } from 'next'
import { siteMetadata } from '@/config/content'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: `${siteMetadata.url}/sitemap.xml`,
  }
}
