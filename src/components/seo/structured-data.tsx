import { BUSINESS_INFO } from "@/lib/constants"

interface BlogPostSchemaProps {
  title: string
  description: string
  author: string
  publishedAt: string
  updatedAt: string
  slug: string
  category: string
  tags: string[]
  readTime: number
}

export function BlogPostSchema({ 
  title, 
  description, 
  author, 
  publishedAt, 
  updatedAt, 
  slug, 
  category, 
  tags, 
  readTime 
}: BlogPostSchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author,
      "url": `https://surffeeling.vn/instructors/${author.toLowerCase().replace(/\s+/g, '-')}`
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://surffeeling.vn/logo.png"
      },
      "url": "https://surffeeling.vn",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Da Nang",
        "addressCountry": "Vietnam",
        "streetAddress": BUSINESS_INFO.address
      },
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email
    },
    "datePublished": publishedAt,
    "dateModified": updatedAt,
    "url": `https://surffeeling.vn/blog/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://surffeeling.vn/blog/${slug}`
    },
    "image": {
      "@type": "ImageObject",
      "url": `https://surffeeling.vn/blog/images/${slug}.jpg`,
      "width": 1200,
      "height": 630
    },
    "keywords": tags.join(", "),
    "articleSection": category,
    "wordCount": Math.round(readTime * 200), // Approximate word count based on read time
    "timeRequired": `PT${readTime}M`,
    "about": [
      {
        "@type": "Thing",
        "name": "Surfing",
        "description": "Water sport of riding waves"
      },
      {
        "@type": "Place",
        "name": "Da Nang, Vietnam",
        "description": "Premier surf destination in Southeast Asia"
      },
      {
        "@type": "Service",
        "name": "Surf Lessons",
        "provider": {
          "@type": "Organization",
          "name": BUSINESS_INFO.name
        }
      }
    ],
    "mentions": [
      {
        "@type": "Place",
        "name": "My Khe Beach",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Da Nang",
          "addressCountry": "Vietnam"
        }
      },
      {
        "@type": "Place", 
        "name": "Vietnam",
        "description": "Southeast Asian country with excellent surf conditions"
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

interface BlogCategorySchemaProps {
  categoryName: string
  categoryDescription: string
  categorySlug: string
  postCount: number
}

export function BlogCategorySchema({ 
  categoryName, 
  categoryDescription, 
  categorySlug, 
  postCount 
}: BlogCategorySchemaProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${categoryName} - ${BUSINESS_INFO.name} Blog`,
    "description": categoryDescription,
    "url": `https://surffeeling.vn/blog/category/${categorySlug}`,
    "mainEntity": {
      "@type": "ItemList",
      "name": `${categoryName} Posts`,
      "numberOfItems": postCount,
      "itemListElement": `Posts about ${categoryName.toLowerCase()} from ${BUSINESS_INFO.name}`
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://surffeeling.vn/logo.png"
      },
      "url": "https://surffeeling.vn"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://surffeeling.vn"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://surffeeling.vn/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": categoryName,
          "item": `https://surffeeling.vn/blog/category/${categorySlug}`
        }
      ]
    },
    "about": {
      "@type": "Thing",
      "name": categoryName,
      "description": categoryDescription
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function BlogListingSchema() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": `${BUSINESS_INFO.name} Surf Blog`,
    "description": "Expert surf guides, wave reports, and insider tips for surfing in Da Nang and Vietnam",
    "url": "https://surffeeling.vn/blog",
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://surffeeling.vn/logo.png"
      },
      "url": "https://surffeeling.vn",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Da Nang",
        "addressCountry": "Vietnam",
        "streetAddress": BUSINESS_INFO.address
      },
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Surf Blog Posts",
      "description": "Collection of expert surf guides and tips",
      "url": "https://surffeeling.vn/blog"
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Surfing in Vietnam",
        "description": "Comprehensive guides to surfing in Vietnam"
      },
      {
        "@type": "Place",
        "name": "Da Nang",
        "description": "Premier surf destination in Central Vietnam"
      },
      {
        "@type": "Service",
        "name": "Surf Instruction",
        "provider": {
          "@type": "Organization",
          "name": BUSINESS_INFO.name
        }
      }
    ],
    "keywords": "Da Nang surf blog, Vietnam surfing guide, surf lessons, wave reports, surf conditions, surf spots Vietnam",
    "inLanguage": "en-US"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}