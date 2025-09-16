import { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, TrendingUp, Waves } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BUSINESS_INFO, BLOG_POSTS } from "@/lib/constants"
import { BlogListingSchema } from "@/components/seo/structured-data"

import { blogPageSEO } from "@/lib/seo"

export const metadata: Metadata = blogPageSEO()

export default function BlogPage() {

  return (
    <>
      <BlogListingSchema />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-slate-800 text-white">
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
              <span className="text-white">Surf Blog</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Your ultimate guide to surfing in Da Nang and Vietnam. Get the latest wave reports, local spots, and expert tips from our professional instructors.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white hover:bg-blue-50 text-blue-900">
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hi! I'd like to get the latest surf report for Da Nang.`} target="_blank" rel="noopener noreferrer">
                  Latest Surf Report
                </a>
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
            </div>
          </div>
        </div>
      </section>

      {/* All Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Surf Guides & Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expert guides and local insights from our professional surf instructors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="aspect-video bg-gradient-to-r from-blue-400 to-cyan-500 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/90 text-blue-900">
                        Surf Guide
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-lg lg:text-xl line-clamp-2 mb-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
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
                        Read Article
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

    </div>
    </>
  )
}