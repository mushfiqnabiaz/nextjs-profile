'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { useEffect } from 'react'

// Extend Window interface for LinkedIn
declare global {
  interface Window {
    LI: {
      parse: () => void
    }
  }
}

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    // Initialize LinkedIn badge after component mounts
    const initLinkedInBadge = () => {
      if (typeof window !== 'undefined' && window.LI) {
        window.LI.parse()
      }
    }

    // Try to initialize immediately
    initLinkedInBadge()

    // Also try after a short delay to ensure script is loaded
    const timer = setTimeout(initLinkedInBadge, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-max-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mushfiqur Rahaman</h3>
            <p className="text-gray-400 leading-relaxed">
              Product Manager passionate about building practical, sustainable solutions 
              for agriculture and aquaculture that create positive impact while driving business success.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#journey" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Journey
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Focus Areas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Agritech Product Management</li>
              <li>Aquatech Solutions</li>
              <li>Energy Efficiency</li>
              <li>IoT & Embedded Systems</li>
              <li>SDG-Aligned Products</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
            <div 
              className="badge-base LI-profile-badge" 
              data-locale="en_US" 
              data-size="medium" 
              data-theme="light" 
              data-type="VERTICAL" 
              data-vanity="mushfiqur-r" 
              data-version="v1"
            >
              <a 
                className="badge-base__link LI-simple-link" 
                href="https://bd.linkedin.com/in/mushfiqur-r?trk=profile-badge"
                target="_blank"
                rel="noopener noreferrer"
              >
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for a better future</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to top</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6 text-center text-gray-400">
          <p>&copy; 2024 Mushfiqur Rahaman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
