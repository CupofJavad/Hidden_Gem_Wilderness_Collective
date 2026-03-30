import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-medium text-[#0A3D33] mb-4">404</h1>
        <h2 className="text-2xl font-medium text-ink mb-4">Trail Not Found</h2>
        <p className="text-ink/70 mb-8">
          Looks like you've wandered off the beaten path. Let's get you back to familiar terrain.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-[#0A3D33] text-white hover:bg-[#0A3D33]/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
