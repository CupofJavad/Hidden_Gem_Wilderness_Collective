export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  cover_image: string;
  body: string;
  related_itinerary_slugs: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'How we plan a hidden-gem day without ruining the vibe',
    slug: 'planning-hidden-gems-without-ruining-vibe',
    excerpt: 'The delicate art of sharing secret spots while preserving their magic. Our philosophy on sustainable adventure tourism.',
    published_at: '2026-03-15',
    cover_image: 'planning-adventure-map',
    body: `
      There's a tension at the heart of what we do: how do you share a hidden place without destroying what made it special?
      
      We've spent years wrestling with this question. Here's our framework:
      
      **Capacity limits matter.** If a trail can handle 50 people a day without degradation, we never send more than 20. Better to turn people away than love a place to death.
      
      **Timing is stewardship.** We route groups to popular spots during off-peak hours and seasons. Dawn patrols and shoulder-season trips reduce cumulative impact.
      
      **Education over enforcement.** Every itinerary includes Leave No Trace context specific to that ecosystem. We explain *why* the rules exist, not just what they are.
      
      **Local relationships first.** We coordinate with land managers, indigenous communities, and longtime locals. If they say a spot needs rest, we listen.
      
      **Revenue sharing.** Portion of every sale goes to trail maintenance funds and conservation nonprofits in the regions we explore.
      
      The goal isn't to keep secrets forever—it's to share them responsibly with people who'll carry the ethic forward.
    `,
    related_itinerary_slugs: 'lost-coast-mist-mile,ethical-hot-springs-circuit'
  },
  {
    id: '2',
    title: 'Peer meetup norms that keep groups kind and safe',
    slug: 'peer-meetup-norms-safety-kindness',
    excerpt: "Self-guided doesn't mean unstructured. How we create culture in non-commercial adventure groups.",
    published_at: '2026-03-18',
    cover_image: 'group-campfire-discussion',
    body: `
      Hidden Gem isn't a guiding service—we're a *collective*. That means different rules, responsibilities, and social contracts.
      
      **What makes peer groups work:**
      
      **Pre-trip communication.** Everyone gets a detailed brief: fitness requirements, gear expectations, group size, pace philosophy, and emergency protocols. No surprises on the trailhead.
      
      **Transparent skill matching.** We're honest about difficulty ratings and experience requirements. A "moderate" hike here means steady elevation and potentially loose trail surfaces—not a flat boardwalk.
      
      **Shared decision-making.** Trip anchors (experienced volunteers) facilitate, but the group decides together: when to turn back, where to camp, how long to rest.
      
      **Opt-in vulnerability.** Some folks want deep fireside conversations. Others just want quiet companionship. We create space for both without pressure.
      
      **Safety without hierarchy.** We train trip anchors in wilderness first aid and risk assessment, but everyone carries a communication plan and knows the bailout routes.
      
      **Accountability culture.** If someone consistently shows up unprepared or disrespects group norms, we have a conversation. This isn't summer camp—it's a community with standards.
      
      The magic happens when everyone shows up ready to both contribute and receive.
    `,
    related_itinerary_slugs: 'beginner-backpacking-social-loop,klamath-calm-float-day'
  },
  {
    id: '3',
    title: 'NorCal seasonality cheat sheet',
    slug: 'norcal-seasonality-cheat-sheet',
    excerpt: 'When to go where in Northern California. Insider timing for weather, crowds, and peak conditions.',
    published_at: '2026-03-22',
    cover_image: 'seasonal-landscape-norcal',
    body: `
      Northern California's seasons don't follow a calendar—they follow elevation, proximity to the coast, and the whims of the jet stream. Here's when to chase what:
      
      **Winter (Dec–Feb): Low-elevation exploration**
      - Lost Coast: Dramatic storm watching, but check tide tables obsessively
      - Foothills: Waterfalls at peak flow, green hillsides, no rattlesnakes
      - Hot springs: Prime season—cold air, warm water, minimal crowds
      
      **Spring (Mar–May): Wildflower madness**
      - Sierra foothills: Lupine, poppies, and camas in March-April
      - Klamath region: Dogwood blooms, rivers running high but manageable
      - High Sierra: Still snowed in until late May—plan low
      
      **Summer (Jun–Aug): High country opens**
      - Alpine lakes: July–September is your window
      - Swimming holes: Water temps finally tolerable by late June
      - Lost Coast: Fog returns—bring layers even in August
      
      **Fall (Sep–Nov): Peak conditions**
      - Sierra Nevada: Stable weather, warm water, golden aspens, fewer people
      - Rivers: Low and clear—perfect for paddling and fishing
      - Hot springs: Shoulder season sweet spot before winter storms
      
      **Pro tips:**
      - Always check road access—mountain passes close with first snow
      - Wildfire season (Jul–Oct) can alter plans; we monitor closely
      - "June Gloom" on the coast is real; embrace the moody fog
      
      Best adventures happen when timing aligns with conditions, not just your vacation calendar.
    `,
    related_itinerary_slugs: 'sierra-secret-swim-corridor,shasta-ridge-dawn-loop,tahoe-quiet-side-backpack'
  },
  {
    id: '4',
    title: 'Gear minimalism for group adventures',
    slug: 'gear-minimalism-group-adventures',
    excerpt: 'What to bring, what to borrow, and what to leave home. A thoughtful packing philosophy for shared trips.',
    published_at: '2026-03-25',
    cover_image: 'minimal-backpack-gear-layout',
    body: `
      Group trips unlock a superpower: shared gear weight. Here's how to pack light without sacrificing safety or comfort.
      
      **Personal non-negotiables:**
      - Your own: sleeping bag, pad, clothing layers, headlamp, water bottles, snacks
      - Why: Fit, hygiene, and personal comfort matter
      
      **Group gear (coordinate before trip):**
      - Shelter: Share tents (2-3 people per tent saves huge weight)
      - Kitchen: One stove per 4 people, split fuel canisters
      - Water treatment: Two filters for redundancy, not one per person
      - First aid: Comprehensive group kit beats six individual mini-kits
      
      **The "maybe" category:**
      - Camp chairs: Bulky but worth it for long evenings; split among vehicles
      - Cameras: Phone is enough for most; bring the DSLR only if photography is the point
      - Books: One shared paperback for campfire reading
      
      **Leave home:**
      - Redundant chargers (coordinate phone models and share)
      - Full-size toiletries (decant into mini bottles)
      - Cotton clothing (cold when wet; synthetics and wool only)
      - "Just in case" items you've never used
      
      **Hidden Gem lending library:**
      Badge Members and Insiders can borrow: bear canisters, trekking poles, camp stoves, water filters, and first aid kits from our gear pool. Request 2 weeks ahead.
      
      Less weight = more miles, more smiles.
    `,
    related_itinerary_slugs: 'backcountry-lakes-weekender,tahoe-quiet-side-backpack'
  },
  {
    id: '5',
    title: 'Reading water & weather for mellow float days',
    slug: 'reading-water-weather-float-days',
    excerpt: 'River safety fundamentals for kayak and canoe adventures. How to assess conditions like a local.',
    published_at: '2026-03-28',
    cover_image: 'calm-river-paddling-scene',
    body: `
      Floating rivers is one of our favorite low-impact adventures, but "mellow" doesn't mean mindless. Here's how to read conditions and stay safe.
      
      **Before you launch: Check three things**
      
      1. **Flow rate (CFS = cubic feet per second)**
         - Under 500 CFS: Likely too low, scraping rocks
         - 500-2000 CFS: Sweet spot for beginner floats
         - 2000-5000 CFS: Faster current, intermediate skills needed
         - Over 5000 CFS: High water—abort unless experienced
      
      2. **Weather forecast (6-hour window)**
         - Morning fog? Brings calm winds (good)
         - Afternoon heating? Expect wind against upstream paddlers
         - Thunderstorms predicted? Off the water by 2pm
      
      3. **River classification**
         - Class I (easy): Small waves, clear passage—our standard
         - Class II (novice): Some maneuvering required—doable with instruction
         - Class III+ (intermediate+): We don't route recreational floats here
      
      **On the water: Reading features**
      - **Eddies** (calm pools behind rocks): Rest spots and swimming zones
      - **Strainers** (downed trees): Avoid at all costs—current traps boats
      - **Pour-overs** (water flowing over rocks): Scout or portage if unclear
      - **Hydraulics** (recirculating current): Stay away from dam outflows
      
      **Group protocols:**
      - Stay within eyesight of next paddler
      - Establish hand signals before launch (stop, help, all clear)
      - Buddy system for swimming sections
      - Last paddler carries throw rope
      
      **Gear essentials:**
      - PFD (life jacket) worn, not stowed
      - Whistle attached to PFD
      - Dry bag for phone, keys, snacks
      - Water shoes (not flip-flops)
      - Sun protection—reflection doubles exposure
      
      The best float days are when you read the river right and never need your safety skills.
    `,
    related_itinerary_slugs: 'klamath-calm-float-day'
  },
  {
    id: '6',
    title: 'Joining a collective without social pressure',
    slug: 'joining-collective-without-social-pressure',
    excerpt: 'For the introverts, anxious, and socially cautious: how we design for low-pressure connection.',
    published_at: '2026-03-30',
    cover_image: 'solo-hiker-quiet-trail',
    body: `
      "I want to go, but I'm nervous about the group thing."
      
      We hear this a lot. Here's how Hidden Gem works for people who need space to ease in:
      
      **No forced fun**
      Our events aren't team-building exercises. You can hike in comfortable silence and still belong. Conversation happens organically around campfires, not through icebreaker games.
      
      **Solo-friendly pacing**
      Many members come alone to every event. We normalize it. Pre-trip intros happen via email so you recognize a face, but there's no pressure to be best friends by mile two.
      
      **Opt-in socializing**
      - Campfire circle? Join when ready, or enjoy from your tent
      - Group dinner? Potluck style—contribute and eat, or just eat
      - Post-trip hangouts? Always announced, never required
      
      **Transparent expectations**
      Every event listing includes:
      - Group size (we cap most at 12-15)
      - Pace philosophy (stop-and-smell-roses vs steady hiking)
      - Social intensity (high-energy mixer vs quiet contemplative)
      
      **The "parallel play" model**
      Sometimes the best group experience is doing the same activity in the same place with people who won't demand your story. It's okay to just... be.
      
      **When to speak up**
      If someone's behavior makes you uncomfortable (pushy questions, boundary issues), tell the trip anchor or email us. We'll address it. This community only works if everyone feels safe.
      
      **Start small:**
      - Try a morning event (3-4 hours) before committing to overnight trips
      - Join the Discord and lurk before posting
      - Read past event recaps to get a feel for the vibe
      
      You're not here to perform extroversion. You're here to find your people at your pace.
    `,
    related_itinerary_slugs: 'lost-coast-mist-mile,dawn-fishing-social-loop'
  }
];
