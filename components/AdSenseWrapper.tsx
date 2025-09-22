'use client'

import AdSense from './AdSense'

interface AdSenseWrapperProps {
  placement: 'header' | 'sidebar' | 'footer' | 'between-content' | 'blog-post'
  className?: string
}

const AdSenseWrapper: React.FC<AdSenseWrapperProps> = ({ placement, className = '' }) => {
  // Different ad slots for different placements
  const getAdSlot = (placement: string): string => {
    switch (placement) {
      case 'header':
        return '1234567890' // Replace with your actual ad slot ID
      case 'sidebar':
        return '1234567891' // Replace with your actual ad slot ID
      case 'footer':
        return '1234567892' // Replace with your actual ad slot ID
      case 'between-content':
        return '1234567893' // Replace with your actual ad slot ID
      case 'blog-post':
        return '1234567894' // Replace with your actual ad slot ID
      default:
        return '1234567890'
    }
  }

  const getAdStyle = (placement: string): React.CSSProperties => {
    switch (placement) {
      case 'header':
        return {
          display: 'block',
          width: '100%',
          maxWidth: '728px',
          height: '90px',
          margin: '0 auto 20px auto'
        }
      case 'sidebar':
        return {
          display: 'block',
          width: '300px',
          height: '250px',
          margin: '0 auto'
        }
      case 'footer':
        return {
          display: 'block',
          width: '100%',
          maxWidth: '728px',
          height: '90px',
          margin: '20px auto 0 auto'
        }
      case 'between-content':
        return {
          display: 'block',
          width: '100%',
          maxWidth: '728px',
          height: '90px',
          margin: '40px auto'
        }
      case 'blog-post':
        return {
          display: 'block',
          width: '100%',
          maxWidth: '728px',
          height: '90px',
          margin: '20px auto'
        }
      default:
        return { display: 'block' }
    }
  }

  return (
    <div className={`ad-wrapper ${className}`}>
      <AdSense
        adSlot={getAdSlot(placement)}
        adStyle={getAdStyle(placement)}
        fullWidthResponsive={true}
        className="ad-container"
      />
    </div>
  )
}

export default AdSenseWrapper
