'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Heart, Leaf, Wifi, Stethoscope, Globe, Zap, Thermometer } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "IoT-Based Water Quality Monitoring & Smart Peripheral Control",
      category: "Aquatech",
      description: "Comprehensive IoT solution for continuous water quality monitoring (pH, DO, Ammonia, Temperature) with automated aerator and pump control. Deployed across 8 districts, impacting 30 farmers with 20% energy savings and improved yield rates.",
      image: "/api/placeholder/600/400",
      technologies: ["IoT", "Real-time Monitoring", "Mobile Dashboard", "Automated Control", "Data Analytics"],
      sdgGoals: ["SDG 6", "SDG 9", "SDG 12", "SDG 13"],
      impact: "Deployed across 8 districts, impacting 30 farmers with 20% energy savings through optimized operations",
      features: [
        "24/7 Real-time water quality monitoring (pH, DO, Ammonia, Temperature)",
        "Smart peripheral control with threshold-based automation",
        "Remote access via mobile/web dashboard",
        "Up to 20% energy savings through optimized aerator operations",
        "Increased yield & survival rates with stable water conditions",
        "Collaboration with 6 NGOs for sustainable water management"
      ],
      icon: Globe,
      color: "bg-blue-50 text-blue-600",
      links: {
        live: "https://play.google.com/store/apps/details?id=com.aqualinkbd.aquaculture_wms&hl=en"
      }
    },
    {
      title: "IoT-Based AC Controlling with Energy and Carbon Emission Monitoring",
      category: "IoT",
      description: "Smart AC control system with real-time energy monitoring and carbon emission tracking. Deployed at Shwapno (ACI Logistic) and Chillox (Burger Chain) with 15%+ energy savings and 20 tons annual carbon reduction.",
      image: "/api/placeholder/600/400",
      technologies: ["IoT", "Real-time Monitoring", "Energy Analytics", "Carbon Tracking", "Smart Scheduling"],
      sdgGoals: ["SDG 7", "SDG 9", "SDG 11", "SDG 12", "SDG 13"],
      impact: "15%+ energy savings, 20 tons carbon reduction annually, 5-6 months payback period across retail chains",
      features: [
        "Smart scheduling based on occupancy and weather patterns",
        "Real-time energy consumption and carbon emission monitoring",
        "Proactive maintenance alerts and predictive analytics",
        "Remote control via mobile app and web interface",
        "Comprehensive energy reporting and optimization insights",
        "Equipment lifespan extension through efficient operation"
      ],
      icon: Wifi,
      color: "bg-purple-50 text-purple-600",
      links: {
        live: "#"
      }
    },
    {
      title: "Polynet Greenhouse Monitor",
      category: "Agritech",
      description: "Modern IoT-powered mobile application for efficient greenhouse management. Features real-time monitoring of temperature, humidity, and soil moisture with seamless auto/manual control modes for fans, pumps, lights, and irrigation systems. Available on Google Play Store.",
      image: "/api/placeholder/600/400",
      technologies: ["IoT", "Real-time Monitoring", "Automated Control", "Schedule Management", "Threshold Control", "Sequence Automation"],
      sdgGoals: ["SDG 2", "SDG 9", "SDG 12", "SDG 13"],
      impact: "Optimized greenhouse operations with 25% improvement in crop yield and 30% reduction in resource waste through intelligent automation",
      features: [
        "Real-time temperature, humidity, and soil moisture monitoring",
        "Intelligent peripheral control with schedule-based automation",
        "Threshold-based control with customizable parameters",
        "Sequence automation for complex operational workflows",
        "Remote monitoring and control via mobile/web dashboard",
        "Predictive analytics for optimal growing conditions",
        "Energy-efficient operation with smart resource management"
      ],
      icon: Thermometer,
      color: "bg-orange-50 text-orange-600",
      links: {
        live: "https://play.google.com/store/apps/details?id=com.aqualink.polynet_greenhouse_mobile&hl=en"
      }
    }
  ]

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container-max-width section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of impactful products I&apos;ve led across IoT, SaaS, Healthtech, 
            and Agrotech domains, each contributing to specific UN Sustainable Development Goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 card-hover"
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
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                <ul className="text-gray-600 text-xs space-y-1">
                  {project.features.slice(0, 3).map((feature, fIndex) => (
                    <li key={fIndex} className="line-clamp-1">• {feature}</li>
                  ))}
                  {project.features.length > 3 && (
                    <li className="text-primary-600 font-medium">+{project.features.length - 3} more features</li>
                  )}
                </ul>
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
                <a
                  href={`/projects/${project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.trackEvent) {
                      window.trackEvent('project_view_details', {
                        project_name: project.title,
                        category: project.category,
                        section: 'projects'
                      })
                    }
                  }}
                  className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200 text-center"
                >
                  View Details
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.trackEvent) {
                      window.trackEvent('project_link_clicked', {
                        project_name: project.title,
                        link_type: 'live_demo',
                        category: project.category,
                        section: 'projects'
                      })
                    }
                  }}
                  className="flex items-center justify-center px-3 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/projects"
            className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
            onClick={() => {
              if (typeof window !== 'undefined' && window.trackEvent) {
                window.trackEvent('view_more_projects_clicked', {
                  section: 'projects',
                  source: 'homepage'
                })
              }
            }}
          >
            <span>View More Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
