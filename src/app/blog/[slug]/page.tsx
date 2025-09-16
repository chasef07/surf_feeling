import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { BUSINESS_INFO, BLOG_POSTS } from "@/lib/constants"
import { BlogPostSchema } from "@/components/seo/structured-data"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getBlogPost(slug: string) {
  const post = BLOG_POSTS.find(post => post.slug === slug)
  if (!post) {
    return null
  }
  return post
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
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
      section: "Surf Guides",
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
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2)

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
                    Surf Guide
                  </Badge>
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
                          Surf Guide
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


    </div>
    </>
  )
}