import { useState } from 'react';
import { NavOrExternalLink } from './NavOrExternalLink';
import { resolveMembershipTierHref } from '../config/site';

interface PricingToggleProps {
  onToggle: (isYearly: boolean) => void;
}

export function PricingToggle({ onToggle }: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    const newValue = !isYearly;
    setIsYearly(newValue);
    onToggle(newValue);
  };

  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <span className={`text-sm ${!isYearly ? 'text-ink font-medium' : 'text-ink/60'}`}>
        Monthly
      </span>
      <button
        onClick={handleToggle}
        className="relative w-14 h-7 bg-mist rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A9BC0] focus:ring-offset-2"
        role="switch"
        aria-checked={isYearly}
        aria-label="Toggle between monthly and yearly pricing"
      >
        <span
          className={`absolute top-0.5 left-0.5 w-6 h-6 bg-[#0A3D33] rounded-full transition-transform duration-200 ${
            isYearly ? 'translate-x-7' : 'translate-x-0'
          }`}
        />
      </button>
      <span className={`text-sm ${isYearly ? 'text-ink font-medium' : 'text-ink/60'}`}>
        Yearly
        {isYearly && (
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[#D88B2A] text-white">
            Save ~15%
          </span>
        )}
      </span>
    </div>
  );
}

interface Tier {
  tierKey: 'free' | 'badge' | 'insider' | 'patron';
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const tiers: Tier[] = [
  {
    tierKey: 'free',
    name: 'Free Explorer',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Access to public blog content',
      'Event calendar visibility',
      'Newsletter subscription',
      'Community Discord (view only)'
    ],
    cta: 'Join Free'
  },
  {
    tierKey: 'badge',
    name: 'Badge Member',
    monthlyPrice: 12,
    yearlyPrice: 120,
    features: [
      'All Free Explorer benefits',
      'Event registration (badge fee applies)',
      'Active Discord participation',
      'Member forum access',
      '10% off itinerary purchases'
    ],
    cta: 'Become a Member',
    highlighted: true
  },
  {
    tierKey: 'insider',
    name: 'Collective Insider',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      'All Badge Member benefits',
      'Discounted event badges ($10-20 off)',
      'Gear lending library access',
      'Priority event registration',
      '20% off itinerary purchases',
      'Quarterly member gatherings'
    ],
    cta: 'Go Insider'
  },
  {
    tierKey: 'patron',
    name: 'Collective Patron',
    monthlyPrice: 59,
    yearlyPrice: 590,
    features: [
      'All Insider benefits',
      'Unlimited itinerary library access',
      'Free event badge (1 per month)',
      'Private trip coordination support',
      'Annual patron summit',
      'Founding member patch'
    ],
    cta: 'Become a Patron'
  }
];

export function PricingTable() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div>
      <PricingToggle onToggle={setIsYearly} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-xl p-6 ${
              tier.highlighted
                ? 'bg-white border-2 border-[#0A3D33] shadow-lg'
                : 'bg-white border border-mist'
            }`}
          >
            <h3 className="text-lg font-medium text-ink mb-2">{tier.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-medium text-[#0A3D33]">
                ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
              </span>
              <span className="text-ink/60 text-sm">
                /{isYearly ? 'year' : 'month'}
              </span>
            </div>
            
            <ul className="space-y-3 mb-6 min-h-[200px]">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-ink">
                  <svg
                    className="w-5 h-5 text-[#5A9BC0] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <NavOrExternalLink
              href={resolveMembershipTierHref(tier.tierKey)}
              className={`block w-full text-center px-4 py-2 rounded-lg transition-colors ${
                tier.highlighted
                  ? 'bg-[#0A3D33] text-white hover:bg-[#0A3D33]/90'
                  : 'bg-[#5A9BC0] text-white hover:bg-[#4A8BAF]'
              }`}
            >
              {tier.cta}
            </NavOrExternalLink>
          </div>
        ))}
      </div>
    </div>
  );
}
