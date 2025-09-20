import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mushfiqur Rahaman | Product Manager | Agritech & Aquatech Expert',
  description: 'Experienced Product Manager specializing in Agritech, Aquatech, and Energy Efficiency solutions. BSc Computer Science graduate with 4+ years in ERP, SaaS, IoT, and embedded systems.',
  keywords: 'Product Manager, Agritech, Aquatech, Energy Efficiency, IoT, SaaS, ERP, Embedded Systems, SDG, Sustainable Development Goals',
  authors: [{ name: 'Mushfiqur Rahaman' }],
  openGraph: {
    title: 'Mushfiqur Rahaman | Product Manager | Agritech & Aquatech Expert',
    description: 'Experienced Product Manager specializing in Agritech, Aquatech, and Energy Efficiency solutions. BSc Computer Science graduate with 4+ years in ERP, SaaS, IoT, and embedded systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
