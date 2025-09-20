import Hero from '@/components/Hero'
import About from '@/components/About'
import SDGShowcase from '@/components/SDGShowcase'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import SDGImpact from '@/components/SDGImpact'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
          <SDGShowcase />
          
          {/* My Journey Section */}
          <section className="py-16 bg-white">
            <div className="container-max-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  My Journey
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  A path of growth, learning, and impactful contributions across technology and sustainability
                </p>
              </div>
            </div>
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <Experience />
            <Education />
          </div>
          
          {/* Research Section */}
          <section className="py-20 bg-gray-50">
            <div className="container-max-width section-padding">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Research
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Contributing to academic knowledge through innovative research in AI, machine learning, and social impact
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Research Paper 1 */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        A novel approach incorporating feature extraction followed by YOLOv7 for quality enhancement of mangoes in Bangladesh
                      </h3>
                      <p className="text-primary-600 font-medium mb-2">ICCCNT 2024</p>
                      <p className="text-sm text-gray-600">
                        DOI: 10.1109/ICCCNT56998.2023.10307083
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Research Paper 2 */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Empowering Women through Entrepreneurship: Case Study of Slum-Based Enterprises in Dhaka
                      </h3>
                      <p className="text-primary-600 font-medium mb-2">Global Business Conference 2024</p>
                      <p className="text-sm text-gray-600">
                        JGB 18242 - ISSN: 2350-7179
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Research Paper 3 */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        An innovative method for identifying driving weariness in EEG data using a modified machine learning algorithm
                      </h3>
                      <p className="text-primary-600 font-medium mb-2">IOEM 2024</p>
                      <p className="text-sm text-gray-600">
                        DOI: 10.46254/BA07.20240235
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      <Projects />
      {/* <SDGImpact /> */}
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
