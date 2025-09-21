'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Heart, Leaf, Zap, Globe, Shield, Scale, Building, Lightbulb } from 'lucide-react'

const SDGImpact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const sdgGoals = [
    {
      number: "SDG 2",
      title: "Zero Hunger",
      description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture",
      icon: Leaf,
      color: "bg-green-500",
      impact: "SmartFarm platform helped 25K+ farmers increase crop yield by 30%",
      projects: ["SmartFarm IoT", "Precision Agriculture", "FarmConnect Network"]
    },
    {
      number: "SDG 7",
      title: "Affordable & Clean Energy",
      description: "Ensure access to affordable, reliable, sustainable and modern energy for all",
      icon: Zap,
      color: "bg-yellow-500",
      impact: "EnergyEfficiency platform helped 200+ facilities reduce energy consumption by 30%",
      projects: ["Energy Management SaaS", "Smart Grid Solutions", "Renewable Energy Integration"]
    },
    {
      number: "SDG 14",
      title: "Life Below Water",
      description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development",
      icon: Globe,
      color: "bg-blue-500",
      impact: "AquaMonitor system helped 8K+ fish farmers reduce water pollution by 35%",
      projects: ["AquaMonitor System", "Water Quality Monitoring", "Sustainable Aquaculture"]
    },
    {
      number: "SDG 9",
      title: "Industry, Innovation & Infrastructure",
      description: "Build resilient infrastructure, promote inclusive and sustainable industrialization",
      icon: Building,
      color: "bg-orange-500",
      impact: "Launched 10+ innovative products across IoT and SaaS domains",
      projects: ["IoT Infrastructure", "Smart Agriculture Solutions", "FarmConnect Network"]
    },
    {
      number: "SDG 13",
      title: "Climate Action",
      description: "Take urgent action to combat climate change and its impacts",
      icon: Globe,
      color: "bg-teal-500",
      impact: "Agricultural monitoring solutions reduced carbon footprint by 25%",
      projects: ["Climate Monitoring IoT", "Sustainability Tracking", "Smart Farming"]
    }
  ]

  const impactMetrics = [
    { label: "Lives Impacted", value: "50K+", icon: Users },
    { label: "SDG Goals Addressed", value: "5", icon: Target },
    { label: "Products Launched", value: "10+", icon: Lightbulb },
    { label: "Carbon Reduction", value: "30%", icon: Shield }
  ]

  return (
    <section id="sdg" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-max-width section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            SDG Impact & Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every product I build is designed with the United Nations Sustainable Development Goals 
            in mind, creating technology solutions that address global challenges while driving business value.
          </p>
        </motion.div>

        {/* Impact Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {impactMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* SDG Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sdgGoals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 card-hover"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg ${goal.color} flex items-center justify-center mr-4`}>
                  <goal.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{goal.number}</h3>
                  <h4 className="text-sm font-semibold text-gray-700">{goal.title}</h4>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {goal.description}
              </p>

              <div className="mb-4">
                <h5 className="font-semibold text-gray-900 mb-2 text-sm">Impact:</h5>
                <p className="text-gray-700 text-sm">{goal.impact}</p>
              </div>

              <div>
                <h5 className="font-semibold text-gray-900 mb-2 text-sm">Related Projects:</h5>
                <div className="space-y-1">
                  {goal.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                      <span className="text-gray-600 text-sm">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I believe that technology has the power to solve the world&apos;s most pressing challenges. 
              As a Technical Product Manager, I&apos;m committed to building products that not only drive 
              business success but also contribute to a more sustainable, equitable, and healthy world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every product decision I make is evaluated through the lens of its potential impact on 
              the UN Sustainable Development Goals, ensuring that innovation serves humanity&apos;s greatest needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SDGImpact
