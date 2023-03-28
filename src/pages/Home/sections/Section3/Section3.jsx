
import { useEffect, useState } from "react";
import { useFadeIn } from "../../../../utils/useFadeIn"

// font awesome icons
import { FaPen, FaSearch, FaMobileAlt, FaCommentAlt } from 'react-icons/fa';

// Image imports
import designs from '../../assets/designs.png';
import flexible from '../../assets/flexible.png';
import seo from '../../assets/SEO.png';
import responsive from '../../assets/responsive.png';

import "./Section3.scss"

export function Section3() {

  const { domRef, isVisible } = useFadeIn();

  // S3 Image changing
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const images = [
    { id: "unique", src: designs, text: "Where everything is built from scratch, no templates" },
    { id: "flexible", src: flexible, text: "Around your needs to ensure we deliver the best product that suits you" },
    { id: "seo", src: seo, text: "Ensures that your site is the one that is viewed, not your competitors" },
    { id: "responsive", src: responsive, text: "Making your site look and feel great on all devices so all clients can be reached" }
  ];

  // S3 - Changes effect every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [index, images.length]);

  // Click handler
  const handleS3Click = index => {
    setIndex(index);
    setSelected(index);
  };

  return (
    <section className="s3">
    <div className={`s3-left-wrapper s3-fade1 ${isVisible ? ' is-visible' : ''}`} ref={domRef}>
      <div className={index === 0 ? "s3-box s3-box-active" : "s3-box"} onClick={() => handleS3Click(0)}>
        <div className="s3-box-icon">
          <FaPen />
        </div>
        <div className="s3-box-text">
          <p>Unique designs</p>
          <p>Where everything is built from scratch, no templates</p>
        </div>
      </div>
      <div className={index === 1 ? "s3-box s3-box-active" : "s3-box"} onClick={() => handleS3Click(1)}>
        <div className="s3-box-icon">
          <FaCommentAlt />
        </div>
        <div className="s3-box-text">
          <p>Flexible creation</p>
          <p>Around your needs to ensure we deliver the best product that suits you</p>
        </div>
      </div>
      <div className={index === 2 ? "s3-box s3-box-active" : "s3-box"} onClick={() => handleS3Click(2)}>
        <div className="s3-box-icon">
          <FaSearch />
        </div>
        <div className="s3-box-text">
          <p>Brilliant SEO</p>
          <p>Ensures that your site is the one that is viewed, not your competitors</p>
        </div>
      </div>
      <div className={index === 3 ? "s3-box s3-box-active" : "s3-box"} onClick={() => handleS3Click(3)}>
        <div className="s3-box-icon">
          <FaMobileAlt />
        </div>
        <div className="s3-box-text">
          <p>Reponsive design</p>
          <p>Making your site look and feel great on all devices so all clients can be reached</p>
        </div>
      </div>
    </div>
    <div className={`s3-right-wrapper s3-fade2 ${isVisible ? ' is-visible' : ''}`} ref={domRef}>
      <div className="s3-right-img">
        <img src={images[index].src} alt="Slider" />
      </div>
      <div className="s3-right-text">
        <p>{images[index].text}</p>
      </div>
    </div>
    </section>
  );
}