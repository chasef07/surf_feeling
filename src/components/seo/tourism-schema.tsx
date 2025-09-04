'use client'

import { BUSINESS_INFO } from '@/lib/constants'

export function TouristAttractionSchemaDetailed() {
  const touristAttractionData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": "My Khe Beach Surfing Experience",
    "alternateName": "Surf Feeling Da Nang",
    "description": "Experience world-class surfing at My Khe Beach, Da Nang with professional instruction from Surf Feeling. Perfect waves for beginners and intermediate surfers in Vietnam's premier beach destination.",
    "url": "https://surffeeling.vn",
    "image": [
      {
        "@type": "ImageObject",
        "url": "https://surffeeling.vn/images/my-khe-beach-panorama.jpg",
        "width": 1920,
        "height": 1080,
        "caption": "My Khe Beach panoramic view with surfers"
      },
      {
        "@type": "ImageObject",
        "url": "https://surffeeling.vn/images/surf-lessons-action.jpg", 
        "width": 1200,
        "height": 800,
        "caption": "Surf lessons in action at My Khe Beach"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "My Khe Beach",
      "addressLocality": "Da Nang",
      "addressRegion": "Central Vietnam",
      "addressCountry": "VN",
      "addressCountryCode": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.lat,
      "longitude": BUSINESS_INFO.coordinates.lng
    },
    "touristType": [
      "Adventure Tourists",
      "Water Sports Enthusiasts",
      "Beach Lovers",
      "Solo Travelers",
      "Couple Travelers",
      "Family Travelers",
      "Backpackers",
      "Luxury Travelers"
    ],
    "availableLanguage": ["en", "vi", "ko", "ja", "zh"],
    "isAccessibleForFree": false,
    "publicAccess": true,
    "openingHours": "Mo-Su 06:00-18:00",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Professional Surf Instruction",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Equipment Rental Available",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Beginner Friendly",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Certified Instructors",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Safety Equipment Provided",
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
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Photography Services",
        "value": true
      }
    ],
    "containedInPlace": [
      {
        "@type": "City",
        "name": "Da Nang",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Central Vietnam",
          "containedInPlace": {
            "@type": "Country",
            "name": "Vietnam",
            "alternateName": "Socialist Republic of Vietnam"
          }
        }
      }
    ],
    "nearbyAttraction": [
      {
        "@type": "TouristAttraction",
        "name": "Hoi An Ancient Town",
        "description": "UNESCO World Heritage ancient trading port"
      },
      {
        "@type": "TouristAttraction", 
        "name": "Ba Na Hills",
        "description": "French colonial mountain resort with Golden Bridge"
      },
      {
        "@type": "TouristAttraction",
        "name": "Dragon Bridge",
        "description": "Iconic fire-breathing dragon bridge in Da Nang"
      },
      {
        "@type": "TouristAttraction",
        "name": "Marble Mountains",
        "description": "Ancient limestone hills with Buddhist temples"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Surf Experiences",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Beginner Surf Experience",
            "category": "Water Sports"
          },
          "price": "32",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-day Surf Package",
            "category": "Travel Package"
          },
          "price": "85",
          "priceCurrency": "USD"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "150"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionData) }}
    />
  )
}

export function TravelAgencySchema() {
  const travelAgencyData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": BUSINESS_INFO.name,
    "description": "Specialized travel services for surf tourism in Da Nang, Vietnam. Offering complete surf experiences including lessons, equipment, and local guidance.",
    "url": "https://surffeeling.vn",
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "address": {
      "@type": "PostalAddress", 
      "streetAddress": BUSINESS_INFO.address,
      "addressLocality": "Da Nang",
      "addressRegion": "Da Nang",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.lat,
      "longitude": BUSINESS_INFO.coordinates.lng
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Vietnam"
      },
      {
        "@type": "City",
        "name": "Da Nang"
      },
      {
        "@type": "City", 
        "name": "Hoi An"
      }
    ],
    "serviceType": [
      "Surf Tourism",
      "Adventure Travel",
      "Water Sports Tourism",
      "Beach Tourism",
      "Educational Travel"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Surf Tourism Services",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Surf Lesson Tours",
          "description": "Guided surf experiences with professional instruction"
        },
        {
          "@type": "Service",
          "name": "Equipment Rental Services", 
          "description": "Premium surfboard and equipment rental"
        },
        {
          "@type": "Service",
          "name": "Local Surf Guide Services",
          "description": "Expert local knowledge and spot recommendations"
        }
      ]
    },
    "knowsAbout": [
      "Vietnam Surf Conditions",
      "Da Nang Tourism",
      "Beach Safety",
      "Local Culture",
      "Weather Patterns",
      "Surf Spots Vietnam"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": [
        "International Tourists",
        "Adventure Travelers", 
        "Water Sports Enthusiasts",
        "First-time Surfers",
        "Solo Travelers",
        "Group Travelers"
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencyData) }}
    />
  )
}

export function SportsActivityLocationSchema() {
  const sportsLocationData = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "My Khe Beach Surf Zone",
    "description": "Premier surf location in Da Nang, Vietnam with consistent waves perfect for learning and progression.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "My Khe Beach",
      "addressLocality": "Da Nang", 
      "addressRegion": "Da Nang",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.lat,
      "longitude": BUSINESS_INFO.coordinates.lng
    },
    "sport": "Surfing",
    "activity": [
      "Surf Lessons",
      "Surfboard Rental",
      "Water Safety Training",
      "Beach Activities"
    ],
    "isAccessibleForFree": true,
    "publicAccess": true,
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Consistent Waves",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Sandy Bottom", 
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Beginner Friendly Waves",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Lifeguard Supervision",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Equipment Storage",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Changing Facilities",
        "value": true
      }
    ],
    "maximumAttendeeCapacity": 50,
    "openingHours": "Mo-Su 06:00-18:00",
    "specialOpeningHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "06:00",
        "closes": "18:00",
        "validFrom": "2025-01-01",
        "validThrough": "2025-12-31"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsLocationData) }}
    />
  )
}

export function CourseSchema() {
  const courseData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Complete Surf Course - Da Nang",
    "description": "Comprehensive surf course from beginner to intermediate level with professional instruction at My Khe Beach, Da Nang, Vietnam.",
    "provider": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "url": "https://surffeeling.vn"
    },
    "courseMode": "In-person",
    "educationalLevel": "Beginner to Intermediate",
    "teaches": [
      "Surf Safety",
      "Ocean Awareness",
      "Paddling Techniques",
      "Wave Reading", 
      "Pop-up Techniques",
      "Balance and Stance",
      "Surf Etiquette",
      "Equipment Knowledge"
    ],
    "coursePrerequisites": "Basic swimming ability",
    "timeRequired": "P3D", // 3 days
    "totalTime": "PT6H", // 6 hours total
    "numberOfCredits": 0,
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "courseMode": "In-person",
        "courseSchedule": {
          "@type": "Schedule",
          "repeatFrequency": "Daily",
          "startTime": "06:00",
          "endTime": "18:00"
        },
        "location": {
          "@type": "Place",
          "name": "My Khe Beach",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Da Nang",
            "addressCountry": "VN"
          }
        }
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "85",
      "priceCurrency": "USD",
      "availability": "InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "87"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }}
    />
  )
}