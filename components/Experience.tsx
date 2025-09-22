'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Calendar, MapPin, Building2, Users, Target, TrendingUp, Info, X } from 'lucide-react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  // Close expanded card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (expandedCard !== null) {
        const target = event.target as Element
        if (!target.closest('.experience-card') && !target.closest('.expanded-details')) {
          setExpandedCard(null)
        }
      }
    }

    if (expandedCard !== null) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [expandedCard])

  const experiences = [
    {
      title: "Product Analyst",
      company: "Celloscope Limited",
      location: "Dhaka, Bangladesh",
      period: "May 2025 - Present",
      type: "Remote",
      description: "Supporting product development and delivery by analyzing user requirements and market data to inform feature prioritization and ensure alignment with business objectives.",
      achievements: [
        "Collaborate with cross-functional teams including design, engineering, and marketing to translate business requirements into actionable product specifications",
        "Participate in Agile ceremonies including sprint planning, stand-ups, and retrospectives, providing data-driven insights for decision-making",
        "Conduct market research and competitive analysis to provide strategic recommendations on product direction",
        "Identify opportunities for growth and optimization through comprehensive data analysis"
      ],
      technologies: ["Product Analysis", "Agile Methodologies", "Market Research", "Data Analysis", "User Stories", "Cross-functional Collaboration"],
      icon: Users
    },
    {
      title: "Product Manager",
      company: "Aqualink Bangladesh Limited",
      location: "Dhaka, Bangladesh",
      period: "July 2024 - Present",
      type: "Full-time",
      description: "Lead product development and delivery, managing a 14-person team to ensure timely release of features and resolution of issues while maintaining high product quality standards.",
      achievements: [
        "Define and execute product roadmap, collaborating closely with design, engineering, and marketing teams",
        "Champion Agile methodologies, driving sprint planning, stand-ups, and retrospectives for continuous improvement",
        "Strategically advise stakeholders on product direction, market trends, and best practices",
        "Ensure alignment with business objectives and customer needs for optimal product outcomes"
      ],
      technologies: ["Product Management", "Agile Methodologies", "Team Leadership", "Stakeholder Management", "Aquatech", "SDG 14"],
      icon: Building2
    },
    {
      title: "Technical Product & Business Analyst",
      company: "Aqualink Bangladesh Limited",
      location: "Dhaka, Bangladesh",
      period: "April 2022 - June 2024",
      type: "Full-time",
      description: "Led multi-disciplinary 11-person team to design, develop, and launch SaaS applications and IoT-enabled industrial web applications.",
      achievements: [
        "Successfully launched 2 SaaS applications and 3 IoT-enabled industrial web applications",
        "Prioritized and resolved 100+ new features and bug fixes across multiple products",
        "Developed and maintained comprehensive product documentation, user stories, and technical specifications",
        "Facilitated Agile ceremonies and provided expert guidance on project management methodologies"
      ],
      technologies: ["SaaS", "IoT", "Industrial Applications", "Agile", "Technical Documentation", "Aquatech", "SDG 14"],
      icon: Target
    },
    {
      title: "Project Coordinator, Software",
      company: "Mensa Digiworld",
      location: "Dhaka, Bangladesh",
      period: "January 2021 - March 2022",
      type: "Full-time",
      description: "Orchestrated seamless execution of digital projects, overseeing planning, execution, and closure phases while aligning with business objectives and exceeding customer expectations.",
      achievements: [
        "Fostered effective communication and alignment among project teams, clients, and external vendors throughout project lifecycles",
        "Spearheaded process optimization initiatives, driving workflow efficiencies and cost reductions",
        "Improved delivery times and enhanced overall operational effectiveness through systematic improvements",
        "Proactively identified and mitigated project risks, safeguarding project progression and stakeholder satisfaction"
      ],
      technologies: ["Project Management", "Digital Solutions", "Process Optimization", "Risk Management", "Stakeholder Communication", "Software Development"],
      icon: TrendingUp
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 lg:border-r border-gray-200" itemScope itemType="https://schema.org/Person">
      <div className="section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A track record of building impactful products across IoT, SaaS, Agritech, 
            and Aquatech domains with a focus on sustainable development goals and 
            cross-functional team leadership.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="experience-card bg-white rounded-lg shadow-sm border border-gray-100 p-6 card-hover"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <exp.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-primary-600 font-semibold mb-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        {exp.company}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                    <button
                      onClick={() => {
                        setExpandedCard(expandedCard === index ? null : index)
                        
                        // Track experience card interactions
                        if (typeof window !== 'undefined' && window.trackEvent) {
                          window.trackEvent('experience_card_interaction', {
                            action: expandedCard === index ? 'close' : 'expand',
                            company: exp.company,
                            position: exp.title,
                            section: 'experience'
                          })
                        }
                      }}
                      className={`ml-4 p-2 rounded-lg transition-all duration-300 ${
                        expandedCard === index 
                          ? 'bg-primary-600 text-white shadow-lg transform scale-110' 
                          : 'bg-primary-100 text-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-lg hover:transform hover:scale-110'
                      }`}
                    >
                      <Info className="w-5 h-5" />
                    </button>
                </div>
              </motion.div>

              {/* Expanded Details Card */}
              {expandedCard === index && (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="expanded-details absolute top-full left-0 right-0 z-50 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Detailed Information</h4>
                    <button
                      onClick={() => setExpandedCard(null)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies & Focus Areas:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
