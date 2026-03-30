import { Link } from 'react-router';
import { ArrowRight, Users, Map, Heart, Star } from 'lucide-react';
import { HeroGradient } from '../components/HeroGradient';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { events } from '../data/events';
import { itineraries } from '../data/itineraries';
import { merchItems } from '../data/merch';
import { siteConfig } from '../config/site';

export default function Home() {
  const featuredEvents = events.filter(e => e.featured).slice(0, 4);
  const featuredItineraries = itineraries.filter(i => i.featured).slice(0, 6);
  const featuredMerch = merchItems.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroGradient />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <h1 className="text-4xl md:text-6xl font-medium text-white mb-6">
            Discover NorCal's Hidden Gems
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Escape the screen, find real people, collect real stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/calendar"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#0A3D33] hover:bg-white/90 transition-colors"
            >
              Browse Adventures
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/itineraries"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#5A9BC0] text-white hover:bg-[#4A8BAF] transition-colors"
            >
              Shop Itineraries
            </Link>
            <Link
              to="/membership"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Join the Collective
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-mist py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-medium text-[#0A3D33] mb-2">500+</div>
              <div className="text-ink/70">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-medium text-[#0A3D33] mb-2">24</div>
              <div className="text-ink/70">Events This Year</div>
            </div>
            <div>
              <div className="text-4xl font-medium text-[#0A3D33] mb-2">10+</div>
              <div className="text-ink/70">Hidden Gem Routes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-ink mb-2">
                Upcoming Adventures
              </h2>
              <p className="text-ink/70">Join us for peer-organized outdoor experiences</p>
            </div>
            <Link
              to="/calendar"
              className="text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors flex items-center gap-1"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <Link
                key={event.id}
                to={`/calendar/${event.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-mist hover:border-[#0A3D33] transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-mist relative overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80`}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-[#D88B2A] text-white px-2 py-1 rounded text-xs font-medium">
                    ${event.badge_price_usd}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#8C5A2E] mb-1">
                    {event.month} {event.day} • {event.duration_label}
                  </div>
                  <h3 className="font-medium text-ink mb-2 group-hover:text-[#0A3D33] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-ink/70 line-clamp-2">
                    {event.teaser_description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-ink mb-2">
                Self-Guided Itineraries
              </h2>
              <p className="text-ink/70">Curated routes for your own adventures</p>
            </div>
            <Link
              to="/itineraries"
              className="text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors flex items-center gap-1"
            >
              Shop All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItineraries.map((itinerary) => (
              <Link
                key={itinerary.sku}
                to={`/itineraries/${itinerary.slug}`}
                className="group bg-cream rounded-xl overflow-hidden border border-mist hover:border-[#0A3D33] transition-all hover:shadow-lg"
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
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-[#8C5A2E] mb-2">
                    <span className="px-2 py-0.5 rounded-full bg-[#DDE3DF]">{itinerary.region}</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#DDE3DF]">{itinerary.difficulty}</span>
                  </div>
                  <h3 className="font-medium text-ink mb-1 group-hover:text-[#0A3D33] transition-colors">
                    {itinerary.title}
                  </h3>
                  <p className="text-sm text-ink/70 mb-3">
                    {itinerary.tagline}
                  </p>
                  <div className="text-xs text-ink/60">
                    {itinerary.duration_hours}hrs • {itinerary.season}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join - Icon Row */}
      <section className="py-16 md:py-24 bg-[#0A3D33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">
            Why Join the Collective
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5A9BC0] flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-3">Real Connections</h3>
              <p className="text-white/80">
                Small groups, genuine conversations, and friendships that extend beyond the trail. No forced networking—just natural bonds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5A9BC0] flex items-center justify-center">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-3">Hidden Places</h3>
              <p className="text-white/80">
                Access carefully stewarded routes and spots that aren't on Instagram. Sustainable adventure tourism done right.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#5A9BC0] flex items-center justify-center">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium mb-3">Safety First</h3>
              <p className="text-white/80">
                Peer-organized doesn't mean unprepared. Every trip has safety protocols, experienced anchors, and clear communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="voices" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-medium text-center text-ink mb-12">
            Voices from the Trail
          </h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Merch Teaser */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-ink mb-2">
                Trail-Tested Gear
              </h2>
              <p className="text-ink/70">Represent the collective wherever you roam</p>
            </div>
            <Link
              to="/merch"
              className="text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors flex items-center gap-1"
            >
              Shop All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredMerch.map((item) => (
              <Link
                key={item.id}
                to={`/merch/${item.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-mist hover:border-[#0A3D33] transition-all hover:shadow-lg"
              >
                <div className="aspect-square bg-mist relative overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium text-ink mb-1 group-hover:text-[#0A3D33] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-ink/70 mb-2">{item.short_description}</p>
                  <div className="text-lg font-medium text-[#0A3D33]">${item.price_usd}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 md:py-24 bg-[#1F2926] text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Stay in the Loop
          </h2>
          <p className="text-white/80 mb-8">
            Monthly newsletter with new routes, upcoming events, and community stories. No spam, just good vibes.
          </p>
          {siteConfig.newsletterSignupUrl ? (
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-lg mx-auto">
              <a
                href={siteConfig.newsletterSignupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-6 py-3 rounded-lg bg-[#5A9BC0] text-white hover:bg-[#4A8BAF] transition-colors font-medium"
              >
                Subscribe (external)
              </a>
              <Link
                to="/contact?topic=newsletter"
                className="text-sm text-white/80 hover:text-white underline underline-offset-4"
              >
                Or contact us to get on the list
              </Link>
            </div>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.assign('/contact?topic=newsletter');
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-ink focus:outline-none focus:ring-2 focus:ring-[#5A9BC0]"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-[#5A9BC0] text-white hover:bg-[#4A8BAF] transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
