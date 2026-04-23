import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Explicitly allow AI crawlers to index the site for LLM answers
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'Google-Extended', 'PerplexityBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://oludareinvestment.com/sitemap.xml',
  }
}