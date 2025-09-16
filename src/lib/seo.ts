import { Metadata } from 'next'
import { BUSINESS_INFO, SEO_KEYWORDS } from './constants'

export interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://surffeeling.vn'

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  noindex = false,
  ogImage,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = []
}: SEOConfig = {}): Metadata {
  const fullTitle = title ? `${title} | ${BUSINESS_INFO.name}` : `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`
  const metaDescription = description || BUSINESS_INFO.description
  const allKeywords = [
    ...SEO_KEYWORDS.primary,
    ...SEO_KEYWORDS.secondary,
    ...keywords
  ].join(', ')

  const metadata: Metadata = {
    title: fullTitle,
    description: metaDescription,
    keywords: allKeywords,
    authors: author ? [{ name: author }] : [{ name: BUSINESS_INFO.name }],
    creator: BUSINESS_INFO.name,
    publisher: BUSINESS_INFO.name,
    formatDetection: {
      telephone: false,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonical || SITE_URL,
      siteName: BUSINESS_INFO.name,
      locale: 'en_US',
      type: ogType,
      images: [
        {
          url: ogImage || `${SITE_URL}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      site: '@surffeeling_dn',
      creator: '@surffeeling_dn',
      images: [ogImage || `${SITE_URL}/images/twitter-default.jpg`],
    },
    alternates: {
      canonical: canonical || SITE_URL,
      languages: {
        'en': canonical || SITE_URL,
        'x-default': canonical || SITE_URL,
      },
    },
    other: {
      'geo.region': 'VN-DA',
      'geo.placename': 'Da Nang',
      'geo.position': `${BUSINESS_INFO.coordinates.lat};${BUSINESS_INFO.coordinates.lng}`,
      'ICBM': `${BUSINESS_INFO.coordinates.lat}, ${BUSINESS_INFO.coordinates.lng}`,
    },
  }

  // Add verification codes for search engines
  if (process.env.GOOGLE_SITE_VERIFICATION) {
    metadata.verification = {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    }
  }

  return metadata
}

// Specific metadata generators for different page types
export const homePageSEO = (): Metadata => generateMetadata({
  title: 'Premium Surf Lessons & Board Rentals in Da Nang, Vietnam',
  description: 'Learn to surf with professional instructors at My Khe Beach, Da Nang. Beginner to advanced surf lessons, premium board rentals, and equipment. Book your surfing adventure in Vietnam today!',
  keywords: [
    'Da Nang surfing',
    'surf lessons Da Nang', 
    'Vietnam surf school',
    'My Khe beach surfing',
    'beginner surf lessons',
    'surf board rental Vietnam',
    'surf lessons near me',
    'learn to surf Vietnam'
  ],
  ogType: 'website',
  ogImage: `${SITE_URL}/images/og-homepage.jpg`
})

export const lessonsPageSEO = (): Metadata => generateMetadata({
  title: 'Surf Lessons in Da Nang - Beginner to Advanced Instruction',
  description: 'Professional surf lessons at My Khe Beach with certified instructors. Beginner single lessons, 3-day packages, intermediate sessions, and advanced coaching. Small groups, premium equipment included.',
  keywords: [
    'beginner surf lessons Da Nang',
    'intermediate surf lessons',
    'advanced surf coaching',
    'private surf lessons',
    'group surf lessons',
    'surf instruction Vietnam',
    'certified surf instructors'
  ],
  canonical: `${SITE_URL}/lessons`,
  ogImage: `${SITE_URL}/images/og-lessons.jpg`
})

export const rentalsPageSEO = (): Metadata => generateMetadata({
  title: 'Surfboard Rentals Da Nang - Premium Equipment for All Levels',
  description: 'Rent premium surfboards in Da Nang. Soft longboards for beginners, funboards, performance shortboards. Daily, weekly rates. Located at My Khe Beach with delivery available.',
  keywords: [
    'surfboard rental Da Nang',
    'long term surfboard rental',
    'surf equipment rental Vietnam',
    'longboard rental',
    'shortboard rental',
    'wetsuit rental Da Nang'
  ],
  canonical: `${SITE_URL}/rentals`,
  ogImage: `${SITE_URL}/images/og-rentals.jpg`
})

export const blogPageSEO = (): Metadata => generateMetadata({
  title: 'Da Nang Surf Blog - Wave Reports, Guides & Local Tips',
  description: 'Expert surf guides, wave reports, and insider tips for surfing in Da Nang and Vietnam. Surf conditions, best spots, travel guides, and beginner tutorials from local experts.',
  keywords: [
    'Da Nang surf blog',
    'Vietnam surf conditions',
    'surf spots Vietnam',
    'surf season Da Nang',
    'best time to surf Vietnam',
    'surf travel guide'
  ],
  canonical: `${SITE_URL}/blog`,
  ogImage: `${SITE_URL}/images/og-blog.jpg`
})

export const partnersPageSEO = (): Metadata => generateMetadata({
  title: 'Surf School Partners - Hotels, Tours & Equipment Suppliers',
  description: 'Partner with Surf Feeling for exclusive surf packages. Collaborate with Da Nang hotels, tour operators, and equipment suppliers. Premium surf experiences for your guests.',
  keywords: [
    'surf school partnerships',
    'hotel surf packages',
    'tour operator collaboration',
    'Da Nang surf partnerships',
    'surf equipment suppliers'
  ],
  canonical: `${SITE_URL}/partners`,
  ogImage: `${SITE_URL}/images/og-partners.jpg`
})

// Blog post specific SEO
export const blogPostSEO = ({
  title,
  description,
  slug,
  author,
  publishedAt,
  updatedAt,
  category,
  tags,
  keywords = []
}: {
  title: string
  description: string
  slug: string
  author: string
  publishedAt: string
  updatedAt: string
  category: string
  tags: string[]
  keywords?: string[]
}): Metadata => generateMetadata({
  title,
  description,
  keywords: [...keywords, ...tags],
  canonical: `${SITE_URL}/blog/${slug}`,
  ogType: 'article',
  publishedTime: publishedAt,
  modifiedTime: updatedAt,
  author,
  section: category,
  tags,
  ogImage: `${SITE_URL}/images/blog/${slug}-og.jpg`
})

// JSON-LD Schema generators
export function generateBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SportsActivityLocation", "TouristAttraction"],
    "@id": `${SITE_URL}#business`,
    "name": BUSINESS_INFO.name,
    "description": BUSINESS_INFO.description,
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/logo.png`,
    "image": [
      `${SITE_URL}/images/surf-feeling-hero.jpg`,
      `${SITE_URL}/images/my-khe-beach.jpg`,
      `${SITE_URL}/images/surf-lessons.jpg`
    ],
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address,
      "addressLocality": "Da Nang",
      "addressRegion": "Da Nang",
      "postalCode": "550000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.lat,
      "longitude": BUSINESS_INFO.coordinates.lng
    },
    "openingHours": "Mo-Su 06:00-18:00",
    "priceRange": "$20-$100",
    "currenciesAccepted": "VND, USD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "City",
      "name": "Da Nang",
      "containedInPlace": {
        "@type": "Country",
        "name": "Vietnam"
      }
    },
    "sameAs": [
      "https://www.facebook.com/surffeeling.danang",
      "https://www.instagram.com/surffeeling.danang",
      "https://www.youtube.com/@surffeeling"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Surf Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Beginner Surf Lessons",
            "description": "2-hour surf lesson perfect for complete beginners"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Surfboard Rentals",
            "description": "Premium surfboard rentals for all skill levels"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "150"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person", 
          "name": "Sarah Johnson"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Amazing surf lessons! Minh was incredibly patient and helped me catch my first wave. The location at My Khe Beach is perfect for beginners."
      }
    ]
  }
}

export function generateServiceSchema(serviceType: 'lessons' | 'rentals') {
  const baseService = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "url": SITE_URL
    },
    "areaServed": {
      "@type": "City", 
      "name": "Da Nang",
      "containedInPlace": {
        "@type": "Country",
        "name": "Vietnam"
      }
    },
    "availableLanguage": ["en", "vi", "ko", "ja"]
  }

  if (serviceType === 'lessons') {
    return {
      ...baseService,
      "name": "Surf Lessons Da Nang",
      "description": "Professional surf instruction for all levels at My Khe Beach, Da Nang, Vietnam",
      "serviceType": "Recreation",
      "category": "Sports Instruction",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Surf Lesson Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Beginner Single Lesson", 
            "description": "2-hour beginner surf lesson with all equipment included",
            "price": "32",
            "priceCurrency": "USD",
            "availability": "InStock"
          },
          {
            "@type": "Offer",
            "name": "3-Day Beginner Package",
            "description": "Complete beginner course over 3 days with certificate",
            "price": "85", 
            "priceCurrency": "USD",
            "availability": "InStock"
          }
        ]
      }
    }
  } else {
    return {
      ...baseService,
      "name": "Surfboard Rental Da Nang",
      "description": "Premium surfboard rentals for all skill levels with flexible daily and weekly rates",
      "serviceType": "Equipment Rental",
      "category": "Sports Equipment Rental"
    }
  }
}

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}