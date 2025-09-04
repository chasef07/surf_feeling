'use client'

import { BUSINESS_INFO } from '@/lib/constants'

export function LocalBusinessSchema() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation", "TravelAgency"],
    "@id": "https://surffeeling.vn#localbusiness",
    "name": BUSINESS_INFO.name,
    "alternateName": "Surf Feeling Da Nang",
    "description": "Premier surf school and equipment rental in Da Nang, Vietnam offering professional surf lessons and board rentals at My Khe Beach.",
    "url": "https://surffeeling.vn",
    "logo": "https://surffeeling.vn/images/surf-feeling-logo.png",
    "image": [
      "https://surffeeling.vn/images/my-khe-beach-surfing.jpg",
      "https://surffeeling.vn/images/surf-lessons-danang.jpg",
      "https://surffeeling.vn/images/surf-feeling-instructors.jpg"
    ],
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "My Khe Beach",
      "addressLocality": "Da Nang",
      "addressRegion": "Da Nang",
      "postalCode": "550000", 
      "addressCountry": "VN",
      "addressCountryCode": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.lat,
      "longitude": BUSINESS_INFO.coordinates.lng
    },
    "openingHours": [
      "Mo-Su 06:00-18:00"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "06:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "VND, USD",
    "paymentAccepted": [
      "Cash",
      "Credit Card",
      "Bank Transfer",
      "Mobile Payment"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Da Nang",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Da Nang",
          "containedInPlace": {
            "@type": "Country",
            "name": "Vietnam",
            "alternateName": "VN"
          }
        }
      },
      {
        "@type": "City", 
        "name": "Hoi An"
      },
      {
        "@type": "City",
        "name": "Hue" 
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": BUSINESS_INFO.coordinates.lat,
        "longitude": BUSINESS_INFO.coordinates.lng
      },
      "geoRadius": "50000" // 50km radius
    },
    "sameAs": [
      "https://www.facebook.com/surffeeling.danang",
      "https://www.instagram.com/surffeeling.danang", 
      "https://www.youtube.com/@surffeeling",
      "https://goo.gl/maps/surf-feeling-danang"
    ],
    "hasMap": `https://www.google.com/maps/search/?api=1&query=${BUSINESS_INFO.coordinates.lat},${BUSINESS_INFO.coordinates.lng}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1", 
      "ratingCount": "150",
      "reviewCount": "150"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson",
          "nationality": "American"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Amazing surf lessons! Minh was incredibly patient and helped me catch my first wave. The location at My Khe Beach is perfect for beginners.",
        "datePublished": "2024-12-15"
      },
      {
        "@type": "Review", 
        "author": {
          "@type": "Person",
          "name": "Hiroshi Tanaka",
          "nationality": "Japanese"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Perfect surf school! Great English-speaking instructors and excellent equipment. Highly recommend for tourists visiting Da Nang.",
        "datePublished": "2024-12-20"
      }
    ],
    "knowsAbout": [
      "Surfing Instruction",
      "Water Sports",
      "Beach Safety",
      "Vietnam Tourism",
      "My Khe Beach",
      "Da Nang Attractions"
    ],
    "knowsLanguage": [
      "en",
      "vi", 
      "ko",
      "ja"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Beginner Surf Lessons",
          "category": "Sports Instruction"
        },
        "price": "32",
        "priceCurrency": "USD",
        "availability": "InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Surfboard Rental",
          "category": "Equipment Rental"
        },
        "price": "12",
        "priceCurrency": "USD",
        "availability": "InStock"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  )
}

export function PlaceSchema() {
  const placeData = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "My Khe Beach - Surf Feeling Location",
    "description": "Beautiful beach in Da Nang, Vietnam, perfect for surfing lessons and water sports activities.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Da Nang",
      "addressRegion": "Da Nang", 
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.lat,
      "longitude": BUSINESS_INFO.coordinates.lng
    },
    "photo": [
      {
        "@type": "ImageObject",
        "url": "https://surffeeling.vn/images/my-khe-beach.jpg",
        "width": 1200,
        "height": 800,
        "caption": "My Khe Beach in Da Nang, Vietnam"
      }
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Surf Lessons Available",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Equipment Rental",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Lifeguard on Duty",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Beach Access",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true
      }
    ],
    "isAccessibleForFree": true,
    "publicAccess": true,
    "containedInPlace": {
      "@type": "City",
      "name": "Da Nang",
      "containedInPlace": {
        "@type": "Country",
        "name": "Vietnam"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(placeData) }}
    />
  )
}

export function EventSchema() {
  const eventData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Daily Surf Lessons at My Khe Beach",
    "description": "Daily surf lessons for all skill levels with professional instructors at My Khe Beach, Da Nang.",
    "startDate": "2025-01-01",
    "endDate": "2025-12-31",
    "eventStatus": "EventScheduled",
    "eventAttendanceMode": "OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "My Khe Beach",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "My Khe Beach",
        "addressLocality": "Da Nang",
        "addressCountry": "VN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": BUSINESS_INFO.coordinates.lat,
        "longitude": BUSINESS_INFO.coordinates.lng
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "url": "https://surffeeling.vn"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Beginner Surf Lesson",
        "price": "32",
        "priceCurrency": "USD",
        "availability": "InStock",
        "url": "https://surffeeling.vn/lessons"
      }
    ],
    "performer": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Tourists, Water Sports Enthusiasts, Beginners"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(eventData) }}
    />
  )
}