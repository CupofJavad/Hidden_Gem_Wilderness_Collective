import { Download, ExternalLink } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: 'Leave No Trace Seven Principles',
      description: 'Essential outdoor ethics for responsible recreation',
      type: 'PDF Guide',
      url: '#'
    },
    {
      title: 'Wilderness First Aid Basics',
      description: 'Quick reference for common trail injuries',
      type: 'PDF Guide',
      url: '#'
    },
    {
      title: 'NorCal Trail Condition Reports',
      description: 'Up-to-date info on access and closures',
      type: 'External Link',
      url: '#'
    },
    {
      title: 'Backcountry Permit Resources',
      description: 'Where and how to get permits for popular areas',
      type: 'PDF Guide',
      url: '#'
    },
    {
      title: 'Gear Checklist Template',
      description: 'Customizable packing list for various trip types',
      type: 'Google Doc',
      url: '#'
    },
    {
      title: 'Member Photo Gallery',
      description: 'Community-contributed trip photos (members only)',
      type: 'External Link',
      url: '#'
    }
  ];

  const partners = [
    {
      name: 'Sierra Nevada Conservancy',
      description: 'Conservation and stewardship partner',
      url: '#'
    },
    {
      name: 'California State Parks Foundation',
      description: 'Supporting public land access',
      url: '#'
    },
    {
      name: 'Local outdoor retailers',
      description: 'Gear lending library supporters',
      url: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-[#0A3D33] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Resources</h1>
          <p className="text-xl text-white/90">
            Guides, references, and tools to help you adventure safely and responsibly.
          </p>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-ink mb-8">Knowledge Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                className="group bg-white rounded-xl p-6 border border-mist hover:border-[#0A3D33] transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs px-2 py-1 rounded-full bg-[#DDE3DF] text-[#8C5A2E]">
                    {resource.type}
                  </div>
                  {resource.type === 'PDF Guide' ? (
                    <Download className="w-5 h-5 text-[#5A9BC0] group-hover:text-[#4A8BAF] transition-colors" />
                  ) : (
                    <ExternalLink className="w-5 h-5 text-[#5A9BC0] group-hover:text-[#4A8BAF] transition-colors" />
                  )}
                </div>
                <h3 className="font-medium text-ink mb-2 group-hover:text-[#0A3D33] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-ink/70">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-ink mb-4">Partners & Supporters</h2>
          <p className="text-ink/70 mb-8">
            Organizations we collaborate with to protect wild spaces and support sustainable recreation.
          </p>
          <div className="space-y-6">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                className="block p-6 bg-cream rounded-xl border border-mist hover:border-[#0A3D33] transition-all"
              >
                <h3 className="font-medium text-ink mb-1">{partner.name}</h3>
                <p className="text-sm text-ink/70">{partner.description}</p>
              </a>
            ))}
          </div>
          <div className="mt-8 p-6 bg-[#FFF9E6] rounded-xl border-l-4 border-[#D88B2A]">
            <p className="text-sm text-ink/70">
              <strong>Disclaimer:</strong> Partner links are for informational purposes. Hidden Gem does not receive 
              compensation for referrals. We share resources we genuinely use and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-ink mb-8">Emergency Contacts</h2>
          <div className="bg-white rounded-xl p-8 border border-mist">
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-medium text-ink mb-1">Emergency Services</div>
                <div className="text-ink/70">Call 911 for immediate life-threatening emergencies</div>
              </div>
              <div>
                <div className="font-medium text-ink mb-1">Search and Rescue</div>
                <div className="text-ink/70">Contact local sheriff's office or park rangers</div>
              </div>
              <div>
                <div className="font-medium text-ink mb-1">Hidden Gem Emergency Line</div>
                <div className="text-ink/70">For trip-related emergencies only: [Emergency contact placeholder]</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
