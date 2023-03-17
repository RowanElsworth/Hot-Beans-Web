
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Careers from './pages/Careers/Careers';
import Contact from './pages/Contact/Contact';
import Resources from './pages/Resources/Resources';
import PageNotFound from './pages/PageNotFound/PageNotFound'

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Careers" element={<Careers />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Resources" element={<Resources />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
