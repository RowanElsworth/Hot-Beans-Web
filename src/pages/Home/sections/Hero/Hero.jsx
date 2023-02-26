
import React, { useContext } from "react";
import { TargetContext } from "../../TargetContext";

import "./Hero.scss"

export function Hero({ targetRef }) {
  const handleScrollClick = () => {
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }; 

  return (
    <section className="hero">
      <div className="rocket-ship">
      </div>
      <button className="arrow-down" onClick={handleScrollClick}>
        <div></div>
        Explore ↓
      </button>
    </section>
  );
}
