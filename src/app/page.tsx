import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, Phone, MessageCircle, MapPin, Users, Trophy } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { BusinessSchema, SurfLessonsServiceSchema, SurfboardRentalSchema, TouristAttractionSchema, FAQSchema } from "@/components/seo/business-schema";
import { LocalBusinessSchema, PlaceSchema, EventSchema } from "@/components/seo/local-seo-schema";
import { TouristAttractionSchemaDetailed, TravelAgencySchema, SportsActivityLocationSchema, CourseSchema } from "@/components/seo/tourism-schema";

// Mock reviews data
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    comment: "Amazing surf lessons! Minh was incredibly patient and helped me catch my first wave. The location at My Khe Beach is perfect for beginners.",
    date: "2 weeks ago",
    flag: "🇺🇸"
  },
  {
    id: 2,
    name: "Đức Nguyễn", 
    avatar: "/api/placeholder/40/40",
    rating: 5,
    comment: "Dịch vụ tuyệt vời! Thuê ván lướt sóng rất tiện lợi và thiết bị chất lượng cao. Sẽ quay lại lần sau!",
    date: "1 week ago",
    flag: "🇻🇳"
  },
  {
    id: 3,
    name: "Hiroshi Tanaka",
    avatar: "/api/placeholder/40/40", 
    rating: 5,
    comment: "Perfect surf school! Great English-speaking instructors and excellent equipment. Highly recommend for tourists visiting Da Nang.",
    date: "3 days ago",
    flag: "🇯🇵"
  },
  {
    id: 4,
    name: "Emma Wilson",
    avatar: "/api/placeholder/40/40",
    rating: 4,
    comment: "Had an incredible experience with the advanced coaching session. Sarah&apos;s expertise really helped improve my technique significantly.",
    date: "5 days ago", 
    flag: "🇦🇺"
  },
  {
    id: 5,
    name: "Kim Min-jun",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    comment: "최고의 서핑 스쿨이에요! 한국어도 가능하고 다낭에서 서핑 배우기에 정말 완벽한 곳입니다.",
    date: "1 day ago",
    flag: "🇰🇷"
  }
];

const faqData = [
  {
    question: "When's the best time to surf in Da Nang, Vietnam?",
    answer: "The best time to surf in Da Nang is from September to March, with November to February offering the most consistent waves and ideal conditions. This period provides larger swells, perfect for both beginner and advanced surfers. From April to August, waves are smaller and less consistent, better suited for beginners or relaxed sessions."
  },
  {
    question: "Where are the best places to surf in Da Nang?",
    answer: "The best surf spots in Da Nang include My Khe Beach - known for its long sandy coastline and consistent waves, ideal for all skill levels; Non Nuoc Beach - offers bigger swells for advanced surfers seeking a challenge; and Man Thai Beach - perfect for beginners when My Khe waves are too big. Da Nang's beaches offer something for every surfer!"
  },
  {
    question: "Is Da Nang a good place to surf for beginners?",
    answer: "Yes, Da Nang is fantastic for learning to surf! Surf Feeling specializes in beginner surf lessons in Da Nang, ensuring a safe and enjoyable experience. Our instructors guide you every step of the way, helping build confidence on the board. Whether it's your first surf lesson in Vietnam or refining basic skills, Da Nang offers the perfect learning environment."
  },
  {
    question: "Do I need previous surfing experience to take a lesson?",
    answer: "No previous surfing experience required! Surf Feeling offers surf lessons in Da Nang for all skill levels, from complete beginners to advanced surfers. Our experienced instructors guide you through the basics, helping build confidence and improve technique whether you're learning for the first time or refining existing skills."
  },
  {
    question: "Do I need to know how to swim to take a surf lesson?",
    answer: "You should be comfortable in the water, but don't need to be an expert swimmer. Our instructors guide you through everything and ensure you feel confident in the water at all times. If you're uncertain about your swimming ability, let us know in advance so we can adjust the lesson accordingly."
  },
  {
    question: "What's the age requirement to take a lesson?",
    answer: "At Surf Feeling, the minimum age for surf lessons is 6 years old. We welcome young surfers as long as they're comfortable in the water independently. Whether seeking surf lessons in Da Nang or a fun surf school experience for kids, we ensure a safe and enjoyable environment for children to learn surfing."
  },
  {
    question: "What should I bring to my surf lesson?",
    answer: "For your surf lesson in Da Nang, just bring a swimsuit or comfortable water clothing. We provide everything else: surfboards, rash guards, sunscreen, towels, water, and all necessary equipment. Feel free to bring your own surf gear if you have it. At Surf Feeling, we ensure you're fully equipped for an amazing surfing experience in Da Nang!"
  }
];

export default function HomePage() {
  // Prepare FAQ data for schema
  const faqSchemaData = faqData.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }))

  return (
    <>
      {/* Structured Data */}
      <BusinessSchema />
      <LocalBusinessSchema />
      <SurfLessonsServiceSchema />
      <SurfboardRentalSchema />
      <TouristAttractionSchema />
      <TouristAttractionSchemaDetailed />
      <TravelAgencySchema />
      <SportsActivityLocationSchema />
      <CourseSchema />
      <PlaceSchema />
      <EventSchema />
      <FAQSchema faqs={faqSchemaData} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/danangset.jpg"
            alt="Surfing at My Khe Beach, Da Nang"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Surf Feeling
            </h1>
            <p className="text-xl md:text-2xl mb-2 font-light">
              Premium Surf Lessons & Board Rentals
            </p>
            <div className="flex items-center justify-center gap-2 text-lg">
              <MapPin className="h-5 w-5" />
              <span>Da Nang, Viet Nam</span>
            </div>
          </div>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the ultimate surfing adventure in Vietnam with professional instruction 
            and premium equipment at Da Nang&apos;s most beautiful beaches.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/lessons">
                View Surf Lessons
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/15 backdrop-blur border-white/40 text-white hover:bg-white hover:text-slate-800 shadow-lg">
              <Link href="/rentals">
                View Equipment
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=Hi! I'd like to book a surf lesson in Da Nang.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/20 backdrop-blur hover:bg-white/30 px-6 py-3 rounded-full transition-all duration-300 text-white font-medium border border-white/30 hover:border-white/50 shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Shop Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Our Surf Shop in Da Nang</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in 2024, Surf Feeling was created by experienced surfers who believe in teaching true independence on the waves. 
                Just as our surf lessons in Da Nang focus on creating self-sufficient surfers, our surf shop provides the essential gear and surfboards 
                you need to continue your surf journey long after your lesson ends. From beginner-friendly surfboards to premium surf accessories, 
                we stock quality equipment trusted by our internationally certified instructors at My Khe Beach.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/paddle.JPG"
                alt="Surfing paddle at Da Nang beach"
                width={500}
                height={400}
                className="rounded-lg shadow-lg object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From beginner lessons to advanced coaching, we provide everything you need for an amazing surf experience in Da Nang.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Surf Lessons */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Trophy className="h-8 w-8 text-blue-600" />
                  <Badge variant="secondary">Most Popular</Badge>
                </div>
                <CardTitle>Surf Lessons</CardTitle>
                <CardDescription>
                  Professional instruction for all skill levels with certified instructors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Group Lessons (90 min)</span>
                    <span className="font-semibold">Small Groups 2-3 Students</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Private Lessons</span>
                    <span className="font-semibold">60 | 90 | 120 Minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kids Surf Lessons</span>
                    <span className="font-semibold">All Ages Welcome</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fundamentals Courses</span>
                    <span className="font-semibold">3 or 5 Lesson Packages</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/lessons">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Board Rentals */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mb-3" />
                <CardTitle>Board Rentals</CardTitle>
                <CardDescription>
                  Premium surfboards for all skill levels and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="space-y-2">
                    <div className="font-medium text-gray-700">Available Board Types:</div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Soft-top Longboards - Perfect for beginners</li>
                      <li>• Traditional Longboards - Classic style surfing</li>
                      <li>• Funboards - Great all-around boards</li>
                      <li>• Performance Shortboards - For advanced surfers</li>
                    </ul>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/rentals">View Equipment</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-muted-foreground">out of 5 stars</span>
            </div>
            <p className="text-muted-foreground">Based on 150+ Google Reviews</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.name} />
                      <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{review.name}</h3>
                        <span className="text-sm">{review.flag}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild className="border-amber-200 text-amber-700 hover:bg-amber-50 hover:border-amber-300 shadow-sm">
              <a href="https://g.page/surf-feeling-danang/review" target="_blank" rel="noopener noreferrer">
                Read All Google Reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about surfing in Da Nang with Surf Feeling
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </>
  );
}