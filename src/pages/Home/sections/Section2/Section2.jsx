import { useContext } from "react";
import { TargetContext } from "../../TargetContext";
import { useFadeIn } from "../../../../utils/useFadeIn"

import ContactBtn from "../../../../components/ContactBtn";

import "./Section2.scss"

// Image imports
import s2example from "../../assets/s2-example.png"

export function Section2() {
  const targetRef = useContext(TargetContext);
  targetRef = targetRef;
  const { domRef, isVisible } = useFadeIn();
  
  return (
    <section className="s2">
      <div className="s2-top-wrapper">
        <div className={`s2-fade1 s2-box ${isVisible ? ' is-visible' : ''}`} ref={domRef}>
          <img src={s2example} alt="Phone, tablet, and monitor example designs of our websites" className="s2-example-img" />
        </div>
        <div className={`s2-fade2 s2-box ${isVisible ? ' is-visible' : ''}`} ref={domRef}>
          <h1 className="s2-h1">Bespoke website design tailored for <span className="s2-span"><u>YOU</u></span></h1>
        </div>
      </div>
      <div className={`s2-fade3 ${isVisible ? ' is-visible' : ''}`} ref={domRef}>
        <ContactBtn />
      </div>
    </section>
  );
}