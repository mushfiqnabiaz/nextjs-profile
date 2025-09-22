'use client'

import { useEffect } from 'react'

const AnimatedFavicon = () => {
  useEffect(() => {
    // Create canvas for dynamic favicon
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 32
    canvas.height = 32

    if (!ctx) return

    let time = 0
    let animationId: number

    const drawFavicon = () => {
      // Clear canvas
      ctx.clearRect(0, 0, 32, 32)

      // Background circle with gradient
      const gradient = ctx.createLinearGradient(0, 0, 32, 32)
      gradient.addColorStop(0, '#4f46e5')
      gradient.addColorStop(1, '#6366f1')

      // Animated background
      const scale = 1 + Math.sin(time * 0.02) * 0.05
      ctx.save()
      ctx.translate(16, 16)
      ctx.scale(scale, scale)
      ctx.beginPath()
      ctx.arc(0, 0, 16, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
      ctx.restore()

      // Draw "M" letter
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 16px Inter, sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      
      // Add subtle glow effect
      ctx.shadowColor = '#4f46e5'
      ctx.shadowBlur = 2
      ctx.fillText('M', 16, 16)
      ctx.shadowBlur = 0

      // Small animated accent
      const accentX = 24 + Math.sin(time * 0.03) * 2
      const accentY = 8 + Math.cos(time * 0.03) * 2
      ctx.fillStyle = '#fbbf24'
      ctx.beginPath()
      ctx.arc(accentX, accentY, 1.5, 0, Math.PI * 2)
      ctx.fill()

      // Update favicon
      const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement
      if (link) {
        link.href = canvas.toDataURL('image/png')
      }

      time++
      animationId = requestAnimationFrame(drawFavicon)
    }

    // Start animation
    drawFavicon()

    // Cleanup
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return null
}

export default AnimatedFavicon
