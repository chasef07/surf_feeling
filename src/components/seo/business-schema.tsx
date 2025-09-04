'use client'

import { generateBusinessSchema, generateFAQSchema } from '@/lib/seo'

export function BusinessSchema() {
  const businessData = generateBusinessSchema()
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  )
}

export function SurfLessonsServiceSchema() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SurfInstruction",
    "name": "Surf Lessons Da Nang",
    "description": "Professional surf lessons for all skill levels at My Khe Beach, Da Nang, Vietnam. Certified instructors, premium equipment, and small class sizes.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://surffeeling.vn#business"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Da Nang",
        "containedInPlace": {
          "@type": "Country", 
          "name": "Vietnam"
        }
      }
    ],
    "category": "Sports Instruction",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Surf Lesson Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://surffeeling.vn/lessons#beginner-single",
          "name": "Beginner Single Lesson",
          "description": "Perfect introduction to surfing with safety briefing and basic techniques. 2-hour lesson with professional instructor.",
          "price": "32.00",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "validFrom": "2025-01-01",
          "itemOffered": {
            "@type": "Service",
            "name": "2-Hour Beginner Surf Lesson",
            "description": "Includes professional instructor, surfboard rental, wetsuit, safety briefing, and basic surf theory"
          },
          "eligibleRegion": {
            "@type": "Country",
            "name": "VN"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://surffeeling.vn/lessons#beginner-package",
          "name": "Beginner 3-Day Package",
          "description": "Complete beginner course over 3 days to build confidence and skills. Best value for new surfers.",
          "price": "85.00",
          "priceCurrency": "USD", 
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "validFrom": "2025-01-01",
          "itemOffered": {
            "@type": "Service",
            "name": "3-Day Beginner Surf Package",
            "description": "3 x 2-hour lessons with professional instructor, all equipment, progress tracking, and completion certificate"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://surffeeling.vn/lessons#advanced-coaching", 
          "name": "Advanced Coaching",
          "description": "High-performance coaching for experienced surfers looking to master advanced techniques and maneuvers.",
          "price": "60.00",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31", 
          "availability": "https://schema.org/InStock",
          "validFrom": "2025-01-01",
          "itemOffered": {
            "@type": "Service",
            "name": "3-Hour Advanced Surf Coaching",
            "description": "1-on-1 coaching, competition preparation, advanced maneuvers, video analysis, and performance tips"
          }
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "32",
      "highPrice": "85", 
      "priceCurrency": "USD",
      "offerCount": "4",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "87"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  )
}

export function SurfboardRentalSchema() {
  const rentalData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "EquipmentRental",
    "name": "Surfboard Rental Da Nang", 
    "description": "Premium surfboard rentals for all skill levels with flexible daily and weekly rates. Free delivery to My Khe Beach area.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://surffeeling.vn#business"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Da Nang",
        "containedInPlace": {
          "@type": "Country",
          "name": "Vietnam" 
        }
      }
    ],
    "category": "Sports Equipment Rental",
    "hasOfferCatalog": {
      "@type": "OfferCatalog", 
      "name": "Surfboard Rental Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Soft-top Longboard Rental",
          "description": "Perfect for beginners - stable, safe, and forgiving 9'0\" soft-top longboard",
          "price": "12.00",
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Product",
            "name": "Soft-top Longboard 9'0\"",
            "category": "Surfboard"
          }
        },
        {
          "@type": "Offer",
          "name": "Performance Shortboard Rental",
          "description": "High-performance 6'2\" shortboard for advanced surfers",
          "price": "18.00", 
          "priceCurrency": "USD",
          "priceValidUntil": "2025-12-31",
          "availability": "https://schema.org/InStock",
          "itemOffered": {
            "@type": "Product",
            "name": "Performance Shortboard 6'2\"",
            "category": "Surfboard"
          }
        }
      ]
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "12",
      "highPrice": "18",
      "priceCurrency": "USD"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalData) }}
    />
  )
}

export function TouristAttractionSchema() {
  const attractionData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "My Khe Beach Surfing with Surf Feeling",
    "description": "Premier surfing destination at My Khe Beach, Da Nang. Perfect waves for beginners and intermediate surfers with professional instruction available.",
    "url": "https://surffeeling.vn",
    "image": [
      "https://surffeeling.vn/images/my-khe-beach-surfing.jpg",
      "https://surffeeling.vn/images/surf-lessons-danang.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "My Khe Beach",
      "addressLocality": "Da Nang", 
      "addressRegion": "Da Nang",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.0544,
      "longitude": 108.2022
    },
    "touristType": [
      "Adventure Seekers",
      "Water Sports Enthusiasts", 
      "Beginner Surfers",
      "Beach Lovers"
    ],
    "availableLanguage": ["en", "vi", "ko", "ja"],
    "isAccessibleForFree": false,
    "publicAccess": true,
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Professional Surf Instruction",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Equipment Rental",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Beach Access",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking Available", 
        "value": true
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionData) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqData = generateFAQSchema(faqs)
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  )
}