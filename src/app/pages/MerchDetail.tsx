import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { merchItems } from '../data/merch';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { NavOrExternalLink } from '../components/NavOrExternalLink';
import { resolveMerchCheckoutUrl } from '../config/site';

export default function MerchDetail() {
  const { slug } = useParams();
  const item = merchItems.find((m) => m.slug === slug);

  if (!item) {
    return <Navigate to="/merch" replace />;
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-white border-b border-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/merch" className="inline-flex items-center text-sm text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Shop
          </Link>
        </div>
      </div>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80"
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-sm text-[#8C5A2E] mb-2">{item.category}</div>
              <h1 className="text-4xl font-medium text-ink mb-4">{item.name}</h1>
              <div className="text-3xl font-medium text-[#0A3D33] mb-6">${item.price_usd}</div>
              <p className="text-ink/80 mb-8 leading-relaxed">{item.short_description}</p>
              <NavOrExternalLink
                href={resolveMerchCheckoutUrl(item.slug, item.buy_url)}
                className="block w-full text-center px-6 py-4 rounded-lg bg-[#0A3D33] text-white hover:bg-[#0A3D33]/90 transition-colors text-lg font-medium"
              >
                Add to Cart
              </NavOrExternalLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
