import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mushfiqur Rahaman - Technical Product Manager',
    short_name: 'Mushfiqur Rahaman',
    description: 'Technical Product Manager specializing in Agritech, Aquatech, and Energy Efficiency solutions. Expert in IoT, SaaS, ERP systems, and SDG-aligned product development.',
    start_url: 'https://meetmushfiq.com/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'technology'],
    lang: 'en',
    orientation: 'portrait-primary',
    scope: '/',
  }
}
