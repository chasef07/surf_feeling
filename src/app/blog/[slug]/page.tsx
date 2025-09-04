import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Bookmark, ChevronRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BUSINESS_INFO, BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants"
import { ContactForm } from "@/components/shared/contact-form"
import { BlogPostSchema } from "@/components/seo/structured-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string) {
  const post = BLOG_POSTS.find(post => post.slug === slug)
  if (!post) {
    return null
  }
  return post
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found - Surf Feeling",
    }
  }

  return {
    title: `${post.title} - Surf Feeling Blog`,
    description: post.excerpt,
    keywords: [...post.seoKeywords],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://surffeeling.vn/blog/${post.slug}`,
      siteName: BUSINESS_INFO.name,
      images: [
        {
          url: `/blog/images/${post.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      locale: "en_US",
      type: "article",
      authors: [post.author],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      section: BLOG_CATEGORIES[post.category as keyof typeof BLOG_CATEGORIES].name,
      tags: [...post.tags],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`/blog/images/${post.slug}.jpg`],
    },
    alternates: {
      canonical: `https://surffeeling.vn/blog/${post.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const category = BLOG_CATEGORIES[post.category as keyof typeof BLOG_CATEGORIES]
  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2)

  // Format content for rendering (convert markdown-like content to HTML)
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map(line => {
        if (line.startsWith('# ')) {
          return `<h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">${line.slice(2)}</h1>`
        }
        if (line.startsWith('## ')) {
          return `<h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8">${line.slice(3)}</h2>`
        }
        if (line.startsWith('### ')) {
          return `<h3 class="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 mt-6">${line.slice(4)}</h3>`
        }
        if (line.startsWith('**') && line.endsWith('**')) {
          return `<p class="font-semibold text-gray-900 mb-2">${line.slice(2, -2)}</p>`
        }
        if (line.startsWith('- ')) {
          return `<li class="mb-1">${line.slice(2)}</li>`
        }
        if (line.trim() === '') {
          return '<br>'
        }
        return `<p class="mb-4 text-gray-700 leading-relaxed">${line}</p>`
      })
      .join('')
  }

  return (
    <>
      <BlogPostSchema
        title={post.title}
        description={post.excerpt}
        author={post.author}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        slug={post.slug}
        category={post.category}
        tags={[...post.tags]}
        readTime={post.readTime}
      />
      <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b">
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
            <Link href={`/blog/category/${post.category}`} className="hover:text-blue-600 transition-colors">
              {category.name}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 truncate">{post.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="mb-6">
                <Link href="/blog">
                  <Button variant="ghost" size="sm" className="mb-4">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blog
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="default" className="bg-blue-600">
                    {category.name}
                  </Badge>
                  {post.featured && (
                    <Badge variant="secondary">
                      Featured Guide
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700 font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-600">{post.readTime} min read</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Button size="sm" variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" variant="outline">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
            </header>

            <Separator className="mb-12" />

            {/* Featured Image Placeholder */}
            <div className="aspect-video bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl mb-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                  <p className="text-blue-100">Professional surf guidance from {BUSINESS_INFO.name}</p>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="space-y-4"
                dangerouslySetInnerHTML={{ 
                  __html: formatContent(post.content) 
                }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h4 className="text-lg font-semibold mb-4">Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-blue-50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3">About the Author</h4>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">{post.author}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.author === "Surf Feeling Team" 
                        ? `The ${BUSINESS_INFO.name} team consists of certified surf instructors, local surf guides, and passionate surfers with deep knowledge of Da Nang&apos;s surf conditions and Vietnam&apos;s surf culture.`
                        : `Professional surf instructor at ${BUSINESS_INFO.name} with extensive experience teaching surfers of all levels in Da Nang&apos;s waters.`
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
                Related Surf Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-r from-blue-400 to-cyan-500 relative">
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="absolute bottom-4 left-4">
                        <Badge className="bg-white/90 text-blue-900">
                          {BLOG_CATEGORIES[relatedPost.category as keyof typeof BLOG_CATEGORIES].name}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg line-clamp-2">
                        {relatedPost.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {relatedPost.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {relatedPost.readTime} min
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(relatedPost.publishedAt).toLocaleDateString()}
                        </div>
                      </div>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="outline" size="sm">
                          Read Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="text-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Ready to Experience {category.name.toLowerCase()} in Action?
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Put our expert guidance into practice! Book a surf lesson with {BUSINESS_INFO.name} and experience Da Nang&apos;s incredible waves with professional instruction.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/lessons">
                    <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 w-full sm:w-auto">
                      Book Surf Lesson
                    </Button>
                  </Link>
                  <Link href="/rentals">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                      Rent Equipment
                    </Button>
                  </Link>
                </div>

                <div className="text-sm text-blue-100">
                  <p>
                    <strong>Local Expertise:</strong> Our guides know Da Nang&apos;s waters better than anyone<br/>
                    <strong>All Levels Welcome:</strong> From complete beginners to advanced surfers<br/>
                    <strong>Premium Equipment:</strong> High-quality boards and safety gear included
                  </p>
                </div>
              </div>

              <div>
                <ContactForm 
                  defaultService="lessons"
                  title="Get Personalized Surf Guidance"
                  description="Have questions about this guide? Want personalized advice for your surf trip?"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse More Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Explore More Surf Guides
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover more expert tips, local insights, and comprehensive guides to make the most of your Vietnam surf experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog">
                <Button size="lg">
                  Browse All Posts
                </Button>
              </Link>
              <Link href={`/blog/category/${post.category}`}>
                <Button size="lg" variant="outline">
                  More {category.name} Guides
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