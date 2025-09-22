'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, Facebook, Instagram, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).')
      setIsLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error')
      setErrorMessage('Please enter a valid email address.')
      setIsLoading(false)
      return
    }

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'Portfolio Contact Form',
        message: formData.message,
        to_email: EMAILJS_CONFIG.toEmail,
        reply_to: formData.email
      }

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )

      // Track successful form submission with PostHog
      if (typeof window !== 'undefined' && window.trackEvent) {
        window.trackEvent('contact_form_submitted', {
          form_type: 'contact',
          has_name: !!formData.name,
          has_email: !!formData.email,
          has_subject: !!formData.subject,
          has_message: !!formData.message,
          message_length: formData.message.length,
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString(),
          email_sent: true
        })
      }

      // Also send a manual PostHog event
      if (typeof window !== 'undefined' && window.posthog) {
        window.posthog.capture('portfolio_contact_form', {
          name_provided: !!formData.name,
          email_provided: !!formData.email,
          subject_provided: !!formData.subject,
          message_length: formData.message.length,
          form_completion_time: Date.now(),
          source: 'portfolio_website',
          email_sent: true
        })
      }

      // Success state
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(true)
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setSubmitStatus('idle')
      }, 5000)

    } catch (error) {
      console.error('Email sending failed:', error)
      
      // Track failed form submission with PostHog
      if (typeof window !== 'undefined' && window.trackEvent) {
        window.trackEvent('contact_form_error', {
          form_type: 'contact',
          error_type: 'email_sending_failed',
          error_message: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        })
      }

      // Error state
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try again or contact me directly at lets@meetmushfiq.com')
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "lets@meetmushfiq.com",
      link: "mailto:lets@meetmushfiq.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+8801601917109",
      link: "tel:+8801601917109"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mushfiqur-r/",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/mushfiqnabiaz",
      color: "hover:text-gray-800"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/nabiazr",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/nabiaz_r/",
      color: "hover:text-pink-600"
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-max-width section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I&apos;m always interested in discussing new opportunities, innovative projects, 
            and collaborations that align with sustainable development goals. Let&apos;s build something meaningful together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-200"
                >
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <info.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Phone etiquette message */}
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">Phone Etiquette</h4>
                  <p className="text-sm text-blue-700">
                    Before calling, please send a text message first introducing yourself and the purpose of your call. 
                    This helps me prepare for our conversation and ensures I can give you my full attention.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-lg text-gray-600 transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Available for:</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Full-time Product Management roles
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Consulting on SDG-aligned products
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Speaking engagements on sustainable tech
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  Mentoring aspiring product managers
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || submitStatus === 'success'}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  submitStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : isLoading
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl'
                }`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    <span>Failed to Send</span>
                  </>
                ) : isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Status Messages */}
            {submitStatus === 'error' && errorMessage && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              </div>
            )}

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm text-green-700">
                    Thank you for your message! I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                I typically respond within 24 hours. For urgent matters, please text first before calling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
