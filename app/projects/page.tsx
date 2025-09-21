import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Leaf, Globe, Zap, Wifi, Thermometer } from 'lucide-react'
import { StructuredData } from '@/components/StructuredData'

// Project data - in a real app, this would come from a CMS or database
const projects = [
  {
    slug: 'smartfarm-iot-platform',
    title: 'SmartFarm IoT Platform',
    category: 'Agritech',
    description: 'Comprehensive IoT platform for precision agriculture and crop monitoring, directly supporting SDG 2 (Zero Hunger) and SDG 13 (Climate Action).',
    image: '/api/placeholder/600/400',
    technologies: ['IoT', 'React', 'Node.js', 'AWS', 'Machine Learning', 'Python', 'TensorFlow', 'MongoDB'],
    sdgGoals: ['SDG 2', 'SDG 13'],
    impact: 'Serving 25K+ farmers with 30% increase in crop yield and 25% reduction in water usage',
    icon: Leaf,
    color: 'bg-green-50 text-green-600',
    links: {
      live: '#'
    }
  },
  {
    slug: 'iot-based-water-quality-monitoring-smart-peripheral-control',
    title: 'IoT-Based Water Quality Monitoring & Smart Peripheral Control',
    category: 'Aquatech',
    description: 'Comprehensive IoT solution for continuous water quality monitoring (pH, DO, Ammonia, Temperature) with automated aerator and pump control. Deployed across 8 districts, impacting 30 farmers with 20% energy savings and improved yield rates.',
    image: '/api/placeholder/600/400',
    technologies: ['IoT', 'Real-time Monitoring', 'Mobile Dashboard', 'Automated Control', 'Data Analytics', 'Python', 'React Native', 'MQTT'],
    sdgGoals: ['SDG 6', 'SDG 9', 'SDG 12', 'SDG 13'],
    impact: 'Deployed across 8 districts, impacting 30 farmers with 20% energy savings through optimized operations',
    icon: Globe,
    color: 'bg-blue-50 text-blue-600',
    links: {
      live: '#'
    }
  },
  {
    slug: 'energyefficiency-saas-platform',
    title: 'EnergyEfficiency SaaS Platform',
    category: 'SaaS',
    description: 'Enterprise SaaS platform for energy management and efficiency optimization in agricultural and industrial settings, contributing to SDG 7 (Clean Energy) and SDG 13 (Climate Action).',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes', 'Python', 'TensorFlow', 'AWS'],
    sdgGoals: ['SDG 7', 'SDG 13'],
    impact: 'Enabled 200+ agricultural facilities to reduce energy consumption by 30% on average',
    icon: Zap,
    color: 'bg-yellow-50 text-yellow-600',
    links: {
      live: '#'
    }
  },
  {
    slug: 'iot-based-ac-controlling-with-energy-and-carbon-emission-monitoring',
    title: 'IoT-Based AC Controlling with Energy and Carbon Emission Monitoring',
    category: 'IoT',
    description: 'Smart AC control system with real-time energy monitoring and carbon emission tracking. Deployed at Shwapno (ACI Logistic) and Chillox (Burger Chain) with 15%+ energy savings and 20 tons annual carbon reduction.',
    image: '/api/placeholder/600/400',
    technologies: ['IoT', 'Real-time Monitoring', 'Energy Analytics', 'Carbon Tracking', 'Smart Scheduling', 'Machine Learning', 'Cloud Computing', 'Mobile App'],
    sdgGoals: ['SDG 7', 'SDG 9', 'SDG 11', 'SDG 12', 'SDG 13'],
    impact: '15%+ energy savings, 20 tons carbon reduction annually, 5-6 months payback period across retail chains',
    icon: Wifi,
    color: 'bg-purple-50 text-purple-600',
    links: {
      live: '#'
    }
  },
  {
    slug: 'polynet-greenhouse-monitor',
    title: 'Polynet Greenhouse Monitor',
    category: 'Agritech',
    description: 'Modern IoT-powered mobile application for efficient greenhouse management. Features real-time monitoring of temperature, humidity, and soil moisture with seamless auto/manual control modes for fans, pumps, lights, and irrigation systems. Available on Google Play Store.',
    image: '/api/placeholder/600/400',
    technologies: ['IoT', 'Real-time Monitoring', 'Automated Control', 'Schedule Management', 'Threshold Control', 'Sequence Automation', 'Machine Learning', 'Cloud Computing', 'Mobile App'],
    sdgGoals: ['SDG 2', 'SDG 9', 'SDG 12', 'SDG 13'],
    impact: 'Optimized greenhouse operations with 25% improvement in crop yield and 30% reduction in resource waste through intelligent automation',
    icon: Thermometer,
    color: 'bg-orange-50 text-orange-600',
    links: {
      live: 'https://play.google.com/store/apps/details?id=com.aqualink.polynet_greenhouse_mobile&hl=en'
    }
  }
]

export const metadata: Metadata = {
  title: 'Projects | Product Management Portfolio - Mushfiqur Rahaman',
  description: 'Explore my portfolio of impactful IoT, SaaS, and Agritech projects. Each project contributes to UN Sustainable Development Goals and demonstrates expertise in product management and technical leadership.',
  keywords: [
    'Projects',
    'Portfolio',
    'IoT',
    'SaaS',
    'Agritech',
    'Aquatech',
    'Product Management',
    'Technical Leadership',
    'SDG',
    'Sustainability',
    'Machine Learning',
    'Real-time Monitoring',
    'Smart Agriculture',
    'Water Management',
    'Energy Efficiency',
    'Carbon Emission',
    'Greenhouse Monitoring'
  ],
  authors: [{ name: 'Mushfiqur Rahaman' }],
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
    title: 'Projects | Product Management Portfolio - Mushfiqur Rahaman',
    description: 'Explore my portfolio of impactful IoT, SaaS, and Agritech projects. Each project contributes to UN Sustainable Development Goals and demonstrates expertise in product management and technical leadership.',
    type: 'website',
    url: 'https://meetmushfiq.com/projects',
    siteName: 'Mushfiqur Rahaman - Product Manager',
    locale: 'en_US',
    images: [
      {
        url: 'https://meetmushfiq.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mushfiqur Rahaman - Product Management Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Product Management Portfolio - Mushfiqur Rahaman',
    description: 'Explore my portfolio of impactful IoT, SaaS, and Agritech projects. Each project contributes to UN Sustainable Development Goals and demonstrates expertise in product management and technical leadership.',
    creator: '@mushfiqur_rahaman',
    images: ['https://meetmushfiq.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://meetmushfiq.com/projects',
  },
}

// Generate structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Projects Portfolio",
  "description": "A comprehensive collection of IoT, SaaS, and Agritech projects led by Mushfiqur Rahaman, each contributing to UN Sustainable Development Goals.",
  "url": "https://meetmushfiq.com/projects",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": projects.length,
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": `https://meetmushfiq.com/projects/${project.slug}`,
        "image": project.image,
        "about": project.sdgGoals,
        "genre": project.category
      }
    }))
  },
  "author": {
    "@type": "Person",
    "name": "Mushfiqur Rahaman",
    "url": "https://meetmushfiq.com",
    "jobTitle": "Technical Product Manager"
  },
  "publisher": {
    "@type": "Person",
    "name": "Mushfiqur Rahaman",
    "url": "https://meetmushfiq.com"
  }
}

export default function ProjectsPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container-max-width section-padding">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/#projects"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive showcase of impactful products I've led across IoT, SaaS, Healthtech, 
              and Agrotech domains, each contributing to specific UN Sustainable Development Goals.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className={`${project.color} p-3 rounded-lg mr-3`}>
                    <project.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 font-medium text-sm">{project.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Impact:</h4>
                  <p className="text-gray-600 text-xs line-clamp-2">{project.impact}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-primary-600 font-medium text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">SDG Goals:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.sdgGoals.map((sdg, sdgIndex) => (
                      <span
                        key={sdgIndex}
                        className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {sdg}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200 text-center"
                  >
                    View Details
                  </Link>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-3 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
