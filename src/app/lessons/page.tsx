import { Metadata } from "next"
import { Waves, Users, Clock, Award, CheckCircle, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ContactForm } from "@/components/shared/contact-form"
import { BUSINESS_INFO, LESSON_PACKAGES, INSTRUCTORS, SURF_LEVELS } from "@/lib/constants"
import { lessonsPageSEO } from "@/lib/seo"
import { SurfLessonsServiceSchema } from "@/components/seo/business-schema"

export const metadata: Metadata = lessonsPageSEO()

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Structured Data for Surf Lessons Service */}
      <SurfLessonsServiceSchema />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                <Waves className="h-4 w-4 mr-2" />
                Professional Surf Instruction
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Surf Lessons in <br />
              <span className="text-yellow-300">Da Nang</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Learn to surf with {BUSINESS_INFO.name}&apos;s certified instructors at Vietnam&apos;s most beautiful beaches
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                Book Your Lesson
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Packages
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Lesson Types Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Surfing Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From complete beginner to advanced surfer, we have the perfect lesson for your skill level
            </p>
          </div>

          <Tabs defaultValue="beginner" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="beginner" className="text-center">
                <div className="flex flex-col items-center">
                  <Users className="h-5 w-5 mb-1" />
                  Beginner
                </div>
              </TabsTrigger>
              <TabsTrigger value="intermediate" className="text-center">
                <div className="flex flex-col items-center">
                  <Waves className="h-5 w-5 mb-1" />
                  Intermediate
                </div>
              </TabsTrigger>
              <TabsTrigger value="advanced" className="text-center">
                <div className="flex flex-col items-center">
                  <Award className="h-5 w-5 mb-1" />
                  Advanced
                </div>
              </TabsTrigger>
            </TabsList>

            {Object.entries(SURF_LEVELS).map(([level, info]) => (
              <TabsContent key={level} value={level} className="space-y-8">
                <Card className="bg-gradient-to-r from-blue-50 to-cyan-50">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-blue-900">{info.label} Lessons</CardTitle>
                    <CardDescription className="text-lg text-gray-600">{info.description}</CardDescription>
                  </CardHeader>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {LESSON_PACKAGES.filter(pkg => pkg.level === level).map((lesson) => (
                    <Card key={lesson.id} className="relative overflow-hidden">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{lesson.title}</CardTitle>
                            <CardDescription className="mt-2">{lesson.description}</CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">
                              ${lesson.priceUSD}
                            </div>
                            <div className="text-sm text-gray-500">
                              {lesson.price.toLocaleString()} VND
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {lesson.duration}h
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              Max {lesson.maxParticipants} people
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">What&apos;s Included:</h4>
                            <ul className="space-y-1">
                              {lesson.includes.map((item, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Book This Lesson</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Lesson Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing with no hidden fees
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Lesson Type</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Max People</TableHead>
                      <TableHead>Price (USD)</TableHead>
                      <TableHead>Price (VND)</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {LESSON_PACKAGES.map((lesson) => (
                      <TableRow key={lesson.id}>
                        <TableCell className="font-medium">
                          <div>
                            <div>{lesson.title}</div>
                            <Badge variant="secondary" className="mt-1">
                              {lesson.level}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>{lesson.duration}h</TableCell>
                        <TableCell>{lesson.maxParticipants}</TableCell>
                        <TableCell className="font-semibold">${lesson.priceUSD}</TableCell>
                        <TableCell className="text-gray-600">{lesson.price.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm">Book Now</Button>
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

      {/* Instructors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Your Instructors
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn from certified surf professionals with years of experience teaching in Da Nang&apos;s waters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {INSTRUCTORS.map((instructor) => (
              <Card key={instructor.id} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                    {instructor.nickname[0]}
                  </div>
                  <CardTitle>{instructor.name}</CardTitle>
                  <div className="space-y-2">
                    <Badge variant="outline" className="mb-2">{instructor.speciality}</Badge>
                    <CardDescription>{instructor.experience} experience</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{instructor.bio}</p>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-semibold text-sm">Languages:</h4>
                      <p className="text-sm text-gray-600">{instructor.languages.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Certifications:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {instructor.certifications.map((cert, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Start Surfing?
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Book your surf lesson today and experience the thrill of riding waves at Da Nang&apos;s best beaches with Surf Feeling&apos;s professional instructors.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-900" />
                    </div>
                    <span>Certified professional instructors</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-900" />
                    </div>
                    <span>All equipment included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-900" />
                    </div>
                    <span>Small group sizes for personalized attention</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-blue-900" />
                    </div>
                    <span>Safety-first approach</span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold">4.9/5 Rating</span>
                  </div>
                  <p className="text-blue-100 text-sm">
                    &ldquo;Amazing experience! The instructors were so patient and knowledgeable. Got me standing on the board in my first lesson!&rdquo; - Sarah M.
                  </p>
                </div>
              </div>

              <div>
                <ContactForm 
                  defaultService="lessons"
                  title="Book Your Lesson"
                  description="Tell us about your experience level and preferred dates"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}