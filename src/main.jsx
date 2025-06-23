import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import OfferPage from './components/OfferPage.jsx';
import ThankYou from './components/ThankYou.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/offer" element={<OfferPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  </BrowserRouter>
)


