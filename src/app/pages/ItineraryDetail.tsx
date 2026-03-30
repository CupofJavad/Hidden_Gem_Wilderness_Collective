import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, MapPin, Clock, Calendar, DollarSign, Info } from 'lucide-react';
import { itineraries } from '../data/itineraries';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NavOrExternalLink } from '../components/NavOrExternalLink';
import { resolveItineraryCheckoutUrl } from '../config/site';

export default function ItineraryDetail() {
  const { slug } = useParams();
  const itinerary = itineraries.find((i) => i.slug === slug);

  if (!itinerary) {
    return <Navigate to="/itineraries" replace />;
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/itineraries"
            className="inline-flex items-center text-sm text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Itineraries
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                  alt={itinerary.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-[#8C5A2E] mb-3">
                <span className="px-3 py-1 rounded-full bg-[#DDE3DF]">{itinerary.region}</span>
                <span className="px-3 py-1 rounded-full bg-[#DDE3DF]">{itinerary.difficulty}</span>
              </div>
              <h1 className="text-4xl font-medium text-ink mb-4">{itinerary.title}</h1>
              <p className="text-xl text-ink/80 mb-6">{itinerary.tagline}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <Clock className="w-5 h-5 text-[#8C5A2E]" />
                  <span>{itinerary.duration_hours} hours</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <Calendar className="w-5 h-5 text-[#8C5A2E]" />
                  <span>{itinerary.season}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <MapPin className="w-5 h-5 text-[#8C5A2E]" />
                  <span>{itinerary.region}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <DollarSign className="w-5 h-5 text-[#8C5A2E]" />
                  <span>${itinerary.price_usd} {itinerary.currency}</span>
                </div>
              </div>

              <div className="bg-cream rounded-xl p-6 mb-6">
                <h3 className="font-medium text-ink mb-3">What's Included</h3>
                <p className="text-sm text-ink/70 whitespace-pre-line">{itinerary.includes}</p>
              </div>

              <NavOrExternalLink
                href={resolveItineraryCheckoutUrl(itinerary.slug, itinerary.buy_url)}
                className="block w-full text-center px-6 py-4 rounded-lg bg-[#0A3D33] text-white hover:bg-[#0A3D33]/90 transition-colors text-lg font-medium"
              >
                Buy for ${itinerary.price_usd}
              </NavOrExternalLink>
            </div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-medium text-ink mb-4">About This Route</h2>
            <p className="text-ink/80 leading-relaxed whitespace-pre-line">
              {itinerary.long_description}
            </p>
          </div>

          <div className="bg-[#FFF9E6] border-l-4 border-[#D88B2A] rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#D88B2A] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-ink mb-2">Hazards & Safety Notes</h3>
                <p className="text-sm text-ink/80 leading-relaxed whitespace-pre-line">
                  {itinerary.hazards_notes}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="font-medium text-ink mb-2">Access & Permits</h3>
            <p className="text-sm text-ink/70 leading-relaxed whitespace-pre-line">
              {itinerary.access_permit_notes}
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Buy Bar (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-mist p-4 z-40">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm text-ink/60">Price</div>
            <div className="text-xl font-medium text-[#0A3D33]">${itinerary.price_usd}</div>
          </div>
          <NavOrExternalLink
            href={resolveItineraryCheckoutUrl(itinerary.slug, itinerary.buy_url)}
            className="px-6 py-3 rounded-lg bg-[#0A3D33] text-white hover:bg-[#0A3D33]/90 transition-colors font-medium"
          >
            Buy Now
          </NavOrExternalLink>
        </div>
      </div>
    </div>
  );
}
