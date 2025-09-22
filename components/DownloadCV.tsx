'use client'

import { Download, FileText } from 'lucide-react'

interface DownloadCVProps {
  className?: string
  variant?: 'button' | 'link' | 'card'
  showIcon?: boolean
  fileName?: string
}

const DownloadCV = ({ 
  className = '', 
  variant = 'button',
  showIcon = true,
  fileName = 'CV_Mushfiqur_Rahaman.pdf'
}: DownloadCVProps) => {
  
  const handleDownload = () => {
    // Track download event
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('cv_download_clicked', {
        file_name: fileName,
        section: 'cv_download',
        timestamp: new Date().toISOString()
      })
    }

    // Create download link
    const link = document.createElement('a')
    link.href = `/${fileName}`
    link.download = fileName
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const baseClasses = "inline-flex items-center justify-center transition-all duration-200 font-medium"
  
  const variantClasses = {
    button: "bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 shadow-lg hover:shadow-xl",
    link: "text-primary-600 hover:text-primary-700 underline decoration-2 underline-offset-2",
    card: "bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-md"
  }

  const iconClasses = {
    button: "w-5 h-5 mr-2",
    link: "w-4 h-4 mr-1",
    card: "w-6 h-6 mr-3 text-primary-600"
  }

  const textClasses = {
    button: "",
    link: "text-sm",
    card: "font-semibold text-gray-900"
  }

  if (variant === 'card') {
    return (
      <button
        onClick={handleDownload}
        className={`${baseClasses} ${variantClasses.card} ${className}`}
        aria-label={`Download CV - ${fileName}`}
      >
        {showIcon && <FileText className={iconClasses.card} />}
        <div className="text-left">
          <div className={textClasses.card}>Download CV</div>
          <div className="text-xs text-gray-500 mt-1">PDF Format</div>
        </div>
        <Download className="w-4 h-4 ml-auto text-gray-400" />
      </button>
    )
  }

  return (
    <button
      onClick={handleDownload}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label={`Download CV - ${fileName}`}
    >
      {showIcon && <Download className={iconClasses[variant]} />}
      <span className={textClasses[variant]}>
        {variant === 'link' ? 'Download CV' : 'Download CV'}
      </span>
    </button>
  )
}

export default DownloadCV
