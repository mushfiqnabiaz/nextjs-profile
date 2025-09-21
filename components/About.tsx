'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Globe, Lightbulb, TrendingUp } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Globe, label: "Projects Completed", value: "15+" },
    { icon: Lightbulb, label: "Happy Clients", value: "50+" },
    { icon: TrendingUp, label: "Success Rate", value: "96.00%" },
  ]

  return (
    <section id="about" className="py-20 bg-white animated-bg relative" itemScope itemType="https://schema.org/Person">
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
          className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
              I'm a passionate Technical Product Manager with a unique focus on building 
              practical, sustainable solutions for agriculture and aquaculture that contribute 
              to the United Nations Sustainable Development Goals. With over 5 years of experience 
              in IoT, SaaS, ERP systems, and embedded systems, I specialize in creating 
              SDG-aligned products that drive both business success and positive environmental impact.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                My Mission
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                I believe technology has the power to solve the world's most pressing challenges. 
                As a Product Manager with a BSc in Computer Science from Daffodil Institute of IT, 
                I focus on creating practical, sustainable solutions that not only drive business 
                success but also contribute to a more sustainable and equitable future.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With over four years of experience in ERP, SaaS, IoT, and embedded systems, I 
                specialize in Agritech, Aquatech, and Energy Efficiency. I leverage data-driven 
                insights and cross-functional collaboration to build products that make a real 
                difference in agriculture and aquaculture.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Technical Background</h4>
                <p className="text-gray-600 text-sm">
                  Strong foundation in Computer Science with hands-on experience in 
                  ERP systems, SaaS platforms, IoT solutions, and embedded systems development.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Product Strategy</h4>
                <p className="text-gray-600 text-sm">
                  Expert in market research, user experience design, and go-to-market 
                  strategies for Agritech and Aquatech solutions that align with both 
                  business objectives and sustainable development goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Leadership & Collaboration</h4>
                <p className="text-gray-600 text-sm">
                  Proven track record of leading cross-functional teams and building 
                  partnerships with stakeholders across agriculture, aquaculture, and 
                  energy efficiency domains.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
