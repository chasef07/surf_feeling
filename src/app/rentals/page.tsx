import { Metadata } from "next"
import Image from "next/image"
import { Waves, Clock, Shield, MapPin, CheckCircle, Star, Truck, Target, MessageCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BUSINESS_INFO, RENTAL_BOARDS } from "@/lib/constants"
import { rentalsPageSEO } from "@/lib/seo"
import { SurfboardRentalSchema } from "@/components/seo/business-schema"

export const metadata: Metadata = rentalsPageSEO()


export default function RentalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Structured Data for Surfboard Rentals */}
      <SurfboardRentalSchema />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                <Waves className="h-4 w-4 mr-2" />
                Premium Board Rentals
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Surfboard Rentals in <br />
              <span className="text-yellow-300">Da Nang</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-cyan-100">
              Surf Feeling is more than just a surf shop, we&apos;re a community. We pride ourselves on sharing the love of surfing with locals and travelers alike.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hi! I'd like to rent a surfboard in Da Nang.`} target="_blank" rel="noopener noreferrer">
                  Rent via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
                View Board Types
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Rentals Showcase Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-80 md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-xl mb-8">
              <Image
                src="/images/rentals.jpg"
                alt="Surf Feeling surfboard rentals in Da Nang"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Premium Surfboard Collection</h3>
                <p className="text-lg opacity-90">Ready for your Da Nang surf adventure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Boards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Rent from Surf Feeling?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Surf Feeling has a variety of surfboards for rent in Da Nang: soft boards for beginners, mid-length fun boards for all skill levels, and high-performance shortboards. All our boards are well-maintained and affordably priced to ensure you have the ultimate surfing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-sm text-gray-600">All boards are regularly inspected and maintained to ensure optimal performance</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Free Board Delivery</h3>
                <p className="text-sm text-gray-600">We offer free board delivery anywhere within a 2km radius of our shop</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Flexible Timing</h3>
                <p className="text-sm text-gray-600">Boards can be rented hourly, daily, weekly, and monthly</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Expert Advice</h3>
                <p className="text-sm text-gray-600">We will help you choose the right board for your skill level and the best surf spot based on conditions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Collection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Board Collection
            </h2>
            <p className="text-xl text-gray-600">
              Premium surfboards for every level and style
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">Board</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Features</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {RENTAL_BOARDS.map((board) => (
                      <TableRow key={board.id}>
                        <TableCell className="font-medium">
                          <div>
                            <div className="font-semibold">{board.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{board.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {board.type.replace("_", " ")}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {board.features.map((feature, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge variant={board.available ? "default" : "destructive"}>
                            {board.available ? "Available" : "Rented"}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Rash guard included</strong> with every board rental. Wetsuit rental available upon request for additional fee.
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <strong>Not confident about surfing on your own?</strong> Take a surf lesson or surf with one of our experienced guides.
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg text-gray-600 mb-6">
                Surf Feeling is also the only surf shop in Da Nang that offers free surfboard delivery and pick-up anywhere in the city.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hi! I have questions about surfboard rentals in Da Nang.`} target="_blank" rel="noopener noreferrer">
                  Contact Us on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}