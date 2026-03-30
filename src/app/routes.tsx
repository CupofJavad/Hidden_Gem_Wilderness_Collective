import { createBrowserRouter } from 'react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import ShopItineraries from './pages/ShopItineraries';
import ItineraryDetail from './pages/ItineraryDetail';
import Calendar from './pages/Calendar';
import EventDetail from './pages/EventDetail';
import Membership from './pages/Membership';
import ShopMerch from './pages/ShopMerch';
import MerchDetail from './pages/MerchDetail';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import Participation from './pages/Participation';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'itineraries', Component: ShopItineraries },
      { path: 'itineraries/:slug', Component: ItineraryDetail },
      { path: 'calendar', Component: Calendar },
      { path: 'calendar/:slug', Component: EventDetail },
      { path: 'membership', Component: Membership },
      { path: 'merch', Component: ShopMerch },
      { path: 'merch/:slug', Component: MerchDetail },
      { path: 'blog', Component: Blog },
      { path: 'blog/:slug', Component: PostDetail },
      { path: 'about', Component: About },
      { path: 'resources', Component: Resources },
      { path: 'contact', Component: Contact },
      { path: 'legal/disclaimer', Component: Disclaimer },
      { path: 'legal/participation', Component: Participation },
      { path: 'legal/privacy', Component: Privacy },
      { path: 'legal/terms', Component: Terms },
      { path: '*', Component: NotFound }
    ]
  }
]);
