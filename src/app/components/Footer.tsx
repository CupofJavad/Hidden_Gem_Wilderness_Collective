import { Link } from 'react-router';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { NavOrExternalLink } from './NavOrExternalLink';
import { getDonateHref, getFooterNewsletterHref } from '../config/site';

export function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Shop Itineraries', href: '/itineraries' },
      { name: 'Adventures Calendar', href: '/calendar' },
      { name: 'Membership', href: '/membership' },
      { name: 'Shop Merch', href: '/merch' },
      { name: 'Blog & Tips', href: '/blog' },
      { name: 'About', href: '/about' },
      { name: 'Resources', href: '/resources' },
      { name: 'Contact', href: '/contact' }
    ],
    legal: [
      { name: 'Terms', href: '/legal/terms' },
      { name: 'Privacy', href: '/legal/privacy' },
      { name: 'Disclaimer', href: '/legal/disclaimer' },
      { name: 'Participation Notice', href: '/legal/participation' }
    ],
    social: [
      { name: 'Instagram', href: 'https://instagram.com/hiddengemcollective', icon: Instagram },
      { name: 'Discord', href: 'https://discord.gg/hiddengemcollective', icon: MessageCircle },
      { name: 'YouTube', href: 'https://youtube.com/@hiddengemcollective', icon: Youtube }
    ]
  };

  return (
    <footer className="bg-[#1F2926] text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#0A3D33] flex items-center justify-center">
                <span className="text-cream font-bold text-sm">HG</span>
              </div>
              <span className="font-medium">Hidden Gem</span>
            </div>
            <p className="text-sm text-cream/80 leading-relaxed">
              Escape the screen, find real people, collect real stories.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium mb-4">Explore</h3>
            <ul className="space-y-2">
              {navigation.main.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-cream/80 hover:text-cream transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Community</h3>
            <ul className="space-y-2">
              {navigation.main.slice(5).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-cream/80 hover:text-cream transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-medium mb-4">Stay Connected</h3>
            <div className="mb-4">
              <NavOrExternalLink
                href={getFooterNewsletterHref()}
                className="inline-block text-sm px-4 py-2 rounded-lg bg-[#5A9BC0] text-white hover:bg-[#4A8BAF] transition-colors"
              >
                Join Newsletter
              </NavOrExternalLink>
            </div>
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/80 hover:text-cream transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="mt-4">
              <NavOrExternalLink
                href={getDonateHref()}
                className="text-sm text-[#D88B2A] hover:underline"
              >
                Support the Collective →
              </NavOrExternalLink>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-cream/20 pt-8 mb-8">
          <p className="text-xs text-cream/70 leading-relaxed max-w-4xl">
            Self-guided and peer-organized experiences only. Hidden Gem Wilderness Collective is not a commercial guiding service. 
            Participants are responsible for their own safety, permits, and decisions.
          </p>
        </div>

        {/* Legal Links & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-cream/20 pt-8">
          <div className="flex flex-wrap justify-center gap-4">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-xs text-cream/70 hover:text-cream transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <p className="text-xs text-cream/70">
            © 2026 Hidden Gem Wilderness Collective. Founded by Javad Khoshnevisan.
          </p>
        </div>
      </div>
    </footer>
  );
}
