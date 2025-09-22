'use client'

import { useEffect } from 'react'

// Extend Window interface for performance
declare global {
  interface PerformanceEntry {
    processingStart?: number
  }
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric)
      }
      
      // Send to analytics in production
      if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
        // Send to Google Analytics
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            event_label: metric.id,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            non_interaction: true,
          })
        }
      }
    }

    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        reportWebVitals({
          name: 'LCP',
          value: lastEntry.startTime,
          id: 'lcp'
        })
      }).observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          if (entry.processingStart !== undefined) {
            reportWebVitals({
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              id: 'fid'
            })
          }
        })
      }).observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        reportWebVitals({
          name: 'CLS',
          value: clsValue,
          id: 'cls'
        })
      }).observe({ entryTypes: ['layout-shift'] })

      // First Contentful Paint (FCP)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        entries.forEach((entry) => {
          reportWebVitals({
            name: 'FCP',
            value: entry.startTime,
            id: 'fcp'
          })
        })
      }).observe({ entryTypes: ['paint'] })
    }

    // Start monitoring when page loads
    if (typeof window !== 'undefined') {
      observeWebVitals()
    }

    // Monitor page load time
    const pageLoadTime = performance.now()
    reportWebVitals({
      name: 'Page Load Time',
      value: pageLoadTime,
      id: 'page-load'
    })

  }, [])

  return null
}

export default PerformanceMonitor
