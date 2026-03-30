import { useEffect, useState } from 'react';

export function HeroGradient() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {prefersReducedMotion ? (
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #0A3D33 0%, #5A9BC0 50%, #F8F5F0 100%)'
          }}
        />
      ) : (
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background: 'linear-gradient(135deg, #0A3D33 0%, #5A9BC0 50%, #F8F5F0 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradient 20s ease-in-out infinite'
          }}
        />
      )}
      <style>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
