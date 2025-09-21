export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="w-12 h-12 border-4 border-primary-100 border-t-primary-400 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Portfolio</h2>
        <p className="text-gray-600">Preparing your experience...</p>
      </div>
    </div>
  )
}
