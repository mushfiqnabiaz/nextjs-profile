'use client'

import { Suspense } from 'react'
import Navigation from './Navigation'

const NavigationWrapper = () => {
  return (
    <Suspense fallback={<div className="h-16 bg-white border-b border-gray-200"></div>}>
      <Navigation />
    </Suspense>
  )
}

export default NavigationWrapper
