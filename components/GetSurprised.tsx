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
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
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
    // Form validation
    if (!userName.trim()) {
      setErrorMessage('Please enter your name.')
      setSendStatus('error')
      return
    }

    if (!userEmail.trim()) {
      setErrorMessage('Please enter your email address.')
      setSendStatus('error')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(userEmail.trim())) {
      setErrorMessage('Please enter a valid email address.')
      setSendStatus('error')
      return
    }

    setIsLoading(true)
    setSendStatus('idle')
    setErrorMessage('')

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: userName.trim(),
        from_email: userEmail.trim(),
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
          user_name: userName.trim(),
          user_email: userEmail.trim(),
          has_message: userMessage.trim().length > 0,
          message_length: userMessage.trim().length,
          timestamp: new Date().toISOString()
        })
      }

      setSendStatus('success')
      
      // Reset form and close modal after success
      setTimeout(() => {
        setShowModal(false)
        setUserName('')
        setUserEmail('')
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
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-4 relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowModal(false)
                setUserName('') // Clear all fields when modal is closed
                setUserEmail('')
                setUserMessage('')
                setSendStatus('idle') // Reset status
                setErrorMessage('') // Clear error message
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="text-center">
              {/* Gift Icon & Title */}
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mr-2">
                  <Gift className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  🎉 Surprise!
                </h2>
              </div>

              {/* Message */}
              <div className="text-gray-700 mb-4 text-sm">
                <p className="mb-2">
                  <strong>Product Manager?</strong> Want my portfolio? Let&apos;s connect!
                </p>
              </div>

              {/* Name and Email Inputs */}
              <div className="mb-4 space-y-3">
                <div>
                  <input
                    type="text"
                    id="user-name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Your Name *"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    id="user-email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="Your Email *"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <textarea
                  id="user-message"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  placeholder="Tell me about yourself (optional)..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                  rows={2}
                />
              </div>

              {/* Action Button */}
              <div className="mb-3">
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {sendStatus === 'success' && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <p className="text-xs text-green-700">
                      Message sent! I&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {sendStatus === 'error' && errorMessage && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <p className="text-xs text-red-700">{errorMessage}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GetSurprised
