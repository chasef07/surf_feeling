import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, ChevronRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BUSINESS_INFO, BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants"
import { BlogCategorySchema } from "@/components/seo/structured-data"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

async function getCategory(slug: string) {
  const categoryEntry = Object.entries(BLOG_CATEGORIES).find(([, category]) => category.slug === slug)
  if (!categoryEntry) {
    return null
  }
  return {
    key: categoryEntry[0],
    ...categoryEntry[1]
  }
}

async function getCategoryPosts(categoryKey: string) {
  return BLOG_POSTS.filter(post => post.category === categoryKey)
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getCategory(params.slug)
  
  if (!category) {
    return {
      title: "Category Not Found - Surf Feeling Blog",
    }
  }

  return {
    title: `${category.name} - Surf Feeling Blog`,
    description: `${category.description}. Expert guides and insights from Surf Feeling&apos;s professional instructors in Da Nang, Vietnam.`,
    keywords: [`Surf Feeling ${category.name.toLowerCase()}`, `Da Nang ${category.name.toLowerCase()}`, `Vietnam surf ${category.name.toLowerCase()}`, `${category.name} Vietnam`, `surf ${category.name.toLowerCase()}`],
    openGraph: {
      title: `${category.name} - Surf Feeling Blog`,
      description: category.description,
      url: `https://surffeeling.vn/blog/category/${category.slug}`,
      siteName: BUSINESS_INFO.name,
      images: [
        {
          url: `/blog/category/${category.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${category.name} - Surf Feeling Blog`
        }
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} - Surf Feeling`,
      description: category.description,
      images: [`/blog/category/${category.slug}.jpg`],
    },
    alternates: {
      canonical: `https://surffeeling.vn/blog/category/${category.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.values(BLOG_CATEGORIES).map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategory(params.slug)
  
  if (!category) {
    notFound()
  }

  const posts = await getCategoryPosts(category.key)

  return (
    <>
      <BlogCategorySchema
        categoryName={category.name}
        categoryDescription={category.description}
        categorySlug={category.slug}
        postCount={posts.length}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600 max-w-6xl mx-auto">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">{category.name}</span>
          </div>
        </div>
      </nav>

      {/* Category Header */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                {BUSINESS_INFO.name} Blog
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {category.name}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              {category.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  All Blog Posts
                </Button>
              </Link>
              <Link href="/lessons">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                  Book Surf Lesson
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  No posts found in this category yet
                </h2>
                <p className="text-gray-600 mb-8">
                  Check back soon for new {category.name.toLowerCase()} content!
                </p>
                <Link href="/blog">
                  <Button>
                    Browse All Posts
                  </Button>
                </Link>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {posts.length} {posts.length === 1 ? 'Post' : 'Posts'} in {category.name}
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Expert guidance and local insights from {BUSINESS_INFO.name}&apos;s professional instructors
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                      <div className="aspect-video bg-gradient-to-r from-blue-400 to-cyan-500 relative">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute bottom-4 left-4">
                          <Badge className="bg-white/90 text-blue-900">
                            {category.name}
                          </Badge>
                        </div>
                        {post.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-yellow-500 text-yellow-900">
                              Featured
                            </Badge>
                          </div>
                        )}
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
                        <div className="space-y-4">
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
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
                              {post.readTime} min
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="pt-0">
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

                {/* Pagination placeholder - could be implemented with more posts */}
                <div className="mt-12 text-center">
                  <p className="text-gray-600 text-sm">
                    Showing all {posts.length} posts in {category.name}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
              Explore Other Categories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(BLOG_CATEGORIES)
                .filter(([key]) => key !== category.key)
                .map(([key, otherCategory]) => {
                  const categoryPosts = BLOG_POSTS.filter(post => post.category === key)
                  return (
                    <Card key={key} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {otherCategory.name}
                        </CardTitle>
                        <CardDescription>
                          {otherCategory.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">
                          {categoryPosts.length} {categoryPosts.length === 1 ? 'post' : 'posts'} available
                        </p>
                        <Link href={`/blog/category/${otherCategory.slug}`}>
                          <Button variant="outline" className="w-full">
                            View {otherCategory.name}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  )
                })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Put This Knowledge into Practice?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Book a surf lesson with {BUSINESS_INFO.name} and experience everything you&apos;ve learned about {category.name.toLowerCase()} firsthand with our professional instructors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lessons">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                  Book Your Lesson
                </Button>
              </Link>
              <Link href="/rentals">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Rent Equipment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}