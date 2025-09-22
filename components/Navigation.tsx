'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Briefcase, GraduationCap, Award, BookOpen, Target, FileText } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [journeyDropdownOpen, setJourneyDropdownOpen] = useState(false)
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false)
  const journeyDropdownRef = useRef<HTMLDivElement>(null)
  const projectsDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (journeyDropdownRef.current && !journeyDropdownRef.current.contains(event.target as Node)) {
        setJourneyDropdownOpen(false)
      }
      if (projectsDropdownRef.current && !projectsDropdownRef.current.contains(event.target as Node)) {
        setProjectsDropdownOpen(false)
      }
    }

    if (journeyDropdownOpen || projectsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [journeyDropdownOpen, projectsDropdownOpen])

      const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '/blog' },
        // { name: 'SDG Impact', href: '#sdg' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
      ]

      const journeySections = [
        { name: 'Professional Experience', href: '#experience', icon: Briefcase },
        { name: 'Education', href: '#education', icon: GraduationCap },
        { name: 'Training & Certifications', href: '#training', icon: Award },
        { name: 'Research', href: '#research', icon: BookOpen },
      ]

      const projectSections = [
        { name: 'All Projects', href: '/projects', icon: Target },
      ]

    const scrollToSection = (href: string) => {
      // Check if it's a page link (starts with /) or a section link (starts with #)
      if (href.startsWith('/')) {
        // Navigate to page
        window.location.href = href
        
        // Track navigation clicks
        if (typeof window !== 'undefined' && window.trackInteraction) {
          window.trackInteraction('navigation_link', 'click', href.replace('/', ''))
        }
      } else {
        // For section links, first navigate to home page if not already there
        if (window.location.pathname !== '/') {
          window.location.href = `/${href}`
        } else {
          // Scroll to section on home page
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
        
        // Track navigation clicks
        if (typeof window !== 'undefined' && window.trackInteraction) {
          window.trackInteraction('navigation_link', 'click', href.replace('#', ''))
        }
      }
      setIsOpen(false)
      setJourneyDropdownOpen(false)
      setProjectsDropdownOpen(false)
    }

  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50 transition-all duration-200"
      >
        Skip to main content
      </a>
      
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`} role="navigation" aria-label="Main navigation">
      <div className="container-max-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 px-4 pt-4">
            <button 
              onClick={() => scrollToSection('/')}
              className="relative focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 rounded-lg"
            >
        <span className="text-4xl font-bold text-gray-900 logo-animation signature-logo typewriter-text" style={{ transform: 'rotate(-2deg)' }}>
          Mushfiq
        </span>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 logo-underline"></div>
            </button>
          </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {/* Home */}
                <button
                  onClick={() => scrollToSection('/')}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </button>
                
                {/* About */}
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  About
                </button>
                
                {/* Journey Dropdown */}
                <div 
                  className="relative" 
                  ref={journeyDropdownRef}
                  onMouseEnter={() => setJourneyDropdownOpen(true)}
                  onMouseLeave={() => setJourneyDropdownOpen(false)}
                >
                  <button
                    onClick={() => setJourneyDropdownOpen(!journeyDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Journey
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      journeyDropdownOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {journeyDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="py-2">
                        {journeySections.map((section) => {
                          const IconComponent = section.icon
                          return (
                            <button
                              key={section.href}
                              onClick={() => scrollToSection(section.href)}
                              className="w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                              <IconComponent className="w-4 h-4 text-primary-600 mr-3" />
                              <span className="text-gray-900 text-sm">{section.name}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Projects Dropdown */}
                <div 
                  className="relative" 
                  ref={projectsDropdownRef}
                  onMouseEnter={() => setProjectsDropdownOpen(true)}
                  onMouseLeave={() => setProjectsDropdownOpen(false)}
                >
                  <div className="flex items-center">
                    <button
                      onClick={() => scrollToSection('#projects')}
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      Projects
                    </button>
                    <button
                      onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                      className="text-gray-700 hover:text-primary-600 px-1 py-2 transition-colors duration-200"
                      aria-label="Toggle projects dropdown"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        projectsDropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                  </div>

                  {projectsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                      <div className="py-2">
                        {projectSections.map((section) => {
                          const IconComponent = section.icon
                          return (
                            <button
                              key={section.href}
                              onClick={() => scrollToSection(section.href)}
                              className="w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                              <IconComponent className="w-4 h-4 text-primary-600 mr-3" />
                              <span className="text-gray-900 text-sm">{section.name}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Rest of navigation items */}
                {navItems.slice(2).map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* CV Download Button */}
                <button
                  onClick={() => {
                    // Track download event
                    if (typeof window !== 'undefined' && window.trackEvent) {
                      window.trackEvent('cv_download_clicked', {
                        file_name: 'Mushfiqur_Rahaman_CV.pdf',
                        section: 'navigation',
                        timestamp: new Date().toISOString()
                      })
                    }
                    
                    // Create download link
                    const link = document.createElement('a')
                    link.href = '/Mushfiqur_Rahaman_CV.pdf'
                    link.download = 'Mushfiqur_Rahaman_CV.pdf'
                    link.target = '_blank'
                    link.rel = 'noopener noreferrer'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                  className="flex items-center space-x-1 bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                  aria-label="Download CV - Mushfiqur_Rahaman_CV.pdf"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </button>
              </div>
            </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
                {/* Home */}
                <button
                  onClick={() => scrollToSection('/')}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  Home
                </button>
                
                {/* About */}
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                >
                  About
                </button>
                
                {/* Journey Section in Mobile */}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Journey
                  </div>
                  {journeySections.map((section) => {
                    const IconComponent = section.icon
                    return (
                      <button
                        key={section.href}
                        onClick={() => scrollToSection(section.href)}
                        className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                      >
                        <IconComponent className="w-4 h-4 text-primary-600 mr-3" />
                        {section.name}
                      </button>
                    )
                  })}
                </div>
                
                {/* Projects Section in Mobile */}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Projects
                  </div>
                  {/* Main Projects Button */}
                  <button
                    onClick={() => scrollToSection('#projects')}
                    className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                  >
                    <Target className="w-4 h-4 text-primary-600 mr-3" />
                    Projects
                  </button>
                  {projectSections.map((section) => {
                    const IconComponent = section.icon
                    return (
                      <button
                        key={section.href}
                        onClick={() => scrollToSection(section.href)}
                        className="flex items-center text-gray-700 hover:text-primary-600 px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                      >
                        <IconComponent className="w-4 h-4 text-primary-600 mr-3" />
                        {section.name}
                      </button>
                    )
                  })}
                </div>
                
                {/* Rest of navigation items */}
                {navItems.slice(2).map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                ))}
                
                {/* CV Download Button - Mobile */}
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <button
                    onClick={() => {
                      // Track download event
                      if (typeof window !== 'undefined' && window.trackEvent) {
                        window.trackEvent('cv_download_clicked', {
                          file_name: 'Mushfiqur_Rahaman_CV.pdf',
                          section: 'navigation_mobile',
                          timestamp: new Date().toISOString()
                        })
                      }
                      
                      // Create download link
                      const link = document.createElement('a')
                      link.href = '/Mushfiqur_Rahaman_CV.pdf'
                      link.download = 'Mushfiqur_Rahaman_CV.pdf'
                      link.target = '_blank'
                      link.rel = 'noopener noreferrer'
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                      
                      // Close mobile menu after download
                      setIsOpen(false)
                    }}
                    className="flex items-center space-x-2 bg-primary-600 text-white hover:bg-primary-700 block px-4 py-3 text-base font-semibold w-full text-center transition-all duration-200 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105"
                    aria-label="Download CV - Mushfiqur_Rahaman_CV.pdf"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          )}
      </div>
    </nav>
    </>
  )
}

export default Navigation
