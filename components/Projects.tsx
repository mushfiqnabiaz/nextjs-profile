'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Heart, Leaf, Wifi, Stethoscope, Globe, Zap } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "SmartFarm IoT Platform",
      category: "Agritech",
      description: "Comprehensive IoT platform for precision agriculture and crop monitoring, directly supporting SDG 2 (Zero Hunger) and SDG 13 (Climate Action).",
      image: "/api/placeholder/600/400",
      technologies: ["IoT", "React", "Node.js", "AWS", "Machine Learning"],
      sdgGoals: ["SDG 2", "SDG 13"],
      impact: "Serving 25K+ farmers with 30% increase in crop yield and 25% reduction in water usage",
      features: [
        "Real-time soil monitoring",
        "Weather prediction",
        "Crop health analysis",
        "Resource optimization"
      ],
      icon: Leaf,
      color: "bg-green-50 text-green-600",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "AquaMonitor System",
      category: "Aquatech",
      description: "IoT-based water quality monitoring solution for aquaculture that optimizes fish farming while ensuring environmental sustainability, supporting SDG 14 (Life Below Water).",
      image: "/api/placeholder/600/400",
      technologies: ["IoT", "Python", "TensorFlow", "React Native", "Cloud Computing"],
      sdgGoals: ["SDG 14", "SDG 2"],
      impact: "Helped 8K+ fish farmers increase yield by 20% while reducing water pollution by 35%",
      features: [
        "Water quality monitoring",
        "Fish health tracking",
        "Feed optimization",
        "Environmental impact assessment"
      ],
      icon: Globe,
      color: "bg-blue-50 text-blue-600",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "EnergyEfficiency SaaS Platform",
      category: "SaaS",
      description: "Enterprise SaaS platform for energy management and efficiency optimization in agricultural and industrial settings, contributing to SDG 7 (Clean Energy) and SDG 13 (Climate Action).",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "PostgreSQL", "Docker", "Kubernetes"],
      sdgGoals: ["SDG 7", "SDG 13"],
      impact: "Enabled 200+ agricultural facilities to reduce energy consumption by 30% on average",
      features: [
        "Energy consumption tracking",
        "Efficiency optimization",
        "Renewable energy integration",
        "Sustainability reporting"
      ],
      icon: Zap,
      color: "bg-yellow-50 text-yellow-600",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "FarmConnect IoT Network",
      category: "IoT",
      description: "Comprehensive IoT network for agricultural monitoring and automation, supporting SDG 2 (Zero Hunger) and SDG 9 (Industry Innovation).",
      image: "/api/placeholder/600/400",
      technologies: ["IoT", "Edge Computing", "React", "Python", "MongoDB"],
      sdgGoals: ["SDG 2", "SDG 9"],
      impact: "Improved farming efficiency for 12K+ farmers with automated monitoring and control",
      features: [
        "Automated irrigation system",
        "Pest detection and control",
        "Crop monitoring",
        "Weather-based alerts"
      ],
      icon: Wifi,
      color: "bg-purple-50 text-purple-600",
      links: {
        live: "#",
        github: "#"
      }
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
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
            A showcase of impactful products I've led across IoT, SaaS, Healthtech, 
            and Agrotech domains, each contributing to specific UN Sustainable Development Goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden card-hover"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${project.color}`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <span className="text-sm text-gray-600">{project.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">SDG Impact:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.sdgGoals.map((goal, goalIndex) => (
                      <span
                        key={goalIndex}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {goal}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                  <p className="text-gray-700 text-sm">{project.impact}</p>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.links.live}
                    className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
