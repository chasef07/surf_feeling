import { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, TrendingUp, Waves, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { BUSINESS_INFO, BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants"
import { BlogListingSchema } from "@/components/seo/structured-data"

import { blogPageSEO } from "@/lib/seo"

export const metadata: Metadata = blogPageSEO()

export default function BlogPage() {
  const featuredPosts = BLOG_POSTS.filter(post => post.featured)
  const recentPosts = BLOG_POSTS.filter(post => !post.featured)
  const categories = Object.values(BLOG_CATEGORIES)

  return (
    <>
      <BlogListingSchema />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                <Waves className="h-4 w-4 mr-2" />
                Surf Guides & Local Insights
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {BUSINESS_INFO.name} <br />
              <span className="text-yellow-300">Surf Blog</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Your ultimate guide to surfing in Da Nang and Vietnam. Get the latest wave reports, local spots, and expert tips from our professional instructors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                Latest Surf Report
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Browse All Posts
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Input 
                    placeholder="Search surf guides, wave reports, tips..." 
                    className="pl-4 pr-10"
                  />
                  <Button size="sm" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3">
                    Search
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-blue-50">
                  All Categories
                </Badge>
                {categories.slice(0, 4).map((category) => (
                  <Badge 
                    key={category.slug}
                    variant="outline" 
                    className="cursor-pointer hover:bg-blue-50"
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Featured Surf Guides
                </h2>
              </div>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our most popular and comprehensive guides to help you make the most of your Vietnam surf experience
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-r from-blue-400 to-cyan-500 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/90 text-blue-900">
                        {BLOG_CATEGORIES[post.category as keyof typeof BLOG_CATEGORIES].name}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl lg:text-2xl line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} min read
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/blog/${post.slug}`} className="w-full">
                      <Button className="w-full" variant="outline">
                        Read Full Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts and Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Main Content - Recent Posts */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                  Recent Surf Posts
                </h2>
                
                <div className="space-y-6">
                  {recentPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-64 aspect-video sm:aspect-square bg-gradient-to-br from-blue-400 to-cyan-500 relative flex-shrink-0">
                          <div className="absolute inset-0 bg-black/10"></div>
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-white/90 text-blue-900 text-xs">
                              {BLOG_CATEGORIES[post.category as keyof typeof BLOG_CATEGORIES].name}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex-1 p-6">
                          <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-lg lg:text-xl line-clamp-2 mb-2">
                              {post.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2">
                              {post.excerpt}
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent className="p-0">
                            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600 mb-3">
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {post.author}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {new Date(post.publishedAt).toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {post.readTime} min
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-1">
                                {post.tags.slice(0, 2).map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                              <Link href={`/blog/${post.slug}`}>
                                <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-800">
                                  Read More
                                  <ArrowRight className="ml-1 h-3 w-3" />
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Blog Categories
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category.slug}>
                          <Link 
                            href={`/blog/category/${category.slug}`}
                            className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {category.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {category.description}
                            </p>
                          </Link>
                          <Separator className="mt-3" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Tags</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Da Nang", "surf lessons", "beginner", "conditions", "travel guide", "equipment", "Vietnam", "surf spots", "safety", "waves"].map((tag) => (
                        <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">Stay Updated</CardTitle>
                    <CardDescription className="text-blue-100">
                      Get the latest surf conditions and guides delivered to your inbox
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Input 
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 placeholder:text-blue-100 text-white"
                      />
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                        Subscribe to Updates
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact CTA */}
                <Card>
                  <CardHeader>
                    <CardTitle>Ready to Surf?</CardTitle>
                    <CardDescription>
                      Book your lesson with {BUSINESS_INFO.name} today
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Link href="/lessons">
                        <Button className="w-full">
                          Book Surf Lesson
                        </Button>
                      </Link>
                      <Link href="/rentals">
                        <Button variant="outline" className="w-full">
                          Rent Equipment
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}