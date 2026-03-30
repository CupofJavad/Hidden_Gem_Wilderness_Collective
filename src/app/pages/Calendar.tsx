import { useState } from 'react';
import { Link } from 'react-router';
import { events } from '../data/events';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Calendar() {
  const [selectedActivityType, setSelectedActivityType] = useState<string>('All');

  const activityTypes = ['All', 'Hiking', 'Water', 'Backpacking', 'Fishing', 'Soaking', 'Photography', 'Social'];
  
  const filteredEvents = selectedActivityType === 'All'
    ? events
    : events.filter(e => e.activity_type === selectedActivityType);

  // Group events by month
  const eventsByMonth = filteredEvents.reduce((acc, event) => {
    if (!acc[event.month]) {
      acc[event.month] = [];
    }
    acc[event.month].push(event);
    return acc;
  }, {} as Record<string, typeof events>);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="bg-[#0A3D33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">
            Adventures Calendar
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Peer-organized outdoor experiences throughout the year. Pay the badge fee, show up ready, make friends.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <span className="text-sm text-ink/70 mr-2 whitespace-nowrap">Filter by:</span>
            {activityTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedActivityType(type)}
                className={`px-4 py-2 text-sm rounded-lg whitespace-nowrap transition-colors ${
                  selectedActivityType === type
                    ? 'bg-[#0A3D33] text-white'
                    : 'bg-cream text-ink hover:bg-mist'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(eventsByMonth).map(([month, monthEvents]) => (
            <div key={month} className="mb-12">
              <h2 className="text-2xl font-medium text-ink mb-6 pb-2 border-b-2 border-[#0A3D33]">
                {month} 2026
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {monthEvents.map((event) => (
                  <Link
                    key={event.id}
                    to={`/calendar/${event.slug}`}
                    className="group bg-white rounded-xl overflow-hidden border border-mist hover:border-[#0A3D33] transition-all hover:shadow-lg"
                  >
                    <div className="aspect-[4/3] bg-mist relative overflow-hidden">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80"
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-[#D88B2A] text-white px-2 py-1 rounded text-xs font-medium">
                        ${event.badge_price_usd}
                      </div>
                      {event.featured && (
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-ink px-2 py-1 rounded text-xs font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between text-xs text-[#8C5A2E] mb-2">
                        <span>{month} {event.day}</span>
                        <span className="px-2 py-0.5 rounded-full bg-[#DDE3DF]">
                          {event.activity_type}
                        </span>
                      </div>
                      <h3 className="font-medium text-ink mb-2 group-hover:text-[#0A3D33] transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-ink/70 mb-3 line-clamp-2">
                        {event.teaser_description}
                      </p>
                      <div className="text-xs text-ink/60">
                        {event.duration_label} • {event.capacity} spots
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
