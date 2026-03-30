export interface Itinerary {
  sku: string;
  title: string;
  slug: string;
  tagline: string;
  price_usd: number;
  currency: string;
  region: 'Sierra' | 'Tahoe' | 'Shasta' | 'Klamath' | 'Lost Coast' | 'Other';
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  duration_hours: number;
  season: string;
  includes: string;
  hero_image: string;
  long_description: string;
  hazards_notes: string;
  access_permit_notes: string;
  featured: boolean;
  buy_url: string;
}

export const itineraries: Itinerary[] = [
  {
    sku: 'HGWC-LC-001',
    title: 'Lost Coast Mist Mile',
    slug: 'lost-coast-mist-mile',
    tagline: 'A mystical shoreline walk where fog meets ancient forest',
    price_usd: 39,
    currency: 'USD',
    region: 'Lost Coast',
    difficulty: 'Easy',
    duration_hours: 4,
    season: 'Apr–Oct',
    includes: 'PDF route guide, GPX track, tide charts, parking notes, wildlife safety brief',
    hero_image: 'lost-coast-trail',
    long_description: 'Experience the otherworldly beauty of California\'s Lost Coast on this gentle 4-hour self-guided adventure. Walk along black sand beaches, navigate tide pools teeming with life, and witness the dramatic meeting of redwood forests and Pacific surf. This route is perfect for contemplative solo hikers or small groups seeking connection with wild coastal landscapes. Best enjoyed during golden hour when fog transforms the coastline into a dreamscape.',
    hazards_notes: 'Tide-dependent sections: check provided tide tables. Sneaker waves possible. Cell service unreliable. Carry offline maps and tide info. Weather changes rapidly—layers essential.',
    access_permit_notes: 'No permit required. Parking at designated trailhead. Respect private property boundaries marked on map. Leave No Trace principles apply.',
    featured: true,
    buy_url: '#'
  },
  {
    sku: 'HGWC-SIE-014',
    title: 'Sierra Secret Swim Corridor',
    slug: 'sierra-secret-swim-corridor',
    tagline: 'High-country swimming holes linked by wildflower trails',
    price_usd: 45,
    currency: 'USD',
    region: 'Sierra',
    difficulty: 'Moderate',
    duration_hours: 6,
    season: 'Jul–Sep',
    includes: 'PDF route guide, GPX track, swimming safety tips, wildflower ID sheet, lunch spot recommendations',
    hero_image: 'sierra-swimming-holes',
    long_description: 'Discover a chain of pristine alpine pools connected by meadow trails in the Sierra Nevada. This moderately paced route rewards hikers with multiple swim opportunities in crystal-clear mountain water. Navigate granite slabs, cross wildflower meadows in peak bloom, and enjoy panoramic views of jagged peaks. Ideal for confident swimmers comfortable with cold water and variable trail conditions.',
    hazards_notes: 'Cold water temperatures (50–65°F). Swift current in early season. Uneven granite surfaces when wet. Afternoon thunderstorms possible July–August. Carry first aid kit.',
    access_permit_notes: 'Wilderness permit recommended for overnight trips. Day use typically unrestricted. Check seasonal road access. Bear canister required if camping.',
    featured: true,
    buy_url: '#'
  },
  {
    sku: 'HGWC-SHA-008',
    title: 'Shasta Ridge Dawn Loop',
    slug: 'shasta-ridge-dawn-loop',
    tagline: 'Sunrise views of Mount Shasta from a quiet ridgeline trail',
    price_usd: 49,
    currency: 'USD',
    region: 'Shasta',
    difficulty: 'Moderate',
    duration_hours: 5,
    season: 'Jun–Oct',
    includes: 'PDF route guide, GPX track, sunrise timing guide, birding checklist, astrophotography tips',
    hero_image: 'mount-shasta-sunrise',
    long_description: 'Greet the day from a volcanic ridge with unobstructed views of Mount Shasta\'s snow-capped summit. This loop trail features gentle elevation gain, wildflower-dotted meadows, and excellent bird-watching opportunities. Designed for early risers who want to experience the magic of alpenglow on Northern California\'s most iconic peak. Bring a thermos and watch the world wake up.',
    hazards_notes: 'Start in darkness—headlamp required. Exposed ridge section—wind can be strong. Limited water sources. Volcanic rock can be loose. Check weather forecast for cloud cover.',
    access_permit_notes: 'No permit required. Limited parking at trailhead—arrive early. Respect quiet hours until sunrise. Pack out all trash.',
    featured: true,
    buy_url: '#'
  },
  {
    sku: 'HGWC-KLA-005',
    title: 'Klamath Calm Float Day',
    slug: 'klamath-calm-float-day',
    tagline: 'Gentle river float through canyon country with optional fishing',
    price_usd: 42,
    currency: 'USD',
    region: 'Klamath',
    difficulty: 'Easy',
    duration_hours: 5,
    season: 'May–Sep',
    includes: 'PDF route guide, put-in/take-out coordinates, current conditions, shuttle logistics, fishing tips (rod not included)',
    hero_image: 'klamath-river-float',
    long_description: 'Float the scenic Klamath River on a mellow section perfect for kayaks, canoes, or stand-up paddleboards. Drift past towering canyon walls, spot eagles and ospreys, and enjoy optional fishing stops in calm eddies. This self-guided water route includes detailed shuttle instructions and river etiquette guidelines. No whitewater experience needed—just basic paddling skills and a love of moving water.',
    hazards_notes: 'Class I water with occasional riffles. Cold water—dress accordingly. Sunburn risk—full coverage recommended. Check flow rates before launch. Life jacket required.',
    access_permit_notes: 'No permit needed. Parking available at both ends. Private shuttle services available (not included). Respect tribal lands and private property.',
    featured: false,
    buy_url: '#'
  },
  {
    sku: 'HGWC-TAH-011',
    title: 'Tahoe Quiet Side Backpack',
    slug: 'tahoe-quiet-side-backpack',
    tagline: 'Two-day loop away from the crowds with lakeside camping',
    price_usd: 59,
    currency: 'USD',
    region: 'Tahoe',
    difficulty: 'Moderate',
    duration_hours: 14,
    season: 'Jul–Sep',
    includes: 'PDF route guide, GPX track, backcountry campsite recommendations, water source map, gear checklist',
    hero_image: 'lake-tahoe-backcountry',
    long_description: 'Escape Tahoe\'s tourist corridor on this two-day backpacking loop that showcases the lake\'s wilderness character. Camp beside a pristine alpine lake, wake to mountain reflections, and hike through old-growth forest. This route prioritizes solitude without sacrificing scenery. Perfect for intermediate backpackers seeking a weekend reset without excessive mileage.',
    hazards_notes: 'Bears active—food storage required. Limited water between sources. Mosquitoes heavy in July. Weather changes fast—prepare for rain. Navigation skills recommended.',
    access_permit_notes: 'Wilderness permit required (reserve in advance). Bear canister mandatory. Campfire regulations vary by zone—check current restrictions.',
    featured: true,
    buy_url: '#'
  },
  {
    sku: 'HGWC-HOT-003',
    title: 'Ethical Hot Springs Circuit',
    slug: 'ethical-hot-springs-circuit',
    tagline: 'Soak in natural springs while respecting wild spaces',
    price_usd: 44,
    currency: 'USD',
    region: 'Other',
    difficulty: 'Easy',
    duration_hours: 3,
    season: 'Year-round',
    includes: 'PDF route guide, GPS coordinates, soaking etiquette guide, temperature notes, accessibility info',
    hero_image: 'hot-springs-natural',
    long_description: 'Discover Northern California\'s best-stewarded natural hot springs through a mindful approach to geothermal recreation. This guide emphasizes Leave No Trace principles, respectful sharing of space, and water safety. Learn about spring ecology, proper etiquette, and how to protect these fragile resources for future visitors. Short hike suitable for all fitness levels.',
    hazards_notes: 'Water temperatures vary (95–110°F). Risk of burns and dehydration. No lifeguard on duty. Slippery surfaces. Limit soak time. Bring drinking water.',
    access_permit_notes: 'No permit required. Respect closure signs. Pack out all trash. Clothing optional zones marked on map—check local regulations.',
    featured: false,
    buy_url: '#'
  },
  {
    sku: 'HGWC-FISH-006',
    title: 'Dawn Fishing Social Loop',
    slug: 'dawn-fishing-social-loop',
    tagline: 'Shoreline walk connecting prime fishing spots at sunrise',
    price_usd: 35,
    currency: 'USD',
    region: 'Other',
    difficulty: 'Easy',
    duration_hours: 4,
    season: 'Apr–Nov',
    includes: 'PDF route guide, fishing spot coordinates, species guide, licensing info, catch-and-release best practices',
    hero_image: 'lake-fishing-dawn',
    long_description: 'Early-morning fishing route designed for solo anglers or small groups seeking quiet companionship. Walk a scenic lake or river loop with multiple access points ideal for fly fishing or spin casting. Guide includes seasonal fish behavior notes, ethical catch-and-release techniques, and recommended tackle. Perfect for beginners or experienced anglers exploring new water.',
    hazards_notes: 'Slippery rocks and banks. Cold early-morning temperatures. Check fishing regulations and licensing requirements. Wildlife active at dawn.',
    access_permit_notes: 'Valid California fishing license required (not included). Check daily limits and regulations. Some areas may have seasonal closures.',
    featured: false,
    buy_url: '#'
  },
  {
    sku: 'HGWC-BC-020',
    title: 'Backcountry Lakes Weekender',
    slug: 'backcountry-lakes-weekender',
    tagline: 'Three-day exploration of alpine lake basins',
    price_usd: 79,
    currency: 'USD',
    region: 'Sierra',
    difficulty: 'Hard',
    duration_hours: 26,
    season: 'Jul–Sep',
    includes: 'PDF route guide, GPX track, full campsite list, water filter strategy, extended gear checklist, route variations',
    hero_image: 'alpine-lakes-backpacking',
    long_description: 'Ambitious three-day backpacking route linking a dozen pristine alpine lakes across high Sierra passes. This challenging itinerary rewards fit hikers with stunning scenery, excellent fishing, and near-guaranteed solitude. Requires solid navigation skills, backcountry experience, and comfort with variable weather. Each night offers multiple campsite options to accommodate different paces.',
    hazards_notes: 'High elevation (9,000–11,500 ft). Exposure to lightning. Snow patches into July. Stream crossings can be challenging. Wildlife encounters possible. Emergency extraction difficult.',
    access_permit_notes: 'Wilderness permit required (competitive—apply early). Bear canister mandatory. Maximum group size restrictions apply. Leave detailed itinerary with emergency contact.',
    featured: true,
    buy_url: '#'
  },
  {
    sku: 'HGWC-BUN-001',
    title: 'Sierra + Lost Coast Mega-Bundle',
    slug: 'sierra-lost-coast-bundle',
    tagline: 'Combined collection of mountain and coastal adventures',
    price_usd: 99,
    currency: 'USD',
    region: 'Other',
    difficulty: 'Moderate',
    duration_hours: 40,
    season: 'Year-round',
    includes: 'All PDF guides and GPX tracks for 6 itineraries, bonus seasonal planning calendar, gear optimization guide',
    hero_image: 'adventure-bundle-collection',
    long_description: 'Save on a curated collection of six complementary itineraries spanning Sierra Nevada peaks and Lost Coast shoreline. Perfect for year-round adventurers who want variety and value. Bundle includes bonus content: seasonal planning calendar, layering strategies for different environments, and a master gear checklist. Build your adventure resume across diverse ecosystems.',
    hazards_notes: 'Varies by itinerary—review individual route hazards. Seasonal timing critical for certain routes.',
    access_permit_notes: 'Permit requirements vary by itinerary. Consult individual route notes.',
    featured: false,
    buy_url: '#'
  },
  {
    sku: 'HGWC-PASS-Annual',
    title: 'Annual Trail Library Pass',
    slug: 'annual-trail-library',
    tagline: 'Unlimited access to all current and future itineraries',
    price_usd: 199,
    currency: 'USD',
    region: 'Other',
    difficulty: 'Easy',
    duration_hours: 0,
    season: 'Year-round',
    includes: 'Access to full itinerary library, new route releases, quarterly updates, member forum access, early event registration',
    hero_image: 'trail-library-membership',
    long_description: 'Unlock the complete Hidden Gem itinerary collection with an annual subscription. Get instant access to all routes, receive new releases first, and enjoy exclusive member benefits including priority event registration and community forum access. Routes are continuously updated with seasonal conditions, new discoveries, and member feedback. Best value for dedicated explorers.',
    hazards_notes: 'Varies by itinerary selected.',
    access_permit_notes: 'Permit requirements vary by route. Annual pass does not include agency permits or licenses.',
    featured: true,
    buy_url: '#'
  }
];
