import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NavOrExternalLink } from '../components/NavOrExternalLink';
import { resolveMembershipTierHref } from '../config/site';

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-[#0A3D33] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">About the Collective</h1>
          <p className="text-xl text-white/90">
            A peer-organized community exploring Northern California's hidden gems with intention, care, and curiosity.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-ink mb-6">Our Promise</h2>
          <p className="text-xl text-ink/80 leading-relaxed mb-6">
            Escape the screen, find real people, collect real stories.
          </p>
          <p className="text-ink/70 leading-relaxed">
            Hidden Gem Wilderness Collective exists because too many of us spend our days staring at rectangles, 
            craving connection with wild places and genuine humans. We're not here to monetize your FOMO or 
            turn secret spots into Instagram geotags. We're here to build a community that explores responsibly, 
            shares generously, and leaves places better than we found them.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
                alt="Javad Khoshnevisan"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-medium text-ink mb-4">Meet Javad</h2>
              <p className="text-ink/70 leading-relaxed mb-4">
                Javad Khoshnevisan founded Hidden Gem in 2025 after years of solo Sierra backpacking trips 
                where he'd cross paths with strangers who became campfire friends—then never see them again.
              </p>
              <p className="text-ink/70 leading-relaxed mb-4">
                Based in Northern California, Javad believes the best adventures happen when you show up 
                prepared, stay curious, and trust that the right people will find each other on the trail.
              </p>
              <p className="text-ink/70 leading-relaxed">
                He's not a professional guide. He's a peer convener who thinks we all deserve more sunsets, 
                fewer notifications, and friends who actually show up when they RSVP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center text-ink mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-medium text-ink mb-3">Safety-Forward</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                Every trip has clear protocols, experienced anchors, and emergency plans. Peer-organized 
                doesn't mean unprepared.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-ink mb-3">Community-First</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                We prioritize member experience over growth metrics. Small groups, thoughtful pacing, 
                and inclusive vibes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-ink mb-3">Stewardship-Minded</h3>
              <p className="text-sm text-ink/70 leading-relaxed">
                Leave No Trace isn't optional. We coordinate with land managers and cap group sizes 
                to protect fragile places.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-ink mb-12 text-center">The Journey So Far</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-[#8C5A2E] font-medium">2024</div>
              <div>
                <h4 className="font-medium text-ink mb-1">The Idea</h4>
                <p className="text-sm text-ink/70">
                  Javad starts organizing informal group hikes via shared Google Docs and WhatsApp threads.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-[#8C5A2E] font-medium">2025</div>
              <div>
                <h4 className="font-medium text-ink mb-1">Official Launch</h4>
                <p className="text-sm text-ink/70">
                  Hidden Gem Wilderness Collective goes live with structured membership tiers and a full event calendar.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-[#8C5A2E] font-medium">2026</div>
              <div>
                <h4 className="font-medium text-ink mb-1">Today</h4>
                <p className="text-sm text-ink/70">
                  500+ members, 24 annual events, and a growing library of self-guided itineraries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A3D33] text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">Join Us on the Trail</h2>
          <p className="text-white/90 mb-8">
            Create a free account today and start exploring Northern California's hidden gems with us.
          </p>
          <NavOrExternalLink
            href={resolveMembershipTierHref('free')}
            className="inline-block px-8 py-4 rounded-lg bg-white text-[#0A3D33] hover:bg-white/90 transition-colors font-medium"
          >
            Get Started
          </NavOrExternalLink>
        </div>
      </section>
    </div>
  );
}
