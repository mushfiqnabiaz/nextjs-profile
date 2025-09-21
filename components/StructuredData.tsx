'use client'

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://meetmushfiq.com/#person",
        "name": "Mushfiqur Rahaman",
        "alternateName": "Mushfiqur Rahaman",
        "url": "https://meetmushfiq.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://meetmushfiq.com/og-image.jpg",
          "width": 1200,
          "height": 630
        },
        "description": "Technical Product Manager with 5+ years experience in Agritech, Aquatech, and Energy Efficiency solutions. Expert in IoT, SaaS, ERP systems, and SDG-aligned product development.",
        "jobTitle": "Technical Product Manager",
        "worksFor": [
          {
            "@type": "Organization",
            "name": "Celloscope Limited",
            "jobTitle": "Product Analyst"
          },
          {
            "@type": "Organization", 
            "name": "Aqualink Bangladesh Limited",
            "jobTitle": "Product Manager"
          }
        ],
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Daffodil Institute of IT",
            "description": "B.Sc(Hons) in Computer Science & Engineering"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dhaka",
          "addressCountry": "Bangladesh"
        },
        "email": "hello@meetmushfiq.com",
        "telephone": "+8801234567890",
        "sameAs": [
          "https://linkedin.com/in/mushfiqur-rahaman",
          "https://github.com/mushfiqur-rahaman",
          "https://twitter.com/mushfiqur_pm"
        ],
        "knowsAbout": [
          "Product Management",
          "Agritech",
          "Aquatech", 
          "Energy Efficiency",
          "IoT",
          "SaaS",
          "ERP Systems",
          "Embedded Systems",
          "SDG Product Development",
          "Machine Learning",
          "Data Science",
          "Mobile App Development",
          "Project Management",
          "Agile Methodologies"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Big Data, Data Science, and Data Analysis",
            "credentialCategory": "Certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "PeopleNTech Ltd"
            },
            "dateCreated": "2023"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Advanced Certificate for Management Professionals",
            "credentialCategory": "Certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Institute of Business Administration (IBA), University of Dhaka"
            },
            "dateCreated": "2025"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Mobile Game and Application Development",
            "credentialCategory": "Certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "ICT Division, Bangladesh"
            },
            "dateCreated": "2019"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://meetmushfiq.com/#website",
        "url": "https://meetmushfiq.com",
        "name": "Mushfiqur Rahaman Portfolio",
        "description": "Technical Product Manager Portfolio - Agritech, Aquatech, and Energy Efficiency Solutions",
        "publisher": {
          "@id": "https://meetmushfiq.com/#person"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://meetmushfiq.com/#webpage",
        "url": "https://meetmushfiq.com",
        "name": "Mushfiqur Rahaman | Technical Product Manager | Agritech & Aquatech Expert",
        "isPartOf": {
          "@id": "https://meetmushfiq.com/#website"
        },
        "about": {
          "@id": "https://meetmushfiq.com/#person"
        },
        "description": "Technical Product Manager with 5+ years experience in Agritech, Aquatech, and Energy Efficiency solutions. Expert in IoT, SaaS, ERP systems, and SDG-aligned product development.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://mushfiqur-rahaman.vercel.app"
            }
          ]
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://meetmushfiq.com/#organization",
        "name": "Mushfiqur Rahaman Portfolio",
        "url": "https://meetmushfiq.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://meetmushfiq.com/og-image.jpg"
        },
        "sameAs": [
          "https://linkedin.com/in/mushfiqur-rahaman",
          "https://github.com/mushfiqur-rahaman",
          "https://twitter.com/mushfiqur_pm"
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default StructuredData
