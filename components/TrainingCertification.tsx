'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Calendar, Building2, FileText } from 'lucide-react'

const TrainingCertification = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const certifications = [
    {
      title: "Big Data, Data Science, and Data Analysis",
      institution: "PeopleNTech Ltd",
      certificateNo: "BASIS264/PNT16/BDAD4/24",
      year: "2023",
      description: "Comprehensive training in big data technologies, data science methodologies, and advanced data analysis techniques.",
      skills: ["Big Data Analytics", "Data Science", "Statistical Analysis", "Machine Learning", "Python", "R"],
      icon: Award,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Advanced Certificate for Management Professionals",
      institution: "Institute of Business Administration (IBA), University of Dhaka",
      certificateNo: "In Progress",
      year: "2025",
      description: "Advanced management training focusing on strategic leadership, business analytics, and professional development.",
      skills: ["Strategic Management", "Leadership", "Business Analytics", "Project Management", "Organizational Behavior"],
      icon: Building2,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Mobile Game and Application Development",
      institution: "ICT Division, Bangladesh",
      certificateNo: "Completed",
      year: "2019",
      description: "Specialized training in mobile application development, game design, and mobile technology implementation.",
      skills: ["Mobile Development", "Game Design", "Android", "iOS", "Unity", "Flutter"],
      icon: FileText,
      color: "bg-purple-50 text-purple-600"
    }
  ]

  return (
    <section id="training" className="py-20 bg-white animated-bg relative">
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="container-max-width section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Training & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development to stay at the forefront of technology and management practices.
          </p>
        </motion.div>

        <div className="space-y-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 card-hover"
            >
              <div className="flex items-start space-x-6">
                <div className={`${cert.color} p-4 rounded-lg flex-shrink-0`}>
                  <cert.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {cert.title}
                      </h3>
                      <div className="flex items-center text-primary-600 font-semibold mb-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        {cert.institution}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4 mt-2 lg:mt-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {cert.year}
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {cert.certificateNo}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Skills & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Commitment to Continuous Learning
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              I believe in the power of continuous learning and professional development. These certifications 
              represent my commitment to staying current with the latest technologies, methodologies, and best 
              practices in product management, data science, and mobile development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrainingCertification
