import { Link } from 'react-router';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { NavOrExternalLink } from './NavOrExternalLink';
import { getCartHref, getMemberLoginHref } from '../config/site';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop Itineraries', href: '/itineraries' },
    { name: 'Adventures Calendar', href: '/calendar' },
    { name: 'Membership & Badges', href: '/membership' },
    { name: 'Shop Merch', href: '/merch' },
    { name: 'Blog & Tips', href: '/blog' },
    { name: 'About the Collective', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-mist">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0A3D33] flex items-center justify-center">
                <span className="text-cream font-bold text-sm">HG</span>
              </div>
              <span className="hidden sm:block font-medium text-ink">Hidden Gem</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm text-ink hover:text-[#0A3D33] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Utilities */}
          <div className="flex items-center gap-4">
            <button
              className="text-ink hover:text-[#0A3D33] transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <NavOrExternalLink
              href={getMemberLoginHref()}
              className="hidden sm:inline-block text-sm text-ink hover:text-[#0A3D33] transition-colors"
            >
              Member Login
            </NavOrExternalLink>
            <a
              href="#newsletter"
              className="hidden sm:inline-block text-sm px-4 py-2 rounded-lg bg-[#5A9BC0] text-white hover:bg-[#4A8BAF] transition-colors"
            >
              Join Free
            </a>
            <NavOrExternalLink
              href={getCartHref()}
              className="text-ink hover:text-[#0A3D33] transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
            </NavOrExternalLink>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-ink hover:text-[#0A3D33] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-mist">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-ink hover:text-[#0A3D33] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <NavOrExternalLink
                href={getMemberLoginHref()}
                className="text-sm text-ink hover:text-[#0A3D33] transition-colors py-2"
              >
                Member Login
              </NavOrExternalLink>
              <a
                href="#newsletter"
                className="text-sm text-center px-4 py-2 rounded-lg bg-[#5A9BC0] text-white hover:bg-[#4A8BAF] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join Free
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
