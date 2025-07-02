import Hero from './components/Hero';
import Features from './components/Features';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StickyFooterCTA from './components/StickyFooterCTA'
import CaseStudy from './components/CaseStudy';
import Navbar from './components/Navbar';
import ScrollProgress from "./components/ScrollProgress";
import Pricing from './components/Pricing';
import MeetPropLuxVideo from './components/MeetPropluxVideo';
import ValueCalculator from './components/ValueCalculator';
import StickyCTA from './components/StickyCTA';
import GuaranteeBadge from './components/GuaranteeBadge';
import BonusStack from './components/BonusStack';
import CountdownTimer from './components/CountdownTimer';
import ShareCTA from './components/ShareCTA';
import FloatingChatDrawer from './components/FloatingChatDrawer';
import SEOHelmet from './components/SEOHelmet'; 


function App() {
  return (
    <div className="bg-black text-white">
      <SEOHelmet />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <ValueCalculator />
      <Features />
      <Testimonials />
      <CaseStudy />
      <Offer />
      <CountdownTimer />
      <BonusStack />
      <GuaranteeBadge />
      <Pricing />
      <MeetPropLuxVideo />
      <CTA />
      <ShareCTA />
      <ContactForm />
      {/* <StickyFooterCTA /> */}
      <StickyCTA />
      <FloatingChatDrawer />
      <Footer />

    </div>
  );
}

export default App;
