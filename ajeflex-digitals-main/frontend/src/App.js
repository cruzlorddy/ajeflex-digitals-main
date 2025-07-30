import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WebDevelopment from './pages/services/WebDevelopment';
import GraphicDesign from './pages/services/GraphicDesign';
import SocialMediaGrowth from './pages/services/SocialMediaGrowth';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import OurCompaniesPage from './pages/Powered-by-us';
import GetStarted from './pages/Get-started';
import StreamlinedChatWidget from './pages/StreamlineChatWidgets';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/social-media-growth" element={<SocialMediaGrowth />} />
          <Route path="/powered-by-us" element={<OurCompaniesPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/start" element={<GetStarted />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <StreamlinedChatWidget /> */}
        <ScrollToTop />
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;