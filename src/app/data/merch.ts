export interface MerchItem {
  id: string;
  name: string;
  slug: string;
  price_usd: number;
  category: 'Apparel' | 'Headwear' | 'Accessories' | 'Drinkware' | 'Gift';
  short_description: string;
  hero_image: string;
  buy_url: string;
}

export const merchItems: MerchItem[] = [
  {
    id: '1',
    name: 'Organic Trail Tee',
    slug: 'organic-trail-tee',
    price_usd: 38,
    category: 'Apparel',
    short_description: '100% organic cotton tee with embroidered logo. Soft, durable, and trail-tested.',
    hero_image: 'organic-trail-tshirt',
    buy_url: '#'
  },
  {
    id: '2',
    name: 'Premium Heavy Tee',
    slug: 'premium-heavy-tee',
    price_usd: 44,
    category: 'Apparel',
    short_description: 'Heavyweight cotton tee built to last. Forest green or cream colorways.',
    hero_image: 'premium-heavy-tshirt',
    buy_url: '#'
  },
  {
    id: '3',
    name: 'Forest Fleece Hoodie',
    slug: 'forest-fleece-hoodie',
    price_usd: 64,
    category: 'Apparel',
    short_description: 'Cozy fleece hoodie perfect for campfire nights. Embroidered chest logo.',
    hero_image: 'forest-fleece-hoodie',
    buy_url: '#'
  },
  {
    id: '4',
    name: 'Lightweight Camp Crewneck',
    slug: 'lightweight-camp-crewneck',
    price_usd: 56,
    category: 'Apparel',
    short_description: 'Breathable cotton-blend crewneck for layering. Subtle screen-printed design.',
    hero_image: 'camp-crewneck-sweatshirt',
    buy_url: '#'
  },
  {
    id: '5',
    name: 'Trail Dad Cap',
    slug: 'trail-dad-cap',
    price_usd: 32,
    category: 'Headwear',
    short_description: 'Unstructured cotton cap with leather strap. Washed for broken-in feel.',
    hero_image: 'trail-dad-cap-hat',
    buy_url: '#'
  },
  {
    id: '6',
    name: 'Trucker Hat',
    slug: 'trucker-hat',
    price_usd: 34,
    category: 'Headwear',
    short_description: 'Classic mesh-back trucker with rope detail. Adjustable snapback.',
    hero_image: 'trucker-hat-mesh',
    buy_url: '#'
  },
  {
    id: '7',
    name: 'Knit Beanie',
    slug: 'knit-beanie',
    price_usd: 28,
    category: 'Headwear',
    short_description: 'Soft acrylic knit beanie for cold-weather adventures. Cuffed style.',
    hero_image: 'knit-beanie-winter',
    buy_url: '#'
  },
  {
    id: '8',
    name: 'Enamel Pin Set (3)',
    slug: 'enamel-pin-set',
    price_usd: 14,
    category: 'Accessories',
    short_description: 'Collectible enamel pins: mountain, campfire, compass. Rubber backing.',
    hero_image: 'enamel-pin-set-collection',
    buy_url: '#'
  },
  {
    id: '9',
    name: 'Waterproof Sticker Pack (6)',
    slug: 'waterproof-sticker-pack',
    price_usd: 12,
    category: 'Accessories',
    short_description: 'Durable vinyl stickers for water bottles, laptops, and gear. Weather-resistant.',
    hero_image: 'waterproof-sticker-pack',
    buy_url: '#'
  },
  {
    id: '10',
    name: 'Stainless Trail Bottle 32oz',
    slug: 'stainless-trail-bottle-32oz',
    price_usd: 36,
    category: 'Drinkware',
    short_description: 'Double-wall insulated bottle keeps drinks cold 24hrs. Laser-etched logo.',
    hero_image: 'stainless-water-bottle',
    buy_url: '#'
  },
  {
    id: '11',
    name: 'Ceramic Camp Mug',
    slug: 'ceramic-camp-mug',
    price_usd: 20,
    category: 'Drinkware',
    short_description: 'Hand-glazed ceramic mug with forest green rim. Campfire-safe.',
    hero_image: 'ceramic-camp-mug',
    buy_url: '#'
  },
  {
    id: '12',
    name: 'Canvas Adventure Tote',
    slug: 'canvas-adventure-tote',
    price_usd: 26,
    category: 'Accessories',
    short_description: 'Heavy-duty canvas tote for market runs and day trips. Screen-printed design.',
    hero_image: 'canvas-tote-bag',
    buy_url: '#'
  },
  {
    id: '13',
    name: 'Seasonal Limited Hoodie',
    slug: 'seasonal-limited-hoodie',
    price_usd: 74,
    category: 'Apparel',
    short_description: 'Limited-edition heavyweight hoodie with unique seasonal artwork. Pre-order only.',
    hero_image: 'seasonal-limited-hoodie',
    buy_url: '#'
  },
  {
    id: '14',
    name: 'Founding Member Patch',
    slug: 'founding-member-patch',
    price_usd: 18,
    category: 'Accessories',
    short_description: 'Embroidered iron-on patch for early supporters. Limited quantity.',
    hero_image: 'founding-member-patch',
    buy_url: '#'
  },
  {
    id: '15',
    name: 'Gift Card',
    slug: 'gift-card',
    price_usd: 25,
    category: 'Gift',
    short_description: 'Digital gift card redeemable for merch, itineraries, and event badges. $25/$50/$100 values.',
    hero_image: 'gift-card-digital',
    buy_url: '#'
  }
];
