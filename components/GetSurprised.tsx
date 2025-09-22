'use client'

import { useState } from 'react'
import { Gift, X, Mail, Download } from 'lucide-react'

interface GetSurprisedProps {
  className?: string
  variant?: 'button' | 'floating' | 'card'
  size?: 'sm' | 'md' | 'lg'
}

const GetSurprised = ({ 
  className = '', 
  variant = 'button',
  size = 'md'
}: GetSurprisedProps) => {
  const [showModal, setShowModal] = useState(false)

  const handleSurprise = () => {
    // Track surprise button click
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('get_surprised_clicked', {
        variant,
        size,
        timestamp: new Date().toISOString()
      })
    }
    setShowModal(true)
  }

  const handleDownloadCV = () => {
    // Track CV download from surprise modal
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('cv_download_clicked', {
        file_name: 'Mushfiqur_Rahaman_CV.pdf',
        section: 'get_surprised_modal',
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
  }

  const handleEmail = () => {
    // Track email click from surprise modal
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('email_clicked', {
        section: 'get_surprised_modal',
        email: 'lets@meetmushfiq.com',
        timestamp: new Date().toISOString()
      })
    }
    window.location.href = 'mailto:lets@meetmushfiq.com'
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm'
      case 'lg':
        return 'px-8 py-4 text-lg'
      default:
        return 'px-6 py-3 text-base'
    }
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'floating':
        return 'fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl z-40'
      case 'card':
        return 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200'
      default:
        return 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
    }
  }

  return (
    <>
      <button
        onClick={handleSurprise}
        className={`${getVariantClasses()} ${getSizeClasses()} font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${className}`}
        aria-label="Get Surprised - Special message for Product Managers"
      >
        <Gift className="w-5 h-5" />
        <span>Get Surprised</span>
      </button>

      {/* Surprise Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              {/* Gift Icon */}
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                <Gift className="w-8 h-8 text-purple-600" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🎉 Surprise!
              </h2>

              {/* Message */}
              <div className="text-gray-700 mb-6 leading-relaxed">
                <p className="mb-3">
                  <strong>If you are a Product Manager</strong> and you want my portfolio, I&apos;ll give it to you! 
                </p>
                <p className="text-sm text-gray-600">
                  I&apos;m passionate about building products that make a difference and would love to connect with fellow Product Managers.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleDownloadCV}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download My Portfolio</span>
                </button>
                
                <button
                  onClick={handleEmail}
                  className="w-full border border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Let&apos;s Connect</span>
                </button>
              </div>

              {/* Footer */}
              <p className="text-xs text-gray-500 mt-4">
                Available for Product Management opportunities
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GetSurprised
