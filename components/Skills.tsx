'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Users, 
  Target, 
  BarChart3, 
  Zap,
  Shield,
  Globe,
  Cpu,
  Wifi
} from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Product Management",
      icon: Target,
      color: "bg-blue-50 text-blue-600",
      skills: [
        { name: "Product Strategy", level: 95 },
        { name: "Roadmap Planning", level: 90 },
        { name: "User Research", level: 85 },
        { name: "Market Analysis", level: 88 },
        { name: "Go-to-Market", level: 82 },
        { name: "Stakeholder Management", level: 92 }
      ]
    },
    {
      title: "Technical Skills",
      icon: Code,
      color: "bg-green-50 text-green-600",
      skills: [
        { name: "Full-Stack Development", level: 80 },
        { name: "Cloud Architecture", level: 85 },
        { name: "API Design", level: 88 },
        { name: "Database Design", level: 82 },
        { name: "DevOps & CI/CD", level: 75 },
        { name: "System Architecture", level: 87 }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: Wifi,
      color: "bg-purple-50 text-purple-600",
      skills: [
        { name: "IoT Platform Development", level: 90 },
        { name: "Sensor Integration", level: 85 },
        { name: "Edge Computing", level: 80 },
        { name: "Hardware Prototyping", level: 75 },
        { name: "Firmware Development", level: 70 },
        { name: "Device Management", level: 88 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: BarChart3,
      color: "bg-orange-50 text-orange-600",
      skills: [
        { name: "Data Analysis", level: 85 },
        { name: "Machine Learning", level: 80 },
        { name: "Business Intelligence", level: 88 },
        { name: "A/B Testing", level: 90 },
        { name: "Metrics & KPIs", level: 92 },
        { name: "Predictive Analytics", level: 78 }
      ]
    },
    {
      title: "Domain Expertise",
      icon: Globe,
      color: "bg-teal-50 text-teal-600",
      skills: [
        { name: "Agritech", level: 95 },
        { name: "Aquatech", level: 90 },
        { name: "Energy Efficiency", level: 88 },
        { name: "SaaS Platforms", level: 85 },
        { name: "SDG Alignment", level: 95 },
        { name: "Sustainability", level: 87 }
      ]
    },
    {
      title: "Leadership & Collaboration",
      icon: Users,
      color: "bg-pink-50 text-pink-600",
      skills: [
        { name: "Cross-functional Leadership", level: 92 },
        { name: "Agile Methodologies", level: 90 },
        { name: "Team Building", level: 88 },
        { name: "Conflict Resolution", level: 85 },
        { name: "Mentoring", level: 87 },
        { name: "Public Speaking", level: 82 }
      ]
    }
  ]

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "Arduino", category: "IoT" },
    { name: "Raspberry Pi", category: "IoT" },
    { name: "MQTT", category: "IoT" },
    { name: "SAP", category: "ERP" },
    { name: "Oracle", category: "ERP" },
    { name: "Figma", category: "Design" },
    { name: "Jira", category: "PM Tools" },
    { name: "Confluence", category: "PM Tools" }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max-width section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning product management, technical development, 
            and domain expertise across IoT, SaaS, Healthtech, and Agrotech industries.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.1 }}
                        className="bg-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technologies & Tools
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                className="bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-200 rounded-lg p-4 text-center transition-all duration-200 cursor-pointer"
              >
                <div className="text-sm font-medium text-gray-900 mb-1">{tech.name}</div>
                <div className="text-xs text-gray-500">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
            <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-yellow-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Certified PM</h4>
            <p className="text-sm text-gray-600">Certified Scrum Product Owner (CSPO)</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">AWS Certified</h4>
            <p className="text-sm text-gray-600">Solutions Architect Associate</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">IoT Specialist</h4>
            <p className="text-sm text-gray-600">IoT Product Management Certification</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
