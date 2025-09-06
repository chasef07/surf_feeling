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
              Surf Lesson Types in Da Nang
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from group lessons, private instruction, kids lessons, or comprehensive fundamentals courses designed to create independent surfers
            </p>
          </div>

          <Tabs defaultValue="group" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 h-auto bg-transparent p-1">
              <TabsTrigger value="group" className="text-center py-4 px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <div className="flex flex-col items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span className="text-sm font-medium">Group</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="private" className="text-center py-4 px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <div className="flex flex-col items-center gap-2">
                  <Award className="h-5 w-5" />
                  <span className="text-sm font-medium">Private</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="kids" className="text-center py-4 px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <div className="flex flex-col items-center gap-2">
                  <Waves className="h-5 w-5" />
                  <span className="text-sm font-medium">Kids</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="course" className="text-center py-4 px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <div className="flex flex-col items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">Courses</span>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Group Lessons */}
            <TabsContent value="group" className="space-y-8">
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-blue-900">Group Surf Lessons in Da Nang</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Small group classes with 2-3 students per instructor for personalized attention and accelerated learning
                  </CardDescription>
                </CardHeader>
              </Card>
              <div className="grid grid-cols-1 gap-6">
                {LESSON_PACKAGES.filter(pkg => pkg.type === "group").map((lesson) => (
                  <Card key={lesson.id} className="relative overflow-hidden">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{lesson.title}</CardTitle>
                          <CardDescription className="mt-2">{lesson.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {lesson.duration * 60} minutes
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            Max {lesson.maxParticipants} students per instructor
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
                      <Button asChild className="w-full">
                        <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hi! I'd like to book a group surf lesson in Da Nang.`} target="_blank" rel="noopener noreferrer">
                          Book via WhatsApp
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Private Lessons */}
            <TabsContent value="private" className="space-y-8">
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-green-900">Private Surf Lessons in Da Nang</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    One-on-one instruction with certified instructors. Choose from 60, 90, or 120-minute sessions
                  </CardDescription>
                </CardHeader>
              </Card>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {LESSON_PACKAGES.filter(pkg => pkg.type === "private").map((lesson) => (
                  <Card key={lesson.id} className="relative overflow-hidden">
                    <CardHeader>
                      <div>
                        <CardTitle className="text-xl">{lesson.title}</CardTitle>
                        <CardDescription className="mt-2">{lesson.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {lesson.duration * 60} minutes
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            1-on-1 instruction
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
                      <Button asChild className="w-full">
                        <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hi! I'd like to book a ${lesson.title.toLowerCase()} in Da Nang.`} target="_blank" rel="noopener noreferrer">
                          Book via WhatsApp
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Kids Lessons */}
            <TabsContent value="kids" className="space-y-8">
              <Card className="bg-gradient-to-r from-yellow-50 to-orange-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-orange-900">Kids Surf Lessons in Da Nang</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Safe and fun surf lessons for children of all ages with experienced instructors specialized in teaching kids
                  </CardDescription>
                </CardHeader>
              </Card>
              <div className="grid grid-cols-1 gap-6">
                {LESSON_PACKAGES.filter(pkg => pkg.type === "kids").map((lesson) => (
                  <Card key={lesson.id} className="relative overflow-hidden">
                    <CardHeader>
                      <div>
                        <CardTitle className="text-xl">{lesson.title}</CardTitle>
                        <CardDescription className="mt-2">{lesson.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {lesson.duration * 60} minutes
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            Max {lesson.maxParticipants} kids
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
                      <Button asChild className="w-full">
                        <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hi! I'd like to book a kids surf lesson in Da Nang.`} target="_blank" rel="noopener noreferrer">
                          Book via WhatsApp
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Fundamentals Courses */}
            <TabsContent value="course" className="space-y-8">
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-purple-900">Fundamentals Surf Courses in Da Nang</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Comprehensive multi-lesson packages designed to create independent surfers through structured curriculum
                  </CardDescription>
                </CardHeader>
              </Card>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {LESSON_PACKAGES.filter(pkg => pkg.type === "course").map((lesson) => (
                  <Card key={lesson.id} className="relative overflow-hidden">
                    <CardHeader>
                      <div>
                        <CardTitle className="text-xl">{lesson.title}</CardTitle>
                        <CardDescription className="mt-2">{lesson.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {lesson.duration} hours total
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            Private instruction
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
                      <Button asChild className="w-full">
                        <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hi! I'd like to book the ${lesson.title.toLowerCase()} in Da Nang.`} target="_blank" rel="noopener noreferrer">
                          Book via WhatsApp
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Our Lessons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Surf Feeling for Surf Lessons in Da Nang?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by experienced surfers committed to creating independent surfers, not students dependent on instructors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Small Group Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We keep group lessons to 2-3 students per instructor, ensuring personalized attention and faster progression for every surfer in Da Nang.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Independence-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our curriculum emphasizes safety, wave theory, and self-practice to give you the skills needed to surf independently after your lessons.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Experienced Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Internationally certified instructors with years of experience teaching surfers of all skill levels, nationalities, ages, and genders.
                </p>
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

      {/* Disclaimer Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Waves className="h-6 w-6 text-yellow-600" />
                <h3 className="text-xl font-semibold text-yellow-800">Important Notice</h3>
              </div>
              <p className="text-yellow-700 leading-relaxed">
                Surf Feeling reserves the right to cancel or reschedule lessons if wave conditions are unsuitable for surfing. 
                Your safety is our top priority, and we will work with you to find the best alternative date and time for your lesson.
              </p>
              <div className="mt-6">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hi! I'd like to book a surf lesson in Da Nang and have some questions.`} target="_blank" rel="noopener noreferrer">
                    Contact Us on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}