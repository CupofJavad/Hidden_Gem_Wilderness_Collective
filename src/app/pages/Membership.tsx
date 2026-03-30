import { PricingTable } from '../components/PricingTable';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { NavOrExternalLink } from '../components/NavOrExternalLink';
import { resolveMembershipTierHref } from '../config/site';

export default function Membership() {
  const faqs = [
    {
      question: "What's the difference between Badge Member and Collective Insider?",
      answer: "Badge Members pay full event badge fees and get 10% off itineraries. Insiders get $10-20 off event badges, 20% off itineraries, and access to the gear lending library."
    },
    {
      question: "Can I cancel my membership?",
      answer: "Yes, you can cancel anytime. Monthly memberships stop at the end of your billing cycle. Annual memberships are non-refundable after 30 days but you retain access through the full year."
    },
    {
      question: "Do membership fees cover event badge fees?",
      answer: "No. Membership gives you access and discounts, but event badge fees are separate and cover per-event costs like permits and coordination."
    },
    {
      question: "What's included in the gear lending library?",
      answer: "Bear canisters, trekking poles, camp stoves, water filters, and first aid kits. Available to Badge Members and Insiders. Request items 2 weeks before your trip."
    },
    {
      question: "Is this a commercial guiding service?",
      answer: "No. Hidden Gem Wilderness Collective organizes peer-led experiences. Participants are responsible for their own safety and decisions. We provide coordination, not professional guiding."
    },
    {
      question: "Can I upgrade from Badge Member to Insider?",
      answer: "Yes! Contact us and we'll prorate your current membership toward the upgrade."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section id="member-account" className="bg-[#0A3D33] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">
            Membership & Badges
          </h1>
          <p className="text-xl text-white/90">
            Choose the level that fits your adventure style. All memberships support sustainable collective operations.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTable />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center text-ink mb-12">
            How Membership Works
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0A3D33] text-white flex items-center justify-center font-medium">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium text-ink mb-2">Choose Your Tier</h3>
                <p className="text-ink/70">
                  Start with Free Explorer to browse, or jump into Badge Member to participate in events and access member forums.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0A3D33] text-white flex items-center justify-center font-medium">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium text-ink mb-2">Browse & Register</h3>
                <p className="text-ink/70">
                  Explore the calendar, read itinerary guides, and register for events. Insiders get priority registration and discounted badge fees.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0A3D33] text-white flex items-center justify-center font-medium">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium text-ink mb-2">Show Up & Connect</h3>
                <p className="text-ink/70">
                  Receive pre-trip details, meet your group, and adventure together. Share stories in the Discord afterward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-center text-ink mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-mist px-6">
                <AccordionTrigger className="text-left font-medium text-ink hover:text-[#0A3D33]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ink/70 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A3D33] text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-medium mb-4">
            Ready to Join the Collective?
          </h2>
          <p className="text-white/90 mb-8">
            Start with a free account and explore. Upgrade anytime to unlock full member benefits.
          </p>
          <NavOrExternalLink
            href={resolveMembershipTierHref('free')}
            className="inline-block px-8 py-4 rounded-lg bg-white text-[#0A3D33] hover:bg-white/90 transition-colors font-medium"
          >
            Create Free Account
          </NavOrExternalLink>
        </div>
      </section>
    </div>
  );
}
