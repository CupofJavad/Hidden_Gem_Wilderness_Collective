import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function PostDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-white border-b border-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/blog" className="inline-flex items-center text-sm text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <div className="text-sm text-[#8C5A2E] mb-3">Published {post.published_at}</div>
            <h1 className="text-4xl md:text-5xl font-medium text-ink mb-6">{post.title}</h1>
            <p className="text-xl text-ink/70 leading-relaxed">{post.excerpt}</p>
          </header>

          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=80"
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="text-ink/80 leading-relaxed whitespace-pre-line">
              {post.body}
            </div>
          </div>

          {post.related_itinerary_slugs && (
            <div className="mt-12 pt-8 border-t border-mist">
              <h3 className="text-xl font-medium text-ink mb-4">Related Itineraries</h3>
              <p className="text-sm text-ink/70">
                Explore routes mentioned in this article: {post.related_itinerary_slugs.split(',').join(', ')}
              </p>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
