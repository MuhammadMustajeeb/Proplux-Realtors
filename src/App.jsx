import Hero from './components/Hero';
import Features from './components/Features';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollProgress from "./components/ScrollProgress";
import Pricing from './components/Pricing';
import StickyCTA from './components/StickyCTA';
import GuaranteeBadge from './components/GuaranteeBadge';
import BonusStack from './components/BonusStack';
import CountdownTimer from './components/CountdownTimer';
import ShareCTA from './components/ShareCTA';
import SEOHelmet from './components/SEOHelmet'; 

import { Suspense, lazy } from 'react';

const ValueCalculator = lazy(() => import('./components/ValueCalculator'));
const MeetPropLuxVideo = lazy(() => import('./components/MeetPropluxVideo'));
const CaseStudy = lazy(() => import('./components/CaseStudy'));
const FloatingChatDrawer = lazy(() => import('./components/FloatingChatDrawer'));


function App() {
  return (
    <div className="bg-black text-white">
      <SEOHelmet />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />

      <Suspense fallback={null}>
        <ValueCalculator />
      </Suspense>

      <Offer />
      <CountdownTimer />
      <BonusStack />
      <GuaranteeBadge />
      <Pricing />

      {/* <Suspense fallback={null}>
        <MeetPropLuxVideo />
      </Suspense> */}

      <CTA />

      <Suspense fallback={null}>
        <CaseStudy />
      </Suspense>

      <Suspense fallback={null}>
        <FloatingChatDrawer />
      </Suspense>


      <ShareCTA />
      <ContactForm />
      <StickyCTA />
      <Footer />

    </div>
  );
}

export default App;
