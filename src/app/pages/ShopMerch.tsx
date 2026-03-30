import { useState } from 'react';
import { Link } from 'react-router';
import { merchItems } from '../data/merch';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ShopMerch() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Apparel', 'Headwear', 'Accessories', 'Drinkware', 'Gift'];
  
  const filteredMerch = selectedCategory === 'All'
    ? merchItems
    : merchItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-[#0A3D33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Shop Merch</h1>
          <p className="text-xl text-white/90">Trail-tested gear and apparel. Represent the collective wherever you roam.</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#0A3D33] text-white'
                    : 'bg-cream text-ink hover:bg-mist'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMerch.map((item) => (
              <Link
                key={item.id}
                to={`/merch/${item.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-mist hover:border-[#0A3D33] transition-all hover:shadow-lg"
              >
                <div className="aspect-square bg-mist relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-ink mb-1 group-hover:text-[#0A3D33] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-ink/70 mb-3 line-clamp-2">{item.short_description}</p>
                  <div className="text-lg font-medium text-[#0A3D33]">${item.price_usd}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
