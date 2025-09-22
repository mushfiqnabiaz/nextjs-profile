'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'

// Google Analytics gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

const Analytics = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.gtag = function() {
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', 'G-RJJRTWHZNB', {
        page_title: document.title,
        page_location: window.location.href,
      })
    }

    // Initialize PostHog if not already initialized
    if (typeof window !== 'undefined' && !window.posthog) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,
        person_profiles: 'identified_only',
        capture_pageview: false,
        capture_pageleave: true,
        loaded: function(posthog) {
          // Identify user with comprehensive portfolio information
          const userEmail = 'hello@meetmushfiq.com';
          if (userEmail) {
            posthog.identify(userEmail, {
              email: userEmail,
              name: 'Mushfiqur Rahaman',
              role: 'Technical Product Manager',
              location: 'Dhaka, Bangladesh',
              website: 'https://meetmushfiq.com',
              expertise: ['Agritech', 'Aquatech', 'Energy Efficiency', 'IoT', 'SaaS'],
              experience_years: 5,
              education: 'B.Sc Computer Science & Engineering',
              certifications: ['Big Data & Data Science', 'Management Professionals', 'Mobile App Development'],
              current_company: 'Celloscope Limited',
              previous_companies: ['Aqualink Bangladesh Limited', 'Mensa Digiworld'],
              skills: ['Product Management', 'IoT', 'SaaS', 'ERP', 'SDG Alignment', 'Team Leadership']
            });
          }
        }
      });
    }

    // Set up global tracking functions
    if (typeof window !== 'undefined' && window.posthog) {
      // Track page views
      const trackPageView = (url: string) => {
        // PostHog tracking
        window.posthog.capture('$pageview', {
          $current_url: url,
          page_title: document.title,
          referrer: document.referrer,
        })
        
        // Google Analytics tracking
        if (window.gtag) {
          window.gtag('config', 'G-RJJRTWHZNB', {
            page_title: document.title,
            page_location: url,
          })
        }
      }

      // Track custom events
      const trackEvent = (eventName: string, properties?: Record<string, any>) => {
        // PostHog tracking
        window.posthog.capture(eventName, {
          ...properties,
          page_url: window.location.href,
          page_title: document.title,
          timestamp: new Date().toISOString(),
        })
        
        // Google Analytics tracking
        if (window.gtag) {
          window.gtag('event', eventName, {
            ...properties,
            page_title: document.title,
            page_location: window.location.href,
          })
        }
      }

      // Track user interactions
      const trackInteraction = (element: string, action: string, section?: string) => {
        window.posthog.capture('portfolio_interaction', {
          element,
          action,
          section,
          page_url: window.location.href,
          page_title: document.title,
          timestamp: new Date().toISOString(),
        })
      }

      // Track portfolio-specific events
      const trackPortfolioEvent = (eventType: string, details?: Record<string, any>) => {
        window.posthog.capture('portfolio_event', {
          event_type: eventType,
          ...details,
          page_url: window.location.href,
          page_title: document.title,
          timestamp: new Date().toISOString(),
        })
      }

      // Make functions available globally for other components
      window.trackPageView = trackPageView
      window.trackEvent = trackEvent
      window.trackInteraction = trackInteraction
      window.trackPortfolioEvent = trackPortfolioEvent

      // Track initial page view
      trackPageView(window.location.href)
    }
  }, [])

  // Track page changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      
      // PostHog tracking
      if (window.posthog) {
        window.posthog.capture('$pageview', {
          $current_url: url,
          page_title: document.title,
          referrer: document.referrer,
        })
      }
      
      // Google Analytics tracking
      if (window.gtag) {
        window.gtag('config', 'G-RJJRTWHZNB', {
          page_title: document.title,
          page_location: window.location.origin + url,
        })
      }
    }
  }, [pathname, searchParams])

  return null // This component doesn't render anything
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    posthog: {
      capture: (event: string, properties?: Record<string, any>) => void
      identify: (distinctId: string, properties?: Record<string, any>) => void
      alias: (alias: string) => void
      reset: () => void
      isFeatureEnabled: (flag: string) => boolean
      getFeatureFlag: (flag: string) => any
      onFeatureFlags: (callback: () => void) => void
    }
    trackPageView: (url: string) => void
    trackEvent: (eventName: string, properties?: Record<string, any>) => void
    trackInteraction: (element: string, action: string, section?: string) => void
    trackPortfolioEvent: (eventType: string, details?: Record<string, any>) => void
  }
}

export default Analytics
