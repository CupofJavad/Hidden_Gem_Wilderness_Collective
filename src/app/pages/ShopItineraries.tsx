import { useState } from 'react';
import { Link } from 'react-router';
import { itineraries } from '../data/itineraries';
import { ItineraryFilter } from '../components/ItineraryFilter';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ShopItineraries() {
  const [filteredItineraries, setFilteredItineraries] = useState(itineraries);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-[#0A3D33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">
            Self-Guided Itineraries
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Curated routes with detailed guides, GPS tracks, and local knowledge. Buy once, adventure forever.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ItineraryFilter
            itineraries={itineraries}
            onFilterChange={setFilteredItineraries}
          />

          {filteredItineraries.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-ink/70 mb-4">
                No routes match your filters
              </p>
              <button
                onClick={() => setFilteredItineraries(itineraries)}
                className="text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors"
              >
                Clear filters and show all
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 text-sm text-ink/70">
                Showing {filteredItineraries.length} of {itineraries.length} itineraries
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredItineraries.map((itinerary) => (
                  <Link
                    key={itinerary.sku}
                    to={`/itineraries/${itinerary.slug}`}
                    className="group bg-white rounded-xl overflow-hidden border border-mist hover:border-[#0A3D33] transition-all hover:shadow-lg"
                  >
                    <div className="aspect-[4/3] bg-mist relative overflow-hidden">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80`}
                        alt={itinerary.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-ink">
                        ${itinerary.price_usd}
                      </div>
                      {itinerary.featured && (
                        <div className="absolute top-3 left-3 bg-[#D88B2A] text-white px-2 py-1 rounded text-xs font-medium">
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-[#8C5A2E] mb-2">
                        <span className="px-2 py-0.5 rounded-full bg-[#DDE3DF]">{itinerary.region}</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#DDE3DF]">{itinerary.difficulty}</span>
                      </div>
                      <h3 className="font-medium text-ink mb-1 group-hover:text-[#0A3D33] transition-colors">
                        {itinerary.title}
                      </h3>
                      <p className="text-sm text-ink/70 mb-3 line-clamp-2">
                        {itinerary.tagline}
                      </p>
                      <div className="text-xs text-ink/60">
                        {itinerary.duration_hours}hrs • {itinerary.season}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* Sidebar CTA */}
          <div className="bg-white rounded-xl p-8 border border-mist max-w-md mx-auto text-center">
            <h3 className="text-xl font-medium text-ink mb-3">
              Bundle & Save
            </h3>
            <p className="text-sm text-ink/70 mb-4">
              Annual Trail Library Pass gives you unlimited access to all current and future itineraries for just $199/year.
            </p>
            <Link
              to="/membership"
              className="inline-block px-6 py-3 rounded-lg bg-[#0A3D33] text-white hover:bg-[#0A3D33]/90 transition-colors"
            >
              View Membership Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
