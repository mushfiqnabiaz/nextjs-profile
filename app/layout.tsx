import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationWrapper from '@/components/NavigationWrapper'
import StructuredData from '@/components/StructuredData'
import AnalyticsWrapper from '@/components/AnalyticsWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://meetmushfiq.com'),
  title: {
    default: 'Mushfiqur Rahaman | Technical Product Manager | Agritech & Aquatech Expert',
    template: '%s | Mushfiqur Rahaman'
  },
  description: 'Technical Product Manager with 5+ years experience in Agritech, Aquatech, and Energy Efficiency solutions. Expert in IoT, SaaS, ERP systems, and SDG-aligned product development. Based in Dhaka, Bangladesh.',
  keywords: [
    'Product Manager',
    'Technical Product Manager', 
    'Agritech',
    'Aquatech',
    'Energy Efficiency',
    'IoT Product Management',
    'SaaS Product Manager',
    'ERP Systems',
    'Embedded Systems',
    'SDG Product Development',
    'Sustainable Technology',
    'Bangladesh Product Manager',
    'Dhaka Product Manager',
    'Machine Learning Product Manager',
    'Data Science Product Manager',
    'Mobile App Development',
    'Project Management',
    'Agile Product Management',
    'Cross-functional Leadership',
    'Product Strategy',
    'User Experience Design',
    'Market Research',
    'Product Roadmap',
    'Stakeholder Management'
  ],
  authors: [{ 
    name: 'Mushfiqur Rahaman',
    url: 'https://meetmushfiq.com'
  }],
  creator: 'Mushfiqur Rahaman',
  publisher: 'Mushfiqur Rahaman',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://meetmushfiq.com',
    siteName: 'Mushfiqur Rahaman Portfolio',
    title: 'Mushfiqur Rahaman | Technical Product Manager | Agritech & Aquatech Expert',
    description: 'Technical Product Manager with 5+ years experience in Agritech, Aquatech, and Energy Efficiency solutions. Expert in IoT, SaaS, ERP systems, and SDG-aligned product development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mushfiqur Rahaman - Technical Product Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mushfiqur_pm',
    creator: '@mushfiqur_pm',
    title: 'Mushfiqur Rahaman | Technical Product Manager | Agritech & Aquatech Expert',
    description: 'Technical Product Manager with 5+ years experience in Agritech, Aquatech, and Energy Efficiency solutions.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://meetmushfiq.com',
  },
  category: 'Technology',
  classification: 'Product Management Portfolio',
  other: {
    'geo.region': 'BD-DH',
    'geo.placename': 'Dhaka',
    'geo.position': '23.8103;90.4125',
    'ICBM': '23.8103, 90.4125',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <AnalyticsWrapper />
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#6366f1" />
        <script 
          src="https://platform.linkedin.com/badges/js/profile.js" 
          async 
          defer 
          type="text/javascript"
        ></script>
      </head>
      <body className={inter.className}>
        <NavigationWrapper />
        <main role="main">{children}</main>
      </body>
    </html>
  )
}
