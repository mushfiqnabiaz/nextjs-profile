'use client'

import { useEffect } from 'react'

interface AdSenseProps {
  adSlot: string
  adFormat?: string
  adStyle?: React.CSSProperties
  className?: string
  fullWidthResponsive?: boolean
}

declare global {
  interface Window {
    adsbygoogle: any[]
  }
}

const AdSense: React.FC<AdSenseProps> = ({
  adSlot,
  adFormat = 'auto',
  adStyle = { display: 'block' },
  className = '',
  fullWidthResponsive = true
}) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={adStyle}
      data-ad-client="ca-pub-5724625538341143"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive.toString()}
    />
  )
}

export default AdSense
