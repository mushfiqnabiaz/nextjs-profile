'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "B.Sc(Hons) in Computer Science & Engineering",
      institution: "Daffodil Institute of IT",
      location: "Dhaka, Bangladesh",
      year: "2021",
      type: "Bachelor's Degree",
      icon: GraduationCap
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Bhola Govt College",
      location: "Bhola, Bangladesh",
      year: "2017",
      type: "Higher Secondary",
      icon: Award
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Bhola Govt High School",
      location: "Bhola, Bangladesh",
      year: "2015",
      type: "Secondary Education",
      icon: Award
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A strong educational foundation in Computer Science and Engineering, 
            providing the technical knowledge and analytical skills essential for product management.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 p-8 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <edu.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center text-primary-600 font-semibold mb-2">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {edu.institution}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.year}
                      </div>
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                        {edu.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
