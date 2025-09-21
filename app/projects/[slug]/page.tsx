import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Users, Target, Zap, Globe, Leaf, Wifi, Thermometer } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

// Project data - in a real app, this would come from a CMS or database
const projects = [
  {
    slug: 'smartfarm-iot-platform',
    title: 'SmartFarm IoT Platform',
    category: 'Agritech',
    description: 'Comprehensive IoT platform for precision agriculture and crop monitoring, directly supporting SDG 2 (Zero Hunger) and SDG 13 (Climate Action).',
    fullDescription: `SmartFarm IoT Platform revolutionizes agricultural practices by providing real-time monitoring and intelligent automation for modern farming operations. This comprehensive solution addresses the critical challenges faced by farmers in optimizing crop yields while minimizing resource consumption and environmental impact.

The platform integrates advanced IoT sensors, machine learning algorithms, and automated control systems to create a smart farming ecosystem that adapts to changing environmental conditions and crop requirements.`,
    image: '/api/placeholder/800/400',
    technologies: ['IoT', 'React', 'Node.js', 'AWS', 'Machine Learning', 'Python', 'TensorFlow', 'MongoDB'],
    sdgGoals: ['SDG 2', 'SDG 13'],
    impact: 'Serving 25K+ farmers with 30% increase in crop yield and 25% reduction in water usage',
    features: [
      'Real-time soil monitoring with pH, moisture, and nutrient level tracking',
      'Advanced weather prediction and climate adaptation algorithms',
      'Automated irrigation and fertilization systems',
      'Crop health analysis using computer vision and AI',
      'Resource optimization through predictive analytics',
      'Mobile app for remote monitoring and control',
      'Integration with existing farm management systems'
    ],
    challenges: [
      'Integrating multiple sensor types and data formats',
      'Ensuring reliable connectivity in rural areas',
      'Developing accurate prediction models for diverse crop types',
      'Managing large-scale data processing and storage',
      'Creating user-friendly interfaces for non-technical farmers'
    ],
    solutions: [
      'Implemented robust data normalization and validation pipelines',
      'Deployed hybrid connectivity solutions (WiFi, LoRaWAN, cellular)',
      'Developed crop-specific machine learning models with 95% accuracy',
      'Built scalable cloud infrastructure with edge computing capabilities',
      'Created intuitive mobile-first design with offline functionality'
    ],
    results: [
      '30% increase in crop yield across all participating farms',
      '25% reduction in water usage through smart irrigation',
      '40% decrease in fertilizer waste and environmental impact',
      '60% reduction in manual monitoring time for farmers',
      '95% user satisfaction rate among early adopters'
    ],
    icon: Leaf,
    color: 'bg-green-50 text-green-600',
    links: {
      live: 'https://play.google.com/store/apps/details?id=com.aqualink.polynet_greenhouse_mobile&hl=en'
    },
    teamSize: '8 members',
    role: 'Product Manager & Technical Lead'
  },
  {
    slug: 'iot-based-water-quality-monitoring-smart-peripheral-control',
    title: 'IoT-Based Water Quality Monitoring & Smart Peripheral Control',
    category: 'Aquatech',
    description: 'Comprehensive IoT solution for continuous water quality monitoring (pH, DO, Ammonia, Temperature) with automated aerator and pump control. Deployed across 8 districts, impacting 30 farmers with 20% energy savings and improved yield rates.',
    fullDescription: `This innovative IoT-based water quality monitoring system revolutionizes aquaculture and agricultural water management by providing continuous, real-time monitoring of critical water parameters. The solution addresses the pressing need for sustainable water management in farming and aquaculture operations, where poor water quality can lead to significant losses in yield and increased mortality rates.

The system combines advanced sensor technology with intelligent automation to maintain optimal water conditions while minimizing energy consumption and environmental impact. By providing both automated control and remote monitoring capabilities, farmers can ensure consistent water quality while reducing operational costs and manual labor requirements.`,
    image: '/api/placeholder/800/400',
    technologies: ['IoT', 'Real-time Monitoring', 'Mobile Dashboard', 'Automated Control', 'Data Analytics', 'Python', 'React Native', 'MQTT'],
    sdgGoals: ['SDG 6', 'SDG 9', 'SDG 12', 'SDG 13'],
    impact: 'Deployed across 8 districts, impacting 30 farmers with 20% energy savings through optimized operations',
    features: [
      '24/7 Real-time water quality monitoring (pH, DO, Ammonia, Temperature)',
      'Smart peripheral control with threshold-based automation',
      'Remote access via mobile/web dashboard with offline capabilities',
      'Up to 20% energy savings through optimized aerator operations',
      'Increased yield & survival rates with stable water conditions',
      'Collaboration with 6 NGOs for sustainable water management',
      'Historical data analysis and trend prediction',
      'Multi-device integration with various aerators and pumps'
    ],
    challenges: [
      'Ensuring sensor accuracy in harsh aquatic environments',
      'Managing power consumption for continuous monitoring',
      'Integrating with diverse existing farm equipment',
      'Providing reliable connectivity in remote rural areas',
      'Training farmers on new technology adoption'
    ],
    solutions: [
      'Developed rugged, waterproof sensors with self-calibration features',
      'Implemented energy-efficient edge computing with solar power options',
      'Created universal adapter system for equipment integration',
      'Deployed hybrid connectivity solutions (LoRaWAN, WiFi, cellular)',
      'Conducted comprehensive training programs with local NGOs'
    ],
    results: [
      '20% reduction in energy consumption through smart automation',
      '35% improvement in fish survival rates',
      '50% reduction in manual monitoring time',
      'Successful deployment across 8 districts',
      'Partnership with 6 NGOs for sustainable practices'
    ],
    icon: Globe,
    color: 'bg-blue-50 text-blue-600',
    links: {
      live: '#',
    },
    teamSize: '12 members',
    role: 'Product Manager & Technical Lead'
  },
  {
    slug: 'energyefficiency-saas-platform',
    title: 'EnergyEfficiency SaaS Platform',
    category: 'SaaS',
    description: 'Enterprise SaaS platform for energy management and efficiency optimization in agricultural and industrial settings, contributing to SDG 7 (Clean Energy) and SDG 13 (Climate Action).',
    fullDescription: `The EnergyEfficiency SaaS Platform is a comprehensive energy management solution designed specifically for agricultural and industrial facilities. This cloud-based platform provides real-time energy monitoring, optimization recommendations, and automated control systems to help organizations reduce their energy consumption and carbon footprint while maintaining operational efficiency.

The platform addresses the growing need for sustainable energy practices in the agricultural sector, where energy costs can represent a significant portion of operational expenses. By providing actionable insights and automated optimization, the platform helps facilities achieve substantial energy savings while contributing to global sustainability goals.`,
    image: '/api/placeholder/800/400',
    technologies: ['React', 'TypeScript', 'PostgreSQL', 'Docker', 'Kubernetes', 'Python', 'TensorFlow', 'AWS'],
    sdgGoals: ['SDG 7', 'SDG 13'],
    impact: 'Enabled 200+ agricultural facilities to reduce energy consumption by 30% on average',
    features: [
      'Real-time energy consumption tracking and analysis',
      'AI-powered efficiency optimization recommendations',
      'Automated control systems for lighting, HVAC, and equipment',
      'Renewable energy integration and management',
      'Comprehensive sustainability reporting and carbon footprint tracking',
      'Predictive maintenance alerts for energy-intensive equipment',
      'Multi-tenant architecture for scalable deployment',
      'Integration with existing building management systems'
    ],
    challenges: [
      'Integrating with diverse energy monitoring systems',
      'Developing accurate energy consumption prediction models',
      'Ensuring data security and compliance with energy regulations',
      'Creating intuitive interfaces for non-technical users',
      'Managing large-scale data processing and storage'
    ],
    solutions: [
      'Built universal API connectors for major energy monitoring systems',
      'Implemented machine learning models with 90% prediction accuracy',
      'Deployed enterprise-grade security with end-to-end encryption',
      'Created role-based dashboards with customizable views',
      'Designed scalable microservices architecture with cloud optimization'
    ],
    results: [
      '30% average reduction in energy consumption across all facilities',
      '25% decrease in energy costs for participating organizations',
      '40% improvement in equipment efficiency through predictive maintenance',
      '50% reduction in carbon footprint for monitored facilities',
      '95% user adoption rate within first 6 months'
    ],
    icon: Zap,
    color: 'bg-yellow-50 text-yellow-600',
    links: {
      live: '#',
    },
    teamSize: '10 members',
    role: 'Product Manager'
  },
  {
    slug: 'iot-based-ac-controlling-with-energy-and-carbon-emission-monitoring',
    title: 'IoT-Based AC Controlling with Energy and Carbon Emission Monitoring',
    category: 'IoT',
    description: 'Smart AC control system with real-time energy monitoring and carbon emission tracking. Deployed at Shwapno (ACI Logistic) and Chillox (Burger Chain) with 15%+ energy savings and 20 tons annual carbon reduction.',
    fullDescription: `The IoT-Based AC Controlling System represents a breakthrough in smart building management, combining advanced IoT technology with real-time energy monitoring and carbon emission tracking. This innovative solution addresses the critical need for energy efficiency in commercial and residential spaces while providing comprehensive sustainability insights.

Developed for major retail chains including Shwapno (ACI Logistic Supershop Chain) and Chillox (Burger Chain), this system optimizes air conditioning usage through intelligent scheduling, real-time monitoring, and predictive analytics. The platform not only reduces energy consumption but also tracks and reports carbon emissions, helping organizations meet their sustainability goals and reduce their environmental footprint.

The system leverages cutting-edge IoT sensors, machine learning algorithms, and cloud-based analytics to provide unprecedented control and insight into cooling system performance. By automating AC operations based on occupancy patterns, weather conditions, and energy consumption data, the system ensures optimal comfort while minimizing energy waste and environmental impact.`,
    image: '/api/placeholder/800/400',
    technologies: ['IoT', 'Real-time Monitoring', 'Energy Analytics', 'Carbon Tracking', 'Smart Scheduling', 'Machine Learning', 'Cloud Computing', 'Mobile App'],
    sdgGoals: ['SDG 7', 'SDG 9', 'SDG 11', 'SDG 12', 'SDG 13'],
    impact: '15%+ energy savings, 20 tons carbon reduction annually, 5-6 months payback period across retail chains',
    features: [
      'Smart scheduling based on occupancy patterns and weather conditions',
      'Real-time energy consumption and carbon emission monitoring',
      'Proactive maintenance alerts and predictive analytics',
      'Remote control via intuitive mobile app and web interface',
      'Comprehensive energy reporting and optimization insights',
      'Equipment lifespan extension through efficient operation',
      'Integration with existing building management systems',
      'Automated temperature and humidity control optimization'
    ],
    challenges: [
      'Integrating with diverse AC systems and building infrastructure',
      'Ensuring accurate energy consumption and carbon emission calculations',
      'Managing real-time data processing from multiple IoT sensors',
      'Providing reliable connectivity in commercial environments',
      'Creating user-friendly interfaces for non-technical users'
    ],
    solutions: [
      'Developed universal integration protocols for major AC manufacturers',
      'Implemented advanced algorithms for precise energy and carbon tracking',
      'Built scalable cloud infrastructure with edge computing capabilities',
      'Deployed hybrid connectivity solutions (WiFi, LoRaWAN, cellular)',
      'Created role-based dashboards with customizable views and alerts'
    ],
    results: [
      '15%+ reduction in energy consumption across all deployed locations',
      '20 tons of annual carbon emission reduction per installation',
      '5-6 months average payback period for energy savings',
      '30% extension in AC equipment lifespan through optimized operation',
      '95% user satisfaction rate among facility managers',
      '40% reduction in maintenance costs through predictive alerts'
    ],
    icon: Wifi,
    color: 'bg-purple-50 text-purple-600',
    links: {
      live: '#',
    },
    teamSize: '12 members',
    role: 'Product Manager & Technical Lead'
  },
  {
    slug: 'polynet-greenhouse-monitor',
    title: 'Polynet Greenhouse Monitor',
    category: 'Agritech',
    description: 'Modern IoT-powered mobile application for efficient greenhouse management. Features real-time monitoring of temperature, humidity, and soil moisture with seamless auto/manual control modes for fans, pumps, lights, and irrigation systems. Available on Google Play Store.',
    fullDescription: `The Polynet Greenhouse Monitor is a modern, IoT-powered mobile application designed for efficient greenhouse management. Developed by Aqualink Bangladesh Ltd, this comprehensive solution addresses the critical challenges faced by modern greenhouse operators in maintaining optimal growing conditions while maximizing resource efficiency and crop yields.

After logging in, users are directed to a user-friendly dashboard where they can select and monitor their greenhouse. The dashboard displays vital environmental data in real-time, including temperature, humidity, and soil moisture levels. Users can seamlessly switch between auto and manual modes for various peripherals such as fans, pumps, lights, and irrigation systems.

The app features a side drawer where users can change the app language to suit their preferences and set custom schedules for peripherals to operate automatically, ensuring crops receive optimal care without constant supervision. Whether managing a small greenhouse or a large agricultural setup, Polynet Greenhouse offers precision, control, and convenience at your fingertips.`,
    image: '/api/placeholder/800/400',
    technologies: ['IoT', 'Real-time Monitoring', 'Automated Control', 'Schedule Management', 'Threshold Control', 'Sequence Automation', 'Machine Learning', 'Cloud Computing', 'Mobile App'],
    sdgGoals: ['SDG 2', 'SDG 9', 'SDG 12', 'SDG 13'],
    impact: 'Optimized greenhouse operations with 25% improvement in crop yield and 30% reduction in resource waste through intelligent automation',
    features: [
      'Real-time monitoring of temperature, humidity, and soil moisture levels',
      'User-friendly dashboard for greenhouse selection and monitoring',
      'Seamless switching between auto and manual control modes',
      'Peripheral control for fans, pumps, lights, and irrigation systems',
      'Custom schedule setting for automatic peripheral operation',
      'Multi-language support with app language preferences',
      'Side drawer navigation for easy access to settings and schedules',
      'Mobile-first design optimized for greenhouse management on-the-go'
    ],
    challenges: [
      'Integrating multiple sensor types and ensuring data accuracy in harsh greenhouse environments',
      'Managing power consumption for continuous monitoring in remote locations',
      'Developing reliable automation sequences for complex greenhouse operations',
      'Ensuring system reliability and minimal downtime for critical growing operations',
      'Creating user-friendly interfaces for non-technical greenhouse operators'
    ],
    solutions: [
      'Developed rugged, weather-resistant sensors with self-calibration and error detection',
      'Implemented energy-efficient edge computing with solar power and battery backup options',
      'Created sophisticated automation engine with fail-safe mechanisms and manual override capabilities',
      'Built redundant systems with automatic failover and remote diagnostics',
      'Designed intuitive mobile-first interface with offline functionality and role-based access'
    ],
    results: [
      '25% improvement in crop yield through optimized growing conditions',
      '30% reduction in resource waste (water, fertilizer, energy) through intelligent automation',
      '40% decrease in manual monitoring time for greenhouse operators',
      '50% reduction in crop loss due to environmental stress or equipment failure',
      '95% user satisfaction rate among greenhouse operators and managers'
    ],
    icon: Thermometer,
    color: 'bg-orange-50 text-orange-600',
    links: {
      live: '#',
    },
    teamSize: '10 members',
    role: 'Product Manager & Technical Lead'
  }
]

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const keywords = [
    project.category,
    ...project.technologies,
    ...project.sdgGoals,
    'IoT',
    'Product Management',
    'Technical Leadership',
    'Agritech',
    'Aquatech',
    'Energy Efficiency',
    'Sustainability',
    'SDG',
    'Machine Learning',
    'Real-time Monitoring',
    'Smart Agriculture',
    'Water Management',
    'Carbon Emission',
    'Energy Analytics'
  ]

  return {
    title: `${project.title} | Product Management Portfolio - Mushfiqur Rahaman`,
    description: project.description,
    keywords: keywords,
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
      title: `${project.title} | Product Management Portfolio`,
      description: project.description,
      type: 'article',
      url: `https://meetmushfiq.com/projects/${project.slug}`,
      siteName: 'Mushfiqur Rahaman - Product Manager',
      locale: 'en_US',
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.category} Project`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Product Management Portfolio`,
      description: project.description,
      creator: '@mushfiqur_rahaman',
      images: [project.image],
    },
    alternates: {
      canonical: `https://meetmushfiq.com/projects/${project.slug}`,
    },
    other: {
      'article:author': 'Mushfiqur Rahaman',
      'article:section': project.category,
      'article:tag': project.technologies.join(', '),
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "author": {
      "@type": "Person",
      "name": "Mushfiqur Rahaman",
      "url": "https://meetmushfiq.com",
      "jobTitle": "Technical Product Manager",
      "worksFor": {
        "@type": "Organization",
        "name": "Independent Consultant"
      }
    },
    "dateCreated": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "url": `https://meetmushfiq.com/projects/${project.slug}`,
    "image": project.image,
    "keywords": project.technologies.join(', '),
    "about": project.sdgGoals,
    "genre": project.category,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "publisher": {
      "@type": "Person",
      "name": "Mushfiqur Rahaman",
      "url": "https://meetmushfiq.com"
    },
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": project.title,
      "description": project.description,
      "applicationCategory": project.category,
      "operatingSystem": "Cross-platform",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container-max-width section-padding">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/#projects"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start space-x-4">
              <div className={`${project.color} p-4 rounded-lg`}>
                <project.icon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
                <p className="text-primary-600 font-semibold text-lg">{project.category}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{project.slug === 'polynet-greenhouse-monitor' ? 'Download App' : 'Live Demo'}</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Team Size</p>
                <p className="font-semibold text-gray-900">{project.teamSize}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Target className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">My Role</p>
                <p className="font-semibold text-gray-900">{project.role}</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">SDG Impact</h3>
            <div className="flex flex-wrap gap-2">
              {project.sdgGoals.map((sdg, index) => (
                <span
                  key={index}
                  className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {sdg}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Impact</h3>
            <p className="text-gray-700 leading-relaxed">{project.impact}</p>
          </div>

          {project.slug === 'polynet-greenhouse-monitor' && (
            <div className="bg-green-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Download the App</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Polynet Greenhouse Monitor is now available on Google Play Store. Download the app to experience 
                real-time greenhouse monitoring and control features on your mobile device.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.aqualink.polynet_greenhouse_mobile&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Download on Google Play</span>
              </a>
            </div>
          )}
        </div>

        {/* Project Description */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{project.fullDescription}</p>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Advantages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges Faced</h2>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{challenge}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Solutions Implemented</h2>
            <ul className="space-y-4">
              {project.solutions.map((solution, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{solution}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
