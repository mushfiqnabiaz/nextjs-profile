'use client'

import { useState, useEffect } from 'react'
import ConsentModal from './ConsentModal'

interface ConsentState {
  ad_storage: 'granted' | 'denied'
  ad_user_data: 'granted' | 'denied'
  ad_personalization: 'granted' | 'denied'
  analytics_storage: 'granted' | 'denied'
}

interface ConsentPreferences {
  necessary: boolean
  analytics: boolean
  advertising: boolean
  personalization: boolean
}

const ConsentManager = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [consentGiven, setConsentGiven] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Check if consent has been given before
    const hasConsent = localStorage.getItem('consent-given')
    if (hasConsent === 'true') {
      setConsentGiven(true)
      grantAllConsent()
    } else {
      setShowBanner(true)
      // Set default consent state to denied
      setDefaultConsent()
    }
  }, [])

  const setDefaultConsent = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied'
      })
    }
  }

  const grantAllConsent = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
      })
    }
  }

  const handleAcceptAll = () => {
    grantAllConsent()
    localStorage.setItem('consent-given', 'true')
    setConsentGiven(true)
    setShowBanner(false)
  }

  const handleRejectAll = () => {
    // Keep default denied state
    localStorage.setItem('consent-given', 'false')
    setConsentGiven(false)
    setShowBanner(false)
  }

  const handleCustomize = () => {
    setShowModal(true)
  }

  const handleSavePreferences = (preferences: ConsentPreferences) => {
    // Update consent based on preferences
    const consentState = {
      'ad_storage': preferences.advertising ? 'granted' : 'denied',
      'ad_user_data': preferences.advertising ? 'granted' : 'denied',
      'ad_personalization': preferences.personalization ? 'granted' : 'denied',
      'analytics_storage': preferences.analytics ? 'granted' : 'denied'
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', consentState)
    }

    localStorage.setItem('consent-preferences', JSON.stringify(preferences))
    localStorage.setItem('consent-given', 'true')
    setConsentGiven(true)
    setShowBanner(false)
  }

  return (
    <>
      {showBanner && !consentGiven && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Privacy & Cookie Preferences
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, 
                  you consent to our use of cookies. You can manage your preferences at any time.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                <button
                  onClick={handleRejectAll}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                >
                  Reject All
                </button>
                <button
                  onClick={handleCustomize}
                  className="px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200"
                >
                  Customize
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ConsentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAcceptAll={handleAcceptAll}
        onRejectAll={handleRejectAll}
        onSavePreferences={handleSavePreferences}
      />
    </>
  )
}

export default ConsentManager
