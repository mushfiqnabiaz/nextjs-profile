import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'
import ShareButton from '@/components/ShareButton'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Product Management Blog | Insights on Agritech, IoT & Sustainability - Mushfiqur Rahaman',
  description: 'Explore expert insights on product management, Agritech, Aquatech, IoT solutions, energy efficiency, and sustainable development goals. Learn from real-world experiences and industry best practices.',
  keywords: [
    'Product Management Blog',
    'Agritech Insights',
    'Aquatech Innovation',
    'Energy Efficiency',
    'SDG Product Development',
    'IoT Product Management',
    'Sustainable Technology',
    'Product Strategy',
    'Technical Product Management',
    'Smart Agriculture',
    'Water Management',
    'Carbon Emission',
    'Energy Analytics',
    'Machine Learning',
    'Real-time Monitoring',
    'Blog',
    'Insights',
    'Best Practices',
    'Leadership',
    'Cross-functional Teams'
  ],
  authors: [{ name: 'Mushfiqur Rahaman' }],
  creator: 'Mushfiqur Rahaman',
  publisher: 'Mushfiqur Rahaman',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Product Management Blog | Insights on Agritech, IoT & Sustainability',
    description: 'Explore expert insights on product management, Agritech, Aquatech, IoT solutions, energy efficiency, and sustainable development goals.',
    type: 'website',
    url: 'https://meetmushfiq.com/blog',
    siteName: 'Mushfiqur Rahaman - Product Manager Blog',
    locale: 'en_US',
    images: [
      {
        url: '/api/placeholder/1200/630',
        width: 1200,
        height: 630,
        alt: 'Product Management Blog - Agritech, IoT & Sustainability Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Management Blog | Insights on Agritech, IoT & Sustainability',
    description: 'Explore expert insights on product management, Agritech, Aquatech, IoT solutions, energy efficiency, and sustainable development goals.',
    creator: '@mushfiqur_rahaman',
    images: ['/api/placeholder/1200/630'],
  },
  alternates: {
    canonical: 'https://meetmushfiq.com/blog',
  },
}

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: 'smart-water-management-iot-transforming-aquaculture-agriculture',
    title: 'Smart Water Management: How IoT is Transforming Aquaculture and Agriculture',
    excerpt: 'Discover how IoT-based water quality monitoring and smart peripheral control systems are revolutionizing farming and aquaculture with real-time automation, energy savings, and improved sustainability.',
    content: `# Smart Water Management: How IoT is Transforming Aquaculture and Agriculture

Water is the lifeline of agriculture and aquaculture, but maintaining its quality has always been a challenge. Traditional monitoring methods rely on manual testing, guesswork, and delayed responses, often leading to poor yield, high mortality rates, and energy waste. But what if water quality could be monitored and controlled in real-time, automatically?

This is where IoT-based Water Quality Monitoring & Smart Peripheral Control is revolutionizing the industry. By combining real-time sensor data, automation, and remote access, farmers and aquaculture professionals can optimize water conditions, reduce energy consumption, and improve sustainability—all while increasing yield and profits.

Let's explore how this technology is reshaping the future of aquaculture and farming.

## The Water Quality Crisis in Farming & Aquaculture

Water quality is the single most important factor in aquaculture and irrigation-based farming. If pH, dissolved oxygen (DO), ammonia levels, or temperature deviate from the optimal range, it can cause:

❌ High fish mortality rates in aquaculture  
❌ Reduced crop yields in agriculture  
❌ Unnecessary energy costs from continuous aerator and pump operation  
❌ Increased use of chemical treatments and water wastage  

For years, farmers have relied on manual water testing—an inefficient and outdated approach that often leads to reactive problem-solving rather than proactive management. IoT technology changes this entirely.

## How IoT-Based Water Quality Monitoring Works

With IoT-powered automation, real-time sensors are placed in water bodies (ponds, tanks, irrigation systems) to continuously measure key water parameters like:

✅ **pH Levels** – Prevents water acidity that can harm crops and aquatic species.  
✅ **Dissolved Oxygen (DO)** – Ensures fish survival and prevents suffocation.  
✅ **Ammonia Levels** – Reduces toxic buildup in aquaculture environments.  
✅ **Water Temperature** – Keeps conditions optimal for farming and aquaculture.  

💡 **What's the Game-Changer?** This system automatically adjusts water conditions using smart peripheral controls, such as:

✔ **Aerators** – Activates when oxygen levels drop.  
✔ **Pumps & Motors** – Runs only when needed, reducing energy waste.  
✔ **Remote Manual Control** – Farmers can monitor & adjust settings via a mobile app or web dashboard.  

Instead of relying on manual intervention, the system ensures that water remains at optimal levels 24/7—without human effort.

## Impact & Success Stories

The adoption of IoT-based water management systems has already delivered incredible results:

📍 **Deployed across 8 districts**, benefiting 30 farmers.  
🤝 **Collaboration with 6 NGOs** to support sustainable farming initiatives.  
⚡ **Achieved up to 20% energy savings** by reducing unnecessary aerator and pump usage.  

These numbers highlight real-world efficiency—not just in cost savings but in productivity, sustainability, and yield improvement.

## The Advantages of IoT in Water Management

### 1. Higher Yield & Better Survival Rates

🚀 Stable water quality leads to healthier crops and aquatic life.  
🚀 Automated adjustments prevent fish deaths due to poor oxygen levels.  
🚀 Early detection of water imbalances prevents sudden losses.  

**📌 Example:** If DO levels drop below safe limits, the system instantly activates aerators—preventing fish suffocation and increasing survival rates.

### 2. Energy Savings & Lower Costs

💡 **Up to 20% energy savings** by running aerators and motors only when needed.  
💡 Lower electricity bills and maintenance costs due to smart scheduling.  
💡 Optimized pump operation reduces water wastage.  

**📌 Example:** Instead of running aerators 24/7, the system intelligently activates them only when oxygen levels drop, reducing power consumption significantly.

### 3. Proactive Water Management

✅ Instant alerts notify farmers of any critical changes in water quality.  
✅ Predictive analytics help forecast potential water issues before they occur.  
✅ Historical data tracking allows farmers to optimize long-term management strategies.  

**📌 Example:** Instead of waiting for fish deaths to signal poor water quality, farmers receive real-time alerts before conditions become dangerous.

### 4. Sustainability & Environmental Impact

🌱 Reduces chemical treatments by maintaining optimal conditions naturally.  
🌱 Lowers water waste by ensuring efficient usage.  
🌱 Supports the UN's Sustainable Development Goals (SDGs).  

This technology directly contributes to:

- **SDG 6 (Clean Water & Sanitation)** – Ensuring safe water for farming and aquaculture.
- **SDG 7 (Affordable & Clean Energy)** – Cutting unnecessary electricity use.
- **SDG 9 (Industry, Innovation & Infrastructure)** – Leveraging IoT for smarter agriculture.
- **SDG 12 (Responsible Consumption & Production)** – Minimizing waste and optimizing resources.
- **SDG 13 (Climate Action)** – Reducing carbon emissions by lowering energy consumption.

**📌 Example:** A farmer using this system reduced his electricity costs by 18% while maintaining an optimal fish survival rate of 98%.

## The Future of IoT in Water Management

With climate change, unpredictable weather patterns, and increasing water scarcity, smart water management is no longer optional—it's necessary. As more farmers and aquaculture businesses adopt IoT-driven solutions, we can expect:

🔹 **AI-powered predictive analytics** for water quality forecasting.  
🔹 **Machine learning-driven optimizations** for aerator & pump efficiency.  
🔹 **Integration with solar-powered systems** for 100% clean energy operation.  

This isn't just about technology; it's about reshaping the future of farming and aquaculture with smarter, data-driven decisions.

## Final Thoughts

IoT-based water quality monitoring is more than just automation—it's a revolution. By integrating real-time data, AI-driven automation, and remote accessibility, this system empowers farmers with complete control over their water conditions.

The result?

✅ **Higher yields**  
✅ **Lower energy costs**  
✅ **Better sustainability**  
✅ **Increased profits**  

The future of agriculture and aquaculture is smart, sustainable, and data-driven. IoT water management systems are leading this transformation, helping farmers achieve better results while contributing to global sustainability goals.`,
    author: 'Mushfiqur Rahaman',
    publishedAt: '2024-01-22',
    readTime: '12 min read',
    category: 'IoT',
    tags: ['IoT', 'Water Management', 'Aquaculture', 'Agriculture', 'Sustainability', 'Smart Farming'],
    featured: true,
    image: '/api/placeholder/800/400'
  },
  {
    slug: 'building-sdg-aligned-products-in-agritech',
    title: 'Building SDG-Aligned Products in Agritech: A Product Manager\'s Guide',
    excerpt: 'Learn how to create agricultural technology products that not only drive business success but also contribute to the United Nations Sustainable Development Goals.',
    content: `# Building SDG-Aligned Products in Agritech: A Product Manager's Guide

As a Product Manager specializing in Agritech, I've learned that the most successful products are those that align with broader societal goals. The United Nations Sustainable Development Goals (SDGs) provide an excellent framework for creating products that drive both business value and positive impact.

## Why SDG Alignment Matters in Agritech

The agricultural sector faces unprecedented challenges: climate change, food security, water scarcity, and environmental degradation. As Product Managers, we have a unique opportunity to address these challenges through technology while building sustainable businesses.

### Key SDGs for Agritech Products

**SDG 2: Zero Hunger**
- Smart farming solutions that increase crop yield
- Precision agriculture tools that optimize resource usage
- Food waste reduction technologies

**SDG 6: Clean Water and Sanitation**
- Water management systems for efficient irrigation
- Water quality monitoring solutions
- Rainwater harvesting technologies

**SDG 13: Climate Action**
- Carbon footprint tracking in agriculture
- Climate-smart farming practices
- Renewable energy integration

## Practical Implementation Framework

### 1. Define Your Impact Goals
Start by identifying which SDGs your product can realistically impact. Be specific about the measurable outcomes you want to achieve.

### 2. Integrate Impact Metrics
Build SDG-related KPIs into your product metrics alongside traditional business metrics like user engagement and revenue.

### 3. Stakeholder Alignment
Ensure all stakeholders understand the dual purpose of your product: business success and societal impact.

## Real-World Example: SmartFarm IoT Platform

In developing our SmartFarm IoT platform, we focused on SDG 2 (Zero Hunger) and SDG 13 (Climate Action). The results speak for themselves:

- 30% increase in crop yield for 25,000+ farmers
- 25% reduction in water usage
- 20% decrease in carbon emissions per hectare

## Conclusion

Building SDG-aligned products isn't just good for the world—it's good for business. Customers increasingly prefer products that contribute to positive change, and investors are prioritizing companies with strong ESG (Environmental, Social, Governance) practices.

The key is to start small, measure impact, and continuously iterate on both your product features and your impact goals.`,
    author: 'Mushfiqur Rahaman',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    category: 'Product Management',
    tags: ['SDG', 'Agritech', 'Product Strategy', 'Sustainability'],
    featured: true,
    image: '/api/placeholder/800/400'
  },
  {
    slug: 'iot-product-management-best-practices',
    title: 'IoT Product Management: Best Practices for Connected Devices',
    excerpt: 'Discover the unique challenges and opportunities in managing IoT products, from hardware-software integration to data analytics and user experience.',
    content: `# IoT Product Management: Best Practices for Connected Devices

Managing IoT products presents unique challenges that traditional software product management doesn't address. Having led the development of several IoT solutions in Agritech and Aquatech, I've learned valuable lessons about what works and what doesn't.

## The IoT Product Management Challenge

IoT products combine hardware, software, connectivity, and data analytics—each with its own development lifecycle and constraints. This complexity requires a different approach to product management.

### Key Differences from Traditional Software

1. **Hardware Constraints**: Physical devices have longer development cycles and higher costs for changes
2. **Connectivity Dependencies**: Products must work reliably across different network conditions
3. **Data Complexity**: Managing and processing large volumes of sensor data
4. **User Experience**: Balancing technical capabilities with user-friendly interfaces

## Best Practices for IoT Product Management

### 1. Start with the Problem, Not the Technology

It's easy to get excited about IoT capabilities, but successful products solve real problems. Start by understanding your users' pain points and work backward to the technology solution.

### 2. Design for Reliability

IoT devices often operate in challenging environments. Design for:
- Network connectivity issues
- Power constraints
- Environmental factors (temperature, humidity, etc.)
- Long-term maintenance

### 3. Plan for Data from Day One

IoT products generate massive amounts of data. Plan your data strategy early:
- What data will you collect?
- How will you process and store it?
- What insights will you provide to users?
- How will you ensure data privacy and security?

### 4. Iterate on Software, Plan Hardware Carefully

Hardware changes are expensive and time-consuming. Design your hardware platform to be flexible enough to support software updates and feature additions.

### 5. Build Strong Partnerships

IoT products often require expertise in multiple domains. Build partnerships with:
- Hardware manufacturers
- Connectivity providers
- Cloud platform providers
- Industry experts

## Real-World Example: AquaMonitor System

Our AquaMonitor system demonstrates these principles in action:

- **Problem-First Approach**: Addressed the critical need for continuous water quality monitoring in aquaculture
- **Reliability Focus**: Designed for 24/7 operation in harsh marine environments
- **Data Strategy**: Real-time monitoring with predictive analytics for proactive management
- **Partnership Model**: Collaborated with sensor manufacturers and aquaculture experts

## Key Metrics for IoT Products

Beyond traditional product metrics, track:
- Device uptime and reliability
- Data quality and completeness
- Network connectivity performance
- User engagement with data insights
- Hardware failure rates

## Conclusion

IoT product management requires a holistic approach that considers hardware, software, connectivity, and data. Success comes from solving real problems, designing for reliability, and building strong partnerships across the IoT ecosystem.`,
    author: 'Mushfiqur Rahaman',
    publishedAt: '2024-01-08',
    readTime: '6 min read',
    category: 'IoT',
    tags: ['IoT', 'Product Management', 'Hardware', 'Data Analytics'],
    featured: true,
    image: '/api/placeholder/800/400'
  },
  {
    slug: 'energy-efficiency-in-product-design',
    title: 'Energy Efficiency in Product Design: Building Sustainable Solutions',
    excerpt: 'Explore how to integrate energy efficiency principles into product design, from initial concept to deployment and ongoing optimization.',
    content: `# Energy Efficiency in Product Design: Building Sustainable Solutions

Energy efficiency isn't just an environmental consideration—it's a competitive advantage. In my experience developing energy management solutions, I've seen how thoughtful design can reduce costs, improve performance, and create positive environmental impact.

## The Business Case for Energy Efficiency

Energy-efficient products offer multiple benefits:
- **Cost Savings**: Reduced operational expenses for users
- **Performance**: Often more reliable and longer-lasting
- **Compliance**: Meet increasingly strict energy regulations
- **Market Differentiation**: Appeal to environmentally conscious customers

## Design Principles for Energy Efficiency

### 1. Measure First, Optimize Second

You can't improve what you don't measure. Build comprehensive energy monitoring into your products from the start.

### 2. Design for the Use Case

Different applications have different energy requirements. Design your product to match the actual usage patterns of your target users.

### 3. Optimize for the Full Lifecycle

Consider energy consumption across the entire product lifecycle:
- Manufacturing
- Transportation
- Operation
- End-of-life disposal

### 4. Provide User Control

Give users the tools and information they need to optimize energy usage themselves.

## Real-World Example: AC Control System

Our IoT-based AC control system demonstrates these principles:

- **Comprehensive Monitoring**: Real-time tracking of energy consumption and carbon emissions
- **Smart Automation**: AI-driven scheduling based on occupancy and weather patterns
- **User Insights**: Detailed reporting and recommendations for optimization
- **Measurable Impact**: 15%+ energy savings with 5-6 month payback period

## Technical Implementation Strategies

### 1. Hardware Optimization
- Use energy-efficient components
- Implement power management systems
- Design for minimal standby consumption

### 2. Software Efficiency
- Optimize algorithms for minimal computational overhead
- Implement intelligent caching and data processing
- Use edge computing to reduce cloud processing needs

### 3. Connectivity Optimization
- Choose appropriate communication protocols
- Implement data compression and filtering
- Use local processing to reduce data transmission

## Measuring Success

Track both technical and business metrics:
- Energy consumption per unit of output
- Cost savings for users
- Environmental impact (carbon emissions)
- User satisfaction and adoption rates

## Conclusion

Energy efficiency should be a core consideration in product design, not an afterthought. By integrating energy efficiency principles from the beginning, you can create products that are more competitive, more sustainable, and more valuable to your customers.`,
    author: 'Mushfiqur Rahaman',
    publishedAt: '2024-01-01',
    readTime: '7 min read',
    category: 'Sustainability',
    tags: ['Energy Efficiency', 'Product Design', 'Sustainability', 'IoT'],
    featured: false,
    image: '/api/placeholder/800/400'
  },
  {
    slug: 'cross-functional-leadership-in-product-teams',
    title: 'Cross-Functional Leadership in Product Teams: Lessons from the Field',
    excerpt: 'Learn how to effectively lead diverse product teams, manage stakeholder relationships, and drive alignment across engineering, design, and business functions.',
    content: `# Cross-Functional Leadership in Product Teams: Lessons from the Field

Leading cross-functional product teams is one of the most challenging and rewarding aspects of product management. Having managed teams of 10-15 people across engineering, design, and business functions, I've learned valuable lessons about what makes teams successful.

## The Challenge of Cross-Functional Leadership

Product teams bring together people with different:
- **Expertise**: Technical, design, business, domain knowledge
- **Goals**: Engineering efficiency, user experience, business outcomes
- **Communication Styles**: Technical precision vs. business storytelling
- **Timelines**: Sprint cycles vs. business quarters vs. user research cycles

## Key Principles for Effective Leadership

### 1. Create Shared Vision and Goals

Everyone needs to understand not just what you're building, but why. Create clear, compelling goals that resonate across all functions.

### 2. Facilitate Communication

Don't assume people will naturally communicate across functions. Create structured opportunities for collaboration:
- Regular cross-functional meetings
- Shared documentation and tools
- Informal relationship building

### 3. Respect Different Expertise

Each function brings unique value. Don't try to be the expert in everything—instead, create an environment where everyone's expertise is valued and utilized.

### 4. Manage Conflicts Constructively

Conflicts are inevitable in cross-functional teams. The key is to address them quickly and focus on finding solutions rather than assigning blame.

## Practical Strategies

### 1. Start with User Problems

When teams disagree on solutions, go back to the user problem. This creates a shared foundation for decision-making.

### 2. Use Data to Drive Decisions

Quantitative data helps depersonalize disagreements and focus on what's best for the product and users.

### 3. Create Psychological Safety

Team members need to feel safe to share ideas, ask questions, and admit mistakes. This is especially important in cross-functional teams where people may feel out of their comfort zone.

### 4. Celebrate Cross-Functional Wins

Recognize and celebrate when teams work together effectively. This reinforces the value of collaboration.

## Real-World Example: AquaMonitor Development

Leading the AquaMonitor development team taught me valuable lessons:

- **Diverse Team**: Hardware engineers, software developers, data scientists, aquaculture experts
- **Challenge**: Balancing technical feasibility with user needs and business constraints
- **Solution**: Regular user research sessions, technical feasibility reviews, and business impact assessments
- **Result**: Successful product launch with high user satisfaction

## Common Pitfalls to Avoid

1. **Siloed Communication**: Teams working in isolation
2. **Unclear Decision-Making**: Unclear who makes what decisions
3. **Misaligned Incentives**: Different functions measured on conflicting metrics
4. **Poor Conflict Resolution**: Issues festering and affecting team dynamics

## Conclusion

Cross-functional leadership is about creating an environment where diverse expertise can come together to build something greater than any individual could create alone. It requires patience, empathy, and a commitment to continuous improvement in team dynamics.`,
    author: 'Mushfiqur Rahaman',
    publishedAt: '2023-12-25',
    readTime: '9 min read',
    category: 'Leadership',
    tags: ['Leadership', 'Team Management', 'Cross-functional', 'Product Management'],
    featured: false,
    image: '/api/placeholder/800/400'
  }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Product Management Blog - Mushfiqur Rahaman",
    "description": "Expert insights on product management, Agritech, Aquatech, IoT solutions, energy efficiency, and sustainable development goals.",
    "url": "https://meetmushfiq.com/blog",
    "author": {
      "@type": "Person",
      "name": "Mushfiqur Rahaman",
      "url": "https://meetmushfiq.com",
      "jobTitle": "Technical Product Manager",
      "worksFor": {
        "@type": "Organization",
        "name": "Independent Consultant"
      }
    },
    "publisher": {
      "@type": "Person",
      "name": "Mushfiqur Rahaman",
      "url": "https://meetmushfiq.com"
    },
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://meetmushfiq.com/blog/${post.slug}`,
      "datePublished": post.publishedAt,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "keywords": post.tags.join(', '),
      "articleSection": post.category
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20 pt-32">
        <div className="container-max-width section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Product Management Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore insights on product management, Agritech, Aquatech, energy efficiency, 
              and sustainable development goals. Learn from real-world experiences and industry best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Product Management', 'IoT', 'Sustainability', 'Leadership'].map((category) => (
                <span
                  key={category}
                  className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-max-width section-padding">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden card-hover"
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <ShareButton 
                        title={post.title}
                        url={`/blog/${post.slug}`}
                        description={post.excerpt}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container-max-width section-padding">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            All Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden card-hover"
              >
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                    <ShareButton 
                      title={post.title}
                      url={`/blog/${post.slug}`}
                      description={post.excerpt}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  )
}
