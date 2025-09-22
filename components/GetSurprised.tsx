'use client'

import { useState } from 'react'
import { Gift, X, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

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
  const [userMessage, setUserMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sendStatus, setSendStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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


  const handleSendMessage = async () => {
    setIsLoading(true)
    setSendStatus('idle')
    setErrorMessage('')

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: 'Product Manager (Get Surprised)',
        from_email: 'portfolio@meetmushfiq.com', // Default email for tracking
        subject: 'Product Manager - Portfolio Request via Get Surprised',
        message: userMessage.trim() || 'User clicked "Get Surprised" but didn\'t leave a message. They\'re interested in connecting about your portfolio.',
        to_email: EMAILJS_CONFIG.toEmail,
        timestamp: new Date().toLocaleString()
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )

      console.log('Email sent successfully:', result.text)
      
      // Track successful email send
      if (typeof window !== 'undefined' && window.trackEvent) {
        window.trackEvent('surprise_message_sent', {
          section: 'get_surprised_modal',
          has_message: userMessage.trim().length > 0,
          message_length: userMessage.trim().length,
          timestamp: new Date().toISOString()
        })
      }

      setSendStatus('success')
      
      // Reset form and close modal after success
      setTimeout(() => {
        setShowModal(false)
        setUserMessage('')
        setSendStatus('idle')
      }, 2000)

    } catch (error) {
      console.error('Email sending failed:', error)
      setSendStatus('error')
      setErrorMessage('Failed to send message. Please try again or contact me directly.')
      
      // Track failed email send
      if (typeof window !== 'undefined' && window.trackEvent) {
        window.trackEvent('surprise_message_failed', {
          section: 'get_surprised_modal',
          error: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        })
      }
    } finally {
      setIsLoading(false)
    }
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
              onClick={() => {
                setShowModal(false)
                setUserMessage('') // Clear message when modal is closed
                setSendStatus('idle') // Reset status
                setErrorMessage('') // Clear error message
              }}
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

              {/* Message Input */}
              <div className="mb-6">
                <label htmlFor="user-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell me about yourself or what you&apos;re looking for:
                </label>
                <textarea
                  id="user-message"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="e.g., I'm a Product Manager at [Company] looking to connect..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                  rows={3}
                />
                <p className="text-xs text-gray-500 mt-1">
                  Optional: Share your role, company, or specific interests
                </p>
              </div>

              {/* Action Button */}
              <div className="space-y-3">
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {sendStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <p className="text-sm text-green-700">
                      Message sent successfully! I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {sendStatus === 'error' && errorMessage && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}

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
