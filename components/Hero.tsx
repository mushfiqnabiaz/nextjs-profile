'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Target, Zap, Users } from 'lucide-react'
import { useState, useEffect } from 'react'
import DownloadCV from './DownloadCV'

const Hero = () => {
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0)
  
  const positions = [
    'Technical Product Manager',
    'Agritech Specialist',
    'Aquatech Expert',
    'IoT Solutions Architect',
    'Energy Efficiency Consultant',
    'SDG Innovation Leader',
    'Cross-Functional Team Lead',
    'SaaS Product Strategist'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPositionIndex((prevIndex) => 
        prevIndex === positions.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [positions.length])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      
      // Track CTA clicks
      if (typeof window !== 'undefined' && window.trackEvent) {
        window.trackEvent('hero_cta_clicked', {
          cta_type: 'learn_more',
          cta_text: 'Learn More About Me',
          section: 'hero'
        })
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16 animated-bg relative">
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
        <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Mushfiqur Rahaman
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 mb-8 h-8 flex items-center justify-center">
                <motion.span
                  key={currentPositionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="gradient-text font-semibold position-text"
                >
                  {positions[currentPositionIndex]}
                </motion.span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                Agritech • Aquatech • Energy Efficiency • IoT • SaaS • SDG-Aligned Products
              </p>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Specializing in Agritech, Aquatech, and Energy Efficiency solutions that align with 
              UN Sustainable Development Goals. Building practical, sustainable solutions for agriculture 
              and aquaculture while driving innovation and business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Target className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">SDG Alignment</h3>
              <p className="text-sm text-gray-600 text-center">
                Products designed to address global challenges and create sustainable impact
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Zap className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Technical Excellence</h3>
              <p className="text-sm text-gray-600 text-center">
                Deep technical understanding across ERP, SaaS, IoT, and embedded systems
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <Users className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Cross-Functional Leadership</h3>
              <p className="text-sm text-gray-600 text-center">
                Leading diverse teams to deliver products that matter
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToAbout}
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </button>
            <DownloadCV 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              variant="button"
            />
            <a
              href="#contact"
              onClick={() => {
                if (typeof window !== 'undefined' && window.trackEvent) {
                  window.trackEvent('hero_cta_clicked', {
                    cta_type: 'contact',
                    cta_text: 'Get In Touch',
                    section: 'hero'
                  })
                }
              }}
              className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              Get In Touch
            </a>
          </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16"
            >
              <button
                onClick={scrollToAbout}
                className="text-gray-400 hover:text-primary-600 transition-colors duration-200"
              >
                <ArrowDown className="w-6 h-6 mx-auto animate-bounce" />
              </button>
            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
