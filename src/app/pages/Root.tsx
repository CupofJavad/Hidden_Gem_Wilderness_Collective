import { Outlet } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Analytics } from '../components/Analytics';

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Analytics />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
