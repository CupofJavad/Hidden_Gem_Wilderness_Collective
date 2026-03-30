import { Link } from 'react-router';
import { posts } from '../data/posts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Blog() {
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-[#0A3D33] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Blog & Tips</h1>
          <p className="text-xl text-white/90">
            Field guides, safety tips, and the philosophy behind peer-organized adventure.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/blog/${featuredPost.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-cream rounded-xl overflow-hidden border border-mist hover:border-[#0A3D33] transition-all"
          >
            <div className="aspect-[4/3] lg:aspect-auto bg-mist relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&q=80"
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="text-xs text-[#8C5A2E] mb-2">Featured</div>
              <h2 className="text-3xl font-medium text-ink mb-4 group-hover:text-[#0A3D33] transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-ink/70 mb-4 leading-relaxed">{featuredPost.excerpt}</p>
              <div className="text-sm text-ink/60">Published {featuredPost.published_at}</div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-xl overflow-hidden border border-mist hover:border-[#0A3D33] transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-mist relative overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-ink mb-2 group-hover:text-[#0A3D33] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink/70 mb-3 line-clamp-3">{post.excerpt}</p>
                  <div className="text-xs text-ink/60">{post.published_at}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
