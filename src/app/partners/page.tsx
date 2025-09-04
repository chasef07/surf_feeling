import { Metadata } from "next"
import { Handshake, Building, Plane, Wrench, GraduationCap, ExternalLink, CheckCircle, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PartnerInquiryForm } from "@/components/shared/partner-inquiry-form"
import { PARTNERS_LIST } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Partners - Surf Feeling Da Nang",
  description: "Partner with Surf Feeling Da Nang for exclusive surf packages, accommodation deals, and collaboration opportunities in Vietnam&apos;s surf industry.",
  keywords: ["surf partners Da Nang", "accommodation partnerships", "tour operator collaboration", "Surf Feeling partnerships"],
}

const getPartnerIcon = (type: string) => {
  switch (type) {
    case "accommodation":
      return Building
    case "tour_operator":
      return Plane
    case "equipment_supplier":
      return Wrench
    case "surf_school":
      return GraduationCap
    default:
      return Handshake
  }
}

const getPartnerTypeLabel = (type: string) => {
  switch (type) {
    case "accommodation":
      return "Accommodation"
    case "tour_operator":
      return "Tour Operator"
    case "equipment_supplier":
      return "Equipment Supplier"
    case "surf_school":
      return "Surf School"
    default:
      return "Partner"
  }
}

const getBadgeColor = (type: string) => {
  switch (type) {
    case "accommodation":
      return "default"
    case "tour_operator":
      return "secondary"
    case "equipment_supplier":
      return "outline"
    case "surf_school":
      return "default"
    default:
      return "secondary"
  }
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                <Handshake className="h-4 w-4 mr-2" />
                Partnership Network
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Surf Feeling <br />
              <span className="text-yellow-300">Partners</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100">
              Collaborating with the best businesses in Da Nang to provide you with exceptional surf experiences and comprehensive services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-green-900">
                Become a Partner
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                View Partners
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Surf Feeling?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our network of trusted partners and grow your business while providing exceptional value to our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Premium Brand</h3>
                <p className="text-sm text-gray-600">Associate with Surf Feeling&apos;s reputation for quality and safety in Da Nang&apos;s surf scene</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Mutual Benefits</h3>
                <p className="text-sm text-gray-600">Cross-promotional opportunities that benefit both businesses and our shared customers</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Handshake className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Professional Network</h3>
                <p className="text-sm text-gray-600">Join a curated network of quality businesses serving tourists and locals in Da Nang</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600">
              Meet the amazing businesses we work with to enhance your surf experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {PARTNERS_LIST.map((partner) => {
              const IconComponent = getPartnerIcon(partner.type)
              return (
                <Card key={partner.id} className="overflow-hidden">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center text-white">
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{partner.name}</CardTitle>
                          <Badge variant={getBadgeColor(partner.type)} className="mt-1">
                            {getPartnerTypeLabel(partner.type)}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {partner.description}
                    </CardDescription>

                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold mb-2">Partnership Benefits:</h4>
                        <ul className="space-y-1">
                          {partner.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2 border-t">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">Contact:</p>
                            <p className="text-sm font-medium">{partner.contact}</p>
                          </div>
                          {partner.website && (
                            <Button variant="outline" size="sm" asChild>
                              <a href={partner.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Visit Website
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We&apos;re always looking for quality businesses to join our network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Accommodation</h3>
                <p className="text-sm text-gray-600 mb-4">Hotels, resorts, hostels, and guesthouses looking to offer surf packages to guests</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Exclusive surf packages</li>
                  <li>• Guest transportation</li>
                  <li>• Equipment storage</li>
                  <li>• Marketing collaboration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Plane className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Tour Operators</h3>
                <p className="text-sm text-gray-600 mb-4">Adventure and travel companies wanting to include surf experiences</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Multi-day surf tours</li>
                  <li>• Adventure combinations</li>
                  <li>• Group bookings</li>
                  <li>• Custom itineraries</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Equipment Suppliers</h3>
                <p className="text-sm text-gray-600 mb-4">Surf shops, board shapers, and equipment manufacturers</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Board repairs & sales</li>
                  <li>• Equipment testing</li>
                  <li>• Brand partnerships</li>
                  <li>• Custom boards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Surf Schools</h3>
                <p className="text-sm text-gray-600 mb-4">Other certified surf schools for instructor exchange and expanded coverage</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Instructor exchange</li>
                  <li>• Joint certifications</li>
                  <li>• Expanded locations</li>
                  <li>• Shared resources</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Partnership Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to join our partner network
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Apply</h3>
                <p className="text-gray-600">Submit your partnership inquiry with details about your business and proposed collaboration</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">Evaluate</h3>
                <p className="text-gray-600">We review your application and schedule a meeting to discuss partnership opportunities</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 text-white rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">Launch</h3>
                <p className="text-gray-600">Sign partnership agreement and begin collaborative marketing and service delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Partner with Us?
                </h2>
                <p className="text-xl mb-8 text-green-100">
                  Join Surf Feeling&apos;s growing network of partners and create amazing experiences for surf enthusiasts in Da Nang.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-900" />
                    </div>
                    <span>Established brand with strong local reputation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-900" />
                    </div>
                    <span>Growing customer base of locals and tourists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-900" />
                    </div>
                    <span>Professional approach to business collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-green-900" />
                    </div>
                    <span>Focus on quality and customer satisfaction</span>
                  </div>
                </div>

                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <h3 className="font-semibold mb-2">Partnership Benefits Include:</h3>
                  <ul className="text-green-100 text-sm space-y-1">
                    <li>• Cross-promotional marketing</li>
                    <li>• Shared customer referrals</li>
                    <li>• Joint packages and special offers</li>
                    <li>• Professional network access</li>
                  </ul>
                </div>
              </div>

              <div>
                <PartnerInquiryForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}