
import React, { useContext } from "react";
import { TargetContext } from "../../TargetContext";

import ContactBtn from "../../../../components/ContactBtn";

import "./Section2.scss"

// Image imports
import s2example from "../../assets/s2-example.png"

export function Section2() {
  const targetRef = useContext(TargetContext);

  return (
    <section className="s2" ref={targetRef}>
      <div className="s2-top-wrapper">
        <div className="s2-box">
          <img src={s2example} alt="Phone, tablet, and monitor example designs of our websites" className="s2-example-img" />
        </div>
        <div className="s2-box">
          <h1 className="s2-h1">Bespoke website design tailored for <span className="s2-span"><u>YOU</u></span></h1>
        </div>
      </div>
      <ContactBtn></ContactBtn>
    </section>
  );
}