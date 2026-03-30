import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah T.',
    location: 'Sacramento',
    quote: 'I showed up nervous and solo. Within an hour we were laughing like old friends around the fire.'
  },
  {
    name: 'Mike R.',
    location: 'Bay Area',
    quote: 'Slow river, kind people — the opposite of my Slack threads.'
  },
  {
    name: 'Priya K.',
    location: 'Davis',
    quote: 'Small group, big warmth. Stories I only tell under stars.'
  },
  {
    name: 'Jordan L.',
    location: 'Oakland',
    quote: 'Friends who actually RSVP. The calendar keeps me honest.'
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Testimonial Content */}
      <div
        className="text-center px-8 py-12"
        role="region"
        aria-live="polite"
        aria-atomic="true"
      >
        <blockquote className="text-xl md:text-2xl text-ink italic mb-6">
          "{testimonials[currentIndex].quote}"
        </blockquote>
        <cite className="text-[#8C5A2E] not-italic">
          <strong>{testimonials[currentIndex].name}</strong>, {testimonials[currentIndex].location}
        </cite>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white border border-mist hover:border-[#0A3D33] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A9BC0]"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5 text-ink" />
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A9BC0] focus:ring-offset-2 ${
                index === currentIndex ? 'bg-[#0A3D33]' : 'bg-mist'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white border border-mist hover:border-[#0A3D33] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5A9BC0]"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5 text-ink" />
        </button>
      </div>
    </div>
  );
}
