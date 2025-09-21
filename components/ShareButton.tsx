'use client'

import { useState } from 'react'
import { Share2, Facebook, Linkedin, Twitter, Link, Mail, Copy, Check } from 'lucide-react'

interface ShareButtonProps {
  title: string
  url: string
  description?: string
}

const ShareButton = ({ title, url, description }: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(fullUrl)
  const encodedDescription = encodeURIComponent(description || '')

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
  }

  const handleShare = (platform: string) => {
    if (platform === 'copy') {
      navigator.clipboard.writeText(fullUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return
    }

    const shareUrl = shareLinks[platform as keyof typeof shareLinks]
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
    
    // Track sharing events
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('blog_share', {
        platform: platform,
        post_title: title,
        post_url: url,
        section: 'blog'
      })
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: fullUrl,
        })
        
        // Track native share
        if (typeof window !== 'undefined' && window.trackEvent) {
          window.trackEvent('blog_share', {
            platform: 'native',
            post_title: title,
            post_url: url,
            section: 'blog'
          })
        }
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback to copy link
      handleShare('copy')
    }
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-200"
      >
        <Share2 className="w-4 h-4 mr-2" />
        Share
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Share Menu */}
          <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Share this article</h3>
              
              {/* Native Share (Mobile) */}
              {typeof window !== 'undefined' && navigator.share && (
                <button
                  onClick={handleNativeShare}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 mb-2"
                >
                  <Share2 className="w-4 h-4 mr-3" />
                  Share via...
                </button>
              )}

              {/* Social Media Links */}
              <div className="space-y-1">
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4 mr-3 text-blue-600" />
                  Share on Facebook
                </button>
                
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 mr-3 text-blue-700" />
                  Share on LinkedIn
                </button>
                
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4 mr-3 text-blue-400" />
                  Share on Twitter
                </button>
                
                <button
                  onClick={() => handleShare('email')}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-3 text-gray-600" />
                  Share via Email
                </button>
                
                <button
                  onClick={() => handleShare('copy')}
                  className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-3 text-green-600" />
                      Link copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-3 text-gray-600" />
                      Copy link
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ShareButton
