import { Metadata } from "next"
import { Waves, Clock, Shield, MapPin, CheckCircle, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ContactForm } from "@/components/shared/contact-form"
import { RENTAL_BOARDS } from "@/lib/constants"
import { rentalsPageSEO } from "@/lib/seo"
import { SurfboardRentalSchema } from "@/components/seo/business-schema"

export const metadata: Metadata = rentalsPageSEO()

const formatPrice = (price: number) => {
  return `${price.toLocaleString()} VND`
}

const formatUSDPrice = (vndPrice: number) => {
  return `$${Math.round(vndPrice / 25000)}`
}

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
              High-quality surfboards for every skill level. Rent by the hour, day, or week at Vietnam&apos;s best surf spots.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                Rent a Board
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-cyan-600">
                View Our Fleet
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Why Choose Our Boards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Rent from Surf Feeling?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain the highest quality boards and offer the best service in Da Nang
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
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Perfect Locations</h3>
                <p className="text-sm text-gray-600">Conveniently located at My Khe and Bac My An beaches</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Flexible Timing</h3>
                <p className="text-sm text-gray-600">Hourly, daily, and weekly rates to fit your surf schedule</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Expert Advice</h3>
                <p className="text-sm text-gray-600">Our team helps you choose the perfect board for your skill level</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Board Collection
            </h2>
            <p className="text-xl text-gray-600">
              Premium surfboards for every level and style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {RENTAL_BOARDS.map((board) => (
              <Card key={board.id} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-cyan-400 to-blue-500 relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={board.available ? "default" : "destructive"}>
                      {board.available ? "Available" : "Rented"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">
                      {formatUSDPrice(board.dailyRate)}/day
                    </div>
                    <div className="text-sm opacity-90">
                      {formatPrice(board.dailyRate)}
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{board.name}</span>
                    <Badge variant="outline" className="capitalize">
                      {board.type.replace("_", " ")}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{board.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-semibold text-cyan-600">
                          {formatUSDPrice(board.hourlyRate)}
                        </div>
                        <div className="text-xs text-gray-500">Hourly</div>
                        <div className="text-xs text-gray-400">{formatPrice(board.hourlyRate)}</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-blue-600">
                          {formatUSDPrice(board.dailyRate)}
                        </div>
                        <div className="text-xs text-gray-500">Daily</div>
                        <div className="text-xs text-gray-400">{formatPrice(board.dailyRate)}</div>
                      </div>
                      <div>
                        <div className="text-lg font-semibold text-green-600">
                          {formatUSDPrice(board.weeklyRate)}
                        </div>
                        <div className="text-xs text-gray-500">Weekly</div>
                        <div className="text-xs text-gray-400">{formatPrice(board.weeklyRate)}</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {board.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button className="w-full" disabled={!board.available}>
                    {board.available ? "Rent This Board" : "Currently Rented"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Rental Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Competitive rates with no hidden fees
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Board</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Hourly</TableHead>
                      <TableHead>Daily</TableHead>
                      <TableHead>Weekly</TableHead>
                      <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {RENTAL_BOARDS.map((board) => (
                      <TableRow key={board.id}>
                        <TableCell className="font-medium">
                          <div>
                            <div>{board.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{board.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {board.type.replace("_", " ")}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold">{formatUSDPrice(board.hourlyRate)}</div>
                          <div className="text-xs text-gray-500">{formatPrice(board.hourlyRate)}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold text-blue-600">{formatUSDPrice(board.dailyRate)}</div>
                          <div className="text-xs text-gray-500">{formatPrice(board.dailyRate)}</div>
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold text-green-600">{formatUSDPrice(board.weeklyRate)}</div>
                          <div className="text-xs text-gray-500">{formatPrice(board.weeklyRate)}</div>
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

      {/* Rental Terms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Rental Terms & Conditions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about renting with Surf Feeling
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    What&apos;s Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Surfboard in excellent condition</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Leash and fins included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Board wax application</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Basic safety briefing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Local surf conditions advice</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    Rental Policies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Valid ID required for all rentals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Security deposit may be required</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Damage fees apply if board is damaged</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Late returns incur additional charges</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Rental agreement must be signed</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Hit the Waves?
                </h2>
                <p className="text-xl mb-8 text-cyan-100">
                  Reserve your perfect surfboard today and experience Da Nang&apos;s amazing waves with confidence on quality equipment.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-900" />
                    </div>
                    <span>High-quality boards for all skill levels</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-900" />
                    </div>
                    <span>Flexible rental periods (hourly/daily/weekly)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-900" />
                    </div>
                    <span>Convenient beach locations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-900" />
                    </div>
                    <span>Expert recommendations for your level</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">My Khe Beach</h3>
                    <p className="text-cyan-100 text-sm">Main location with full board selection</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Bac My An</h3>
                    <p className="text-cyan-100 text-sm">Quieter spot, boards available on request</p>
                  </div>
                </div>
              </div>

              <div>
                <ContactForm 
                  defaultService="rentals"
                  title="Reserve a Board"
                  description="Let us know what type of board and rental period you need"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}