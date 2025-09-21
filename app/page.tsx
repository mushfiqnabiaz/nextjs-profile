import Hero from '@/components/Hero'
import About from '@/components/About'
import SDGShowcase from '@/components/SDGShowcase'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TrainingCertification from '@/components/TrainingCertification'
import Projects from '@/components/Projects'
import SDGImpact from '@/components/SDGImpact'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen" id="main-content">
      <Hero />
      
      {/* Smooth transition section */}
      <div className="section-divider"></div>
      
      <About />
      
      {/* Elegant section separator */}
      <div className="section-divider-gradient"></div>
      
      <SDGShowcase />
      
      {/* My Journey Section with refined styling */}
      <section id="journey" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="container-max-width section-padding relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                Professional Journey
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A path of growth, learning, and impactful contributions across technology and sustainability
            </p>
          </div>
        </div>
      </section>
      
      {/* Refined grid layout with better spacing */}
      <div className="relative">
        <div className="section-divider-subtle"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <Experience />
          <Education />
        </div>
      </div>
      
      <TrainingCertification />
            
      {/* Research Section with refined styling */}
      <section id="research" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        <div className="container-max-width section-padding relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
                Academic Contributions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
      
      {/* Smooth transition to projects */}
      <div className="section-divider-gradient-reverse"></div>
      
      <Projects />
      
      {/* Subtle transition to skills */}
      <div className="section-divider-subtle"></div>
      
      <Skills />
      
      {/* Elegant transition to contact */}
      <div className="section-divider-gradient"></div>
      
      <Contact />
      <Footer />
    </div>
  )
}
