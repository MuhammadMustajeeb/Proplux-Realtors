import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import OfferPage from './components/OfferPage.jsx';
import ThankYou from './components/ThankYou.jsx';
import BlogHome from "./pages/blog/BlogHome";
import BlogPost1 from "./pages/blog/BlogPost1";
import BlogPost2 from "./pages/blog/BlogPost2.jsx";
import BlogPost3 from "./pages/blog/BlogPost3.jsx";


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
      {/* Blog Routes */}
      <Route path="/blog" element={<BlogHome />} />
      <Route path="/blog/ai-tools-for-realtors" element={<BlogPost1 />} />
      <Route path="/blog/website-conversion-fixes" element={<BlogPost2 />} />
      <Route path="/blog/7-day-launch-plan" element={<BlogPost3 />} />
    </Routes>
  </BrowserRouter>
)


