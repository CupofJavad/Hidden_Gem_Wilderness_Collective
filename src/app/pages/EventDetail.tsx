import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, Calendar as CalendarIcon, Users, DollarSign, Clock, AlertTriangle } from 'lucide-react';
import { events } from '../data/events';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { resolveEventBadgeCheckoutUrl } from '../config/site';
import { NavOrExternalLink } from '../components/NavOrExternalLink';

export default function EventDetail() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return <Navigate to="/calendar" replace />;
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/calendar"
            className="inline-flex items-center text-sm text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Calendar
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
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80"
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm text-[#8C5A2E] mb-3">
                <span className="px-3 py-1 rounded-full bg-[#DDE3DF]">{event.activity_type}</span>
                {event.featured && (
                  <span className="px-3 py-1 rounded-full bg-[#D88B2A] text-white">Featured</span>
                )}
              </div>
              <h1 className="text-4xl font-medium text-ink mb-4">{event.title}</h1>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <CalendarIcon className="w-5 h-5 text-[#8C5A2E]" />
                  <span>{event.month} {event.day}, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <Clock className="w-5 h-5 text-[#8C5A2E]" />
                  <span>{event.duration_label}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <Users className="w-5 h-5 text-[#8C5A2E]" />
                  <span>{event.capacity} spots available</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/70">
                  <DollarSign className="w-5 h-5 text-[#8C5A2E]" />
                  <span>${event.badge_price_usd} badge fee</span>
                </div>
              </div>

              <div className="bg-cream rounded-xl p-6 mb-6">
                <h3 className="font-medium text-ink mb-3">Event Overview</h3>
                <p className="text-sm text-ink/70 leading-relaxed">
                  {event.teaser_description}
                </p>
                {event.insider_price_usd && (
                  <div className="mt-4 pt-4 border-t border-mist">
                    <p className="text-sm text-ink/60">
                      Collective Insider pricing: <span className="font-medium text-[#0A3D33]">${event.insider_price_usd}</span>
                    </p>
                  </div>
                )}
              </div>

              <NavOrExternalLink
                href={resolveEventBadgeCheckoutUrl(event.slug)}
                className="block w-full text-center px-6 py-4 rounded-lg bg-[#0A3D33] text-white hover:bg-[#0A3D33]/90 transition-colors text-lg font-medium mb-3"
              >
                Claim Your Badge (${event.badge_price_usd})
              </NavOrExternalLink>
              <p className="text-xs text-center text-ink/60">
                Optional donation: up to ${event.donation_suggested_usd_max}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-medium text-ink mb-4">What to Bring</h2>
            <p className="text-ink/80 leading-relaxed whitespace-pre-line">
              {event.gear_list}
            </p>
          </div>

          <div className="bg-[#FFF9E6] border-l-4 border-[#D88B2A] rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#D88B2A] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-ink mb-2">Safety Summary</h3>
                <p className="text-sm text-ink/80 leading-relaxed whitespace-pre-line">
                  {event.safety_summary}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="text-xl font-medium text-ink mb-4">Important Notes</h3>
            <ul className="space-y-3 text-sm text-ink/70">
              <li className="flex items-start gap-2">
                <span className="text-[#0A3D33] mt-0.5">•</span>
                <span>This is a peer-organized experience, not a commercial guided trip.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A3D33] mt-0.5">•</span>
                <span>All participants are responsible for their own safety and decisions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A3D33] mt-0.5">•</span>
                <span>Badge fees cover coordination, permits (if required), and group resources.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A3D33] mt-0.5">•</span>
                <span>Location details provided after registration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0A3D33] mt-0.5">•</span>
                <span>Cancellation policy: full refund up to 7 days before event.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
