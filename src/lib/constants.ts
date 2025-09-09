// Constants for the surf business app

export const BUSINESS_INFO = {
  name: "Surf Feeling",
  tagline: "Premium Surf Lessons & Board Rentals in Da Nang",
  description: "Experience the ultimate surfing adventure in Vietnam with Surf Feeling's professional instruction and premium equipment rentals at Da Nang's most beautiful beaches.",
  phone: "+84-79-238-0198",
  whatsapp: "+84-79-238-0198",
  email: "info@surffeeling.vn",
  address: "58 Thạch Lam, Phước Mỹ, Sơn Trà, Đà Nẵng 550000, Vietnam",
  hours: "7:30 - 5:00 / 7 days a week",
  coordinates: {
    lat: 16.0544,
    lng: 108.2022
  }
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/surffeeling",
  facebook: "https://facebook.com/surffeelingdanang"
} as const;

export const NAVIGATION_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/lessons", label: "Lessons" },
  { href: "/rentals", label: "Surfboard Rentals" },
  { href: "/partners", label: "Helpful Links" },
  { href: "/blog", label: "Blog" }
] as const;

export const SURF_LEVELS = {
  beginner: {
    label: "Beginner",
    description: "Never surfed before or just getting started"
  },
  intermediate: {
    label: "Intermediate", 
    description: "Can catch waves and looking to improve technique"
  },
  advanced: {
    label: "Advanced",
    description: "Experienced surfer wanting to master new skills"
  }
} as const;

export const BEACH_LOCATIONS = [
  {
    name: "My Khe Beach",
    description: "Main beach with consistent waves, perfect for beginners",
    features: ["Beginner friendly", "Lifeguards", "Equipment rental"]
  },
  {
    name: "Bac My An Beach",
    description: "Less crowded spot with good waves for all levels",
    features: ["All levels", "Peaceful", "Great for photos"]
  }
] as const;

export const SEO_KEYWORDS = {
  primary: [
    "Surf Feeling Da Nang",
    "Da Nang surfing",
    "Vietnam surfing", 
    "surf lessons Da Nang",
    "surf board rental Vietnam",
    "My Khe beach surfing"
  ],
  secondary: [
    "học lướt sóng Đà Nẵng",
    "thuê ván lướt sóng",
    "dạy lướt sóng cho người mới",
    "bãi biển Mỹ Khê",
    "lướt sóng Việt Nam"
  ]
} as const;

export const LESSON_PACKAGES = [
  // Group Lessons
  {
    id: "group-lesson",
    title: "Group Surf Lessons",
    level: "beginner" as const,
    type: "group" as const,
    duration: 1.5,
    maxParticipants: 3,
    description: "Beginner group classes offered daily with small class sizes (2-3 students per instructor). 90-minute lessons designed for beginners. Children can join if accompanied by an adult.",
    includes: ["Surfboard rental", "Rash guard/wetsuit", "Sunscreen and hats", "Professional instruction", "Small group personalized attention"]
  },
  // Private Lessons
  {
    id: "private-60min",
    title: "Private Lesson (60 minutes)",
    level: "beginner" as const,
    type: "private" as const,
    duration: 1,
    maxParticipants: 1,
    description: "Tailored 60-minute private surf lesson for beginners or intermediates. Customized to fit the student's exact needs with flexible scheduling.",
    includes: ["Surfboard rental", "Rash guard/wetsuit", "Sunscreen and hats", "One-on-one instruction", "Customized lesson plan"]
  },
  {
    id: "private-90min",
    title: "Private Lesson (90 minutes)",
    level: "intermediate" as const,
    type: "private" as const,
    duration: 1.5,
    maxParticipants: 1,
    description: "Extended 90-minute private lesson tailored for beginners or intermediates. Video analysis offered for intermediate students to accelerate learning.",
    includes: ["Surfboard rental", "Rash guard/wetsuit", "Sunscreen and hats", "Extended coaching", "Video analysis (intermediate)"]
  },
  {
    id: "private-120min",
    title: "Private Lesson (120 minutes)",
    level: "advanced" as const,
    type: "private" as const,
    duration: 2,
    maxParticipants: 1,
    description: "Comprehensive 120-minute private lesson for beginners or intermediates. Maximum time for skill development with personalized instruction tailored to student needs.",
    includes: ["Surfboard rental", "Rash guard/wetsuit", "Sunscreen and hats", "Intensive coaching", "Video analysis available"]
  },
  // Kids Lessons
  {
    id: "kids-60min",
    title: "Kids Private Lesson (60 minutes)",
    level: "beginner" as const,
    type: "kids" as const,
    duration: 1,
    maxParticipants: 1,
    description: "60-minute private surf lesson for children as young as 5 years old. Safe, fun, and age-appropriate instruction in a controlled environment.",
    includes: ["Age-appropriate surfboard", "Kids wetsuit/rash guard", "Sunscreen and hats", "Child-specialized instruction", "Safety-first approach"]
  },
  {
    id: "kids-90min",
    title: "Kids Private Lesson (90 minutes)",
    level: "beginner" as const,
    type: "kids" as const,
    duration: 1.5,
    maxParticipants: 1,
    description: "Extended 90-minute private lesson for children as young as 5 years old. More time for skill development with patient, experienced instructors.",
    includes: ["Age-appropriate surfboard", "Kids wetsuit/rash guard", "Sunscreen and hats", "Extended kid-friendly instruction", "Fun learning environment"]
  },
  // Fundamentals Courses
  {
    id: "basic-fundamentals",
    title: "Beginner Surf Course (3 Lessons)",
    level: "beginner" as const,
    type: "course" as const,
    duration: 4.5, // 3 x 90 minutes
    maxParticipants: 1,
    description: "3-lesson package designed to teach students the fundamentals of surfing with a structure tailored to fit their exact needs. Foundation course for independent surfing.",
    includes: ["3 private lessons (90 min each)", "All equipment included", "Structured curriculum", "Fundamentals mastery", "Tailored to student needs"]
  },
  {
    id: "indepth-fundamentals",
    title: "Beginner Surf Course (5 Lessons)",
    level: "intermediate" as const,
    type: "course" as const,
    duration: 7.5, // 5 x 90 minutes
    maxParticipants: 1,
    description: "5-lesson package designed to teach comprehensive surfing fundamentals with structure tailored to fit exact student needs. Complete foundation for surf independence.",
    includes: ["5 private lessons (90 min each)", "All equipment included", "Comprehensive curriculum", "Advanced fundamentals", "Complete independence training"]
  }
] as const;

export const RENTAL_BOARDS = [
  {
    id: "hp-longboard-9ft2",
    name: "9 ft 2 in High Performance Longboard",
    type: "longboard" as const,
    description: "Single fin, advanced surfers",
    features: ["Single fin", "Advanced surfers", "High performance"]
  },
  {
    id: "soft-longboard-9ft",
    name: "9 ft Soft top",
    type: "softboard" as const,
    description: "Beginner friendly, very stable, safe fins",
    features: ["Beginner friendly", "Very stable", "Safe fins"]
  },
  {
    id: "soft-longboard-8ft",
    name: "8 ft Soft top",
    type: "softboard" as const,
    description: "Beginner friendly, very stable, safe fins",
    features: ["Beginner friendly", "Very stable", "Safe fins"]
  },
  {
    id: "mini-mal-8ft",
    name: "8ft Mini Mal",
    type: "funboard" as const,
    description: "Hardtop, thruster fins, stable, easy paddle",
    features: ["Hardtop", "Thruster fins", "Stable", "Easy paddle"]
  },
  {
    id: "funboard-7ft6",
    name: "7ft 6in Funboard",
    type: "funboard" as const,
    description: "Versatile, stable, easy paddle, progressive board",
    features: ["Versatile", "Stable", "Easy paddle", "Progressive board"]
  },
  {
    id: "soft-funboard-7ft6",
    name: "7ft 6in Soft top",
    type: "softboard" as const,
    description: "Beginner friendly, very stable, safe fins",
    features: ["Beginner friendly", "Very stable", "Safe fins"]
  },
  {
    id: "fish-6ft8",
    name: "6ft 8in Fish board",
    type: "fish" as const,
    description: "Intermediate/advanced surfers, easy paddle, stable",
    features: ["Intermediate/advanced", "Easy paddle", "Stable"]
  },
  {
    id: "fish-6ft6",
    name: "6ft 6in Fish board",
    type: "fish" as const,
    description: "Intermediate/advanced surfers, easy paddle, stable",
    features: ["Intermediate/advanced", "Easy paddle", "Stable"]
  },
  {
    id: "stepup-6ft4",
    name: "6ft 4in Step-up",
    type: "shortboard" as const,
    description: "Advanced surfers, good for big waves, responsive",
    features: ["Advanced surfers", "Big waves", "Responsive"]
  },
  {
    id: "shortboard-6ft",
    name: "6ft shortboard",
    type: "shortboard" as const,
    description: "Advanced surfers, responsive, high performance",
    features: ["Advanced surfers", "Responsive", "High performance"]
  },
  {
    id: "shortboard-5ft8",
    name: "5ft 8in shortboard",
    type: "shortboard" as const,
    description: "Advanced surfers, high volume, responsive, high performance",
    features: ["Advanced surfers", "High volume", "Responsive", "High performance"]
  },
  {
    id: "fish-5ft8",
    name: "5ft 8in fish board",
    type: "fish" as const,
    description: "Advanced surfers, high volume, twin fin, high performance",
    features: ["Advanced surfers", "High volume", "Twin fin", "High performance"]
  }
] as const;

export const INSTRUCTORS = [
  {
    id: "minh",
    name: "Nguyễn Văn Minh",
    nickname: "Minh",
    experience: "8 years",
    speciality: "Beginner instruction",
    languages: ["Vietnamese", "English", "Korean"],
    bio: "Local Da Nang surfer with extensive experience teaching beginners. Minh's patient approach and local knowledge make him perfect for first-time surfers.",
    certifications: ["ISA Level 1", "Water Safety", "First Aid"]
  },
  {
    id: "sarah",
    name: "Sarah Johnson",
    nickname: "Sarah",
    experience: "12 years",
    speciality: "Advanced coaching",
    languages: ["English", "Vietnamese", "Spanish"],
    bio: "Former competitive surfer from Australia, now based in Da Nang. Specializes in advanced techniques and competition preparation.",
    certifications: ["ISA Level 2", "Surf Coach Australia", "Advanced Water Safety"]
  },
  {
    id: "duc",
    name: "Trần Minh Đức",
    nickname: "Duc",
    experience: "6 years",
    speciality: "Intermediate development",
    languages: ["Vietnamese", "English", "Japanese"],
    bio: "Passionate local surfer who loves helping intermediate surfers break through to the next level. Known for his encouraging teaching style.",
    certifications: ["ISA Level 1", "Rescue Diver", "First Aid"]
  }
] as const;

export const PARTNERS_LIST = [
  {
    id: "fusion-resort",
    name: "Fusion Resort Da Nang",
    type: "accommodation" as const,
    description: "Luxury beachfront resort offering exclusive surf packages with Surf Feeling",
    website: "https://fusionresorts.com",
    contact: "reservations@fusion-danang.com",
    benefits: ["Exclusive surf packages", "Equipment storage", "Transportation to spots"]
  },
  {
    id: "vietnam-motorbike-tours",
    name: "Vietnam Motorbike Tours",
    type: "tour_operator" as const,
    description: "Adventure tours combining surfing with Vietnam exploration",
    website: "https://vietnammotorbiketours.com",
    contact: "info@vmtours.vn",
    benefits: ["Surf + adventure combos", "Multi-day packages", "Local experiences"]
  },
  {
    id: "ocean-magic-surf",
    name: "Ocean & Magic Surf Shop",
    type: "equipment_supplier" as const,
    description: "Premium surf equipment supplier and board shaper",
    website: "https://oceanmagic.vn",
    contact: "shop@oceanmagic.vn",
    benefits: ["Board repairs", "Equipment sales", "Custom boards"]
  },
  {
    id: "danang-surf-school",
    name: "Da Nang Surf School Alliance",
    type: "surf_school" as const,
    description: "Network of certified surf schools across Central Vietnam",
    website: "https://danangsurfschool.com",
    contact: "alliance@danangsurfschool.com",
    benefits: ["Instructor exchange", "Joint certifications", "Expanded locations"]
  }
] as const;

export const BLOG_CATEGORIES = {
  "surf-conditions": {
    name: "Surf Conditions",
    description: "Latest wave reports and surf forecasts for Da Nang",
    slug: "surf-conditions"
  },
  "surf-spots": {
    name: "Surf Spots",
    description: "Guide to the best surfing locations in Vietnam",
    slug: "surf-spots"
  },
  "beginner-tips": {
    name: "Beginner Tips",
    description: "Essential advice for new surfers",
    slug: "beginner-tips"
  },
  "travel-guide": {
    name: "Travel Guide",
    description: "Da Nang travel tips for surfers",
    slug: "travel-guide"
  },
  "equipment-reviews": {
    name: "Equipment Reviews",
    description: "Surf gear reviews and recommendations",
    slug: "equipment-reviews"
  },
  "seasonal-guides": {
    name: "Seasonal Guides",
    description: "When to surf in Vietnam throughout the year",
    slug: "seasonal-guides"
  }
} as const;

export const BLOG_POSTS = [
  {
    id: "da-nang-surf-conditions-january-2025",
    title: "Da Nang Surf Conditions Report - January 2025",
    slug: "da-nang-surf-conditions-january-2025",
    excerpt: "Latest surf conditions and wave forecasts for Da Nang beaches. Perfect conditions for beginners this month with consistent 2-3ft waves at My Khe Beach.",
    content: `
# Da Nang Surf Conditions Report - January 2025

## Current Conditions

The surf conditions in Da Nang this January have been exceptional for both beginners and intermediate surfers. With the northeast monsoon bringing consistent swells, we're seeing:

### My Khe Beach
- **Wave Height**: 2-3 feet (0.6-0.9m)
- **Wind**: Light offshore mornings, onshore afternoons
- **Water Temperature**: 22°C (72°F)
- **Best Time**: 6:00 AM - 10:00 AM

### Bac My An Beach
- **Wave Height**: 3-4 feet (0.9-1.2m)
- **Wind**: Offshore most of the day
- **Crowd Level**: Low to moderate
- **Best Time**: All day surfing

## This Week's Forecast

**Monday - Wednesday**: Clean 2-3ft waves with light winds
**Thursday - Friday**: Building to 3-4ft with moderate winds
**Weekend**: Perfect conditions with 2-3ft and offshore winds

## Safety Reminders

- Always check conditions before entering the water
- Surf with a buddy, especially in unfamiliar spots
- Respect local surfers and follow surf etiquette
- Use appropriate board for your skill level

Book your lesson with Surf Feeling to experience these perfect conditions with professional instruction!
    `,
    category: "surf-conditions",
    author: "Surf Feeling Team",
    publishedAt: "2025-01-15",
    updatedAt: "2025-01-15",
    readTime: 3,
    featured: true,
    seoKeywords: ["Da Nang surf conditions", "Vietnam surf forecast", "My Khe beach waves", "Surf Feeling conditions"],
    tags: ["surf report", "conditions", "forecast", "Da Nang"]
  },
  {
    id: "best-surf-spots-central-vietnam",
    title: "The Ultimate Guide to Central Vietnam's Best Surf Spots",
    slug: "best-surf-spots-central-vietnam",
    excerpt: "Discover the hidden gems and world-class waves of Central Vietnam. From beginner-friendly My Khe to the powerful waves of Quy Nhon, explore Vietnam's surf paradise.",
    content: `
# The Ultimate Guide to Central Vietnam's Best Surf Spots

Central Vietnam offers some of Southeast Asia's most consistent and diverse surf breaks. Here's your complete guide to the region's best spots.

## Da Nang Area

### My Khe Beach
**Best For**: Beginners to intermediate  
**Wave Type**: Beach break  
**Consistency**: Very high  

My Khe Beach is Da Nang's most famous surf spot and perfect for learning. The sandy bottom provides a safe environment for beginners, while the consistent waves offer progression for intermediate surfers.

### Bac My An Beach  
**Best For**: All levels  
**Wave Type**: Beach break  
**Crowd Level**: Moderate  

Less crowded than My Khe, this spot offers similar conditions with slightly bigger waves. Great for those looking to escape the crowds.

## Hoi An Region

### Cua Dai Beach
**Best For**: Intermediate to advanced  
**Wave Type**: Beach break  
**Season**: October - March  

Powerful waves and consistent surf make this a favorite among experienced surfers visiting the ancient town of Hoi An.

## Quy Nhon Area

### Quy Nhon Bay
**Best For**: Advanced  
**Wave Type**: Point break  
**Consistency**: High during season  

Vietnam's premier surf destination with powerful, long-riding waves. The point break here can handle larger swells and provides some of the country's best rides.

### Ky Co Beach
**Best For**: All levels  
**Wave Type**: Beach break  
**Access**: Boat required  

This secluded spot requires a boat ride but rewards surfers with pristine conditions and few crowds.

## When to Visit

**Best Season**: October - March  
**Water Temperature**: 22-26°C year-round  
**Monsoon Season**: May - September (not recommended)

## Getting There

Most international flights arrive in Da Nang, making it the perfect base for exploring Central Vietnam's surf spots. Rent a motorbike or hire a driver to reach the more remote locations.

Ready to explore these amazing surf spots? Join Surf Feeling for guided surf trips and local expertise!
    `,
    category: "surf-spots",
    author: "Minh Nguyen",
    publishedAt: "2025-01-10",
    updatedAt: "2025-01-12",
    readTime: 8,
    featured: true,
    seoKeywords: ["Central Vietnam surf spots", "best waves Vietnam", "Da Nang surfing", "Quy Nhon surf"],
    tags: ["surf spots", "travel guide", "Vietnam", "surf breaks"]
  },
  {
    id: "surfing-beginner-guide-vietnam",
    title: "Complete Beginner's Guide to Surfing in Vietnam",
    slug: "surfing-beginner-guide-vietnam",
    excerpt: "Everything you need to know to start your surfing journey in Vietnam. From choosing the right board to understanding local conditions and surf etiquette.",
    content: `
# Complete Beginner's Guide to Surfing in Vietnam

Starting your surfing journey in Vietnam? You've chosen an amazing destination! Here's everything you need to know to get started safely and successfully.

## Before Your First Lesson

### Physical Preparation
- Basic swimming skills are essential
- Build up your paddling strength with swimming
- Practice pop-ups on the beach or at home
- Stretch regularly to improve flexibility

### What to Expect
Your first lesson with Surf Feeling includes:
- 30-minute beach theory session
- Equipment overview and safety briefing
- 1.5 hours in the water with instructor
- Personalized feedback and progression plan

## Choosing Your Equipment

### Beginner Board Selection
**Soft-top Longboard (9'0"+)**
- Safest option for beginners
- Maximum stability and forgiveness  
- Soft foam construction prevents injuries

**Funboard (8'0"-8'6")**
- Good progression board
- More maneuverable than longboards
- Still stable enough for learning

### Essential Gear in Vietnam
- **Wetsuit**: 3mm recommended (water temp 22-26°C)
- **Reef shoes**: Protect feet from shells and coral
- **Rashguard**: UV protection from strong tropical sun
- **Surf wax**: Tropical wax for warm water

## Understanding Vietnamese Surf Conditions

### Best Learning Conditions
- **Wave Height**: 1-3 feet (perfect for beginners)
- **Wind**: Offshore or very light onshore
- **Tide**: Mid-tide usually best
- **Time**: Early morning for cleanest conditions

### Safety Considerations
- **Currents**: Always surf near lifeguards
- **Marine Life**: Jellyfish possible during certain seasons
- **Sun Exposure**: Strong UV rays require protection
- **Crowds**: Respect local surfers and other learners

## Surf Etiquette in Vietnam

### Basic Rules
1. **Right of way**: Person closest to peak has priority
2. **Don't drop in**: Wait your turn
3. **Communicate**: Use hand signals in the water
4. **Respect locals**: Vietnamese surfers are welcoming but appreciate respect
5. **Clean up**: Keep beaches clean

### Cultural Tips
- Learn basic Vietnamese greetings
- Respect local customs and traditions
- Support local surf shops and instructors
- Be patient - island time applies to surfing too!

## Your Learning Progression

### Lesson 1-3: Foundation
- Water safety and ocean awareness
- Paddling technique
- Standing up (pop-up)
- Riding straight to shore

### Lesson 4-6: Development  
- Catching unbroken waves
- Basic steering and direction changes
- Building wave judgment
- Improving pop-up timing

### Lesson 7+: Progression
- Riding along the wave face
- Bottom turns and cut-backs
- Advanced wave selection
- Independent surfing

## Common Beginner Mistakes to Avoid

1. **Paddling too slow**: Build up arm strength
2. **Looking down**: Keep eyes forward
3. **Standing too early**: Wait for the wave to catch you
4. **Wrong foot position**: Practice on the beach
5. **Fighting the wave**: Work with the ocean, not against it

## When to Take Your Next Lesson

Signs you're ready to progress:
- Consistently catching waves
- Standing up 7/10 times
- Comfortable in whitewater
- Understanding basic wave judgment

## Cost of Learning in Vietnam

**Surf Feeling Lesson Packages:**
- Single lesson: $32 USD
- 3-day beginner package: $85 USD
- Equipment rental: $12-18 USD/day

## Best Time to Learn

**Ideal Months**: October - March  
**Best Daily Times**: 6:00 AM - 10:00 AM  
**Avoid**: Monsoon season (May - September)

Ready to start your surfing adventure? Book your first lesson with Surf Feeling and experience the joy of riding waves in Vietnam's beautiful waters!
    `,
    category: "beginner-tips", 
    author: "Sarah Johnson",
    publishedAt: "2025-01-08",
    updatedAt: "2025-01-08",
    readTime: 12,
    featured: true,
    seoKeywords: ["learn to surf Vietnam", "beginner surf lessons Da Nang", "surfing guide Vietnam", "Surf Feeling lessons"],
    tags: ["beginner", "surf lessons", "Vietnam", "tutorial"]
  },
  {
    id: "da-nang-travel-guide-surfers",
    title: "Da Nang Travel Guide for Surfers: Where to Stay, Eat, and Surf",
    slug: "da-nang-travel-guide-surfers",
    excerpt: "The ultimate surfer's guide to Da Nang, Vietnam. Best accommodation near surf breaks, local food spots, transportation tips, and surf-friendly activities.",
    content: `
# Da Nang Travel Guide for Surfers

Da Nang has become Southeast Asia's premier surf destination, combining world-class waves with incredible Vietnamese culture, food, and hospitality. Here's your complete guide to making the most of your surf trip.

## Where to Stay

### Beachfront Hotels (Premium)
**Fusion Resort Da Nang**
- Direct beach access to My Khe
- Surf equipment storage
- Partner rates with Surf Feeling
- Pool and spa facilities

**Hyatt Regency Da Nang**
- Luxury beachfront location
- Multiple dining options
- Easy access to both My Khe and Bac My An

### Surfer-Friendly Hostels (Budget)
**Mad Monkey Hostel Da Nang**
- Social atmosphere, perfect for solo travelers
- 5-minute walk to My Khe Beach
- Motorcycle rental available

**Zostel Da Nang**
- Modern facilities
- Rooftop bar with ocean views
- Surf board storage

### Neighborhoods

**My Khe Beach Area**
- Best for surf access
- International restaurants
- Higher prices

**Han Market Area** 
- Authentic Vietnamese experience
- Local food scene
- 10-minute ride to beaches

## Getting Around

### From Airport
- **Taxi**: 150,000-200,000 VND (15 minutes)
- **Grab**: Cheaper and more reliable
- **Airport Shuttle**: Budget option

### Daily Transportation
**Motorcycle Rental**
- Cost: 150,000-250,000 VND/day
- Essential for surf exploration
- International license recommended

**Bicycle**
- Beach cruisers: 100,000 VND/day
- Perfect for beach access
- Many hotels provide free bikes

## Where to Eat

### Breakfast Spots
**Bread of Life** - Western breakfasts near My Khe  
**Madam Lan** - Authentic Vietnamese breakfast  
**Surf Feeling Cafe** - Surfer-friendly spot with healthy options

### Vietnamese Specialties
**Mi Quang Ba Mua** - Da Nang's famous noodle soup  
**Banh Xeo Ba Duong** - Vietnamese pancakes  
**Com Hen Oc Mo** - Local clam rice specialty

### International Food
**Mondo Restaurant** - Italian with ocean views  
**La Plage** - French bistro on the beach  
**Temple Club** - Upscale Vietnamese-French fusion

## Surf-Related Services

### Surf Schools & Lessons
**Surf Feeling** - Premium instruction and equipment  
**Vietnam Surf** - Budget-friendly options  
**Oceanic Surf School** - Group lessons

### Equipment & Repairs
**Ocean & Magic Surf Shop**
- Board sales and rentals
- Professional repairs
- Custom boards

**Surf Station Da Nang**
- Equipment rental
- Wetsuit sales
- Accessories

## Best Surf Breaks Nearby

### Within Da Nang
- **My Khe Beach**: Beginner-friendly, consistent waves
- **Bac My An**: Less crowded, similar conditions
- **Non Nuoc Beach**: Resort area with good waves

### Day Trips
- **Hoi An (45 minutes)**: Cua Dai Beach for bigger waves  
- **Quy Nhon (3 hours)**: Advanced surf destination

## When to Visit

### Peak Season (October - March)
- Best waves and weather
- Higher prices
- Book accommodation early

### Off-Season (April - September) 
- Monsoon season affects surf
- Lower prices
- Limited surf opportunities

## Cultural Activities

### Must-Visit Attractions
**Ba Na Hills** - French colonial mountain resort  
**Hoi An Ancient Town** - UNESCO World Heritage site  
**My Son Sanctuary** - Ancient Cham ruins  
**Dragon Bridge** - Iconic Da Nang landmark

### Evening Activities
**Han Market Night Market** - Local crafts and street food  
**Dragon Bridge Fire Show** - Weekends at 9 PM  
**Beach Bars** - Sunset drinks by the ocean

## Practical Tips

### Money
- ATMs widely available
- USD accepted at tourist businesses
- Carry cash for local establishments

### Language
- Basic Vietnamese phrases helpful
- English widely spoken in tourist areas
- Translation apps recommended

### Health & Safety
- Travel insurance recommended
- Sunscreen essential (tropical UV)
- Drink bottled or filtered water
- Motorbike helmet required by law

### Packing for Surf Trip
- Tropical wetsuit (3mm)
- Reef shoes
- High SPF sunscreen
- Quick-dry clothing
- First aid kit

## Sample Itineraries

### 3-Day Weekend
**Day 1**: Arrive, surf lesson at My Khe, explore Da Nang city  
**Day 2**: Hoi An day trip, evening at beach bars  
**Day 3**: Morning surf, Ba Na Hills, departure

### 1-Week Surf Trip
**Days 1-2**: Da Nang area surf spots  
**Days 3-4**: Hoi An exploration and surfing  
**Days 5-6**: Quy Nhon surf adventure  
**Day 7**: Relaxation and departure

## Budget Planning

### Daily Costs (USD)
**Budget**: $25-40/day
- Hostel: $8-15
- Local food: $5-10  
- Transportation: $5-8
- Activities: $10-15

**Mid-Range**: $50-80/day
- Hotel: $25-40
- Mixed dining: $15-25
- Private transport: $10-15
- Tours/activities: $20-30

**Luxury**: $100+/day
- Beach resort: $60-150
- Fine dining: $30-50
- Private guides: $30-50
- Premium activities: $50+

Ready to experience Da Nang's incredible surf and culture? Start your adventure with Surf Feeling for the complete Vietnamese surf experience!
    `,
    category: "travel-guide",
    author: "Surf Feeling Team", 
    publishedAt: "2025-01-05",
    updatedAt: "2025-01-07",
    readTime: 15,
    featured: false,
    seoKeywords: ["Da Nang travel guide", "Vietnam surf travel", "surf trip Da Nang", "where to stay Da Nang surfers"],
    tags: ["travel", "Da Nang", "accommodation", "food", "culture"]
  }
] as const;