'use client'

import { useState } from 'react'
import { X, Check, XCircle } from 'lucide-react'

interface ConsentModalProps {
  isOpen: boolean
  onClose: () => void
  onAcceptAll: () => void
  onRejectAll: () => void
  onSavePreferences: (preferences: ConsentPreferences) => void
}

interface ConsentPreferences {
  necessary: boolean
  analytics: boolean
  advertising: boolean
  personalization: boolean
}

const ConsentModal = ({ isOpen, onClose, onAcceptAll, onRejectAll, onSavePreferences }: ConsentModalProps) => {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true, // Always required
    analytics: false,
    advertising: false,
    personalization: false
  })

  if (!isOpen) return null

  const handlePreferenceChange = (key: keyof ConsentPreferences, value: boolean) => {
    if (key === 'necessary') return // Can't change necessary cookies
    setPreferences(prev => ({ ...prev, [key]: value }))
  }

  const handleSavePreferences = () => {
    onSavePreferences(preferences)
    onClose()
  }

  const cookieTypes = [
    {
      key: 'necessary' as keyof ConsentPreferences,
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cookies cannot be disabled.',
      required: true
    },
    {
      key: 'analytics' as keyof ConsentPreferences,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      required: false
    },
    {
      key: 'advertising' as keyof ConsentPreferences,
      title: 'Advertising Cookies',
      description: 'Used to deliver advertisements more relevant to you and your interests.',
      required: false
    },
    {
      key: 'personalization' as keyof ConsentPreferences,
      title: 'Personalization Cookies',
      description: 'Allow the website to remember choices you make and provide enhanced, more personal features.',
      required: false
    }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-600 mb-6">
            We use cookies to enhance your browsing experience, serve personalized content, 
            and analyze our traffic. Choose your preferences below:
          </p>

          <div className="space-y-4 mb-6">
            {cookieTypes.map((cookie) => (
              <div key={cookie.key} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {cookie.title}
                      {cookie.required && (
                        <span className="ml-2 text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                          Required
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600">{cookie.description}</p>
                  </div>
                  <div className="ml-4">
                    {cookie.required ? (
                      <div className="flex items-center text-green-600">
                        <Check className="w-5 h-5" />
                      </div>
                    ) : (
                      <button
                        onClick={() => handlePreferenceChange(cookie.key, !preferences[cookie.key])}
                        className={`w-10 h-6 rounded-full transition-colors duration-200 flex items-center ${
                          preferences[cookie.key]
                            ? 'bg-primary-600 justify-end'
                            : 'bg-gray-300 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full mx-1"></div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={onRejectAll}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
            >
              Reject All
            </button>
            <button
              onClick={handleSavePreferences}
              className="px-6 py-2 text-sm font-medium text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors duration-200"
            >
              Save Preferences
            </button>
            <button
              onClick={onAcceptAll}
              className="px-6 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsentModal
