
import { useEffect } from 'react';

// import { Link } from "react-router-dom"

import { Header } from "../../components/Header"
import { Footer } from "../../components/footer"
import "./About.scss"

// Image imports
import Ismael from "./Ismael.png"
import Sam from "./Sam no BG.png"
import bg from "./teamBackground.webp"

export default function App() {
  useEffect(() => {
    document.title = "Hot Beans Web | About"
  }, []);

  return (
    <>
      <Header />
      <div className="snap-wrapper">
        <section className="about-hero">
          <h1>About Us.</h1>
          <p>Come and see what we're about.</p>
        </section>

        <section className="about-information">
          <div className="info-container">
            <p>Founded in 2015, we are a website development company based in Nottingham. Our team consists of talented and experienced web developers who are dedicated to creating high-quality and visually appealing websites for our clients.</p>
          </div>
          <div className="info-container">
            <p>We specialise in building websites for all businesses, startups or giants. Our goal is to provide our clients with a professional online presence that helps them stand out in their industry and attract new customers.</p>
          </div>
          <div className="info-container">
            <p>Our team has a wide range of skills, including expertise in HTML, CSS, JavaScript, and various content management systems such as WordPress and Drupal. We are also proficient in responsive design, ensuring that our clients' websites are optimized for viewing on any device.</p>
          </div>
        </section>
        <section className="meet-team">
          <h1>Meet the Team</h1>
          <div className="team-container">
            <div className="person">
              <div className="person-img-container">
                <img className="circle" src={bg} alt=""  />
                <img className="person-img" src={Ismael} alt="Ismael hard at work." />
              </div>
              <p>Ismael</p>
              <p>Managing Director</p>
            </div>
            <div className="person">
              <div className="person-img-container">
                <img className="circle" src={bg} alt=""  />
                <img className="person-img" src={Sam} alt="Sam smiling with his thumbs up." />
              </div>
              <p>Karen</p>
              <p>Graphic Lead</p>
            </div>
            <div className="person">
              <div className="person-img-container">
                <img className="circle" src={bg} alt=""  />
                <img className="person-img" src={Sam} alt="Sam smiling with his thumbs up." />
              </div>
              <p>Sam</p>
              <p>Quality-Control Intern</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}