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
    id: "everything-you-need-to-know-surfing-da-nang",
    title: "Everything You Need To Know About Surfing In Da Nang",
    slug: "everything-you-need-to-know-surfing-da-nang",
    excerpt: "Complete guide to surfing in Da Nang covering surf season, best spots like My Khe Beach and Man Thai Beach, surf lessons, and board rentals. Everything beginners and advanced surfers need to know.",
    content: `
# Everything You Need To Know About Surfing In Da Nang

Da Nang is home to several high-quality surf breaks, and each break has something unique to offer for every skill level. We put together this surf guide to help you have the best experience possible while surfing in Da Nang.

## Da Nang Surfing Season

Da Nang's surf season is from October to April, during the rainy season. In season, the waves are consistent and have a lot of power. The peak of the season, which runs from November through January, can bring fast breaking, overhead waves along the sand-bottomed beaches of Da Nang's coast. In this part of the season, large storms form in the Pacific and move into the Vietnam Sea, bringing big NE swells along with them.

### When is the best time for beginners to surf in Da Nang?

While beginners can surf in Da Nang all season, the conditions are prime during the shoulder seasons (late September – October and late March – early May, respectively). The waves in these periods are much smaller, cleaner, and mushier — making it the perfect place for beginners to practice catching green waves for the first time.

## Da Nang Surf Spots

### My Khe Beach

My Khe Beach is Da Nang's most popular surf spot, offering a consistent beach break that can be enjoyed by all skill levels.

When a big swell hits, My Khe Beach can be BIG and punchy, with set waves reaching 3+ meters. These waves offer short rides due to the riptides that line either side of the sandbars here. In the biggest conditions, the paddle out is difficult and the current is strong, making it dangerous for beginners.

My Khe Beach runs along Võ Nguyên Giáp street and stretches from Võ Văn Kiệt street down to Phan Tứ street. In addition to the wave quality, this stretch of beach is home to a number of bars, restaurants, and cafes that line the sandy coast, making it a fun and entertaining surf spot.

### Man Thai Beach

Man Thai Beach is the best surf spot for beginner surfers in Da Nang. This stretch of beach runs from the foothills of Son Tra peninsula all the way down to My Khe Beach. When the waves are big at My Khe, this is where beginners can go to enjoy smaller waves and whitewash.

On the biggest days, Man Thai Beach can also offer some fast and hollow waves that can be enjoyed by more advanced surfers who don't want to deal with the paddle out at My Khe.

### Non Nuoc Beach

Non Nuoc beach starts at the southern end of My Khe and goes south towards Hoi An. This stretch of coast is lined with large (and ugly) resorts that are usually only half-full. With the right conditions, this break will be bigger and punchier than My Khe, offering a challenge for more advanced surfers.

Non Nuoc is our least favorite spot to surf in Da Nang, as it is very susceptible to wind and is not easily accessible unless you stay in one of the resorts on the beach.

### Nam O Point

Nam O is one of the oldest fishing villages in Vietnam and is also home to Nam O Point — a short and sexy left that can reach double overhead when it's firing. On a good wave, you should be able to pump out about three solid turns before hopping off and making the easy paddle back to the point.

Nam O should only be surfed by experienced surfers who are comfortable surfing rocky point breaks with overhead waves.

## Da Nang Surf Rentals

You can rent surfboards from Surf Feeling in Da Nang. We have a variety of boards for all skill levels — from big soft tops for beginners and performance shortboards for more advanced surfers. We offer hourly, daily, weekly, and monthly surfboard rentals as well. Come by our shop or send us a message on WhatsApp or Instagram to see what boards we have available.

## Da Nang Surf Lessons

Da Nang is a great place to learn how to surf, and Surf Feeling offers the highest quality surf lessons in the area. Our instructors are experienced surfers and are certified by the International Surfing Association. Interested in taking a lesson? Contact us to learn more.
    `,
    category: "surf-spots",
    author: "Surf Feeling Team",
    publishedAt: "2025-01-16",
    updatedAt: "2025-01-16",
    readTime: 8,
    seoKeywords: [
      "Da Nang surfing guide",
      "surfing in Da Nang Vietnam",
      "My Khe Beach surfing",
      "Da Nang surf spots",
      "Vietnam surf season",
      "Da Nang surf lessons",
      "Surf Feeling Da Nang",
      "best time surf Da Nang",
      "Man Thai Beach surfing",
      "Nam O Point surfing",
      "Da Nang surf rentals",
      "beginner surfing Da Nang"
    ],
    tags: ["Da Nang", "surf guide", "surf spots", "beginner tips", "surf season", "My Khe Beach", "surf lessons", "surf rentals"]
  },
  {
    id: "da-nang-surf-forecast-guide",
    title: "Da Nang Surf Forecast: Reading Swells, Wind & Perfect Conditions",
    slug: "da-nang-surf-forecast-guide",
    excerpt: "Master Da Nang's surf forecast with our complete guide. Learn to read swell height, wind conditions, and seasonal patterns for perfect surf sessions at My Khe Beach and beyond.",
    content: `
# Da Nang Surf Forecast: Reading Swells, Wind & Perfect Conditions

In the peak of Da Nang's surfing season, which runs from October to April, surfers can expect big swells brought on by large storm systems. Normally, when the swell is over 2.5 meters, it's very difficult to paddle out. If you decide to surf in these conditions, you should use a riptide to help you get through the waves.

## Understanding Da Nang's Wave Patterns

Usually, the days that follow a big storm system will produce good waves in Da Nang. My Khe Beach works best below 2.5 meters with no or low wind. The Da Nang Surf Forecast below will give you the most accurate swell height.

When the waves are big in Da Nang, they will offer short rides with fast breaking sections. With the right wind and tides, you might even find some barrels - although you'll have to use the doggy door to make it out of them.

## Spring Surf Conditions

In the Spring, the waves in Da Nang are much more mellow, offering long mushy waves that are perfect for log-riders and beginners alike. The surf forecast will typically show less than a meter swell from March through May, as the waves begin to die off closer to summer.

## Reading the Forecast

You can compare the Windy forecast with the Surf Forecast below to help identify when conditions will be ideal.

**The Golden Rule:**
In general, **low and/or offshore wind + NE swell = good waves**.

### Key Forecast Elements to Watch:

**Swell Height**
- Under 1.5m: Perfect for beginners
- 1.5m - 2.5m: Ideal for all levels
- Over 2.5m: Advanced surfers only

**Wind Direction**
- Offshore (west/northwest): Creates clean waves
- Onshore (east/southeast): Makes waves messy
- No wind: Glass-off conditions

**Swell Direction**
- Northeast (NE): Best for Da Nang's coast
- East: Can work but less consistent
- Southeast: Usually too south for good waves

## Best Times to Surf

### Peak Season (October - April)
- Consistent NE swells from Pacific storms
- Overhead waves possible
- Check forecast daily for optimal conditions

### Shoulder Season (Late March - May)
- Smaller, cleaner waves
- Perfect for progression
- More forgiving conditions

### Summer (June - September)
- Monsoon season - not recommended
- Onshore winds dominate
- Very small or flat conditions

## Safety Guidelines

When surfing bigger swells (over 2m):
- Always surf with a buddy
- Know your limits
- Use channels and rips to paddle out
- Have an exit strategy
- Consider taking a lesson with Surf Feeling for safety tips

Book a session with our experienced instructors to learn how to read conditions and surf safely in all Da Nang weather patterns!
    `,
    category: "surf-conditions",
    author: "Surf Feeling Team",
    publishedAt: "2025-01-17",
    updatedAt: "2025-01-17",
    readTime: 6,
    seoKeywords: [
      "Da Nang surf forecast",
      "Vietnam surf forecast",
      "My Khe Beach forecast",
      "Da Nang wave conditions",
      "surf forecast Da Nang",
      "Vietnam surf conditions",
      "Da Nang swell forecast",
      "best time surf Da Nang",
      "Da Nang wind forecast",
      "surf conditions Vietnam",
      "Da Nang surf report",
      "when to surf Da Nang"
    ],
    tags: ["surf forecast", "conditions", "waves", "Da Nang", "swell", "wind", "weather", "surf report"]
  },
  {
    id: "how-to-choose-right-surfboard-skill-level-da-nang",
    title: "How to Choose the Right Surfboard for Your Skill Level | Surf Lessons & Rentals in Da Nang",
    slug: "how-to-choose-right-surfboard-skill-level-da-nang",
    excerpt: "Discover the best surfboard for your skill level in Da Nang. From surf lessons to rentals, learn which board helps you progress and enjoy the waves.",
    content: `
# How to Choose the Right Surfboard for Your Skill Level | Surf Lessons & Rentals in Da Nang

If you're planning to surf in Da Nang, one of the most important decisions you'll make is choosing the right surfboard. Whether you're joining surf lessons in Da Nang or looking for surfboard rentals in Da Nang, the type and size of board you ride can make or break your session. A board that matches your experience and skill level will help you catch more waves, progress faster, and most importantly—have fun.

## Best Surfboards for Beginners in Da Nang

If you're new to surfing, stability is key. A longboard or soft-top surfboard is usually the best choice. These boards are wider, thicker, and longer, which means they float better and make it easier to paddle and catch waves.

**Recommended size:** 8–9 feet soft-top longboard

**Why it works:** Extra volume gives you balance, forgiveness, and the ability to stand up with more confidence.

**Best for:** First-time surfers, learners in surf schools, and anyone taking surf lessons in Da Nang.

At Surf Feeling, most beginners start on soft-top boards during lessons, which makes it easier to practice safely while still having plenty of fun.

## Surfboard Rentals in Da Nang for Intermediate Surfers

If you're comfortable standing up, catching unbroken waves, and starting to turn, you might be ready to move down in size. For intermediate surfers, funboards and mid-length boards are a great step forward.

**Recommended size:** 6'6"– 8' funboard or mid-length

**Why it works:** These boards are smaller than longboards, so they're easier to turn, but they still have enough volume to paddle comfortably.

**Best for:** Surfers who've had a few surf lessons, are renting boards regularly, and want to start turning down the line.

In Da Nang, where the waves can be fatter and softer, mid-length boards are a perfect fit for many progressing surfers.

## Advanced Surfboards for Experienced Surfers in Da Nang

If you already know how to generate speed, carve turns, and handle a variety of conditions, then you can ride smaller, more performance-driven boards.

**Recommended size:** 5'6"–6'6" shortboard or fish

**Why it works:** Less volume allows you to maneuver quickly, generate speed, and surf more aggressively.

**Best for:** Experienced surfers who want performance in punchier Da Nang waves, or who travel with their own equipment but might still look for surfboard rentals in Da Nang when they don't bring a board.

## Tips for Choosing the Right Surfboard in Da Nang

### Key Considerations:

**Be honest about your level.** Riding a board that's too small will slow your progress.

**Match the board to the conditions.** On smaller, softer days, a bigger board will always catch more waves.

**Ask your instructor or rental shop.** At Surf Feeling, we'll recommend the right board for your skill level and the day's surf conditions.

### Board Size Guidelines:

**Beginner (0-6 months):**
- Length: 8-9 feet
- Width: 22-23 inches
- Volume: High (50+ liters)

**Intermediate (6 months - 2 years):**
- Length: 7-8 feet
- Width: 21-22 inches
- Volume: Medium (35-50 liters)

**Advanced (2+ years):**
- Length: 5'6"-6'6"
- Width: 18-20 inches
- Volume: Low (25-35 liters)

## Da Nang-Specific Board Recommendations

### For Da Nang's Wave Conditions:

**My Khe Beach:** Soft-top longboards for beginners, funboards for intermediates
**Man Thai Beach:** Perfect for progression - mid-length boards work great
**Nam O Point:** Advanced shortboards only - powerful waves require experience

## Why Board Choice Matters in Da Nang

Da Nang's waves have unique characteristics:
- **Beach breaks:** Need boards with good paddle power
- **Softer waves:** Allow for bigger boards even at intermediate level
- **Variable conditions:** Versatile boards perform better
- **Sandy bottom:** Safer for learning on larger boards

Choosing the right surfboard isn't just about equipment—it's about setting yourself up for a better surfing experience. Whether you're taking your first surf lesson in Da Nang, renting a board for a few days, or progressing toward performance surfing, having the right board under your feet will make all the difference.

Looking to start your surf journey? Check out our surf lessons in Da Nang or explore our range of surfboard rentals in Da Nang today. Let's get you on the right board and into the waves!
    `,
    category: "beginner-tips",
    author: "Surf Feeling Team",
    publishedAt: "2025-01-18",
    updatedAt: "2025-01-18",
    readTime: 7,
    seoKeywords: [
      "how to choose surfboard Da Nang",
      "surfboard rentals Da Nang",
      "surf lessons Da Nang",
      "best surfboard beginners Da Nang",
      "surfboard size guide Vietnam",
      "Da Nang surf school equipment",
      "beginner surfboard Da Nang",
      "intermediate surfboard Vietnam",
      "surfboard rental guide Da Nang",
      "surf equipment Da Nang",
      "longboard rental Da Nang",
      "funboard rental Vietnam",
      "surfboard types Da Nang",
      "surf gear rental Da Nang",
      "My Khe Beach surfboard"
    ],
    tags: ["surfboard guide", "beginner tips", "equipment", "rentals", "surf lessons", "Da Nang", "board selection", "surf gear"]
  },
  {
    id: "surf-feeling-da-nang-food-tour-guide",
    title: "Surf Feeling's Da Nang Food Tour: Best Local Eats After Your Surf Session",
    slug: "surf-feeling-da-nang-food-tour-guide",
    excerpt: "Discover Da Nang's best restaurants and local food spots recommended by Surf Feeling. From post-surf breakfast to authentic Vietnamese dinner, our crew's favorite places to eat.",
    content: `
# Surf Feeling's Da Nang Food Tour: Best Local Eats After Your Surf Session

Our favorite spots to grab a bite to eat in the Dragon City.

Known as a food lover's paradise, Da Nang is home to a number of delicious destinations that are sure to make your mouth water. From genuine Da Nang cuisine, to authentic Mediterranean dishes, this city has something to offer for everyone.

The Surf Feeling crew put together a list of our favorite Vietnamese restaurants for every occasion. Check it.

## Breakfast/Brunch

Just finished a glassy morning surf sesh at My Khe Beach and in dire need of some nourishment for your body? We got three options for you.

### Bréco Cafe
**Address:** 49 An Thượng 2, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam

Whether you're looking for a mashed sweet potato with chicken and eggs, a banh mi with peanut butter, or an avocado toast with tomato, egg, and cheese, Bréco has what you need. An interesting fusion of western dishes with a Vietnamese flair, they offer a variety of meals that are sure to leave you satisfied.

### Coffee & Bánh Mì Minh
**Address:** 117 Lê Hữu Trác, Phước Mỹ, Sơn Trà, Đà Nẵng 550000, Vietnam

A bánh mì and a cà phê from these brothers will make your day better - every time. This hidden gem offers delicious and locally priced bánh mì's to accompany a top-notch drink menu. From the salt coffee to the blueberry tea with salted cream, Minh has something to quench everyone's thirst. Finish the meal off with a delicious yogurt and you'll be making a mental note to come back here again the next day.

### Bánh Cuốn Cô Phương
**Address:** 28 Châu Thị Vĩnh Tế, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam

For those who are looking to try something more authentic, Cô Phương and her team serve up delicious Hanoi style bánh cuốn's that are unlike any other Vietnamese breakfast dish. These steamed rice paper rolls are stuffed with ground pork and mushrooms, and served with herbs, carrots, cucumbers, and a sweet fish-oil sauce. Be warned, this place gets busy - so don't go any time after 11 and expect them to have food still.

## Lunch

It's no secret that Da Nang gets hot - and the last thing you want to eat for lunch on a scorcher of a day here is a steaming hot bowl of phở. Here's some of our favorite afternoon bites to help get you through the day.

### Siêu Gà
**Address:** 94 Đ. Lâm Hoành, Phước Mỹ, Sơn Trà, Đà Nẵng 550000, Việt Nam

This crew knows how to whip up some rice. It's nothing fancy, as the menu just has a few different options that include some variations of eggs, pork, and chicken - but damn is it good. Make sure you ask for sốt (a sauce to pour over the rice) to go with your meal!

### Chè Cung Đình Huế
**Address:** 169 Châu Thị Vĩnh Tế, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam

Alright, this one isn't really lunch - but that doesn't stop it from being one of our favorite ways to cool off after spending a hot morning on the beach. These sweet snacks can be customized with a variety of toppings - like bananas, sweet red beans, or taro.

### Bánh Canh Thu
**Address:** 29 Châu Thị Vĩnh Tế, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 550000, Việt Nam

Located on Da Nang's infamous Châu Thị Vĩnh Tế street, this shop knows how to make an incredible bowl of fish cake noodle soup. When you go, ask for bánh canh chả lóc and an order of quẩy to dip in your broth. You can also grab a refreshing nước mía to drink with it. You can thank us later.

## Dinner

### Quán Cô Hồng
**Address:** 103 Nguyễn Văn Thoại, An Hải Đông, Sơn Trà, Đà Nẵng 550000, Việt Nam

This restaurant serves a variety of dishes that are local to the area. From the classic mì quảng gà, to the Nam Ô specialty, cháo chờ, the food here is to die for. Come here if you're looking to enjoy local Da Nang foods in a beautiful atmosphere.

### Bé Bi - Bánh xèo
**Address:** 78 Nguyễn Thiện Kế, Phước Mỹ, Sơn Trà, Đà Nẵng 550000, Việt Nam

You can't come to Vietnam - especially Da Nang - and not try bánh xèo. This is commonly described to foreigners as a Vietnamese pancake, and while we don't quite agree with this comparison, we can agree that this dish is insanely delicious. Topped with beef and shrimp, rolled into a spring roll, and dipped into peanut sauce, this will certainly leave you fat and happy.

### Vietnom Local Eatery
**Address:** 97 Mai Thúc Lân, Bắc Mỹ An, Ngũ Hành Sơn, Đà Nẵng 550000, Vietnam

Led by Chef Út, a talented head chef from Hue, Vietnom is home to a variety of dishes from around all of Vietnam. Their menu fuses traditional Vietnamese cuisine with modern Western influences, resulting in mouth watering meals that will have you coming back more than once so that you can try everything on their menu. Something that's really cool about this spot is that they tell you a lot about the food you're ordering, so you know what region it's from and what inspired them to make it.

## Food Tour Tips for Surfers

### Best Times to Eat:
**Post-Morning Surf (8-10 AM):** Perfect time for breakfast spots like Bréco Cafe or Bánh Mì Minh
**Lunch Break (12-2 PM):** Beat the heat with lighter options like Chè or rice dishes
**After Evening Session (6-8 PM):** Fuel up with hearty Vietnamese dinners

### Local Food Etiquette:
- Most local spots are cash-only
- Don't be afraid to point at what looks good
- Learn basic Vietnamese food terms: bánh mì, phở, cà phê
- Eating on plastic stools is part of the authentic experience

### Must-Try Da Nang Specialties:
**Mì Quảng:** Da Nang's signature noodle dish
**Bánh xèo:** Vietnamese "pancake" with shrimp and pork
**Bánh mì:** French-influenced Vietnamese sandwich
**Cà phê sữa đá:** Vietnamese iced coffee with condensed milk

So there you have it ladies and gentlemen, the undeniably most accurate list of the best restaurants in Da Nang. Just kidding, we've certainly left out a few. So get out there, explore the holes in the wall, the sidewalk food stalls, and the nice restaurants. Eat up!

Ready to work up an appetite? Book a surf lesson with Surf Feeling and discover Da Nang's incredible waves before exploring these amazing food spots!
    `,
    category: "travel-guide",
    author: "Surf Feeling Team",
    publishedAt: "2025-01-19",
    updatedAt: "2025-01-19",
    readTime: 9,
    seoKeywords: [
      "Da Nang food guide",
      "best restaurants Da Nang",
      "Da Nang food tour",
      "where to eat Da Nang",
      "Da Nang local food",
      "Vietnamese food Da Nang",
      "Da Nang breakfast spots",
      "bánh mì Da Nang",
      "surf and food Da Nang",
      "Da Nang travel food guide",
      "authentic Vietnamese restaurants Da Nang",
      "best bánh xèo Da Nang",
      "Da Nang street food",
      "local eats Da Nang",
      "food near My Khe Beach"
    ],
    tags: ["food guide", "travel", "Da Nang", "restaurants", "local culture", "Vietnamese cuisine", "travel tips", "surf lifestyle"]
  }
] as const;
