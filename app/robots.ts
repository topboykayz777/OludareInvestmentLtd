import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'Google-Extended', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://www.oludareinvestmentltd.com.ng/sitemap.xml',
  }
}