
// Hooks
import { useEffect, useRef } from 'react';
import { TargetContext } from './TargetContext';

// Component imports
import { Header } from '../../components/Header'
import { Hero } from "./sections/Hero/Hero.jsx";
import { Section2 } from './sections/Section2/Section2';
import { Section3 } from './sections/Section3/Section3';
import { Section4 } from './sections/Section4/Section4';
import { Section5 } from './sections/Section5/Section5-6';
import { Footer } from '../../components/footer'

import "./home.scss"

export default function App() {
  useEffect(() => {
    document.title = "Hot Beans Web | Home"
  }, []);

  // For hero button
  const targetRef = useRef(null);
  
  return (
    <>
      <Header />
      <div className="snap-wrapper">
        <TargetContext.Provider value={targetRef}>
          <div className="App">
            <Hero targetRef={targetRef} />
            <Section2 targetRef={targetRef} />
          </div>
        </TargetContext.Provider>
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    </>
  );
}
