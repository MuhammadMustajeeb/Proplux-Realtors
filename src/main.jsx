import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import OfferPage from './components/OfferPage.jsx';
import ThankYou from './components/ThankYou.jsx';
import ListingVisualizer from './components/ListingVisualizer.jsx';
import BlogList from './pages/blog/BlogList.jsx';
import BlogDetail from './pages/blog/BlogDetail.jsx';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
      {/* Blog Routes */}
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />

      <Route path="/visualizer" element={<ListingVisualizer />} />
    </Routes>  
  </BrowserRouter>
)


