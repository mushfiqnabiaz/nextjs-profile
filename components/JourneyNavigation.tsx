'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Briefcase, GraduationCap, Award, BookOpen } from 'lucide-react'

const JourneyNavigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Professional Experience')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const journeySections = [
    {
      id: 'experience',
      title: 'Professional Experience',
      icon: Briefcase,
      description: 'Work experience and career progression'
    },
    {
      id: 'education',
      title: 'Education',
      icon: GraduationCap,
      description: 'Academic background and qualifications'
    },
    {
      id: 'training',
      title: 'Training & Certifications',
      icon: Award,
      description: 'Professional development and certifications'
    },
    {
      id: 'research',
      title: 'Research',
      icon: BookOpen,
      description: 'Academic research and publications'
    }
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const scrollToSection = (sectionId: string, title: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate offset to account for fixed navigation
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      
      setActiveSection(title)
      setIsOpen(false)
      
      // Track navigation clicks
      if (typeof window !== 'undefined' && window.trackInteraction) {
        window.trackInteraction('journey_navigation', 'click', sectionId)
      }
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full max-w-md bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200"
      >
        <div className="flex items-center">
          <Briefcase className="w-5 h-5 text-primary-600 mr-3" />
          <span className="text-gray-900 font-medium">{activeSection}</span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="py-2">
            {journeySections.map((section) => {
              const IconComponent = section.icon
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id, section.title)}
                  className="w-full flex items-start px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <IconComponent className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 font-medium text-sm">{section.title}</div>
                    <div className="text-gray-500 text-xs mt-1">{section.description}</div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default JourneyNavigation
