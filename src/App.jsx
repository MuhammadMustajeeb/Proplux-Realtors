import Hero from './components/Hero';
import Features from './components/Features';
import Offer from './components/Offer';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Features />
      <Offer />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
