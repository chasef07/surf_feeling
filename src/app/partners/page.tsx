import { Metadata } from "next"
import { ExternalLink, MapPin, Phone, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Helpful Links - Surf Feeling Da Nang",
  description: "Discover our recommended local businesses in Da Nang including surf shops, tattoo studios, and great places to eat while visiting for your surf lessons.",
  keywords: ["Da Nang surf shop", "Da Nang tattoo", "Da Nang coffee", "local recommendations", "Surf Feeling recommendations"],
}

const helpfulLinks = [
  {
    id: 1,
    name: "Da Nang Surf Shop",
    description: "Local Vietnamese surf equipment wholesaler specializing in supplying quality surf gear to businesses and individual surfers. They offer a comprehensive range of surfboards including foam boards, fish/hybrid boards, performance shortboards, longboards, SUPs, and accessories.",
    category: "Surf Equipment",
    website: "https://danangsurfshop.vn/",
    phone: "093.499.2703",
    address: "58 Thạch Lam, Phước Mỹ, Quận Sơn Trà, TP. Đà Nẵng",
    highlights: ["Local surf expertise", "Quality-assured products", "Diverse selection", "Trusted brands"]
  },
  {
    id: 2,
    name: "Lantern & Moth Tattoo",
    description: "Australian-owned tattoo studio located in Da Nang's An Thuong area, specializing in custom tattoos with international hygiene standards. Offering traditional, fineline, realism, and neo-traditional designs with English-speaking artists.",
    category: "Tattoo Studio",
    website: "https://www.lanternandmothtattoo.com/",
    phone: "+84 76 575 6690",
    address: "55 Đ. Ng. Thì Sĩ, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng",
    highlights: ["English-speaking artists", "International hygiene standards", "Free consultations", "Walk-ins welcome"]
  },
  {
    id: 3,
    name: "Coffee & Banh Mi Minh",
    description: "A beloved local coffee and banh mi shop in Da Nang, perfect for grabbing authentic Vietnamese coffee and delicious banh mi sandwiches before or after your surf session.",
    category: "Food & Beverage",
    website: null,
    phone: null,
    address: "117 Lê Hữu Trác, TP Đà Nẵng",
    highlights: ["Authentic Vietnamese coffee", "Fresh banh mi", "Local favorite", "Great prices"]
  }
]

export default function HelpfulLinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Helpful <br />
              <span className="text-white">Links</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              We have no financial interest in the businesses listed below. They&apos;re here because we know they&apos;re reputable and share the same genuine passion for their craft.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Helpful Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Local Recommendations
            </h2>
            <p className="text-xl text-gray-600">
              Quality businesses we recommend during your visit to Da Nang
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {helpfulLinks.map((business) => (
              <Card key={business.id} className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{business.name}</CardTitle>
                      <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {business.category}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 flex-1">
                    {business.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {business.highlights.map((highlight, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3 pt-4 border-t">
                    {business.address && (
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{business.address}</span>
                      </div>
                    )}
                    
                    {business.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{business.phone}</span>
                      </div>
                    )}

                    {business.website && (
                      <div className="pt-2">
                        <Button variant="outline" size="sm" asChild className="w-full">
                          <a href={business.website} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-4 w-4 mr-2" />
                            Visit Website
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}