'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const SDGShowcase = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const sdgImages = [
    { 
      src: '/sdg/E-WEB-Goal-09.png', 
      alt: 'SDG 9 - Industry, Innovation and Infrastructure',
      title: 'Industry, Innovation & Infrastructure',
      number: 'SDG 9'
    },
    { 
      src: '/sdg/E-WEB-Goal-11.png', 
      alt: 'SDG 11 - Sustainable Cities and Communities',
      title: 'Sustainable Cities & Communities',
      number: 'SDG 11'
    },
    { 
      src: '/sdg/E-WEB-Goal-12.png', 
      alt: 'SDG 12 - Responsible Consumption and Production',
      title: 'Responsible Consumption & Production',
      number: 'SDG 12'
    },
    { 
      src: '/sdg/E-WEB-Goal-13.png', 
      alt: 'SDG 13 - Climate Action',
      title: 'Climate Action',
      number: 'SDG 13'
    },
    { 
      src: '/sdg/E-WEB-Goal-14.png', 
      alt: 'SDG 14 - Life Below Water',
      title: 'Life Below Water',
      number: 'SDG 14'
    },
    { 
      src: '/sdg/E-WEB-Goal-15.png', 
      alt: 'SDG 15 - Life on Land',
      title: 'Life on Land',
      number: 'SDG 15'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-white animated-bg relative">
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Driving Impact Through SDGs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Committed to innovation, sustainability, and environmental impact through the SDGs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-nowrap justify-center items-center gap-2 md:gap-3 overflow-x-auto"
        >
          {/* Animated background particles */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-200 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
          {sdgImages.map((sdg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -10, y: 50 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                rotate: 0, 
                y: 0 
              } : { 
                opacity: 0, 
                scale: 0.8, 
                rotate: -10, 
                y: 50 
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + index * 0.15,
                type: "spring",
                stiffness: 120,
                damping: 12
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { 
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300
                }
              }}
              whileTap={{ 
                scale: 0.9,
                rotate: 0
              }}
              className="relative group flex items-center space-x-2 flex-shrink-0"
            >
              {/* SDG Image */}
              <motion.div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                animate={{
                  boxShadow: [
                    "0 10px 25px rgba(0,0,0,0.1)",
                    "0 15px 35px rgba(59, 130, 246, 0.3)",
                    "0 20px 40px rgba(59, 130, 246, 0.4)",
                    "0 15px 35px rgba(59, 130, 246, 0.3)",
                    "0 10px 25px rgba(0,0,0,0.1)"
                  ],
                  rotateY: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.1,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src={sdg.src}
                    alt={sdg.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              
              {/* SDG Name */}
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.8 }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1 
                } : { 
                  opacity: 0, 
                  x: -20, 
                  scale: 0.8 
                }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  x: 5,
                  transition: { duration: 0.2 }
                }}
                className="hidden lg:block"
              >
                <motion.div 
                  className="text-xs font-semibold text-gray-900 mb-1"
                  animate={{
                    color: ["#111827", "#3b82f6", "#111827"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {sdg.number}
                </motion.div>
                <motion.div 
                  className="text-xs text-gray-600 max-w-24 leading-tight"
                  animate={{
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {sdg.title}
                </motion.div>
              </motion.div>
              
              {/* Animated overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-primary-800/0 group-hover:from-primary-600/20 group-hover:to-primary-800/30 transition-all duration-300 rounded-lg"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(59, 130, 246, 0) 0%, rgba(30, 64, 175, 0) 100%)",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 64, 175, 0.15) 100%)",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0) 0%, rgba(30, 64, 175, 0) 100%)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.4
                }}
                whileHover={{
                  background: [
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(30, 64, 175, 0.3) 100%)",
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(30, 64, 175, 0.4) 100%)"
                  ]
                }}
              />
              
              {/* Enhanced floating animation */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 2.5 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 pointer-events-none"
              />
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 20px 5px rgba(59, 130, 246, 0.1)",
                    "0 0 0 0 rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SDGShowcase
